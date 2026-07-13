# MonacoMed – Website

Marketing website for **MonacoMed**, a practice for occupational medicine
(Arbeitsmedizin) in Munich led by Dr. med. univ. David Manghabati. Built with
Next.js from the design handoff in
[`design_handoff_monacomed_website/`](./design_handoff_monacomed_website).

## Tech stack

- **Next.js 16** (App Router, TypeScript)
- **next/font** — Archivo, Inter, IBM Plex Mono, self-hosted (no external font requests)
- **GSAP** — scroll-triggered reveal animations (`components/Reveal.tsx`)
- Plain CSS with design tokens as CSS custom properties (`app/globals.css`) — no CSS framework

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start       # serve the production build
npm run lint        # ESLint
```

## Project structure

```
app/                    routes (App Router) — one page.tsx per route, see Routes below
  layout.tsx            root layout: fonts, <Header>/<Footer>, Organization JSON-LD
  globals.css           design tokens + all shared component styles
  sitemap.ts / robots.ts
  not-found.tsx          404 page
components/              shared UI: Header, Footer, Hero/Tiles/Matrix/Steps/FaqList/
                         CtaBand/WhyLines/..., ContactForm, CallbackForm, Reveal (GSAP)
lib/
  site.ts               site-wide constants (name, address, phone/email placeholders)
  routes.ts             typed route map, used everywhere instead of hardcoded strings
  gsap.ts               GSAP + ScrollTrigger registration
public/images/           portrait + partner logos
design_handoff_monacomed_website/   original design reference (do not deploy/link publicly)
```

## Routes

| Route | Page |
|---|---|
| `/` | Homepage |
| `/leistungen` | Services overview |
| `/leistungen/arbeitsmedizin` | Arbeitsmedizin |
| `/leistungen/arbeitssicherheit` | Arbeitssicherheit |
| `/leistungen/bahnmedizin` | Bahnmedizin |
| `/leistungen/impfungen` | Impfungen im Unternehmen |
| `/betriebsarzt-muenchen` | Betriebsarzt München |
| `/fuer-unternehmen` | Für Unternehmen (multi-site) |
| `/betreuungsbedarf` | Lead form: Betreuungsbedarf einschätzen |
| `/rueckruf` | Callback request form |
| `/faq` | FAQ |
| `/kontakt` | Contact chooser |
| `/impressum` | Impressum & Datenschutz (`#datenschutz`) |

## Forms

`ContactForm` and `CallbackForm` (`components/`) are client-side only right now:
they validate and show a success state but **do not send anywhere**. Wiring
them to a real backend/email target is an explicit open item — see
[`design_handoff_monacomed_website/README.md`](./design_handoff_monacomed_website/README.md#offene-punkte-vom-kunden-noch-ausstehend).

## SEO

Per-page `metadata` + canonical URLs, Organization JSON-LD (root layout),
Physician JSON-LD (`/betriebsarzt-muenchen`), BreadcrumbList JSON-LD (Leistungen
sub-pages), FAQPage JSON-LD (`/faq`), `sitemap.xml`, `robots.txt`.

## Before launch

These are called out as open items in the design handoff — not yet done:

- [ ] Replace placeholder phone/email in `lib/site.ts`
- [ ] Legal review of Impressum/Datenschutz text (`app/impressum/page.tsx`)
- [ ] Decide and wire up a real form backend (email vs. practice software)
- [ ] Cookie/consent banner — only needed if analytics is added later

See [`design_handoff_monacomed_website/DEPLOY-NOTES.md`](./design_handoff_monacomed_website/DEPLOY-NOTES.md)
for the full pre-launch checklist.
