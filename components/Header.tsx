"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CommonContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes } from "@/lib/routes";

/**
 * Site-wide sticky header: desktop nav with a hover dropdown, a mobile
 * burger menu (native `<details>`, no JS state needed), and a primary CTA
 * button that's duplicated into the mobile menu panel (the desktop `.hcta`
 * is hidden below 920px — see `app/globals.css` — since there isn't room
 * for it next to the burger icon).
 *
 * Labels come from the locale's `common` content and link targets are
 * resolved from that locale's route table, so the same component serves both
 * languages. The CTA target adapts to context: on the Betreuungsbedarf page
 * itself it offers a callback instead of repeating the page's own form.
 */
export default function Header({
  locale,
  content,
}: {
  locale: Locale;
  content: CommonContent;
}) {
  const pathname = usePathname();
  const routes = localeRoutes[locale];
  const { header } = content;

  const isBetreuungsbedarf = pathname === routes.betreuungsbedarf;
  const cta = isBetreuungsbedarf
    ? { href: routes.rueckruf, label: header.ctaRueckruf }
    : { href: routes.betreuungsbedarf, label: header.ctaBetreuungsbedarf };

  const leistungenMenu = (
    <li className="has-sub">
      <Link href={routes.leistungen}>{header.leistungen}</Link>
      <div className="subwrap">
        <div className="subpanel">
          {header.leistungenSub.map((item) => (
            <Link key={item.key} href={routes[item.key]}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );

  const navLinks = header.navItems.map((item) => (
    <li key={item.key}>
      <Link href={routes[item.key]}>{item.label}</Link>
    </li>
  ));

  return (
    <header>
      <div className="wrap bar">
        <Link className="brand" href={routes.home}>
          Monaco<i>Med</i>
        </Link>
        <nav>
          <ul>
            {leistungenMenu}
            {navLinks}
          </ul>
        </nav>
        <div className="hcta">
          <Link href={cta.href} className="btn btn-primary">
            {cta.label}
          </Link>
        </div>
        <details className="mnav">
          <summary aria-label={header.menuOpen}>
            <span className="bars" />
          </summary>
          <div className="mnav-panel">
            <Link href={cta.href} className="btn btn-primary btn-block mnav-cta">
              {cta.label}
            </Link>
            <ul>
              {leistungenMenu}
              {navLinks}
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}
