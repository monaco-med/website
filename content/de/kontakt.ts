import type { ContactHubContent } from "@/content/types";

/** German copy for the contact hub. */
export const kontaktDe: ContactHubContent = {
  meta: {
    title: "Kontakt",
    description:
      "Allgemeine Frage oder Betreuungsbedarf einschätzen lassen? Sagen Sie uns kurz, worum es geht – wir melden uns persönlich.",
  },
  label: "Kontakt",
  h1: "Wie können wir helfen?",
  sub: "Sagen Sie uns kurz, worum es geht – dann sind Sie mit einem Klick am richtigen Ort.",
  choices: [
    {
      label: "Option 01",
      title: "Ich habe eine allgemeine Frage",
      text: "Zu Leistungen, Abläufen oder der Zusammenarbeit – wir rufen Sie zurück und klären es persönlich.",
      actions: [
        { key: "rueckruf", label: "Rückruf anfordern", variant: "primary" },
        { key: "faq", label: "Häufige Fragen ansehen", variant: "ghost" },
      ],
    },
    {
      label: "Option 02",
      title: "Ich möchte den Betreuungsbedarf einschätzen lassen",
      text: "Wenige Angaben zu Ihrem Unternehmen genügen – Sie erhalten eine unverbindliche Einschätzung Ihres Betreuungsbedarfs.",
      actions: [
        {
          key: "betreuungsbedarf",
          label: "Betreuungsbedarf kostenlos einschätzen",
          variant: "primary",
        },
      ],
    },
  ],
  sideNote: "// Ihre Anfrage wird direkt ärztlich geprüft – ohne Vertrieb oder Callcenter.",
};
