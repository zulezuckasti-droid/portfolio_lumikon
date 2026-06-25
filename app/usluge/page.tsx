import type { Metadata } from "next";

import { Process } from "@/components/sections/process";
import { ServicesAudience } from "@/components/sections/services-audience";
import { ServicesCta } from "@/components/sections/services-cta";
import { ServicesExtras } from "@/components/sections/services-extras";
import { ServicesFlagship } from "@/components/sections/services-flagship";
import { ServicesOther } from "@/components/sections/services-other";
import { ServicesPageHero } from "@/components/sections/services-page-hero";
import { servicesPage } from "@/content/site";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
  alternates: {
    canonical: "/usluge",
  },
  openGraph: {
    title: servicesPage.meta.title,
    description: servicesPage.meta.description,
    url: "/usluge",
  },
};

export default function UslugePage() {
  return (
    <>
      <ServicesPageHero />
      <ServicesFlagship />
      <ServicesOther />
      <ServicesExtras />
      <ServicesAudience />
      <Process />
      <ServicesCta />
    </>
  );
}
