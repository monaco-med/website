import type { HomePageContent } from "@/content/types";

/**
 * English copy for the homepage.
 *
 * Terminology follows `docs/TRANSLATION-GLOSSARY.md`. Open judgement calls are
 * listed in `docs/TRANSLATION-OPEN-QUESTIONS.md` for David to confirm.
 */
export const homeEn: HomePageContent = {
  meta: {
    title: "MonacoMed – Occupational Health & Occupational Medicine in Munich",
    description:
      "Occupational health, occupational safety and health management for companies in Munich – digitally organised, with personal physician-led care",
  },
  h1: "Workplace health, simply well organised.",
  sub: "Occupational health and safety services for companies – personally delivered and digitally organised.",
  coverage: "Munich & Bavaria as our core area · further locations on request",
  heroCtas: [
    { key: "betreuungsbedarf", label: "Assess your requirements free of charge", variant: "primary" },
    { key: "rueckruf", label: "Request a callback", variant: "ghost" },
  ],
  rail: [
    { n: "01", text: "Occupational health and safety services in accordance with ASiG & DGUV Regulation 2" },
    { n: "02", text: "Specialist-led occupational medicine" },
    { n: "03", text: "Digital appointment and document management" },
    { n: "04", text: "Dedicated contacts instead of a call centre" },
    { n: "05", text: "Support for single or multiple locations" },
  ],
  trust: [
    { label: "Expertise", value: "Specialists in occupational medicine" },
    { label: "Responsibility", value: "Personally physician-led" },
    { label: "Availability", value: "Response usually within 48 hours" },
    { label: "Working together", value: "Named contacts" },
  ],
  services: {
    label: "Services",
    title: "Occupational health and safety from a single provider",
    action: { key: "leistungen", label: "See all services", variant: "primary" },
    moreLabel: "Find out more →",
    items: [
      { id: "01", key: "arbeitsmedizin", title: "Occupational health", text: "Occupational health services, preventive occupational health care and medical examinations." },
      { id: "02", key: "arbeitssicherheit", title: "Occupational safety", text: "Occupational safety specialist, risk assessments and safety training" },
      { id: "03", key: "bahnmedizin", title: "Railway occupational medicine", text: "Medical fitness assessments for railway operations." },
      { id: "04", key: "impfungen", title: "Workplace vaccinations", text: "Vaccination sessions on your premises – from planning to documentation." },
      { id: "05", key: "digitaleProzesse", title: "Digital processes", text: "Appointment booking, preventive care records and automatic reminders." },
      { id: "06", key: "gesundheitsmanagement", title: "Health management", text: "Workplace health management, health days, ergonomics and prevention." },
    ],
  },
  leitung: {
    label: "Medical director",
    title: "Personally led and overseen by a specialist physician",
    name: "Dr. med. univ. David Manghabati",
    quals: ["Specialist in internal medicine", "Occupational, emergency and travel medicine"],
    bio: "At MonacoMed, medical responsibility rests personally with Dr David Manghabati. Companies benefit from extensive experience in internal medicine, direct communication and practical occupational health recommendations that can be readily implemented in day-to-day operations.",
    photoAlt: "Dr. med. univ. David Manghabati, specialist in internal medicine",
  },
  steps: {
    title: "Get started without lengthy coordination",
    lead: "A clear process – from first contact to ongoing support.",
    items: [
      { n: "Step 01", title: "Send an enquiry", text: "A few details are enough: your company, number of employees, location and what you need." },
      { n: "Step 02", title: "Get clarity", text: "We assess your needs and recommend the level of support that is right for your company." },
      { n: "Step 03", title: "Get a quote", text: "You receive a clear proposal – easy to understand, tailored to your needs and without unnecessary complexity." },
      { n: "Step 04", title: "Get going", text: "Once you give us the go-ahead, we organise the rest: appointments, occupational health surveillance, occupational health and safety committee meetings, workplace inspections, occupational safety and digital processes." },
    ],
  },
  why: [
    { n: "01", title: "Dedicated contacts", text: "Direct communication instead of anonymous structures." },
    { n: "02", title: "Central coordination", text: "Occupational health, occupational safety and health management – seamlessly coordinated." },
    { n: "03", title: "Digital processes", text: "Online appointment booking, digital management of preventive occupational health care and clear processes." },
    { n: "04", title: "On site at your company", text: "Scheduled preventive occupational health care and medical examination days directly at your premises." },
    { n: "05", title: "Scales flexibly", text: "From individual locations to coordinated support across multiple sites." },
  ],
  teaser: {
    label: "For companies",
    title: "Multiple locations",
    text: "Centrally coordinated instead of managed separately.",
    cta: { key: "fuerUnternehmen", label: "Find out more", variant: "primary" },
  },
  faq: {
    title: "Questions companies ask before starting",
    lead: "Specific rather than general — the questions decision-makers ask most often.",
    allLabel: "See all questions",
    items: [
      { q: "Does my company need an occupational physician?", a: "Employers are required to ensure appropriate occupational health support. The exact form and scope depend on the number of employees, their work activities and workplace hazards. We help you determine what your company needs." },
      { q: "Does MonacoMed also provide occupational safety services?", a: "Yes. MonacoMed combines occupational health and occupational safety – with an occupational physician, occupational safety specialist, Occupational Health and Safety Committee meetings, workplace inspections and risk assessments." },
      { q: "Can appointments be organised digitally?", a: "Yes. Employees can book appointments online themselves. This reduces the administrative burden on HR while maintaining full oversight." },
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
