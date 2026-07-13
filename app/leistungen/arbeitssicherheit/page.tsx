import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHead from "@/components/SectionHead";
import Tiles from "@/components/Tiles";
import { Matrix } from "@/components/Matrix";
import Steps from "@/components/Steps";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Arbeitssicherheit & Gefährdungsbeurteilung",
  description:
    "Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilung, Unterweisungen und Begehungen – eng verzahnt mit der Arbeitsmedizin.",
  alternates: { canonical: routes.arbeitssicherheit },
};

const faqItems = [
  {
    q: "Ab wann ist eine Fachkraft für Arbeitssicherheit Pflicht?",
    a: "Wie beim Betriebsarzt gilt: grundsätzlich ab dem ersten Mitarbeitenden. Der Umfang richtet sich nach DGUV Vorschrift 2, Branche und Betriebsgröße.",
  },
  {
    q: "Wir haben bereits eine Fachkraft – geht das trotzdem?",
    a: "Ja. Bestehende Fachkräfte binden wir eng ein und stimmen die arbeitsmedizinische Seite darauf ab. Auf Wunsch übernehmen wir die sicherheitstechnische Betreuung komplett.",
  },
  {
    q: "Wie oft finden Begehungen statt?",
    a: "Das hängt von Gefährdungslage und Betriebsgröße ab. Wir legen den Rhythmus im Betreuungskonzept fest – und dokumentieren jede Begehung mit konkreten Empfehlungen.",
  },
  {
    q: "Übernehmen Sie auch die ASA-Organisation?",
    a: "Ja. Wir organisieren die Sitzungen des Arbeitsschutzausschusses, nehmen teil und halten Beschlüsse und offene Punkte strukturiert nach.",
  },
];

export default function ArbeitssicherheitPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitssicherheit", path: routes.arbeitssicherheit },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs current="Arbeitssicherheit" />
            <h1>Arbeitssicherheit, eng verzahnt mit der Arbeitsmedizin</h1>
            <p className="sub-strong">Sicherheitstechnische Betreuung nach ASiG und DGUV Vorschrift 2.</p>
            <p className="sub">
              Fachkraft für Arbeitssicherheit und Betriebsarzt arbeiten bei MonacoMed eng
              zusammen – mit abgestimmten Empfehlungen, klaren Verantwortlichkeiten und einer
              gemeinsamen, prüffähigen Dokumentation.
            </p>
            <div className="hero-cta">
              <Link href={routes.betreuungsbedarf} className="btn btn-primary">
                Betreuungsbedarf kostenlos einschätzen
              </Link>
              <Link href={routes.rueckruf} className="btn btn-ghost">
                Rückruf vereinbaren
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Was die Betreuung umfasst"
            lead="Von der Gefährdungsbeurteilung bis zur Maßnahmenverfolgung."
          />
          <Tiles
            items={[
              { title: "Fachkraft für Arbeitssicherheit", text: "Sicherheitstechnische Betreuung und Beratung nach ASiG." },
              { title: "Gefährdungsbeurteilung", text: "Erstellung, Fortschreibung, Maßnahmenplanung und Dokumentation." },
              { title: "Unterweisungen", text: "Praxisnah, verständlich und auf den Betrieb abgestimmt." },
              { title: "Brandschutz", text: "Unterweisung und praktische Schulung direkt vor Ort." },
              { title: "ASA & Begehungen", text: "Organisation, Teilnahme und konkrete Empfehlungen." },
              { title: "Maßnahmenverfolgung", text: "Offene Punkte strukturiert nachhalten – nichts geht verloren." },
            ]}
          />
        </div>
      </section>

      <section className="pad firm">
        <div className="wrap">
          <div className="grid">
            <Reveal style={{ alignSelf: "center" }}>
              <span className="lbl">Aus einer Hand</span>
              <h2 style={{ marginTop: 14 }}>Warum Medizin und Sicherheit zusammengehören</h2>
              <p className="lead">
                Die Zusammenarbeit von Betriebsarzt und Fachkraft für Arbeitssicherheit ist
                gesetzlich gefordert – bei MonacoMed kommt beides aus einem Haus.
              </p>
            </Reveal>
            <Matrix
              heading="Dadurch entstehen"
              rows={[
                ["Einheitliche Empfehlungen", "Abgestimmte Maßnahmen"],
                ["Weniger Abstimmungsaufwand", "Klare Verantwortlichkeiten"],
                ["Eine gemeinsame, prüffähige Dokumentation"],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="So starten wir" />
          <Steps
            items={[
              { n: "01", title: "Bestandsaufnahme", text: "Wir sichten Arbeitsplätze, Tätigkeiten und die vorhandene Dokumentation." },
              { n: "02", title: "Gefährdungsbeurteilung", text: "Risiken bewerten, Maßnahmen ableiten und priorisieren." },
              { n: "03", title: "Umsetzung", text: "Unterweisungen, Begehungen und ASA-Sitzungen im laufenden Betrieb." },
              { n: "04", title: "Nachhalten", text: "Maßnahmen digital verfolgen und die Dokumentation aktuell halten." },
            ]}
          />
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Häufige Fragen zur Arbeitssicherheit" />
          <FaqList items={faqItems} />
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Klären wir Ihren Betreuungsbedarf"
        text="Wenige Angaben genügen – Ihre Anfrage wird direkt fachlich geprüft, ohne Vertrieb oder Callcenter."
        ctaHref={routes.betreuungsbedarf}
        ctaLabel="Betreuungsbedarf kostenlos einschätzen"
      />
    </>
  );
}
