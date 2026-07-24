# MonacoMed — Visual Design System

Extracted directly from the live source of this repo (`app/globals.css`, `app/layout.tsx`, `lib/site.ts`, `components/Header.tsx`, `components/LogoWall.tsx`). No values are guessed — anything not present in the codebase is marked "not defined".

---

## 1) COLORS

All variables are declared in `app/globals.css` under `:root` (lines 1–16). This is a **plain-CSS custom-property system** — there is no Tailwind config and no separate theme/token file.

| Role | Hex | CSS variable |
|---|---|---|
| Primary / dark green (brand) | `#13443a` | `--green` |
| Primary hover / darkest green | `#0c2e27` | `--green-d` |
| Accent / emerald-bright green | `#2f8f74` | `--green-br` |
| Heading color (on light sections) | `#0c2e27` | `--green-d` (used directly as heading color, e.g. `.hero h1`, `.sec-head h2`) |
| Body text | `#11201c` | `--ink` |
| Muted / secondary text | `#46554f` | `--ink-soft` |
| Extra-muted text (labels, phone numbers, helper text) | `#7c8a83` | `--mute` |
| Page background | `#f4f6f5` | `--bg` |
| Card / surface background (header, panels, subnav) | `#ffffff` | `--panel` |
| Alternate section background ("sand") | `#eef1ef` | `--sand` |
| Borders / dividers | `#dde4e0` | `--line` |
| On-dark body text (used on `--green`-background sections) | `#a9c8bd` | `--ondark` |
| On-dark dimmed text | `#6f9385` | `--ondark-dim` |
| On-dark label/accent text | `#7fc2ab` | `--ondark-lbl` |
| Success | not defined (no success color exists anywhere in the codebase) | — |
| Warning | not defined | — |
| Error | `#b3402f` | none — hardcoded literal in `.error-text` (globals.css:1241), no CSS variable |
| Link color | inherits `--ink` by default (`a { color: inherit }`); contextual link colors use `--green` (e.g. `.field-check a`, hover states) | — |
| Button (primary) background | `#13443a` | `--green` |
| Button (primary) hover background | `#0c2e27` | `--green-d` |
| Button (ghost) | transparent bg, `#13443a` border/text | `--green` |
| Button (ghost) hover | bg becomes `#13443a`, text `#fff` | `--green` |
| Button (light, used on dark sections) | bg `#ffffff`, text `#0c2e27` | `--green-d` |
| Button (light) hover | bg `#eef1ef` | `--sand` |

No Tailwind, no `tailwind.config.*`, no separate design-token JSON — colors live only as the 13 CSS custom properties above plus a small number of hardcoded literals (`#fff`, `#b3402f`, and `rgba(11, 32, 27, …)` for shadows).

---

## 2) TYPOGRAPHY

Fonts are loaded via **`next/font/google`** in `app/layout.tsx` — i.e. self-hosted-at-build-time by Next.js (Next downloads the Google Fonts files at build and serves them from your own domain; there is no runtime call to fonts.googleapis.com and no `<link>`/`@import` tag in the HTML).

- **Heading font:** Archivo — Google Font, self-hosted via `next/font/google`. Fallback stack as declared in CSS: `var(--font-archivo), sans-serif`.
- **Body font:** Inter — Google Font, self-hosted via `next/font/google`. Fallback stack: `var(--font-inter), sans-serif`.
- **Monospace / label font:** IBM Plex Mono — Google Font, self-hosted via `next/font/google`. Fallback stack: `var(--font-mono), monospace`.

Loader config (`app/layout.tsx`, exact source):
```ts
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});
```
This is applied as CSS variable classes on `<html>`: `className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}`.

**No `@font-face` block and no `@import`/`<link>` tag exist in this repo** — `next/font` generates those automatically at build time into `.next/`, which is gitignored and not part of the source. There are also **no `.woff2`/`.woff` files checked into the repo** (self-hosting happens transparently via the Next.js build pipeline, not via manually vendored font files). If another app wants to replicate this exactly without Next.js, it should pull these 3 families directly from Google Fonts at the weights listed above.

**Weights actually used:**
- Archivo: 500, 600, 700, 800 (700 = default heading weight; 800 = brand/wordmark and a few emphasis spots; 600 = sub-headings/CTAs-in-headings)
- Inter: 400 (body default), 500, 600
- IBM Plex Mono: 400, 500 (used for eyebrow labels, coverage strings, phone numbers, form labels — never body copy)

**Base body:**
- `font-family: var(--font-inter), sans-serif`
- `font-size`: not explicitly set on `body` (browser default, 16px) — most component-level text overrides it explicitly (13–17px range)
- `line-height: 1.6` (body); headings use `line-height: 1.08`
- `color: var(--ink)` (`#11201c`)

**h1 / h2 / h3 — shared base rule** (globals.css:44–51):
```css
h1, h2, h3 {
  font-family: var(--font-archivo), sans-serif;
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.02em;
}
```
Font-size is **not** globally fixed for h1–h3 — every section sets its own responsive `clamp()` size. Representative values from the actual CSS:
- Homepage hero `h1` (`.hero .main h1`): `clamp(36px, 4.2vw, 58px)`
- Sub-page hero `h1` (`.hero h1`): `clamp(34px, 3.8vw, 54px)`
- Section heading `h2` (`.sec-head h1, .sec-head h2`): `clamp(27px, 3vw, 40px)`
- `.hero .sub-strong` (a bold sub-headline used under h1, Archivo not Inter): `20px / 600`
- `.contact-side h3`: `20px`, color `--green-d`

**h4 — no global rule exists.** h4 is only styled per-component (each with its own scoped selector, all Archivo/600–700 weight, sizes ranging 15–17px): `.tile h4`, `.step h4`, `.exam h4`, `.faq-item > summary h4`. There is no bare `h4 {}` rule, so an h4 outside those components would fall back to browser default styling in the Inter body font (h4 is not included in the `h1, h2, h3` selector).

---

## 3) LOGO / WORDMARK

**There is no SVG wordmark file anywhere in this repo.** The "Monaco*Med*" wordmark is **not an image** — it is live text, rendered with CSS styling (`components/Header.tsx`):
```tsx
<Link className="brand" href={routes.home}>
  Monaco<i>Med</i>
</Link>
```
styled as (globals.css:87–98):
```css
.brand {
  font-family: var(--font-archivo), sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--green-d);   /* #0c2e27 */
  text-transform: uppercase;
}
.brand i {
  font-style: normal;
  color: var(--green-br);  /* #2f8f74 — only "Med" is the bright-green accent color */
}
```
Same pattern is reused in `components/LogoWall.tsx` (`<span className="mm">Monaco<i>Med</i></span>`).

**Confirmed: no `.svg` files of any kind exist in this repository** (checked `public/`, `app/`, and the whole tree excluding `node_modules`/`.next`/`.git`).

**Image logo/icon assets that do exist** (all raster PNG/ICO):

| Path | Role | Dimensions |
|---|---|---|
| `app/icon.png` | Next.js file-convention favicon (auto-wired, no code reference needed) | 512×512 |
| `app/apple-icon.png` | Next.js file-convention Apple touch icon | 180×180 |
| `app/favicon.ico` | Next.js file-convention favicon fallback | 16×16 & 32×32 (multi-res .ico) |
| `public/logo-mm.png` | "MM" logomark source/master file — **not referenced in any code**, appears to be the source asset the favicons above were generated from | 1254×1254 |

**Update (2026-07-24): the client-reference logos described below have been removed.** Per client request, the homepage "Unternehmen, die MonacoMed vertrauen" section (`components/LogoWall.tsx`) no longer renders any logo images — it now renders company names as styled text (`.ref-grid`/`.ref-cell` in `app/globals.css`). The PNG files that used to back that section (`logo-wsw`, `logo-jobrad-loop`, `logo-betz-chrom`, `logo-o2-surftown`, `logo-deepdrive`, `logo-ohb`, `logo-ems`, `logo-torqeedo`) have been deleted from `public/images/` and are no longer part of this design system. There are currently **no third-party client logo assets in this repo at all** — only the favicon/wordmark assets listed above are relevant if replicating this design elsewhere.

---

## 4) COMPONENT TOKENS

**Border-radius values in use** (no single spacing/radius scale variable — these are the literal values found across the stylesheet):
- `8px` — subnav dropdown links
- `9px` — form inputs (`.field input/select/textarea`)
- `10px` — mobile burger button
- `12px` — subnav dropdown panel (`.subpanel`)
- `14px`, `16px` — larger card/panel elements
- `40px` — buttons (`.btn`) — fully pill-shaped

**Box-shadow values:**
- `0 14px 32px rgba(11, 32, 27, 0.14)` — desktop subnav dropdown panel
- `0 16px 30px rgba(11, 32, 27, 0.12)` — mobile nav panel
- (no shadow used on cards/tiles elsewhere — flat design relying on `--line` borders instead)

**Spacing scale:** not defined as tokens/variables — spacing is ad hoc per component. Recurring literal values worth noting as a de-facto scale: `6px, 8px, 10px, 12px, 14px, 16px, 18px, 20px, 28px, 36px, 40px, 44px, 84px`. Section vertical rhythm: `section.pad { padding: 84px 0; }`. Page container: `.wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 36px; }`.

**Main content container max-width:** `--maxw: 1280px` (applied via the `.wrap` class used on every section).

**Button style** (`.btn`, globals.css:264–305):
```css
.btn {
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  padding: 11px 20px;
  transition: 0.18s;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-family: inherit;   /* i.e. Inter, NOT Archivo — buttons use the body font */
}
.btn-primary { background: var(--green); color: #fff; }
.btn-primary:hover { background: var(--green-d); }
.btn-ghost   { border: 1px solid var(--green); color: var(--green); background: transparent; }
.btn-ghost:hover { background: var(--green); color: #fff; }
.btn-light   { background: #fff; color: var(--green-d); }
.btn-light:hover { background: var(--sand); }
.btn:disabled { opacity: 0.6; cursor: default; }
```

**Link style:** default `a { color: inherit; text-decoration: none; }` — links are unstyled/inherit color by default and rely on context (nav links go `--ink-soft` → `--green` on hover; several inline text links are explicitly `text-decoration: underline` with `color: var(--green)`, e.g. `.field-check a`).

**Form inputs** (`.field input/select/textarea`): `border: 1px solid var(--line)`, `border-radius: 9px`, `padding: 11px 12px`, `font-size: 14px`, `background: var(--bg)`; focus state: `outline: 2px solid var(--green-br)`, `border-color: transparent`.

---

## 5) NOTES

**Overall style:** a clean, editorial, forest-green-and-off-white B2B/medical brand system — flat surfaces (no gradients, minimal shadows), a warm-white/sand background palette, pill-shaped buttons, a monospace font reserved exclusively for eyebrow labels/data-like details (phone numbers, tags, form labels) contrasted against a bold serif-adjacent grotesk (Archivo) for headings and a neutral humanist sans (Inter) for body copy — projecting precision and calm trustworthiness appropriate for occupational medicine.

**Tagline:** confirmed exact text, verbatim from `app/page.tsx` (homepage H1): **"Betriebliche Gesundheit einfach gut organisiert."**
