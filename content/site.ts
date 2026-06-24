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
    title: "Redizajn postojećih sajtova",
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
