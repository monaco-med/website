import type { Metadata } from "next";
import { commonDe } from "@/content/de/common";
import { commonEn } from "@/content/en/common";
import { homeDe } from "@/content/de/home";
import { homeEn } from "@/content/en/home";
import { faqDe } from "@/content/de/faq";
import { faqEn } from "@/content/en/faq";
import { kontaktDe } from "@/content/de/kontakt";
import { kontaktEn } from "@/content/en/kontakt";
import { rueckrufDe } from "@/content/de/rueckruf";
import { rueckrufEn } from "@/content/en/rueckruf";
import { betreuungsbedarfDe } from "@/content/de/betreuungsbedarf";
import { betreuungsbedarfEn } from "@/content/en/betreuungsbedarf";

export const metadata: Metadata = {
  title: "Übersetzungs-Review",
  robots: { index: false, follow: false },
};

/**
 * Internal side-by-side translation review (T20a).
 *
 * Walks the German and English content modules in parallel and prints every
 * string pair, so David can scan for meaning drift rather than reading two
 * sites separately or diffing files. Anything still untranslated shows up as a
 * visibly empty English cell.
 *
 * `noindex`, unlinked from navigation, and deleted at launch (T22).
 */

/** Content modules that have an English counterpart, in review order. */
const PAIRS: { label: string; de: unknown; en: unknown }[] = [
  { label: "Chrome (Header, Footer, Formulare)", de: commonDe, en: commonEn },
  { label: "Startseite", de: homeDe, en: homeEn },
  { label: "FAQ", de: faqDe, en: faqEn },
  { label: "Kontakt", de: kontaktDe, en: kontaktEn },
  { label: "Rückruf", de: rueckrufDe, en: rueckrufEn },
  { label: "Betreuungsbedarf", de: betreuungsbedarfDe, en: betreuungsbedarfEn },
];

type Row = { path: string; de: string; en: string };

/**
 * Flattens two parallel content objects into aligned string pairs.
 *
 * Walks the German side and looks up the same path in the English one, so a
 * missing English value surfaces as an empty cell instead of silently
 * shifting every subsequent row out of alignment.
 */
function flatten(de: unknown, en: unknown, path: string[] = [], out: Row[] = []): Row[] {
  if (typeof de === "string") {
    if (de.trim()) {
      out.push({ path: path.join("."), de, en: typeof en === "string" ? en : "" });
    }
    return out;
  }
  if (Array.isArray(de)) {
    de.forEach((item, i) => {
      const counterpart = Array.isArray(en) ? en[i] : undefined;
      flatten(item, counterpart, [...path, String(i)], out);
    });
    return out;
  }
  if (de && typeof de === "object") {
    for (const [key, value] of Object.entries(de)) {
      // Route keys and style variants are not translatable copy.
      if (key === "key" || key === "ctaKey" || key === "variant" || key === "kind") continue;
      const counterpart =
        en && typeof en === "object" ? (en as Record<string, unknown>)[key] : undefined;
      flatten(value, counterpart, [...path, key], out);
    }
  }
  return out;
}

export default function TranslationReviewPage() {
  const groups = PAIRS.map((pair) => ({
    label: pair.label,
    rows: flatten(pair.de, pair.en),
  }));

  const total = groups.reduce((sum, group) => sum + group.rows.length, 0);
  const missing = groups.reduce(
    (sum, group) => sum + group.rows.filter((row) => !row.en.trim()).length,
    0
  );

  return (
    <section className="pad">
      <div className="wrap">
        <span className="lbl">Intern</span>
        <h1 style={{ marginTop: 14 }}>Übersetzungs-Review</h1>
        <p className="sub" style={{ maxWidth: "62ch" }}>
          Deutsch und Englisch nebeneinander. Bitte auf inhaltliche Abweichungen prüfen —
          nicht auf wörtliche Übereinstimmung. Fachbegriffe, bei denen ich unsicher bin,
          stehen gesammelt in <code>docs/TRANSLATION-OPEN-QUESTIONS.md</code>.
        </p>
        <p className="helper" style={{ marginTop: 18 }}>
          {`// ${total} Textstellen · ${missing} noch ohne englische Fassung`}
        </p>

        {groups.map((group) => (
          <div key={group.label} style={{ marginTop: 44 }}>
            <h2 style={{ fontSize: 22 }}>{group.label}</h2>
            <div className="review-grid">
              <div className="review-head">Feld</div>
              <div className="review-head">Deutsch</div>
              <div className="review-head">English</div>
              {group.rows.map((row) => (
                <ReviewRow key={`${group.label}-${row.path}`} row={row} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewRow({ row }: { row: Row }) {
  const missing = !row.en.trim();
  return (
    <>
      <div className="review-path">{row.path}</div>
      <div className="review-de">{row.de}</div>
      <div className={missing ? "review-en review-missing" : "review-en"}>
        {missing ? "— fehlt —" : row.en}
      </div>
    </>
  );
}
