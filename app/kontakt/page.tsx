import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Allgemeine Frage oder Betreuungsbedarf einschätzen lassen? Sagen Sie uns kurz, worum es geht – wir melden uns persönlich.",
  alternates: { canonical: routes.kontakt },
};

export default function KontaktPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <span className="lbl">Kontakt</span>
            <h1>Wie können wir helfen?</h1>
            <p className="sub">Sagen Sie uns kurz, worum es geht – dann sind Sie mit einem Klick am richtigen Ort.</p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "64px 0 84px" }}>
        <div className="wrap">
          <Reveal className="choices" stagger>
            <div className="choice">
              <span className="lbl">Option 01</span>
              <h3>Ich habe eine allgemeine Frage</h3>
              <p>Zu Leistungen, Abläufen oder der Zusammenarbeit – wir rufen Sie zurück und klären es persönlich.</p>
              <div className="actions">
                <Link href={routes.rueckruf} className="btn btn-primary">
                  Rückruf vereinbaren
                </Link>
                <Link href={routes.faq} className="btn btn-ghost">
                  Häufige Fragen ansehen
                </Link>
              </div>
            </div>
            <div className="choice">
              <span className="lbl">Option 02</span>
              <h3>Ich möchte den Betreuungsbedarf einschätzen lassen</h3>
              <p>Wenige Angaben zu Ihrem Unternehmen genügen – Sie erhalten eine unverbindliche Einschätzung Ihres Betreuungsbedarfs.</p>
              <div className="actions">
                <Link href={routes.betreuungsbedarf} className="btn btn-primary">
                  Betreuungsbedarf kostenlos einschätzen
                </Link>
              </div>
            </div>
          </Reveal>
          <p className="side-note">{"// Ihre Anfrage wird direkt ärztlich geprüft – ohne Vertrieb oder Callcenter."}</p>
        </div>
      </section>
    </>
  );
}
