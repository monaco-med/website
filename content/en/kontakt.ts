import type { ContactHubContent } from "@/content/types";

/** English copy for the contact hub. */
export const kontaktEn: ContactHubContent = {
  meta: {
    title: "Contact",
    description:
      "A general question, or would you like your requirements assessed? Tell us briefly what it is about – we will get back to you personally.",
  },
  label: "Contact",
  h1: "How can we help?",
  sub: "Tell us briefly what it is about – one click takes you to the right place.",
  choices: [
    {
      label: "Option 01",
      title: "I have a general question",
      text: "About services, processes or working together – we will call you back and go through it personally.",
      actions: [
        { key: "rueckruf", label: "Request a callback", variant: "primary" },
        { key: "faq", label: "See frequent questions", variant: "ghost" },
      ],
    },
    {
      label: "Option 02",
      title: "I would like my requirements assessed",
      text: "A few details about your company are enough – you will receive a no-obligation assessment of what you need.",
      actions: [
        { key: "betreuungsbedarf", label: "Assess your requirements", variant: "primary" },
      ],
    },
  ],
  sideNote: "// Your enquiry is reviewed by a physician directly – no sales team, no call centre.",
};
