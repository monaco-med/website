/**
 * Locale primitives for the German/English site.
 *
 * German is the default locale and is served from the site root with its
 * original URLs (`/leistungen`); English is served under `/en/` with
 * translated slugs (see `routesEn` in `lib/routes.ts`). That split is
 * deliberate — the German URLs are already indexed and must not change.
 *
 * There is no locale middleware and no runtime locale detection: each route
 * file lives in either the `(de)` or `(en)` route group and therefore knows
 * its own locale statically.
 */

/**
 * Whether the English site is publicly live.
 *
 * David's requirement is that English ships only once every page is
 * translated — never half-and-half. This one flag enforces that rather than
 * relying on discipline: while it is `false` the English tree stays
 * `noindex`, no `hreflang` alternates are emitted (pointing search engines at
 * pages that don't exist yet would be worse than emitting nothing), the
 * sitemap lists German only, and the language switcher stays hidden.
 *
 * Flipping this to `true` is the launch step (T22).
 */
export const englishLaunched = false;

export type Locale = "de" | "en";

export const locales = ["de", "en"] as const satisfies readonly Locale[];

/** Served at the site root, without a URL prefix. */
export const defaultLocale: Locale = "de";

/** Value for the `<html lang>` attribute. */
export const htmlLang: Record<Locale, string> = {
  de: "de",
  en: "en",
};

/** Value for Open Graph `og:locale`. */
export const openGraphLocale: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
};

/**
 * `hreflang` values used in `alternates.languages`. Google matches these
 * case-insensitively against the visitor's language preference.
 */
export const hreflang: Record<Locale, string> = {
  de: "de-DE",
  en: "en",
};

/** Label for the language switcher, in the language being switched *to*. */
export const localeName: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
