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
