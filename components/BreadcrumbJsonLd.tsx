import { siteConfig } from "@/lib/site";

/**
 * Renders schema.org `BreadcrumbList` structured data for a page's position
 * in the site hierarchy. Purely SEO — the visible trail is rendered
 * separately by `Breadcrumbs`; the two must be kept in sync by callers.
 *
 * @param items - Breadcrumb entries in order from the site root to the
 *   current page (e.g. `[{name: "Leistungen", path: routes.leistungen}, ...]`).
 */
export default function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
