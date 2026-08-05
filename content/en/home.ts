import type { HomePageContent } from "@/content/types";

/**
 * English copy for the homepage.
 *
 * Terminology follows `docs/TRANSLATION-GLOSSARY.md`. Open judgement calls are
 * listed in `docs/TRANSLATION-OPEN-QUESTIONS.md` for David to confirm.
 */
export const homeEn: HomePageContent = {
  meta: {
    title: "MonacoMed – Company doctor & occupational health in Munich",
    description:
      "Occupational health, workplace safety and health management for companies in Munich – digitally organised, personally led by a physician.",
  },
  h1: "Workplace health, simply well organised.",
  sub: "Occupational health support and workplace safety for companies – personally led, digitally organised.",
  coverage: "Munich & Bavaria as our core area · further locations on request",
  heroCtas: [
    { key: "betreuungsbedarf", label: "Assess your requirements free of charge", variant: "primary" },
    { key: "rueckruf", label: "Request a callback", variant: "ghost" },
  ],
  rail: [
    { n: "01", text: "Support under ASiG & DGUV Vorschrift 2" },
    { n: "02", text: "Occupational health led by a specialist physician" },
    { n: "03", text: "Digital appointment and document management" },
    { n: "04", text: "Named contacts, not a call centre" },
    { n: "05", text: "Support for single or multiple locations" },
  ],
  trust: [
    { label: "Expertise", value: "Specialists in occupational medicine" },
    { label: "Responsibility", value: "Personally led by a physician" },
    { label: "Availability", value: "A reply within 48 hours as a rule" },
    { label: "Working together", value: "Named contacts" },
  ],
  services: {
    label: "Services",
    title: "Health and safety at work from a single source",
    action: { key: "leistungen", label: "See all services", variant: "primary" },
    moreLabel: "Find out more →",
    items: [
      { id: "01", key: "arbeitsmedizin", title: "Occupational health", text: "Company doctor support, screening and examinations." },
      { id: "02", key: "arbeitssicherheit", title: "Workplace safety", text: "Occupational safety specialist, risk assessments, safety briefings." },
      { id: "03", key: "bahnmedizin", title: "Railway medicine", text: "Fitness and aptitude examinations for railway operations." },
      { id: "04", key: "impfungen", title: "Workplace vaccinations", text: "Vaccination sessions on your premises – from planning to documentation." },
      { id: "05", key: "digitaleProzesse", title: "Digital processes", text: "Appointment booking, screening register and automatic reminders." },
      { id: "06", key: "gesundheitsmanagement", title: "Health management", text: "Workplace health management, health days, ergonomics and prevention." },
    ],
  },
  leitung: {
    label: "Medical director",
    title: "Personally led, with specialist medical responsibility",
    name: "Dr. med. univ. David Manghabati",
    quals: ["Specialist in internal medicine", "Occupational, emergency and travel medicine"],
    bio: "At MonacoMed, medical responsibility rests personally with Dr David Manghabati. Companies benefit from solid experience in internal medicine, short decision-making paths and occupational health recommendations that are workable in everyday operations.",
    photoAlt: "Dr. med. univ. David Manghabati, specialist in internal medicine",
  },
  steps: {
    title: "Get started instead of drawn-out planning",
    lead: "A clear process – from first contact to ongoing support.",
    items: [
      { n: "Step 01", title: "Send an enquiry", text: "A few details are enough: your company, number of employees, location and what you need." },
      { n: "Step 02", title: "Get clarity", text: "We review what is needed and show you which level of support actually makes sense." },
      { n: "Step 03", title: "Receive a quote", text: "You get a clear quote – understandable, suitable and without unnecessary extras." },
      { n: "Step 04", title: "Get going", text: "You give the go-ahead and we organise the rest: appointments, screenings, safety committee meetings, inspections, workplace safety and digital processes." },
    ],
  },
  why: [
    { n: "01", title: "Named contacts", text: "Direct communication instead of anonymous structures." },
    { n: "02", title: "Central coordination", text: "Occupational health, workplace safety and health management organised in step with each other." },
    { n: "03", title: "Digital processes", text: "Online appointment booking, digital screening records and clear procedures." },
    { n: "04", title: "On site at your company", text: "Screening and examination days you can plan for, held at your own location." },
    { n: "05", title: "Scales flexibly", text: "From a single site to support across all your locations." },
  ],
  teaser: {
    label: "For companies",
    title: "Multiple locations",
    text: "Centrally coordinated instead of organised site by site.",
    cta: { key: "fuerUnternehmen", label: "Find out more", variant: "primary" },
  },
  faq: {
    title: "Questions companies ask before starting",
    lead: "Specific rather than general — the questions decision-makers ask most often.",
    allLabel: "See all questions",
    items: [
      { q: "Does my company actually need a company doctor?", a: "Employers are required to ensure occupational health support is in place. What that looks like in practice depends on the number of employees, the work being done and the risks involved. We will help you work out where you stand." },
      { q: "Does MonacoMed cover workplace safety as well?", a: "Yes. MonacoMed combines occupational health and workplace safety – with a company doctor, an occupational safety specialist, safety committee meetings, workplace inspections and risk assessments." },
      { q: "Can appointments be organised digitally?", a: "Yes. Employees book their own appointments online. It takes work off HR while keeping the overview in one place." },
    ],
  },
  contact: {
    title: "Have your requirements assessed free of charge",
    lead: "A few details are enough — we review what you need and come back to you with a brief assessment.",
    sideTitle: "Reach us directly",
    addressLabel: "Address",
    onSiteLabel: "On site",
    onSiteValue: "Munich · Bavaria · further locations on request",
  },
};
