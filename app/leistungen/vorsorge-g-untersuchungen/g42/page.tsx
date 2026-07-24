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
  title: "G42 Untersuchung München",
  description:
    "G42 Untersuchung in München: arbeitsmedizinische Vorsorge bei Infektionsgefährdung – für Gesundheitswesen, Labore und weitere Tätigkeitsbereiche, auch vor Ort.",
  alternates: { canonical: routes.g42 },
};

/**
 * G42 Untersuchung detail page — arbeitsmedizinische Vorsorge bei
 * Tätigkeiten mit Infektionsgefährdung (Gesundheitswesen, Labore, etc.).
 *
 * This is one of eight near-identical G-Untersuchungen child pages
 * (asbest, g20, g24, g25, g26, g37, g41, g42) under the
 * `vorsorge-g-untersuchungen` overview. They all follow the same template
 * inherited from that parent: hero with a 3-level `BreadcrumbJsonLd` +
 * `Breadcrumbs` (Leistungen → G-Untersuchungen → this exam), 2–4 content
 * sections built from `CheckList` and/or a `.prose` div, and a closing
 * `CtaBand`. All eight route their primary CTA(s) to `routes.rueckruf`
 * (single-exam inquiry), not `routes.betreuungsbedarf` — mirroring the
 * precedent set by the Bahnmedizin page, since a G-exam request is
 * typically a specific booking rather than a full company-wide needs
 * assessment. Reading this one page in depth is enough to understand the
 * structure of the other seven; their comments only call out what differs
 * (CTA label and exam topic).
 */
export default function G42Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
          { name: "G42 Untersuchung München", path: routes.g42 },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current="G42 Untersuchung München"
              parent={{ label: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", href: routes.gUntersuchungen }}
            />
            <h1>G42 Untersuchung München</h1>
            <p className="sub-strong">Arbeitsmedizinische Vorsorge bei Tätigkeiten mit Infektionsgefährdung</p>
            <p className="sub">
              Die sogenannte G42 Untersuchung betrifft Beschäftigte, die bei ihrer beruflichen Tätigkeit einer
              erhöhten Infektionsgefährdung durch biologische Arbeitsstoffe ausgesetzt sein können.
            </p>
            <p className="sub">
              Typische Anwendungsbereiche finden sich unter anderem im Gesundheitswesen, in medizinischen
              Einrichtungen, Laboratorien sowie bei weiteren Tätigkeiten mit regelmäßigem Kontakt zu biologischen
              Arbeitsstoffen.
            </p>
            <p className="sub">
              MonacoMed bietet die arbeitsmedizinische Vorsorge bei Tätigkeiten mit Infektionsgefährdung für
              Unternehmen in München und nach Absprache direkt vor Ort an.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                G42 Vorsorge anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Für wen kann eine G42 Vorsorge erforderlich sein?"
            lead="Je nach Gefährdungsbeurteilung kann eine arbeitsmedizinische Vorsorge beispielsweise relevant sein für Beschäftigte in:"
          />
          <CheckList
            items={[
              "Krankenhäusern und medizinischen Einrichtungen",
              "Arzt- und Zahnarztpraxen",
              "Pflegeeinrichtungen",
              "Laboratorien",
              "Kindertagesstätten und sozialen Einrichtungen",
              "Rettungsdiensten",
              "weiteren Tätigkeitsbereichen mit relevanter Infektionsgefährdung",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Ob eine Pflicht- oder Angebotsvorsorge erforderlich ist, richtet sich nach der konkreten Tätigkeit und
            Gefährdung.
          </p>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Was beinhaltet die G42 Vorsorge?" />
          <div className="prose">
            <p>
              Im Mittelpunkt stehen die individuelle arbeitsmedizinische Beratung und die Beurteilung der
              tätigkeitsbezogenen Infektionsgefährdung.
            </p>
            <p>
              Dabei werden je nach Tätigkeit unter anderem mögliche Infektionsrisiken, Übertragungswege und
              geeignete Schutzmaßnahmen besprochen.
            </p>
            <p>
              Auch der Impfstatus spielt eine wichtige Rolle. Besteht aufgrund der Tätigkeit ein erhöhtes
              Infektionsrisiko und steht eine wirksame Impfung zur Verfügung, kann im Rahmen der arbeitsmedizinischen
              Vorsorge eine entsprechende Impfberatung und – soweit angezeigt – ein Impfangebot erfolgen.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="G42 Vorsorge und Impfungen direkt im Unternehmen"
        text="Bei mehreren Beschäftigten können wir Vorsorgetermine und Impfangebote gebündelt direkt an Ihrem Standort organisieren. So lassen sich arbeitsmedizinische Vorsorge, Impfstatuskontrolle und betriebliche Impfangebote effizient miteinander verbinden. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück."
        ctaHref={routes.rueckruf}
        ctaLabel="Vorsorgetag anfragen"
      />
    </>
  );
}
