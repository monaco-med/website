import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHead from "@/components/SectionHead";
import ExamList from "@/components/ExamList";
import ReasonGrid from "@/components/ReasonGrid";
import { Matrix } from "@/components/Matrix";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Bahnmedizin – Tauglichkeitsuntersuchungen TfV, EBO, VDV 714",
  description:
    "Ermächtigte Untersuchungsstelle: Eignungs- und Tauglichkeitsuntersuchungen für Triebfahrzeugführer und Bahnbetrieb – kurzfristige Termine in München.",
  alternates: { canonical: routes.bahnmedizin },
};

export default function BahnmedizinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Bahnmedizin", path: routes.bahnmedizin },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs current="Bahnmedizin" />
            <h1>Eignungs- und Tauglichkeitsuntersuchungen für den Bahnbetrieb</h1>
            <p className="sub-strong">Ermächtigte Untersuchungsstelle – fachärztlich, strukturiert, kurzfristig.</p>
            <p className="sub">
              MonacoMed führt medizinische Eignungs- und Tauglichkeitsuntersuchungen für
              Beschäftigte im Bahnbetrieb durch – nach den geltenden eisenbahnrechtlichen
              Vorgaben, mit klaren Abläufen und kurzen Terminzeiten.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                Termin vereinbaren
              </Link>
              <Link href={routes.kontakt} className="btn btn-ghost">
                Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Unsere Untersuchungen"
            lead="Nach den geltenden eisenbahnrechtlichen Vorgaben und Konzernrichtlinien."
          />
          <ExamList
            items={[
              {
                n: "01",
                title: "Untersuchungen von Triebfahrzeugführern nach § 16 Triebfahrzeugführerscheinverordnung (TfV)",
                text: "Medizinische Tauglichkeitsuntersuchungen für Lokführer gemäß den gesetzlichen Vorgaben.",
              },
              {
                n: "02",
                title: "Tauglichkeitsuntersuchungen nach VDV-Schrift 714",
                text: "Untersuchungen für Beschäftigte im öffentlichen Verkehrs- und Bahnbereich entsprechend den jeweiligen Anforderungen.",
              },
              {
                n: "03",
                title: "Untersuchungen nach der Eisenbahn-Bau- und Betriebsordnung (EBO)",
                text: "Medizinische Eignungsuntersuchungen für sicherheitsrelevante Tätigkeiten im Eisenbahnbetrieb.",
              },
              {
                n: "04",
                title: "Tauglichkeitsuntersuchungen nach den Anforderungsgruppen A und B der Deutschen Bahn AG",
                text: "Durchführung entsprechend den geltenden Konzernrichtlinien.",
              },
              {
                n: "05",
                title: "Eignungsuntersuchungen für weitere sicherheitsrelevante Tätigkeiten",
                text: "Unter anderem für Sicherungsposten (SiPo) und weitere Beschäftigte mit besonderen gesundheitlichen Anforderungen.",
              },
            ]}
          />
        </div>
      </section>

      <section className="pad firm">
        <div className="wrap">
          <div className="grid">
            <Reveal style={{ alignSelf: "center" }}>
              <span className="lbl">Für Unternehmen und Einzelpersonen</span>
              <h2 style={{ marginTop: 14 }}>Einzeltermine oder ganze Gruppen</h2>
              <p className="lead">
                Untersuchungstermine sind sowohl für Einzelpersonen als auch für größere Gruppen
                planbar.
              </p>
            </Reveal>
            <Matrix
              heading="Wir betreuen"
              rows={[
                ["Eisenbahnverkehrsunternehmen", "Infrastrukturunternehmen"],
                ["Personaldienstleister", "Einzelne Bewerber und Beschäftigte"],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="Warum MonacoMed?" />
          <ReasonGrid
            items={[
              { title: "Ermächtigte Untersuchungsstelle", text: "Für den Bahnbereich – Untersuchungen nach den geltenden Vorgaben." },
              { title: "Fachärztliche Durchführung", text: "Persönlich ärztlich geführt, mit festen Ansprechpartnern." },
              { title: "Kurzfristige Termine", text: "Schnelle Terminvergabe – für Einzelpersonen und Gruppen." },
              { title: "Digitale Terminorganisation", text: "Online buchen, Erinnerungen und Nachweise digital." },
              { title: "Klare und effiziente Abläufe", text: "Strukturiert von der Anmeldung bis zur Bescheinigung." },
            ]}
          />
        </div>
      </section>

      <CtaBand
        label="Termin vereinbaren"
        title="Welche Untersuchung brauchen Sie?"
        text="Gerne beraten wir Sie, welche Untersuchung für Ihre Tätigkeit erforderlich ist, und vereinbaren zeitnah einen Untersuchungstermin."
        ctaHref={routes.rueckruf}
        ctaLabel="Termin vereinbaren"
      />
    </>
  );
}
