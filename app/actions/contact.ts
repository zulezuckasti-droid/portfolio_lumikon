"use server";

import { sendContactLead } from "@/lib/send-contact-lead";
import { contactSection, site } from "@/content/site";

export type ContactFormState = {
  success: boolean;
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: NonNullable<ContactFormState["fieldErrors"]> = {};

  if (name.length < 2) {
    fieldErrors.name = "Unesite ime (najmanje 2 karaktera).";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Unesite ispravnu email adresu.";
  }

  if (message.length < 10) {
    fieldErrors.message = "Poruka mora imati najmanje 10 karaktera.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: contactSection.form.validationMessage,
      fieldErrors,
    };
  }

  const result = await sendContactLead({ name, email, message });

  if (!result.ok) {
    if (result.reason === "missing_api_key") {
      console.error("RESEND_API_KEY nije konfigurisan.");
      return {
        success: false,
        message: `${contactSection.form.unavailableMessage} ${site.email}`,
      };
    }

    console.error("Resend API greška:", result.detail);
    return {
      success: false,
      message: `${contactSection.form.errorMessage} ${site.email}`,
    };
  }

  return {
    success: true,
    message: contactSection.form.successMessage,
  };
}
