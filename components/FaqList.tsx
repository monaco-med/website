import Reveal from "@/components/Reveal";
import { hreflang, type Locale } from "@/lib/i18n";

/** A single FAQ question/answer pair. */
export type FaqItem = {
  q: string;
  a: string;
};

/**
 * Accordion list of FAQ items, built on native `<details>`/`<summary>` (no
 * JS needed for the expand/collapse behavior).
 *
 * @param jsonLd - When true, also emits schema.org `FAQPage` structured
 *   data for these items. Only one FAQ block per page should set this —
 *   duplicate `FAQPage` blocks on one page are invalid.
 * @param locale - Language the questions are written in; tags the emitted
 *   structured data so the German and English FAQ pages aren't read as
 *   competing copies of one another.
 */
export default function FaqList({
  items,
  jsonLd = false,
  locale = "de",
}: {
  items: FaqItem[];
  jsonLd?: boolean;
  /** Tags the emitted FAQPage with its language. */
  locale?: Locale;
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: hreflang[locale],
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Reveal className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>
              <h4>{item.q}</h4>
              <span className="k" />
            </summary>
            <div className="faq-answer">{item.a}</div>
          </details>
        ))}
      </Reveal>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
