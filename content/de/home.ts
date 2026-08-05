import type { HomePageContent } from "@/content/types";

/** German copy for the homepage. */
export const homeDe: HomePageContent = {
  meta: {
    title: "MonacoMed – Betriebsarzt & Arbeitsmedizin in München",
    description:
      "Arbeitsmedizin, Arbeitssicherheit und Gesundheitsmanagement für Unternehmen in München – digital organisiert, persönlich ärztlich betreut.",
  },
  h1: "Betriebliche Gesundheit einfach gut organisiert.",
  sub: "Betriebsärztliche Betreuung und Arbeitssicherheit für Unternehmen – persönlich betreut und digital organisiert.",
  coverage: "München & Bayern als Kerngebiet · weitere Standorte auf Anfrage",
  heroCtas: [
    { key: "betreuungsbedarf", label: "Betreuungsbedarf kostenlos einschätzen", variant: "primary" },
    { key: "rueckruf", label: "Rückruf anfordern", variant: "ghost" },
  ],
  rail: [
    { n: "01", text: "Betreuung nach ASiG & DGUV Vorschrift 2" },
    { n: "02", text: "Fachärztlich verantwortete Arbeitsmedizin" },
    { n: "03", text: "Digitale Termin- und Dokumentenverwaltung" },
    { n: "04", text: "Feste Ansprechpartner statt Callcenter" },
    { n: "05", text: "Betreuung einzelner oder mehrerer Standorte" },
  ],
  trust: [
    { label: "Fachlichkeit", value: "Betriebsmedizinisch spezialisiert" },
    { label: "Verantwortung", value: "Persönlich ärztlich geführt" },
    { label: "Erreichbarkeit", value: "Rückmeldung in der Regel innerhalb von 48 Stunden" },
    { label: "Zusammenarbeit", value: "Feste Ansprechpartner" },
  ],
  services: {
    label: "Leistungen",
    title: "Gesundheit und Arbeitsschutz aus einer Hand",
    action: { key: "leistungen", label: "Alle Leistungen ansehen", variant: "primary" },
    moreLabel: "Mehr erfahren →",
    items: [
      { id: "01", key: "arbeitsmedizin", title: "Arbeitsmedizin", text: "Betriebsärztliche Betreuung, Vorsorge und Untersuchungen." },
      { id: "02", key: "arbeitssicherheit", title: "Arbeitssicherheit", text: "Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilung, Unterweisungen." },
      { id: "03", key: "bahnmedizin", title: "Bahnmedizin", text: "Eignungs- und Tauglichkeitsuntersuchungen für den Bahnbetrieb." },
      { id: "04", key: "impfungen", title: "Impfungen im Unternehmen", text: "Impfaktionen direkt im Betrieb – von Planung bis Dokumentation." },
      { id: "05", key: "digitaleProzesse", title: "Digitale Prozesse", text: "Terminbuchung, Vorsorgekataster und automatische Erinnerungen." },
      { id: "06", key: "gesundheitsmanagement", title: "Gesundheitsmanagement", text: "BGM, Gesundheitstage, Ergonomie und Prävention." },
    ],
  },
  leitung: {
    label: "Ärztliche Leitung",
    title: "Persönlich geführt, fachärztlich verantwortet",
    name: "Dr. med. univ. David Manghabati",
    quals: ["Facharzt für Innere Medizin", "Betriebsmedizin, Notfallmedizin und Reisemedizin"],
    bio: "Bei MonacoMed liegt die ärztliche Verantwortung persönlich bei Dr. David Manghabati. Unternehmen profitieren von fundierter internistischer Erfahrung, kurzen Entscheidungswegen und arbeitsmedizinischen Empfehlungen, die im betrieblichen Alltag umsetzbar sind.",
    photoAlt: "Dr. med. univ. David Manghabati, Facharzt für Innere Medizin",
  },
  steps: {
    title: "Loslegen statt lange abstimmen",
    lead: "Ein klarer Ablauf – vom ersten Kontakt bis zur laufenden Betreuung.",
    items: [
      { n: "Schritt 01", title: "Anfrage senden", text: "Wenige Angaben reichen: Unternehmen, Anzahl der Mitarbeitenden, Standort und was Sie brauchen." },
      { n: "Schritt 02", title: "Klarheit bekommen", text: "Wir prüfen den Bedarf und zeigen Ihnen, welche Betreuung wirklich sinnvoll ist." },
      { n: "Schritt 03", title: "Angebot erhalten", text: "Sie bekommen ein klares Angebot – verständlich, passend und ohne unnötigen Ballast." },
      { n: "Schritt 04", title: "Starten", text: "Sie sagen zu, wir organisieren den Rest: Termine, Vorsorgen, ASA-Sitzungen, Begehungen, Arbeitssicherheit und digitale Abläufe." },
    ],
  },
  why: [
    { n: "01", title: "Feste Ansprechpartner", text: "Direkte Kommunikation statt anonymer Strukturen." },
    { n: "02", title: "Zentrale Koordination", text: "Arbeitsmedizin, Arbeitssicherheit und Gesundheitsmanagement abgestimmt organisiert." },
    { n: "03", title: "Digitale Prozesse", text: "Online-Terminbuchung, digitale Vorsorgeverwaltung und klare Abläufe." },
    { n: "04", title: "Vor Ort im Unternehmen", text: "Planbare Vorsorge- und Untersuchungstage direkt an Ihrem Standort." },
    { n: "05", title: "Flexibel skalierbar", text: "Von einzelnen Standorten bis zur standortübergreifenden Betreuung." },
  ],
  teaser: {
    label: "Für Unternehmen",
    title: "Mehrere Standorte",
    text: "Zentral koordiniert statt einzeln organisiert.",
    cta: { key: "fuerUnternehmen", label: "Mehr erfahren", variant: "primary" },
  },
  faq: {
    title: "Häufige Fragen vor dem Start",
    lead: "Konkret statt pauschal — die häufigsten Fragen von Entscheidern.",
    allLabel: "Alle Fragen ansehen",
    items: [
      { q: "Braucht mein Unternehmen überhaupt einen Betriebsarzt?", a: "Arbeitgeber müssen eine arbeitsmedizinische Betreuung sicherstellen. Wie diese konkret aussieht, hängt von der Anzahl der Mitarbeitenden, den Tätigkeiten und Gefährdungen ab. Wir helfen bei der Einordnung." },
      { q: "Bietet MonacoMed auch Arbeitssicherheit an?", a: "Ja. MonacoMed verbindet Arbeitsmedizin und Arbeitssicherheit – mit Betriebsarzt, Fachkraft für Arbeitssicherheit, ASA, Begehungen und Gefährdungsbeurteilungen." },
      { q: "Können Termine digital organisiert werden?", a: "Ja. Mitarbeitende können Termine selbst online buchen. HR wird entlastet und behält den Überblick." },
    ],
  },
  contact: {
    title: "Betreuungsbedarf kostenlos einschätzen lassen",
    lead: "Wenige Angaben genügen — wir prüfen den Bedarf und melden uns zur kurzen Einschätzung.",
    sideTitle: "Direkt erreichbar",
    addressLabel: "Adresse",
    onSiteLabel: "Vor Ort",
    onSiteValue: "München · Bayern · weitere Standorte auf Anfrage",
  },
};
