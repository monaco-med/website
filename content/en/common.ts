import type { CommonContent } from "@/content/types";

/**
 * English strings for the site chrome: header, footer and both lead forms.
 *
 * Terminology follows `docs/TRANSLATION-GLOSSARY.md` — check there before
 * changing any recurring term, since most appear on several pages.
 */
export const commonEn: CommonContent = {
  header: {
    leistungen: "Services",
    leistungenSub: [
      { key: "arbeitsmedizin", label: "Occupational health" },
      { key: "arbeitssicherheit", label: "occupational safety" },
      { key: "bahnmedizin", label: "railway occupational medicine" },
      { key: "impfungen", label: "Workplace vaccinations" },
      { key: "gUntersuchungen", label: "occupational health surveillance and medical examinations" },
      { key: "digitaleProzesse", label: "Digital processes" },
      { key: "gesundheitsmanagement", label: "Health management" },
    ],
    navItems: [
      { key: "fuerUnternehmen", label: "For companies" },
      { key: "leitung", label: "Medical director" },
      { key: "faq", label: "FAQ" },
      { key: "kontakt", label: "Contact" },
    ],
    menuOpen: "Open menu",
    ctaBetreuungsbedarf: "Assess your requirements",
    ctaRueckruf: "Request a callback",
  },
  footer: {
    links: [
      { key: "leistungen", label: "Services" },
      { key: "arbeitsmedizin", label: "Occupational health" },
      { key: "arbeitssicherheit", label: "occupational safety" },
      { key: "bahnmedizin", label: "railway occupational medicine" },
      { key: "impfungen", label: "Vaccinations" },
      { key: "gUntersuchungen", label: "occupational health surveillance and medical examinations" },
      { key: "betriebsarztMuenchen", label: "occupational health physician in Munich" },
      { key: "fuerUnternehmen", label: "For companies" },
      { key: "leitung", label: "Medical director" },
      { key: "faq", label: "FAQ" },
      { key: "kontakt", label: "Contact" },
    ],
    impressum: "Legal notice",
    datenschutz: "Privacy",
    cookies: "Cookies",
  },
  forms: {
    submitting: "Sending…",
    unknownError: "Unknown error.",
    consentBefore: "I have read the",
    consentLinkLabel: "privacy policy",
    consentAfter: "and taken note of it.",
    contact: {
      firma: "Company",
      name: "Name",
      funktion: "Role",
      funktionOptions: [
        "Management",
        "HR / People",
        "Health & safety",
        "Occupational safety specialist",
        "Works council",
      ],
      email: "Email",
      telefon: "Phone",
      mitarbeiterzahl: "Number of employees",
      mitarbeiterzahlOptions: ["1–49", "50–199", "200–499", "500+"],
      standort: "Location(s)",
      start: "Preferred start",
      startPlaceholder: "e.g. Q3 2026",
      leistung: "Service required",
      nachricht: "Message / callback request",
      submit: "Send enquiry",
      success: "Thank you – we have received your enquiry and will be in touch shortly.",
      helper:
        "// Your enquiry is reviewed by a physician directly. You speak to a specialist contact from the outset – no sales team, no call centre.",
    },
    callback: {
      grund: "Reason for your callback request",
      grundPlaceholder: "What is it about?",
      name: "Name",
      unternehmen: "Company (optional)",
      email: "Email",
      telefon: "Phone number",
      telefonHint: "Please provide it if you would like us to call you back.",
      zeit: "Best time to call",
      zeitOptions: ["9am–12pm", "1pm–5pm", "Other"],
      submit: "Request a callback",
      success: "Thank you – we will call you back within your preferred time slot.",
      helper: "// We will call you during your preferred time slot.",
    },
  },
};
