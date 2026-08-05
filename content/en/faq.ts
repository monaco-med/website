import type { FaqPageContent } from "@/content/types";

/** English copy for the full FAQ page. */
export const faqEn: FaqPageContent = {
  meta: {
    title: "Frequently asked questions (FAQ)",
    description:
      "Answers to the most common questions about company doctors, occupational health, workplace safety and working with MonacoMed.",
  },
  label: "FAQ",
  h1: "Questions companies ask before starting",
  lead: "Specific rather than general — the questions decision-makers ask most often.",
  items: [
    {
      q: "Does my company actually need a company doctor?",
      a: "Employers are required to ensure occupational health support is in place. What that looks like in practice depends on the number of employees, the work being done and the risks involved. We will help you work out where you stand.",
    },
    {
      q: "Does MonacoMed cover workplace safety as well?",
      a: "Yes. MonacoMed combines occupational health and workplace safety – with a company doctor, an occupational safety specialist, safety committee meetings, workplace inspections and risk assessments.",
    },
    {
      q: "Can appointments be organised digitally?",
      a: "Yes. Employees book their own appointments online. It takes work off HR while keeping the overview in one place.",
    },
    {
      q: "Can you support several locations?",
      a: "Yes, by arrangement. We support companies in Munich, Bavaria and further regions, with central coordination and on-site days you can plan around.",
    },
    {
      q: "What does it cost?",
      a: "That depends on what you actually need. After a short conversation you will receive a clear, transparent quote.",
    },
  ],
  backLabel: "Back to the homepage",
  cta: {
    title: "More questions?",
    text: "We are happy to answer them personally – briefly and with no obligation.",
    ctaLabel: "Request a callback",
  },
};
