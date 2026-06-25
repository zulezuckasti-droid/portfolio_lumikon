This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Kontakt forma i Resend (PRD §7)

Leadovi sa kontakt forme stižu emailom osnivačima preko [Resend](https://resend.com).

1. Napravite nalog na Resend i kreirajte API ključ.
2. Kopirajte env primer i popunite vrednosti:

```bash
cp .env.example .env.local
```

3. U `.env.local` postavite:
   - `RESEND_API_KEY` — API ključ sa Resend dashboarda
   - `CONTACT_TO_EMAIL` — inbox gde stižu leadovi (npr. `kontakt@lumikon.rs`)
   - `CONTACT_FROM_EMAIL` — pošiljalac

**Dev / test:** `CONTACT_FROM_EMAIL=Lumikon <onboarding@resend.dev>` šalje **samo** na email vašeg Resend naloga. Dok ne verifikujete domen `lumikon.rs`, `CONTACT_TO_EMAIL` mora biti ta ista adresa.

**Produkcija (Vercel):** iste env varijable u Project Settings → Environment Variables. Po verifikaciji domena: `CONTACT_FROM_EMAIL=Lumikon <kontakt@lumikon.rs>`.

4. Testirajte slanje pre lansiranja:

```bash
npm run test:contact
```

5. Ručno proverite formu na `/kontakt` ili sekciji Kontakt na početnoj.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Ne zaboravite env varijable (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) u Vercel projektu pre lansiranja.
