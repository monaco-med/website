import Link from "next/link";
import type { CommonContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

const legalLinkStyle = {
  color: "inherit",
  textDecoration: "underline",
  textUnderlineOffset: 2,
} as const;

/**
 * Site-wide footer, rendered once per locale from that locale's root layout.
 *
 * Link labels come from the locale's `common` content; targets resolve through
 * that locale's route table. The address and physician name come from
 * `siteConfig` — they are the same in both languages.
 *
 * Note the copyright year is a hardcoded literal, not computed — update it
 * manually when it goes stale.
 */
export default function Footer({
  locale,
  content,
}: {
  locale: Locale;
  content: CommonContent;
}) {
  const routes = localeRoutes[locale];
  const { footer } = content;

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            Monaco<i>Med</i>
          </div>
          <div className="foot-links">
            {footer.links.map((item) => (
              <Link key={`${item.key}-${item.label}`} href={routes[item.key]}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="foot-bot">
          <span>
            {siteConfig.address.street} · {siteConfig.address.zip}{" "}
            {siteConfig.address.city} ·{" "}
            <Link href={routes.impressum} style={legalLinkStyle}>
              {footer.impressum}
            </Link>{" "}
            ·{" "}
            <Link href={routes.datenschutz} style={legalLinkStyle}>
              {footer.datenschutz}
            </Link>{" "}
            ·{" "}
            <Link href={routes.datenschutz} style={legalLinkStyle}>
              {footer.cookies}
            </Link>
          </span>
          <span>© 2026 {siteConfig.physician}</span>
        </div>
      </div>
    </footer>
  );
}
