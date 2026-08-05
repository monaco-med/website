import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import FaqList from "@/components/FaqList";
import type { FaqPageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes } from "@/lib/routes";

/**
 * Full FAQ page, shared by both locales.
 *
 * Passes `jsonLd` to `FaqList`, making this the only page that emits
 * schema.org `FAQPage` data per locale — the homepage renders a shorter
 * teaser subset without it, since duplicate FAQPage blocks on one page are
 * invalid.
 */
export default function FaqPage({
  locale,
  content,
}: {
  locale: Locale;
  content: FaqPageContent;
}) {
  const routes = localeRoutes[locale];

  return (
    <>
      <section className="pad">
        <div className="wrap">
          <SectionHead as="h1" label={content.label} title={content.h1} lead={content.lead} />
          <FaqList items={[...content.items]} jsonLd locale={locale} />
          <div style={{ marginTop: 30 }}>
            <Link href={routes.home} className="btn btn-ghost">
              {content.backLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band center">
        <div className="wrap">
          <h2>{content.cta.title}</h2>
          <p>{content.cta.text}</p>
          <div style={{ marginTop: 28 }}>
            <Link href={routes.rueckruf} className="btn btn-light">
              {content.cta.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
