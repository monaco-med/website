import type { Metadata } from "next";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import FaqList from "@/components/FaqList";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description:
    "Antworten auf die häufigsten Fragen zu Betriebsarzt, Arbeitsmedizin, Arbeitssicherheit und Zusammenarbeit mit MonacoMed.",
  alternates: { canonical: routes.faq },
};

const faqItems = [
  {
    q: "Braucht mein Unternehmen überhaupt einen Betriebsarzt?",
    a: "Arbeitgeber müssen eine arbeitsmedizinische Betreuung sicherstellen. Wie diese konkret aussieht, hängt von Mitarbeiterzahl, Tätigkeiten und Gefährdungen ab. Wir helfen bei der Einordnung.",
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
];

export default function FaqPage() {
  return (
    <>
      <section className="pad">
        <div className="wrap">
          <SectionHead
            as="h1"
            label="FAQ"
            title="Häufige Fragen vor dem Start"
            lead="Konkret statt pauschal — Antworten auf die häufigsten Fragen von Entscheidern."
          />
          <FaqList items={faqItems} jsonLd />
          <div style={{ marginTop: 30 }}>
            <Link href={routes.home} className="btn btn-ghost">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band center">
        <div className="wrap">
          <h2>Mehr Fragen?</h2>
          <p>Wir beantworten sie gern persönlich – kurz und unverbindlich.</p>
          <div style={{ marginTop: 28 }}>
            <Link href={routes.rueckruf} className="btn btn-light">
              Rückruf anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
