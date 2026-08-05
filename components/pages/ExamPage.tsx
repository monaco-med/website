import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHead from "@/components/SectionHead";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import type { ExamPageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes, type RouteKey } from "@/lib/routes";

/**
 * Shared template for all eight G-Untersuchungen detail pages, in both
 * locales. Copy comes from `content/<locale>/exams.ts`; this file owns the
 * layout, so a structural change is made once rather than sixteen times.
 *
 * Body sections alternate background shading by position (`pad`, `pad sand`,
 * `pad`, …) — derived from the index rather than stored in content, so
 * reordering or adding a section can't break the rhythm.
 *
 * CTAs point at the callback route rather than the needs-assessment form:
 * a specific exam enquiry is a booking request, not a company-wide review.
 * That follows the precedent set by the Bahnmedizin page.
 */
export default function ExamPage({
  locale,
  routeKey,
  content,
  parentLabel,
  leistungenLabel,
}: {
  locale: Locale;
  routeKey: RouteKey;
  content: ExamPageContent;
  /** Middle breadcrumb — the G-Untersuchungen overview page's name. */
  parentLabel: string;
  /** First breadcrumb — the services overview page's name. */
  leistungenLabel: string;
}) {
  const routes = localeRoutes[locale];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: leistungenLabel, path: routes.leistungen },
          { name: parentLabel, path: routes.gUntersuchungen },
          { name: content.h1, path: routes[routeKey] },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs
              current={content.h1}
              parent={{ label: parentLabel, href: routes.gUntersuchungen }}
            />
            <h1>{content.h1}</h1>
            <p className="sub-strong">{content.tagline}</p>
            {content.intro.map((paragraph) => (
              <p className="sub" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="hero-cta">
              <Link href={routes.rueckruf} className="btn btn-primary">
                {content.heroCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {content.sections.map((section, index) => (
        <section className={index % 2 === 1 ? "pad sand" : "pad"} key={section.title}>
          <div className="wrap">
            <SectionHead
              title={section.title}
              lead={section.kind === "checklist" ? section.lead : undefined}
            />
            {section.kind === "checklist" ? (
              <>
                {section.intro && <p className="pain-intro">{section.intro}</p>}
                <CheckList items={[...section.items]} />
                {section.note && (
                  <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
                    {section.note}
                  </p>
                )}
              </>
            ) : (
              <div className="prose">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <CtaBand
        label={content.cta.label}
        title={content.cta.title}
        text={content.cta.text}
        ctaHref={routes.rueckruf}
        ctaLabel={content.cta.ctaLabel}
      />
    </>
  );
}

/** Builds the page `metadata` for an exam page from its content module. */
export function examMetadata(
  content: ExamPageContent,
  locale: Locale,
  routeKey: RouteKey
): Metadata {
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: localeRoutes[locale][routeKey] },
  };
}
