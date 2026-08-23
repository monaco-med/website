import type { ContentPageContent } from "@/content/types";

/** English copy for the company-doctor-in-Munich landing page. */
export const betriebsarztMuenchenEn: ContentPageContent = {
  meta: {
    title: "Occupational Physician Munich",
    description:
      "Your occupational physician in Munich: practice on Heidemannstraße, on-site examination days and short-notice appointments – specialist-led and personally delivered.",
  },
  heroLabel: "Occupational Physician Munich",
  h1: "Your Occupational Physician in Munich",
  tagline: "Based in Munich – with on-site services directly at your workplace.",
  intro: [
    "MonacoMed provides occupational health services for companies in Munich and across Bavaria – from our practice at Heidemannstraße 38 and through on-site examination days at your workplace. Additional locations are available on request.",
  ],
  heroCtas: [
    { key: "betreuungsbedarf", label: "Get a Free Assessment of Your Support Needs", variant: "primary" },
    { key: "rueckruf", label: "Request a callback", variant: "ghost" },
  ],
  sections: [
    {
      kind: "reasons",
      title: "On site, not at arm's length",
      lead: "A local occupational physician in Munich – accessible, responsive and personal rather than an anonymous large-scale provider.",
      items: [
        {
          title: "Local and Accessible",
          text: "Our practice is located in northern Munich, with on-site services throughout the city and surrounding area – easy to reach and quickly on-site when needed.",
        },
        {
          title: "On-Site or at Our Practice",
          text: "On-site examination days at your company or individual appointments at our practice – whichever works best for you.",
        },
        {
          title: "Dedicated Physician",
          text: "Physician-led by Dr. med. univ. David Manghabati – with personal medical support rather than an anonymous hotline.",
        },
      ],
    },
    {
      kind: "splitLinks",
      tone: "firm",
      label: "Services",
      title: "Everything from a Single Provider",
      lead: "Occupational health, occupational safety and health management – coordinated by one team and documented in one system.",
      matrixHeading: "At a glance",
      links: [
        { key: "arbeitsmedizin", label: "Occupational Health & Preventive Occupational Health Care" },
        { key: "arbeitssicherheit", label: "Occupational Safety & Risk Assessment" },
        { key: "impfungen", label: "Workplace vaccinations" },
        { key: "fuerUnternehmen", label: "Multi-Site Occupational Health Support" },
      ],
    },
    {
      kind: "faq",
      title: "Frequently Asked Questions About Our Munich Location",
      items: [
        {
          q: "Do you only support companies in Munich?",
          a: "Munich and Bavaria are our core service area. We can also support companies with additional locations on request, with all services coordinated centrally.",
        },
        {
          q: "Can employees attend individual appointments at your practice?",
          a: "Yes. Individual appointments are available at our practice at Heidemannstraße 38 and can be booked online, with an automatic reminder before the appointment.",
        },
        {
          q: "How quickly can we get an appointment?",
          a: "Short-notice appointments are available, including for entire teams. Scheduling is managed digitally, with available time slots visible online.",
        },
      ],
    },
  ],
  cta: {
    label: "Contact",
    title: "Let’s Talk About Your Occupational Health Needs",
    text: "A few details are all we need. Your enquiry is reviewed directly by a physician – with no sales department or call centre.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Get a Free Assessment of Your Support Needs",
  },
};
