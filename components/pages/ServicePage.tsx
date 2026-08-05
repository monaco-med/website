import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SectionHead from "@/components/SectionHead";
import Tiles from "@/components/Tiles";
import Steps from "@/components/Steps";
import ExamList from "@/components/ExamList";
import ReasonGrid from "@/components/ReasonGrid";
import FaqList from "@/components/FaqList";
import { Matrix } from "@/components/Matrix";
import CtaBand from "@/components/CtaBand";
import type { MatrixCell, ServicePageContent, ServiceSection } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes, type RouteKey } from "@/lib/routes";
import { buildAlternates } from "@/lib/seo";

/** Plain text, or emphasised text when the content marks the cell bold. */
function renderCell(cell: MatrixCell) {
  return typeof cell === "string" ? cell : <b>{cell.bold}</b>;
}

/** `pad` plus the section's optional background modifier. */
function sectionClass(section: ServiceSection): string {
  return section.tone ? `pad ${section.tone}` : "pad";
}

/**
 * Shared template for the four service detail pages (Arbeitsmedizin,
 * Arbeitssicherheit, Bahnmedizin, Impfungen) in both locales. Copy lives in
 * `content/<locale>/services.ts`.
 *
 * Body sections are a tagged union so a page can compose tiles, steps, an
 * exam list, a reasons grid, an FAQ block or a two-column split in any order
 * — which is what lets four visually distinct pages share one component.
 *
 * FAQ sections deliberately omit `jsonLd`: the canonical `FAQPage` structured
 * data lives on the FAQ page itself, and duplicate blocks on one page are
 * invalid.
 */
export default function ServicePage({
  locale,
  routeKey,
  content,
  leistungenLabel,
}: {
  locale: Locale;
  routeKey: RouteKey;
  content: ServicePageContent;
  /** First breadcrumb — the services overview page's name. */
  leistungenLabel: string;
}) {
  const routes = localeRoutes[locale];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: leistungenLabel, path: routes.leistungen },
          { name: content.breadcrumb, path: routes[routeKey] },
        ]}
      />
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <Breadcrumbs current={content.breadcrumb} />
            <h1>{content.h1}</h1>
            <p className="sub-strong">{content.tagline}</p>
            {content.intro.map((paragraph) => (
              <p className="sub" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="hero-cta">
              {content.heroCtas.map((cta) => (
                <Link key={cta.key} href={routes[cta.key]} className={`btn btn-${cta.variant}`}>
                  {cta.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {content.sections.map((section) => (
        <section
          className={sectionClass(section)}
          key={section.title}
          style={section.flush ? { paddingTop: 0 } : undefined}
        >
          <div className="wrap">
            {section.kind === "split" ? (
              <div className="grid">
                <Reveal style={{ alignSelf: "center" }}>
                  {section.label && <span className="lbl">{section.label}</span>}
                  <h2 style={{ marginTop: 14 }}>{section.title}</h2>
                  <p className="lead">{section.lead}</p>
                </Reveal>
                <Matrix
                  heading={section.matrixHeading}
                  rows={section.rows.map(
                    (row) => row.map(renderCell) as [React.ReactNode, React.ReactNode] | [React.ReactNode]
                  )}
                />
              </div>
            ) : (
              <>
                <SectionHead title={section.title} lead={section.lead} />
                {section.kind === "tiles" && (
                  <Tiles
                    items={section.items.map((item) => ({
                      title: item.title,
                      text: item.link ? (
                        <>
                          {item.text}{" "}
                          <Link href={routes[item.link.key]}>{item.link.label}</Link>
                          {item.textAfter}
                        </>
                      ) : (
                        item.text
                      ),
                    }))}
                  />
                )}
                {section.kind === "steps" && <Steps items={[...section.items]} />}
                {section.kind === "examList" && <ExamList items={[...section.items]} />}
                {section.kind === "reasons" && <ReasonGrid items={[...section.items]} />}
                {section.kind === "faq" && <FaqList items={[...section.items]} />}
              </>
            )}
          </div>
        </section>
      ))}

      <CtaBand
        label={content.cta.label}
        title={content.cta.title}
        text={content.cta.text}
        ctaHref={routes[content.cta.ctaKey]}
        ctaLabel={content.cta.ctaLabel}
      />
    </>
  );
}

/** Builds the page `metadata` for a service page from its content module. */
export function serviceMetadata(
  content: ServicePageContent,
  locale: Locale,
  routeKey: RouteKey
): Metadata {
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: buildAlternates(routeKey, locale),
  };
}
