import type { Metadata } from "next";
import { englishLaunched, hreflang, type Locale } from "@/lib/i18n";
import { localeRoutes, type RouteKey } from "@/lib/routes";

/**
 * Builds the `alternates` block for a page: its canonical URL plus the
 * `hreflang` links to the same page in the other language.
 *
 * Reciprocity matters — Google ignores a `hreflang` annotation that the
 * target page doesn't point back at. Deriving both sides from the shared
 * route-key map (`routes` ↔ `routesEn`) is what guarantees that, rather than
 * hand-maintaining the pairs per page.
 *
 * `x-default` points at German: it is the primary market, and the right
 * landing spot for a visitor whose language we don't otherwise match.
 *
 * While `englishLaunched` is false this returns the canonical only, so we
 * never advertise English URLs that aren't published yet.
 *
 * @param routeKey - Identifies the page; the same key resolves to the German
 *   and English paths.
 * @param locale - Which language this particular page is.
 */
export function buildAlternates(routeKey: RouteKey, locale: Locale): Metadata["alternates"] {
  const canonical = localeRoutes[locale][routeKey];
  if (!englishLaunched) return { canonical };

  return {
    canonical,
    languages: {
      [hreflang.de]: localeRoutes.de[routeKey],
      [hreflang.en]: localeRoutes.en[routeKey],
      "x-default": localeRoutes.de[routeKey],
    },
  };
}
