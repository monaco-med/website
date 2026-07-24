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
  title: "G20 Untersuchung München",
  description:
    "G20 Untersuchung (DGUV Empfehlung „Lärm”) in München: arbeitsmedizinische Vorsorge bei Lärmexposition – für Unternehmen und nach Absprache vor Ort.",
  alternates: { canonical: routes.g20 },
};

/**
 * G20 Untersuchung detail page — arbeitsmedizinische Vorsorge bei
 * Lärmexposition. Follows the shared G-Untersuchungen child template (see
 * `g42/page.tsx` for the full breakdown); CTAs ("G20 Vorsorge anfragen" /
 * "Vorsorgetag anfragen") route to `routes.rueckruf`.
 */
export default function G20Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
          { name: "G20 Untersuchung München", path: routes.g20 },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current="G20 Untersuchung München"
              parent={{ label: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", href: routes.gUntersuchungen }}
            />
            <h1>G20 Untersuchung München</h1>
            <p className="sub-strong">Arbeitsmedizinische Vorsorge bei Lärm</p>
            <p className="sub">
              Die sogenannte G20 Untersuchung betrifft Beschäftigte, die bei ihrer Tätigkeit relevanten
              Lärmbelastungen ausgesetzt sind.
            </p>
            <p className="sub">
              Die frühere Bezeichnung „G20” wurde durch die heutige DGUV Empfehlung „Lärm” abgelöst. Im
              betrieblichen Alltag und bei der Suche nach arbeitsmedizinischer Vorsorge wird der Begriff G20
              jedoch weiterhin häufig verwendet.
            </p>
            <p className="sub">
              MonacoMed bietet arbeitsmedizinische Vorsorge bei Lärmexposition für Unternehmen in München und
              nach Absprache direkt bei Ihnen vor Ort an.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                G20 Vorsorge anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="Wann ist eine Vorsorge bei Lärm erforderlich?" />
          <div className="prose">
            <p>
              Bei beruflicher Lärmexposition kann je nach Höhe der Belastung eine Angebots- oder
              Pflichtvorsorge erforderlich sein.
            </p>
            <p>
              Bei Erreichen oder Überschreiten des unteren Auslösewerts von 80 dB(A) ist grundsätzlich
              Angebotsvorsorge vorgesehen. Bei Erreichen oder Überschreiten des oberen Auslösewerts von 85
              dB(A) ist Pflichtvorsorge zu veranlassen.
            </p>
          </div>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead
            title="Was beinhaltet die G20 Vorsorge?"
            lead="Im Mittelpunkt stehen die arbeitsmedizinische Beratung zum Schutz des Gehörs und die individuelle Lärmbelastung."
          />
          <p className="pain-intro">Je nach Vorsorgeanlass können unter anderem folgende Aspekte berücksichtigt werden:</p>
          <CheckList
            items={[
              "berufliche Lärmexposition",
              "bisherige Lärmbelastungen",
              "Gehörschutz",
              "individuelle Risikofaktoren",
              "Beschwerden oder Veränderungen des Hörvermögens",
              "Untersuchung des Hörvermögens beziehungsweise Audiometrie, soweit medizinisch angezeigt",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Ziel ist es, arbeitsbedingte Gesundheitsgefahren frühzeitig zu erkennen und Beschäftigte
            individuell zum Schutz ihres Gehörs zu beraten.
          </p>
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="G20 Vorsorge direkt im Unternehmen"
        text="Bei mehreren lärmexponierten Beschäftigten können wir die Vorsorge gebündelt direkt an Ihrem Unternehmensstandort organisieren. Wir stimmen mit Ihnen die Anzahl der Beschäftigten, die erforderlichen Untersuchungen und die organisatorischen Voraussetzungen im Vorfeld ab. So lassen sich auch größere Vorsorgetage effizient in den Betriebsablauf integrieren. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück."
        ctaHref={routes.rueckruf}
        ctaLabel="Vorsorgetag anfragen"
      />
    </>
  );
}
