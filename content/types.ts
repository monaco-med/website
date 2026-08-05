/**
 * Shape of every translatable string on the site.
 *
 * Copy lives in `content/<locale>/*`, layout lives in components. Each locale
 * module is annotated with the interfaces here, so a missing or misspelled
 * field is a compile error rather than a German sentence surfacing on an
 * English page.
 *
 * Navigation entries reference a `RouteKey` instead of a URL, so a link
 * automatically resolves to the right locale's path (`routes` vs `routesEn`).
 */
import type { RouteKey } from "@/lib/routes";

/** Per-page `<Metadata>` copy. Canonical/alternates are derived from the route key. */
export interface PageMeta {
  title: string;
  description: string;
}

/** The eight G-Untersuchungen detail pages, which all share one template. */
export type ExamSlug = "g25" | "g26" | "g37" | "g41" | "g42" | "asbest" | "g20" | "g24";

/**
 * One body section of an exam page. Sections render in array order and
 * alternate background shading by position, so reordering them is purely a
 * content decision.
 */
export type ExamSection =
  | {
      kind: "checklist";
      title: string;
      /** Sits beside the heading, in the `SectionHead`. */
      lead?: string;
      /** Lead-in line between the heading and the list. */
      intro?: string;
      items: readonly string[];
      /** Qualifying sentence rendered under the list. */
      note?: string;
    }
  | { kind: "prose"; title: string; paragraphs: readonly string[] };

export interface ExamPageContent {
  meta: PageMeta;
  /** Doubles as the breadcrumb leaf and the JSON-LD name. */
  h1: string;
  /** Bold standfirst under the h1. */
  tagline: string;
  intro: readonly string[];
  heroCta: string;
  sections: readonly ExamSection[];
  cta: { label: string; title: string; text: string; ctaLabel: string };
}

export interface NavLink {
  /** Resolved against the current locale's route table. */
  key: RouteKey;
  label: string;
}

export interface ContactFormContent {
  firma: string;
  name: string;
  funktion: string;
  /** First entry is the pre-selected default. */
  funktionOptions: readonly string[];
  email: string;
  telefon: string;
  mitarbeiterzahl: string;
  /** First entry is the pre-selected default. */
  mitarbeiterzahlOptions: readonly string[];
  standort: string;
  start: string;
  startPlaceholder: string;
  leistung: string;
  nachricht: string;
  submit: string;
  success: string;
  helper: string;
}

export interface CallbackFormContent {
  grund: string;
  grundPlaceholder: string;
  name: string;
  unternehmen: string;
  email: string;
  telefon: string;
  telefonHint: string;
  zeit: string;
  /** First entry is the pre-selected default. */
  zeitOptions: readonly string[];
  submit: string;
  success: string;
  helper: string;
}

export interface CommonContent {
  header: {
    /** Label of the dropdown parent, shown on desktop and mobile. */
    leistungen: string;
    leistungenSub: readonly NavLink[];
    navItems: readonly NavLink[];
    /** Accessible name for the mobile burger button. */
    menuOpen: string;
    ctaBetreuungsbedarf: string;
    ctaRueckruf: string;
  };
  footer: {
    links: readonly NavLink[];
    impressum: string;
    datenschutz: string;
    cookies: string;
  };
  forms: {
    submitting: string;
    unknownError: string;
    /** Consent sentence, split around the inline link to the privacy policy. */
    consentBefore: string;
    consentLinkLabel: string;
    consentAfter: string;
    contact: ContactFormContent;
    callback: CallbackFormContent;
  };
}
