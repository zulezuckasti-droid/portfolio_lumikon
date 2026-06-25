import { site } from "@/content/site";

export type ContactLeadPayload = {
  name: string;
  email: string;
  message: string;
};

export type SendContactLeadResult =
  | { ok: true }
  | { ok: false; reason: "missing_api_key" | "api_error"; detail?: string };

export function getContactEmailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    toEmail: process.env.CONTACT_TO_EMAIL ?? site.email,
    fromEmail:
      process.env.CONTACT_FROM_EMAIL ?? "Lumikon <onboarding@resend.dev>",
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildContactLeadEmail(payload: ContactLeadPayload) {
  const { name, email, message } = payload;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return {
    subject: `Novi upit sa sajta — ${name}`,
    text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
    html: `<!DOCTYPE html>
<html lang="sr">
  <body style="margin:0;padding:24px;background:#fafaf9;font-family:system-ui,-apple-system,sans-serif;color:#1c1917;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e7e5e4;border-radius:16px;">
      <tr>
        <td style="padding:24px 24px 8px;">
          <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#78716c;">Novi lead</p>
          <h1 style="margin:0;font-size:20px;font-weight:600;line-height:1.3;">Upit sa Lumikon sajta</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 24px 0;">
          <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#78716c;">Ime</p>
          <p style="margin:0 0 16px;font-size:15px;">${safeName}</p>
          <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#78716c;">Email</p>
          <p style="margin:0 0 16px;font-size:15px;"><a href="mailto:${safeEmail}" style="color:#1c1917;">${safeEmail}</a></p>
          <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#78716c;">Poruka</p>
          <p style="margin:0;font-size:15px;line-height:1.6;">${safeMessage}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <p style="margin:0;font-size:12px;color:#78716c;">Odgovorite direktno na ovaj email — Reply-To je postavljen na adresu pošiljaoca.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  };
}

export async function sendContactLead(
  payload: ContactLeadPayload,
): Promise<SendContactLeadResult> {
  const { apiKey, toEmail, fromEmail } = getContactEmailConfig();

  if (!apiKey) {
    return { ok: false, reason: "missing_api_key" };
  }

  const emailContent = buildContactLeadEmail(payload);

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
        reply_to: payload.email,
        subject: emailContent.subject,
        text: emailContent.text,
        html: emailContent.html,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        reason: "api_error",
        detail: await response.text(),
      };
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      reason: "api_error",
      detail: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
