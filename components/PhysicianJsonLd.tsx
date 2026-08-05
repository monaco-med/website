import type { Locale } from "@/lib/i18n";
import { localeRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

/**
 * schema.org `Physician` structured data for the Betriebsarzt landing page.
 *
 * The `url` points at the locale's own version of the page so each language
 * describes itself, but the practice details are identical — this is one
 * physician, not one per language.
 */
export default function PhysicianJsonLd({ locale }: { locale: Locale }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: siteConfig.name,
    medicalSpecialty: "Occupational Medicine",
    physician: siteConfig.physician,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: ["München", "Bayern"],
    url: `${siteConfig.url}${localeRoutes[locale].betriebsarztMuenchen}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
