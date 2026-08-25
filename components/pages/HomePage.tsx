import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import WhyLines from "@/components/WhyLines";
import FaqList from "@/components/FaqList";
import LogoWall from "@/components/LogoWall";
import ContactForm from "@/components/ContactForm";
import type { CommonContent, HomePageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { anchors, localeRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

/**
 * Homepage, shared by both locales.
 *
 * Bespoke rather than composed from the `ContentPage` section union — the
 * split hero with its assurance rail, the trust band, the physician block and
 * the embedded lead form appear nowhere else, so a shared abstraction would
 * cost more than it saves.
 *
 * The FAQ block deliberately omits `jsonLd`: the canonical `FAQPage`
 * structured data lives on the FAQ page, and duplicate blocks are invalid.
 */
export default function HomePage({
  locale,
  content,
  common,
}: {
  locale: Locale;
  content: HomePageContent;
  common: CommonContent;
}) {
  const routes = localeRoutes[locale];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="grid">
            <Reveal className="main">
              <h1>{content.h1}</h1>
              <p className="sub">{content.sub}</p>
              <div className="coverage">{content.coverage}</div>
              <div className="hero-cta">
                {content.heroCtas.map((cta) => (
                  <Link key={cta.key} href={routes[cta.key]} className={`btn btn-${cta.variant}`}>
                    {cta.label}
                  </Link>
                ))}
              </div>
              {content.heroCtaNote && <p className="hero-cta-note">{content.heroCtaNote}</p>}
            </Reveal>
            <Reveal className="rail" stagger delay={0.2}>
              {content.rail.map((item) => (
                <div className="ri" key={item.n}>
                  <span className="k">{item.n}</span>
                  <span className="v">{item.text}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust">
        <div className="wrap">
          <div className="row">
            {content.trust.map((item) => (
              <div className="item" key={item.label}>
                <span className="lbl">{item.label}</span>
                <b>{item.value}</b>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LEISTUNGEN */}
      <section className="pad" id="leistungen">
        <div className="wrap">
          <SectionHead
            label={content.services.label}
            title={content.services.title}
            action={{
              href: routes[content.services.action.key],
              label: content.services.action.label,
            }}
          />
          <Reveal className="lg-grid" stagger>
            {content.services.items.map((service) => (
              <Link className="lg-card" href={routes[service.key]} key={service.id}>
                <span className="lg-id">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="lg-more">{content.services.moreLabel}</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LEITUNG */}
      <section className="pad leitung" id={anchors[locale].leitung}>
        <div className="wrap">
          <div className="grid">
            <Reveal className="photo">
              <Image
                src="/images/david-manghabati.jpg"
                alt={content.leitung.photoAlt}
                fill
                sizes="(max-width: 920px) 100vw, 340px"
                style={{ objectFit: "cover", objectPosition: "50% 24%" }}
                priority
              />
            </Reveal>
            <Reveal>
              <span className="lbl">{content.leitung.label}</span>
              <h2 style={{ marginTop: 14 }}>{content.leitung.title}</h2>
              <div className="name">{content.leitung.name}</div>
              <div className="quals">
                {content.leitung.quals.map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </div>
              <p className="bio">{content.leitung.bio}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <LogoWall />

      {/* ABLAUF */}
      <section className="pad">
        <div className="wrap">
          <SectionHead title={content.steps.title} lead={content.steps.lead} />
          <Steps items={[...content.steps.items]} />
        </div>
      </section>

      {/* WARUM */}
      <WhyLines items={[...content.why]} />

      {/* UNTERNEHMEN teaser */}
      <section className="pad firm" id="unternehmen" style={{ padding: "54px 0" }}>
        <div className="wrap">
          <Reveal className="teaser">
            <div>
              <span className="lbl">{content.teaser.label}</span>
              <h2 style={{ marginTop: 12 }}>{content.teaser.title}</h2>
              <p style={{ marginTop: 10, fontSize: "15.5px", color: "var(--ink-soft)" }}>
                {content.teaser.text}
              </p>
            </div>
            <Link href={routes[content.teaser.cta.key]} className="btn btn-primary">
              {content.teaser.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="pad" id={anchors[locale].faq}>
        <div className="wrap">
          <SectionHead title={content.faq.title} lead={content.faq.lead} />
          <FaqList items={[...content.faq.items]} />
          <div style={{ marginTop: 26 }}>
            <Link href={routes.faq} className="btn btn-ghost">
              {content.faq.allLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="pad kontakt" id="kontakt">
        <div className="wrap">
          <SectionHead title={content.contact.title} lead={content.contact.lead} />
          <div className="grid">
            <Reveal>
              <ContactForm locale={locale} content={common} />
            </Reveal>
            <Reveal className="contact-side">
              <h3>{content.contact.sideTitle}</h3>
              <div className="ci">
                <span className="lbl">{content.contact.addressLabel}</span>
                {siteConfig.address.street} · {siteConfig.address.zip} {siteConfig.address.city}
              </div>
              <div className="ci">
                <span className="lbl">{content.contact.onSiteLabel}</span>
                {content.contact.onSiteValue}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
