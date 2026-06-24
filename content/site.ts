/**
 * Centralni sadržaj sajta (srpski). Tekstovi su namerno na jednom mestu
 * radi lake izmene, u skladu sa PRD-om.
 */

export const site = {
  name: "Lumikon",
  tagline: "Izvodimo biznise na svetlo.",
  description:
    "Lumikon je digitalna agencija koja pravi moderne, profesionalne veb sajtove za male i srednje biznise u Srbiji.",
  url: "https://lumikon.rs",
  locale: "sr_RS",
  email: "kontakt@lumikon.rs",
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Početna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "O nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
];

export const primaryCta = {
  label: "Kontaktiraj nas",
  href: "/kontakt",
} as const;

export const secondaryCta = {
  label: "Pogledaj usluge",
  href: "/usluge",
} as const;

/** Problem / Rešenje sekcija početne strane (PRD §6.2). */
export const problemSolution = {
  eyebrow: "Problem i rešenje",
  title: "Zastareo ili nepostojeći sajt vas košta klijenata.",
  subtitle: "Većina malih biznisa gubi prilike pre nego što uopšte stigne da se predstavi. Mi to menjamo.",
  problem: {
    label: "Prepoznajete se?",
    items: [
      {
        title: "Nemate sajt ili je zastareo godinama",
        description: "Posetilac ne može da proceni da li ste ozbiljan biznis.",
      },
      {
        title: "Ne izgledate profesionalno onlajn",
        description: "Prvi utisak se formira u sekundi — a vi ga gubite.",
      },
      {
        title: "Gubite upite pre nego što vas pronađu",
        description: "Bez jasnog CTA-a i poverenja, posetilac odlazi dalje.",
      },
      {
        title: "Sajt ne radi kako treba na telefonu",
        description: "Većina klijenata dolazi sa mobilnog — a vi ih ne hvatate.",
      },
    ],
  },
  solution: {
    label: "Kako Lumikon rešava",
    items: [
      {
        title: "Moderan, premium dizajn",
        description: "Sajt koji u prvih pet sekundi kaže: ovo je tačno ono što mi treba.",
      },
      {
        title: "Brzo, responsivno i pouzdano",
        description: "Besprekorno iskustvo na telefonu, tabletu i desktopu.",
      },
      {
        title: "Jasna putanja ka upitu",
        description: "Struktura i CTA koji vode posetioce ka kontaktu.",
      },
      {
        title: "Revizije do zadovoljstva",
        description: "Radimo dok ne budete sigurni da sajt predstavlja vaš biznis.",
      },
    ],
  },
} as const;

/** Hero sekcija početne strane (PRD §6.1, §8). */
export const hero = {
  eyebrow: "Digitalna agencija · Srbija",
  title: "Moderni veb sajtovi koji izvode vaš biznis na svetlo.",
  subtitle:
    "Pravimo ispolirane, brze sajtove koji u prvih pet sekundi grade poverenje i pretvaraju posetioce u upite.",
  highlights: [
    "Premium dizajn",
    "Brzo i responsivno",
    "Revizije do zadovoljstva",
  ],
} as const;

/** Usluge sekcija početne strane (PRD §6.3, §4). */
export const servicesSection = {
  eyebrow: "Usluge",
  title: "Sve što vam treba za snažno prisustvo onlajn.",
  subtitle:
    "Izrada sajtova je naša srž — ostalo radimo po potrebi projekta, bez nepotrebnih paketa.",
  flagshipLabel: "Glavna usluga",
  onRequestLabel: "Detalji na upit",
  extras: {
    description:
      "Vizuali, copywriting i automatizacija — ugrađeni u projekat kada su potrebni, bez dodatne komplikacije.",
  },
  cta: {
    label: "Zatraži ponudu",
    href: "/kontakt",
  },
} as const;

export type Service = {
  title: string;
  description: string;
  flagship?: boolean;
};

export const services: Service[] = [
  {
    title: "Izrada novih sajtova",
    description:
      "Moderni, brzi i profesionalni sajtovi koji u prvih pet sekundi grade poverenje i donose upite.",
    flagship: true,
  },
  {
    title: "Redizajn / unapređenje postojećih sajtova",
    description:
      "Osvežavamo i unapređujemo zastarele sajtove u savremeno izdanje koje radi za vaš biznis.",
  },
  {
    title: "Landing stranice",
    description:
      "Fokusirane stranice napravljene da pretvore posetioce u kontakte i klijente.",
  },
  {
    title: "Održavanje i briga o sajtu",
    description:
      "Vodimo računa o ažuriranjima, brzini i sigurnosti dok se vi bavite svojim poslom.",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Razgovor",
    description: "Upoznajemo vaš biznis, ciljeve i šta vam je zaista potrebno.",
  },
  {
    title: "Plan",
    description: "Definišemo strukturu, sadržaj i pravac dizajna.",
  },
  {
    title: "Dizajn i izrada",
    description: "Pravimo ispoliran, moderan sajt prilagođen svim uređajima.",
  },
  {
    title: "Lansiranje",
    description: "Objavljujemo sajt i ostajemo uz vas uz revizije do zadovoljstva.",
  },
];
