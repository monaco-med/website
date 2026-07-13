import Reveal from "@/components/Reveal";

export type FaqItem = {
  q: string;
  a: string;
};

export default function FaqList({ items, jsonLd = false }: { items: FaqItem[]; jsonLd?: boolean }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
