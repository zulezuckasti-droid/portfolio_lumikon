# PRD — Lumikon (Veb sajt agencije)

**Verzija:** 1.1
**Datum:** Jun 2026
**Jezik sajta:** Srpski
**Status:** U implementaciji (MVP)

---

## 0. Status implementacije

Poslednje ažuriranje: **25. jun 2026.**

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
| Resend env + test leadova | ✅ | `.env.example`, `npm run test:contact` |
| Početna stranica (osnova) | ✅ | `app/page.tsx` |

### Sekcije početne (PRD §6)

| Sekcija | Status | Fajl |
| --- | --- | --- |
| 1. Hero | ✅ | `components/sections/hero.tsx` |
| 2. Problem / Rešenje | ✅ | `components/sections/problem-solution.tsx` |
| 3. Usluge | ✅ | `components/sections/services.tsx` |
| 4. Zašto Lumikon | ✅ | `components/sections/why-lumikon.tsx` |
| 5. Kako radimo (proces) | ✅ | `components/sections/process.tsx` |
| 6. Poverenje | ✅ | `components/sections/trust.tsx` |
| 7. Kontakt / CTA | ✅ | `components/sections/contact-cta.tsx`, `app/actions/contact.ts`, `lib/send-contact-lead.ts` |

**Hero (urađeno):** value-prop naslov, podnaslov, primarni CTA „Kontaktiraj nas", sekundarni „Pogledaj usluge", lista prednosti, suptilni amber gradijenti, CSS mockup sajta (PRD §8).

### Stranice (PRD §5)

| Stranica | Status |
| --- | --- |
| Početna (Home) | ✅ | Sve sekcije §6.1–§6.7 |
| Usluge | ⬜ |
| O nama | ✅ | `app/o-nama/page.tsx` |
| Kontakt | ✅ | `app/kontakt/page.tsx`, `components/sections/contact-section.tsx` |
| Blog (struktura) | ⬜ |

### Preostalo za MVP

- Blog folder struktura (§5, §11)
- Resend env u Vercel produkciji + verifikacija domena `lumikon.rs` za `CONTACT_FROM_EMAIL`

### Framer Motion (§8, §10) — urađeno

| Stavka | Status | Fajl |
| --- | --- | --- |
| `framer-motion` dependency | ✅ | `package.json` |
| Dijeljeni tokeni (ease, viewport) | ✅ | `lib/motion.ts` |
| `FadeIn` — fade + blagi reveal | ✅ | `components/motion/fade-in.tsx` |
| `StaggerGroup` / `StaggerItem` | ✅ | `components/motion/stagger.tsx` |
| Hero entrance (mount) | ✅ | početna + O nama + Usluge hero |
| Scroll reveal sekcije | ✅ | sve sekcije na Home, Usluge, O nama, Kontakt |
| `prefers-reduced-motion` | ✅ | motion komponente |

### SEO (PRD §9) — urađeno

| Stavka | Status | Fajl |
| --- | --- | --- |
| `sitemap.xml` | ✅ | `app/sitemap.ts` |
| `robots.txt` | ✅ | `app/robots.ts` |
| JSON-LD (Organization / LocalBusiness) | ✅ | `lib/structured-data.ts`, `components/seo/json-ld.tsx` |
| WebSite structured data | ✅ | `lib/structured-data.ts` |

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

- **Stil:** moderno, toplo, sa suptilnim gradijentima; čisto i prostrano. Editorijalno, ne korporativno.
- **Tema:** primarno **svetla** tema (`#fafaf9` ivory).
- **Diferencijator:** premium izrada — svaki detalj je namerno osmišljen, ništa nije default template.
- **Animacije:** suptilne (fade, blagi reveal na scroll) — Framer Motion samo gde dodaje vrednost, ne svi elementi.

### §8.1 Style System — Obavezujući dizajn jezik

Sve sekcije i stranice **moraju** slediti ovaj sistem radi koherentnosti. Ovo nije suggestion list — ovo je dizajn konstitucija.

---

#### Boje i upotreba

| Token | Vrednost | Upotreba |
| --- | --- | --- |
| `--background` | `#fafaf9` (topla ivory) | Osnovna svetla pozadina |
| `--foreground` | `#1c1917` (ugljen/charcoal) | Primarni tekst, dugmad |
| `--ink` | `#0c0a09` (near-black) | Tamne kontrastne sekcije |
| `--primary` | `#f59e0b` (amber) | **Samo kao akcenat** — videti pravila ispod |
| `--muted-foreground` | `#78716c` | Sekundarni tekst, labele |
| `--border` | `#e7e5e4` | Granice kartica i elemenata |

**Pravila za amber/zlatnu:**
- ✅ Eyebrow linija (`h-px w-7 bg-primary/65`)
- ✅ Akcenatska reč u naslovu (`<span class="text-primary">na svetlo.</span>`)
- ✅ Amber tačka u logotipu
- ✅ Amber dash u listama (`h-px w-3.5 bg-primary/55`)
- ✅ Tanak levi border stripe na flagship kartici (`w-[3px] bg-gradient-to-b from-primary/80`)
- ✅ Broj koraka u procesu (`text-primary`)
- ✅ Separator linija (`h-px w-8 bg-primary/45`)
- ❌ **NIKAD** kao pozadina dugmeta (`bg-primary` za button je zabranjeno)
- ❌ **NIKAD** kao background kartica ili sekcija
- ❌ **NIKAD** orange gradient (`from-primary/10 via-card`) na karticama

---

#### Dugmad (CTA)

**Primarni CTA** — charcoal button:
```
inline-flex h-11 items-center rounded-xl bg-foreground px-6
text-[13.5px] font-semibold text-background shadow-sm
transition-opacity duration-200 hover:opacity-85
```

**Sekundarni CTA** — text link sa strelicom:
```
group inline-flex items-center gap-2 text-[13.5px] font-medium
text-muted-foreground transition-colors duration-200 hover:text-foreground
```
+ `<ArrowRightIcon class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />`

**Submit dugme u formi** — isti pattern kao primarni CTA, ali `<button>` element.

**Zabranjeno:** `<Button>` sa default `bg-primary` variantom za bilo koji vidljivi CTA.

---

#### Eyebrow labele

Svaka sekcija ima eyebrow label. Postoje dva varijanta:

**Levo poravnato** (asimetrični layout, npr. Hero, Kontakt):
```
<div class="flex items-center gap-3">
  <span aria-hidden class="h-px w-7 rounded-full bg-primary/65" />
  <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
    Naziv sekcije
  </p>
</div>
```

**Centriran** (simetrični layout, npr. Usluge, Zašto Lumikon, Proces):
```
<div class="flex items-center justify-center gap-3">
  <span aria-hidden class="h-px w-5 rounded-full bg-primary/55" />
  <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
    Naziv sekcije
  </p>
  <span aria-hidden class="h-px w-5 rounded-full bg-primary/55" />
</div>
```

**Na tamnoj (ink) pozadini** — isti pattern, ali:
- Amber linije: `bg-primary/50`
- Tekst: `text-white/40` (svetla) ili `text-white/45` (tamna)

**Zabranjeno:** pill badge eyebrow (`rounded-full border bg-secondary px-4 py-1.5`)

---

#### Tipografija

| Element | Klase |
| --- | --- |
| H1 (hero) | `text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold tracking-tight leading-[1.1]` |
| H2 (sekcija) | `text-3xl sm:text-4xl font-semibold tracking-tight text-balance` |
| H3 (kartica) | `text-[15px] sm:text-[17px] font-semibold tracking-tight` |
| Podnaslov | `text-base sm:text-lg leading-7 text-muted-foreground` (svetla) / `text-white/50` (tamna) |
| Body tekst | `text-sm leading-6 text-muted-foreground` |
| Uppercase labela | `text-[11px] font-semibold uppercase tracking-[0.14em]` |

---

#### Ritam sekcija (svetlo/tamno naizmenično)

```
Hero            → svetla (bg-background)
Problem/Rešenje → tamna  (bg-ink)
Usluge          → svetla (bg-background)
Zašto Lumikon   → blago siva (bg-secondary/25)
Proces          → tamna  (bg-ink)
Poverenje       → svetla (bg-background)
Kontakt         → blago siva (bg-secondary/20)
```

Tamne sekcije koristimo **uvek bg-ink** (ne `bg-gray-900` ili sl.). Svetle sekcije naizmenično koriste čistu `bg-background` ili `bg-secondary/20-25` za vizuelnu razdvojenost bez oštrih prelaza.

---

#### Kartice

**Standardna kartica:**
```
rounded-2xl border border-border bg-card p-6
```

**Flagship/istaknut element** (bez gradijenta):
```
relative rounded-2xl border border-border bg-card p-6 shadow-sm
+ <div class="absolute bottom-0 left-0 top-0 w-[3px] rounded-l-2xl
     bg-gradient-to-b from-primary/80 via-primary/50 to-transparent" />
```

Hover na karticama: `transition-colors duration-200 hover:border-border/80 hover:bg-secondary/20`

---

#### Padding i spacing

| Breakpoint | Padding X | Padding Y (sekcija) |
| --- | --- | --- |
| Mobile | `px-5` | `py-20` |
| Tablet | `sm:px-6` | `sm:py-28` |
| Desktop | `lg:px-8` | — |

`max-w-6xl` je standardna širina sadržaja za sve sekcije.

---

#### Glow efekti (ambient)

Koristiti suptilno, **max opacity: 0.12 na svetlim sekcijama, max 0.10 na tamnim**:
```
bg-[radial-gradient(closest-side,rgba(245,158,11,0.08),transparent)] blur-3xl
```
Nikada ne koristiti `blur-xl` glow kao dominantni dizajn element — samo kao pozadinska ambijentalnost.

---

#### Navigacija

- Logo: wordmark + amber tačka (`h-[5px] w-[5px] rounded-full bg-primary`, `scale-125` na hover)
- Nav linkovi: amber underline na hover (`h-px w-0 → w-full bg-primary/60 transition-[width]`)
- CTA: charcoal `bg-foreground text-background h-9 rounded-lg px-5 hover:opacity-85`
- Sticky, backdrop-blur, `border-b border-border/50`

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
  page.tsx                ✅ Početna (sve sekcije §6)
  globals.css             ✅ dizajn tokeni
  usluge/page.tsx         ⬜
  o-nama/page.tsx         ⬜
  kontakt/page.tsx        ✅
  (blog)/                 ⬜ struktura spremna, prazno
components/
  ui/                     ✅ button.tsx (shadcn)
  sections/               ✅ hero, problem-solution, services, why-lumikon, process, trust, contact-cta
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
