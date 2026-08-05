import type { ExamPageContent, ExamSlug } from "@/content/types";

/**
 * English copy for the eight G-Untersuchungen detail pages.
 *
 * G-codes stay verbatim — they are the German legal designation and the term
 * employers actually search for. Where the German explains that a code is
 * historical ("die frühere Bezeichnung"), the English keeps that explanation:
 * an English-speaking HR manager in Germany will encounter the old codes too.
 *
 * dB(A) values, DGUV references and the 48-hour response promise are carried
 * over unchanged. Terminology follows `docs/TRANSLATION-GLOSSARY.md`.
 */
export const examParentLabelEn = "Occupational health screening & G-examinations";

export const examPagesEn: Record<ExamSlug, ExamPageContent> = {
  g25: {
    meta: {
      title: "G25 examination Munich",
      description:
        "G25 examination in Munich: occupational fitness assessment for driving, control and monitoring tasks – at our practice or on your own premises.",
    },
    h1: "G25 examination Munich",
    tagline: "Driving, control and monitoring tasks",
    intro: [
      "The G25 examination is one of the best-known occupational fitness assessments. It applies to employees who drive vehicles, operate machinery or monitor safety-critical plant.",
      "Although the former designation “G25” is no longer the official term, many companies still search for an occupational fitness assessment under that name.",
      "MonacoMed carries out fitness assessments for driving, control and monitoring tasks in Munich and, by arrangement, at companies' own premises.",
    ],
    heroCta: "Request an examination",
    sections: [
      {
        kind: "checklist",
        title: "Who might a G25 examination apply to?",
        lead: "A fitness assessment may be sensible, or required by the company, for work such as:",
        items: [
          "operating industrial trucks and forklifts",
          "driving vehicles on company premises",
          "operating cranes and machinery",
          "control and monitoring tasks",
          "work carrying particular responsibility for one's own safety or the safety of others",
        ],
        note: "Whether a fitness assessment is required and legally permissible depends on the specific activity and the reason for the examination.",
      },
      {
        kind: "prose",
        title: "What does the G25 examination cover?",
        paragraphs: [
          "The nature and scope of the examination depend on the activity and the individual requirements. Depending on the reason for the examination, a medical history, a physical examination and tests of eyesight and hearing may form part of the fitness assessment.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G25 examinations at your own premises",
      text: "Where several employees are involved, we can organise examination days at your own site. That fits the examinations efficiently into your operations and reduces time lost. As a rule we come back to you within 48 hours.",
      ctaLabel: "Request an examination",
    },
  },
  g26: {
    meta: {
      title: "G26 examination Munich",
      description:
        "G26 examination in Munich: occupational health screening and fitness assessment for employees who wear respiratory protective equipment at work.",
    },
    h1: "G26 examination Munich",
    tagline: "Occupational health screening and fitness assessment for respiratory protection",
    intro: [
      "The G26 examination applies to employees who wear respiratory protective equipment at work.",
      "The former designation “G26” has been replaced by the current DGUV recommendations for occupational health advice and examinations. Depending on the equipment, the activity and the legal basis for the examination, both occupational health screening and questions of medical fitness may come into play.",
      "MonacoMed offers occupational health screening and examinations for work involving respiratory protection in Munich and, by arrangement, at companies' own premises.",
    ],
    heroCta: "Request respiratory protection screening",
    sections: [
      {
        kind: "checklist",
        title: "Who is a G26 examination relevant for?",
        lead: "An occupational health assessment may apply, for example, to employees who:",
        items: [
          "wear filtering devices or respiratory masks",
          "use self-contained breathing apparatus",
          "carry out physically demanding work while using respiratory protection",
          "work in fire and disaster response",
          "depend on respiratory protection for industrial work",
        ],
        note: "Which occupational health measures are required depends above all on the type and weight of the respiratory equipment, the activity itself and the risk assessment.",
      },
      {
        kind: "prose",
        title: "What is examined?",
        paragraphs: [
          "The scope of the examination depends on the type of respiratory protection and the physical demands involved. Alongside a medical history and examination, a lung function test, eyesight or hearing test, ECG or further examinations may be required depending on the case.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G26 examination days on site",
      text: "Where several employees are involved, respiratory protection screening and the associated examinations can be grouped into a single examination day at your company. We agree the scope required and the practical arrangements with you in advance. As a rule we come back to you within 48 hours.",
      ctaLabel: "Request an examination day",
    },
  },
  g37: {
    meta: {
      title: "G37 examination Munich",
      description:
        "G37 examination Munich: occupational health screening offered for display screen work – advice, eyesight test and organisation at your own premises.",
    },
    h1: "G37 examination Munich",
    tagline: "Occupational health screening for display screen work",
    intro: [
      "The G37 examination is the occupational health screening for employees who work regularly at display screens.",
      "Today it is carried out as screening offered for display screen work. The focus is on individual advice and, in particular, on any complaints or health questions connected with display screen work.",
      "MonacoMed organises display screen screening for companies in Munich and, by arrangement, at your own site.",
    ],
    heroCta: "Request G37 screening",
    sections: [
      {
        kind: "checklist",
        title: "What does G37 screening involve?",
        lead: "The screening covers occupational health advice and an appropriate examination of the eyes and eyesight.",
        intro: "The following aspects may be considered, among others:",
        items: [
          "visual acuity",
          "eye complaints",
          "strain caused by display screen work",
          "existing corrective eyewear",
          "complaints related to workstation design",
        ],
        note: "If it emerges that special corrective eyewear is needed for display screen work, that can be assessed as part of the screening.",
      },
      {
        kind: "prose",
        title: "Is the G37 examination mandatory?",
        paragraphs: [
          "For display screen work this is screening that must be offered. The employer has to offer it to employees in line with the statutory requirements. Taking part is voluntary for the employee.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "Display screen screening at your own premises",
      text: "Where there are a larger number of display screen workstations, screening days can be run efficiently at your company. We support you with scheduling and carry out the screenings together at your site. As a rule we come back to you within 48 hours.",
      ctaLabel: "Request a screening day",
    },
  },
  g41: {
    meta: {
      title: "G41 examination Munich",
      description:
        "G41 examination Munich: occupational fitness assessment for work with a risk of falling – organised in Munich and at your own premises.",
    },
    h1: "G41 examination Munich",
    tagline: "Fitness assessment for work with a risk of falling",
    intro: [
      "The G41 examination is frequently requested in connection with work carrying a particular risk of falling.",
      "The former designation “G41” is no longer the current official term. Where there is a legal basis or a clear operational reason, however, an occupational fitness assessment for work with a risk of falling may be required or sensible.",
      "MonacoMed carries out these fitness assessments in Munich and, by arrangement, at companies' own premises.",
    ],
    heroCta: "Request a G41 examination",
    sections: [
      {
        kind: "checklist",
        title: "Which activities might a fitness assessment apply to?",
        lead: "For example, work:",
        items: [
          "on roofs",
          "on scaffolding",
          "on masts",
          "at greater heights",
          "at elevated workstations",
          "where a sudden health problem could put the individual or others at significant risk",
        ],
        note: "Whether a fitness assessment is required and legally permissible has to be judged against the specific workplace and the reason for the examination.",
      },
      {
        kind: "prose",
        title: "What does the examination check?",
        paragraphs: [
          "The examination is guided by the health requirements of the specific activity. Depending on the case, further examinations may be needed alongside the medical history and physical examination.",
          "The aim is an occupational health assessment of medical fitness for the intended activity.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G41 examinations for companies",
      text: "Where several employees are involved, we can group examination days together and, by arrangement, hold them at your own site. As a rule we come back to you within 48 hours.",
      ctaLabel: "Request an examination",
    },
  },
  g42: {
    meta: {
      title: "G42 examination Munich",
      description:
        "G42 examination in Munich: occupational health screening for infection risk – for healthcare, laboratories and other settings, including on site.",
    },
    h1: "G42 examination Munich",
    tagline: "Occupational health screening for activities with a risk of infection",
    intro: [
      "The G42 examination applies to employees whose work may expose them to an increased risk of infection from biological agents.",
      "Typical settings include healthcare, medical facilities and laboratories, as well as other work involving regular contact with biological agents.",
      "MonacoMed offers occupational health screening for work with a risk of infection to companies in Munich and, by arrangement, on site.",
    ],
    heroCta: "Request G42 screening",
    sections: [
      {
        kind: "checklist",
        title: "Who might need G42 screening?",
        lead: "Depending on the risk assessment, occupational health screening may be relevant for employees in:",
        items: [
          "hospitals and medical facilities",
          "doctors' and dental practices",
          "care facilities",
          "laboratories",
          "nurseries and social care settings",
          "emergency services",
          "other settings with a relevant risk of infection",
        ],
        note: "Whether screening is mandatory or offered depends on the specific activity and the risk involved.",
      },
      {
        kind: "prose",
        title: "What does G42 screening involve?",
        paragraphs: [
          "The focus is on individual occupational health advice and on assessing the infection risk associated with the work.",
          "Depending on the activity, this covers possible infection risks, routes of transmission and suitable protective measures.",
          "Vaccination status also plays an important role. Where the work carries an increased risk of infection and an effective vaccination is available, vaccination advice and — where indicated — a vaccination can be offered as part of the screening.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G42 screening and vaccinations at your own premises",
      text: "Where several employees are involved, we can organise screening appointments and vaccinations together at your site. That combines occupational health screening, vaccination status checks and workplace vaccination efficiently. As a rule we come back to you within 48 hours.",
      ctaLabel: "Request a screening day",
    },
  },
  asbest: {
    meta: {
      title: "Asbestos screening Munich",
      description:
        "Occupational health screening for work involving asbestos for companies in Munich – including post-exposure screening after exposure ends.",
    },
    h1: "Asbestos screening Munich",
    tagline: "Occupational health screening for work involving asbestos",
    intro: [
      "Work involving asbestos can expose employees to harmful asbestos fibres. Exposure can still occur today, particularly during demolition, refurbishment and maintenance work on older buildings and plant.",
      "Where work involves exposure to asbestos, mandatory occupational health screening must be arranged. MonacoMed offers occupational health screening for work involving asbestos to companies in Munich and, by arrangement, on site.",
    ],
    heroCta: "Request asbestos screening",
    sections: [
      {
        kind: "checklist",
        title: "Who is asbestos screening relevant for?",
        lead: "Occupational health screening may apply in particular to employees whose work can bring them into contact with asbestos-containing materials, for example during:",
        items: [
          "demolition work",
          "refurbishment work",
          "maintenance work",
          "work on older buildings and technical installations",
          "activities with potential exposure to asbestos fibres",
        ],
        note: "Which screening is required depends on the specific activity and the company's risk assessment.",
      },
      {
        kind: "prose",
        title: "What does occupational health screening for asbestos involve?",
        paragraphs: [
          "The focus is on individual occupational health advice and on the health risks of possible asbestos exposure.",
          "Depending on the reason for the screening and the individual situation, a medical examination can also be offered. This takes into account the activity, any earlier exposure and individual health factors.",
        ],
      },
      {
        kind: "prose",
        title: "Post-exposure screening after asbestos exposure",
        paragraphs: [
          "Asbestos-related illnesses can appear many years or even decades after occupational exposure. Post-exposure occupational health screening therefore plays a particular role with asbestos.",
          "Once the hazardous work has ended, screening can be continued beyond the period of employment itself.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "Asbestos screening for companies",
      text: "We support companies in assessing what is required and in carrying out the necessary screening. Where several employees are involved, screening appointments can be grouped together by arrangement. As a rule we come back to you within 48 hours.",
      ctaLabel: "Request asbestos screening",
    },
  },
  g20: {
    meta: {
      title: "G20 examination Munich",
      description:
        "G20 examination (DGUV recommendation “Noise”) in Munich: occupational health screening for noise exposure – for companies and, by arrangement, on site.",
    },
    h1: "G20 examination Munich",
    tagline: "Occupational health screening for noise",
    intro: [
      "The G20 examination applies to employees exposed to significant noise at work.",
      "The former designation “G20” has been replaced by the current DGUV recommendation “Noise”. In everyday company use, and when searching for occupational health screening, the term G20 is still widely used.",
      "MonacoMed offers occupational health screening for noise exposure to companies in Munich and, by arrangement, at your own premises.",
    ],
    heroCta: "Request G20 screening",
    sections: [
      {
        kind: "prose",
        title: "When is screening for noise required?",
        paragraphs: [
          "Where employees are exposed to occupational noise, screening may be offered or mandatory depending on the level of exposure.",
          "At or above the lower exposure action value of 80 dB(A), screening must generally be offered. At or above the upper exposure action value of 85 dB(A), mandatory screening must be arranged.",
        ],
      },
      {
        kind: "checklist",
        title: "What does G20 screening involve?",
        lead: "The focus is on occupational health advice about protecting hearing, and on individual noise exposure.",
        intro: "Depending on the reason for screening, the following aspects may be considered:",
        items: [
          "occupational noise exposure",
          "previous noise exposure",
          "hearing protection",
          "individual risk factors",
          "complaints about, or changes in, hearing",
          "a hearing test or audiometry, where medically indicated",
        ],
        note: "The aim is to identify work-related health risks early and to advise employees individually on protecting their hearing.",
      },
    ],
    cta: {
      label: "Contact",
      title: "G20 screening at your own premises",
      text: "Where several employees are exposed to noise, we can organise the screening together at your site. We agree the number of employees, the examinations required and the practical arrangements with you in advance, so that even larger screening days fit efficiently into your operations. As a rule we come back to you within 48 hours.",
      ctaLabel: "Request a screening day",
    },
  },
  g24: {
    meta: {
      title: "G24 examination Munich",
      description:
        "G24 examination Munich: occupational health screening for skin exposure from wet work, gloves or irritant substances – on site or at our practice.",
    },
    h1: "G24 examination Munich",
    tagline: "Occupational health screening for skin exposure",
    intro: [
      "The G24 examination applies to employees whose skin is placed under particular strain by their work.",
      "The former designation “G24 – skin conditions” is still widely used. Today the screening is based on the specific reason for it and on the company's risk assessment.",
      "MonacoMed offers occupational health screening for skin-intensive work to companies in Munich and, by arrangement, at your own premises.",
    ],
    heroCta: "Request G24 screening",
    sections: [
      {
        kind: "checklist",
        title: "Who might G24 screening apply to?",
        lead: "Occupational health screening may be relevant in particular for work placing increased strain on the skin, for example:",
        items: [
          "wet work",
          "frequent or prolonged wearing of liquid-tight gloves",
          "regular contact with skin-irritant or sensitising substances",
          "work with cutting fluids",
          "cleaning and disinfection work",
          "work in healthcare, skilled trades or industry",
        ],
        note: "Whether screening is mandatory or offered depends on the nature and extent of exposure and on the risk assessment.",
      },
      {
        kind: "checklist",
        title: "What does G24 screening involve?",
        lead: "The focus is on individual advice about skin health and on identifying work-related skin problems early.",
        intro: "Depending on the reason for screening, the following are considered among others:",
        items: [
          "current or previous skin complaints",
          "occupational strain on the skin",
          "suitable protective gloves",
          "skin protection and skin care",
          "the company's skin protection measures",
        ],
        note: "Where needed, an examination of the affected areas of skin can be offered.",
      },
      {
        kind: "prose",
        title: "Preventing skin conditions early",
        paragraphs: [
          "Work-related skin conditions can develop gradually. Early occupational health advice and suitable protective measures can help avoid complaints, or prevent them getting worse.",
          "Occupational health screening complements the technical and organisational protective measures already in place at the company.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G24 screening at your own premises",
      text: "Where several employees do skin-intensive work, we can hold screening appointments together at your site. We support you with the organisation and agree what screening is needed, based on the activities involved and your company's risk assessment. As a rule we come back to you within 48 hours.",
      ctaLabel: "Request a screening day",
    },
  },
};
