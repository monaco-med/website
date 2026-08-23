import type { ContentPageContent } from "@/content/types";

/**
 * English copy for the G-Untersuchungen overview page.
 *
 * G-codes stay verbatim — they are the German legal designation employers
 * search for. Only the descriptions after the dash are translated.
 */
export const gUntersuchungenEn: ContentPageContent = {
  meta: {
    title: "Preventive Occupational Health Care & G Examinations",
    description:
      "G20 to G46: preventive occupational health care and medical fitness assessments for companies – in Munich or during on-site occupational health days at your workplace.",
  },
  breadcrumb: "Preventive Occupational Health Care & G Examinations",
  h1: "Preventive Occupational Health Care & G Examinations",
  tagline: "Occupational health examinations and assessments for companies – in Munich or directly at your workplace",
  intro: [
    "G25, G26, G37 and G42: many types of preventive occupational health care and medical examinations are still commonly known by their former G designations.",
    "Today, a clear distinction is made between preventive occupational health care and medical fitness assessments. The former G principles have been replaced by the DGUV Recommendations for Occupational Health Advice and Examinations.",
    "MonacoMed provides companies with the full range of preventive occupational health care and medical fitness assessments. We help you determine which type of assessment or occupational health care is appropriate and organise everything efficiently – as an individual appointment, during an occupational health day or directly at your workplace.",
    "A note on wording: throughout this site, “screening” covers advice and prevention as well as examination, matching the German “arbeitsmedizinische Vorsorge”.",
  ],
  heroCtas: [
    { key: "betreuungsbedarf", label: "Assess your requirements", variant: "primary" },
  ],
  sections: [
    {
      kind: "tiles",
      title: "Frequently requested G-examinations",
      items: [
        {
          title: "G20 – Noise",
          text: "Preventive occupational health care for work involving significant noise exposure. Depending on the level of exposure, optional or mandatory health care may be required.",
          link: { key: "g20", label: "Find out more →" },
        },
        {
          title: "G24 – Skin conditions",
          text: "Preventive occupational health care for work involving increased skin exposure, for example through wet work or certain workplace substances.",
          link: { key: "g24", label: "Find out more →" },
        },
        {
          title: "G25 – Driving, Control and Monitoring Activities",
          text: "Medical fitness assessment for activities where the safe driving, operation or monitoring of vehicles, machinery or equipment is particularly important",
          link: { key: "g25", label: "Find out more →" },
        },
        {
          title: "G26 – Respiratory protective equipment",
          text: "Preventive occupational health care or a medical fitness assessment for employees who wear respiratory protective equipment. The type and scope depend, among other factors, on the equipment used and the physical demands involved.",
          link: { key: "g26", label: "Find out more →" },
        },
        {
          title: "G30 – Work in heat",
          text: "Occupational health advice and medical assessment for work involving significant heat exposure.",
        },
        {
          title: "G31 – Work in Hyperbaric Conditions",
          text: "Occupational health examinations for work under increased pressure, for example certain diving or compressed-air activities.",
        },
        {
          title: "G35 – Work abroad",
          text: "Occupational health advice before working abroad in locations involving particular climatic or health risks. Depending on the destination, this may include vaccination advice and additional travel medicine measures.",
        },
        {
          title: "G37 – Display screen workstations",
          text: "Optional preventive occupational health care for display screen work, including advice and an appropriate examination of the eyes and eyesight.",
          link: { key: "g37", label: "Find out more →" },
        },
        {
          title: "G41 – Work at Height",
          text: "Medical fitness assessment for work involving a particular risk of falling, where health limitations could pose a significant risk to the employee or others.",
          link: { key: "g41", label: "Find out more →" },
        },
        {
          title: "G42 – Activities with a risk of infection",
          text: "Preventive occupational health care for work involving an increased risk of infection, for example in healthcare, laboratories or certain activities involving biological agents.",
          link: { key: "g42", label: "Find out more →" },
        },
        {
          title: "G46 – Musculoskeletal strain",
          text: "Preventive occupational health care and advice for work involving particular physical strain on the musculoskeletal system.",
        },
        {
          title: "Asbestos – Preventive Occupational Health Care for Asbestos Exposure",
          text: "Mandatory preventive occupational health care for work involving asbestos – including post-exposure preventive occupational health care.",
          link: { key: "asbest", label: "Find out more →" },
        },
      ],
    },
    {
      kind: "checkList",
      tone: "sand",
      title: "Further Preventive Occupational Health Care and Medical Assessments",
      lead: "In addition to the most frequently requested services, we provide the full range of preventive occupational health care and medical fitness assessments.",
      intro: "These include preventive occupational health care and medical assessments for:",
      items: [
        "work involving hazardous substances",
        "work involving biological agents",
        "noise and vibration exposure",
        "use of respiratory protective equipment",
        "display screen work",
        "wet work and strain on the skin",
        "physical strain",
        "work with a risk of falling",
        "driving, control and monitoring activities",
        "periods working abroad",
        "demanding climatic conditions",
        "night and shift work",
        "other company-specific risks and role requirements",
      ],
      note: "Not sure which preventive occupational health care or medical assessment your employees need? We help you determine what is appropriate based on their work activities and your workplace risk assessment.",
      cta: { key: "betreuungsbedarf", label: "Clarify what you need", variant: "primary" },
    },
    {
      kind: "compare",
      title: "Preventive Occupational Health Care or Medical Fitness Assessment – What Is the Difference?",
      cards: [
        {
          title: "Preventive Occupational Health Care",
          paragraphs: [
            "Preventive occupational health care is designed to protect employees’ health and provide individual advice on the potential health effects of their work.",
            "Depending on the workplace hazards, this may take the form of mandatory, optional or elective health care.",
            "Medical findings and diagnoses are not disclosed to the employer. After the screening, the employer receives a certificate of attendance.",
          ],
        },
        {
          title: "Medical Fitness Assessment",
          paragraphs: [
            "A medical fitness assessment determines whether an employee meets the health requirements for a specific activity.",
            "This can be particularly relevant for safety-critical activities, for example driving or operating vehicles or working where there is a particular risk of falling.",
          ],
        },
      ],
      note: "Preventive occupational health care and medical fitness assessments serve different purposes and are therefore kept clearly separate.",
    },
    {
      kind: "checkList",
      tone: "sand",
      title: "On-Site Occupational Health Days",
      lead: "For larger groups of employees, we organise preventive occupational health care and medical assessments directly at your workplace.",
      intro: "We coordinate the following with you in advance:",
      items: [
        "which preventive occupational health care and medical assessments are required,",
        "how many employees will take part,",
        "which medical equipment is required,",
        "which rooms are needed on site, and",
        "how appointments will be scheduled.",
      ],
      note: "That way even larger screening and examination days fit efficiently into your normal operations.",
    },
    {
      kind: "reasons",
      title: "Preventive Occupational Health Care, Simply Organised",
      items: [
        { title: "Dedicated Contacts", text: "Direct communication and clear responsibilities." },
        { title: "On-Site at Your Workplace", text: "Preventive occupational health care and medical examination days directly at your workplace." },
        { title: "Digital scheduling", text: "Structured processes and straightforward booking." },
        { title: "Multiple locations", text: "Central coordination, including support across several sites." },
        { title: "Fast Response Times", text: "We usually respond within 48 hours." },
      ],
    },
  ],
  cta: {
    label: "Contact",
    title: "Looking for a particular G-examination?",
    text: "Whether you need G25, G26, G37, G41, G42 or another occupational health assessment, we help you determine what is appropriate and organise the right preventive occupational health care or medical assessment for your employees. Simply send us the work activity, number of employees and your location. We usually respond within 48 hours.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Assess your requirements",
  },
};
