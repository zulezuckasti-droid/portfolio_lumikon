import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: contactPage.meta.title,
    description: contactPage.meta.description,
    url: "/kontakt",
  },
};

export default function KontaktPage() {
  return <ContactSection headingLevel="h1" />;
}
