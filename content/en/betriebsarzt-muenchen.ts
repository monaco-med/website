import type { ContentPageContent } from "@/content/types";

/** English copy for the company-doctor-in-Munich landing page. */
export const betriebsarztMuenchenEn: ContentPageContent = {
  meta: {
    title: "Company doctor Munich",
    description:
      "Your company doctor in Munich: practice on Heidemannstraße, screening days on your own premises, appointments at short notice – led by a specialist physician.",
  },
  heroLabel: "Company doctor Munich",
  h1: "Your company doctor in Munich",
  tagline: "A practice in Munich – and visits to your own workplace.",
  intro: [
    "MonacoMed supports companies across Munich and Bavaria: from the practice on Heidemannstraße 38, and with screening days held on your own premises. Further locations on request.",
  ],
  heroCtas: [
    { key: "betreuungsbedarf", label: "Assess your requirements free of charge", variant: "primary" },
    { key: "rueckruf", label: "Request a callback", variant: "ghost" },
  ],
  sections: [
    {
      kind: "reasons",
      title: "On site, not at arm's length",
      lead: "A Munich company doctor with short distances – not an anonymous national provider.",
      items: [
        {
          title: "Short distances",
          text: "A practice in northern Munich and visits across the city and surrounding area – quick to reach, quick to arrive.",
        },
        {
          title: "Your workplace or our practice",
          text: "Screening days at your premises, or individual appointments at the practice – whichever suits you better.",
        },
        {
          title: "A named medical contact",
          text: "Medically led by Dr. med. univ. David Manghabati – in person, not through a hotline.",
        },
      ],
    },
    {
      kind: "splitLinks",
      tone: "firm",
      label: "Services",
      title: "Everything from a single source",
      lead: "Occupational health, workplace safety and health management – coordinated by one team, documented in one system.",
      matrixHeading: "At a glance",
      links: [
        { key: "arbeitsmedizin", label: "Occupational health & screening" },
        { key: "arbeitssicherheit", label: "Workplace safety & risk assessment" },
        { key: "impfungen", label: "Workplace vaccinations" },
        { key: "fuerUnternehmen", label: "Support across multiple locations" },
      ],
    },
    {
      kind: "faq",
      title: "Questions about the location",
      items: [
        {
          q: "Do you only support companies in Munich?",
          a: "Munich and Bavaria are our core area. We support companies with additional locations on request, coordinated centrally.",
        },
        {
          q: "Can employees come to the practice individually?",
          a: "Yes. Individual appointments take place at the practice on Heidemannstraße 38 – bookable online, with a reminder before the appointment.",
        },
        {
          q: "How quickly can we get appointments?",
          a: "At short notice – including for whole teams. Scheduling runs digitally, so available slots are visible straight away.",
        },
      ],
    },
  ],
  cta: {
    label: "Contact",
    title: "Let's talk about your workplace",
    text: "A few details are enough – your enquiry is reviewed by a physician directly, with no sales team and no call centre.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Assess your requirements free of charge",
  },
};
