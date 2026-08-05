import type { ContentPageContent } from "@/content/types";

/**
 * German copy for the Betriebsarzt München local-SEO landing page.
 *
 * Sits outside the Leistungen tree, so it shows an eyebrow label instead of a
 * breadcrumb and emits Physician structured data rather than a breadcrumb
 * trail (see the route file).
 */
export const betriebsarztMuenchenDe: ContentPageContent = {
  meta: {
    title: "Betriebsarzt München",
    description:
      "Ihr Betriebsarzt in München: Praxis in der Heidemannstraße, Untersuchungstage vor Ort im Betrieb, kurzfristige Termine – fachärztlich geführt.",
  },
  heroLabel: "Betriebsarzt München",
  h1: "Ihr Betriebsarzt in München",
  tagline: "Praxis in München – Einsätze direkt in Ihrem Betrieb.",
  intro: [
    "MonacoMed betreut Unternehmen in München und Bayern: aus der Praxis in der Heidemannstraße 38 und mit Untersuchungstagen vor Ort in Ihrem Betrieb. Weitere Standorte auf Anfrage.",
  ],
  heroCtas: [
    { key: "betreuungsbedarf", label: "Betreuungsbedarf kostenlos einschätzen", variant: "primary" },
    { key: "rueckruf", label: "Rückruf anfordern", variant: "ghost" },
  ],
  sections: [
    {
      kind: "reasons",
      title: "Vor Ort statt aus der Ferne",
      lead: "Ein Münchner Betriebsarzt mit kurzen Wegen – kein anonymer Großanbieter.",
      items: [
        {
          title: "Kurze Wege",
          text: "Praxis im Münchner Norden, Einsätze im Stadtgebiet und Umland – schnell erreichbar, schnell vor Ort.",
        },
        {
          title: "Betrieb oder Praxis",
          text: "Untersuchungstage direkt bei Ihnen oder Einzeltermine in der Praxis – je nachdem, was besser passt.",
        },
        {
          title: "Fester ärztlicher Ansprechpartner",
          text: "Ärztlich geführt durch Dr. med. univ. David Manghabati – persönlich, nicht über eine Hotline.",
        },
      ],
    },
    {
      kind: "splitLinks",
      tone: "firm",
      label: "Leistungen",
      title: "Alles aus einer Hand",
      lead: "Arbeitsmedizin, Arbeitssicherheit und Gesundheitsmanagement – koordiniert von einem Team, dokumentiert in einem System.",
      matrixHeading: "Im Überblick",
      links: [
        { key: "arbeitsmedizin", label: "Arbeitsmedizin & Vorsorge" },
        { key: "arbeitssicherheit", label: "Arbeitssicherheit & Gefährdungsbeurteilung" },
        { key: "impfungen", label: "Impfungen im Unternehmen" },
        { key: "fuerUnternehmen", label: "Betreuung mehrerer Standorte" },
      ],
    },
    {
      kind: "faq",
      title: "Häufige Fragen zum Standort",
      items: [
        {
          q: "Betreuen Sie nur Unternehmen in München?",
          a: "Kerngebiet sind München und Bayern. Unternehmen mit weiteren Standorten betreuen wir auf Anfrage – zentral koordiniert.",
        },
        {
          q: "Können Mitarbeitende einzeln in die Praxis kommen?",
          a: "Ja. Einzeltermine finden in der Praxis in der Heidemannstraße 38 statt – online buchbar, mit Erinnerung vor dem Termin.",
        },
        {
          q: "Wie schnell bekommen wir Termine?",
          a: "Kurzfristig – auch für ganze Teams. Die Terminvergabe läuft digital, freie Zeitfenster sind direkt sichtbar.",
        },
      ],
    },
  ],
  cta: {
    label: "Kontakt",
    title: "Sprechen wir über Ihren Betrieb",
    text: "Wenige Angaben genügen – Ihre Anfrage wird direkt ärztlich geprüft, ohne Vertrieb oder Callcenter.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Betreuungsbedarf kostenlos einschätzen",
  },
};
