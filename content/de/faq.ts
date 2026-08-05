import type { FaqPageContent } from "@/content/types";

/**
 * German copy for the full FAQ page — the canonical, expanded list. The
 * homepage carries a shorter teaser subset of the same questions.
 */
export const faqDe: FaqPageContent = {
  meta: {
    title: "Häufige Fragen (FAQ)",
    description:
      "Antworten auf die häufigsten Fragen zu Betriebsarzt, Arbeitsmedizin, Arbeitssicherheit und Zusammenarbeit mit MonacoMed.",
  },
  label: "FAQ",
  h1: "Häufige Fragen vor dem Start",
  lead: "Konkret statt pauschal — Antworten auf die häufigsten Fragen von Entscheidern.",
  items: [
    {
      q: "Braucht mein Unternehmen überhaupt einen Betriebsarzt?",
      a: "Arbeitgeber müssen eine arbeitsmedizinische Betreuung sicherstellen. Wie diese konkret aussieht, hängt von der Anzahl der Mitarbeitenden, den Tätigkeiten und Gefährdungen ab. Wir helfen bei der Einordnung.",
    },
    {
      q: "Bietet MonacoMed auch Arbeitssicherheit an?",
      a: "Ja. MonacoMed verbindet Arbeitsmedizin und Arbeitssicherheit – mit Betriebsarzt, Fachkraft für Arbeitssicherheit, ASA, Begehungen und Gefährdungsbeurteilungen.",
    },
    {
      q: "Können Termine digital organisiert werden?",
      a: "Ja. Mitarbeitende können Termine selbst online buchen. HR wird entlastet und behält den Überblick.",
    },
    {
      q: "Können Sie mehrere Standorte betreuen?",
      a: "Ja, nach Abstimmung. Wir betreuen Unternehmen in München, Bayern und weiteren Regionen mit zentraler Koordination und planbaren Vor-Ort-Terminen.",
    },
    {
      q: "Was kostet die Betreuung?",
      a: "Das hängt vom tatsächlichen Bedarf ab. Nach kurzer Klärung erhalten Sie ein nachvollziehbares Angebot.",
    },
  ],
  backLabel: "Zurück zur Startseite",
  cta: {
    title: "Mehr Fragen?",
    text: "Wir beantworten sie gern persönlich – kurz und unverbindlich.",
    ctaLabel: "Rückruf anfordern",
  },
};
