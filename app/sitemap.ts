import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    routes.home,
    routes.leistungen,
    routes.arbeitsmedizin,
    routes.arbeitssicherheit,
    routes.bahnmedizin,
    routes.impfungen,
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
