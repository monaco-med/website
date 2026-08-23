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
    title: "Services – Occupational Health, Occupational Safety & More",
    description:
      "An overview of MonacoMed’s services: occupational health, occupational safety, railway occupational medicine, workplace vaccinations, digital processes and health management.",
  },
  heroLabel: "Services",
  h1: "Occupational Health and Safety from a Single Provider",
  intro: [
    "Occupational health, occupational safety and health management – personally delivered and digitally organised.",
  ],
  heroCtas: [],
  index: {
    moreLabel: "Learn More →",
    rows: [
      { id: "01", key: "arbeitsmedizin", title: "Occupational health", text: "Occupational health services, preventive occupational health care and medical examinations in accordance with ASiG and DGUV Regulation 2." },
      { id: "02", key: "arbeitssicherheit", title: "Occupational Safety", text: "Occupational safety specialist, risk assessments and safety training." },
      { id: "03", key: "bahnmedizin", title: "Railway Occupational Medicine", text: "Medical fitness assessments for railway operations – provided by a authorised examination centre." },
      { id: "04", key: "impfungen", title: "Workplace vaccinations", text: "orkplace vaccination programmes delivered on-site – from planning through to documentation." },
      { id: "05", key: "digitaleProzesse", title: "Digital processes", text: "Online appointment booking, digital management of preventive occupational health care and automatic reminders." },
      { id: "06", key: "gesundheitsmanagement", title: "Health management", text: "Workplace health management, health days, ergonomics and preventive health programmes for your team." },
      { id: "07", key: "gUntersuchungen", title: "Preventive Occupational Health Care & G Examinations", text: "G25, G37, G41 and other occupational health assessments – planned, carried out and documented." },
    ],
  },
  sections: [
    {
      kind: "tiles",
      id: "occupational-health",
      label: "Service area 01",
      title: "Occupational health",
      action: { key: "arbeitsmedizin", label: "Learn More", variant: "ghost" },
      items: [
        { title: "Occupational Health Services", text: "In accordance with ASiG and DGUV Regulation 2 – with personal medical support." },
        { title: "Preventive Occupational Health Care", text: "Mandatory, optional and elective health care – clearly organised." },
        { title: "Fitness-for-Work Assessments", text: "Where specifically required, clearly separated from preventive occupational health care." },
        { title: "Occupational Health and Safety Committee Meetings & Workplace Inspections", text: "Participation, documentation and practical recommendations." },
        { title: "Return-to-Work Management & Maternity Protection", text: "Occupational health advice for practical workplace solutions." },
        {
          title: "Workplace Vaccinations",
          text: "Directly at your workplace –",
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
      title: "Occupational Safety",
      action: { key: "arbeitssicherheit", label: "Learn More", variant: "ghost" },
      items: [
        { title: "Occupational Safety Specialist", text: "Occupational safety services and advice." },
        { title: "Risk Assessment", text: "Risk assessment, action planning and documentation." },
        { title: "Safety Training", text: "Practical, easy to understand and tailored to your workplace." },
        { title: "Fire safety", text: "Fire safety instruction and hands-on training" },
        { title: "Action Tracking", text: "Open items are tracked systematically." },
      ],
    },
    {
      kind: "tiles",
      id: "railway-medicine",
      label: "Service area 03",
      title: "Railway Occupational Medicine",
      action: { key: "bahnmedizin", label: "Learn More", variant: "ghost" },
      items: [
        { title: "Train drivers (§ 16 TfV)", text: "Medical fitness assessments for train drivers in accordance with statutory requirements." },
        { title: "VDV Recommendation 714", text: "Medical fitness assessments for employees in public transport and railway operations." },
        { title: "EBO Medical Fitness Assessments", text: "Medical fitness assessments for safety-critical roles in railway operations." },
        { title: "DB requirement groups A & B", text: "Assessments carried out in accordance with the applicable corporate guidelines." },
        { title: "Other Safety-Critical Roles", text: "Including track safety personnel (SiPo) and employees subject to specific medical fitness requirements." },
      ],
    },
    {
      kind: "tiles",
      tone: "sand",
      id: "workplace-vaccinations",
      label: "Service area 04",
      title: "Workplace vaccinations",
      action: { key: "impfungen", label: "Learn More", variant: "ghost" },
      items: [
        { title: "Flu vaccination", text: "The annual autumn session – easy to plan for the whole team." },
        { title: "Travel vaccinations", text: "Travel health advice and vaccinations before business trips – provided by a specialist physician." },
        { title: "Work-related vaccinations", text: "e.g. hepatitis A/B where indicated by workplace exposure." },
        { title: "On-Site Vaccination Days", text: "Vaccinations delivered directly at your workplace – minimising time away from work." },
        { title: "Documentation & reminders", text: "Documentation and automatic reminders when booster vaccinations are due." },
      ],
    },
    {
      kind: "tiles",
      id: anchors.en.digitaleProzesse,
      label: "Service area 05",
      title: "Digital processes",
      items: [
        { title: "Digital Occupational Health Management", text: "Keep track of preventive occupational health care, deadlines and due dates at all times." },
        { title: "Online appointment booking", text: "Employees book their own appointments online." },
        { title: "Automatic reminders", text: "Fewer missed appointments and less administrative work." },
        { title: "Information in advance", text: "All relevant information provided digitally before the appointment." },
        { title: "Digital collaboration", text: "Clear processes, secure document exchange and less paperwork." },
      ],
    },
    {
      kind: "tiles",
      tone: "sand",
      id: anchors.en.gesundheitsmanagement,
      label: "Service area 06",
      title: "Health management",
      items: [
        { title: "Workplace health management", text: "Health programmes tailored to your company." },
        { title: "Workplace Health Days", text: "Health activities covering preventive care, exercise, ergonomics and vaccinations." },
        { title: "Ergonomics", text: "Ergonomic design of display screen and other workstations." },
        { title: "Mental Workload", text: "Structured assessment and practical actions." },
        { title: "Prevention", text: "Programmes covering stress management, physical activity, sleep and cardiovascular health." },
      ],
    },
    {
      kind: "tiles",
      id: "occupational-health-screenings",
      label: "Service area 07",
      title: "Preventive Occupational Health Care & G Examinations",
      action: { key: "gUntersuchungen", label: "Learn More", variant: "ghost" },
      items: [
        {
          title: "G25 – Driving, Control and Monitoring Activities",
          text: "Fitness-for-work assessment for driving vehicles and operating machinery and equipment –",
          link: { key: "g25", label: "more on G25" },
          textAfter: ".",
        },
        {
          title: "G37 – display screen workstations",
          text: "Preventive occupational health care for display screen work, including vision assessment and advice –",
          link: { key: "g37", label: "more about G37" },
          textAfter: ".",
        },
        {
          title: "G41 – Work at Height",
          text: "Fitness-for-work assessment for activities involving a particular risk of falling",
          link: { key: "g41", label: "more about G41" },
          textAfter: ".",
        },
        {
          title: "G42 – Activities Involving a Risk of Infection",
          text: "Preventive occupational health care for healthcare, laboratory work and other areas involving infection risks –",
          link: { key: "g42", label: "more about G42" },
          textAfter: ".",
        },
        {
          title: "G20, G24 & Asbestos-Related Preventive Occupational Health Care",
          text: "Preventive occupational health care for noise exposure, skin hazards and asbestos exposure –",
          link: { key: "gUntersuchungen", label: "all G examinations" },
          textAfter: ".",
        },
      ],
    },
  ],
  cta: {
    label: "Contact",
    title: "Which services does your business need?",
    text: "A few details are all we need. Your enquiry is reviewed directly by a physician – with no sales department or call centre.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Assess your requirements free of charge",
  },
};
