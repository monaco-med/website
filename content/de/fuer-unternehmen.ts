import type { ContentPageContent } from "@/content/types";

/** German copy for the "Für Unternehmen" multi-site pitch page. */
export const fuerUnternehmenDe: ContentPageContent = {
  meta: {
    title: "Für Unternehmen – Betreuung mehrerer Standorte",
    description:
      "Arbeitsmedizinische Betreuung für Unternehmen mit mehreren Standorten: zentral koordiniert, digital dokumentiert, mit festen Ansprechpartnern.",
  },
  heroLabel: "Für Unternehmen",
  h1: "Arbeitsmedizin für Unternehmen mit mehreren Standorten",
  tagline: "Zentrale Koordination statt aufwendiger Einzelabstimmung.",
  intro: [
    "Ob zwei Niederlassungen oder bundesweite Unternehmensstandorte – MonacoMed organisiert die arbeitsmedizinische Betreuung strukturiert, digital und mit festen Ansprechpartnern. So bleiben Prozesse einheitlich und der organisatorische Aufwand für HR gering.",
  ],
  heroCtas: [
    { key: "betreuungsbedarf", label: "Unverbindliche Anfrage", variant: "primary" },
    { key: "rueckruf", label: "Persönliches Erstgespräch", variant: "ghost" },
  ],
  sections: [
    {
      kind: "painGrid",
      title: "Wenn die Organisation zur Herausforderung wird",
      lead: "Mit jedem zusätzlichen Standort steigt der Koordinationsaufwand.",
      intro: "Vielleicht kennen Sie diese Situationen:",
      items: [
        "Termine müssen mit mehreren Standorten abgestimmt werden.",
        "Unterschiedliche Ansprechpartner erschweren die Kommunikation.",
        "Vorsorgefristen geraten aus dem Blick.",
        "Untersuchungen müssen parallel organisiert werden.",
        "Betriebsarzt und Fachkraft für Arbeitssicherheit arbeiten getrennt.",
        "HR verbringt viel Zeit mit Terminplanung und Nachfragen.",
      ],
      close: "// Genau dafür haben wir unsere Prozesse entwickelt.",
    },
    {
      kind: "split",
      tone: "firm",
      label: "Unsere Lösung",
      title: "Standortübergreifende Organisation Ihrer Betreuung",
      lead: "MonacoMed übernimmt die standortübergreifende Organisation Ihrer arbeitsmedizinischen Betreuung.",
      matrixHeading: "Dabei setzen wir auf",
      rows: [
        ["Zentrale ärztliche Verantwortung", "Feste Ansprechpartner"],
        ["Digitale Terminorganisation", "Digitales Vorsorgekataster"],
        ["Koordinierte Untersuchungstage", "Enge Abstimmung mit HR und Fachkraft für Arbeitssicherheit"],
        ["Einheitliche Dokumentation", "Klare Prozesse für alle Standorte"],
      ],
    },
    {
      kind: "steps",
      title: "So läuft die Zusammenarbeit ab",
      items: [
        { n: "01", title: "Kennenlernen", text: "Wir besprechen Ihr Unternehmen, Ihre Standorte und Ihren Betreuungsbedarf." },
        { n: "02", title: "Betreuungskonzept", text: "Gemeinsam entwickeln wir einen strukturierten Betreuungsplan." },
        { n: "03", title: "Organisation", text: "Wir koordinieren Untersuchungstage, Vorsorgen, ASA-Sitzungen und Begehungen." },
        { n: "04", title: "Laufende Betreuung", text: "Mit festen Ansprechpartnern, digitalen Prozessen und kurzen Kommunikationswegen." },
      ],
    },
    {
      kind: "tiles",
      flush: true,
      title: "Digitale Organisation",
      lead: "Je größer das Unternehmen, desto wichtiger sind effiziente Prozesse.",
      intro: "Deshalb setzen wir auf:",
      items: [
        { title: "Online-Terminbuchung", text: "Mitarbeitende buchen Termine selbstständig online." },
        { title: "Digitales Vorsorgekataster", text: "Fälligkeiten und Vorsorgen jederzeit im Überblick." },
        { title: "Automatische Erinnerungen", text: "Weniger Ausfälle und weniger organisatorischer Aufwand." },
        { title: "Kurzfristige Teamtermine", text: "Auch größere Untersuchungstage lassen sich flexibel planen." },
        { title: "Digitale Zusammenarbeit", text: "Sichere Dokumentenübermittlung und einfache Abstimmung mit HR." },
      ],
    },
    {
      kind: "split",
      tone: "firm",
      title: "Arbeitsmedizin und Arbeitssicherheit aus einer Hand",
      lead: "Betriebsarzt und Fachkraft für Arbeitssicherheit arbeiten eng zusammen.",
      matrixHeading: "Dadurch entstehen",
      rows: [
        ["Einheitliche Empfehlungen", "Abgestimmte Maßnahmen"],
        ["Weniger Abstimmungsaufwand", "Klare Verantwortlichkeiten"],
        ["Effiziente Umsetzung"],
      ],
    },
    {
      kind: "whyLines",
      items: [
        { n: "01", title: "Feste Ansprechpartner", text: "Direkte Kommunikation statt wechselnder Zuständigkeiten." },
        { n: "02", title: "Persönlich geführt", text: "Ärztlich verantwortlich durch Dr. med. univ. David Manghabati." },
        { n: "03", title: "Digitale Prozesse", text: "Moderne Organisation statt E-Mail-Chaos." },
        { n: "04", title: "Kurze Reaktionszeiten", text: "Schnelle Rückmeldungen und flexible Terminplanung. Wir melden uns in der Regel innerhalb von 48 Stunden bei Ihnen zurück." },
        { n: "05", title: "Strukturierte Betreuung", text: "Klare Prozesse für HR, Führungskräfte und Mitarbeitende." },
      ],
    },
    {
      kind: "sectorGrid",
      label: "Geeignet für",
      items: [
        "Unternehmen mit mehreren Standorten",
        "Filialunternehmen",
        "Produktionsunternehmen",
        "Logistikunternehmen",
        "Industrie",
        "Dienstleistungsunternehmen",
        "Verwaltungen",
        "Technologieunternehmen",
      ],
    },
    {
      kind: "faq",
      tone: "sand",
      title: "Häufige Fragen",
      items: [
        { q: "Können mehrere Standorte betreut werden?", a: "Ja. Untersuchungstage und Betreuung werden standortübergreifend koordiniert." },
        { q: "Müssen alle Mitarbeitenden nach München kommen?", a: "Nein. Untersuchungen können – je nach Leistung – direkt an Ihren Standorten oder in unserer Praxis erfolgen." },
        { q: "Arbeiten Sie mit unserer Fachkraft für Arbeitssicherheit zusammen?", a: "Ja. Bestehende Fachkräfte werden selbstverständlich eingebunden. Auf Wunsch übernehmen wir die sicherheitstechnische Betreuung ebenfalls." },
        { q: "Wie läuft der Start ab?", a: "Nach einem Erstgespräch erstellen wir ein Betreuungskonzept und koordinieren die weiteren Schritte gemeinsam mit Ihren Ansprechpartnern." },
      ],
    },
  ],
  cta: {
    label: "Kontakt",
    title: "Persönliche Betreuung statt Callcenter",
    text: "Ihre Anfrage wird direkt ärztlich geprüft. Sie sprechen von Anfang an mit einem fachlichen Ansprechpartner und nicht mit einem Vertrieb oder einer Hotline.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Jetzt unverbindlich Kontakt aufnehmen",
  },
};
