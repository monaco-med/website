import { siteConfig } from "@/lib/site";

/**
 * schema.org `MedicalBusiness` structured data, rendered once per page from
 * the root layout of each locale.
 *
 * This is deliberately identical across locales: it describes the practice
 * itself, which is one business, not one business per language. Emitting
 * differing organisation data per locale would suggest two separate entities
 * to search engines.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.zip,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
