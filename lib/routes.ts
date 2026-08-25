import type { Locale } from "@/lib/i18n";

/**
 * Section anchor ids, per locale.
 *
 * These are the `id` attributes rendered on the page *and* the fragments used
 * in `routes`/`routesEn` below — keeping both sides in one place so a link can
 * never point at an anchor that doesn't exist. When building an English page
 * with a jump target, take its `id` from `anchors.en`, never a literal.
 */
export const anchors = {
  de: {
    leitung: "leitung",
    faq: "faq",
    digitaleProzesse: "digitale-prozesse",
    gesundheitsmanagement: "gesundheitsmanagement",
    datenschutz: "datenschutz",
    impressum: "impressum",
  },
  en: {
    leitung: "medical-director",
    faq: "faq",
    digitaleProzesse: "digital-processes",
    gesundheitsmanagement: "health-management",
    datenschutz: "privacy",
    impressum: "legal-notice",
  },
} as const;

/**
 * Single source of truth for every internal URL in the site.
 *
 * Import this instead of hardcoding path strings in `<Link>`/`redirect()`
 * calls, so that renaming a route only requires a change here. Keys map
 * 1:1 to route groups under `app/`; hash-suffixed values (e.g. `leitung`)
 * point at an anchor on another page rather than a dedicated route.
 *
 * These are the **German** routes, served from the site root. They are already
 * indexed by search engines and must not change — see `routesEn` for the
 * English counterparts.
 */
export const routes = {
  home: "/",
  leistungen: "/leistungen",
  arbeitsmedizin: "/leistungen/arbeitsmedizin",
  arbeitssicherheit: "/leistungen/arbeitssicherheit",
  bahnmedizin: "/leistungen/bahnmedizin",
  impfungen: "/leistungen/impfungen",
  gUntersuchungen: "/leistungen/vorsorge-g-untersuchungen",
  g25: "/leistungen/vorsorge-g-untersuchungen/g25",
  g26: "/leistungen/vorsorge-g-untersuchungen/g26",
  g37: "/leistungen/vorsorge-g-untersuchungen/g37",
  g41: "/leistungen/vorsorge-g-untersuchungen/g41",
  g42: "/leistungen/vorsorge-g-untersuchungen/g42",
  asbest: "/leistungen/vorsorge-g-untersuchungen/asbest",
  g20: "/leistungen/vorsorge-g-untersuchungen/g20",
  g24: "/leistungen/vorsorge-g-untersuchungen/g24",
  digitaleProzesse: "/leistungen#digitale-prozesse",
  gesundheitsmanagement: "/leistungen#gesundheitsmanagement",
  betriebsarztMuenchen: "/betriebsarzt-muenchen",
  fuerUnternehmen: "/fuer-unternehmen",
  betreuungsbedarf: "/betreuungsbedarf",
  rueckruf: "/rueckruf",
  faq: "/faq",
  kontakt: "/kontakt",
  impressum: "/impressum",
  datenschutz: "/impressum#datenschutz",
  leitung: "/#leitung",
  homeFaq: "/#faq",
} as const;

/** Every route key. `routes` and `routesEn` are keyed identically by construction. */
export type RouteKey = keyof typeof routes;

/**
 * English routes, served under `/en/` with translated slugs.
 *
 * Keys mirror `routes` exactly, which is what makes `routes[k]` and
 * `routesEn[k]` counterparts — that pairing drives hreflang, the sitemap and
 * the language switcher from this one place. The `Record<RouteKey, string>`
 * annotation makes a missing or misspelled key a compile error.
 *
 * G-numbers (g20…g42) are the German legal designations for these exams and
 * are kept verbatim; only the surrounding path is translated.
 */
export const routesEn: Record<RouteKey, string> = {
  home: "/en",
  leistungen: "/en/services",
  arbeitsmedizin: "/en/services/occupational-health",
  arbeitssicherheit: "/en/services/occupational-safety",
  bahnmedizin: "/en/services/railway-occupational-medicine",
  impfungen: "/en/services/workplace-vaccinations",
  gUntersuchungen: "/en/services/occupational-health-care",
  g25: "/en/services/occupational-health-care/g25",
  g26: "/en/services/occupational-health-care/g26",
  g37: "/en/services/occupational-health-care/g37",
  g41: "/en/services/occupational-health-care/g41",
  g42: "/en/services/occupational-health-care/g42",
  asbest: "/en/services/occupational-health-care/asbestos",
  g20: "/en/services/occupational-health-care/g20",
  g24: "/en/services/occupational-health-care/g24",
  digitaleProzesse: `/en/services#${anchors.en.digitaleProzesse}`,
  gesundheitsmanagement: `/en/services#${anchors.en.gesundheitsmanagement}`,
  betriebsarztMuenchen: "/en/company-doctor-munich",
  fuerUnternehmen: "/en/for-companies",
  betreuungsbedarf: "/en/assess-your-needs",
  rueckruf: "/en/request-a-callback",
  faq: "/en/faq",
  kontakt: "/en/contact",
  impressum: "/en/legal-notice",
  datenschutz: `/en/legal-notice#${anchors.en.datenschutz}`,
  leitung: `/en#${anchors.en.leitung}`,
  homeFaq: `/en#${anchors.en.faq}`,
};

/** Route table per locale. Use this whenever the locale is a variable. */
export const localeRoutes: Record<Locale, Record<RouteKey, string>> = {
  de: routes,
  en: routesEn,
};

/** Strips the hash and any trailing slash so paths compare reliably. */
function normalizePath(path: string): string {
  const withoutHash = path.split("#")[0];
  return withoutHash.length > 1 ? withoutHash.replace(/\/+$/, "") : withoutHash;
}

/**
 * Reverse lookup: which route key does this pathname belong to?
 *
 * Only anchor-free routes are considered, so `/leistungen` resolves to
 * `leistungen` rather than to `digitaleProzesse` (which shares the path but
 * points at a fragment of it).
 *
 * @returns The matching key, or `null` for a path this locale doesn't serve.
 */
export function getRouteKey(pathname: string, locale: Locale): RouteKey | null {
  const target = normalizePath(pathname);
  const table = localeRoutes[locale];
  for (const key of Object.keys(table) as RouteKey[]) {
    if (table[key].includes("#")) continue;
    if (normalizePath(table[key]) === target) return key;
  }
  return null;
}

/**
 * The same page in another locale — what the language switcher links to.
 *
 * @returns The counterpart path, or that locale's home page when the current
 *   page has no counterpart (which can happen mid-migration, before every
 *   page has been translated).
 */
export function getCounterpartPath(pathname: string, from: Locale, to: Locale): string {
  const key = getRouteKey(pathname, from);
  return key ? localeRoutes[to][key] : localeRoutes[to].home;
}
