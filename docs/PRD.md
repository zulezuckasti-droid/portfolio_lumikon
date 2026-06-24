# PRD — Lumikon (Veb sajt agencije)

**Verzija:** 1.1
**Datum:** Jun 2026
**Jezik sajta:** Srpski
**Status:** U implementaciji (MVP)

---

## 0. Status implementacije

Poslednje ažuriranje: **24. jun 2026.**

### Temelj projekta — urađeno

| Stavka | Status | Napomena |
| --- | --- | --- |
| Next.js (App Router) + TypeScript + Tailwind CSS | ✅ | Next.js 16, Tailwind v4 |
| shadcn/ui inicijalizacija | ✅ | `components.json`, preset new-york |
| Dizajn tokeni (PRD §8) | ✅ | Amber/zlatna, svetla tema — `app/globals.css` |
| Centralizovani tekstovi | ✅ | `content/site.ts` (srpski) |
| Root layout | ✅ | `app/layout.tsx` — Navbar, Footer, metadata, Open Graph |
| Navbar | ✅ | `components/layout/navbar.tsx` |
| Footer | ✅ | `components/layout/footer.tsx` |
| shadcn Button | ✅ | `components/ui/button.tsx`; CTA u Navbar + Hero |
| Početna stranica (osnova) | ✅ | `app/page.tsx` |

### Sekcije početne (PRD §6)

| Sekcija | Status | Fajl |
| --- | --- | --- |
| 1. Hero | ✅ | `components/sections/hero.tsx` |
| 2. Problem / Rešenje | ✅ | `components/sections/problem-solution.tsx` |
| 3. Usluge | ⬜ | — |
| 4. Zašto Lumikon | ⬜ | — |
| 5. Kako radimo (proces) | ⬜ | — |
| 6. Poverenje | ⬜ | — |
| 7. Kontakt / CTA | ⬜ | — |

**Hero (urađeno):** value-prop naslov, podnaslov, primarni CTA „Kontaktiraj nas", sekundarni „Pogledaj usluge", lista prednosti, suptilni amber gradijenti, CSS mockup sajta (PRD §8).

### Stranice (PRD §5)

| Stranica | Status |
| --- | --- |
| Početna (Home) | 🟡 delimično (Hero + Problem/Rešenje) |
| Usluge | ⬜ |
| O nama | ⬜ |
| Kontakt | ⬜ |
| Blog (struktura) | ⬜ |

### Preostalo za MVP

- Preostale sekcije početne (§6.2–§6.7)
- Stranice Usluge, O nama, Kontakt
- Kontakt forma + email notifikacija (§7)
- SEO: `sitemap.xml`, `robots.txt`, structured data (§9)
- Framer Motion animacije (§8, §10) — opciono, suptilno
- Blog folder struktura (§5, §11)

---

## 1. Pregled proizvoda

Lumikon je nova digitalna agencija (dvoje osnivača) koja pravi moderne, profesionalne veb sajtove za male i srednje biznise. Sajt agencije je **primarni kanal za sticanje poverenja i prikupljanje upita** (leadova).

**Glavni cilj sajta:** posetilac u prvih 5 sekundi pomisli *„ovo je tačno ono što mi treba"* i pošalje upit preko kontakt forme.

**Glavna metrika uspeha:** broj poslatih kontakt formi (leadova).

---

## 2. Pozicioniranje brenda

- **Pozicija:** Moderan all-in-one digitalni partner (veb je srž; branding, vizuali i automatizacija postoje, ali se **ne etiketiraju kao „AI"** — utopljeni su u usluge).
- **Ime „Lumikon":** asocira na **svetlost i jasnoću** — „izvodimo biznise na svetlo", činimo ih vidljivim i profesionalnim onlajn.
- **Glavni diferencijator:** **kvalitet i dizajn** (premium izrada), ne cena/brzina.
- **Ličnost brenda:** smela, samouverena, energična.
- **Ton komunikacije:** direktan i jezgrovit — kratke, sigurne rečenice.
- **Prvi utisak:** „ovo je tačno ono što mi treba" (jasna relevantnost usluge).

---

## 3. Ciljna publika

Široko, ali fokus na male i srednje biznise kojima treba moderan sajt ili održavanje:

- Ugostiteljstvo i lepota (restorani, saloni, teretane, klinike)
- Profesionalne usluge (advokati, agencije, majstori, nekretnine)
- Lični brendovi i kreatori
- Startapi i ambiciozne male firme

- **Geografski fokus:** cela Srbija (nacionalno).
- **Budžet:** mešovito / fleksibilno po projektu.

---

## 4. Usluge

**Flagship ponuda:** Izrada modernih veb sajtova.
Ostale usluge prikazane kompaktno, detalji „na upit":

1. **Izrada novih sajtova** (flagship)
2. Redizajn / unapređenje postojećih sajtova
3. Landing stranice
4. Održavanje i briga o sajtu
5. (Tiho) vizuali, copywriting, automatizacija — kao dodatna vrednost, bez „AI" etikete

---

## 5. Struktura sajta (stranice)

MVP — 4 stranice:

1. **Početna (Home)**
2. **Usluge**
3. **O nama**
4. **Kontakt**

- **Portfolio / „Radovi":** zasad **bez zasebne stranice** — umesto toga „Uskoro" / fokus na veštine i kvalitet samog sajta kao dokaz.
- **Blog:** struktura se priprema sada, sadržaj kasnije (prazno na lansiranju).
- **Osnivači:** brend-first, suptilno prisutni (kratka „O nama", bez isticanja lica u prvom planu).

---

## 6. Sekcije početne strane

Redosled (problem → rešenje pristup):

1. **Hero** — snažan value-prop naslov + primarni CTA („Kontaktiraj nas") ✅ *implementirano*
2. **Problem / Rešenje** — bol klijenta (zastareo/nepostojeći sajt) → kako Lumikon rešava
3. **Usluge** — kompaktan pregled (flagship istaknut)
4. **Zašto Lumikon** — kvalitet dizajna, posvećenost, jasan proces
5. **Kako radimo (proces)** — 4 koraka: Razgovor → Plan → Dizajn/Izrada → Lansiranje
6. **Poverenje** — jedna snažna izjava o kvalitetu/posvećenosti (placeholder za buduće testimonijale, sakriveno dok ne postoji sadržaj)
7. **Kontakt / CTA** — kontakt forma

---

## 7. Strategija konverzije (CTA i kontakt)

- **Primarni CTA:** „Kontaktiraj nas" (jednostavno, ponavlja se: hero, sredina, kraj).
- **Kontakt tok:** on-site forma (Ime, Email, Poruka).
- **Obrada leadova:** email notifikacija osnivačima (baza/Supabase kasnije po potrebi).
- **Smanjenje rizika:** **besplatne revizije / ispravke do zadovoljstva** klijenta (bez garancije povraćaja novca).
- **Cene:** ne prikazuju se — „zatraži ponudu" / custom.
- **Timeline:** ne fiksira se javno (zavisi od projekta).

---

## 8. Dizajn pravac

- **Stil:** moderno, šareno, sa suptilnim gradijentima; čisto i prostrano.
- **Tema:** primarno **svetla** tema.
- **Glavni akcenat:** **amber / zlatna** (toplo, premium, „svetlost") — vezano za značenje imena.
- **Tipografija:** moderan geometrijski sans (čisto, neutralno; jaki naslovi).
- **Vizuali:** kombinacija **mockup-a sajtova** (laptop/telefon) i suptilnih gradijenata; bez jeftinih stock fotki.
- **Animacije:** suptilne i ukusne (fade, blagi reveal na scroll) — Framer Motion samo gde dodaje vrednost.

### Predlog tokena (za potvrdu)

- Akcenat: amber `#F59E0B` / zlatna `#D4A017` (finalno usaglašavamo)
- Pozadina: svetla (`#FFFFFF` / `#FAFAF9`)
- Tekst: tamni neutralni (`#0A0A0A` / `#1C1917`)
- Kontrast sekcije: tamni teget / ugljen za ozbiljnost po potrebi

---

## 9. SEO prioriteti

- **Fokus:** lokalni / nacionalni SEO za Srbiju, na srpskom jeziku.
- Ključne reči tipa „izrada sajtova", „izrada veb sajta", „moderni sajt za [delatnost]".
- Osnove: semantički HTML, meta tagovi, Open Graph, `sitemap.xml`, `robots.txt`, structured data (Organization / LocalBusiness).
- Brzina i Core Web Vitals kao deo SEO higijene.
- Blog struktura spremna za buduće content / SEO članke.

---

## 10. Tehnički zahtevi

- **Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion (suptilno), shadcn/ui za UI primitive.
- **Hosting:** Vercel.
- **Verzionisanje:** Git + GitHub.
- **Kvalitet:** čist, skalabilan kod; reusable komponente; responsivno (desktop / tablet / mobile).
- **Performanse:** optimizovane slike (`next/image`), lazy loading, minimalan broj biblioteka.
- **Pristupačnost:** semantika, labele / aria na formi.
- **MVP prioritet:** **maksimalno ispoliran** rezultat (kvalitet ispred brzine lansiranja), uz laku buduću nadogradnju.
- **Kontakt podaci na sajtu:** email + društvene mreže (Instagram + LinkedIn — u planu).

---

## 11. Van opsega (za sada)

- Zasebna Portfolio / „Radovi" stranica (kasnije)
- Objavljeni blog članci (struktura da, sadržaj kasnije)
- Prikaz cena i fiksnih rokova
- „AI" kao eksplicitno brendiran proizvod
- Garancija povraćaja novca
- Baza podataka za leadove (email za sada)

---

## 12. Predložena struktura projekta

```text
app/
  layout.tsx              ✅
  page.tsx                ✅ Početna (Hero, Problem/Rešenje)
  globals.css             ✅ dizajn tokeni
  usluge/page.tsx         ⬜
  o-nama/page.tsx         ⬜
  kontakt/page.tsx        ⬜
  (blog)/                 ⬜ struktura spremna, prazno
components/
  ui/                     ✅ button.tsx (shadcn)
  sections/               🟡 hero.tsx, problem-solution.tsx
  layout/                 ✅ navbar.tsx, footer.tsx
lib/
  utils.ts                ✅
content/
  site.ts                 ✅ tekstovi (srpski)
public/
docs/
  PRD.md
```

---

## 13. Sažetak strateških odluka (iz upitnika)

| Tema | Odluka |
| --- | --- |
| Pozicioniranje | Moderan all-in-one digitalni partner |
| Primarna publika | Mešovito / široko, fokus mali i srednji biznisi |
| Core usluga | Izrada novih modernih sajtova (flagship) |
| Obim usluga | 1 flagship + ostalo „na upit" |
| AI | Utopljeno u usluge, bez „AI" etikete |
| Ličnost brenda | Smela, samouverena, energična |
| Ton | Direktan i jezgrovit |
| Dizajn stil | Moderno, šareno, suptilni gradijenti |
| Boja / akcenat | Amber / zlatna, svetla tema |
| Tipografija | Moderan geometrijski sans |
| Animacije | Suptilne i ukusne |
| Hero fokus | Value-prop naslov + CTA |
| Sekcije Home | Hero → Problem/Rešenje → Usluge → Zašto mi → Proces → Poverenje → Kontakt |
| Portfolio | „Uskoro", fokus na kvalitet sajta |
| Poverenje | Kvalitet samog sajta kao dokaz |
| Osnivači | Brend-first, suptilno |
| Cene | Bez cena, „zatraži ponudu" |
| Primarni CTA | „Kontaktiraj nas" |
| Kontakt | On-site forma (Ime, Email, Poruka) |
| Leadovi | Email notifikacija |
| Stranice | Home + Usluge + O nama + Kontakt |
| Blog | Struktura sad, sadržaj kasnije |
| SEO | Lokalni / nacionalni (Srbija, srpski) |
| Jezik | Srpski |
| Geo | Cela Srbija |
| Diferencijator | Kvalitet i dizajn |
| Social proof | Jaka izjava o kvalitetu (placeholder) |
| Tema | Svetla primarno |
| Prvi utisak | „Ovo je tačno ono što mi treba" |
| Metrika uspeha | Broj kontakt formi (leadovi) |
| Značenje imena | Svetlost / jasnoća |
| Budžet klijenata | Mešovito / fleksibilno |
| Proces | 4 koraka |
| Timeline | Ne fiksira se |
| Delatnosti | Široko |
| Vizuali | Mockup-i + suptilni gradijenti |
| Kontakt info | Email + društvene mreže |
| Društvene mreže | Instagram + LinkedIn (u planu) |
| Garancija | Besplatne revizije do zadovoljstva |
| MVP prioritet | Maksimalno ispoliran |
