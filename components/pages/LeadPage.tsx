import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ContactForm from "@/components/ContactForm";
import type { CommonContent, LeadPageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

/**
 * Standalone needs-assessment page, shared by both locales.
 *
 * The dedicated landing target for every "Betreuungsbedarf einschätzen" CTA,
 * so those CTAs reach a focused page rather than scrolling to an anchor on
 * the homepage. Mirrors the homepage's contact section.
 */
export default function LeadPage({
  locale,
  content,
  common,
}: {
  locale: Locale;
  content: LeadPageContent;
  common: CommonContent;
}) {
  return (
    <section className="pad kontakt" id="kontakt">
      <div className="wrap">
        <SectionHead as="h1" title={content.h1} lead={content.lead} />
        <div className="grid">
          <Reveal>
            <ContactForm locale={locale} content={common} />
          </Reveal>
          <Reveal className="contact-side">
            <h3>{content.sideTitle}</h3>
            <div className="ci">
              <span className="lbl">{content.addressLabel}</span>
              {siteConfig.address.street} · {siteConfig.address.zip} {siteConfig.address.city}
            </div>
            <div className="ci">
              <span className="lbl">{content.onSiteLabel}</span>
              {content.onSiteValue}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
