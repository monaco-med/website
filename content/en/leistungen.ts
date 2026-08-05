import type { ContentPageContent } from "@/content/types";
import { anchors } from "@/lib/routes";

/**
 * English copy for the services overview page.
 *
 * Section anchor ids come from `anchors.en`, not string literals, so the
 * deep links from other pages and the ids rendered here cannot drift apart.
 */
export const leistungenEn: ContentPageContent = {
  meta: {
    title: "Services – occupational health, workplace safety & more",
    description:
      "All MonacoMed services at a glance: occupational health, workplace safety, railway medicine, vaccinations, digital processes and health management.",
  },
  heroLabel: "Services",
  h1: "Health and safety at work from a single source",
  intro: [
    "Occupational health, workplace safety and health management – personally led and digitally organised.",
  ],
  heroCtas: [],
  index: {
    moreLabel: "Find out more →",
    rows: [
      { id: "01", key: "arbeitsmedizin", title: "Occupational health", text: "Company doctor support, screening and examinations under ASiG and DGUV V2." },
      { id: "02", key: "arbeitssicherheit", title: "Workplace safety", text: "Occupational safety specialist, risk assessments and safety briefings." },
      { id: "03", key: "bahnmedizin", title: "Railway medicine", text: "Aptitude and fitness examinations for railway operations – as an authorised examination centre." },
      { id: "04", key: "impfungen", title: "Workplace vaccinations", text: "Vaccination sessions on your premises – from planning through to documentation." },
      { id: "05", key: "digitaleProzesse", title: "Digital processes", text: "Online appointment booking, screening register and automatic reminders." },
      { id: "06", key: "gesundheitsmanagement", title: "Health management", text: "Workplace health management, health days, ergonomics and prevention for your team." },
      { id: "07", key: "gUntersuchungen", title: "Occupational health screening & G-examinations", text: "G25, G37, G41 and other examinations – planned, carried out and documented." },
    ],
  },
  sections: [
    {
      kind: "tiles",
      id: "occupational-health",
      label: "Service area 01",
      title: "Occupational health",
      action: { key: "arbeitsmedizin", label: "Find out more", variant: "ghost" },
      items: [
        { title: "Company doctor support", text: "Under ASiG and DGUV V2 – with personal involvement." },
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
      kind: "tiles",
      tone: "sand",
      id: "workplace-safety",
      label: "Service area 02",
      title: "Workplace safety",
      action: { key: "arbeitssicherheit", label: "Find out more", variant: "ghost" },
      items: [
        { title: "Occupational safety specialist", text: "Safety support and advice." },
        { title: "Risk assessment", text: "Evaluation, action planning and documentation." },
        { title: "Safety briefings", text: "Practical, understandable and matched to your operation." },
        { title: "Fire safety", text: "Briefings and hands-on fire safety training." },
        { title: "Tracking actions", text: "Open points followed up in a structured way." },
      ],
    },
    {
      kind: "tiles",
      id: "railway-medicine",
      label: "Service area 03",
      title: "Railway medicine",
      action: { key: "bahnmedizin", label: "Find out more", variant: "ghost" },
      items: [
        { title: "Train drivers (§ 16 TfV)", text: "Fitness examinations for train drivers in line with the statutory requirements." },
        { title: "VDV Publication 714", text: "Examinations for people working in public transport and railway operations." },
        { title: "EBO examinations", text: "Aptitude examinations for safety-critical activities in railway operations." },
        { title: "DB requirement groups A & B", text: "Carried out in line with the applicable group directives." },
        { title: "Other safety-critical activities", text: "Including track safety attendants (SiPo) and employees with particular requirements." },
      ],
    },
    {
      kind: "tiles",
      tone: "sand",
      id: "workplace-vaccinations",
      label: "Service area 04",
      title: "Workplace vaccinations",
      action: { key: "impfungen", label: "Find out more", variant: "ghost" },
      items: [
        { title: "Flu vaccination", text: "The annual autumn session – easy to plan for the whole team." },
        { title: "Travel vaccinations", text: "Advice and vaccinations before business trips – given by a specialist." },
        { title: "Work-related vaccinations", text: "E.g. hepatitis A/B where there is a relevant risk." },
        { title: "Vaccination days on site", text: "Carried out at your premises – with little time lost." },
        { title: "Documentation & reminders", text: "Certificates and automatic booster reminders through the register." },
      ],
    },
    {
      kind: "tiles",
      id: anchors.en.digitaleProzesse,
      label: "Service area 05",
      title: "Digital processes",
      items: [
        { title: "Digital screening register", text: "Screenings, deadlines and due dates visible at any time." },
        { title: "Online appointment booking", text: "Employees book their own appointments online." },
        { title: "Automatic reminders", text: "Fewer missed appointments and less administration." },
        { title: "Information in advance", text: "Everything employees need, sent digitally before the appointment." },
        { title: "Digital collaboration", text: "Clear processes, secure documents and less paperwork." },
      ],
    },
    {
      kind: "tiles",
      tone: "sand",
      id: anchors.en.gesundheitsmanagement,
      label: "Service area 06",
      title: "Health management",
      items: [
        { title: "Workplace health management", text: "Health provision matched to your company." },
        { title: "Health days", text: "Sessions on screening, movement, ergonomics or vaccination." },
        { title: "Ergonomics", text: "Healthy design of screen-based and other workstations." },
        { title: "Psychological strain", text: "Structured analysis and measures you can act on." },
        { title: "Prevention", text: "Provision covering stress, movement, sleep and cardiovascular health." },
      ],
    },
    {
      kind: "tiles",
      id: "occupational-health-screenings",
      label: "Service area 07",
      title: "Occupational health screening & G-examinations",
      action: { key: "gUntersuchungen", label: "Find out more", variant: "ghost" },
      items: [
        {
          title: "G25 – driving, control and monitoring tasks",
          text: "Fitness assessment for vehicles, machinery and plant –",
          link: { key: "g25", label: "more on G25" },
          textAfter: ".",
        },
        {
          title: "G37 – display screen workstations",
          text: "Screening for display screen work, with an eyesight and advisory element –",
          link: { key: "g37", label: "more on G37" },
          textAfter: ".",
        },
        {
          title: "G41 – work with a risk of falling",
          text: "Fitness assessment for activities with a particular risk of falling –",
          link: { key: "g41", label: "more on G41" },
          textAfter: ".",
        },
        {
          title: "G42 – activities with a risk of infection",
          text: "Screening for healthcare, laboratories and other higher-risk settings –",
          link: { key: "g42", label: "more on G42" },
          textAfter: ".",
        },
        {
          title: "G20, G24 & asbestos screening",
          text: "Screening for noise, skin exposure and asbestos –",
          link: { key: "gUntersuchungen", label: "all G-examinations" },
          textAfter: ".",
        },
      ],
    },
  ],
  cta: {
    label: "Contact",
    title: "Which services does your business need?",
    text: "A few details are enough – your enquiry is reviewed by a physician directly, with no sales team and no call centre.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Assess your requirements free of charge",
  },
};
