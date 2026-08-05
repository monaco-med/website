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
import { Matrix, MatrixLinks } from "@/components/Matrix";
import CtaBand from "@/components/CtaBand";
import CheckList from "@/components/CheckList";
import PainGrid from "@/components/PainGrid";
import SectorGrid from "@/components/SectorGrid";
import WhyLines from "@/components/WhyLines";
import type { MatrixCell, ContentPageContent, PageSection } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes, type RouteKey } from "@/lib/routes";
import { buildAlternates } from "@/lib/seo";

/** Plain text, or emphasised text when the content marks the cell bold. */
function renderCell(cell: MatrixCell) {
  return typeof cell === "string" ? cell : <b>{cell.bold}</b>;
}

/**
 * `pad` plus the section's optional background modifier.
 *
 * Excludes `whyLines`, which renders its own full-width band rather than
 * sitting inside a `pad` section.
 */
function sectionClass(section: Exclude<PageSection, { kind: "whyLines" }>): string {
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
export default function ContentPage({
  locale,
  routeKey,
  content,
  leistungenLabel,
  jsonLd,
}: {
  locale: Locale;
  routeKey: RouteKey;
  content: ContentPageContent;
  /** First breadcrumb — the services overview page's name. Required when the content sets `breadcrumb`. */
  leistungenLabel?: string;
  /**
   * Structured data for pages that emit something other than a breadcrumb
   * trail (e.g. the Physician data on the Betriebsarzt landing page).
   */
  jsonLd?: React.ReactNode;
}) {
  const routes = localeRoutes[locale];

  return (
    <>
      {content.breadcrumb && leistungenLabel && (
        <BreadcrumbJsonLd
          items={[
            { name: leistungenLabel, path: routes.leistungen },
            { name: content.breadcrumb, path: routes[routeKey] },
          ]}
        />
      )}
      {jsonLd}
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            {content.breadcrumb && <Breadcrumbs current={content.breadcrumb} />}
            {content.heroLabel && <span className="lbl">{content.heroLabel}</span>}
            <h1>{content.h1}</h1>
            {content.tagline && <p className="sub-strong">{content.tagline}</p>}
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

      {content.index && (
        <section style={{ padding: "64px 0 20px" }}>
          <div className="wrap">
            <Reveal className="ix" stagger>
              {content.index.rows.map((row) => (
                <Link className="ix-row" href={routes[row.key]} key={row.id}>
                  <span className="ix-id">{row.id}</span>
                  <h3>{row.title}</h3>
                  <p>{row.text}</p>
                  <span className="ix-more">{content.index!.moreLabel}</span>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {content.sections.map((section, index) =>
        section.kind === "whyLines" ? (
          <WhyLines key={`why-${index}`} solid items={[...section.items]} />
        ) : (
        <section
          className={sectionClass(section)}
          key={section.kind === "sectorGrid" ? section.label : section.title}
          id={section.kind === "tiles" ? section.id : undefined}
          style={section.flush ? { paddingTop: 0 } : undefined}
        >
          <div className="wrap">
            {section.kind === "checkList" ? (
              <>
                <SectionHead title={section.title} lead={section.lead} />
                {section.intro && <p className="pain-intro">{section.intro}</p>}
                <CheckList items={[...section.items]} />
                {section.note && (
                  <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
                    {section.note}
                  </p>
                )}
                {section.cta && (
                  <div style={{ marginTop: 20 }}>
                    <Link
                      href={routes[section.cta.key]}
                      className={`btn btn-${section.cta.variant}`}
                    >
                      {section.cta.label}
                    </Link>
                  </div>
                )}
              </>
            ) : section.kind === "compare" ? (
              <>
                <SectionHead title={section.title} lead={section.lead} />
                <Reveal className="compare-grid" stagger>
                  {section.cards.map((card) => (
                    <div className="tile" key={card.title}>
                      <h4>{card.title}</h4>
                      {card.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ))}
                </Reveal>
                {section.note && (
                  <p style={{ marginTop: 20, fontSize: 15.5, color: "var(--ink-soft)" }}>
                    {section.note}
                  </p>
                )}
              </>
            ) : section.kind === "sectorGrid" ? (
              <>
                <span className="lbl">{section.label}</span>
                <SectorGrid
                  style={{ marginTop: 16, maxWidth: 760 }}
                  items={[...section.items]}
                />
              </>
            ) : section.kind === "painGrid" ? (
              <>
                <SectionHead title={section.title} lead={section.lead} />
                {section.intro && <p className="pain-intro">{section.intro}</p>}
                <PainGrid items={[...section.items]} />
                {section.close && <p className="pain-close">{section.close}</p>}
              </>
            ) : section.kind === "splitLinks" ? (
              <div className="grid">
                <Reveal style={{ alignSelf: "center" }}>
                  {section.label && <span className="lbl">{section.label}</span>}
                  <h2 style={{ marginTop: 14 }}>{section.title}</h2>
                  <p className="lead">{section.lead}</p>
                </Reveal>
                <MatrixLinks
                  heading={section.matrixHeading}
                  items={section.links.map((link) => ({
                    href: routes[link.key],
                    label: link.label,
                  }))}
                />
              </div>
            ) : section.kind === "split" ? (
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
                <SectionHead
                  title={section.title}
                  lead={section.lead}
                  label={section.kind === "tiles" ? section.label : undefined}
                  action={
                    section.kind === "tiles" && section.action
                      ? {
                          href: routes[section.action.key],
                          label: section.action.label,
                          variant: section.action.variant as "primary" | "ghost",
                        }
                      : undefined
                  }
                />
                {section.kind === "tiles" && section.intro && (
                  <p className="pain-intro">{section.intro}</p>
                )}
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
        )
      )}

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
export function contentMetadata(
  content: ContentPageContent,
  locale: Locale,
  routeKey: RouteKey
): Metadata {
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: buildAlternates(routeKey, locale),
  };
}
