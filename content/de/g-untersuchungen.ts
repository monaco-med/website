import type { ContentPageContent } from "@/content/types";

/**
 * German copy for the G-Untersuchungen overview page.
 *
 * The eight tiles that link onward have their own detail pages (see
 * `content/de/exams.ts`); the remaining four (G30, G31, G35, G46) are listed
 * here only. Link targets are route keys, so they resolve per locale.
 */
export const gUntersuchungenDe: ContentPageContent = {
  meta: {
    title: "Arbeitsmedizinische Vorsorge & G-Untersuchungen",
    description:
      "G20 bis G46: arbeitsmedizinische Vorsorge und Eignungsuntersuchungen für Unternehmen – in München und als Vorsorgetag direkt bei Ihnen vor Ort.",
  },
  breadcrumb: "Arbeitsmedizinische Vorsorge & G-Untersuchungen",
  h1: "Arbeitsmedizinische Vorsorge & G-Untersuchungen",
  tagline:
    "Arbeitsmedizinische Untersuchungen für Unternehmen – in München und direkt bei Ihnen vor Ort",
  intro: [
    "G25, G26, G37 oder G42: Viele arbeitsmedizinische Vorsorgen und Untersuchungen sind noch unter ihren früheren G-Bezeichnungen bekannt.",
    "Heute wird fachlich zwischen arbeitsmedizinischer Vorsorge und Untersuchungen zur Beurteilung der gesundheitlichen Eignung unterschieden. Die früheren G-Grundsätze wurden durch die DGUV Empfehlungen für arbeitsmedizinische Beratungen und Untersuchungen abgelöst.",
    "MonacoMed bietet Unternehmen das gesamte Spektrum arbeitsmedizinischer Vorsorge sowie arbeitsmedizinischer Eignungsbeurteilungen. Wir unterstützen Sie dabei, den richtigen Untersuchungsanlass einzuordnen und organisieren die Durchführung effizient – als Einzeltermin, im Rahmen eines Vorsorgetages oder direkt bei Ihnen im Unternehmen.",
  ],
  heroCtas: [
    { key: "betreuungsbedarf", label: "Betreuungsbedarf einschätzen", variant: "primary" },
  ],
  sections: [
    {
      kind: "tiles",
      title: "Häufig nachgefragte G-Untersuchungen",
      items: [
        {
          title: "G20 – Lärm",
          text: "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit relevanter Lärmexposition. Je nach Exposition kann eine Angebots- oder Pflichtvorsorge erforderlich sein.",
          link: { key: "g20", label: "Mehr erfahren →" },
        },
        {
          title: "G24 – Hauterkrankungen",
          text: "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit erhöhter Hautbelastung, beispielsweise durch Feuchtarbeit oder bestimmte Arbeitsstoffe.",
          link: { key: "g24", label: "Mehr erfahren →" },
        },
        {
          title: "G25 – Fahr-, Steuer- und Überwachungstätigkeiten",
          text: "Arbeitsmedizinische Eignungsbeurteilung für Tätigkeiten, bei denen das sichere Führen, Steuern oder Überwachen von Fahrzeugen, Maschinen oder Anlagen von besonderer Bedeutung ist.",
          link: { key: "g25", label: "Mehr erfahren →" },
        },
        {
          title: "G26 – Atemschutzgeräte",
          text: "Arbeitsmedizinische Vorsorge beziehungsweise Eignungsbeurteilung beim Tragen von Atemschutzgeräten. Art und Umfang richten sich unter anderem nach dem verwendeten Atemschutzgerät und der körperlichen Belastung.",
          link: { key: "g26", label: "Mehr erfahren →" },
        },
        {
          title: "G30 – Hitzearbeiten",
          text: "Arbeitsmedizinische Beratung und Untersuchung bei Tätigkeiten unter besonderer Hitzebelastung.",
        },
        {
          title: "G31 – Überdruck",
          text: "Arbeitsmedizinische Untersuchungen bei Tätigkeiten unter Überdruck, beispielsweise bei bestimmten Tauch- oder Druckluftarbeiten.",
        },
        {
          title: "G35 – Arbeitsaufenthalt im Ausland",
          text: "Arbeitsmedizinische Beratung vor beruflichen Auslandsaufenthalten mit besonderen klimatischen oder gesundheitlichen Belastungen. Je nach Reiseziel können Impfberatung und weitere reisemedizinische Maßnahmen ergänzt werden.",
        },
        {
          title: "G37 – Bildschirmarbeitsplätze",
          text: "Arbeitsmedizinische Angebotsvorsorge bei Tätigkeiten an Bildschirmgeräten mit Beratung sowie einer angemessenen Untersuchung der Augen und des Sehvermögens.",
          link: { key: "g37", label: "Mehr erfahren →" },
        },
        {
          title: "G41 – Arbeiten mit Absturzgefahr",
          text: "Arbeitsmedizinische Eignungsbeurteilung bei Tätigkeiten, bei denen eine besondere Absturzgefährdung besteht und gesundheitliche Einschränkungen zu einer erheblichen Eigen- oder Fremdgefährdung führen können.",
          link: { key: "g41", label: "Mehr erfahren →" },
        },
        {
          title: "G42 – Tätigkeiten mit Infektionsgefährdung",
          text: "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit erhöhter Infektionsgefährdung, beispielsweise im Gesundheitswesen, in Laboratorien oder bei bestimmten Tätigkeiten mit biologischen Arbeitsstoffen.",
          link: { key: "g42", label: "Mehr erfahren →" },
        },
        {
          title: "G46 – Belastungen des Muskel-Skelett-Systems",
          text: "Arbeitsmedizinische Vorsorge und Beratung bei Tätigkeiten mit besonderen körperlichen Belastungen des Muskel-Skelett-Systems.",
        },
        {
          title: "Asbest – Vorsorge bei Asbestexposition",
          text: "Arbeitsmedizinische Pflichtvorsorge bei Tätigkeiten mit Asbest – inklusive nachgehender Vorsorge.",
          link: { key: "asbest", label: "Mehr erfahren →" },
        },
      ],
    },
    {
      kind: "checkList",
      tone: "sand",
      title: "Weitere arbeitsmedizinische Vorsorgen und Untersuchungen",
      lead: "Neben den häufig nachgefragten Untersuchungsanlässen bieten wir das gesamte Spektrum der arbeitsmedizinischen Vorsorge und Eignungsbeurteilung an.",
      intro: "Dazu gehören unter anderem Vorsorgen und Untersuchungen bei:",
      items: [
        "Tätigkeiten mit Gefahrstoffen",
        "Tätigkeiten mit biologischen Arbeitsstoffen",
        "Lärm- und Vibrationsbelastungen",
        "Atemschutz",
        "Bildschirmarbeit",
        "Feuchtarbeit und Hautbelastungen",
        "körperlichen Belastungen",
        "Tätigkeiten mit Absturzgefahr",
        "Fahr-, Steuer- und Überwachungstätigkeiten",
        "Auslandsaufenthalten",
        "besonderen klimatischen Belastungen",
        "Nacht- und Schichtarbeit",
        "weiteren betriebsspezifischen Gefährdungen und Tätigkeitsanforderungen",
      ],
      note: "Sie sind sich nicht sicher, welche Vorsorge oder Untersuchung für Ihre Mitarbeitenden erforderlich ist? Wir unterstützen Sie bei der Einordnung anhand der Tätigkeit und der betrieblichen Gefährdungsbeurteilung.",
      cta: { key: "betreuungsbedarf", label: "Untersuchungsbedarf klären", variant: "primary" },
    },
    {
      kind: "compare",
      title: "Vorsorge oder Eignungsuntersuchung – was ist der Unterschied?",
      cards: [
        {
          title: "Arbeitsmedizinische Vorsorge",
          paragraphs: [
            "Die arbeitsmedizinische Vorsorge dient der Prävention und der individuellen Beratung der Beschäftigten zu möglichen gesundheitlichen Auswirkungen ihrer Tätigkeit.",
            "Je nach Gefährdung kann es sich um Pflichtvorsorge, Angebotsvorsorge oder Wunschvorsorge handeln.",
            "Medizinische Befunde und Diagnosen werden dem Arbeitgeber nicht mitgeteilt. Der Arbeitgeber erhält nach der Vorsorge eine Vorsorgebescheinigung.",
          ],
        },
        {
          title: "Eignungsuntersuchung",
          paragraphs: [
            "Bei einer Eignungsuntersuchung steht die Frage im Vordergrund, ob die gesundheitlichen Voraussetzungen für eine bestimmte Tätigkeit erfüllt sind.",
            "Das kann insbesondere bei sicherheitsrelevanten Tätigkeiten eine Rolle spielen, beispielsweise beim Führen und Steuern von Fahrzeugen oder bei Arbeiten mit besonderer Absturzgefährdung.",
          ],
        },
      ],
      note: "Arbeitsmedizinische Vorsorge und Eignungsbeurteilung verfolgen unterschiedliche Ziele und werden entsprechend getrennt betrachtet.",
    },
    {
      kind: "checkList",
      tone: "sand",
      title: "Vorsorgetage direkt in Ihrem Unternehmen",
      lead: "Bei mehreren Beschäftigten organisieren wir arbeitsmedizinische Vorsorgen und Untersuchungen direkt an Ihrem Standort.",
      intro: "Wir stimmen mit Ihnen im Vorfeld ab:",
      items: [
        "welche Vorsorgen und Untersuchungen benötigt werden,",
        "wie viele Mitarbeitende teilnehmen,",
        "welche Untersuchungsgeräte erforderlich sind,",
        "welche Räumlichkeiten vor Ort benötigt werden und",
        "wie die Terminvergabe organisiert wird.",
      ],
      note: "So lassen sich auch größere Vorsorge- und Untersuchungstage effizient in den Betriebsablauf integrieren.",
    },
    {
      kind: "reasons",
      title: "Arbeitsmedizinische Vorsorge einfach organisiert",
      items: [
        { title: "Feste Ansprechpartner", text: "Direkte Kommunikation und klare Zuständigkeiten." },
        { title: "Vor Ort im Unternehmen", text: "Vorsorge- und Untersuchungstage direkt an Ihrem Standort." },
        { title: "Digitale Terminorganisation", text: "Strukturierte Abläufe und einfache Terminvergabe." },
        { title: "Mehrere Standorte", text: "Zentrale Koordination auch bei standortübergreifender Betreuung." },
        { title: "Kurze Reaktionszeiten", text: "Wir melden uns in der Regel innerhalb von 48 Stunden bei Ihnen zurück." },
      ],
    },
  ],
  cta: {
    label: "Kontakt",
    title: "Sie suchen eine bestimmte G-Untersuchung?",
    text: "Ob G25, G26, G37, G41, G42 oder ein anderer arbeitsmedizinischer Untersuchungsanlass: Wir unterstützen Sie bei der Einordnung und organisieren die passende Vorsorge oder Untersuchung für Ihre Beschäftigten. Senden Sie uns kurz die Tätigkeit, die Anzahl der Mitarbeitenden und Ihren Standort. Wir melden uns in der Regel innerhalb von 48 Stunden bei Ihnen zurück.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Betreuungsbedarf einschätzen",
  },
};
