import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHead from "@/components/SectionHead";
import Tiles from "@/components/Tiles";
import CheckList from "@/components/CheckList";
import ReasonGrid from "@/components/ReasonGrid";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Arbeitsmedizinische Vorsorge & G-Untersuchungen",
  description:
    "G20 bis G46: arbeitsmedizinische Vorsorge und Eignungsuntersuchungen für Unternehmen – in München und als Vorsorgetag direkt bei Ihnen vor Ort.",
  alternates: { canonical: routes.gUntersuchungen },
};

export default function GUntersuchungenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs current="Arbeitsmedizinische Vorsorge & G-Untersuchungen" />
            <h1>Arbeitsmedizinische Vorsorge & G-Untersuchungen</h1>
            <p className="sub-strong">
              Arbeitsmedizinische Untersuchungen für Unternehmen – in München und direkt bei Ihnen vor Ort
            </p>
            <p className="sub">
              G25, G26, G37 oder G42: Viele arbeitsmedizinische Vorsorgen und Untersuchungen sind noch unter ihren
              früheren G-Bezeichnungen bekannt.
            </p>
            <p className="sub">
              Heute wird fachlich zwischen arbeitsmedizinischer Vorsorge und Untersuchungen zur Beurteilung der
              gesundheitlichen Eignung unterschieden. Die früheren G-Grundsätze wurden durch die DGUV Empfehlungen
              für arbeitsmedizinische Beratungen und Untersuchungen abgelöst.
            </p>
            <p className="sub">
              MonacoMed bietet Unternehmen das gesamte Spektrum arbeitsmedizinischer Vorsorge sowie
              arbeitsmedizinischer Eignungsbeurteilungen. Wir unterstützen Sie dabei, den richtigen
              Untersuchungsanlass einzuordnen und organisieren die Durchführung effizient – als Einzeltermin, im
              Rahmen eines Vorsorgetages oder direkt bei Ihnen im Unternehmen.
            </p>
            <div className="hero-cta">
              <Link href={routes.betreuungsbedarf} className="btn btn-primary">
                Betreuungsbedarf einschätzen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="Häufig nachgefragte G-Untersuchungen" />
          <Tiles
            items={[
              {
                title: "G20 – Lärm",
                text: (
                  <>
                    {
                      "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit relevanter Lärmexposition. Je nach Exposition kann eine Angebots- oder Pflichtvorsorge erforderlich sein."
                    }{" "}
                    <Link href={routes.g20}>Mehr erfahren →</Link>
                  </>
                ),
              },
              {
                title: "G24 – Hauterkrankungen",
                text: (
                  <>
                    {
                      "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit erhöhter Hautbelastung, beispielsweise durch Feuchtarbeit oder bestimmte Arbeitsstoffe."
                    }{" "}
                    <Link href={routes.g24}>Mehr erfahren →</Link>
                  </>
                ),
              },
              {
                title: "G25 – Fahr-, Steuer- und Überwachungstätigkeiten",
                text: (
                  <>
                    {
                      "Arbeitsmedizinische Eignungsbeurteilung für Tätigkeiten, bei denen das sichere Führen, Steuern oder Überwachen von Fahrzeugen, Maschinen oder Anlagen von besonderer Bedeutung ist."
                    }{" "}
                    <Link href={routes.g25}>Mehr erfahren →</Link>
                  </>
                ),
              },
              {
                title: "G26 – Atemschutzgeräte",
                text: (
                  <>
                    {
                      "Arbeitsmedizinische Vorsorge beziehungsweise Eignungsbeurteilung beim Tragen von Atemschutzgeräten. Art und Umfang richten sich unter anderem nach dem verwendeten Atemschutzgerät und der körperlichen Belastung."
                    }{" "}
                    <Link href={routes.g26}>Mehr erfahren →</Link>
                  </>
                ),
              },
              {
                title: "G30 – Hitzearbeiten",
                text: "Arbeitsmedizinische Beratung und Untersuchung bei Tätigkeiten unter besonderer Hitzebelastung.",
              },
              {
                title: "G31 – Überdruck",
                text: "Arbeitsmedizinische Untersuchungen bei Tätigkeiten unter Überdruck, beispielsweise bei bestimmten Tauch- oder Druckluftarbeiten.",
              },
              {
                title: "G35 – Arbeitsaufenthalt im Ausland",
                text: "Arbeitsmedizinische Beratung vor beruflichen Auslandsaufenthalten mit besonderen klimatischen oder gesundheitlichen Belastungen. Je nach Reiseziel können Impfberatung und weitere reisemedizinische Maßnahmen ergänzt werden.",
              },
              {
                title: "G37 – Bildschirmarbeitsplätze",
                text: (
                  <>
                    {
                      "Arbeitsmedizinische Angebotsvorsorge bei Tätigkeiten an Bildschirmgeräten mit Beratung sowie einer angemessenen Untersuchung der Augen und des Sehvermögens."
                    }{" "}
                    <Link href={routes.g37}>Mehr erfahren →</Link>
                  </>
                ),
              },
              {
                title: "G41 – Arbeiten mit Absturzgefahr",
                text: (
                  <>
                    {
                      "Arbeitsmedizinische Eignungsbeurteilung bei Tätigkeiten, bei denen eine besondere Absturzgefährdung besteht und gesundheitliche Einschränkungen zu einer erheblichen Eigen- oder Fremdgefährdung führen können."
                    }{" "}
                    <Link href={routes.g41}>Mehr erfahren →</Link>
                  </>
                ),
              },
              {
                title: "G42 – Tätigkeiten mit Infektionsgefährdung",
                text: (
                  <>
                    {
                      "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit erhöhter Infektionsgefährdung, beispielsweise im Gesundheitswesen, in Laboratorien oder bei bestimmten Tätigkeiten mit biologischen Arbeitsstoffen."
                    }{" "}
                    <Link href={routes.g42}>Mehr erfahren →</Link>
                  </>
                ),
              },
              {
                title: "G46 – Belastungen des Muskel-Skelett-Systems",
                text: "Arbeitsmedizinische Vorsorge und Beratung bei Tätigkeiten mit besonderen körperlichen Belastungen des Muskel-Skelett-Systems.",
              },
              {
                title: "Asbest – Vorsorge bei Asbestexposition",
                text: (
                  <>
                    {
                      "Arbeitsmedizinische Pflichtvorsorge bei Tätigkeiten mit Asbest – inklusive nachgehender Vorsorge."
                    }{" "}
                    <Link href={routes.asbest}>Mehr erfahren →</Link>
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead
            title="Weitere arbeitsmedizinische Vorsorgen und Untersuchungen"
            lead="Neben den häufig nachgefragten Untersuchungsanlässen bieten wir das gesamte Spektrum der arbeitsmedizinischen Vorsorge und Eignungsbeurteilung an."
          />
          <p className="pain-intro">Dazu gehören unter anderem Vorsorgen und Untersuchungen bei:</p>
          <CheckList
            items={[
              "Tätigkeiten mit Gefahrstoffen",
              "Tätigkeiten mit biologischen Arbeitsstoffen",
              "Lärm- und Vibrationsbelastungen",
              "Atemschutz",
              "Bildschirmarbeit",
              "Feuchtarbeit und Hautbelastungen",
              "körperlichen Belastungen",
              "Tätigkeiten mit Absturzgefahr",
              "Fahr-, Steuer- und Überwachungstätigkeiten",
              "Auslandsaufenthalten",
              "besonderen klimatischen Belastungen",
              "Nacht- und Schichtarbeit",
              "weiteren betriebsspezifischen Gefährdungen und Tätigkeitsanforderungen",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Sie sind sich nicht sicher, welche Vorsorge oder Untersuchung für Ihre Mitarbeitenden erforderlich ist?
            Wir unterstützen Sie bei der Einordnung anhand der Tätigkeit und der betrieblichen
            Gefährdungsbeurteilung.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href={routes.betreuungsbedarf} className="btn btn-primary">
              Untersuchungsbedarf klären
            </Link>
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="Vorsorge oder Eignungsuntersuchung – was ist der Unterschied?" />
          <Reveal className="compare-grid" stagger>
            <div className="tile">
              <h4>Arbeitsmedizinische Vorsorge</h4>
              <p>
                Die arbeitsmedizinische Vorsorge dient der Prävention und der individuellen Beratung der
                Beschäftigten zu möglichen gesundheitlichen Auswirkungen ihrer Tätigkeit.
              </p>
              <p>
                Je nach Gefährdung kann es sich um Pflichtvorsorge, Angebotsvorsorge oder Wunschvorsorge handeln.
              </p>
              <p>
                Medizinische Befunde und Diagnosen werden dem Arbeitgeber nicht mitgeteilt. Der Arbeitgeber erhält
                nach der Vorsorge eine Vorsorgebescheinigung.
              </p>
            </div>
            <div className="tile">
              <h4>Eignungsuntersuchung</h4>
              <p>
                Bei einer Eignungsuntersuchung steht die Frage im Vordergrund, ob die gesundheitlichen
                Voraussetzungen für eine bestimmte Tätigkeit erfüllt sind.
              </p>
              <p>
                Das kann insbesondere bei sicherheitsrelevanten Tätigkeiten eine Rolle spielen, beispielsweise beim
                Führen und Steuern von Fahrzeugen oder bei Arbeiten mit besonderer Absturzgefährdung.
              </p>
            </div>
          </Reveal>
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Arbeitsmedizinische Vorsorge und Eignungsbeurteilung verfolgen unterschiedliche Ziele und werden
            entsprechend getrennt betrachtet.
          </p>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead
            title="Vorsorgetage direkt in Ihrem Unternehmen"
            lead="Bei mehreren Beschäftigten organisieren wir arbeitsmedizinische Vorsorgen und Untersuchungen direkt an Ihrem Standort."
          />
          <p className="pain-intro">Wir stimmen mit Ihnen im Vorfeld ab:</p>
          <CheckList
            items={[
              "welche Vorsorgen und Untersuchungen benötigt werden,",
              "wie viele Mitarbeitende teilnehmen,",
              "welche Untersuchungsgeräte erforderlich sind,",
              "welche Räumlichkeiten vor Ort benötigt werden und",
              "wie die Terminvergabe organisiert wird.",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            So lassen sich auch größere Vorsorge- und Untersuchungstage effizient in den Betriebsablauf
            integrieren.
          </p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="Arbeitsmedizinische Vorsorge einfach organisiert" />
          <ReasonGrid
            items={[
              { title: "Feste Ansprechpartner", text: "Direkte Kommunikation und klare Zuständigkeiten." },
              { title: "Vor Ort im Unternehmen", text: "Vorsorge- und Untersuchungstage direkt an Ihrem Standort." },
              { title: "Digitale Terminorganisation", text: "Strukturierte Abläufe und einfache Terminvergabe." },
              { title: "Mehrere Standorte", text: "Zentrale Koordination auch bei standortübergreifender Betreuung." },
              { title: "Kurze Reaktionszeiten", text: "Wir melden uns in der Regel innerhalb von 48 Stunden bei Ihnen zurück." },
            ]}
          />
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Sie suchen eine bestimmte G-Untersuchung?"
        text="Ob G25, G26, G37, G41, G42 oder ein anderer arbeitsmedizinischer Untersuchungsanlass: Wir unterstützen Sie bei der Einordnung und organisieren die passende Vorsorge oder Untersuchung für Ihre Beschäftigten. Senden Sie uns kurz die Tätigkeit, die Anzahl der Mitarbeitenden und Ihren Standort. Wir melden uns in der Regel innerhalb von 48 Stunden bei Ihnen zurück."
        ctaHref={routes.betreuungsbedarf}
        ctaLabel="Betreuungsbedarf einschätzen"
      />
    </>
  );
}
