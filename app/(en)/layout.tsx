/**
 * English root layout — serves everything under `/en/`.
 *
 * Mirrors `app/(de)/layout.tsx`; see that file for why the two locales need
 * separate root layouts. Note that navigating between the two triggers a full
 * page load, since crossing root layouts is not a client-side transition.
 * That is acceptable for a language switch.
 *
 * The English tree is `noindex` until the translation is complete — the client
 * requires English to go live only as a finished whole, so this enforces it in
 * code rather than by discipline. It is gated on `englishLaunched`, the same
 * flag that gates hreflang and the sitemap, so launch (T22) is one flag flip.
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { fontVariables } from "@/lib/fonts";
import { englishLaunched, htmlLang, openGraphLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { commonEn } from "@/content/en/common";
import "../globals.css";

const englishTitle = `${siteConfig.name} – Occupational health & occupational medicine in Munich`;
const englishDescription =
  "Occupational health, occupational safety and health management for companies in Munich – digitally organised, with personal physician-led care.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: englishTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: englishDescription,
  // Keeps the whole English tree out of search results until launch. Gated on
  // the same flag as hreflang and the sitemap, so flipping `englishLaunched`
  // is genuinely the only launch step — hardcoding this would have shipped 44
  // sitemap entries while every English page still said noindex.
  robots: englishLaunched ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: openGraphLocale.en,
    siteName: siteConfig.name,
    title: englishTitle,
    description: englishDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: englishTitle,
    description: englishDescription,
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLang.en} className={fontVariables}>
      <body>
        <OrganizationJsonLd />
        <Header locale="en" content={commonEn} />
        {children}
        <Footer locale="en" content={commonEn} />
      </body>
    </html>
  );
}
