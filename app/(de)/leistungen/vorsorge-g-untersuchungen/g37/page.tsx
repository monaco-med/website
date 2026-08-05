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
  title: "G37 Untersuchung München",
  description:
    "G37 Untersuchung München: arbeitsmedizinische Angebotsvorsorge bei Bildschirmarbeit – Beratung, Sehtest und Organisation direkt im Unternehmen.",
  alternates: { canonical: routes.g37 },
};

/**
 * G37 Untersuchung detail page — arbeitsmedizinische Angebotsvorsorge bei
 * Bildschirmarbeit (Seh- und Beratungsanteil). Follows the shared
 * G-Untersuchungen child template (see `g42/page.tsx` for the full
 * breakdown); CTAs ("G37 Vorsorge anfragen" / "Vorsorgetag anfragen") route
 * to `routes.rueckruf`.
 */
export default function G37Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
          { name: "G37 Untersuchung München", path: routes.g37 },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current="G37 Untersuchung München"
              parent={{ label: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", href: routes.gUntersuchungen }}
            />
            <h1>G37 Untersuchung München</h1>
            <p className="sub-strong">Arbeitsmedizinische Vorsorge bei Bildschirmarbeit</p>
            <p className="sub">
              Die sogenannte G37 Untersuchung ist die arbeitsmedizinische Vorsorge für Beschäftigte, die regelmäßig
              an Bildschirmgeräten arbeiten.
            </p>
            <p className="sub">
              Heute wird sie als arbeitsmedizinische Angebotsvorsorge bei Tätigkeiten an Bildschirmgeräten
              durchgeführt. Im Mittelpunkt stehen die individuelle Beratung sowie insbesondere Beschwerden und
              gesundheitliche Fragestellungen im Zusammenhang mit der Bildschirmarbeit.
            </p>
            <p className="sub">
              MonacoMed organisiert die Bildschirmvorsorge für Unternehmen in München und nach Absprache direkt an
              Ihrem Standort.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                G37 Vorsorge anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Was beinhaltet die G37 Vorsorge?"
            lead="Die Vorsorge umfasst eine arbeitsmedizinische Beratung und eine angemessene Untersuchung der Augen und des Sehvermögens."
          />
          <p className="pain-intro">Dabei können unter anderem folgende Aspekte berücksichtigt werden:</p>
          <CheckList
            items={[
              "Sehschärfe",
              "Beschwerden der Augen",
              "Belastungen durch Bildschirmarbeit",
              "bestehende Sehhilfen",
              "Beschwerden im Zusammenhang mit der Arbeitsplatzgestaltung",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Ergibt sich, dass eine spezielle Sehhilfe für die Arbeit am Bildschirm erforderlich ist, kann dies im
            Rahmen der Vorsorge entsprechend eingeordnet werden.
          </p>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Ist die G37 Untersuchung Pflicht?" />
          <div className="prose">
            <p>
              Bei Bildschirmarbeit handelt es sich grundsätzlich um eine Angebotsvorsorge. Der Arbeitgeber muss den
              Beschäftigten die Vorsorge entsprechend den gesetzlichen Voraussetzungen anbieten. Die Teilnahme der
              Beschäftigten ist freiwillig.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Bildschirmvorsorge direkt in Ihrem Unternehmen"
        text="Gerade bei einer größeren Zahl von Bildschirmarbeitsplätzen können Vorsorgetage effizient direkt im Unternehmen durchgeführt werden. Wir unterstützen Sie bei der Terminorganisation und führen die Vorsorgen gebündelt an Ihrem Standort durch. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück."
        ctaHref={routes.rueckruf}
        ctaLabel="Vorsorgetag anfragen"
      />
    </>
  );
}
