import type { ContentPageContent } from "@/content/types";

/**
 * English copy for the G-Untersuchungen overview page.
 *
 * G-codes stay verbatim — they are the German legal designation employers
 * search for. Only the descriptions after the dash are translated.
 */
export const gUntersuchungenEn: ContentPageContent = {
  meta: {
    title: "Occupational health screening & G-examinations",
    description:
      "G20 to G46: occupational health screening and fitness-for-work assessments for companies – in Munich and as an on-site screening day at your premises.",
  },
  breadcrumb: "Occupational health screening & G-examinations",
  h1: "Occupational health screening & G-examinations",
  tagline: "Occupational health examinations for companies – in Munich and on your own premises",
  intro: [
    "G25, G26, G37 or G42: many occupational health screenings and examinations are still known by their former G-designations.",
    "Today a distinction is drawn between occupational health screening and examinations that assess medical fitness for a role. The former G-principles have been replaced by the DGUV recommendations for occupational health advice and examinations.",
    "MonacoMed offers companies the full range of occupational health screening and fitness-for-work assessments. We help you identify the right basis for an examination and organise it efficiently – as an individual appointment, as part of a screening day, or on your own premises.",
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
          text: "Occupational health screening for work with significant noise exposure. Depending on exposure, screening may be offered or mandatory.",
          link: { key: "g20", label: "Find out more →" },
        },
        {
          title: "G24 – Skin conditions",
          text: "Occupational health screening for work with increased strain on the skin, for example from wet work or certain substances.",
          link: { key: "g24", label: "Find out more →" },
        },
        {
          title: "G25 – Driving, control and monitoring tasks",
          text: "Occupational fitness assessment for work where safely driving, controlling or monitoring vehicles, machinery or plant is particularly important.",
          link: { key: "g25", label: "Find out more →" },
        },
        {
          title: "G26 – Respiratory protective equipment",
          text: "Occupational health screening, or a fitness assessment, for wearing respiratory protective equipment. Scope depends on the equipment used and the physical demands involved.",
          link: { key: "g26", label: "Find out more →" },
        },
        {
          title: "G30 – Work in heat",
          text: "Occupational health advice and examination for work under significant heat exposure.",
        },
        {
          title: "G31 – Hyperbaric work",
          text: "Occupational health examinations for work under increased pressure, for example certain diving or compressed-air work.",
        },
        {
          title: "G35 – Work abroad",
          text: "Occupational health advice before working abroad in demanding climates or conditions. Depending on the destination this can be extended with vaccination advice and other travel medicine measures.",
        },
        {
          title: "G37 – Display screen workstations",
          text: "Occupational health screening offered for display screen work, with advice and an appropriate examination of the eyes and eyesight.",
          link: { key: "g37", label: "Find out more →" },
        },
        {
          title: "G41 – Work with a risk of falling",
          text: "Occupational fitness assessment for work where there is a particular risk of falling and where health limitations could put the individual or others at significant risk.",
          link: { key: "g41", label: "Find out more →" },
        },
        {
          title: "G42 – Activities with a risk of infection",
          text: "Occupational health screening for work with an increased risk of infection, for example in healthcare, in laboratories or in certain work with biological agents.",
          link: { key: "g42", label: "Find out more →" },
        },
        {
          title: "G46 – Musculoskeletal strain",
          text: "Occupational health screening and advice for work involving particular physical strain on the musculoskeletal system.",
        },
        {
          title: "Asbestos – screening for asbestos exposure",
          text: "Mandatory occupational health screening for work involving asbestos – including post-exposure screening.",
          link: { key: "asbest", label: "Find out more →" },
        },
      ],
    },
    {
      kind: "checkList",
      tone: "sand",
      title: "Further occupational health screening and examinations",
      lead: "Alongside the frequently requested cases, we offer the full range of occupational health screening and fitness assessment.",
      intro: "That includes screening and examinations for:",
      items: [
        "work with hazardous substances",
        "work with biological agents",
        "noise and vibration exposure",
        "respiratory protection",
        "display screen work",
        "wet work and strain on the skin",
        "physical strain",
        "work with a risk of falling",
        "driving, control and monitoring tasks",
        "periods working abroad",
        "demanding climatic conditions",
        "night and shift work",
        "other company-specific risks and role requirements",
      ],
      note: "Not sure which screening or examination your employees need? We will help you work it out, based on the activity and your company's risk assessment.",
      cta: { key: "betreuungsbedarf", label: "Clarify what you need", variant: "primary" },
    },
    {
      kind: "compare",
      title: "Screening or fitness assessment – what is the difference?",
      cards: [
        {
          title: "Occupational health screening",
          paragraphs: [
            "Occupational health screening serves prevention and gives employees individual advice on the possible health effects of their work.",
            "Depending on the risk involved, it may be mandatory screening, offered screening or screening on request.",
            "Medical findings and diagnoses are not disclosed to the employer. After the screening, the employer receives a certificate of attendance.",
          ],
        },
        {
          title: "Fitness-for-work assessment",
          paragraphs: [
            "A fitness-for-work assessment focuses on whether someone meets the health requirements for a particular role.",
            "This matters above all for safety-critical work, for example driving and controlling vehicles or work with a particular risk of falling.",
          ],
        },
      ],
      note: "Occupational health screening and fitness assessment serve different purposes and are therefore treated separately.",
    },
    {
      kind: "checkList",
      tone: "sand",
      title: "Screening days at your own premises",
      lead: "Where several employees are involved, we organise occupational health screening and examinations at your own location.",
      intro: "We agree the following with you in advance:",
      items: [
        "which screenings and examinations are needed,",
        "how many employees will take part,",
        "which examination equipment is required,",
        "which rooms are needed on site, and",
        "how appointments will be scheduled.",
      ],
      note: "That way even larger screening and examination days fit efficiently into your normal operations.",
    },
    {
      kind: "reasons",
      title: "Occupational health screening, simply organised",
      items: [
        { title: "Named contacts", text: "Direct communication and clear responsibilities." },
        { title: "On site at your company", text: "Screening and examination days at your own location." },
        { title: "Digital scheduling", text: "Structured processes and straightforward booking." },
        { title: "Multiple locations", text: "Central coordination, including support across several sites." },
        { title: "Short response times", text: "As a rule we come back to you within 48 hours." },
      ],
    },
  ],
  cta: {
    label: "Contact",
    title: "Looking for a particular G-examination?",
    text: "Whether G25, G26, G37, G41, G42 or another occupational health case: we will help you work out what applies and organise the right screening or examination for your employees. Send us the activity, the number of employees and your location. As a rule we come back to you within 48 hours.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Assess your requirements",
  },
};
