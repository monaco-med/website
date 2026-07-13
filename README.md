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
  api/lead/route.ts      proxies form submissions to the Google Apps Script
components/              shared UI: Header, Footer, Hero/Tiles/Matrix/Steps/FaqList/
                         CtaBand/WhyLines/..., ContactForm, CallbackForm, Reveal (GSAP)
lib/
  site.ts               site-wide constants (name, address, phone/email placeholders)
  routes.ts             typed route map, used everywhere instead of hardcoded strings
  gsap.ts               GSAP + ScrollTrigger registration
  submitLead.ts         client helper used by ContactForm/CallbackForm to POST /api/lead
public/images/           portrait + partner logos
google-apps-script/      Code.gs + deployment instructions for the form-mailer backend
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

`ContactForm` (Betreuungsbedarf, also embedded on the homepage) and
`CallbackForm` (Rückruf) submit to `/api/lead`, which forwards them
server-side to a Google Apps Script that emails `info@monaco-med.de` via
`MailApp`. See [`google-apps-script/README.md`](./google-apps-script/README.md)
for how to deploy/redeploy that script, and `.env.example` for the two
required environment variables (`GOOGLE_APPS_SCRIPT_URL`,
`GOOGLE_APPS_SCRIPT_SECRET`) — without them, submissions fail with a clear
"not configured" error instead of silently doing nothing.

## SEO

Per-page `metadata` + canonical URLs, Organization JSON-LD (root layout),
Physician JSON-LD (`/betriebsarzt-muenchen`), BreadcrumbList JSON-LD (Leistungen
sub-pages), FAQPage JSON-LD (`/faq`), `sitemap.xml`, `robots.txt`.

## Before launch

These are called out as open items in the design handoff — not yet done:

- [ ] Replace placeholder phone in `lib/site.ts` (email is now live: `info@monaco-med.de`)
- [ ] Legal review of Impressum/Datenschutz text (`app/impressum/page.tsx`)
- [ ] Deploy the Google Apps Script and set `GOOGLE_APPS_SCRIPT_URL` /
      `GOOGLE_APPS_SCRIPT_SECRET` in the hosting platform's env vars (see Forms above)
- [ ] Cookie/consent banner — only needed if analytics is added later

See [`design_handoff_monacomed_website/DEPLOY-NOTES.md`](./design_handoff_monacomed_website/DEPLOY-NOTES.md)
for the full pre-launch checklist.
