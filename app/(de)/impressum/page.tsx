import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { buildAlternates } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz",
  description: "Impressum und Datenschutzerklärung der MonacoMed – Praxis für Arbeitsmedizin in München.",
  alternates: buildAlternates("impressum", "de"),
  robots: { index: true, follow: true },
};

/**
 * Legal notice & privacy page (`/impressum`) — combined Impressum
 * (§ 5 TMG) and Datenschutzerklärung.
 *
 * The German text here is client-supplied and must be reproduced verbatim —
 * it is a legal document, so do not reword, condense, or "improve" it.
 * Only the practice's own name/address/email are interpolated from
 * `siteConfig`; every other detail (Kammer, Approbationsbehörde, hosting
 * provider, Aufsichtsbehörde) is hardcoded because it does not appear
 * anywhere else in the codebase.
 *
 * NOTE: § 2 names Google Cloud as the hosting provider, per the text the
 * client supplied. The site is actually deployed on Vercel — flagged to
 * the client; update this section if that discrepancy is confirmed.
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
            <h2 id="impressum">Impressum</h2>
            <h3>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h3>
            <p>
              {siteConfig.name} – Praxis für Arbeitsmedizin
              <br />
              Inhaber: {siteConfig.physician}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <h3>Kontakt</h3>
            <p>E-Mail: {siteConfig.email}</p>
            <h3>Berufsrechtliche Angaben</h3>
            <p>
              Gesetzliche Berufsbezeichnung: Arzt
              <br />
              Staat, in dem die Berufsbezeichnung verliehen wurde: Bundesrepublik Deutschland
            </p>
            <p>
              Approbationsbehörde:
              <br />
              Regierung von Oberbayern
            </p>
            <p>
              Facharztbezeichnung: Facharzt für Innere Medizin
              <br />
              Zusatzbezeichnung: Betriebsmedizin
            </p>
            <h3>Zuständige Berufskammer</h3>
            <p>
              Bayerische Landesärztekammer
              <br />
              Mühlbaurstraße 16
              <br />
              81677 München
            </p>
            <p>Es gelten folgende berufsrechtliche Regelungen:</p>
            <ul>
              <li>Berufsordnung für die Ärzte Bayerns</li>
              <li>Heilberufe-Kammergesetz des Freistaates Bayern</li>
            </ul>
            <p>
              Die berufsrechtlichen Regelungen sind auf der Internetseite der Bayerischen
              Landesärztekammer abrufbar.
            </p>

            <h2 id="datenschutz">Datenschutzerklärung</h2>
            <h3>1. Verantwortlicher</h3>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
            </p>
            <p>
              {siteConfig.physician}
              <br />
              {siteConfig.name} – Praxis für Arbeitsmedizin
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <p>E-Mail: {siteConfig.email}</p>

            <h3>2. Hosting und Aufruf der Website</h3>
            <p>Diese Website wird über Dienste der Google Cloud gehostet.</p>
            <p>Anbieter ist:</p>
            <p>
              Google Cloud EMEA Limited
              <br />
              70 Sir John Rogerson’s Quay
              <br />
              Dublin 2
              <br />
              Irland
            </p>
            <p>
              Beim Aufruf der Website werden technisch erforderliche Daten verarbeitet. Hierzu
              können insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene
              Seite, Browsertyp, Betriebssystem und technische Statusinformationen gehören.
            </p>
            <p>
              Die Verarbeitung erfolgt, um die Website sicher und funktionsfähig bereitzustellen.
              Rechtsgrundlage ist Art. 6 Abs. 1 Buchstabe f DSGVO. Unser berechtigtes Interesse
              liegt im sicheren und störungsfreien Betrieb der Website.
            </p>
            <p>
              Die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind,
              sofern keine gesetzlichen Aufbewahrungspflichten bestehen oder eine weitere
              Speicherung zur Aufklärung eines Sicherheitsvorfalls erforderlich ist.
            </p>
            <p>
              Google wird als technischer Auftragsverarbeiter eingesetzt. Soweit Daten außerhalb
              des Europäischen Wirtschaftsraums verarbeitet werden, erfolgt dies auf Grundlage der
              hierfür vorgesehenen datenschutzrechtlichen Garantien.
            </p>

            <h3>3. Kontakt-, Anfrage- und Rückrufformulare</h3>
            <p>
              Wenn Sie uns über ein Formular kontaktieren, verarbeiten wir die von Ihnen
              eingegebenen Angaben, um Ihre Anfrage zu bearbeiten und zu beantworten.
            </p>
            <p>Hierzu können insbesondere folgende Angaben gehören:</p>
            <ul>
              <li>Name und Unternehmen</li>
              <li>E-Mail-Adresse</li>
              <li>freiwillig angegebene Telefonnummer</li>
              <li>Angaben zum Betreuungsbedarf</li>
              <li>Inhalt der Nachricht oder Rückrufwunsch</li>
            </ul>
            <p>
              Die Telefonnummer ist freiwillig. Sie wird verwendet, wenn Sie eine telefonische
              Rückmeldung wünschen.
            </p>
            <p>
              Soweit die Anfrage der Anbahnung oder Durchführung eines Vertragsverhältnisses dient,
              erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchstabe b DSGVO. Im
              Übrigen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchstabe f DSGVO.
              Unser berechtigtes Interesse liegt in der Bearbeitung geschäftlicher Anfragen und der
              Kommunikation mit Interessenten und Kunden.
            </p>
            <p>
              Die Angaben werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und
              keine gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine
              weitere Speicherung bestehen.
            </p>
            <p>
              Bitte übermitteln Sie über die allgemeinen Websiteformulare keine Gesundheitsdaten,
              Befunde oder medizinischen Unterlagen.
            </p>

            <h3>4. Empfänger der Daten</h3>
            <p>
              Personenbezogene Daten erhalten nur diejenigen Stellen, die sie zur technischen
              Bereitstellung der Website oder zur Bearbeitung Ihrer Anfrage benötigen.
            </p>
            <p>
              Hierzu können insbesondere die von uns eingesetzten Hosting- und
              Kommunikationsdienstleister gehören, die personenbezogene Daten nach unseren
              Weisungen verarbeiten.
            </p>
            <p>Eine Weitergabe zu Werbe- oder Marketingzwecken erfolgt nicht.</p>

            <h3>5. Cookies und Analyse</h3>
            <p>
              Diese Website verwendet derzeit keine Analyse- oder Marketing-Cookies und keine
              externen Trackingdienste.
            </p>
            <p>
              Soweit technisch erforderliche Speichertechnologien eingesetzt werden, dienen diese
              ausschließlich dem sicheren und funktionsfähigen Betrieb der Website.
            </p>

            <h3>6. Ihre Rechte</h3>
            <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre personenbezogenen Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte können Sie sich an die oben genannte E-Mail-Adresse wenden.
            </p>

            <h3>7. Beschwerderecht</h3>
            <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>
            <p>Für nichtöffentliche Stellen in Bayern ist grundsätzlich zuständig:</p>
            <p>
              Bayerisches Landesamt für Datenschutzaufsicht
              <br />
              Promenade 18
              <br />
              91522 Ansbach
            </p>
            <p className="stand">Stand: Juli 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
