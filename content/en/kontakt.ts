import type { ContactHubContent } from "@/content/types";

/** English copy for the contact hub. */
export const kontaktEn: ContactHubContent = {
  meta: {
    title: "Contact",
    description:
      "Have a question or need help assessing your company’s support needs? Tell us briefly what you need, and we’ll get back to you personally.",
  },
  label: "Contact",
  h1: "How can we help?",
  sub: "Tell us briefly what you need – and we will guide you to the right option.",
  choices: [
    {
      label: "Option 01",
      title: "I have a general question",
      text: "Questions about our services, processes or working together? We will call you back and discuss them personally.",
      actions: [
        { key: "rueckruf", label: "Request a callback", variant: "primary" },
        { key: "faq", label: "View frequently asked questions", variant: "ghost" },
      ],
    },
    {
      label: "Option 02",
      title: "Assess my company’s support needs",
      text: "Tell us a few details about your company, and we’ll provide a no-obligation assessment of the support you need.",
      actions: [
        { key: "betreuungsbedarf", label: "Assess your requirements", variant: "primary" },
      ],
    },
  ],
  sideNote: "Your enquiry is reviewed directly by a physician – with no sales department or call centre.",
};
