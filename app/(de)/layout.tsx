/**
 * German root layout — serves the site root (`/leistungen`, `/faq`, …).
 *
 * German and English each need their own root layout because only a root
 * layout may render `<html>`, and `lang` has to differ between them. Next.js
 * supports this via route groups (`(de)` / `(en)`), which do not appear in the
 * URL — so every German path stays exactly where it was. See
 * `app/(en)/layout.tsx` for the counterpart.
 *
 * Everything not locale-specific (fonts, organisation JSON-LD, header/footer)
 * is shared, so layout changes are still made in one place.
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { fontVariables } from "@/lib/fonts";
import { htmlLang, openGraphLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { commonDe } from "@/content/de/common";
import "../globals.css";

/** Default metadata; individual pages override `title`/`description` via their own `export const metadata`. */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Betriebsarzt & Arbeitsmedizin in München`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: openGraphLocale.de,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – Betriebsarzt & Arbeitsmedizin in München`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – Betriebsarzt & Arbeitsmedizin in München`,
    description: siteConfig.description,
  },
};

export default function GermanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLang.de} className={fontVariables}>
      <body>
        <OrganizationJsonLd />
        <Header locale="de" content={commonDe} />
        {children}
        <Footer locale="de" content={commonDe} />
      </body>
    </html>
  );
}
