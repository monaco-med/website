"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";

/** "Leistungen" dropdown entries, shared by the desktop hover menu and the mobile accordion. */
const leistungenSub = [
  { href: routes.arbeitsmedizin, label: "Arbeitsmedizin" },
  { href: routes.arbeitssicherheit, label: "Arbeitssicherheit" },
  { href: routes.bahnmedizin, label: "Bahnmedizin" },
  { href: routes.impfungen, label: "Impfungen im Unternehmen" },
  { href: routes.gUntersuchungen, label: "Vorsorge & G-Untersuchungen" },
  { href: routes.digitaleProzesse, label: "Digitale Prozesse" },
  { href: routes.gesundheitsmanagement, label: "Gesundheitsmanagement" },
];

const navItems = [
  { href: routes.fuerUnternehmen, label: "Für Unternehmen" },
  { href: routes.leitung, label: "Ärztliche Leitung" },
  { href: routes.faq, label: "FAQ" },
  { href: routes.kontakt, label: "Kontakt" },
];

/**
 * Site-wide sticky header: desktop nav with a hover dropdown, a mobile
 * burger menu (native `<details>`, no JS state needed), and a primary CTA
 * button that's duplicated into the mobile menu panel (the desktop `.hcta`
 * is hidden below 920px — see `app/globals.css` — since there isn't room
 * for it next to the burger icon).
 *
 * The CTA target adapts to context: on `/betreuungsbedarf` itself it
 * offers "Rückruf vereinbaren" instead of repeating the page's own form.
 */
export default function Header() {
  const pathname = usePathname();
  const isBetreuungsbedarf = pathname === routes.betreuungsbedarf;
  const cta = isBetreuungsbedarf
    ? { href: routes.rueckruf, label: "Rückruf vereinbaren" }
    : { href: routes.betreuungsbedarf, label: "Betreuungsbedarf einschätzen" };

  return (
    <header>
      <div className="wrap bar">
        <Link className="brand" href={routes.home}>
          Monaco<i>Med</i>
        </Link>
        <nav>
          <ul>
            <li className="has-sub">
              <Link href={routes.leistungen}>Leistungen</Link>
              <div className="subwrap">
                <div className="subpanel">
                  {leistungenSub.map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hcta">
          <Link href={cta.href} className="btn btn-primary">
            {cta.label}
          </Link>
        </div>
        <details className="mnav">
          <summary aria-label="Menü öffnen">
            <span className="bars" />
          </summary>
          <div className="mnav-panel">
            <Link href={cta.href} className="btn btn-primary btn-block mnav-cta">
              {cta.label}
            </Link>
            <ul>
              <li className="has-sub">
                <Link href={routes.leistungen}>Leistungen</Link>
                <div className="subwrap">
                  <div className="subpanel">
                    {leistungenSub.map((item) => (
                      <Link key={item.href} href={item.href}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}
