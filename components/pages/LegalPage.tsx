import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import type { LegalPageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { anchors } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

/** Fills the `{{...}}` placeholders from `siteConfig`. */
function fill(text: string): string {
  return text
    .replace(/\{\{name\}\}/g, siteConfig.name)
    .replace(/\{\{physician\}\}/g, siteConfig.physician)
    .replace(/\{\{email\}\}/g, siteConfig.email)
    .replace(/\{\{street\}\}/g, siteConfig.address.street)
    .replace(/\{\{zip\}\}/g, siteConfig.address.zip)
    .replace(/\{\{city\}\}/g, siteConfig.address.city);
}

/**
 * Impressum & Datenschutzerklärung, shared by both locales.
 *
 * Rendered from a flat block list rather than bespoke JSX so the English
 * version mirrors the German structure exactly — important for a legal text,
 * where a dropped clause is a compliance problem rather than a typo.
 *
 * Heading anchors come from `anchors[locale]`, because the footer and both
 * consent checkboxes link straight to the privacy section.
 */
export default function LegalPage({
  locale,
  content,
}: {
  locale: Locale;
  content: LegalPageContent;
}) {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <Reveal className="inner">
            <span className="lbl">{content.label}</span>
            <h1>{content.h1}</h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "26px 0 0" }}>
        <div className="wrap">
          <div className="legal">
            {content.notice && (
              <p className="notice">
                {content.notice.map((line, index) => (
                  <Fragment key={index}>
                    {index > 0 && <br />}
                    {fill(line)}
                  </Fragment>
                ))}
              </p>
            )}
            {content.blocks.map((block, index) => {
              switch (block.kind) {
                case "h2":
                  return (
                    <h2 key={index} id={anchors[locale][block.anchor]}>
                      {fill(block.text)}
                    </h2>
                  );
                case "h3":
                  return <h3 key={index}>{fill(block.text)}</h3>;
                case "list":
                  return (
                    <ul key={index}>
                      {block.items.map((item) => (
                        <li key={item}>{fill(item)}</li>
                      ))}
                    </ul>
                  );
                case "p":
                  return (
                    <p key={index} className={block.variant}>
                      {block.lines.map((line, lineIndex) => (
                        <Fragment key={lineIndex}>
                          {lineIndex > 0 && <br />}
                          {fill(line)}
                        </Fragment>
                      ))}
                    </p>
                  );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
