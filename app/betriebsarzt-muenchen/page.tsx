import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ReasonGrid from "@/components/ReasonGrid";
import { MatrixLinks } from "@/components/Matrix";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Betriebsarzt München",
  description:
    "Ihr Betriebsarzt in München: Praxis in der Heidemannstraße, Untersuchungstage vor Ort im Betrieb, kurzfristige Termine – fachärztlich geführt.",
  alternates: { canonical: routes.betriebsarztMuenchen },
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: siteConfig.name,
  medicalSpecialty: "Occupational Medicine",
  physician: siteConfig.physician,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.zip,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  areaServed: ["München", "Bayern"],
  url: `${siteConfig.url}${routes.betriebsarztMuenchen}`,
};

const faqItems = [
  {
    q: "Betreuen Sie nur Unternehmen in München?",
    a: "Kerngebiet sind München und Bayern. Unternehmen mit weiteren Standorten betreuen wir auf Anfrage – zentral koordiniert.",
  },
  {
    q: "Können Mitarbeitende einzeln in die Praxis kommen?",
    a: "Ja. Einzeltermine finden in der Praxis in der Heidemannstraße 38 statt – online buchbar, mit Erinnerung vor dem Termin.",
  },
  {
    q: "Wie schnell bekommen wir Termine?",
    a: "Kurzfristig – auch für ganze Teams. Die Terminvergabe läuft digital, freie Zeitfenster sind direkt sichtbar.",
  },
];

export default function BetriebsarztMuenchenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <span className="lbl">Betriebsarzt München</span>
            <h1>Ihr Betriebsarzt in München</h1>
            <p className="sub-strong">Praxis in München – Einsätze direkt in Ihrem Betrieb.</p>
            <p className="sub">
              MonacoMed betreut Unternehmen in München und Bayern: aus der Praxis in der
              Heidemannstraße 38 und mit Untersuchungstagen vor Ort in Ihrem Betrieb. Weitere
              Standorte auf Anfrage.
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
            title="Vor Ort statt aus der Ferne"
            lead="Ein Münchner Betriebsarzt mit kurzen Wegen – kein anonymer Großanbieter."
          />
          <ReasonGrid
            items={[
              { title: "Kurze Wege", text: "Praxis im Münchner Norden, Einsätze im Stadtgebiet und Umland – schnell erreichbar, schnell vor Ort." },
              { title: "Betrieb oder Praxis", text: "Untersuchungstage direkt bei Ihnen oder Einzeltermine in der Praxis – je nachdem, was besser passt." },
              { title: "Fester ärztlicher Ansprechpartner", text: "Ärztlich geführt durch Dr. med. univ. David Manghabati – persönlich, nicht über eine Hotline." },
            ]}
          />
        </div>
      </section>

      <section className="pad firm">
        <div className="wrap">
          <div className="grid">
            <Reveal style={{ alignSelf: "center" }}>
              <span className="lbl">Leistungen</span>
              <h2 style={{ marginTop: 14 }}>Alles aus einer Hand</h2>
              <p className="lead">
                Arbeitsmedizin, Arbeitssicherheit und Gesundheitsmanagement – koordiniert von
                einem Team, dokumentiert in einem System.
              </p>
            </Reveal>
            <MatrixLinks
              heading="Im Überblick"
              items={[
                { href: routes.arbeitsmedizin, label: "Arbeitsmedizin & Vorsorge" },
                { href: routes.arbeitssicherheit, label: "Arbeitssicherheit & Gefährdungsbeurteilung" },
                { href: routes.impfungen, label: "Impfungen im Unternehmen" },
                { href: routes.fuerUnternehmen, label: "Betreuung mehrerer Standorte" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="Häufige Fragen zum Standort" />
          <FaqList items={faqItems} />
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Sprechen wir über Ihren Betrieb"
        text="Wenige Angaben genügen – Ihre Anfrage wird direkt ärztlich geprüft, ohne Vertrieb oder Callcenter."
        ctaHref={routes.betreuungsbedarf}
        ctaLabel="Betreuungsbedarf kostenlos einschätzen"
      />
    </>
  );
}
