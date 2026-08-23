import type { FaqPageContent } from "@/content/types";

/** English copy for the full FAQ page. */
export const faqEn: FaqPageContent = {
  meta: {
    title: "Frequently asked questions (FAQ)",
    description:
      "Answers to frequently asked questions about occupational physicians, occupational health, occupational safety and working with MonacoMed.",
  },
  label: "FAQ",
  h1: "Frequently Asked Questions Before Getting Started",
  lead: "Clear answers to the questions decision-makers ask most often.",
  items: [
    {
      q: "Does my company need an occupational physician?",
      a: "Employers are required to ensure appropriate occupational health support. The exact form and scope depend on the number of employees, their work activities and workplace hazards. We help you determine what your company needs.",
    },
    {
      q: "Does MonacoMed also provide occupational safety services?",
      a: "Yes. MonacoMed combines occupational health and occupational safety – with an occupational physician, occupational safety specialist, Occupational Health and Safety Committee meetings, workplace inspections and risk assessments.",
    },
    {
      q: "Can appointments be organised digitally?",
      a: "Yes. Employees can book appointments online themselves. This reduces the administrative burden on HR while maintaining full oversight.",
    },
    {
      q: "Can you support multiple locations?",
      a: "Yes. We support companies in Munich, Bavaria and other regions, with centralised coordination and scheduled on-site appointments.",
    },
    {
      q: "How much does occupational health support cost?",
      a: "This depends on your actual requirements. After a brief assessment, you will receive a clear and transparent quote.",
    },
  ],
  backLabel: "Back to the homepage",
  cta: {
    title: "More questions?",
    text: "We are happy to answer them personally – briefly and with no obligation.",
    ctaLabel: "Request a callback",
  },
};
