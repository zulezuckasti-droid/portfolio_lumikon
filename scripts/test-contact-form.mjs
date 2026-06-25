/**
 * Test slanja kontakt forme preko Resend API-ja.
 * Pokretanje: npm run test:contact
 * Zahteva .env.local sa RESEND_API_KEY (kopiraj iz .env.example).
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(filename) {
  const path = resolve(process.cwd(), filename);
  if (!existsSync(path)) {
    return false;
  }

  const content = readFileSync(path, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const rawValue = trimmed.slice(separator + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }

  return true;
}

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    console.error(`\n✗ Nedostaje ${name}.`);
    console.error("  1. Kopiraj .env.example u .env.local");
    console.error("  2. Unesi RESEND_API_KEY sa https://resend.com/api-keys");
    console.error("  3. Pokreni ponovo: npm run test:contact\n");
    process.exit(1);
  }
  return value;
}

const hasEnvLocal = loadEnvFile(".env.local");
if (!hasEnvLocal) {
  console.error("\n✗ Nema .env.local fajla.");
  console.error("  Kopiraj .env.example → .env.local i popuni RESEND_API_KEY.\n");
  process.exit(1);
}

const apiKey = requireEnv("RESEND_API_KEY");
const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "kontakt@lumikon.rs";
const fromEmail =
  process.env.CONTACT_FROM_EMAIL?.trim() || "Lumikon <onboarding@resend.dev>";

const testPayload = {
  name: "Test lead (Lumikon)",
  email: "test@example.com",
  message:
    "Ovo je test poruka sa npm run test:contact — proverite da lead stiže pre lansiranja.",
};

const subject = `Novi upit sa sajta — ${testPayload.name}`;
const text = `Ime: ${testPayload.name}\nEmail: ${testPayload.email}\n\nPoruka:\n${testPayload.message}`;

console.log("→ Slanje test leada preko Resend...");
console.log(`  From: ${fromEmail}`);
console.log(`  To:   ${toEmail}`);

const response = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from: fromEmail,
    to: [toEmail],
    reply_to: testPayload.email,
    subject,
    text,
  }),
});

const body = await response.text();

if (!response.ok) {
  console.error("\n✗ Resend API greška:", response.status, response.statusText);
  console.error(body);

  if (fromEmail.includes("onboarding@resend.dev")) {
    console.error(
      "\nNapomena: onboarding@resend.dev šalje SAMO na email vašeg Resend naloga.",
    );
    console.error(
      "Postavite CONTACT_TO_EMAIL na tu adresu dok ne verifikujete domen lumikon.rs.",
    );
  }

  process.exit(1);
}

console.log("\n✓ Test email poslat.");
console.log("  Proverite inbox (i spam) na:", toEmail);
console.log("  Resend odgovor:", body);
console.log("\nSledeći korak: pošaljite formu na http://localhost:3000/kontakt\n");
