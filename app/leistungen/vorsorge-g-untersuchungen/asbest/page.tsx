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
  title: "Asbest Vorsorge München",
  description:
    "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit Asbest für Unternehmen in München – inklusive nachgehender Vorsorge nach Expositionsende.",
  alternates: { canonical: routes.asbest },
};

/**
 * Asbest Vorsorge detail page — arbeitsmedizinische Pflichtvorsorge bei
 * Tätigkeiten mit Asbestexposition, including nachgehende Vorsorge after
 * exposure ends. Follows the shared G-Untersuchungen child template (see
 * `g42/page.tsx` for the full breakdown); CTAs ("Asbestvorsorge anfragen")
 * route to `routes.rueckruf`.
 */
export default function AsbestPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
          { name: "Asbest Vorsorge München", path: routes.asbest },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current="Asbest Vorsorge München"
              parent={{ label: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", href: routes.gUntersuchungen }}
            />
            <h1>Asbest Vorsorge München</h1>
            <p className="sub-strong">Arbeitsmedizinische Vorsorge bei Tätigkeiten mit Asbest</p>
            <p className="sub">
              Bei Tätigkeiten mit Asbest können Beschäftigte gesundheitsgefährdenden Asbestfasern
              ausgesetzt sein. Auch heute kann eine Exposition insbesondere bei Abbruch-,
              Sanierungs- und Instandhaltungsarbeiten an älteren Gebäuden und Anlagen auftreten.
            </p>
            <p className="sub">
              Bei Tätigkeiten mit Asbestexposition ist arbeitsmedizinische Pflichtvorsorge zu
              veranlassen. MonacoMed bietet arbeitsmedizinische Vorsorge bei Tätigkeiten mit
              Asbest für Unternehmen in München und nach Absprache direkt vor Ort an.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                Asbestvorsorge anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Für wen ist eine Asbestvorsorge relevant?"
            lead="Eine arbeitsmedizinische Vorsorge kann insbesondere Beschäftigte betreffen, die bei ihrer Tätigkeit mit asbesthaltigen Materialien in Kontakt kommen können, beispielsweise bei:"
          />
          <CheckList
            items={[
              "Abbrucharbeiten",
              "Sanierungsarbeiten",
              "Instandhaltungsarbeiten",
              "Arbeiten an älteren Gebäuden und technischen Anlagen",
              "Tätigkeiten mit potenzieller Exposition gegenüber Asbestfasern",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Welche Vorsorge erforderlich ist, richtet sich nach der konkreten Tätigkeit und der
            betrieblichen Gefährdungsbeurteilung.
          </p>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Was beinhaltet die arbeitsmedizinische Vorsorge bei Asbest?" />
          <div className="prose">
            <p>
              Im Mittelpunkt stehen die individuelle arbeitsmedizinische Beratung und die
              gesundheitlichen Risiken einer möglichen Asbestexposition.
            </p>
            <p>
              Je nach Vorsorgeanlass und individueller Situation kann zusätzlich eine ärztliche
              Untersuchung angeboten werden. Dabei werden unter anderem die Tätigkeit, mögliche
              frühere Expositionen und individuelle gesundheitliche Aspekte berücksichtigt.
            </p>
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="Nachgehende Vorsorge nach Asbestexposition" />
          <div className="prose">
            <p>
              Asbestbedingte Erkrankungen können erst viele Jahre oder Jahrzehnte nach einer
              beruflichen Exposition auftreten. Deshalb spielt bei Asbest die nachgehende
              arbeitsmedizinische Vorsorge eine besondere Rolle.
            </p>
            <p>
              Nach Beendigung der gefährdenden Tätigkeit kann die Vorsorge über die eigentliche
              Beschäftigungszeit hinaus fortgeführt werden.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Asbestvorsorge für Unternehmen"
        text="Wir unterstützen Unternehmen bei der arbeitsmedizinischen Einordnung und Durchführung der erforderlichen Vorsorge. Bei mehreren Beschäftigten können Vorsorgetermine nach Absprache gebündelt organisiert werden. Wir melden uns in der Regel innerhalb von 48 Stunden zurück."
        ctaHref={routes.rueckruf}
        ctaLabel="Asbestvorsorge anfragen"
      />
    </>
  );
}
