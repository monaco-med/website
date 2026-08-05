import type { LegalPageContent } from "@/content/types";

/**
 * English legal notice & privacy policy.
 *
 * A convenience translation of `content/de/impressum.ts`, not a separate legal
 * document. Two rules follow from that:
 *
 * 1. The first block states that the German version prevails. It must stay
 *    first and must not be softened — it is what makes shipping a translated
 *    legal text safe without a second legal review.
 * 2. The block list mirrors the German one one-for-one, in the same order. A
 *    dropped clause here is a compliance gap, not a typo, so when the German
 *    text changes this file changes in the same commit.
 *
 * Statute, authority and chamber names stay in German with an English gloss in
 * parentheses, per `docs/TRANSLATION-GLOSSARY.md` — translating them outright
 * makes them impossible to look up. Postal addresses stay verbatim for the same
 * reason.
 *
 * `{{...}}` placeholders are filled from `siteConfig` by `LegalPage`.
 */
export const impressumEn: LegalPageContent = {
  meta: {
    title: "Legal notice & privacy policy",
    description:
      "Legal notice and privacy policy of MonacoMed – occupational health practice in Munich.",
  },
  label: "Legal",
  h1: "Legal notice & privacy",
  notice: [
    "Please note: this English text is a translation provided for convenience only. The German version is the legally binding one.",
    "If the two versions differ in any way, the German wording prevails. It is available at www.monaco-med.de/impressum.",
  ],
  blocks: [
    { kind: "h2", anchor: "impressum", text: "Legal notice" },
    { kind: "h3", text: "Information pursuant to § 5 of the German Digital Services Act (DDG)" },
    {
      kind: "p",
      lines: [
        "{{name}} – occupational health practice",
        "Owner: {{physician}}",
        "{{street}}",
        "{{zip}} {{city}}",
      ],
    },
    { kind: "h3", text: "Contact" },
    { kind: "p", lines: ["Email: {{email}}"] },
    { kind: "h3", text: "Professional regulatory information" },
    {
      kind: "p",
      lines: [
        "Statutory professional title: Arzt (physician)",
        "Country in which this title was awarded: Federal Republic of Germany",
      ],
    },
    {
      kind: "p",
      lines: [
        "Licensing authority:",
        "Regierung von Oberbayern (Government of Upper Bavaria)",
      ],
    },
    {
      kind: "p",
      lines: [
        "Specialist title: Facharzt für Innere Medizin (specialist in internal medicine)",
        "Additional qualification: Betriebsmedizin (occupational medicine)",
      ],
    },
    { kind: "h3", text: "Competent professional chamber" },
    {
      kind: "p",
      lines: [
        "Bayerische Landesärztekammer (Bavarian State Chamber of Physicians)",
        "Mühlbaurstraße 16",
        "81677 München",
      ],
    },
    { kind: "p", lines: ["The following professional regulations apply:"] },
    {
      kind: "list",
      items: [
        "Berufsordnung für die Ärzte Bayerns (Professional Code for Physicians in Bavaria)",
        "Heilberufe-Kammergesetz des Freistaates Bayern (Bavarian Healthcare Professions Chambers Act)",
      ],
    },
    {
      kind: "p",
      lines: [
        "These professional regulations are available on the website of the Bayerische Landesärztekammer.",
      ],
    },
    { kind: "h2", anchor: "datenschutz", text: "Privacy policy" },
    { kind: "h3", text: "1. Controller" },
    {
      kind: "p",
      lines: [
        "The controller for the processing of personal data on this website is:",
      ],
    },
    {
      kind: "p",
      lines: [
        "{{physician}}",
        "{{name}} – occupational health practice",
        "{{street}}",
        "{{zip}} {{city}}",
      ],
    },
    { kind: "p", lines: ["Email: {{email}}"] },
    { kind: "h3", text: "2. Hosting and access to the website" },
    { kind: "p", lines: ["This website is hosted using Google Cloud services."] },
    { kind: "p", lines: ["The provider is:"] },
    {
      kind: "p",
      lines: [
        "Google Cloud EMEA Limited",
        "70 Sir John Rogerson’s Quay",
        "Dublin 2",
        "Ireland",
      ],
    },
    {
      kind: "p",
      lines: [
        "When the website is accessed, technically necessary data is processed. This may include in particular the IP address, the date and time of access, the page accessed, the browser type, the operating system and technical status information.",
      ],
    },
    {
      kind: "p",
      lines: [
        "This processing takes place in order to provide the website securely and in working order. The legal basis is Article 6(1)(f) GDPR. Our legitimate interest lies in the secure and trouble-free operation of the website.",
      ],
    },
    {
      kind: "p",
      lines: [
        "The data is deleted as soon as it is no longer required for this purpose, unless statutory retention obligations apply or further storage is necessary in order to investigate a security incident.",
      ],
    },
    {
      kind: "p",
      lines: [
        "Google is engaged as a technical processor. Where data is processed outside the European Economic Area, this takes place on the basis of the data protection safeguards provided for that purpose.",
      ],
    },
    { kind: "h3", text: "3. Contact, enquiry and callback forms" },
    {
      kind: "p",
      lines: [
        "If you contact us using a form, we process the details you enter in order to handle and answer your enquiry.",
      ],
    },
    { kind: "p", lines: ["This may include in particular the following details:"] },
    {
      kind: "list",
      items: [
        "name and company",
        "email address",
        "telephone number, where voluntarily provided",
        "details of your support requirements",
        "the content of your message or your callback request",
      ],
    },
    {
      kind: "p",
      lines: [
        "The telephone number is voluntary. It is used if you would like us to respond by telephone.",
      ],
    },
    {
      kind: "p",
      lines: [
        "Where the enquiry serves to initiate or perform a contractual relationship, processing takes place on the basis of Article 6(1)(b) GDPR. Otherwise, processing takes place on the basis of Article 6(1)(f) GDPR. Our legitimate interest lies in handling business enquiries and in communicating with prospective and existing clients.",
      ],
    },
    {
      kind: "p",
      lines: [
        "These details are deleted as soon as the enquiry has been dealt with conclusively and no statutory retention obligations or other legitimate grounds for further storage exist.",
      ],
    },
    {
      kind: "p",
      lines: [
        "Please do not use the general website forms to send health data, medical findings or medical records.",
      ],
    },
    { kind: "h3", text: "4. Recipients of the data" },
    {
      kind: "p",
      lines: [
        "Personal data is received only by those parties that require it in order to provide the website technically or to handle your enquiry.",
      ],
    },
    {
      kind: "p",
      lines: [
        "This may include in particular the hosting and communication service providers we use, which process personal data in accordance with our instructions.",
      ],
    },
    { kind: "p", lines: ["Data is not passed on for advertising or marketing purposes."] },
    { kind: "h3", text: "5. Cookies and analytics" },
    {
      kind: "p",
      lines: [
        "This website currently uses no analytics or marketing cookies and no external tracking services.",
      ],
    },
    {
      kind: "p",
      lines: [
        "Where technically necessary storage technologies are used, they serve solely the secure and functional operation of the website.",
      ],
    },
    { kind: "h3", text: "6. Your rights" },
    { kind: "p", lines: ["Within the statutory requirements, you have the right to:"] },
    {
      kind: "list",
      items: [
        "access to your personal data",
        "rectification of inaccurate data",
        "erasure of your data",
        "restriction of processing",
        "objection to processing",
        "data portability",
      ],
    },
    {
      kind: "p",
      lines: [
        "To exercise your rights, please contact us at the email address given above.",
      ],
    },
    { kind: "h3", text: "7. Right to lodge a complaint" },
    {
      kind: "p",
      lines: [
        "You have the right to lodge a complaint with a data protection supervisory authority.",
      ],
    },
    {
      kind: "p",
      lines: ["For non-public bodies in Bavaria, the competent authority is generally:"],
    },
    {
      kind: "p",
      lines: [
        "Bayerisches Landesamt für Datenschutzaufsicht (Bavarian Data Protection Authority)",
        "Promenade 18",
        "91522 Ansbach",
      ],
    },
    { kind: "p", lines: ["Last updated: July 2026"], variant: "stand" },
  ],
};
