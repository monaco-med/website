import type { ContentPageContent } from "@/content/types";

/** English copy for the "For companies" multi-site pitch page. */
export const fuerUnternehmenEn: ContentPageContent = {
  meta: {
    title: "For companies – Multi-site occupational health support",
    description:
      "Occupational health support for companies with multiple locations – centrally coordinated, digitally documented and managed by dedicated contacts.",
  },
  heroLabel: "For companies",
  h1: "Occupational health for companies with multiple locations",
  tagline: "Centrally coordinated, instead of endless site-by-site arrangements.",
  intro: [
    "Whether you have two branches or locations across Germany, MonacoMed organises your occupational health services centrally, digitally and with dedicated contacts. This ensures consistent processes while keeping the administrative burden on HR low.",
  ],
  heroCtas: [
    { key: "betreuungsbedarf", label: "Make a no-obligation enquiry", variant: "primary" },
    { key: "rueckruf", label: "Arrange an introductory call", variant: "ghost" },
  ],
  sections: [
    {
      kind: "painGrid",
      title: "When coordination becomes a challenge",
      lead: "Every additional location increases the coordination required.",
      intro: "You may recognise some of these challenges:",
      items: [
        "Appointments need to be coordinated across multiple locations.",
        "Different contacts at each location make communication more difficult.",
        "Preventive occupational health care deadlines can easily be overlooked.",
        "Medical examinations need to be organised across several locations at the same time.",
        "The occupational physician and occupational safety specialist work separately.",
        "HR spends considerable time scheduling appointments and following up.",
      ],
      close: "This is exactly what our processes are designed to solve.",
    },
    {
      kind: "split",
      tone: "firm",
      label: "Our approach",
      title: "Coordinated occupational health support across all locations",
      lead: "MonacoMed coordinates your occupational health services across all locations.",
      matrixHeading: "Our approach includes",
      rows: [
        ["Central medical responsibility", "Dedicated contacts"],
        ["Digital appointment scheduling", "Digital management of preventive occupational health care"],
        ["Coordinated examination days", "Close coordination with HR and your occupational safety specialist"],
        ["Consistent documentation", "Clear processes across all locations"],
      ],
    },
    {
      kind: "steps",
      title: "How we work together",
      items: [
        { n: "01", title: "Getting to know you", text: "We talk through your company, your locations and what you need." },
        { n: "02", title: "A support plan", text: "Together, we develop a structured occupational health support plan." },
        { n: "03", title: "Coordination", text: "We coordinate examination days, preventive occupational health care, occupational health and safety committee meetings and workplace inspections." },
        { n: "04", title: "Ongoing support", text: "With dedicated contacts, digital processes and direct communication." },
      ],
    },
    {
      kind: "tiles",
      flush: true,
      title: "Digitally organised",
      lead: "The larger the company, the more important efficient processes become.",
      intro: "That is why we use:",
      items: [
        { title: "Online appointment booking", text: "Employees book their own appointments online." },
        { title: "Digital occupational health management", text: "Keep track of due dates and preventive occupational health care at all times." },
        { title: "Automatic reminders", text: "Fewer missed appointments and less administrative work." },
        { title: "Short-notice team appointments", text: "Larger examination days can also be scheduled flexibly." },
        { title: "Digital collaboration", text: "Secure document transfer and straightforward coordination with HR." },
      ],
    },
    {
      kind: "split",
      tone: "firm",
      title: "Occupational health and occupational safety from a single provider",
      lead: "The occupational physician and occupational safety specialist work closely together.",
      matrixHeading: "The result",
      rows: [
        ["Consistent recommendations", "Coordinated actions"],
        ["Less back-and-forth", "Clear responsibilities"],
        ["Efficient implementation"],
      ],
    },
    {
      kind: "whyLines",
      items: [
        { n: "01", title: "Dedicated contacts", text: "Direct communication instead of constantly changing contacts." },
        { n: "02", title: "Personally led", text: "Medical responsibility rests personally with Dr. med. univ. David Manghabati." },
        { n: "03", title: "Digital processes", text: "Modern digital organisation instead of email chaos." },
        { n: "04", title: "Fast response times", text: "Fast responses and flexible appointment scheduling. We usually respond within 48 hours." },
        { n: "05", title: "Structured support", text: "Clear processes for HR, managers and employees." },
      ],
    },
    {
      kind: "sectorGrid",
      label: "Suitable for",
      items: [
        "Companies with multiple locations",
        "Branch networks",
        "Manufacturing companies",
        "Logistics companies",
        "Industrial companies",
        "Service companies",
        "Public administration",
        "Technology companies",
      ],
    },
    {
      kind: "faq",
      tone: "sand",
      title: "Frequently asked questions",
      items: [
        { q: "Can you support multiple locations?", a: "Yes. Examination days and ongoing occupational health services are coordinated across all your locations." },
        { q: "Do all employees need to travel to Munich?", a: "No. Depending on the service required, examinations can take place directly at your locations or at our practice in Munich." },
        { q: "Do you work with our existing occupational safety specialist?", a: "Yes. We work closely with your existing occupational safety specialist. If required, we can also provide the full range of occupational safety services." },
        { q: "How do we get started?", a: "Following an initial consultation, we develop a structured support plan and coordinate the next steps with your designated contacts." },
      ],
    },
  ],
  cta: {
    label: "Contact",
    title: "Personal support instead of a call centre",
    text: "Your enquiry is reviewed directly by a physician. From the outset, you speak with a dedicated professional contact rather than a sales department or hotline.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Get in touch – No obligation",
  },
};
