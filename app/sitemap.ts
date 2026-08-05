import type { MetadataRoute } from "next";
import { englishLaunched, hreflang } from "@/lib/i18n";
import { localeRoutes, type RouteKey } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

/**
 * Generates `/sitemap.xml` (Next.js file-convention route).
 *
 * Listed by route *key* rather than path, so each entry can emit both
 * languages and cross-link them via `alternates.languages` — the sitemap
 * counterpart to the `hreflang` tags in `lib/seo.ts`.
 *
 * New pages must be added to `pages` manually; routes are not discovered
 * automatically. Anchor-only keys (`leitung`, `homeFaq`, …) are deliberately
 * omitted, since they resolve to a URL already listed here.
 *
 * While `englishLaunched` is false only German is listed, so the English tree
 * is not advertised before it is finished.
 */
const pages: RouteKey[] = [
  "home",
  "leistungen",
  "arbeitsmedizin",
  "arbeitssicherheit",
  "bahnmedizin",
  "impfungen",
  "gUntersuchungen",
  "g25",
  "g26",
  "g37",
  "g41",
  "g42",
  "asbest",
  "g20",
  "g24",
  "betriebsarztMuenchen",
  "fuerUnternehmen",
  "betreuungsbedarf",
  "rueckruf",
  "faq",
  "kontakt",
  "impressum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const absolute = (path: string) => `${siteConfig.url}${path}`;

  return pages.flatMap((key) => {
    const german = {
      url: absolute(localeRoutes.de[key]),
      lastModified,
      ...(englishLaunched
        ? {
            alternates: {
              languages: {
                [hreflang.de]: absolute(localeRoutes.de[key]),
                [hreflang.en]: absolute(localeRoutes.en[key]),
              },
            },
          }
        : {}),
    };

    if (!englishLaunched) return [german];

    return [
      german,
      {
        url: absolute(localeRoutes.en[key]),
        lastModified,
        alternates: {
          languages: {
            [hreflang.de]: absolute(localeRoutes.de[key]),
            [hreflang.en]: absolute(localeRoutes.en[key]),
          },
        },
      },
    ];
  });
}
