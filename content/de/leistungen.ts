import type { ContentPageContent } from "@/content/types";
import { anchors } from "@/lib/routes";

/**
 * German copy for the services overview page.
 *
 * Each body section carries an anchor id, because other pages deep-link into
 * them (`routes.digitaleProzesse`, `routes.gesundheitsmanagement`). Those two
 * ids come from `anchors` rather than being written out, so the link and the
 * target can never drift apart across locales.
 */
export const leistungenDe: ContentPageContent = {
  meta: {
    title: "Leistungen – Arbeitsmedizin, Arbeitssicherheit & mehr",
    description:
      "Alle Leistungen von MonacoMed im Überblick: Arbeitsmedizin, Arbeitssicherheit, Bahnmedizin, Impfungen, digitale Prozesse und Gesundheitsmanagement.",
  },
  heroLabel: "Leistungen",
  h1: "Gesundheit und Arbeitsschutz aus einer Hand",
  intro: [
    "Arbeitsmedizin, Arbeitssicherheit und Gesundheitsmanagement – persönlich betreut und digital organisiert.",
  ],
  heroCtas: [],
  index: {
    moreLabel: "Mehr erfahren →",
    rows: [
      { id: "01", key: "arbeitsmedizin", title: "Arbeitsmedizin", text: "Betriebsärztliche Betreuung, Vorsorge und Untersuchungen nach ASiG und DGUV V2." },
      { id: "02", key: "arbeitssicherheit", title: "Arbeitssicherheit", text: "Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilung und Unterweisungen." },
      { id: "03", key: "bahnmedizin", title: "Bahnmedizin", text: "Eignungs- und Tauglichkeitsuntersuchungen für den Bahnbetrieb – als ermächtigte Untersuchungsstelle." },
      { id: "04", key: "impfungen", title: "Impfungen im Unternehmen", text: "Impfaktionen direkt im Betrieb – von der Planung bis zur Dokumentation." },
      { id: "05", key: "digitaleProzesse", title: "Digitale Prozesse", text: "Online-Terminbuchung, Vorsorgekataster und automatische Erinnerungen." },
      { id: "06", key: "gesundheitsmanagement", title: "Gesundheitsmanagement", text: "BGM, Gesundheitstage, Ergonomie und Prävention für Ihr Team." },
      { id: "07", key: "gUntersuchungen", title: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", text: "G25, G37, G41 und weitere Untersuchungen – geplant, durchgeführt und dokumentiert." },
    ],
  },
  sections: [
    {
      kind: "tiles",
      id: "arbeitsmedizin",
      label: "Leistungsbereich 01",
      title: "Arbeitsmedizin",
      action: { key: "arbeitsmedizin", label: "Mehr erfahren", variant: "ghost" },
      items: [
        {
          title: "Betriebsärztliche Betreuung",
          text: "Nach ASiG und DGUV V2 – persönlich begleitet.",
        },
        {
          title: "Arbeitsmedizinische Vorsorge",
          text: "Pflicht-, Angebots- und Wunschvorsorge klar organisiert.",
        },
        {
          title: "Eignungsuntersuchungen",
          text: "Bei konkretem Anlass, sauber von Vorsorge getrennt.",
        },
        {
          title: "ASA & Begehungen",
          text: "Teilnahme, Dokumentation und konkrete Empfehlungen.",
        },
        {
          title: "BEM & Mutterschutz",
          text: "Arbeitsmedizinische Beratung für passende betriebliche Lösungen.",
        },
        {
          title: "Impfaktionen",
          text: "Direkt im Betrieb –",
          link: { key: "impfungen", label: "alle Details" },
          textAfter: ".",
        },
      ],
    },
    {
      kind: "tiles",
      tone: "sand",
      id: "arbeitssicherheit",
      label: "Leistungsbereich 02",
      title: "Arbeitssicherheit",
      action: { key: "arbeitssicherheit", label: "Mehr erfahren", variant: "ghost" },
      items: [
        {
          title: "Fachkraft für Arbeitssicherheit",
          text: "Sicherheitstechnische Betreuung und Beratung.",
        },
        {
          title: "Gefährdungsbeurteilung",
          text: "Bewertung, Maßnahmenplanung und Dokumentation.",
        },
        {
          title: "Unterweisungen",
          text: "Praxisnah, verständlich und auf den Betrieb abgestimmt.",
        },
        {
          title: "Brandschutz",
          text: "Unterweisung und praktische Schulung im Brandschutz.",
        },
        {
          title: "Maßnahmenverfolgung",
          text: "Offene Punkte strukturiert nachhalten.",
        },
      ],
    },
    {
      kind: "tiles",
      id: "bahnmedizin",
      label: "Leistungsbereich 03",
      title: "Bahnmedizin",
      action: { key: "bahnmedizin", label: "Mehr erfahren", variant: "ghost" },
      items: [
        {
          title: "Triebfahrzeugführer (§ 16 TfV)",
          text: "Tauglichkeitsuntersuchungen für Lokführer gemäß den gesetzlichen Vorgaben.",
        },
        {
          title: "VDV-Schrift 714",
          text: "Untersuchungen für Beschäftigte im öffentlichen Verkehrs- und Bahnbereich.",
        },
        {
          title: "EBO-Untersuchungen",
          text: "Eignungsuntersuchungen für sicherheitsrelevante Tätigkeiten im Eisenbahnbetrieb.",
        },
        {
          title: "DB Anforderungsgruppen A & B",
          text: "Durchführung entsprechend den geltenden Konzernrichtlinien.",
        },
        {
          title: "Weitere sicherheitsrelevante Tätigkeiten",
          text: "U. a. Sicherungsposten (SiPo) und Beschäftigte mit besonderen Anforderungen.",
        },
      ],
    },
    {
      kind: "tiles",
      tone: "sand",
      id: "impfungen",
      label: "Leistungsbereich 04",
      title: "Impfungen im Unternehmen",
      action: { key: "impfungen", label: "Mehr erfahren", variant: "ghost" },
      items: [
        {
          title: "Grippeschutzimpfung",
          text: "Die jährliche Aktion im Herbst – planbar für das ganze Team.",
        },
        {
          title: "Reisemedizinische Impfungen",
          text: "Beratung und Impfungen vor Dienstreisen – fachärztlich durchgeführt.",
        },
        {
          title: "Tätigkeitsbezogene Impfungen",
          text: "z. B. Hepatitis A/B bei entsprechender Gefährdung.",
        },
        {
          title: "Impftage im Betrieb",
          text: "Durchführung direkt vor Ort – mit wenig Ausfallzeit.",
        },
        {
          title: "Dokumentation & Erinnerung",
          text: "Nachweise und automatische Auffrischungs-Erinnerungen über das Kataster.",
        },
      ],
    },
    {
      kind: "tiles",
      id: anchors.de.digitaleProzesse,
      label: "Leistungsbereich 05",
      title: "Digitale Prozesse",
      items: [
        {
          title: "Digitales Vorsorgekataster",
          text: "Vorsorgen, Fristen und Fälligkeiten jederzeit im Blick.",
        },
        {
          title: "Online-Terminbuchung",
          text: "Mitarbeitende buchen Termine selbstständig online.",
        },
        {
          title: "Automatische Erinnerungen",
          text: "Weniger Ausfälle und weniger organisatorischer Aufwand.",
        },
        {
          title: "Vorabinformationen",
          text: "Wichtige Infos digital vor dem Termin.",
        },
        {
          title: "Digitale Zusammenarbeit",
          text: "Klare Abläufe, sichere Dokumente und weniger Papierverkehr.",
        },
      ],
    },
    {
      kind: "tiles",
      tone: "sand",
      id: anchors.de.gesundheitsmanagement,
      label: "Leistungsbereich 06",
      title: "Gesundheitsmanagement",
      items: [
        {
          title: "BGM",
          text: "Gesundheitsangebote passend zum Unternehmen.",
        },
        {
          title: "Gesundheitstage",
          text: "Aktionen zu Vorsorge, Bewegung, Ergonomie oder Impfungen.",
        },
        {
          title: "Ergonomie",
          text: "Gesunde Gestaltung von Bildschirm- und Arbeitsplätzen.",
        },
        {
          title: "Psychische Belastung",
          text: "Strukturierte Analyse und umsetzbare Maßnahmen.",
        },
        {
          title: "Prävention",
          text: "Angebote zu Stress, Bewegung, Schlaf oder Herz-Kreislauf.",
        },
      ],
    },
    {
      kind: "tiles",
      id: "vorsorge-g-untersuchungen",
      label: "Leistungsbereich 07",
      title: "Arbeitsmedizinische Vorsorge & G-Untersuchungen",
      action: { key: "gUntersuchungen", label: "Mehr erfahren", variant: "ghost" },
      items: [
        {
          title: "G25 – Fahr-, Steuer- und Überwachungstätigkeiten",
          text: "Eignungsbeurteilung für Fahrzeuge, Maschinen und Anlagen –",
          link: { key: "g25", label: "mehr zur G25" },
          textAfter: ".",
        },
        {
          title: "G37 – Bildschirmarbeitsplätze",
          text: "Vorsorge bei Bildschirmarbeit mit Seh- und Beratungsanteil –",
          link: { key: "g37", label: "mehr zur G37" },
          textAfter: ".",
        },
        {
          title: "G41 – Arbeiten mit Absturzgefahr",
          text: "Eignungsbeurteilung für Tätigkeiten mit besonderer Absturzgefährdung –",
          link: { key: "g41", label: "mehr zur G41" },
          textAfter: ".",
        },
        {
          title: "G42 – Tätigkeiten mit Infektionsgefährdung",
          text: "Vorsorge für Gesundheitswesen, Labor und weitere Risikobereiche –",
          link: { key: "g42", label: "mehr zur G42" },
          textAfter: ".",
        },
        {
          title: "G20, G24 & Asbestvorsorge",
          text: "Vorsorge bei Lärm, Hautbelastungen und Asbestexposition –",
          link: { key: "gUntersuchungen", label: "alle G-Untersuchungen" },
          textAfter: ".",
        },
      ],
    },
  ],
  cta: {
    label: "Kontakt",
    title: "Welche Leistungen braucht Ihr Betrieb?",
    text: "Wenige Angaben genügen – Ihre Anfrage wird direkt ärztlich geprüft, ohne Vertrieb oder Callcenter.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Betreuungsbedarf kostenlos einschätzen",
  },
};
