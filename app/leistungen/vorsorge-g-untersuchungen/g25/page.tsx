import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHead from "@/components/SectionHead";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "G25 Untersuchung München",
  description:
    "G25 Untersuchung in München: arbeitsmedizinische Eignungsbeurteilung für Fahr-, Steuer- und Überwachungstätigkeiten – in der Praxis oder direkt im Unternehmen.",
  alternates: { canonical: routes.g25 },
};

export default function G25Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
          { name: "G25 Untersuchung München", path: routes.g25 },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current="G25 Untersuchung München"
              parent={{ label: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", href: routes.gUntersuchungen }}
            />
            <h1>G25 Untersuchung München</h1>
            <p className="sub-strong">Fahr-, Steuer- und Überwachungstätigkeiten</p>
            <p className="sub">
              Die sogenannte G25 Untersuchung ist eine der bekanntesten arbeitsmedizinischen
              Eignungsuntersuchungen. Sie richtet sich an Beschäftigte, die Fahrzeuge führen,
              Maschinen steuern oder sicherheitsrelevante Anlagen überwachen.
            </p>
            <p className="sub">
              Auch wenn die frühere Bezeichnung „G25” heute offiziell nicht mehr verwendet wird,
              suchen viele Unternehmen weiterhin unter diesem Begriff nach einer
              arbeitsmedizinischen Eignungsbeurteilung.
            </p>
            <p className="sub">
              MonacoMed führt Eignungsuntersuchungen für Fahr-, Steuer- und
              Überwachungstätigkeiten in München und nach Absprache direkt bei Unternehmen vor
              Ort durch.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                Untersuchung anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Für wen kann eine G25 Untersuchung relevant sein?"
            lead="Eine Eignungsbeurteilung kann beispielsweise bei folgenden Tätigkeiten sinnvoll oder betrieblich vorgesehen sein:"
          />
          <CheckList
            items={[
              "Führen von Flurförderzeugen und Gabelstaplern",
              "Führen von Fahrzeugen im betrieblichen Umfeld",
              "Bedienen von Kränen und Maschinen",
              "Steuer- und Überwachungstätigkeiten",
              "Tätigkeiten mit besonderer Verantwortung für die eigene Sicherheit oder die Sicherheit Dritter",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Ob eine Eignungsbeurteilung erforderlich und rechtlich zulässig ist, richtet sich nach
            der konkreten Tätigkeit und dem jeweiligen Untersuchungsanlass.
          </p>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Was wird bei der G25 Untersuchung untersucht?" />
          <div className="prose">
            <p>
              Art und Umfang der Untersuchung richten sich nach der Tätigkeit und den
              individuellen Anforderungen. Je nach Untersuchungsanlass können beispielsweise eine
              ärztliche Anamnese, körperliche Untersuchung sowie Untersuchungen des Seh- und
              Hörvermögens Bestandteil der Eignungsbeurteilung sein.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="G25 Untersuchungen direkt im Unternehmen"
        text="Bei mehreren Beschäftigten können wir Untersuchungstage direkt an Ihrem Unternehmensstandort organisieren. So lassen sich die Untersuchungen effizient in den Betriebsablauf integrieren und Ausfallzeiten reduzieren. Wir melden uns in der Regel innerhalb von 48 Stunden zurück."
        ctaHref={routes.rueckruf}
        ctaLabel="Untersuchung anfragen"
      />
    </>
  );
}
