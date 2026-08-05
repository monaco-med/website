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
  title: "G41 Untersuchung München",
  description:
    "G41 Untersuchung München: arbeitsmedizinische Eignungsbeurteilung für Tätigkeiten mit Absturzgefährdung – Organisation in München und direkt im Unternehmen.",
  alternates: { canonical: routes.g41 },
};

/**
 * G41 Untersuchung detail page — arbeitsmedizinische Eignungsbeurteilung
 * für Arbeiten mit Absturzgefahr. Follows the shared G-Untersuchungen child
 * template (see `g42/page.tsx` for the full breakdown); CTAs
 * ("G41 Untersuchung anfragen") route to `routes.rueckruf`.
 */
export default function G41Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
          { name: "G41 Untersuchung München", path: routes.g41 },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current="G41 Untersuchung München"
              parent={{ label: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", href: routes.gUntersuchungen }}
            />
            <h1>G41 Untersuchung München</h1>
            <p className="sub-strong">Eignungsuntersuchung für Arbeiten mit Absturzgefahr</p>
            <p className="sub">
              Die sogenannte G41 Untersuchung wird häufig im Zusammenhang mit Tätigkeiten mit besonderer
              Absturzgefährdung angefragt.
            </p>
            <p className="sub">
              Die frühere Bezeichnung „G41” ist heute offiziell nicht mehr die aktuelle Bezeichnung. Bei
              entsprechender Rechtsgrundlage oder einem nachvollziehbaren betrieblichen Anlass kann jedoch eine
              arbeitsmedizinische Eignungsbeurteilung für Tätigkeiten mit Absturzgefährdung erforderlich oder
              sinnvoll sein.
            </p>
            <p className="sub">
              MonacoMed führt entsprechende Eignungsuntersuchungen in München und nach Absprache direkt bei
              Unternehmen vor Ort durch.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                G41 Untersuchung anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Für welche Tätigkeiten kann eine Eignungsbeurteilung relevant sein?"
            lead="Beispielsweise bei Arbeiten:"
          />
          <CheckList
            items={[
              "auf Dächern",
              "auf Gerüsten",
              "auf Masten",
              "in größeren Höhen",
              "an hoch gelegenen Arbeitsplätzen",
              "bei denen eine plötzliche gesundheitliche Beeinträchtigung zu einer erheblichen Eigen- oder Fremdgefährdung führen könnte",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Ob eine Eignungsuntersuchung erforderlich und rechtlich zulässig ist, muss anhand des konkreten
            Arbeitsplatzes und des Untersuchungsanlasses beurteilt werden.
          </p>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Was wird bei der Untersuchung geprüft?" />
          <div className="prose">
            <p>
              Die Untersuchung orientiert sich an den gesundheitlichen Anforderungen der konkreten Tätigkeit. Je
              nach Anlass können neben Anamnese und körperlicher Untersuchung weitere Untersuchungen erforderlich
              sein.
            </p>
            <p>Ziel ist die arbeitsmedizinische Beurteilung der gesundheitlichen Eignung für die vorgesehene Tätigkeit.</p>
          </div>
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="G41 Untersuchungen für Unternehmen"
        text="Bei mehreren Beschäftigten können wir Untersuchungstage gebündelt und nach Absprache direkt an Ihrem Unternehmensstandort durchführen. Wir melden uns in der Regel innerhalb von 48 Stunden zurück."
        ctaHref={routes.rueckruf}
        ctaLabel="Untersuchung anfragen"
      />
    </>
  );
}
