# Developer Guide

This is the deep-dive doc for working on the MonacoMed website. Start with the
[README](../README.md) for a quick orientation; come here when you need to
actually make a change.

## Table of contents

1. [Architecture at a glance](#architecture-at-a-glance)
2. [Directory guide](#directory-guide)
3. [Routing conventions](#routing-conventions)
4. [Component catalog](#component-catalog)
5. [Content model](#content-model)
6. [Forms & the lead pipeline](#forms--the-lead-pipeline)
7. [SEO & structured data](#seo--structured-data)
8. [Design system](#design-system)
9. [Fonts](#fonts)
10. [Environment variables](#environment-variables)
11. [Deployment](#deployment)
12. [How to add a new service page](#how-to-add-a-new-service-page)
13. [Known placeholders & open items](#known-placeholders--open-items)
14. [Testing & quality gates](#testing--quality-gates)

## Architecture at a glance

This is a **content-driven marketing site**, not an application: there is no
database, no CMS, and no auth. Every page's German copy lives directly in its
`page.tsx` as JSX. Next.js's App Router prerenders all routes to static HTML
at build time (`○ (Static)` in the `next build` output) — the only dynamic
part of the site is the `/api/lead` route, which handles form submissions
server-side.

Because there's no CMS, **editing content means editing the `.tsx` file for
that page directly** — there's no separate "content" layer to look for.

## Directory guide

```
app/
  layout.tsx            Root layout: fonts, <Header>/<Footer>, Organization JSON-LD, default metadata
  globals.css            Every design token and every shared CSS rule in the site (no CSS modules, no Tailwind)
  not-found.tsx           404 page
  sitemap.ts / robots.ts  Generated /sitemap.xml and /robots.txt (Next.js file conventions)
  api/lead/route.ts       Server-side proxy: validates a lead submission, forwards it to the Google Apps Script mailer
  <route>/page.tsx        One folder per route — see Routing conventions below
components/               Shared, reusable presentational components (see Component catalog)
lib/
  routes.ts               Typed map of every internal URL — the single source of truth for links
  site.ts                 Site-wide constants: name, address, phone/email, physician name
  gsap.ts                 GSAP + ScrollTrigger registration (import gsap from here, not the gsap package directly)
  submitLead.ts            Shared client-side helper both lead forms use to POST /api/lead
public/
  images/                  Portrait photo + favicon source
  *.png/*.ico              Favicon files (Next.js file-convention icons, see app/icon.png etc.)
google-apps-script/
  Code.gs                  The actual form-mailer backend, deployed separately as a Google Apps Script web app
  README.md                How to deploy/redeploy Code.gs
design_handoff_monacomed_website/
  Original design reference (static HTML prototypes + DEPLOY-NOTES.md). Historical reference only —
  do not deploy or link to it publicly; it predates the current implementation and is not kept in sync.
design-system.md            Extracted visual design system (colors, type, spacing, assets) for reuse in other projects
docs/DEVELOPMENT.md          This file
```

## Routing conventions

Every internal URL is defined once in `lib/routes.ts` and imported everywhere
else — `<Link href={routes.betreuungsbedarf}>` rather than a hardcoded
`"/betreuungsbedarf"` string. When you rename or move a route, `routes.ts` is
the only place that needs to change (plus, if it's a real page, the
`app/**/page.tsx` folder itself, `app/sitemap.ts`, and the nav lists in
`Header.tsx`/`Footer.tsx` if the page should be discoverable there).

Some `routes.ts` entries aren't dedicated pages — they're anchors into
another page (e.g. `leitung: "/#leitung"`, `datenschutz: "/impressum#datenschutz"`,
`digitaleProzesse: "/leistungen#digitale-prozesse"`). These deliberately don't
appear in `sitemap.ts`, since the page they anchor into is already listed.

Current route map (see `lib/routes.ts` for the exhaustive, always-current
list — this table is a snapshot for orientation):

| Route | Page |
|---|---|
| `/` | Homepage |
| `/leistungen` | Services overview |
| `/leistungen/arbeitsmedizin` | Arbeitsmedizin |
| `/leistungen/arbeitssicherheit` | Arbeitssicherheit |
| `/leistungen/bahnmedizin` | Bahnmedizin |
| `/leistungen/impfungen` | Impfungen im Unternehmen |
| `/leistungen/vorsorge-g-untersuchungen` | G-Untersuchungen overview |
| `/leistungen/vorsorge-g-untersuchungen/{g20,g24,g25,g26,g37,g41,g42,asbest}` | 8 individual exam-type detail pages |
| `/betriebsarzt-muenchen` | Local-SEO landing page (also carries Physician JSON-LD) |
| `/fuer-unternehmen` | Multi-site / larger-company pitch |
| `/betreuungsbedarf` | Primary lead form (`ContactForm`) |
| `/rueckruf` | Callback request form (`CallbackForm`) |
| `/faq` | FAQ (also emits FAQPage JSON-LD) |
| `/kontakt` | Contact chooser (routes to `/betreuungsbedarf` or `/rueckruf`) |
| `/impressum` | Impressum & Datenschutz (`#datenschutz` anchor) |

## Component catalog

All shared components live flat in `components/` (no subfolders). Each has a
JSDoc comment above its export describing its purpose and any non-obvious
props — read the component file itself for the authoritative description.
Quick orientation:

**Layout/shell:** `Header`, `Footer` — persistent chrome rendered once in
`app/layout.tsx`.

**Page-building blocks** (used across most `page.tsx` files):
- `SectionHead` — label + title + optional lead paragraph + optional CTA link, the standard section header.
- `Reveal` — GSAP scroll-into-view fade/slide wrapper. Nearly every list/grid component renders through this.
- `Breadcrumbs` / `BreadcrumbJsonLd` — visible trail + matching structured data. Always update both together.
- `CtaBand` — the dark full-width closing CTA banner most pages end with.

**Content grids/lists** (pick based on what shape the copy is in):
- `Tiles` — general-purpose card grid (title + rich text per card).
- `Steps` — numbered process steps.
- `WhyLines` — the "Warum MonacoMed?" numbered differentiator list.
- `ReasonGrid` — title+text benefit cards.
- `CheckList` — single-column checklist, best for odd-length lists.
- `PainGrid` / `SectorGrid` — two-column grids of short plain strings (problem statements / industry tags).
- `ExamList` — numbered medical-exam-type list (used on the arbeitsmedizin/G-Untersuchungen pages).
- `Matrix` / `MatrixLinks` — bordered two-column comparison table, or a table of link rows.
- `FaqList` — accordion FAQ list, optionally emitting FAQPage JSON-LD.
- `LogoWall` — homepage "Unternehmen, die MonacoMed vertrauen" reference section (text-only company names, despite the name — see its file comment for why).

**Forms:**
- `ContactForm` — "Betreuungsbedarf einschätzen" (homepage + `/betreuungsbedarf`).
- `CallbackForm` — "Rückruf vereinbaren" (`/rueckruf`).

Both submit through `lib/submitLead.ts` — see
[Forms & the lead pipeline](#forms--the-lead-pipeline).

## Content model

There is no i18n system — the entire site is German, and copy is written
directly into JSX strings. Two things to know when editing copy:

1. **Use typographic quotes** (`„…"`), not straight `"…"`, inside JSX text —
   a straight double quote inside a JSX string/attribute can break the
   string literal or trip the `react/no-unescaped-entities` ESLint rule.
   This has caused real build failures in this project before.
2. **Long unbroken German compound words** (e.g.
   `Tauglichkeitsuntersuchungen`) can overflow narrow mobile viewports if
   placed in a tightly `max-width`-constrained heading. `app/globals.css`
   has a global `overflow-wrap: break-word` safety net (in the universal `*`
   reset) specifically for this, but it's still worth sanity-checking new
   long headings on a narrow (375px/320px) viewport.

## Forms & the lead pipeline

Both forms follow the identical flow:

```
ContactForm/CallbackForm (client)
  → lib/submitLead.ts (fetch POST /api/lead)
    → app/api/lead/route.ts (server; validates required fields, adds shared secret)
      → Google Apps Script web app (google-apps-script/Code.gs)
        → MailApp.sendEmail(...) → info@monaco-med.de
```

The Apps Script URL and shared secret never reach the browser — they're
server-only env vars used inside `app/api/lead/route.ts`. Without them set,
the API route returns a `503` with a clear "not configured" error rather than
silently failing.

To change what fields a form collects: update the form's JSX (`name`
attributes), the `REQUIRED_FIELDS` entry for that `LeadType` in
`app/api/lead/route.ts` if required fields changed, and the corresponding
`send*Mail` function in `google-apps-script/Code.gs` — then **redeploy the
Apps Script** (a code change to `Code.gs` in this repo does not update the
live script by itself; see `google-apps-script/README.md`).

## SEO & structured data

- Every page sets its own `export const metadata` (title, description,
  canonical URL via `alternates.canonical`).
- Root layout injects `MedicalBusiness` JSON-LD site-wide.
- `/betriebsarzt-muenchen` additionally injects Physician JSON-LD.
- Leistungen sub-pages inject `BreadcrumbList` JSON-LD via
  `<BreadcrumbJsonLd>` — the G-Untersuchungen child pages use a 3-level
  trail (Leistungen → G-Untersuchungen overview → this page), everything
  else uses 2-level (Leistungen → this page).
- `/faq` (and any other page using `<FaqList jsonLd>`) injects `FAQPage`
  JSON-LD — only one such block per page is valid, don't add a second.
- `app/sitemap.ts` / `app/robots.ts` are Next.js file-convention routes;
  new pages must be added to `sitemap.ts` manually.

## Design system

`app/globals.css` is the single stylesheet for the entire site — plain CSS
with design tokens as custom properties under `:root` (colors, `--maxw`,
etc.), no CSS-in-JS, no Tailwind, no CSS modules. Component-specific classes
live in the same file, organized by section with `/* ─── comment ─── */`
dividers.

For a full extraction of every color/type/spacing value (useful if another
project needs to visually match this one), see
[`design-system.md`](../design-system.md) in the repo root.

The one non-obvious layout convention: almost every mobile-specific override
lives in a single `@media (max-width: 920px)` block near the end of
`globals.css`, rather than scattered per-component media queries. When
adding a new component that needs to collapse to one column on mobile, add
its class to the `grid-template-columns: 1fr` selector list there rather
than writing a new media query block.

## Fonts

Archivo (headings), Inter (body), and IBM Plex Mono (labels/eyebrow text) are
loaded via `next/font/google` in `app/layout.tsx`. This self-hosts them at
build time — there's no `@font-face` block to maintain and no runtime
request to Google's font CDN. To change weights or add a font, edit the
loader calls in `app/layout.tsx` and reference the new `--font-*` CSS
variable in `globals.css`.

## Environment variables

See `.env.example` for the authoritative list. Currently:

| Variable | Required for | Notes |
|---|---|---|
| `GOOGLE_APPS_SCRIPT_URL` | Form submissions | The deployed Apps Script web app URL |
| `GOOGLE_APPS_SCRIPT_SECRET` | Form submissions | Must exactly match `SHARED_SECRET` in `google-apps-script/Code.gs` |

Copy `.env.example` to `.env.local` (gitignored) and fill in both to test
forms locally. Without them, the dev server runs fine but form submissions
return a "not configured" error.

## Deployment

The site auto-deploys via **Vercel** on every push to `main`, serving
`https://www.monaco-med.de` (apex `monaco-med.de` redirects to `www`). There
is no separate staging environment — pushing to `main` is a production
deploy. Set the two environment variables above in the Vercel project
settings (not just `.env.local`) for forms to work in production.

Note: as of this writing, the Vercel project isn't visible from every team
member's Vercel CLI login — if you need to inspect build logs or project
settings directly and can't find the project, that's likely an account/team
access issue rather than a missing deployment; confirm with whoever
originally connected the domain.

## How to add a new service page

The G-Untersuchungen section (`app/leistungen/vorsorge-g-untersuchungen/`) is
the most recently added and most template-able example — 8 near-identical
detail pages under one overview page. To add a similar detail page:

1. Add a route to `lib/routes.ts`.
2. Create `app/.../your-page/page.tsx` following the existing sibling pages'
   shape: hero (with `BreadcrumbJsonLd` + `Breadcrumbs`, using the `parent`
   prop if it's nested under a category overview page) → 2–4 content
   sections (`SectionHead` + `CheckList` or a `.prose` div, depending on
   whether the source copy is a bullet list or paragraphs) → closing
   `CtaBand`.
2. Add the route to `app/sitemap.ts`.
3. Link to it from wherever it should be discoverable — typically a `Tiles`
   entry on the category overview page, and/or `Header.tsx`/`Footer.tsx` if
   it's a top-level service.
4. Run `npm run lint && npm run build` before committing.

## Known placeholders & open items

These are things a new developer should know are **intentionally
incomplete**, not bugs:

- **No phone number is published, by choice.** The Impressum's Kontakt
  section intentionally lists only an email (`siteConfig.email`) — no
  phone line. `lib/site.ts` still defines a `siteConfig.phone` placeholder
  (`"+49 89 000000"`), but it's **unused anywhere in the codebase**; leave
  it unused unless the practice later decides to publish a number.
- **Impressum & Datenschutz text has no bracketed placeholders or draft
  banner left**, but it has still not had a dedicated legal sign-off —
  treat the underlying text as reviewed-by-engineering, not
  reviewed-by-counsel. The Verantwortlicher and Hosting paragraphs point
  readers to `siteConfig.email` rather than naming a specific provider.
- **No cookie/consent banner** — intentional, since the site currently uses
  no analytics or marketing cookies (stated explicitly in the Datenschutz
  text). Only needed if analytics is added later.
- **The footer's "Cookies" link points at the same anchor as "Datenschutz"**
  (`routes.datenschutz`) rather than a dedicated cookies page — consistent
  with there being no cookie banner yet, not an oversight to "fix" without
  also deciding whether a dedicated cookie policy is needed.
- **`design_handoff_monacomed_website/`** is the original static-HTML design
  reference the site was built from. It's kept for historical reference but
  is not maintained in sync with the live site — don't treat it as
  documentation of current behavior.

## Testing & quality gates

There is currently no automated test suite (no unit/integration/E2E tests).
Quality gates before committing:

```bash
npm run lint     # ESLint (eslint.config.mjs)
npm run build    # Full production build — also catches type errors (tsc runs as part of next build)
```

For UI/mobile changes, manually verify in a browser — a passing build only
proves the code compiles, not that a layout change looks right. See the
"Mobile" note in globals.css section above; the `@media (max-width: 920px)`
block is the one place responsive behavior is defined, so it's the first
place to check when something looks wrong on a phone.
