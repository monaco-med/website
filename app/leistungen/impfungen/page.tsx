import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHead from "@/components/SectionHead";
import Tiles from "@/components/Tiles";
import Steps from "@/components/Steps";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Impfungen im Unternehmen – Impfaktionen im Betrieb",
  description:
    "Grippeschutz, reisemedizinische und tätigkeitsbezogene Impfungen direkt im Betrieb – von der Planung bis zur Dokumentation.",
  alternates: { canonical: routes.impfungen },
};

const faqItems = [
  {
    q: "Ab wie vielen Mitarbeitenden lohnt sich ein Impftag?",
    a: "Auch kleinere Teams sind möglich – Umfang und Format stimmen wir individuell ab. Alternativ können Mitarbeitende einzeln in unsere Praxis kommen.",
  },
  {
    q: "Wie viel Vorlauf brauchen wir?",
    a: "In der Regel wenige Wochen. Grippeaktionen planen Sie am besten früh im Herbst, reisemedizinische Impfungen je nach Ziel mit mehreren Wochen Vorlauf.",
  },
  {
    q: "Geht das auch an mehreren Standorten?",
    a: "Ja. Impftage werden standortübergreifend koordiniert – mit zentraler Anmeldung und einheitlicher Dokumentation.",
  },
  {
    q: "Wer denkt an die Auffrischungen?",
    a: "Unser digitales Kataster überwacht Fälligkeiten und erinnert automatisch – niemand muss Listen führen.",
  },
];

export default function ImpfungenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Impfungen im Unternehmen", path: routes.impfungen },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs current="Impfungen im Unternehmen" />
            <h1>Impfaktionen direkt im Betrieb</h1>
            <p className="sub-strong">Von der Planung bis zur Dokumentation – ärztlich durchgeführt.</p>
            <p className="sub">
              Grippeschutz vor der Saison, reisemedizinische Beratung vor Dienstreisen oder
              tätigkeitsbezogene Impfungen: MonacoMed organisiert Impftage direkt bei Ihnen –
              inklusive Aufklärung, Einwilligung und Nachweis.
            </p>
            <div className="hero-cta">
              <Link href={routes.betreuungsbedarf} className="btn btn-primary">
                Impfaktion anfragen
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
            title="Welche Impfungen wir anbieten"
            lead="Abgestimmt auf Tätigkeiten, Reisepläne und Saison."
          />
          <Tiles
            items={[
              { title: "Grippeschutzimpfung", text: "Die jährliche Aktion im Herbst – planbar für das ganze Team." },
              { title: "Reisemedizinische Impfungen", text: "Beratung und Impfungen vor Dienstreisen – fachärztlich durch einen Reisemediziner." },
              { title: "Tätigkeitsbezogene Impfungen", text: "z. B. Hepatitis A/B bei entsprechender Gefährdung – eingeordnet über die Vorsorge." },
            ]}
          />
        </div>
      </section>

      <section className="pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead title="So läuft ein Impftag ab" />
          <Steps
            items={[
              { n: "01", title: "Bedarf & Termin", text: "Wir planen Umfang und Termin gemeinsam – abgestimmt auf Ihre Standorte." },
              { n: "02", title: "Anmeldung & Aufklärung", text: "Mitarbeitende melden sich online an und erhalten alle Informationen vorab digital." },
              { n: "03", title: "Impftag im Betrieb", text: "Durchführung vor Ort – mit wenig Ausfallzeit für Ihr Team." },
              { n: "04", title: "Dokumentation", text: "Nachweise für die Mitarbeitenden, Erinnerung an Auffrischungen über das Kataster." },
            ]}
          />
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead title="Häufige Fragen zu Impfaktionen" />
          <FaqList items={faqItems} />
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Planen wir Ihre nächste Impfaktion"
        text="Wenige Angaben genügen – Ihre Anfrage wird direkt ärztlich geprüft, ohne Vertrieb oder Callcenter."
        ctaHref={routes.betreuungsbedarf}
        ctaLabel="Jetzt unverbindlich anfragen"
      />
    </>
  );
}
