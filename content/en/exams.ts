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
export const examParentLabelEn = "Preventive occupational health care & G examinations";

export const examPagesEn: Record<ExamSlug, ExamPageContent> = {
  g25: {
    meta: {
      title: "G25 examination Munich",
      description:
        "G25 examination in Munich: medical fitness assessment for driving, operating and monitoring activities – at our practice or directly at your workplace.",
    },
    h1: "G25 examination Munich",
    tagline: "Driving, Operating and Monitoring Activities",
    intro: [
      "The G25 examination is one of the best-known medical fitness assessments in occupational health. It is relevant for employees who drive vehicles, operate machinery or monitor safety-critical equipment.",
      "Although “G25” is no longer the official designation, many companies still use the term when looking for a medical fitness assessment.",
      "MonacoMed provides medical fitness assessments for driving, operating and monitoring activities in Munich and, by arrangement, directly at your workplace.",
    ],
    heroCta: "Request an examination",
    sections: [
      {
        kind: "checklist",
        title: "Who May Need a G25 Examination?",
        lead: "A medical fitness assessment may be appropriate or required by the employer for activities such as:",
        items: [
          "operating industrial trucks and forklifts",
          "driving vehicles on company premises",
          "operating cranes and machinery",
          "control and monitoring tasks",
          "work carrying particular responsibility for one's own safety or the safety of others",
        ],
        note: "Whether a medical fitness assessment is required and legally permissible depends on the specific activity and the reason for the assessment.",
      },
      {
        kind: "prose",
        title: "What Does the G25 Examination Include?",
        paragraphs: [
          "The type and scope of the examination depend on the activity and the individual requirements. Depending on the reason for the assessment, it may include a medical history, physical examination and tests of vision and hearing.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G25 Examinations Directly at Your Workplace",
      text: "If several employees require an assessment, we can organise examination days directly at your workplace. This allows the examinations to be integrated efficiently into day-to-day operations while reducing time away from work. We usually respond within 48 hours.",
      ctaLabel: "Request an examination",
    },
  },
  g26: {
    meta: {
      title: "G26 examination Munich",
      description:
        "G26 examination in Munich: preventive occupational health care and medical fitness assessments for employees who wear respiratory protective equipment at work.",
    },
    h1: "G26 examination Munich",
    tagline: "Preventive Occupational Health Care and Medical Fitness Assessment for Respiratory Protective Equipment",
    intro: [
      "The G26 examination applies to employees who wear respiratory protective equipment at work.",
      "The former designation “G26” has been replaced by the current DGUV Recommendations for Occupational Health Advice and Examinations. Depending on the type of respiratory protective equipment, the work involved and the legal basis, preventive occupational health care and medical fitness assessment may both be relevant.",
      "MonacoMed provides preventive occupational health care and medical assessments for work involving respiratory protective equipment in Munich and, by arrangement, directly at your workplace.",
    ],
    heroCta: "Enquire about G26 preventive health care",
    sections: [
      {
        kind: "checklist",
        title: "Who May Need a G26 Examination?",
        lead: "An occupational health assessment may apply, for example, to employees who:",
        items: [
          "wear filtering devices or respiratory masks",
          "use self-contained breathing apparatus",
          "carry out physically demanding work while using respiratory protection",
          "work in fire and disaster response",
          "rely on respiratory protective equipment for industrial activities",
        ],
        note: "The occupational health measures required depend in particular on the type and weight of the respiratory protective equipment, the work involved and the workplace risk assessment.",
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
      text: "If several employees require assessment, we can organise preventive occupational health care and related examinations for respiratory protective equipment as a dedicated on-site examination day. We coordinate the required scope and practical arrangements with you in advance. We usually respond to enquiries within 48 hours.",
      ctaLabel: "Request an examination day",
    },
  },
  g37: {
    meta: {
      title: "G37 examination Munich",
      description:
        "G37 examination in Munich: preventive occupational health care for display screen work – including advice, vision testing and on-site organisation.",
    },
    h1: "G37 examination Munich",
    tagline: "Preventive Occupational Health Care for Display Screen Work",
    intro: [
      "The G37 examination is preventive occupational health care for employees who regularly work with display screen equipment.",
      "Today, it is provided as optional preventive occupational health care for display screen work. The focus is on individual advice, particularly regarding symptoms and health concerns related to display screen work.",
      "MonacoMed organises preventive occupational health care for display screen work for companies in Munich and, by arrangement, directly at your workplace.",
    ],
    heroCta: "Enquire About G37 Preventive Health Care",
    sections: [
      {
        kind: "checklist",
        title: "What Does G37 Preventive Health Care Include?",
        lead: "The appointment includes occupational health advice and an appropriate examination of the eyes and vision.",
        intro: "The following aspects may be considered, among others:",
        items: [
          "visual acuity",
          "eye complaints",
          "strain caused by display screen work",
          "existing corrective eyewear",
          "complaints related to workstation design",
        ],
        note: "If it emerges that special corrective eyewear is needed for display screen work, that can be assessed as part of the appointment.",
      },
      {
        kind: "prose",
        title: "Is the G37 examination mandatory?",
        paragraphs: [
          "For display screen work, preventive occupational health care must generally be offered by the employer in accordance with the statutory requirements. Participation is voluntary for employees.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G37 preventive health care directly at your workplace",
      text: "Where there are a larger number of display screen workstations, occupational health days can be run efficiently at your company. We support you with scheduling and carry out the screenings together at your site. As a rule we come back to you within 48 hours.",
      ctaLabel: "Enquire about an on-site occupational health day",
    },
  },
  g41: {
    meta: {
      title: "G41 examination Munich",
      description:
        "G41 examination in Munich: medical fitness assessment for work involving a risk of falling – available in Munich and directly at your workplace.",
    },
    h1: "G41 examination Munich",
    tagline: "Medical Fitness Assessment for Work at Height",
    intro: [
      "The G41 examination is frequently requested in connection with work carrying a particular risk of falling.",
      "Although “G41” is no longer the current official designation, a medical fitness assessment for work at height may still be appropriate or required where there is a suitable legal basis or a justified occupational reason.",
      "MonacoMed provides these medical fitness assessments in Munich and, by arrangement, directly at your workplace.",
    ],
    heroCta: "Request a G41 examination",
    sections: [
      {
        kind: "checklist",
        title: "Which Activities May Require a Medical Fitness Assessment?",
        lead: "For example, work:",
        items: [
          "on roofs",
          "on scaffolding",
          "on masts",
          "at greater heights",
          "at elevated workstations",
          "where a sudden health problem could put the individual or others at significant risk",
        ],
        note: "Whether a medical fitness assessment is required and legally permissible must be determined based on the specific workplace and the reason for the assessment.",
      },
      {
        kind: "prose",
        title: "What Does the Examination Assess?",
        paragraphs: [
          "The assessment is based on the medical requirements of the specific activity. Depending on the circumstances, it may include a medical history, physical examination and further tests where required.",
          "The aim is to assess whether the employee is medically fit for the intended activity.",
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
        "G42 examination in Munich: preventive occupational health care for work involving infection risks – for healthcare, laboratories and other occupational settings, including on-site services.",
    },
    h1: "G42 examination Munich",
    tagline: "Preventive Occupational Health Care for Work Involving Infection Risks",
    intro: [
      "The G42 examination applies to employees whose work may expose them to an increased risk of infection from biological agents.",
      "Typical settings include healthcare, medical facilities and laboratories, as well as other work involving regular contact with biological agents.",
      "MonacoMed provides preventive occupational health care for work involving infection risks for companies in Munich and, by arrangement, directly at your workplace.",
    ],
    heroCta: "Enquire about G42 preventive health care",
    sections: [
      {
        kind: "checklist",
        title: "Who may need G42 preventive health care?",
        lead: "Depending on the risk assessment, preventive occupational health care may be relevant for employees in:",
        items: [
          "hospitals and medical facilities",
          "doctors' and dental practices",
          "care facilities",
          "laboratories",
          "nurseries and social care settings",
          "emergency services",
          "other settings with a relevant risk of infection",
        ],
        note: "Whether mandatory or optional health care is required depends on the specific work activity and the level of risk involved.",
      },
      {
        kind: "prose",
        title: "What Does G42 Preventive Health Care Include?",
        paragraphs: [
          "The focus is on individual occupational health advice and on assessing the infection risk associated with the work.",
          "Depending on the activity, this covers possible infection risks, routes of transmission and suitable protective measures.",
          "Vaccination status also plays an important role. Where the work carries an increased risk of infection and an effective vaccination is available, vaccination advice and — where indicated — a vaccination can be offered as part of the appointment.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G42 Preventive Health Care and Vaccinations at Your Workplace",
      text: "Where several employees are involved, we can organise appointments and vaccinations together at your site. That combines preventive occupational health care, vaccination status checks and workplace vaccination efficiently. As a rule we come back to you within 48 hours.",
      ctaLabel: "Enquire about an on-site occupational health day",
    },
  },
  asbest: {
    meta: {
      title: "Asbestos Preventive Occupational Health Care Munich",
      description:
        "Preventive occupational health care for work involving asbestos for companies in Munich – including post-exposure health care after exposure has ended.",
    },
    h1: "Asbestos Preventive Occupational Health Care Munich",
    tagline: "Preventive Occupational Health Care for Work Involving Asbestos",
    intro: [
      "Work involving asbestos can expose employees to harmful asbestos fibres. Exposure can still occur today, particularly during demolition, refurbishment and maintenance work on older buildings and plant.",
      "Where work involves exposure to asbestos, mandatory preventive occupational health care must be arranged. MonacoMed provides this service for companies in Munich and, by arrangement, directly at your workplace.",
    ],
    heroCta: "Enquire About Asbestos Health Care",
    sections: [
      {
        kind: "checklist",
        title: "Who May Need Asbestos Preventive Occupational Health Care?",
        lead: "Preventive occupational health care may be relevant in particular for employees who may come into contact with asbestos-containing materials, for example during:",
        items: [
          "demolition work",
          "refurbishment work",
          "maintenance work",
          "work on older buildings and technical installations",
          "activities with potential exposure to asbestos fibres",
        ],
        note: "Which preventive occupational health care is required depends on the specific activity and the company's risk assessment.",
      },
      {
        kind: "prose",
        title: "What does asbestos preventive occupational health care involve?",
        paragraphs: [
          "The focus is on individual occupational health advice and on the health risks of possible asbestos exposure.",
          "Depending on the reason for the preventive health care and the individual situation, a medical examination can also be offered. This takes into account the activity, any earlier exposure and individual health factors.",
        ],
      },
      {
        kind: "prose",
        title: "Post-exposure health care after asbestos exposure",
        paragraphs: [
          "Asbestos-related illnesses can appear many years or even decades after occupational exposure. Post-exposure occupational health care therefore plays a particular role with asbestos.",
          "Once the hazardous work has ended, preventive health care can be continued beyond the period of employment itself.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "Asbestos Preventive Occupational Health Care for Companies",
      text: "We support companies in determining the appropriate occupational health requirements and arranging the necessary preventive occupational health care. For several employees, appointments can be coordinated and grouped together by arrangement. We usually respond within 48 hours.",
      ctaLabel: "Enquire about asbestos health care",
    },
  },
  g20: {
    meta: {
      title: "G20 examination Munich",
      description:
        "G20 examination (DGUV Recommendation “Noise”) in Munich: preventive occupational health care for noise exposure – for companies and, by arrangement, directly on-site.",
    },
    h1: "G20 examination Munich",
    tagline: "Preventive Occupational Health Care for Noise Exposure",
    intro: [
      "The G20 examination applies to employees exposed to significant noise at work.",
      "The former designation “G20” has been replaced by the current DGUV Recommendation “Noise”. However, the term G20 is still widely used in occupational health practice and when searching for this type of preventive occupational health care.",
      "MonacoMed provides preventive occupational health care for noise exposure for companies in Munich and, by arrangement, directly at your workplace.",
    ],
    heroCta: "Enquire About G20 Preventive Health Care",
    sections: [
      {
        kind: "prose",
        title: "When Is Preventive Occupational Health Care Required for Noise Exposure?",
        paragraphs: [
          "Depending on the level of occupational noise exposure, optional or mandatory preventive occupational health care may be required.",
          "At or above the lower exposure action value of 80 dB(A), optional health care must generally be offered. At or above the upper exposure action value of 85 dB(A), mandatory health care must be arranged.",
        ],
      },
      {
        kind: "checklist",
        title: "What Does G20 Preventive Health Care Include?",
        lead: "The focus is on occupational health advice on hearing protection and the employee’s individual noise exposure.",
        intro: "Depending on the reason for the preventive health care, the following aspects may be considered:",
        items: [
          "occupational noise exposure",
          "previous noise exposure",
          "hearing protection",
          "individual risk factors",
          "complaints about, or changes in, hearing",
          "hearing problems or changes in hearing",
        ],
        note: "The aim is to identify work-related health risks early and to advise employees individually on protecting their hearing.",
      },
    ],
    cta: {
      label: "Contact",
      title: "G20 Preventive Health Care Directly at Your Workplace",
      text: "If several employees are exposed to noise, we can organise the preventive occupational health care directly at your workplace. We coordinate the number of employees, any examinations required and the practical arrangements with you in advance. This allows even larger occupational health days to be integrated efficiently into your day-to-day operations. We usually respond to enquiries within 48 hours.",
      ctaLabel: "Enquire About an On-Site Occupational Health Day",
    },
  },
  g24: {
    meta: {
      title: "G24 examination Munich",
      description:
        "G24 examination in Munich: preventive occupational health care for skin exposure from wet work, protective gloves or skin-irritating substances – on-site or at our practice.",
    },
    h1: "G24 examination Munich",
    tagline: "Preventive occupational health care for skin exposure",
    intro: [
      "The G24 examination applies to employees whose skin is placed under particular strain by their work.",
      "The former designation “G24 – skin conditions” is still widely used. Today the preventive health care is based on the specific reason for it and on the company's risk assessment.",
      "MonacoMed provides preventive occupational health care for skin-exposing work for companies in Munich and, by arrangement, directly at your workplace.",
    ],
    heroCta: "Enquire about G24 preventive health care",
    sections: [
      {
        kind: "checklist",
        title: "Who May Need G24 Preventive Health Care?",
        lead: "Preventive occupational health care may be relevant in particular for work involving increased skin exposure, for example:",
        items: [
          "wet work",
          "frequent or prolonged wearing of liquid-tight gloves",
          "regular contact with skin-irritant or sensitising substances",
          "work involving metalworking fluids",
          "cleaning and disinfection work",
          "work in healthcare, skilled trades or industry",
        ],
        note: "Whether health care is mandatory or optional depends on the nature and extent of exposure and on the risk assessment.",
      },
      {
        kind: "checklist",
        title: "What Does G24 Preventive Health Care Include?",
        lead: "The focus is on individual advice about skin health and on identifying work-related skin problems early.",
        intro: "Depending on the reason for the preventive health care, the following are considered among others:",
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
        title: "Preventing Work-Related Skin Conditions",
        paragraphs: [
          "Work-related skin conditions can develop gradually. Early occupational health advice and appropriate protective measures can help prevent symptoms or stop existing problems from worsening.",
          "Preventive occupational health care complements the technical and organisational protective measures in place at the workplace.",
        ],
      },
    ],
    cta: {
      label: "Contact",
      title: "G24 preventive health care directly at your workplace",
      text: "If several employees carry out work involving significant skin exposure, we can organise preventive occupational health appointments directly at your workplace. We support you with the organisation and determine the appropriate occupational health care based on the work activities and your workplace risk assessment. We usually respond to enquiries within 48 hours.",
      ctaLabel: "Enquire about an on-site occupational health day",
    },
  },
};
