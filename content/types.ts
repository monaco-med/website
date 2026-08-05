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

/**
 * A tile body. Most are plain text; some embed a single inline link, which is
 * modelled explicitly so the link target can resolve per locale rather than
 * being baked into the copy.
 */
export interface TileItemContent {
  title: string;
  text: string;
  link?: { key: RouteKey; label: string };
  /** Text following the inline link, e.g. a closing full stop. */
  textAfter?: string;
}

export interface NavLink {
  /** Resolved against the current locale's route table. */
  key: RouteKey;
  label: string;
}

/** A call-to-action button whose target resolves per locale. */
export interface CtaLink extends NavLink {
  variant: "primary" | "ghost" | "light";
}

/** Closing call-to-action band. `ctaKey` resolves against the locale's routes. */
export interface CtaBandContent {
  label: string;
  title: string;
  text: string;
  ctaKey: RouteKey;
  ctaLabel: string;
}

/**
 * A cell in a `Matrix` row. Most are plain text; the left-hand cell of a
 * comparison row is usually emphasised, which is modelled here rather than
 * embedding markup in the copy.
 */
export type MatrixCell = string | { bold: string };

export interface FaqItemContent {
  q: string;
  a: string;
}

/**
 * One body section of a service page. `tone` selects the band background;
 * unlike the exam pages these don't follow a strict alternation, so it is
 * stated explicitly rather than derived from position.
 */
export type PageSection =
  | {
      kind: "tiles";
      tone?: "firm" | "sand";
      /** Anchor id, when the section is a deep-link target. */
      id?: string;
      /** Eyebrow label above the heading. */
      label?: string;
      /** Right-aligned link beside the heading. */
      action?: CtaLink;
      title: string;
      lead?: string;
      /** Lead-in line between the heading and the grid. */
      intro?: string;
      /** Set on a section that should sit flush against the one above it. */
      flush?: boolean;
      items: readonly TileItemContent[];
    }
  | {
      kind: "steps";
      tone?: "firm" | "sand";
      title: string;
      lead?: string;
      flush?: boolean;
      items: readonly { n: string; title: string; text: string }[];
    }
  | {
      kind: "faq";
      tone?: "firm" | "sand";
      title: string;
      lead?: string;
      flush?: boolean;
      items: readonly FaqItemContent[];
    }
  | {
      kind: "examList";
      tone?: "firm" | "sand";
      title: string;
      lead?: string;
      flush?: boolean;
      items: readonly { n: string; title: string; text: string }[];
    }
  | {
      kind: "reasons";
      tone?: "firm" | "sand";
      title: string;
      lead?: string;
      flush?: boolean;
      items: readonly { title: string; text: string }[];
    }
  /** Single-column checklist, optionally followed by a standalone CTA button. */
  | {
      kind: "checkList";
      tone?: "firm" | "sand";
      flush?: boolean;
      title: string;
      lead?: string;
      intro?: string;
      items: readonly string[];
      note?: string;
      cta?: CtaLink;
    }
  /** Two cards contrasting a pair of concepts. */
  | {
      kind: "compare";
      tone?: "firm" | "sand";
      flush?: boolean;
      title: string;
      lead?: string;
      cards: readonly { title: string; paragraphs: readonly string[] }[];
      note?: string;
    }
  /** Problem statements, as a two-column grid. */
  | {
      kind: "painGrid";
      tone?: "firm" | "sand";
      flush?: boolean;
      title: string;
      lead?: string;
      intro?: string;
      items: readonly string[];
      /** Closing aside under the grid, in the mono "// ..." style. */
      close?: string;
    }
  /** Industry tags under a bare eyebrow label — no section heading. */
  | {
      kind: "sectorGrid";
      tone?: "firm" | "sand";
      flush?: boolean;
      label: string;
      items: readonly string[];
    }
  /** The full-width "Warum MonacoMed?" band. Renders its own section wrapper. */
  | {
      kind: "whyLines";
      items: readonly { n: string; title: string; text: string }[];
    }
  /** Two-column band: prose on the left, a list of links on the right. */
  | {
      kind: "splitLinks";
      tone?: "firm" | "sand";
      flush?: boolean;
      label?: string;
      title: string;
      lead: string;
      matrixHeading: string;
      links: readonly NavLink[];
    }
  /** Two-column band: prose on the left, a `Matrix` table on the right. */
  | {
      kind: "split";
      tone?: "firm" | "sand";
      flush?: boolean;
      label?: string;
      title: string;
      lead: string;
      matrixHeading: string;
      rows: readonly (readonly MatrixCell[])[];
    };

/** A row in the services index list at the top of the overview page. */
export interface IndexRow {
  id: string;
  key: RouteKey;
  title: string;
  text: string;
}

export interface ContentPageContent {
  meta: PageMeta;
  /** Optional index list rendered between the hero and the body sections. */
  index?: { rows: readonly IndexRow[]; moreLabel: string };
  /**
   * Breadcrumb leaf and JSON-LD name. Omitted on landing pages that sit
   * outside the Leistungen tree and show an eyebrow label instead.
   */
  breadcrumb?: string;
  /** Eyebrow label above the h1, used when there is no breadcrumb. */
  heroLabel?: string;
  h1: string;
  /** Bold standfirst under the h1. Omit on pages that don't have one. */
  tagline?: string;
  intro: readonly string[];
  heroCtas: readonly CtaLink[];
  sections: readonly PageSection[];
  cta: CtaBandContent;
}

/** Callback-request page: heading block above the `CallbackForm`. */
export interface CallbackPageContent {
  meta: PageMeta;
  label: string;
  h1: string;
  lead: string;
}

/** Needs-assessment page: heading block plus the contact aside beside the form. */
export interface LeadPageContent {
  meta: PageMeta;
  h1: string;
  lead: string;
  sideTitle: string;
  addressLabel: string;
  onSiteLabel: string;
  onSiteValue: string;
}

/** Contact hub: a triage step offering one route per visitor intent. */
export interface ContactHubContent {
  meta: PageMeta;
  label: string;
  h1: string;
  sub: string;
  choices: readonly {
    label: string;
    title: string;
    text: string;
    actions: readonly CtaLink[];
  }[];
  sideNote: string;
}

export interface FaqPageContent {
  meta: PageMeta;
  label: string;
  h1: string;
  lead: string;
  items: readonly FaqItemContent[];
  backLabel: string;
  cta: { title: string; text: string; ctaLabel: string };
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
