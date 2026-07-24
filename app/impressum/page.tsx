import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz",
  description: "Impressum und Datenschutzerklärung der MonacoMed – Praxis für Arbeitsmedizin in München.",
  alternates: { canonical: routes.impressum },
  robots: { index: true, follow: true },
};

/**
 * Legal notice & privacy page (`/impressum`) — combined Impressum
 * (§ 5 TMG) and Datenschutzerklärung.
 *
 * NOTE: the visible `draft-note` banner is still accurate — one real
 * placeholder remains, `[Details vor Launch prüfen]` under
 * "Berufsbezeichnung und berufsrechtliche Regelungen", pending legal
 * review before launch. Contact/responsible-party/hosting/cookie sections
 * are otherwise filled in via `siteConfig.email`; there is intentionally
 * no phone number and no cookie-consent banner (no analytics is in use).
 * Do not treat this page as fully launch-ready without that one review.
 */
export default function ImpressumPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <span className="lbl">Rechtliches</span>
            <h1>Impressum &amp; Datenschutz</h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "26px 0 0" }}>
        <div className="wrap">
          <div className="legal">
            <div className="draft-note">
              Entwurf – alle Angaben sind Platzhalter und werden vor dem Launch vervollständigt
              und juristisch geprüft.
            </div>

            <h2 id="impressum">Impressum</h2>
            <h3>Angaben gemäß § 5 TMG</h3>
            <p>
              {siteConfig.name} – Praxis für Arbeitsmedizin
              <br />
              {siteConfig.physician}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <h3>Kontakt</h3>
            <p>E-Mail: {siteConfig.email}</p>
            <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
            <p>
              Berufsbezeichnung: Arzt (verliehen in Deutschland). Zuständige Kammer: Bayerische
              Landesärztekammer. Es gelten die Berufsordnung für die Ärzte Bayerns sowie das
              Heilberufe-Kammergesetz. [Details vor Launch prüfen]
            </p>
            <h3>Verantwortlich für den Inhalt</h3>
            <p>{siteConfig.physician}, Anschrift wie oben.</p>

            <h2 id="datenschutz">Datenschutzerklärung</h2>
            <h3>Verantwortlicher</h3>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist die oben genannte
              Praxis, erreichbar unter {siteConfig.email}.
            </p>
            <h3>Hosting</h3>
            <p>
              Beim Aufruf der Website werden technisch notwendige Daten (z. B. IP-Adresse,
              Zeitpunkt des Zugriffs) durch den Hosting-Anbieter verarbeitet. Bei Fragen dazu
              wenden Sie sich bitte an {siteConfig.email}.
            </p>
            <h3>Kontakt- und Anfrageformulare</h3>
            <p>
              Ihre Angaben aus den Formularen verwenden wir ausschließlich zur Bearbeitung Ihrer
              Anfrage. Eine Weitergabe an Dritte erfolgt nicht.
            </p>
            <h3>Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten sowie ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde.
            </p>
            <h3>Cookies &amp; Analyse</h3>
            <p>Diese Website verwendet derzeit keine Analyse- oder Marketing-Cookies.</p>
          </div>
        </div>
      </section>
    </>
  );
}
