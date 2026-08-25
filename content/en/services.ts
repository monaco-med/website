import type { ContentPageContent } from "@/content/types";
import type { ServiceSlug } from "@/content/de/services";

/**
 * English copy for the four service detail pages.
 *
 * Terminology follows `docs/TRANSLATION-GLOSSARY.md`. Statute abbreviations
 * (ASiG, ArbMedVV, TfV, EBO, VDV 714) stay German — translating them makes
 * them impossible to look up. "DGUV Vorschrift 2" is the one exception: the
 * client's review settled on the English "DGUV Regulation 2" throughout.
 */
export const servicePagesEn: Record<ServiceSlug, ContentPageContent> = {
  arbeitsmedizin: {
    meta: {
      title: "Occupational medicine & occupational health services",
      description:
        "Occupational health services in accordance with ASiG and DGUV Regulation 2: preventive occupational health care, fitness-for-work assessments, occupational health and safety committee meetings and workplace vaccination programmes – personally managed and digitally organised.",
    },
    breadcrumb: "Occupational medicine",
    h1: "Occupational health support that works in practice.",
    tagline: "Under ASiG and DGUV Regulation 2 – personally led, digitally organised.",
    intro: [
      "From ongoing occupational health services to individual preventive occupational health appointments, MonacoMed provides comprehensive occupational health support for your company – with a dedicated physician, digital appointment scheduling and complete documentation.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Assess your requirements free of charge", variant: "primary" },
      { key: "rueckruf", label: "Request a callback", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "What the support covers",
        lead: "All occupational health services – planned, delivered and documented.",
        items: [
          { title: "Occupational health services", text: "In accordance with ASiG and DGUV Regulation 2 – with scheduled on-site hours and a dedicated contact." },
          { title: "Preventive occupational health care", text: "Mandatory, optional and elective occupational health care – clearly organised." },
          { title: "Fitness-for-work assessments", text: "Where specifically required, clearly separated from preventive occupational health care." },
          { title: "Occupational health and safety committee meetings & workplace inspections", text: "Participation, documentation and practical recommendations." },
          { title: "Return-to-work management & maternity protection", text: "Occupational health advice for practical workplace solutions." },
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
        label: "Preventive occupational health care under the ArbMedVV",
        title: "What preventive occupational health care does your team need?",
        lead: "We determine which preventive occupational health care is required for your employees’ activities – while the digital occupational health system automatically tracks all relevant deadlines.",
        matrixHeading: "The three types of preventive occupational health care",
        rows: [
          [{ bold: "Mandatory health care" }, "e.g. for certain hazardous substances or high noise exposure"],
          [{ bold: "Optional health care" }, "e.g. for display screen work"],
          [{ bold: "Elective health care" }, "at the employee’s request"],
          [{ bold: "Fitness-for-work assessments" }, "separate and carried out for a specific purpose, e.g. for driving and operating machinery"],
        ],
      },
      {
        kind: "steps",
        title: "How we start",
        items: [
          { n: "01", title: "Establish what's needed", text: "Work activities, hazards and number of employees – these determine the required scope of occupational health support." },
          { n: "02", title: "Preventive occupational health care plan", text: "We determine which preventive occupational health care and medical examinations are due." },
          { n: "03", title: "Medical examination days", text: "On-site at your company or at our practice – employees book their appointments online." },
          { n: "04", title: "Ongoing occupational health support", text: "Deadline tracking, occupational health and safety committee participation, workplace inspections and dedicated contacts." },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Frequently asked questions about occupational health",
        items: [
          { q: "When does a company need an occupational physician?", a: "In principle, occupational health support is required from the first employee onwards. The exact form and scope of support are determined by DGUV Regulation 2 and depend on the industry, workplace hazards and number of employees. We help you determine the appropriate level of support." },
          { q: "Do examinations take place on-site or at your practice?", a: "Both are possible. For teams, we organise examination days directly on-site at your company; individual appointments take place at our practice in Munich." },
          { q: "Who is informed of the results of preventive occupational health care?", a: "The medical information remains confidential between the physician and the employee. The employer only receives confirmation that the preventive occupational health care took place – helping to build trust and acceptance." },
          { q: "What is the difference between preventive occupational health care and a fitness-for-work assessment?", a: "Preventive occupational health care is designed to protect employees’ health and does not assess their fitness for work. Fitness-for-work assessments, by contrast, determine whether an employee is medically fit for a specific activity when there is a particular reason for doing so. We keep the two processes strictly separate." },
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
      title: "Occupational safety & risk assessment",
      description:
        "Occupational safety specialist, risk assessments, safety training and workplace inspections – closely integrated with occupational health.",
    },
    breadcrumb: "Occupational safety",
    h1: "Occupational safety, closely integrated with occupational health",
    tagline: "Occupational safety services in accordance with ASiG and DGUV Regulation 2.",
    intro: [
      "At MonacoMed, the occupational safety specialist and occupational physician work closely together – with coordinated recommendations, clear responsibilities and shared, audit-ready documentation.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Assess your requirements free of charge", variant: "primary" },
      { key: "rueckruf", label: "Request a callback", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "What the support covers",
        lead: "From risk assessment through to action tracking.",
        items: [
          { title: "Occupational safety specialist", text: "Occupational safety services and advice in accordance with ASiG." },
          { title: "Risk assessment", text: "Preparation, review and updating, action planning and documentation." },
          { title: "Safety training", text: "Practical, easy to understand and tailored to your workplace." },
          { title: "Fire safety", text: "Safety instruction and hands-on training directly on-site." },
          { title: "Occupational health and safety committee meetings & workplace inspections", text: "Organisation, participation and practical recommendations." },
          { title: "Action tracking", text: "Open items are tracked systematically – so nothing gets overlooked." },
        ],
      },
      {
        kind: "split",
        tone: "firm",
        label: "From a single provider",
        title: "Why occupational health and safety belong together",
        lead: "Cooperation between the occupational physician and the occupational safety specialist is required by law – at MonacoMed, both services are provided by one team.",
        matrixHeading: "The result",
        rows: [
          ["Consistent recommendations", "Coordinated actions"],
          ["Less back-and-forth", "Clear responsibilities"],
          ["Shared, audit-ready documentation"],
        ],
      },
      {
        kind: "steps",
        title: "How we get started",
        items: [
          { n: "01", title: "Initial assessment", text: "We review workplaces, work activities and existing documentation." },
          { n: "02", title: "Risk assessment", text: "Assess risks, define appropriate actions and prioritise them." },
          { n: "03", title: "Implementation", text: "Safety training, workplace inspections and occupational health and safety committee meetings as part of ongoing operations." },
          { n: "04", title: "Follow-Up", text: "Track actions digitally and keep documentation up to date." },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Frequently asked questions about occupational safety",
        items: [
          { q: "When is an occupational safety specialist required?", a: "As with occupational health services, companies with employees are generally required to obtain support from an occupational safety specialist. The exact form and scope of support are determined by DGUV Regulation 2 and depend on the industry, workplace hazards and size of the company." },
          { q: "We already have an occupational safety specialist – can we still work with MonacoMed?", a: "Yes. We work closely with your existing occupational safety specialist and coordinate our occupational health services accordingly. If required, we can also provide the full range of occupational safety services." },
          { q: "How often are workplace inspections carried out?", a: "This depends on the workplace hazards and the size of your company. We define an appropriate schedule as part of the service plan and document every workplace inspection with practical recommendations." },
          { q: "Do you also organise occupational health and safety committee meetings?", a: "Yes. We organise occupational health and safety committee meetings, participate in them and systematically follow up on decisions and outstanding actions." },
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "Let’s determine the support you need",
      text: "A few details are all we need. Your enquiry is reviewed directly by our professional team – with no sales department or call centre.",
      ctaKey: "betreuungsbedarf",
      ctaLabel: "Get a free assessment of your support needs",
    },
  },
  bahnmedizin: {
    meta: {
      title: "Railway occupational medicine – medical fitness assessments under TfV, EBO & VDV 714",
      description:
        "Recognised examination centre for medical fitness assessments for train drivers and other railway personnel – short-notice appointments in Munich.",
    },
    breadcrumb: "Railway occupational medicine",
    h1: "Medical fitness assessments for railway operations",
    tagline: "Recognised examination centre – specialist-led, structured and available at short notice.",
    intro: [
      "MonacoMed provides medical fitness assessments for employees working in railway operations – in accordance with applicable railway regulations, with clear processes and short waiting times for appointments.",
    ],
    heroCtas: [
      { key: "rueckruf", label: "Book an appointment", variant: "primary" },
      { key: "kontakt", label: "Get in touch", variant: "ghost" },
    ],
    sections: [
      {
        kind: "examList",
        title: "Our medical fitness assessments",
        lead: "In accordance with applicable railway regulations and corporate guidelines.",
        items: [
          { n: "01", title: "Medical fitness assessments for train drivers by a physician recognised under § 16 of the Train Driver Licensing Ordinance (TfV)", text: "Medical fitness assessments for train drivers in accordance with statutory requirements." },
          { n: "02", title: "Medical fitness assessments under VDV Recommendation 714", text: "Medical fitness assessments for employees in public transport and railway operations in accordance with the applicable requirements." },
          { n: "03", title: "Medical fitness assessments under the German Railway Construction and Operating Regulations (EBO)", text: "Medical fitness assessments for safety-critical roles in railway operations." },
          { n: "04", title: "Medical fitness assessments under Deutsche Bahn AG requirement groups A and B", text: "Assessments are carried out in accordance with the applicable corporate guidelines." },
          { n: "05", title: "Medical fitness assessments for other safety-critical roles", text: "Including track safety personnel (SiPo) and other employees subject to specific medical fitness requirements." },
        ],
      },
      {
        kind: "split",
        tone: "firm",
        label: "For companies and individuals",
        title: "Individual appointments or group assessments",
        lead: "Appointments can be arranged for individuals as well as larger groups.",
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
          { title: "A recognised examination centre", text: "For the railway sector – medical fitness assessments in accordance with applicable requirements." },
          { title: "Specialist-led assessments", text: "Physician-led, with dedicated contacts." },
          { title: "Short-notice appointments", text: "Fast appointment scheduling for individuals and groups alike." },
          { title: "Digital appointment scheduling", text: "Book online, with digital reminders and certificates." },
          { title: "Clear and efficient processes", text: "A structured process from registration through to certification." },
        ],
      },
    ],
    cta: {
      label: "Book an appointment",
      title: "Which medical fitness assessment do you need?",
      text: "We are happy to advise you on which medical fitness assessment is required for your role and arrange an appointment promptly.",
      ctaKey: "rueckruf",
      ctaLabel: "Book an appointment",
    },
  },
  impfungen: {
    meta: {
      title: "Workplace vaccinations – On-site vaccination programmes",
      description:
        "Flu, travel and work-related vaccinations directly at your workplace – from planning through to documentation.",
    },
    breadcrumb: "Workplace vaccinations",
    h1: "On-site workplace vaccinations",
    tagline: "From planning through to documentation – delivered by a physician.",
    intro: [
      "Seasonal flu vaccinations, travel medicine advice before business trips or work-related vaccinations: MonacoMed organises vaccination days directly at your workplace – including medical information, consent and documentation.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Enquire about workplace vaccinations", variant: "primary" },
      { key: "rueckruf", label: "Request a callback", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "Which vaccinations we offer",
        lead: "Tailored to work activities, travel plans and seasonal requirements.",
        items: [
          { title: "Flu vaccination", text: "An annual autumn vaccination programme that can be scheduled for your entire team." },
          { title: "Travel vaccinations", text: "Travel health advice and vaccinations before business trips – provided by a physician specialising in travel medicine." },
          { title: "Work-related vaccinations", text: "e.g. hepatitis A/B where indicated by workplace exposure – assessed as part of preventive occupational health care." },
        ],
      },
      {
        kind: "steps",
        flush: true,
        title: "How a workplace vaccination day works",
        items: [
          { n: "01", title: "Requirements & scheduling", text: "We plan the scope and schedule together – tailored to your locations." },
          { n: "02", title: "Registration & medical information", text: "Employees register online and receive all relevant information digitally in advance." },
          { n: "03", title: "On-site vaccination day", text: "Vaccinations are provided directly at your workplace – minimising time away from work for your team." },
          { n: "04", title: "Documentation", text: "Documentation for employees, with digital reminders when booster vaccinations are due." },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Frequently asked questions about workplace vaccinations",
        items: [
          { q: "How many employees are needed for an on-site vaccination day?", a: "Smaller teams are also possible – we tailor the scope and format to your needs. Alternatively, employees can attend individual appointments at our practice." },
          { q: "How much lead time do we need?", a: "Flu vaccination programmes are best planned early for the autumn season, while travel vaccinations may require several weeks depending on the destination." },
          { q: "Can you provide vaccinations across multiple locations?", a: "Yes. Vaccination days can be coordinated across multiple sites, with centralised registration and consistent documentation." },
          { q: "Who keeps track of booster vaccinations?", a: "Our digital system tracks when booster vaccinations are due and sends automatic reminders – eliminating the need to maintain separate lists." },
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "Let’s plan your next workplace vaccination programme",
      text: "A few details are all we need. Your enquiry is reviewed directly by a physician – with no sales department or call centre.",
      ctaKey: "betreuungsbedarf",
      ctaLabel: "Make a no-obligation enquiry",
    },
  },
};
