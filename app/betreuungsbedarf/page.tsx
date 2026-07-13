import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ContactForm from "@/components/ContactForm";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Betreuungsbedarf kostenlos einschätzen",
  description:
    "Wenige Angaben genügen: Wir prüfen Ihren arbeitsmedizinischen Betreuungsbedarf und melden uns mit einer kostenlosen ärztlichen Ersteinschätzung.",
  alternates: { canonical: routes.betreuungsbedarf },
};

export default function BetreuungsbedarfPage() {
  return (
    <section className="pad kontakt" id="kontakt">
      <div className="wrap">
        <SectionHead
          as="h1"
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
              München · Bayern · weitere Standorte n. A.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
