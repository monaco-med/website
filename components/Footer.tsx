import Link from "next/link";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

const footLinks = [
  { href: routes.leistungen, label: "Leistungen" },
  { href: routes.arbeitsmedizin, label: "Arbeitsmedizin" },
  { href: routes.arbeitssicherheit, label: "Arbeitssicherheit" },
  { href: routes.bahnmedizin, label: "Bahnmedizin" },
  { href: routes.impfungen, label: "Impfungen" },
  { href: routes.betriebsarztMuenchen, label: "Betriebsarzt München" },
  { href: routes.fuerUnternehmen, label: "Für Unternehmen" },
  { href: routes.leitung, label: "Ärztliche Leitung" },
  { href: routes.faq, label: "FAQ" },
  { href: routes.kontakt, label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            Monaco<i>Med</i>
          </div>
          <div className="foot-links">
            {footLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="foot-bot">
          <span>
            {siteConfig.address.street} · {siteConfig.address.zip}{" "}
            {siteConfig.address.city} ·{" "}
            <Link href={routes.impressum} style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 2 }}>
              Impressum
            </Link>{" "}
            ·{" "}
            <Link href={routes.datenschutz} style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 2 }}>
              Datenschutz
            </Link>{" "}
            ·{" "}
            <Link href={routes.datenschutz} style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 2 }}>
              Cookies
            </Link>
          </span>
          <span>© 2026 {siteConfig.physician}</span>
        </div>
      </div>
    </footer>
  );
}
