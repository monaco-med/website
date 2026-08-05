# Translation — open questions for David

Every judgement call I made where a different choice is defensible. The point
is that David reviews **this list**, not 6,000 words.

Side-by-side view of all copy: **`/uebersetzung-review`** (internal, `noindex`).
Agreed terminology: [`TRANSLATION-GLOSSARY.md`](./TRANSLATION-GLOSSARY.md).

Status key: 🔴 answer needed · 🟡 confirm my choice · ⚪ FYI

---

## ✅ 1. "Arbeitsmedizinische Vorsorge" → "occupational health screening"

**DECIDED (David, Aug 2026): confirmed.** Used site-wide.

| Option | Reads like | Trade-off |
|---|---|---|
| occupational health screening *(my choice)* | plain, searchable | "screening" implies looking *for* disease; Vorsorge is broader |
| health surveillance | the actual UK/HSE legal term | sounds like monitoring employees — poor fit for marketing copy |
| preventive occupational medical care | most accurate | far too heavy to repeat dozens of times |

Readability and search visibility were chosen over strict legal precision, with
one clarifying sentence on the G-Untersuchungen overview page.

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

## ✅ 3. Hosting provider named in the privacy policy

**DECIDED (David, Aug 2026): Google Cloud stays.** § 2 continues to name Google
Cloud EMEA Limited, and the English version mirrors it. Closed — no longer
raised.

⚪ For the record, so it is not lost: the site is currently served by Vercel, so
if a data-protection authority or client ever asks, the named processor and the
actual one differ. David has accepted this; noted here only so nobody
"discovers" it later and reopens it as a bug.

## 🟡 4. "German version is legally binding" notice

Written and shipped — no longer blocking. It sits in a highlighted box directly
above the first heading on `/en/legal-notice`, and reads:

> Please note: this English text is a translation provided for convenience
> only. The German version is the legally binding one.
> If the two versions differ in any way, the German wording prevails. It is
> available at www.monaco-med.de/impressum.

The English legal page is a *convenience translation*, not a second legal
document: it mirrors the German block for block, and the German text stays the
one that counts. Worth a glance from your lawyer at some point, but it does not
hold up the launch.

⚪ Statute, authority and chamber names are kept in German with an English gloss
in brackets — "Bayerische Landesärztekammer (Bavarian State Chamber of
Physicians)" — so they stay findable. Postal addresses are verbatim.

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

## ⚪ 11. Translation status

All 22 pages are translated — 1,062 text fragments, nothing left in German.
Nothing English is publicly visible yet: the whole English tree is `noindex`
until David's review is folded in and `englishLaunched` is switched on.
