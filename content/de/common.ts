/**
 * German strings for the site chrome: header, footer and both lead forms.
 *
 * Extracted verbatim from the components — this file introduced no wording
 * changes. See `content/en/common.ts` for the English counterpart.
 */
import type { CommonContent } from "@/content/types";

export const commonDe: CommonContent = {
  header: {
    leistungen: "Leistungen",
    leistungenSub: [
      { key: "arbeitsmedizin", label: "Arbeitsmedizin" },
      { key: "arbeitssicherheit", label: "Arbeitssicherheit" },
      { key: "bahnmedizin", label: "Bahnmedizin" },
      { key: "impfungen", label: "Impfungen im Unternehmen" },
      { key: "gUntersuchungen", label: "Vorsorge & G-Untersuchungen" },
      { key: "digitaleProzesse", label: "Digitale Prozesse" },
      { key: "gesundheitsmanagement", label: "Gesundheitsmanagement" },
    ],
    navItems: [
      { key: "fuerUnternehmen", label: "Für Unternehmen" },
      { key: "leitung", label: "Ärztliche Leitung" },
      { key: "faq", label: "FAQ" },
      { key: "kontakt", label: "Kontakt" },
    ],
    menuOpen: "Menü öffnen",
    ctaBetreuungsbedarf: "Betreuungsbedarf einschätzen",
    ctaRueckruf: "Rückruf anfordern",
  },
  footer: {
    links: [
      { key: "leistungen", label: "Leistungen" },
      { key: "arbeitsmedizin", label: "Arbeitsmedizin" },
      { key: "arbeitssicherheit", label: "Arbeitssicherheit" },
      { key: "bahnmedizin", label: "Bahnmedizin" },
      { key: "impfungen", label: "Impfungen" },
      { key: "gUntersuchungen", label: "Vorsorge & G-Untersuchungen" },
      { key: "betriebsarztMuenchen", label: "Betriebsarzt München" },
      { key: "fuerUnternehmen", label: "Für Unternehmen" },
      { key: "leitung", label: "Ärztliche Leitung" },
      { key: "faq", label: "FAQ" },
      { key: "kontakt", label: "Kontakt" },
    ],
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    cookies: "Cookies",
  },
  forms: {
    submitting: "Wird gesendet…",
    unknownError: "Unbekannter Fehler.",
    consentBefore: "Ich habe die",
    consentLinkLabel: "Datenschutzerklärung",
    consentAfter: "zur Kenntnis genommen.",
    contact: {
      firma: "Firma",
      name: "Name",
      funktion: "Funktion",
      funktionOptions: [
        "Geschäftsführung",
        "HR / Personal",
        "Arbeitsschutz",
        "Fachkraft für Arbeitssicherheit",
        "Betriebsrat",
      ],
      email: "E-Mail",
      telefon: "Telefon",
      mitarbeiterzahl: "Anzahl der Mitarbeitenden",
      mitarbeiterzahlOptions: ["1–49", "50–199", "200–499", "500+"],
      standort: "Standort(e)",
      start: "Gewünschter Start",
      startPlaceholder: "z. B. Q3 2026",
      leistung: "Gewünschte Leistung",
      nachricht: "Nachricht / Rückrufwunsch",
      submit: "Anfrage senden",
      success: "Vielen Dank – Ihre Anfrage ist eingegangen. Wir melden uns kurzfristig.",
      helper:
        "// Ihre Anfrage wird direkt ärztlich geprüft. Sie sprechen von Anfang an mit einem fachlichen Ansprechpartner – ohne Umwege über Vertrieb oder Callcenter.",
    },
    callback: {
      grund: "Grund des Rückrufwunsches",
      grundPlaceholder: "Worum geht es?",
      name: "Name",
      unternehmen: "Unternehmen (optional)",
      email: "E-Mail",
      telefon: "Telefonnummer",
      telefonHint: "Bitte angeben, wenn Sie einen telefonischen Rückruf wünschen.",
      zeit: "Beste Zeit für den Rückruf",
      zeitOptions: ["9–12 Uhr", "13–17 Uhr", "Sonstige"],
      submit: "Rückruf anfordern",
      success: "Vielen Dank – wir rufen Sie im gewünschten Zeitfenster zurück.",
      helper: "// Wir melden uns zum gewünschten Zeitfenster telefonisch bei Ihnen.",
    },
  },
};
