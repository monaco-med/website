import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { ContactHubContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes } from "@/lib/routes";

/**
 * Contact hub, shared by both locales.
 *
 * A triage step rather than a form: it asks which of the two intents applies
 * and forwards to the callback or needs-assessment page accordingly.
 */
export default function ContactHubPage({
  locale,
  content,
}: {
  locale: Locale;
  content: ContactHubContent;
}) {
  const routes = localeRoutes[locale];

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <span className="lbl">{content.label}</span>
            <h1>{content.h1}</h1>
            <p className="sub">{content.sub}</p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "64px 0 84px" }}>
        <div className="wrap">
          <Reveal className="choices" stagger>
            {content.choices.map((choice) => (
              <div className="choice" key={choice.label}>
                <span className="lbl">{choice.label}</span>
                <h3>{choice.title}</h3>
                <p>{choice.text}</p>
                <div className="actions">
                  {choice.actions.map((action) => (
                    <Link
                      key={action.key}
                      href={routes[action.key]}
                      className={`btn btn-${action.variant}`}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <p className="side-note">{content.sideNote}</p>
        </div>
      </section>
    </>
  );
}
