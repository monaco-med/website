# Translation — open questions for David

Every judgement call I made where a different choice is defensible. The point
is that David reviews **this list**, not 6,000 words.

Side-by-side view of all copy: **`/uebersetzung-review`** (internal, `noindex`).
Agreed terminology: [`TRANSLATION-GLOSSARY.md`](./TRANSLATION-GLOSSARY.md).

Status key: 🔴 answer needed · 🟡 confirm my choice · ⚪ FYI

---

## ✅ 1. "Arbeitsmedizinische Vorsorge" → **preventive occupational health care**

**SUPERSEDED (David, review round 1, Aug 2026).** He reversed the earlier choice
of "occupational health screening" across 95 fields, and the site now says
**preventive occupational health care** everywhere. Short form inside a
paragraph: "preventive health care". The word "screening" no longer appears.

| Option | Verdict |
|---|---|
| occupational health screening | drafted, then reversed — "screening" implies looking *for* disease |
| health surveillance | rejected — sounds like monitoring employees |
| **preventive occupational health care** | **chosen** — accurate, unambiguous, at the cost of length |

Knock-on: *Pflicht-/Angebots-/Wunschvorsorge* is now **mandatory / optional /
elective health care**. Also reversed in the same round: Betriebsarzt →
**occupational physician**, Arbeitssicherheit → **occupational safety**,
Bahnmedizin → **railway occupational medicine**, Ermächtigte Untersuchungsstelle
→ **recognised examination centre**, ASA → **Occupational Health and Safety
Committee**. All recorded in [`TRANSLATION-GLOSSARY.md`](./TRANSLATION-GLOSSARY.md).

⚪ One paragraph was **rewritten rather than translated**: the wording note on the
G-Untersuchungen overview used to exist purely to justify the word "screening".
It now explains that "preventive occupational health care" renders
*arbeitsmedizinische Vorsorge* and that the old G designations remain in
colloquial use. This is the only place where an argument was replaced rather
than a term swapped.

## 🔴 2. English URLs

Realigned to the terminology David chose in review round 1 — the copy no longer
says "workplace safety", "railway medicine", "screening" or "company doctor", so
four URL families were renamed to match. Free to do now: the English tree is
`noindex` and nothing is indexed. **Confirm this list before go-live** — after
that, changing a URL costs redirects and ranking.

| German | English |
|---|---|
| `/leistungen` | `/en/services` |
| `/leistungen/arbeitsmedizin` | `/en/services/occupational-health` |
| `/leistungen/arbeitssicherheit` | `/en/services/occupational-safety` ← renamed |
| `/leistungen/bahnmedizin` | `/en/services/railway-occupational-medicine` ← renamed |
| `/leistungen/impfungen` | `/en/services/workplace-vaccinations` |
| `/leistungen/vorsorge-g-untersuchungen` | `/en/services/occupational-health-care` ← renamed |
| `…/g20` … `…/g42` | unchanged (G-codes kept) |
| `…/asbest` | `…/asbestos` |
| `/betriebsarzt-muenchen` | `/en/occupational-physician-munich` ← renamed |
| `/fuer-unternehmen` | `/en/for-companies` |
| `/betreuungsbedarf` | `/en/assess-your-needs` |
| `/rueckruf` | `/en/request-a-callback` |
| `/kontakt` | `/en/contact` |
| `/impressum` | `/en/legal-notice` |

⚠️ **One of these is a genuine trade-off, and it is David's call.**
`company-doctor-munich` → `occupational-physician-munich` gains consistency with
the copy but loses search volume: "company doctor" is what people type into
Google, "occupational physician" is what the profession calls itself. Since no
page says "company doctor" any more, the rename is the consistent choice — but
keeping the old slug would be defensible purely on search grounds.

## ✅ 3. Hosting provider named in the privacy policy

**DECIDED (David, Aug 2026): Google Cloud stays.** § 2 continues to name Google
Cloud EMEA Limited, and the English version mirrors it. Closed — no longer
raised.

⚪ For the record, so it is not lost: the site is currently served by Vercel, so
if a data-protection authority or client ever asks, the named processor and the
actual one differ. David has accepted this; noted here only so nobody
"discovers" it later and reopens it as a bug.

## ✅ 4. "German version is legally binding" notice

**APPROVED (David, Aug 2026)** — he returned no corrections on the legal page and
confirmed it as read. Closed. It sits in a highlighted box directly
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

## ✅ 5. Terms — settled in review round 1

Every term on the earlier "please sanction" list has been decided by David and
applied site-wide. The current agreed set lives in
[`TRANSLATION-GLOSSARY.md`](./TRANSLATION-GLOSSARY.md); the reversals are
summarised under point 1 above. Nothing outstanding here.

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
