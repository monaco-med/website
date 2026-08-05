import type { LegalPageContent } from "@/content/types";

/**
 * German Impressum & Datenschutzerklärung.
 *
 * Client-supplied legal text — reproduce verbatim; do not reword or condense.
 * `{{...}}` placeholders are filled from `siteConfig` by `LegalPage`.
 *
 * NOTE: § 2 names Google Cloud as the hosting provider, per the text the client
 * supplied, while the site is deployed on Vercel. Flagged to the client and
 * tracked in the plan — resolve before this is translated, so the discrepancy
 * isn't duplicated into a second legal document.
 */
export const impressumDe: LegalPageContent = {
  meta: {
    title: "Impressum & Datenschutz",
    description:
      "Impressum und Datenschutzerklärung der MonacoMed – Praxis für Arbeitsmedizin in München.",
  },
  label: "Rechtliches",
  h1: "Impressum & Datenschutz",
  blocks: [
    { kind: "h2", anchor: "impressum", text: "Impressum" },
    { kind: "h3", text: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)" },
    {
      kind: "p",
      lines: [
        "{{name}} – Praxis für Arbeitsmedizin",
        "Inhaber: {{physician}}",
        "{{street}}",
        "{{zip}} {{city}}",
      ],
    },
    { kind: "h3", text: "Kontakt" },
    { kind: "p", lines: ["E-Mail: {{email}}"] },
    { kind: "h3", text: "Berufsrechtliche Angaben" },
    {
      kind: "p",
      lines: [
        "Gesetzliche Berufsbezeichnung: Arzt",
        "Staat, in dem die Berufsbezeichnung verliehen wurde: Bundesrepublik Deutschland",
      ],
    },
    {
      kind: "p",
      lines: [
        "Approbationsbehörde:",
        "Regierung von Oberbayern",
      ],
    },
    {
      kind: "p",
      lines: [
        "Facharztbezeichnung: Facharzt für Innere Medizin",
        "Zusatzbezeichnung: Betriebsmedizin",
      ],
    },
    { kind: "h3", text: "Zuständige Berufskammer" },
    {
      kind: "p",
      lines: [
        "Bayerische Landesärztekammer",
        "Mühlbaurstraße 16",
        "81677 München",
      ],
    },
    { kind: "p", lines: ["Es gelten folgende berufsrechtliche Regelungen:"] },
    {
      kind: "list",
      items: [
        "Berufsordnung für die Ärzte Bayerns",
        "Heilberufe-Kammergesetz des Freistaates Bayern",
      ],
    },
    { kind: "p", lines: ["Die berufsrechtlichen Regelungen sind auf der Internetseite der Bayerischen Landesärztekammer abrufbar."] },
    { kind: "h2", anchor: "datenschutz", text: "Datenschutzerklärung" },
    { kind: "h3", text: "1. Verantwortlicher" },
    { kind: "p", lines: ["Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:"] },
    {
      kind: "p",
      lines: [
        "{{physician}}",
        "{{name}} – Praxis für Arbeitsmedizin",
        "{{street}}",
        "{{zip}} {{city}}",
      ],
    },
    { kind: "p", lines: ["E-Mail: {{email}}"] },
    { kind: "h3", text: "2. Hosting und Aufruf der Website" },
    { kind: "p", lines: ["Diese Website wird über Dienste der Google Cloud gehostet."] },
    { kind: "p", lines: ["Anbieter ist:"] },
    {
      kind: "p",
      lines: [
        "Google Cloud EMEA Limited",
        "70 Sir John Rogerson’s Quay",
        "Dublin 2",
        "Irland",
      ],
    },
    { kind: "p", lines: ["Beim Aufruf der Website werden technisch erforderliche Daten verarbeitet. Hierzu können insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite, Browsertyp, Betriebssystem und technische Statusinformationen gehören."] },
    { kind: "p", lines: ["Die Verarbeitung erfolgt, um die Website sicher und funktionsfähig bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 Buchstabe f DSGVO. Unser berechtigtes Interesse liegt im sicheren und störungsfreien Betrieb der Website."] },
    { kind: "p", lines: ["Die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen oder eine weitere Speicherung zur Aufklärung eines Sicherheitsvorfalls erforderlich ist."] },
    { kind: "p", lines: ["Google wird als technischer Auftragsverarbeiter eingesetzt. Soweit Daten außerhalb des Europäischen Wirtschaftsraums verarbeitet werden, erfolgt dies auf Grundlage der hierfür vorgesehenen datenschutzrechtlichen Garantien."] },
    { kind: "h3", text: "3. Kontakt-, Anfrage- und Rückrufformulare" },
    { kind: "p", lines: ["Wenn Sie uns über ein Formular kontaktieren, verarbeiten wir die von Ihnen eingegebenen Angaben, um Ihre Anfrage zu bearbeiten und zu beantworten."] },
    { kind: "p", lines: ["Hierzu können insbesondere folgende Angaben gehören:"] },
    {
      kind: "list",
      items: [
        "Name und Unternehmen",
        "E-Mail-Adresse",
        "freiwillig angegebene Telefonnummer",
        "Angaben zum Betreuungsbedarf",
        "Inhalt der Nachricht oder Rückrufwunsch",
      ],
    },
    { kind: "p", lines: ["Die Telefonnummer ist freiwillig. Sie wird verwendet, wenn Sie eine telefonische Rückmeldung wünschen."] },
    { kind: "p", lines: ["Soweit die Anfrage der Anbahnung oder Durchführung eines Vertragsverhältnisses dient, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchstabe b DSGVO. Im Übrigen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchstabe f DSGVO. Unser berechtigtes Interesse liegt in der Bearbeitung geschäftlicher Anfragen und der Kommunikation mit Interessenten und Kunden."] },
    { kind: "p", lines: ["Die Angaben werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine weitere Speicherung bestehen."] },
    { kind: "p", lines: ["Bitte übermitteln Sie über die allgemeinen Websiteformulare keine Gesundheitsdaten, Befunde oder medizinischen Unterlagen."] },
    { kind: "h3", text: "4. Empfänger der Daten" },
    { kind: "p", lines: ["Personenbezogene Daten erhalten nur diejenigen Stellen, die sie zur technischen Bereitstellung der Website oder zur Bearbeitung Ihrer Anfrage benötigen."] },
    { kind: "p", lines: ["Hierzu können insbesondere die von uns eingesetzten Hosting- und Kommunikationsdienstleister gehören, die personenbezogene Daten nach unseren Weisungen verarbeiten."] },
    { kind: "p", lines: ["Eine Weitergabe zu Werbe- oder Marketingzwecken erfolgt nicht."] },
    { kind: "h3", text: "5. Cookies und Analyse" },
    { kind: "p", lines: ["Diese Website verwendet derzeit keine Analyse- oder Marketing-Cookies und keine externen Trackingdienste."] },
    { kind: "p", lines: ["Soweit technisch erforderliche Speichertechnologien eingesetzt werden, dienen diese ausschließlich dem sicheren und funktionsfähigen Betrieb der Website."] },
    { kind: "h3", text: "6. Ihre Rechte" },
    { kind: "p", lines: ["Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf:"] },
    {
      kind: "list",
      items: [
        "Auskunft über Ihre personenbezogenen Daten",
        "Berichtigung unrichtiger Daten",
        "Löschung Ihrer Daten",
        "Einschränkung der Verarbeitung",
        "Widerspruch gegen die Verarbeitung",
        "Datenübertragbarkeit",
      ],
    },
    { kind: "p", lines: ["Zur Ausübung Ihrer Rechte können Sie sich an die oben genannte E-Mail-Adresse wenden."] },
    { kind: "h3", text: "7. Beschwerderecht" },
    { kind: "p", lines: ["Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren."] },
    { kind: "p", lines: ["Für nichtöffentliche Stellen in Bayern ist grundsätzlich zuständig:"] },
    {
      kind: "p",
      lines: [
        "Bayerisches Landesamt für Datenschutzaufsicht",
        "Promenade 18",
        "91522 Ansbach",
      ],
    },
    { kind: "p", lines: ["Stand: Juli 2026"], variant: "stand" },
  ],
};
