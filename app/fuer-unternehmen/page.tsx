import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PainGrid from "@/components/PainGrid";
import { Matrix } from "@/components/Matrix";
import Steps from "@/components/Steps";
import Tiles from "@/components/Tiles";
import WhyLines from "@/components/WhyLines";
import SectorGrid from "@/components/SectorGrid";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Für Unternehmen – Betreuung mehrerer Standorte",
  description:
    "Arbeitsmedizinische Betreuung für Unternehmen mit mehreren Standorten: zentral koordiniert, digital dokumentiert, mit festen Ansprechpartnern.",
  alternates: { canonical: routes.fuerUnternehmen },
};

const faqItems = [
  {
    q: "Können mehrere Standorte betreut werden?",
    a: "Ja. Untersuchungstage und Betreuung werden standortübergreifend koordiniert.",
  },
  {
    q: "Müssen alle Mitarbeitenden nach München kommen?",
    a: "Nein. Untersuchungen können – je nach Leistung – direkt an Ihren Standorten oder in unserer Praxis erfolgen.",
  },
  {
    q: "Arbeiten Sie mit unserer Fachkraft für Arbeitssicherheit zusammen?",
    a: "Ja. Bestehende Fachkräfte werden selbstverständlich eingebunden. Auf Wunsch übernehmen wir die sicherheitstechnische Betreuung ebenfalls.",
  },
  {
    q: "Wie läuft der Start ab?",
    a: "Nach einem Erstgespräch erstellen wir ein Betreuungskonzept und koordinieren die weiteren Schritte gemeinsam mit Ihren Ansprechpartnern.",
  },
];

/**
 * "Für Unternehmen" page (`/fuer-unternehmen`) — pitches centrally
 * coordinated arbeitsmedizinische Betreuung for companies with multiple
 * locations (pain points, solution, process, sectors served).
 *
 * Renders no breadcrumb or JSON-LD (top-level marketing page, not part of
 * the Leistungen hierarchy). Two hero CTAs: primary "Unverbindliche
 * Anfrage" to `routes.betreuungsbedarf`, secondary "Persönliches
 * Erstgespräch" to `routes.rueckruf`.
 */
export default function FuerUnternehmenPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <span className="lbl">Für Unternehmen</span>
            <h1>Arbeitsmedizin für Unternehmen mit mehreren Standorten</h1>
            <p className="sub-strong">Zentrale Koordination statt aufwendiger Einzelabstimmung.</p>
            <p className="sub">
              Ob zwei Niederlassungen oder bundesweite Unternehmensstandorte – MonacoMed
              organisiert die arbeitsmedizinische Betreuung strukturiert, digital und mit festen
              Ansprechpartnern. So bleiben Prozesse einheitlich und der organisatorische Aufwand
              für HR gering.
            </p>
            <div className="hero-cta">
              <Link href={routes.betreuungsbedarf} className="btn btn-primary">
                Unverbindliche Anfrage
              </Link>
              <Link href={routes.rueckruf} className="btn btn-ghost">
                Persönliches Erstgespräch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Wenn die Organisation zur Herausforderung wird"
            lead="Mit jedem zusätzlichen Standort steigt der Koordinationsaufwand."
          />
          <p className="pain-intro">Vielleicht kennen Sie diese Situationen:</p>
          <PainGrid
            items={[
              "Termine müssen mit mehreren Standorten abgestimmt werden.",
              "Unterschiedliche Ansprechpartner erschweren die Kommunikation.",
              "Vorsorgefristen geraten aus dem Blick.",
              "Untersuchungen müssen parallel organisiert werden.",
              "Betriebsarzt und Fachkraft für Arbeitssicherheit arbeiten getrennt.",
              "HR verbringt viel Zeit mit Terminplanung und Nachfragen.",
            ]}
          />
          <p className="pain-close">{"// Genau dafür haben wir unsere Prozesse entwickelt."}</p>
        </div>
      </section>

      <section className="pad firm">
        <div className="wrap">
          <div className="grid">
            <Reveal style={{ alignSelf: "center" }}>
              <span className="lbl">Unsere Lösung</span>
              <h2 style={{ marginTop: 14 }}>Standortübergreifende Organisation Ihrer Betreuung</h2>
              <p className="lead">
                MonacoMed übernimmt die standortübergreifende Organisation Ihrer
                arbeitsmedizinischen Betreuung.
              </p>
            </Reveal>
            <Matrix
              heading="Dabei setzen wir auf"
              rows={[
                ["Zentrale ärztliche Verantwortung", "Feste Ansprechpartner"],
                ["Digitale Terminorganisation", "Digitales Vorsorgekataster"],
                ["Koordinierte Untersuchungstage", "Enge Abstimmung mit HR und Fachkraft für Arbeitssicherheit"],
                ["Einheitliche Dokumentation", "Klare Prozesse für alle Standorte"],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="So läuft die Zusammenarbeit ab" />
          <Steps
            items={[
              { n: "01", title: "Kennenlernen", text: "Wir besprechen Ihr Unternehmen, Ihre Standorte und Ihren Betreuungsbedarf." },
              { n: "02", title: "Betreuungskonzept", text: "Gemeinsam entwickeln wir einen strukturierten Betreuungsplan." },
              { n: "03", title: "Organisation", text: "Wir koordinieren Untersuchungstage, Vorsorgen, ASA-Sitzungen und Begehungen." },
              { n: "04", title: "Laufende Betreuung", text: "Mit festen Ansprechpartnern, digitalen Prozessen und kurzen Kommunikationswegen." },
            ]}
          />
        </div>
      </section>

      <section className="pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead
            title="Digitale Organisation"
            lead="Je größer das Unternehmen, desto wichtiger sind effiziente Prozesse."
          />
          <p className="pain-intro">Deshalb setzen wir auf:</p>
          <Tiles
            items={[
              { title: "Online-Terminbuchung", text: "Mitarbeitende buchen Termine selbstständig online." },
              { title: "Digitales Vorsorgekataster", text: "Fälligkeiten und Vorsorgen jederzeit im Überblick." },
              { title: "Automatische Erinnerungen", text: "Weniger Ausfälle und weniger organisatorischer Aufwand." },
              { title: "Kurzfristige Teamtermine", text: "Auch größere Untersuchungstage lassen sich flexibel planen." },
              { title: "Digitale Zusammenarbeit", text: "Sichere Dokumentenübermittlung und einfache Abstimmung mit HR." },
            ]}
          />
        </div>
      </section>

      <section className="pad firm">
        <div className="wrap">
          <div className="grid">
            <Reveal style={{ alignSelf: "center" }}>
              <h2>Arbeitsmedizin und Arbeitssicherheit aus einer Hand</h2>
              <p className="lead">Betriebsarzt und Fachkraft für Arbeitssicherheit arbeiten eng zusammen.</p>
            </Reveal>
            <Matrix
              heading="Dadurch entstehen"
              rows={[
                ["Einheitliche Empfehlungen", "Abgestimmte Maßnahmen"],
                ["Weniger Abstimmungsaufwand", "Klare Verantwortlichkeiten"],
                ["Effiziente Umsetzung"],
              ]}
            />
          </div>
        </div>
      </section>

      <WhyLines
        solid
        items={[
          { n: "01", title: "Feste Ansprechpartner", text: "Direkte Kommunikation statt wechselnder Zuständigkeiten." },
          { n: "02", title: "Persönlich geführt", text: "Ärztlich verantwortlich durch Dr. med. univ. David Manghabati." },
          { n: "03", title: "Digitale Prozesse", text: "Moderne Organisation statt E-Mail-Chaos." },
          { n: "04", title: "Kurze Reaktionszeiten", text: "Schnelle Rückmeldungen und flexible Terminplanung. Wir melden uns in der Regel innerhalb von 48 Stunden bei Ihnen zurück." },
          { n: "05", title: "Strukturierte Betreuung", text: "Klare Prozesse für HR, Führungskräfte und Mitarbeitende." },
        ]}
      />

      <section className="pad">
        <div className="wrap">
          <span className="lbl">Geeignet für</span>
          <SectorGrid
            style={{ marginTop: 16, maxWidth: 760 }}
            items={[
              "Unternehmen mit mehreren Standorten",
              "Filialunternehmen",
              "Produktionsunternehmen",
              "Logistikunternehmen",
              "Industrie",
              "Dienstleistungsunternehmen",
              "Verwaltungen",
              "Technologieunternehmen",
            ]}
          />
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Häufige Fragen" />
          <FaqList items={faqItems} />
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Persönliche Betreuung statt Callcenter"
        text="Ihre Anfrage wird direkt ärztlich geprüft. Sie sprechen von Anfang an mit einem fachlichen Ansprechpartner und nicht mit einem Vertrieb oder einer Hotline."
        ctaHref={routes.betreuungsbedarf}
        ctaLabel="Jetzt unverbindlich Kontakt aufnehmen"
      />
    </>
  );
}
