# Handoff: MonacoMed – Website (13 Seiten)

## Overview
Komplette Marketing-Website für **MonacoMed**, eine Praxis für Arbeitsmedizin in München (Dr. med. univ. David Manghabati). Zielgruppe: HR-Entscheider, die einen Betriebsarzt suchen. Sprache: Deutsch. 13 Seiten, untereinander verlinkt.

## About the Design Files
Die Dateien in `pages/` sind **Design-Referenzen in HTML** (Prototypen aus einem Design-Tool, Format `.dc.html`). Sie zeigen Look & Verhalten, sind aber **kein Produktionscode**. Aufgabe: Diese Designs im Ziel-Stack nachbauen. Existiert noch kein Codebase, empfiehlt sich ein statischer Stack (z. B. Astro oder Next.js static export) — die Seite ist inhaltsgetrieben, SEO-kritisch, ohne App-Logik.

Jede `.dc.html` enthält im `<helmet>`-Block das komplette CSS der Seite und darunter das Markup. Template-Reste wie `{{ theme }}` oder `<sc-if>` (nur in homepage.dc.html) können ignoriert werden — maßgeblich ist das statische Markup. Interne Links zeigen auf die `.dc.html`-Dateinamen; im Zielprojekt durch sprechende URLs ersetzen (siehe Routen-Tabelle).

## Fidelity
**High-fidelity.** Farben, Typografie, Abstände, Hover-Zustände und Texte sind final (Stand Feedback-Runde 3 mit dem Kunden). Pixel-genau nachbauen; Texte exakt übernehmen.

## Routen (empfohlen)
| Datei | Route |
|---|---|
| homepage.dc.html | / |
| Leistungen.dc.html | /leistungen |
| Arbeitsmedizin.dc.html | /leistungen/arbeitsmedizin |
| Arbeitssicherheit.dc.html | /leistungen/arbeitssicherheit |
| Bahnmedizin.dc.html | /leistungen/bahnmedizin |
| Impfungen-im-Unternehmen.dc.html | /leistungen/impfungen |
| Betriebsarzt-Muenchen.dc.html | /betriebsarzt-muenchen |
| Fuer-Unternehmen.dc.html | /fuer-unternehmen |
| Betreuungsbedarf-einschaetzen.dc.html | /betreuungsbedarf |
| Rueckruf-vereinbaren.dc.html | /rueckruf |
| FAQ.dc.html | /faq |
| Kontakt.dc.html | /kontakt |
| Impressum.dc.html | /impressum (enthält #datenschutz) |

## Design Tokens
Farben (CSS Custom Properties, in jeder Datei identisch):
- `--bg: #f4f6f5` Seitenhintergrund · `--panel: #ffffff` Karten/Header
- `--ink: #11201c` Text · `--ink-soft: #46554f` Sekundärtext · `--mute: #7c8a83`
- `--line: #dde4e0` Hairlines · `--sand: #eef1ef` helle Bänder
- `--green: #13443a` Primär (Buttons) · `--green-d: #0c2e27` dunkel (Footer, CTA-Band) · `--green-br: #2f8f74` Akzent (Labels, Hover)
- Layout: `--maxw: 1280px`, Section-Padding 84px (kompakte Bänder 44–64px)

Typografie (Google Fonts):
- **Archivo** 500–800 — Headlines, Brand (H1 clamp(34px,3.8vw,54px); H2 clamp(27px,3vw,40px))
- **Inter** 400–600 — Fließtext (14–17px)
- **IBM Plex Mono** 400–500 — Mono-Labels (12px, uppercase, letter-spacing .08em, Farbe --green-br), Zahlen, Breadcrumbs

Wiederkehrende Muster:
- Buttons: border-radius 40px; primary `--green`→hover `--green-d`; ghost 1px Rahmen `--green`→invertiert bei Hover
- Header: fixed, 70px, weiß, 1px `--line` unten; Body hat padding-top:71px; scroll-padding-top:86px
- Nav: Leistungen mit Hover-Dropdown (6 Einträge); mobil (≤920px) Burger via <details>
- Brand-Schriftzug: „MONACO" in `--green-d` + „MED" in `--green-br` (kursiv-Tag <i> ohne Kursiv-Stil)
- Karten: 1px `--line`, radius 12–14px, weiß auf `--bg` oder `--sand`
- FAQ: <details>-Accordion, [ + ]/[ − ]-Marker in Mono
- Formulare: Demo — Submit zeigt nur #danke-Box (`:target`), kein Backend

## Interactions & Behavior
- Hover-Dropdown Nav (CSS :hover/:focus-within, kein JS)
- Burger-Menü: <details>/<summary>, kein JS
- Reveal-Animationen: Klasse `.reveal` (IntersectionObserver im Original; im Zielprojekt optional nachbauen oder weglassen)
- Formulare: 3 Stück (Betreuungsbedarf, Rückruf, Kontakt auf homepage) — im Zielprojekt an echtes Backend/E-Mail anbinden, DSGVO-Checkbox ergänzen
- Smooth scroll + Anker (#leitung, #kontakt, #datenschutz …)

## SEO (bereits im Markup)
- Jede Seite: <title> + <meta name="description"> (im <helmet>-Block)
- Eine H1 pro Seite; Breadcrumbs auf Detailseiten (Mono-Stil)
- Beim Live-Gang ergänzen: canonical, OG-Tags, sitemap.xml, robots.txt, Schema.org (LocalBusiness/Physician auf /betriebsarzt-muenchen, FAQPage auf /faq, BreadcrumbList) — siehe DEPLOY-NOTES.md

## Assets
`assets/`: david-manghabati.jpg (Portrait, Ärztliche Leitung) + 8 Firmenlogos (PNG, werden grayscale gerendert: filter:grayscale(1), opacity .7, hover farbig). Paulaner erscheint bewusst als Text-Wortmarke (kein Logo vorhanden). Externe Fonts vor Launch lokal hosten (DSGVO).

## Offene Punkte (vom Kunden noch ausstehend)
- Echte Telefonnummer/E-Mail (aktuell Platzhalter)
- Impressum/Datenschutz: juristisch geprüfte Texte (aktuell markierter Entwurf)
- Formular-Ziel (E-Mail vs. Praxissoftware)
- Ggf. weitere Logos; Phase 2: eigene Seiten für Gesundheitsmanagement & Digitale Prozesse

## Files
- `pages/` — alle 13 Seiten (Design-Referenz)
- `assets/` — Portrait + Logos
