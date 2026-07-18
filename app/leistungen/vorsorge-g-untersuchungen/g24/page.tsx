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
  title: "G24 Untersuchung München",
  description:
    "G24 Untersuchung München: arbeitsmedizinische Vorsorge bei Hautbelastungen durch Feuchtarbeit, Handschuhe oder hautreizende Arbeitsstoffe – im Betrieb oder in der Praxis.",
  alternates: { canonical: routes.g24 },
};

export default function G24Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", path: routes.leistungen },
          { name: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", path: routes.gUntersuchungen },
          { name: "G24 Untersuchung München", path: routes.g24 },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current="G24 Untersuchung München"
              parent={{ label: "Arbeitsmedizinische Vorsorge & G-Untersuchungen", href: routes.gUntersuchungen }}
            />
            <h1>G24 Untersuchung München</h1>
            <p className="sub-strong">Arbeitsmedizinische Vorsorge bei Hautbelastungen</p>
            <p className="sub">
              Die sogenannte G24 Untersuchung betrifft Beschäftigte, deren Haut durch ihre berufliche Tätigkeit
              besonderen Belastungen ausgesetzt ist.
            </p>
            <p className="sub">
              Die frühere Bezeichnung „G24 – Hauterkrankungen” wird weiterhin häufig verwendet. Heute erfolgt die
              arbeitsmedizinische Vorsorge auf Grundlage des konkreten Vorsorgeanlasses und der betrieblichen
              Gefährdungsbeurteilung.
            </p>
            <p className="sub">
              MonacoMed bietet arbeitsmedizinische Vorsorge bei hautbelastenden Tätigkeiten für Unternehmen in
              München und nach Absprache direkt bei Ihnen vor Ort an.
            </p>
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                G24 Vorsorge anfragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead
            title="Für wen kann eine G24 Vorsorge relevant sein?"
            lead="Arbeitsmedizinische Vorsorge kann insbesondere bei Tätigkeiten mit erhöhter Hautbelastung relevant sein, beispielsweise bei:"
          />
          <CheckList
            items={[
              "Feuchtarbeit",
              "häufigem oder längerem Tragen flüssigkeitsdichter Handschuhe",
              "regelmäßigem Kontakt mit hautreizenden oder sensibilisierenden Arbeitsstoffen",
              "Tätigkeiten mit Kühlschmierstoffen",
              "Reinigungs- und Desinfektionstätigkeiten",
              "Tätigkeiten im Gesundheitswesen, Handwerk oder in der Industrie",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Ob eine Pflicht- oder Angebotsvorsorge erforderlich ist, richtet sich nach Art und Umfang der Exposition
            und der Gefährdungsbeurteilung.
          </p>
        </div>
      </section>

      <section className="pad sand">
        <div className="wrap">
          <SectionHead
            title="Was beinhaltet die G24 Vorsorge?"
            lead="Im Mittelpunkt stehen die individuelle Beratung zur Hautgesundheit und die frühzeitige Erkennung arbeitsbedingter Hautprobleme."
          />
          <p className="pain-intro">Je nach Vorsorgeanlass werden unter anderem folgende Themen berücksichtigt:</p>
          <CheckList
            items={[
              "aktuelle oder frühere Hautbeschwerden",
              "berufliche Hautbelastungen",
              "geeignete Schutzhandschuhe",
              "Hautschutz und Hautpflege",
              "betriebliche Hautschutzmaßnahmen",
            ]}
          />
          <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
            Bei Bedarf kann eine Untersuchung der betroffenen Hautbereiche angeboten werden.
          </p>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <SectionHead title="Hauterkrankungen frühzeitig vermeiden" />
          <div className="prose">
            <p>
              Beruflich bedingte Hauterkrankungen können sich schleichend entwickeln. Frühzeitige arbeitsmedizinische
              Beratung und geeignete Schutzmaßnahmen können dazu beitragen, Beschwerden zu vermeiden oder eine
              Verschlechterung zu verhindern.
            </p>
            <p>
              Die arbeitsmedizinische Vorsorge ergänzt dabei die technischen und organisatorischen Schutzmaßnahmen im
              Unternehmen.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        label="Kontakt"
        title="G24 Vorsorge direkt im Unternehmen"
        text="Bei mehreren Beschäftigten mit hautbelastenden Tätigkeiten können wir Vorsorgetermine gebündelt direkt an Ihrem Standort durchführen. Wir unterstützen Sie bei der Organisation und stimmen den Vorsorgebedarf anhand der Tätigkeiten und der betrieblichen Gefährdungsbeurteilung mit Ihnen ab. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück."
        ctaHref={routes.rueckruf}
        ctaLabel="Vorsorgetag anfragen"
      />
    </>
  );
}
