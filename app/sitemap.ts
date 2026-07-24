import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

/**
 * Generates `/sitemap.xml` (Next.js file-convention route) from the route
 * map in `lib/routes.ts`.
 *
 * New pages must be added to `staticRoutes` manually — routes aren't
 * discovered automatically. Anchor-only entries in `lib/routes.ts` (e.g.
 * `leitung`, `homeFaq`) are intentionally omitted since they resolve to a
 * URL already listed here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    routes.home,
    routes.leistungen,
    routes.arbeitsmedizin,
    routes.arbeitssicherheit,
    routes.bahnmedizin,
    routes.impfungen,
    routes.gUntersuchungen,
    routes.g25,
    routes.g26,
    routes.g37,
    routes.g41,
    routes.g42,
    routes.asbest,
    routes.g20,
    routes.g24,
    routes.betriebsarztMuenchen,
    routes.fuerUnternehmen,
    routes.betreuungsbedarf,
    routes.rueckruf,
    routes.faq,
    routes.kontakt,
    routes.impressum,
  ];

  return staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
