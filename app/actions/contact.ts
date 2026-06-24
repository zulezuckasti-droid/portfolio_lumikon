"use server";

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

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? site.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Lumikon <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY nije konfigurisan.");
    return {
      success: false,
      message: `${contactSection.form.unavailableMessage} ${site.email}`,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Novi upit sa sajta — ${name}`,
        text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error("Resend API greška:", await response.text());
      return {
        success: false,
        message: `${contactSection.form.errorMessage} ${site.email}`,
      };
    }

    return {
      success: true,
      message: contactSection.form.successMessage,
    };
  } catch (error) {
    console.error("Greška pri slanju kontakt forme:", error);
    return {
      success: false,
      message: `${contactSection.form.errorMessage} ${site.email}`,
    };
  }
}
