# MonacoMed – Website

Production marketing website for **MonacoMed**, a practice for occupational
medicine (Arbeitsmedizin) in Munich led by Dr. med. univ. David Manghabati.
Live at [www.monaco-med.de](https://www.monaco-med.de), auto-deployed via
Vercel on every push to `main`.

**New to this project?** This README is a quick orientation. For the full
picture — architecture, conventions, the forms/lead pipeline, how to add a
page, and known placeholders — read
**[`docs/DEVELOPMENT.md`](./docs/DEVELOPMENT.md)** next.

## Tech stack

- **Next.js 16** (App Router, TypeScript), fully statically prerendered
  except the `/api/lead` route
- **next/font** — Archivo, Inter, IBM Plex Mono, self-hosted (no external font requests)
- **GSAP** — scroll-triggered reveal animations (`components/Reveal.tsx`)
- Plain CSS with design tokens as CSS custom properties (`app/globals.css`) — no CSS framework, no CMS, no database

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also runs the TypeScript type check)
npm run start       # serve the production build
npm run lint        # ESLint
```

To test the lead forms locally, copy `.env.example` to `.env.local` and fill
in the two Google Apps Script variables — see
[Environment variables in the dev guide](./docs/DEVELOPMENT.md#environment-variables).

## Project structure

```
app/                    routes (App Router) — one page.tsx per route, see Routes below
  layout.tsx            root layout: fonts, <Header>/<Footer>, Organization JSON-LD
  globals.css            design tokens + all shared component styles
  sitemap.ts / robots.ts  generated /sitemap.xml and /robots.txt
  not-found.tsx           404 page
  api/lead/route.ts       proxies form submissions to the Google Apps Script
components/               shared UI: Header, Footer, SectionHead, Tiles, Matrix, Steps,
                          FaqList, CtaBand, WhyLines, ContactForm, CallbackForm, Reveal (GSAP), ...
lib/
  site.ts                site-wide constants (name, address, phone/email placeholders)
  routes.ts              typed route map, used everywhere instead of hardcoded strings
  gsap.ts                GSAP + ScrollTrigger registration
  submitLead.ts          client helper used by ContactForm/CallbackForm to POST /api/lead
public/images/            portrait photo + favicon source
google-apps-script/       Code.gs + deployment instructions for the form-mailer backend
design_handoff_monacomed_website/  original design reference (historical only — do not deploy/link publicly)
design-system.md          extracted visual design system (colors/type/spacing/assets)
docs/DEVELOPMENT.md        full developer guide — read this next
```

## Routes

See [`lib/routes.ts`](./lib/routes.ts) for the exhaustive, always-current
list. Top-level pages:

| Route | Page |
|---|---|
| `/` | Homepage |
| `/leistungen` | Services overview |
| `/leistungen/arbeitsmedizin` | Arbeitsmedizin |
| `/leistungen/arbeitssicherheit` | Arbeitssicherheit |
| `/leistungen/bahnmedizin` | Bahnmedizin |
| `/leistungen/impfungen` | Impfungen im Unternehmen |
| `/leistungen/vorsorge-g-untersuchungen` | G-Untersuchungen overview (+ 8 exam-type detail pages) |
| `/betriebsarzt-muenchen` | Betriebsarzt München |
| `/fuer-unternehmen` | Für Unternehmen (multi-site) |
| `/betreuungsbedarf` | Lead form: Betreuungsbedarf einschätzen |
| `/rueckruf` | Callback request form |
| `/faq` | FAQ |
| `/kontakt` | Contact chooser |
| `/impressum` | Impressum & Datenschutz (`#datenschutz`) — content filled in, pending legal review |

## Forms

`ContactForm` (Betreuungsbedarf, also embedded on the homepage) and
`CallbackForm` (Rückruf) submit to `/api/lead`, which forwards them
server-side to a Google Apps Script that emails `info@monaco-med.de` via
`MailApp`. See [`google-apps-script/README.md`](./google-apps-script/README.md)
for how to deploy/redeploy that script, and `.env.example` for the two
required environment variables (`GOOGLE_APPS_SCRIPT_URL`,
`GOOGLE_APPS_SCRIPT_SECRET`) — without them, submissions fail with a clear
"not configured" error instead of silently doing nothing. Full request flow
in [`docs/DEVELOPMENT.md`](./docs/DEVELOPMENT.md#forms--the-lead-pipeline).

## SEO

Per-page `metadata` + canonical URLs, Organization JSON-LD (root layout),
Physician JSON-LD (`/betriebsarzt-muenchen`), BreadcrumbList JSON-LD (Leistungen
sub-pages), FAQPage JSON-LD (`/faq`), `sitemap.xml`, `robots.txt`.

## Known open items

Not bugs — see [`docs/DEVELOPMENT.md`](./docs/DEVELOPMENT.md#known-placeholders--open-items)
for the full explanation of each:

- [ ] Legal review of Impressum/Datenschutz text (`app/impressum/page.tsx` — content is filled in, but not yet reviewed by counsel)
- [ ] Cookie/consent banner — only needed if analytics is added later

## Testing

No automated test suite yet. Before committing, run `npm run lint && npm run build`,
and for any layout/mobile change, verify manually in a browser — a green
build only proves the code compiles, not that it looks right.
