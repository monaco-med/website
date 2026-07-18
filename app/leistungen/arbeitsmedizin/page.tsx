import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHead from "@/components/SectionHead";
import Tiles from "@/components/Tiles";
import { Matrix } from "@/components/Matrix";
import Steps from "@/components/Steps";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Arbeitsmedizin & betriebsärztliche Betreuung",
  description:
    "Betriebsärztliche Betreuung nach ASiG und DGUV V2: Vorsorge, Eignungsuntersuchungen, ASA und Impfaktionen – persönlich betreut, digital organisiert.",
  alternates: { canonical: routes.arbeitsmedizin },
};

const faqItems = [
  {
    q: "Ab wann braucht ein Unternehmen einen Betriebsarzt?",
    a: "Grundsätzlich ab dem ersten Mitarbeitenden. Der Umfang der Betreuung richtet sich nach DGUV Vorschrift 2 – abhängig von Branche, Gefährdungen und der Anzahl der Mitarbeitenden. Wir helfen bei der Einordnung.",
  },
  {
    q: "Finden Untersuchungen bei uns oder in der Praxis statt?",
    a: "Beides ist möglich. Für Teams organisieren wir Untersuchungstage direkt im Betrieb, einzelne Termine finden in unserer Praxis in München statt.",
  },
  {
    q: "Wer erfährt die Ergebnisse der Vorsorge?",
    a: "Die Inhalte sind vertraulich und bleiben zwischen Ärztin/Arzt und Mitarbeitenden. Der Arbeitgeber erhält nur die Teilnahmebescheinigung – das schafft Vertrauen und Akzeptanz.",
  },
  {
    q: "Was ist der Unterschied zwischen Vorsorge und Eignungsuntersuchung?",
    a: "Vorsorge dient dem Gesundheitsschutz der Mitarbeitenden und ist ergebnisoffen. Eignungsuntersuchungen prüfen anlassbezogen die gesundheitliche Eignung für eine Tätigkeit – beides halten wir sauber getrennt.",
  },
];

export default function ArbeitsmedizinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizin", path: routes.arbeitsmedizin },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs current="Arbeitsmedizin" />
            <h1>Arbeitsmedizinische Betreuung, die im Alltag funktioniert</h1>
            <p className="sub-strong">Nach ASiG und DGUV Vorschrift 2 – persönlich betreut, digital organisiert.</p>
            <p className="sub">
              Von der laufenden betriebsärztlichen Betreuung bis zur einzelnen Vorsorge: MonacoMed übernimmt die
              arbeitsmedizinische Betreuung Ihres Unternehmens – mit festem ärztlichen
              Ansprechpartner, digitaler Terminorganisation und lückenloser Dokumentation.
            </p>
            <div className="hero-cta">
              <Link href={routes.betreuungsbedarf} className="btn btn-primary">
                Betreuungsbedarf kostenlos einschätzen
              </Link>
              <Link href={routes.rueckruf} className="btn btn-ghost">
                Rückruf vereinbaren
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Was die Betreuung umfasst"
            lead="Alle betriebsärztlichen Aufgaben – geplant, durchgeführt und dokumentiert."
          />
          <Tiles
            items={[
              { title: "Betriebsärztliche Betreuung", text: "Nach ASiG und DGUV V2 – mit festen Einsatzzeiten und festem Ansprechpartner." },
              { title: "Arbeitsmedizinische Vorsorge", text: "Pflicht-, Angebots- und Wunschvorsorge klar organisiert." },
              { title: "Eignungsuntersuchungen", text: "Bei konkretem Anlass, sauber von der Vorsorge getrennt." },
              { title: "ASA & Begehungen", text: "Teilnahme, Dokumentation und konkrete Empfehlungen." },
              { title: "BEM & Mutterschutz", text: "Arbeitsmedizinische Beratung für passende betriebliche Lösungen." },
              {
                title: "Impfaktionen",
                text: (
                  <>
                    Direkt im Betrieb – <Link href={routes.impfungen}>alle Details</Link>.
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="pad firm">
        <div className="wrap">
          <div className="grid">
            <Reveal style={{ alignSelf: "center" }}>
              <span className="lbl">Vorsorge nach ArbMedVV</span>
              <h2 style={{ marginTop: 14 }}>Welche Vorsorge braucht Ihr Team?</h2>
              <p className="lead">
                Wir ordnen ein, welche Vorsorgen für Ihre Tätigkeiten nötig sind – und das
                digitale Vorsorgekataster überwacht alle Fristen automatisch.
              </p>
            </Reveal>
            <Matrix
              heading="Die drei Vorsorgearten"
              rows={[
                [<b key="a">Pflichtvorsorge</b>, "z. B. bei Gefahrstoffen, Lärm oder Nachtarbeit"],
                [<b key="b">Angebotsvorsorge</b>, "z. B. bei Bildschirmarbeit"],
                [<b key="c">Wunschvorsorge</b>, "auf Wunsch der Mitarbeitenden"],
                [<b key="d">Eignungsuntersuchungen</b>, "separat und anlassbezogen, z. B. Fahr- und Steuertätigkeiten"],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="So starten wir" />
          <Steps
            items={[
              { n: "01", title: "Bedarf klären", text: "Tätigkeiten, Gefährdungen und Anzahl der Mitarbeitenden – daraus ergibt sich der Betreuungsumfang." },
              { n: "02", title: "Vorsorgeplan", text: "Wir legen fest, welche Vorsorgen und Untersuchungen anstehen." },
              { n: "03", title: "Untersuchungstage", text: "Im Betrieb oder in unserer Praxis – Mitarbeitende buchen online." },
              { n: "04", title: "Laufende Betreuung", text: "Fristen im Kataster, ASA-Teilnahme, Begehungen und feste Ansprechpartner." },
            ]}
          />
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Häufige Fragen zur Arbeitsmedizin" />
          <FaqList items={faqItems} />
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Klären wir Ihren Betreuungsbedarf"
        text="Wenige Angaben genügen – Ihre Anfrage wird direkt ärztlich geprüft, ohne Vertrieb oder Callcenter."
        ctaHref={routes.betreuungsbedarf}
        ctaLabel="Betreuungsbedarf kostenlos einschätzen"
      />
    </>
  );
}
