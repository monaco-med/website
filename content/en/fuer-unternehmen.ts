import type { ContentPageContent } from "@/content/types";

/** English copy for the "For companies" multi-site pitch page. */
export const fuerUnternehmenEn: ContentPageContent = {
  meta: {
    title: "For companies – support across multiple locations",
    description:
      "Occupational health support for companies with multiple locations: centrally coordinated, digitally documented, with named contacts.",
  },
  heroLabel: "For companies",
  h1: "Occupational health for companies with multiple locations",
  tagline: "Centrally coordinated, instead of endless site-by-site arrangements.",
  intro: [
    "Whether two branches or sites across the country – MonacoMed organises your occupational health support in a structured, digital way, with named contacts. Processes stay consistent and the administrative load on HR stays low.",
  ],
  heroCtas: [
    { key: "betreuungsbedarf", label: "Make a no-obligation enquiry", variant: "primary" },
    { key: "rueckruf", label: "Arrange an introductory call", variant: "ghost" },
  ],
  sections: [
    {
      kind: "painGrid",
      title: "When organising it becomes the hard part",
      lead: "Every additional location adds coordination effort.",
      intro: "You may recognise some of these:",
      items: [
        "Appointments have to be agreed across several locations.",
        "Different contacts at each site make communication harder.",
        "Screening deadlines slip out of view.",
        "Examinations have to be organised in parallel.",
        "The company doctor and the safety specialist work separately.",
        "HR spends a lot of time scheduling and chasing.",
      ],
      close: "// This is exactly what our processes were built for.",
    },
    {
      kind: "split",
      tone: "firm",
      label: "Our approach",
      title: "Your support, organised across every location",
      lead: "MonacoMed takes on the cross-site organisation of your occupational health support.",
      matrixHeading: "What that rests on",
      rows: [
        ["Central medical responsibility", "Named contacts"],
        ["Digital scheduling", "Digital screening register"],
        ["Coordinated screening days", "Close alignment with HR and your safety specialist"],
        ["Consistent documentation", "Clear processes across all locations"],
      ],
    },
    {
      kind: "steps",
      title: "How working together runs",
      items: [
        { n: "01", title: "Getting to know you", text: "We talk through your company, your locations and what you need." },
        { n: "02", title: "A support plan", text: "Together we develop a structured plan for your occupational health support." },
        { n: "03", title: "Organisation", text: "We coordinate screening days, examinations, safety committee meetings and inspections." },
        { n: "04", title: "Ongoing support", text: "With named contacts, digital processes and short lines of communication." },
      ],
    },
    {
      kind: "tiles",
      flush: true,
      title: "Digitally organised",
      lead: "The larger the company, the more efficient processes matter.",
      intro: "Which is why we rely on:",
      items: [
        { title: "Online appointment booking", text: "Employees book their own appointments online." },
        { title: "Digital screening register", text: "Due dates and screenings visible at any time." },
        { title: "Automatic reminders", text: "Fewer missed appointments and less administration." },
        { title: "Team appointments at short notice", text: "Even larger screening days can be arranged flexibly." },
        { title: "Digital collaboration", text: "Secure document transfer and straightforward coordination with HR." },
      ],
    },
    {
      kind: "split",
      tone: "firm",
      title: "Occupational health and workplace safety from a single source",
      lead: "The company doctor and the occupational safety specialist work closely together.",
      matrixHeading: "What that produces",
      rows: [
        ["Consistent recommendations", "Coordinated measures"],
        ["Less back-and-forth", "Clear responsibilities"],
        ["Efficient implementation"],
      ],
    },
    {
      kind: "whyLines",
      items: [
        { n: "01", title: "Named contacts", text: "Direct communication instead of changing responsibilities." },
        { n: "02", title: "Personally led", text: "Medical responsibility held by Dr. med. univ. David Manghabati." },
        { n: "03", title: "Digital processes", text: "Modern organisation instead of email chaos." },
        { n: "04", title: "Short response times", text: "Quick replies and flexible scheduling. As a rule we come back to you within 48 hours." },
        { n: "05", title: "Structured support", text: "Clear processes for HR, managers and employees." },
      ],
    },
    {
      kind: "sectorGrid",
      label: "Suited to",
      items: [
        "Companies with multiple locations",
        "Branch networks",
        "Manufacturing companies",
        "Logistics companies",
        "Industry",
        "Service companies",
        "Public administration",
        "Technology companies",
      ],
    },
    {
      kind: "faq",
      tone: "sand",
      title: "Frequent questions",
      items: [
        { q: "Can several locations be supported?", a: "Yes. Screening days and ongoing support are coordinated across all your sites." },
        { q: "Does everyone have to travel to Munich?", a: "No. Depending on the service, examinations can take place at your own locations or at our practice." },
        { q: "Will you work with our existing safety specialist?", a: "Yes. Existing specialists are of course involved. On request we can take on the safety side as well." },
        { q: "How does getting started work?", a: "After an introductory conversation we draw up a support plan and coordinate the next steps with your contacts." },
      ],
    },
  ],
  cta: {
    label: "Contact",
    title: "Personal support, not a call centre",
    text: "Your enquiry is reviewed by a physician directly. From the outset you speak to someone with the relevant expertise – not to a sales team or a hotline.",
    ctaKey: "betreuungsbedarf",
    ctaLabel: "Get in touch, no obligation",
  },
};
