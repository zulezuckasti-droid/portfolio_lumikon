import { publicRoutes, site } from "@/content/site";

const organizationId = `${site.url}/#organization`;
const localBusinessId = `${site.url}/#localbusiness`;

/** Organization + LocalBusiness JSON-LD (PRD §9). */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        url: site.url,
        description: site.description,
        email: site.email,
        sameAs: [site.socials.instagram, site.socials.linkedin],
      },
      {
        "@type": "LocalBusiness",
        "@id": localBusinessId,
        name: site.name,
        url: site.url,
        description: site.description,
        email: site.email,
        parentOrganization: { "@id": organizationId },
        areaServed: {
          "@type": "Country",
          name: "Serbia",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "RS",
        },
        sameAs: [site.socials.instagram, site.socials.linkedin],
      },
    ],
  };
}

/** WebSite JSON-LD sa listom glavnih stranica. */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "sr-RS",
    publisher: { "@id": organizationId },
    hasPart: publicRoutes.map(({ path, label }) => ({
      "@type": "WebPage",
      "@id": `${site.url}${path === "/" ? "" : path}`,
      name: label,
      url: `${site.url}${path === "/" ? "" : path}`,
      isPartOf: { "@id": `${site.url}/#website` },
    })),
  };
}
