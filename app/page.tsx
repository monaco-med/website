import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import WhyLines from "@/components/WhyLines";
import FaqList from "@/components/FaqList";
import LogoWall from "@/components/LogoWall";
import ContactForm from "@/components/ContactForm";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} – Betriebsarzt & Arbeitsmedizin in München`,
  description: siteConfig.description,
  alternates: { canonical: routes.home },
};

const services = [
  {
    id: "01",
    href: routes.arbeitsmedizin,
    title: "Arbeitsmedizin",
    text: "Betriebsärztliche Betreuung, Vorsorge und Untersuchungen.",
  },
  {
    id: "02",
    href: routes.arbeitssicherheit,
    title: "Arbeitssicherheit",
    text: "Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilung, Unterweisungen.",
  },
  {
    id: "03",
    href: routes.bahnmedizin,
    title: "Bahnmedizin",
    text: "Eignungs- und Tauglichkeitsuntersuchungen für den Bahnbetrieb.",
  },
  {
    id: "04",
    href: routes.impfungen,
    title: "Impfungen im Unternehmen",
    text: "Impfaktionen direkt im Betrieb – von Planung bis Dokumentation.",
  },
  {
    id: "05",
    href: routes.digitaleProzesse,
    title: "Digitale Prozesse",
    text: "Terminbuchung, Vorsorgekataster und automatische Erinnerungen.",
  },
  {
    id: "06",
    href: routes.gesundheitsmanagement,
    title: "Gesundheitsmanagement",
    text: "BGM, Gesundheitstage, Ergonomie und Prävention.",
  },
];

const steps = [
  { n: "Schritt 01", title: "Anfrage senden", text: "Wenige Angaben reichen: Unternehmen, Anzahl der Mitarbeitenden, Standort und was Sie brauchen." },
  { n: "Schritt 02", title: "Klarheit bekommen", text: "Wir prüfen den Bedarf und zeigen Ihnen, welche Betreuung wirklich sinnvoll ist." },
  { n: "Schritt 03", title: "Angebot erhalten", text: "Sie bekommen ein klares Angebot – verständlich, passend und ohne unnötigen Ballast." },
  { n: "Schritt 04", title: "Starten", text: "Sie sagen zu, wir organisieren den Rest: Termine, Vorsorgen, ASA-Sitzungen, Begehungen, Arbeitssicherheit und digitale Abläufe." },
];

const whyItems = [
  { n: "01", title: "Feste Ansprechpartner", text: "Direkte Kommunikation statt anonymer Strukturen." },
  { n: "02", title: "Zentrale Koordination", text: "Arbeitsmedizin, Arbeitssicherheit und Gesundheitsmanagement abgestimmt organisiert." },
  { n: "03", title: "Digitale Prozesse", text: "Online-Terminbuchung, digitale Vorsorgeverwaltung und klare Abläufe." },
  { n: "04", title: "Vor Ort im Unternehmen", text: "Planbare Vorsorge- und Untersuchungstage direkt an Ihrem Standort." },
  { n: "05", title: "Flexibel skalierbar", text: "Von einzelnen Standorten bis zur standortübergreifenden Betreuung." },
];

const faqItems = [
  {
    q: "Braucht mein Unternehmen überhaupt einen Betriebsarzt?",
    a: "Arbeitgeber müssen eine arbeitsmedizinische Betreuung sicherstellen. Wie diese konkret aussieht, hängt von der Anzahl der Mitarbeitenden, den Tätigkeiten und Gefährdungen ab. Wir helfen bei der Einordnung.",
  },
  {
    q: "Bietet MonacoMed auch Arbeitssicherheit an?",
    a: "Ja. MonacoMed verbindet Arbeitsmedizin und Arbeitssicherheit – mit Betriebsarzt, Fachkraft für Arbeitssicherheit, ASA, Begehungen und Gefährdungsbeurteilungen.",
  },
  {
    q: "Können Termine digital organisiert werden?",
    a: "Ja. Mitarbeitende können Termine selbst online buchen. HR wird entlastet und behält den Überblick.",
  },
];

/**
 * Homepage (`/`) — full-page marketing overview of MonacoMed's services,
 * physician, process and FAQ, each section keyed to an `id` that other
 * pages deep-link into via `routes.leitung` / `routes.homeFaq`.
 *
 * Renders no breadcrumb (this is the site root). The FAQ section reuses
 * `FaqList` without `jsonLd` — the canonical `FAQPage` structured data
 * lives on {@link routes.faq} to avoid emitting it twice. Primary CTA
 * (`Betreuungsbedarf kostenlos einschätzen`) routes to `routes.betreuungsbedarf`;
 * the secondary CTA (`Rückruf vereinbaren`) routes to `routes.rueckruf`.
 */
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="grid">
            <Reveal className="main">
              <h1>Betriebliche Gesundheit einfach gut organisiert.</h1>
              <div className="coverage">München &amp; Bayern als Kerngebiet · weitere Standorte auf Anfrage</div>
              <div className="hero-cta">
                <Link href={routes.betreuungsbedarf} className="btn btn-primary">
                  Betreuungsbedarf kostenlos einschätzen
                </Link>
                <Link href={routes.rueckruf} className="btn btn-ghost">
                  Rückruf vereinbaren
                </Link>
              </div>
            </Reveal>
            <Reveal className="rail" stagger delay={0.2}>
              <div className="ri">
                <span className="k">01</span>
                <span className="v">Betreuung nach ASiG &amp; DGUV Vorschrift 2</span>
              </div>
              <div className="ri">
                <span className="k">02</span>
                <span className="v">Fachärztlich verantwortete Arbeitsmedizin</span>
              </div>
              <div className="ri">
                <span className="k">03</span>
                <span className="v">Digitale Termin- und Dokumentenverwaltung</span>
              </div>
              <div className="ri">
                <span className="k">04</span>
                <span className="v">Feste Ansprechpartner statt Callcenter</span>
              </div>
              <div className="ri">
                <span className="k">05</span>
                <span className="v">Betreuung einzelner oder mehrerer Standorte</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust">
        <div className="wrap">
          <div className="row">
            <div className="item">
              <span className="lbl">Fachlichkeit</span>
              <b>Betriebsmedizinisch spezialisiert</b>
            </div>
            <div className="item">
              <span className="lbl">Verantwortung</span>
              <b>Persönlich ärztlich geführt</b>
            </div>
            <div className="item">
              <span className="lbl">Erreichbarkeit</span>
              <b>Kurze Reaktionszeiten</b>
            </div>
            <div className="item">
              <span className="lbl">Zusammenarbeit</span>
              <b>Feste Ansprechpartner</b>
            </div>
          </div>
        </div>
      </div>

      {/* LEISTUNGEN */}
      <section className="pad" id="leistungen">
        <div className="wrap">
          <SectionHead
            label="Leistungen"
            title="Gesundheit und Arbeitsschutz aus einer Hand"
            action={{ href: routes.leistungen, label: "Alle Leistungen ansehen" }}
          />
          <Reveal className="lg-grid" stagger>
            {services.map((s) => (
              <Link className="lg-card" href={s.href} key={s.id}>
                <span className="lg-id">{s.id}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="lg-more">Mehr erfahren →</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LEITUNG */}
      <section className="pad leitung" id="leitung">
        <div className="wrap">
          <div className="grid">
            <Reveal className="photo">
              <Image
                src="/images/david-manghabati.jpg"
                alt="Dr. med. univ. David Manghabati, Facharzt für Innere Medizin"
                fill
                sizes="(max-width: 920px) 100vw, 340px"
                style={{ objectFit: "cover", objectPosition: "50% 24%" }}
                priority
              />
            </Reveal>
            <Reveal>
              <span className="lbl">Ärztliche Leitung</span>
              <h2 style={{ marginTop: 14 }}>Persönlich geführt, fachärztlich verantwortet</h2>
              <div className="name">Dr. med. univ. David Manghabati</div>
              <div className="quals">
                Facharzt für Innere Medizin
                <br />
                Betriebsmedizin, Notfallmedizin und Reisemedizin
              </div>
              <p className="bio">
                Bei MonacoMed liegt die ärztliche Verantwortung persönlich bei Dr. David
                Manghabati. Unternehmen profitieren von fundierter internistischer Erfahrung,
                kurzen Entscheidungswegen und arbeitsmedizinischen Empfehlungen, die im
                betrieblichen Alltag umsetzbar sind.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <LogoWall />

      {/* ABLAUF */}
      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Loslegen statt lange abstimmen"
            lead="Ein klarer Ablauf – vom ersten Kontakt bis zur laufenden Betreuung."
          />
          <Steps items={steps} />
        </div>
      </section>

      {/* WARUM */}
      <WhyLines items={whyItems} />

      {/* UNTERNEHMEN teaser */}
      <section className="pad firm" id="unternehmen" style={{ padding: "54px 0" }}>
        <div className="wrap">
          <Reveal className="teaser">
            <div>
              <span className="lbl">Für Unternehmen</span>
              <h2 style={{ marginTop: 12 }}>Mehrere Standorte</h2>
              <p style={{ marginTop: 10, fontSize: "15.5px", color: "var(--ink-soft)" }}>
                Zentral koordiniert statt einzeln organisiert.
              </p>
            </div>
            <Link href={routes.fuerUnternehmen} className="btn btn-primary">
              Mehr erfahren
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="pad" id="faq">
        <div className="wrap">
          <SectionHead
            title="Häufige Fragen vor dem Start"
            lead="Konkret statt pauschal — die häufigsten Fragen von Entscheidern."
          />
          <FaqList items={faqItems} />
          <div style={{ marginTop: 26 }}>
            <Link href={routes.faq} className="btn btn-ghost">
              Alle Fragen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="pad kontakt" id="kontakt">
        <div className="wrap">
          <SectionHead
            title="Betreuungsbedarf kostenlos einschätzen lassen"
            lead="Wenige Angaben genügen — wir prüfen den Bedarf und melden uns zur kurzen Einschätzung."
          />
          <div className="grid">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal className="contact-side">
              <h3>Direkt erreichbar</h3>
              <div className="ci">
                <span className="lbl">Adresse</span>
                Heidemannstraße 38 · 80939 München
              </div>
              <div className="ci">
                <span className="lbl">Vor Ort</span>
                München · Bayern · weitere Standorte auf Anfrage
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
