import type { Metadata } from "next";

import { AboutCta } from "@/components/sections/about-cta";
import { AboutFounders } from "@/components/sections/about-founders";
import { AboutManifesto } from "@/components/sections/about-manifesto";
import { AboutMeaning } from "@/components/sections/about-meaning";
import { AboutPageHero } from "@/components/sections/about-page-hero";
import { AboutPrinciples } from "@/components/sections/about-principles";
import { AboutStand } from "@/components/sections/about-stand";
import { aboutPage } from "@/content/site";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
  alternates: {
    canonical: "/o-nama",
  },
  openGraph: {
    title: aboutPage.meta.title,
    description: aboutPage.meta.description,
    url: "/o-nama",
  },
};

export default function ONamaPage() {
  return (
    <>
      <AboutPageHero />
      <AboutManifesto />
      <AboutMeaning />
      <AboutPrinciples />
      <AboutFounders />
      <AboutStand />
      <AboutCta />
    </>
  );
}
