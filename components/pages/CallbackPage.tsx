import Reveal from "@/components/Reveal";
import CallbackForm from "@/components/CallbackForm";
import type { CallbackPageContent, CommonContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";

/**
 * Callback-request page, shared by both locales.
 *
 * The landing target for every single-enquiry CTA site-wide (the
 * G-Untersuchungen pages, Bahnmedizin, the contact hub). Uses `CallbackForm`
 * rather than `ContactForm`: a quick, specific request needs a lighter intake
 * than a company-wide needs assessment.
 */
export default function CallbackPage({
  locale,
  content,
  common,
}: {
  locale: Locale;
  content: CallbackPageContent;
  common: CommonContent;
}) {
  return (
    <section className="pad">
      <div className="wrap">
        <div className="cb-wrap">
          <Reveal className="cb-head">
            <span className="lbl">{content.label}</span>
            <h1>{content.h1}</h1>
            <p>{content.lead}</p>
          </Reveal>
          <Reveal>
            <CallbackForm locale={locale} content={common} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
