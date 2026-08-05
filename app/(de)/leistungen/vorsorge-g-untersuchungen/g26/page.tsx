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
  title: "G26 Untersuchung München",
  description:
    "G26 Untersuchung in München: arbeitsmedizinische Vorsorge und Eignungsbeurteilung für Beschäftigte, die bei ihrer Tätigkeit Atemschutzgeräte tragen.",
  alternates: { canonical: routes.g26 },
};

/**
 * G26 Untersuchung detail page — arbeitsmedizinische Vorsorge und
 * Eignungsbeurteilung bei Tragen von Atemschutzgeräten. Follows the shared
 * G-Untersuchungen child template (see `g42/page.tsx` for the full
 * breakdown); CTAs ("Atemschutzvorsorge anfragen" / "Untersuchungstag
 * anfragen") route to `routes.rueckruf`.
 */
export default function G26Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
          { name: "G26 Untersuchung München", path: routes.g26 },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current="G26 Untersuchung München"
              parent={{ label: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", href: routes.gUntersuchungen }}
            />
            <h1>G26 Untersuchung München</h1>
            <p className="sub-strong">Arbeitsmedizinische Vorsorge und Eignungsbeurteilung bei Atemschutz</p>
            <p className="sub">
              Die sogenannte G26 Untersuchung betrifft Beschäftigte, die bei ihrer Tätigkeit
              Atemschutzgeräte tragen.
            </p>
            <p className="sub">
              Die frühere Bezeichnung „G26” wurde durch die heutigen DGUV Empfehlungen für
              arbeitsmedizinische Beratungen und Untersuchungen abgelöst. Je nach Atemschutzgerät,
              Tätigkeit und rechtlichem Untersuchungsanlass können arbeitsmedizinische Vorsorge und
              Fragen der gesundheitlichen Eignung eine Rolle spielen.
            </p>
            <p className="sub">
              MonacoMed bietet arbeitsmedizinische Vorsorge und Untersuchungen bei Tätigkeiten mit
              Atemschutz in München und nach Absprache direkt bei Unternehmen vor Ort an.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                Atemschutzvorsorge anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Für wen ist eine G26 Untersuchung relevant?"
            lead="Eine arbeitsmedizinische Beurteilung kann beispielsweise Beschäftigte betreffen, die:"
          />
          <CheckList
            items={[
              "Filtergeräte oder Atemschutzmasken tragen",
              "umluftunabhängige Atemschutzgeräte verwenden",
              "unter Atemschutz körperlich belastende Tätigkeiten ausführen",
              "im Brand- und Katastrophenschutz eingesetzt werden",
              "bei industriellen Tätigkeiten auf Atemschutz angewiesen sind",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Welche arbeitsmedizinischen Maßnahmen erforderlich sind, hängt insbesondere von Art und
            Gewicht des Atemschutzgerätes sowie von der Tätigkeit und der Gefährdungsbeurteilung ab.
          </p>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Was wird untersucht?" />
          <div className="prose">
            <p>
              Der Untersuchungsumfang richtet sich nach der Art des Atemschutzes und der körperlichen
              Belastung. Neben Anamnese und ärztlicher Untersuchung können je nach Anlass beispielsweise
              Lungenfunktionsprüfung, Seh- oder Hörprüfung, EKG oder weitere Untersuchungen erforderlich
              sein.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="G26 Untersuchungstage vor Ort"
        text="Bei mehreren Beschäftigten können Atemschutzvorsorgen und entsprechende Untersuchungen gebündelt als Untersuchungstag direkt in Ihrem Unternehmen durchgeführt werden. Wir stimmen den benötigten Umfang und die organisatorischen Voraussetzungen vorab mit Ihnen ab. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück."
        ctaHref={routes.rueckruf}
        ctaLabel="Untersuchungstag anfragen"
      />
    </>
  );
}
