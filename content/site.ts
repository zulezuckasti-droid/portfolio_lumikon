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
  /** Naslov se deli u dve celine: osnova + akcenat (amber) koji nosi značenje brenda. */
  titleStart: "Moderni veb sajtovi koji izvode vaš biznis",
  titleAccent: "na svetlo.",
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

/** Zašto Lumikon sekcija početne strane (PRD §6.4). */
export const whyLumikonSection = {
  eyebrow: "Zašto Lumikon",
  title: "Kvalitet, posvećenost i jasan proces — bez kompromisa.",
  subtitle:
    "Ne trkamo se u ceni. Pravimo sajtove koji izgledaju i rade premium, sa vama od prve poruke do lansiranja.",
  pillars: [
    {
      title: "Kvalitet dizajna",
      description:
        "Premium izrada je naš diferencijator. Svaki detalj — tipografija, boje, ritam — radi za vaš biznis i prvi utisak.",
    },
    {
      title: "Posvećenost projektu",
      description:
        "Vaš sajt nije broj u redu. Radimo revizije dok ne budete sigurni da predstavlja vas onako kako zaslužujete.",
    },
    {
      title: "Jasan proces",
      description:
        "Četiri koraka, bez iznenađenja. Uvek znate gde ste, šta sledi i šta možete da očekujete od nas.",
    },
  ],
} as const;

/** Kako radimo (proces) sekcija početne strane (PRD §6.5). */
export const processSection = {
  eyebrow: "Kako radimo",
  title: "Od razgovora do lansiranja — četiri jasna koraka.",
  subtitle:
    "Bez nejasnih rokova i skrivenih koraka. Proces je jednostavan i transparentan.",
} as const;

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

/** Poverenje sekcija početne strane (PRD §6.6). */
export const trustSection = {
  eyebrow: "Poverenje",
  statement:
    "Kvalitet ovog sajta je naš prvi dokaz — svaki detalj koji vidite ovde, donosimo i u vaš projekat.",
  supporting:
    "Još nemamo javne testimonijale, ali imamo jasan standard: ispoliran dizajn, brzina i pažnja prema svakom pikselu.",
} as const;

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

/** Prazno dok ne postoji sadržaj — testimonijali se ne prikazuju (PRD §6.6). */
export const testimonials: Testimonial[] = [];

/** Stranica Usluge — meta i sadržaj (PRD §4, §5, §8, §9). */
export const servicesPage = {
  meta: {
    title: "Usluge",
    description:
      "Izrada modernih veb sajtova, redizajn, landing stranice i održavanje. Premium dizajn, jasan proces i ponuda prilagođena vašem projektu.",
  },
  hero: {
    eyebrow: "Usluge",
    titleStart: "Sve za snažno prisustvo onlajn —",
    titleAccent: "od nule do lansiranja.",
    subtitle:
      "Izrada sajtova je naša srž. Ostalo radimo po potrebi projekta — bez paketa koje ne koristite i bez nepotrebnog šuma.",
    highlights: [
      "Flagship: izrada novih sajtova",
      "Ponuda po projektu",
      "Revizije do zadovoljstva",
    ],
  },
  flagship: {
    label: "Glavna usluga",
    title: "Izrada novih sajtova",
    lead: "Pravimo sajtove koji u prvih pet sekundi grade poverenje — brze, responsivne i namerno dizajnirane za vaš biznis.",
    body: "Ne prodajemo šablone. Svaki projekat krećemo od vaših ciljeva: ko su vam klijenti, šta treba da urade na sajtu i kako da vas sajt predstavi onlajn. Rezultat je ispolirano, moderno izdanje koje radi na svim uređajima i vodi posetioce ka upitu.",
    deliverablesLabel: "Šta dobijate",
    deliverables: [
      {
        title: "Struktura po vašem biznisu",
        description: "Stranice i sadržaj organizovani tako da posetilac brzo nađe ono što traži.",
      },
      {
        title: "Premium vizuelni identitet",
        description: "Tipografija, boje i ritam prilagođeni vašem brendu — ništa generičko.",
      },
      {
        title: "Savršeno na telefonu",
        description: "Većina upita dolazi sa mobilnog. Sajt je optimizovan za svaki ekran.",
      },
      {
        title: "Brzo učitavanje i SEO osnove",
        description: "Tehnička higijena koja pomaže da vas pronađu i zadrži pažnju posetilaca.",
      },
      {
        title: "Jasan put ka kontaktu",
        description: "CTA, forma i struktura koja pretvara posetioce u konkretne upite.",
      },
      {
        title: "Revizije do zadovoljstva",
        description: "Radimo iteracije dok ne budete sigurni da sajt predstavlja vas kako zaslužujete.",
      },
    ],
    note: "Obim, rok i budžet dogovaramo nakon razgovora — svaki projekat je drugačiji.",
    cta: {
      label: "Zatraži ponudu",
      href: "/kontakt",
    },
  },
  otherServices: {
    eyebrow: "Ostale usluge",
    title: "Kada vam treba nešto specifično.",
    subtitle: "Nisu manje važne — samo imaju drugačiji obim. Detalje i ponudu definišemo zajedno.",
    items: [
      {
        title: "Redizajn / unapređenje postojećih sajtova",
        when: "Imate sajt, ali ne predstavlja vas ili ne donosi upite.",
        description:
          "Osvežavamo vizuelni identitet, popravljamo strukturu i brzinu, i pretvaramo zastarelo izdanje u moderan sajt koji radi za vaš biznis.",
        points: ["Nova vizuelna prezentacija", "Poboljšana navigacija i CTA", "Optimizacija za mobilne"],
      },
      {
        title: "Landing stranice",
        when: "Pokrećete kampanju, proizvod ili akciju i treba vam jedna fokusirana stranica.",
        description:
          "Jedna stranica, jedan cilj — da posetilac ostavi kontakt ili izvrši akciju. Bez suvišnih elemenata koji odvlače pažnju.",
        points: ["Jedan jasan CTA", "Brza izrada po dogovoru", "Prilagođeno kampanji"],
      },
      {
        title: "Održavanje i briga o sajtu",
        when: "Sajt radi, ali ne želite da razmišljate o ažuriranjima, brzini i sigurnosti.",
        description:
          "Preuzimamo tehničku brigu — ažuriranja, backup, sitne izmene sadržaja — da vi možete da se bavite poslom.",
        points: ["Redovna ažuriranja", "Monitoring brzine", "Sitne izmene po potrebi"],
      },
    ],
  },
  extras: {
    eyebrow: "Dodatna vrednost",
    title: "Ugrađeno u projekat, kada zatreba.",
    subtitle:
      "Vizuali, tekst i automatizacija nisu zasebni proizvodi koje morate da birate — uklapamo ih u projekat tamo gde imaju smisla.",
    items: [
      {
        title: "Vizuali i grafika",
        description: "Ilustracije, ikonografija i vizuelni elementi usklađeni sa dizajnom sajta.",
      },
      {
        title: "Copywriting",
        description: "Tekst koji objašnjava vašu vrednost jasno i ubedljivo — bez praznih fraza.",
      },
      {
        title: "Automatizacija",
        description: "Manje ručnog posla oko upita, obaveštenja i ponavljajućih zadataka.",
      },
    ],
  },
  audience: {
    eyebrow: "Za koga radimo",
    title: "Male i srednje firme kojima treba ozbiljan sajt.",
    subtitle: "Radimo širom Srbije — sa biznisima kojima je prvi onlajn utisak presudan.",
    groups: [
      {
        title: "Ugostiteljstvo i lepota",
        examples: "Restorani, kafići, saloni, teretane, klinike",
      },
      {
        title: "Profesionalne usluge",
        examples: "Advokati, agencije, majstori, nekretnine",
      },
      {
        title: "Lični brendovi",
        examples: "Kreatori, konsultanti, freelanceri",
      },
      {
        title: "Startapi i ambiciozne firme",
        examples: "Timovi koji žele da izgledaju ozbiljno od prvog dana",
      },
    ],
  },
  cta: {
    eyebrow: "Sledeći korak",
    title: "Imate projekat na umu?",
    subtitle: "Opišite ga u par rečenica — odgovaramo brzo sa jasnim sledećim koracima.",
    reassurance: "Besplatne revizije do zadovoljstva — cene i rokove dogovaramo individualno.",
    primary: {
      label: "Kontaktiraj nas",
      href: "/kontakt",
    },
  },
} as const;

/** Stranica O nama — meta i sadržaj (PRD §2, §5, §8, §9). */
export const aboutPage = {
  meta: {
    title: "O nama",
    description:
      "Lumikon je digitalna agencija iz Srbije — dva osnivača, jedan standard. Premium dizajn, jasan proces i sajtovi koji izvode biznise na svetlo.",
  },
  hero: {
    eyebrow: "O Lumikonu",
    titleStart: "Nova agencija sa starim pravilom:",
    titleAccent: "kvalitet pre svega.",
    subtitle:
      "Dvoje osnivača, jedan fokus — moderne veb prezentacije za male i srednje biznise koji zaslužuju da izgledaju ozbiljno onlajn.",
    highlights: [
      "Brend-first pristup",
      "Premium izrada",
      "Cela Srbija",
    ],
  },
  manifesto: {
    eyebrow: "U šta verujemo",
    lines: [
      "Ne prodajemo šablone.",
      "Ne trkamo se u ceni.",
      "Pravimo sajtove koji u prvih pet sekundi grade poverenje.",
    ],
    closing:
      "Svaki detalj — tipografija, ritam, brzina — namerno je osmišljen. Ništa nije podrazumevano.",
  },
  meaning: {
    eyebrow: "Značenje imena",
    title: "Lumikon = svetlost + jasnoća.",
    lead: "Ime asocira na ono što radimo: izvodimo biznise na svetlo — činimo ih vidljivim, profesionalnim i lako pronađivim onlajn.",
    parts: [
      {
        fragment: "Lumi",
        gloss: "Svetlost — vidljivost vašeg biznisa tamo gde vas klijenti traže.",
      },
      {
        fragment: "kon",
        gloss: "Jasnoća — struktura, dizajn i poruka bez šuma i nejasnoća.",
      },
    ],
  },
  principles: {
    eyebrow: "Načela",
    title: "Tri stvari koje ne pregovaramo.",
    subtitle: "Direktno, jezgrovito — bez korporativnog šuma.",
    items: [
      {
        number: "01",
        title: "Dizajn je diferencijator",
        description:
          "Premium izrada nije luksuz — to je ono što od vas pravi ozbiljan izbor u očima klijenta.",
      },
      {
        number: "02",
        title: "Proces mora biti jasan",
        description:
          "Četiri koraka, transparentna komunikacija. Uvek znate gde ste i šta sledi.",
      },
      {
        number: "03",
        title: "Radimo dok ne zadovoljimo",
        description:
          "Besplatne revizije do zadovoljstva — jer sajt mora da predstavlja vas, ne nas.",
      },
    ],
  },
  founders: {
    eyebrow: "Ko stoji iza",
    title: "Dvoje osnivača. Direktan kontakt.",
    subtitle:
      "Bez account menadžera i posrednika — razgovarate sa ljudima koji dizajniraju i pišu kod vašeg sajta.",
    roles: [
      {
        label: "Dizajn & strategija",
        description:
          "Vizuelni identitet, struktura stranica i korisničko iskustvo — od prvog mockupa do finalnog izgleda.",
      },
      {
        label: "Razvoj & implementacija",
        description:
          "Brz, pouzdan kod, responsivnost i tehnička higijena — sajt koji radi besprekorno na svakom uređaju.",
      },
    ],
    note: "Lica nisu u prvom planu — standard našeg rada jeste. Ovaj sajt je dokaz.",
  },
  stand: {
    eyebrow: "Naš stav",
    title: "Moderan partner, ne fabrika sajtova.",
    contrast: [
      {
        label: "Ne radimo",
        items: [
          "Generičke šablone koje izgledaju kao hiljade drugih",
          "Obećanja o najnižoj ceni i najbržem roku",
          "Sajtove bez jasnog puta ka kontaktu",
        ],
      },
      {
        label: "Radimo",
        items: [
          "Namerno dizajnirane sajtove prilagođene vašem biznisu",
          "Ispoliranu izradu sa pažnjom prema svakom detalju",
          "Strukturu koja pretvara posetioce u upite",
        ],
      },
    ],
  },
  cta: {
    eyebrow: "Sledeći korak",
    title: "Hoćete sajt koji radi za vas?",
    subtitle: "Javite nam se — odgovaramo brzo, sa jasnim sledećim koracima.",
    reassurance: "Besplatne revizije do zadovoljstva — cene i rokove dogovaramo individualno.",
    primary: {
      label: "Kontaktiraj nas",
      href: "/kontakt",
    },
    secondary: {
      label: "Pogledaj usluge",
      href: "/usluge",
    },
  },
} as const;

/** Kontakt stranica — meta (PRD §5, §9). */
export const contactPage = {
  meta: {
    title: "Kontakt",
    description:
      "Pošaljite upit za izradu ili redizajn veb sajta. Odgovaramo brzo sa jasnim sledećim koracima i besplatnim revizijama do zadovoljstva.",
  },
} as const;

/** Kontakt / CTA sekcija početne strane (PRD §6.7, §7). */
export const contactSection = {
  eyebrow: "Kontakt",
  title: "Spremni za moderan sajt? Javite nam se.",
  subtitle:
    "Opišite projekat u par rečenica — odgovaramo brzo sa jasnim sledećim koracima.",
  reassurance: "Besplatne revizije do zadovoljstva — bez skrivenih uslova.",
  pricingNote:
    "Cene i rokove dogovaramo individualno — svaki projekat je drugačiji.",
  form: {
    nameLabel: "Ime",
    namePlaceholder: "Vaše ime",
    emailLabel: "Email",
    emailPlaceholder: "vi@primer.rs",
    messageLabel: "Poruka",
    messagePlaceholder: "Kratko opišite projekat ili pitanje…",
    submitLabel: "Pošalji upit",
    submittingLabel: "Slanje…",
    successMessage: "Hvala! Primili smo vaš upit i javićemo vam se uskoro.",
    errorMessage: "Došlo je do greške. Pokušajte ponovo ili pišite direktno na email.",
    validationMessage: "Proverite označena polja i pokušajte ponovo.",
    unavailableMessage:
      "Forma trenutno nije aktivna. Pišite nam direktno — odgovaramo brzo.",
  },
} as const;
