# Translation — open questions for David

Every judgement call I made where a different choice is defensible. The point
is that David reviews **this list**, not 6,000 words.

Side-by-side view of all copy: **`/uebersetzung-review`** (internal, `noindex`).
Agreed terminology: [`TRANSLATION-GLOSSARY.md`](./TRANSLATION-GLOSSARY.md).

Status key: 🔴 answer needed · 🟡 confirm my choice · ⚪ FYI

---

## 🔴 1. "Arbeitsmedizinische Vorsorge" → "occupational health screening"

**Appears on nearly every page — decide this first, it is a site-wide edit later.**

| Option | Reads like | Trade-off |
|---|---|---|
| occupational health screening *(my choice)* | plain, searchable | "screening" implies looking *for* disease; Vorsorge is broader |
| health surveillance | the actual UK/HSE legal term | sounds like monitoring employees — poor fit for marketing copy |
| preventive occupational medical care | most accurate | far too heavy to repeat dozens of times |

I chose readability and search visibility over legal precision, and added one
clarifying sentence on the overview page. **Is that the right trade for you?**

## 🔴 2. English URLs

These become public addresses and are expensive to change once indexed.

| German | English |
|---|---|
| `/leistungen` | `/en/services` |
| `/leistungen/arbeitsmedizin` | `/en/services/occupational-health` |
| `/leistungen/arbeitssicherheit` | `/en/services/workplace-safety` |
| `/leistungen/bahnmedizin` | `/en/services/railway-medicine` |
| `/leistungen/impfungen` | `/en/services/workplace-vaccinations` |
| `/leistungen/vorsorge-g-untersuchungen` | `/en/services/occupational-health-screenings` |
| `…/g20` … `…/g42` | unchanged (G-codes kept) |
| `…/asbest` | `…/asbestos` |
| `/betriebsarzt-muenchen` | `/en/company-doctor-munich` |
| `/fuer-unternehmen` | `/en/for-companies` |
| `/betreuungsbedarf` | `/en/assess-your-needs` |
| `/rueckruf` | `/en/request-a-callback` |
| `/kontakt` | `/en/contact` |
| `/impressum` | `/en/legal-notice` |

## 🔴 3. Google Cloud vs Vercel in the privacy policy

**Blocks the English legal pages.** § 2 of the Datenschutzerklärung names
**Google Cloud EMEA Limited** as the host. The site actually runs on **Vercel**.

Please settle this in the German original first — otherwise we copy a factual
error about data processing into a second legal document.

## 🔴 4. "German version is legally binding" notice

Needs your lawyer's wording before the English legal pages can ship. Proposed
placement: directly under the "Legal notice & privacy" heading.

---

## 🟡 5. Terms I'd like you to sanction

| German | My English | Why I hesitated |
|---|---|---|
| Betriebsarzt | company doctor | "occupational physician" is more correct, but far less searched |
| Betreuung | support | "care" reads clinical; this is a service relationship |
| Fachkraft für Arbeitssicherheit | occupational safety specialist | no exact UK/US equivalent exists |
| Angebotsvorsorge | offered screening | clumsy in English, but "optional" wrongly implies the employee initiates it |
| Wunschvorsorge | screening on request | same problem in reverse |
| Ermächtigte Untersuchungsstelle | authorised examination centre | "accredited" would imply a different legal status |
| Vorsorgekataster | screening register | "cadastre" is a false friend — it means land registry |
| ASA-Sitzung | occupational safety committee (ASA) | kept the German abbreviation after glossing it |

## 🟡 6. Headline rewritten rather than translated

German: *„Betriebliche Gesundheit einfach gut organisiert."*
English: **"Workplace health, simply well organised."**

A literal translation ("Occupational health simply well organised") is clumsy.
Mine keeps the rhythm but is slightly less formal. Happy to change it.

Same applies to *„Loslegen statt lange abstimmen"* → **"Get started instead of
drawn-out planning"**, which is a rewrite rather than a translation.

## 🟡 7. Statute names kept in German

ASiG, DGUV Vorschrift 2, ArbMedVV, TfV, EBO, VDV 714 stay German with an
English gloss on first use — translating them makes them impossible to look up.
G-codes (G20–G46) likewise stay verbatim.

## 🟡 8. Form dropdown values now submit in English

The role and time-slot dropdowns send their English labels, so enquiries from
the English form arrive with "Management" rather than "Geschäftsführung". Every
notification email now carries a **"Sprache der Anfrage"** line, so it is always
clear which language someone wrote in.

## 🟡 9. "Assess your requirements" vs the URL `/en/assess-your-needs`

The button says *requirements*, the URL says *needs*. Harmless, but I can align
them if you'd prefer.

---

## ⚪ 10. British spelling

organised, centre, programme — the audience is European. Say the word if you
want US spelling instead.

## ⚪ 11. Not yet translated

Still German-only at the time of writing: the four service pages, the
G-Untersuchungen overview and its eight exam pages, Für Unternehmen,
Betriebsarzt München, the Leistungen overview, and both legal pages. Nothing
English is publicly visible — the whole English tree is `noindex` until it is
complete.
