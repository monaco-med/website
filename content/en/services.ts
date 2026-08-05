import type { ContentPageContent } from "@/content/types";
import type { ServiceSlug } from "@/content/de/services";

/**
 * English copy for the four service detail pages.
 *
 * Terminology follows `docs/TRANSLATION-GLOSSARY.md`. Statute names (ASiG,
 * DGUV Vorschrift 2, ArbMedVV, TfV, EBO, VDV 714) stay German with an English
 * gloss on first use — translating them makes them impossible to look up.
 */
export const servicePagesEn: Record<ServiceSlug, ContentPageContent> = {
  arbeitsmedizin: {
    meta: {
      title: "Occupational health & company doctor support",
      description:
        "Company doctor support under ASiG and DGUV V2: screening, fitness-for-work assessments, safety committee work and vaccinations – personally led, digitally organised.",
    },
    breadcrumb: "Occupational health",
    h1: "Occupational health support that works day to day",
    tagline: "Under ASiG and DGUV Vorschrift 2 – personally led, digitally organised.",
    intro: [
      "From ongoing company doctor support to a single screening appointment: MonacoMed takes on your company's occupational health – with a named medical contact, digital scheduling and complete documentation.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Assess your requirements free of charge", variant: "primary" },
      { key: "rueckruf", label: "Request a callback", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "What the support covers",
        lead: "Every company doctor duty – planned, carried out and documented.",
        items: [
          { title: "Company doctor support", text: "Under ASiG and DGUV V2 – with fixed hours on site and a named contact." },
          { title: "Occupational health screening", text: "Mandatory, offered and requested screening, clearly organised." },
          { title: "Fitness-for-work assessments", text: "Where there is a specific reason, kept cleanly separate from screening." },
          { title: "Safety committee & inspections", text: "Attendance, documentation and concrete recommendations." },
          { title: "Return-to-work & maternity protection", text: "Occupational health advice to find workable arrangements." },
          {
            title: "Vaccination sessions",
            text: "On your own premises –",
            link: { key: "impfungen", label: "full details" },
            textAfter: ".",
          },
        ],
      },
      {
        kind: "split",
        tone: "firm",
        label: "Screening under ArbMedVV",
        title: "Which screening does your team need?",
        lead: "We work out which screenings your activities call for – and the digital screening register tracks every due date automatically.",
        matrixHeading: "The three types of screening",
        rows: [
          [{ bold: "Mandatory screening" }, "e.g. for hazardous substances, noise or night work"],
          [{ bold: "Offered screening" }, "e.g. for display screen work"],
          [{ bold: "Screening on request" }, "where an employee asks for it"],
          [{ bold: "Fitness-for-work assessments" }, "separate and reason-based, e.g. driving and control tasks"],
        ],
      },
      {
        kind: "steps",
        title: "How we start",
        items: [
          { n: "01", title: "Establish what's needed", text: "Activities, risks and number of employees – that determines the scope of support." },
          { n: "02", title: "Screening plan", text: "We set out which screenings and examinations are due." },
          { n: "03", title: "Examination days", text: "At your workplace or at our practice – employees book online." },
          { n: "04", title: "Ongoing support", text: "Due dates in the register, safety committee attendance, inspections and named contacts." },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Frequent questions about occupational health",
        items: [
          { q: "At what point does a company need a company doctor?", a: "In principle from the first employee onwards. The scope of support follows DGUV Vorschrift 2 – depending on your sector, the risks involved and the number of employees. We will help you work out where you stand." },
          { q: "Do examinations take place at our site or at the practice?", a: "Either. For teams we organise examination days on your own premises; individual appointments take place at our practice in Munich." },
          { q: "Who gets to see the screening results?", a: "The content is confidential and stays between the physician and the employee. The employer receives only confirmation of attendance – which is what builds trust and take-up." },
          { q: "What is the difference between screening and a fitness-for-work assessment?", a: "Screening protects employees' health and is open-ended. A fitness-for-work assessment examines, for a specific reason, whether someone is medically fit for a particular activity – we keep the two cleanly separate." },
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "Let's work out what you need",
      text: "A few details are enough – your enquiry is reviewed by a physician directly, with no sales team and no call centre.",
      ctaKey: "betreuungsbedarf",
      ctaLabel: "Assess your requirements free of charge",
    },
  },
  arbeitssicherheit: {
    meta: {
      title: "Workplace safety & risk assessment",
      description:
        "Occupational safety specialist, risk assessments, safety briefings and workplace inspections – closely joined up with occupational health.",
    },
    breadcrumb: "Workplace safety",
    h1: "Workplace safety, closely joined up with occupational health",
    tagline: "Safety support under ASiG and DGUV Vorschrift 2.",
    intro: [
      "At MonacoMed the occupational safety specialist and the company doctor work closely together – with aligned recommendations, clear responsibilities and shared documentation that stands up to inspection.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Assess your requirements free of charge", variant: "primary" },
      { key: "rueckruf", label: "Request a callback", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "What the support covers",
        lead: "From the risk assessment through to tracking the actions.",
        items: [
          { title: "Occupational safety specialist", text: "Safety support and advice under ASiG." },
          { title: "Risk assessment", text: "Preparation, updates, action planning and documentation." },
          { title: "Safety briefings", text: "Practical, understandable and matched to your operation." },
          { title: "Fire safety", text: "Briefings and hands-on training on your premises." },
          { title: "Safety committee & inspections", text: "Organisation, attendance and concrete recommendations." },
          { title: "Tracking actions", text: "Open points followed up in a structured way – nothing gets lost." },
        ],
      },
      {
        kind: "split",
        tone: "firm",
        label: "From a single source",
        title: "Why health and safety belong together",
        lead: "Cooperation between the company doctor and the occupational safety specialist is a legal requirement – at MonacoMed both come from the same practice.",
        matrixHeading: "What that produces",
        rows: [
          ["Consistent recommendations", "Coordinated measures"],
          ["Less back-and-forth", "Clear responsibilities"],
          ["Shared documentation that stands up to inspection"],
        ],
      },
      {
        kind: "steps",
        title: "How we start",
        items: [
          { n: "01", title: "Taking stock", text: "We review workplaces, activities and the documentation already in place." },
          { n: "02", title: "Risk assessment", text: "Evaluate risks, derive measures and prioritise them." },
          { n: "03", title: "Implementation", text: "Safety briefings, inspections and committee meetings alongside normal operations." },
          { n: "04", title: "Following up", text: "Track measures digitally and keep the documentation current." },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Frequent questions about workplace safety",
        items: [
          { q: "At what point is an occupational safety specialist required?", a: "The same as for the company doctor: in principle from the first employee onwards. The scope follows DGUV Vorschrift 2, your sector and the size of your operation." },
          { q: "We already have a safety specialist – does that still work?", a: "Yes. We involve existing specialists closely and align the occupational health side with them. On request we can take on the safety support entirely." },
          { q: "How often do inspections take place?", a: "That depends on the risks involved and the size of your operation. We set the rhythm in the support plan – and document every inspection with concrete recommendations." },
          { q: "Do you organise the safety committee as well?", a: "Yes. We organise the committee meetings, attend them, and keep track of decisions and open points in a structured way." },
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "Let's work out what you need",
      text: "A few details are enough – your enquiry is reviewed by a specialist directly, with no sales team and no call centre.",
      ctaKey: "betreuungsbedarf",
      ctaLabel: "Assess your requirements free of charge",
    },
  },
  bahnmedizin: {
    meta: {
      title: "Railway medicine – fitness examinations under TfV, EBO, VDV 714",
      description:
        "An authorised examination centre: aptitude and fitness examinations for train drivers and railway operations – appointments at short notice in Munich.",
    },
    breadcrumb: "Railway medicine",
    h1: "Aptitude and fitness examinations for railway operations",
    tagline: "An authorised examination centre – specialist-led, structured, at short notice.",
    intro: [
      "MonacoMed carries out medical aptitude and fitness examinations for people working in railway operations – in line with the applicable railway regulations, with clear procedures and short waiting times for appointments.",
    ],
    heroCtas: [
      { key: "rueckruf", label: "Book an appointment", variant: "primary" },
      { key: "kontakt", label: "Get in touch", variant: "ghost" },
    ],
    sections: [
      {
        kind: "examList",
        title: "Our examinations",
        lead: "In line with the applicable railway regulations and group directives.",
        items: [
          { n: "01", title: "Train driver examinations under § 16 of the German Train Driver Licensing Ordinance (TfV)", text: "Medical fitness examinations for train drivers in line with the statutory requirements." },
          { n: "02", title: "Fitness examinations under VDV Publication 714", text: "Examinations for people working in public transport and railway operations, according to the relevant requirements." },
          { n: "03", title: "Examinations under the German Railway Construction and Operating Regulations (EBO)", text: "Medical aptitude examinations for safety-critical activities in railway operations." },
          { n: "04", title: "Fitness examinations under Deutsche Bahn AG requirement groups A and B", text: "Carried out in line with the applicable group directives." },
          { n: "05", title: "Aptitude examinations for other safety-critical activities", text: "Including track safety attendants (SiPo) and other employees subject to particular health requirements." },
        ],
      },
      {
        kind: "split",
        tone: "firm",
        label: "For companies and individuals",
        title: "Individual appointments or whole groups",
        lead: "Appointments can be planned for individuals just as easily as for larger groups.",
        matrixHeading: "Who we work with",
        rows: [
          ["Railway operating companies", "Infrastructure companies"],
          ["Staffing providers", "Individual applicants and employees"],
        ],
      },
      {
        kind: "reasons",
        title: "Why MonacoMed?",
        items: [
          { title: "An authorised examination centre", text: "For the railway sector – examinations in line with the applicable requirements." },
          { title: "Carried out by a specialist", text: "Personally led by a physician, with named contacts." },
          { title: "Appointments at short notice", text: "Quick scheduling – for individuals and groups alike." },
          { title: "Digital scheduling", text: "Book online, with digital reminders and certificates." },
          { title: "Clear, efficient procedures", text: "Structured from registration through to certification." },
        ],
      },
    ],
    cta: {
      label: "Book an appointment",
      title: "Which examination do you need?",
      text: "We are happy to advise you on which examination your role requires, and to arrange an appointment promptly.",
      ctaKey: "rueckruf",
      ctaLabel: "Book an appointment",
    },
  },
  impfungen: {
    meta: {
      title: "Workplace vaccinations – vaccination sessions on your premises",
      description:
        "Flu, travel and work-related vaccinations on your own premises – from planning through to documentation.",
    },
    breadcrumb: "Workplace vaccinations",
    h1: "Vaccination sessions on your own premises",
    tagline: "From planning to documentation – carried out by a physician.",
    intro: [
      "Flu protection ahead of the season, travel medicine advice before business trips, or work-related vaccinations: MonacoMed organises vaccination days at your premises – including briefing, consent and certification.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Enquire about a vaccination session", variant: "primary" },
      { key: "rueckruf", label: "Request a callback", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "Which vaccinations we offer",
        lead: "Matched to the work, travel plans and time of year.",
        items: [
          { title: "Flu vaccination", text: "The annual autumn session – easy to plan for the whole team." },
          { title: "Travel vaccinations", text: "Advice and vaccinations before business trips – given by a specialist in travel medicine." },
          { title: "Work-related vaccinations", text: "E.g. hepatitis A/B where there is a relevant risk – assessed as part of screening." },
        ],
      },
      {
        kind: "steps",
        flush: true,
        title: "How a vaccination day runs",
        items: [
          { n: "01", title: "Scope & date", text: "We plan the scope and date together – matched to your locations." },
          { n: "02", title: "Registration & briefing", text: "Employees register online and receive all the information digitally in advance." },
          { n: "03", title: "Vaccination day on site", text: "Carried out at your premises – with little time lost for your team." },
          { n: "04", title: "Documentation", text: "Certificates for employees, with booster reminders handled by the register." },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Frequent questions about vaccination sessions",
        items: [
          { q: "How many employees make a vaccination day worthwhile?", a: "Smaller teams work too – we agree the scope and format individually. Alternatively, employees can come to our practice individually." },
          { q: "How much lead time do we need?", a: "Usually a few weeks. Flu sessions are best planned early in the autumn; travel vaccinations need several weeks depending on the destination." },
          { q: "Can this work across several locations?", a: "Yes. Vaccination days are coordinated across sites – with central registration and consistent documentation." },
          { q: "Who keeps track of boosters?", a: "Our digital register monitors due dates and sends reminders automatically – nobody has to keep lists." },
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "Let's plan your next vaccination session",
      text: "A few details are enough – your enquiry is reviewed by a physician directly, with no sales team and no call centre.",
      ctaKey: "betreuungsbedarf",
      ctaLabel: "Enquire now, no obligation",
    },
  },
};
