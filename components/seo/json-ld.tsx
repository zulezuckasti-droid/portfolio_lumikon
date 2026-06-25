import {
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/structured-data";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  return (
    <>
      <JsonLdScript data={getOrganizationJsonLd()} />
      <JsonLdScript data={getWebSiteJsonLd()} />
    </>
  );
}
