import type { Metadata } from "next";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import Tiles from "@/components/Tiles";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Leistungen – Arbeitsmedizin, Arbeitssicherheit & mehr",
  description:
    "Alle Leistungen von MonacoMed im Überblick: Arbeitsmedizin, Arbeitssicherheit, Bahnmedizin, Impfungen, digitale Prozesse und Gesundheitsmanagement.",
  alternates: { canonical: routes.leistungen },
};

const overview = [
  { id: "01", href: routes.arbeitsmedizin, title: "Arbeitsmedizin", text: "Betriebsärztliche Betreuung, Vorsorge und Untersuchungen nach ASiG und DGUV V2." },
  { id: "02", href: routes.arbeitssicherheit, title: "Arbeitssicherheit", text: "Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilung und Unterweisungen." },
  { id: "03", href: routes.bahnmedizin, title: "Bahnmedizin", text: "Eignungs- und Tauglichkeitsuntersuchungen für den Bahnbetrieb – als ermächtigte Untersuchungsstelle." },
  { id: "04", href: routes.impfungen, title: "Impfungen im Unternehmen", text: "Impfaktionen direkt im Betrieb – von der Planung bis zur Dokumentation." },
  { id: "05", href: routes.digitaleProzesse, title: "Digitale Prozesse", text: "Online-Terminbuchung, Vorsorgekataster und automatische Erinnerungen." },
  { id: "06", href: routes.gesundheitsmanagement, title: "Gesundheitsmanagement", text: "BGM, Gesundheitstage, Ergonomie und Prävention für Ihr Team." },
  { id: "07", href: routes.gUntersuchungen, title: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", text: "G25, G37, G41 und weitere Untersuchungen – geplant, durchgeführt und dokumentiert." },
];

export default function LeistungenPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <span className="lbl">Leistungen</span>
            <h1>Gesundheit und Arbeitsschutz aus einer Hand</h1>
            <p className="sub">
              Vier Leistungsbereiche, ein Team, ein System: Arbeitsmedizin, Arbeitssicherheit und
              Gesundheitsmanagement – digital organisiert und persönlich betreut.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "64px 0 20px" }}>
        <div className="wrap">
          <Reveal className="ix" stagger>
            {overview.map((item) => (
              <Link className="ix-row" href={item.href} key={item.id}>
                <span className="ix-id">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="ix-more">Mehr erfahren →</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pad" id="arbeitsmedizin">
        <div className="wrap">
          <SectionHead
            label="Leistungsbereich 01"
            title="Arbeitsmedizin"
            action={{ href: routes.arbeitsmedizin, label: "Mehr erfahren", variant: "ghost" }}
          />
          <Tiles
            items={[
              { title: "Betriebsärztliche Betreuung", text: "Nach ASiG und DGUV V2 – persönlich begleitet." },
              { title: "Arbeitsmedizinische Vorsorge", text: "Pflicht-, Angebots- und Wunschvorsorge klar organisiert." },
              { title: "Eignungsuntersuchungen", text: "Bei konkretem Anlass, sauber von Vorsorge getrennt." },
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

      <section className="pad sand" id="arbeitssicherheit">
        <div className="wrap">
          <SectionHead
            label="Leistungsbereich 02"
            title="Arbeitssicherheit"
            action={{ href: routes.arbeitssicherheit, label: "Mehr erfahren", variant: "ghost" }}
          />
          <Tiles
            items={[
              { title: "Fachkraft für Arbeitssicherheit", text: "Sicherheitstechnische Betreuung und Beratung." },
              { title: "Gefährdungsbeurteilung", text: "Bewertung, Maßnahmenplanung und Dokumentation." },
              { title: "Unterweisungen", text: "Praxisnah, verständlich und auf den Betrieb abgestimmt." },
              { title: "Brandschutz", text: "Unterweisung und praktische Schulung im Brandschutz." },
              { title: "Maßnahmenverfolgung", text: "Offene Punkte strukturiert nachhalten." },
            ]}
          />
        </div>
      </section>

      <section className="pad" id="bahnmedizin">
        <div className="wrap">
          <SectionHead
            label="Leistungsbereich 03"
            title="Bahnmedizin"
            action={{ href: routes.bahnmedizin, label: "Mehr erfahren", variant: "ghost" }}
          />
          <Tiles
            items={[
              { title: "Triebfahrzeugführer (§ 16 TfV)", text: "Tauglichkeitsuntersuchungen für Lokführer gemäß den gesetzlichen Vorgaben." },
              { title: "VDV-Schrift 714", text: "Untersuchungen für Beschäftigte im öffentlichen Verkehrs- und Bahnbereich." },
              { title: "EBO-Untersuchungen", text: "Eignungsuntersuchungen für sicherheitsrelevante Tätigkeiten im Eisenbahnbetrieb." },
              { title: "DB Anforderungsgruppen A & B", text: "Durchführung entsprechend den geltenden Konzernrichtlinien." },
              { title: "Weitere sicherheitsrelevante Tätigkeiten", text: "U. a. Sicherungsposten (SiPo) und Beschäftigte mit besonderen Anforderungen." },
            ]}
          />
        </div>
      </section>

      <section className="pad sand" id="impfungen">
        <div className="wrap">
          <SectionHead
            label="Leistungsbereich 04"
            title="Impfungen im Unternehmen"
            action={{ href: routes.impfungen, label: "Mehr erfahren", variant: "ghost" }}
          />
          <Tiles
            items={[
              { title: "Grippeschutzimpfung", text: "Die jährliche Aktion im Herbst – planbar für das ganze Team." },
              { title: "Reisemedizinische Impfungen", text: "Beratung und Impfungen vor Dienstreisen – fachärztlich durchgeführt." },
              { title: "Tätigkeitsbezogene Impfungen", text: "z. B. Hepatitis A/B bei entsprechender Gefährdung." },
              { title: "Impftage im Betrieb", text: "Durchführung direkt vor Ort – mit wenig Ausfallzeit." },
              { title: "Dokumentation & Erinnerung", text: "Nachweise und automatische Auffrischungs-Erinnerungen über das Kataster." },
            ]}
          />
        </div>
      </section>

      <section className="pad" id="digitale-prozesse">
        <div className="wrap">
          <SectionHead label="Leistungsbereich 05" title="Digitale Prozesse" />
          <Tiles
            items={[
              { title: "Digitales Vorsorgekataster", text: "Vorsorgen, Fristen und Fälligkeiten jederzeit im Blick." },
              { title: "Online-Terminbuchung", text: "Mitarbeitende buchen Termine selbstständig online." },
              { title: "Automatische Erinnerungen", text: "Weniger Ausfälle und weniger organisatorischer Aufwand." },
              { title: "Vorabinformationen", text: "Wichtige Infos digital vor dem Termin." },
              { title: "Digitale Zusammenarbeit", text: "Klare Abläufe, sichere Dokumente und weniger Papierverkehr." },
            ]}
          />
        </div>
      </section>

      <section className="pad sand" id="gesundheitsmanagement">
        <div className="wrap">
          <SectionHead label="Leistungsbereich 06" title="Gesundheitsmanagement" />
          <Tiles
            items={[
              { title: "BGM", text: "Gesundheitsangebote passend zum Unternehmen." },
              { title: "Gesundheitstage", text: "Aktionen zu Vorsorge, Bewegung, Ergonomie oder Impfungen." },
              { title: "Ergonomie", text: "Gesunde Gestaltung von Bildschirm- und Arbeitsplätzen." },
              { title: "Psychische Belastung", text: "Strukturierte Analyse und umsetzbare Maßnahmen." },
              { title: "Prävention", text: "Angebote zu Stress, Bewegung, Schlaf oder Herz-Kreislauf." },
            ]}
          />
        </div>
      </section>

      <section className="pad" id="vorsorge-g-untersuchungen">
        <div className="wrap">
          <SectionHead
            label="Leistungsbereich 07"
            title="Arbeitsmedizinische Vorsorge & G-Untersuchungen"
            action={{ href: routes.gUntersuchungen, label: "Mehr erfahren", variant: "ghost" }}
          />
          <Tiles
            items={[
              {
                title: "G25 – Fahr-, Steuer- und Überwachungstätigkeiten",
                text: (
                  <>
                    Eignungsbeurteilung für Fahrzeuge, Maschinen und Anlagen – <Link href={routes.g25}>mehr zur G25</Link>.
                  </>
                ),
              },
              {
                title: "G37 – Bildschirmarbeitsplätze",
                text: (
                  <>
                    Vorsorge bei Bildschirmarbeit mit Seh- und Beratungsanteil – <Link href={routes.g37}>mehr zur G37</Link>.
                  </>
                ),
              },
              {
                title: "G41 – Arbeiten mit Absturzgefahr",
                text: (
                  <>
                    Eignungsbeurteilung für Tätigkeiten mit besonderer Absturzgefährdung – <Link href={routes.g41}>mehr zur G41</Link>.
                  </>
                ),
              },
              {
                title: "G42 – Tätigkeiten mit Infektionsgefährdung",
                text: (
                  <>
                    Vorsorge für Gesundheitswesen, Labor und weitere Risikobereiche – <Link href={routes.g42}>mehr zur G42</Link>.
                  </>
                ),
              },
              {
                title: "G20, G24 & Asbestvorsorge",
                text: (
                  <>
                    Vorsorge bei Lärm, Hautbelastungen und Asbestexposition – <Link href={routes.gUntersuchungen}>alle G-Untersuchungen</Link>.
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="Welche Leistungen braucht Ihr Betrieb?"
        text="Wenige Angaben genügen – Ihre Anfrage wird direkt ärztlich geprüft, ohne Vertrieb oder Callcenter."
        ctaHref={routes.betreuungsbedarf}
        ctaLabel="Betreuungsbedarf kostenlos einschätzen"
      />
    </>
  );
}
