"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CommonContent } from "@/content/types";
import { englishLaunched, localeName, type Locale } from "@/lib/i18n";
import { getCounterpartPath, localeRoutes } from "@/lib/routes";

/**
 * Site-wide sticky header: desktop nav with a hover dropdown, a mobile
 * burger menu (a native `<details>`), and a primary CTA button that's
 * duplicated into the mobile menu panel (the desktop `.hcta` is hidden below
 * 920px — see `app/globals.css` — since there isn't room for it next to the
 * burger icon).
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

  // The burger menu is a native `<details>`, but this header lives in the root
  // layout and is never remounted, so a client-side navigation leaves it open
  // and the panel covers the page the visitor just asked for. Closing it has to
  // be explicit. Delegated from the panel so it covers every link inside it —
  // nav items, the sub-menu, the CTA and the language switcher — and so it also
  // fires for same-page anchors, where the pathname never changes and a
  // pathname effect would not run.
  const menu = useRef<HTMLDetailsElement>(null);

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

  // Links to the current page in the other language, falling back to that
  // language's home page if this page has no counterpart yet. Hidden until
  // the English site is complete — see `englishLaunched`.
  const otherLocale: Locale = locale === "de" ? "en" : "de";
  const switcher = englishLaunched ? (
    <a
      className="lang-switch"
      href={getCounterpartPath(pathname, locale, otherLocale)}
      lang={otherLocale}
      hrefLang={otherLocale}
    >
      {localeName[otherLocale]}
    </a>
  ) : null;

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
          {switcher}
          <Link href={cta.href} className="btn btn-primary">
            {cta.label}
          </Link>
        </div>
        <details className="mnav" ref={menu}>
          <summary aria-label={header.menuOpen}>
            <span className="bars" />
          </summary>
          <div
            className="mnav-panel"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) {
                menu.current?.removeAttribute("open");
              }
            }}
          >
            <Link href={cta.href} className="btn btn-primary btn-block mnav-cta">
              {cta.label}
            </Link>
            <ul>
              {leistungenMenu}
              {navLinks}
              {switcher && <li className="mnav-lang">{switcher}</li>}
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}
