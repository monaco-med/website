/**
 * English root layout — serves everything under `/en/`.
 *
 * Mirrors `app/(de)/layout.tsx`; see that file for why the two locales need
 * separate root layouts. Note that navigating between the two triggers a full
 * page load, since crossing root layouts is not a client-side transition.
 * That is acceptable for a language switch.
 *
 * The English tree is `noindex` until the translation is complete — David's
 * requirement is that English goes live only as a finished whole, so this
 * enforces it in code rather than by discipline. Removing it is the final
 * launch step (T22).
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { fontVariables } from "@/lib/fonts";
import { htmlLang, openGraphLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
// TODO(T13): swap for content/en/common.ts. The English tree is noindex and
// unlinked until launch, so German chrome here is visible to nobody but us.
import { commonDe } from "@/content/de/common";
import "../globals.css";

const englishTitle = `${siteConfig.name} – Occupational Health & Workplace Safety in Munich`;
const englishDescription =
  "Occupational health, workplace safety and health management for companies in Munich – digitally organised, personally led by a physician.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: englishTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: englishDescription,
  // Keep the whole English tree out of search results until launch.
  robots: { index: false, follow: false },
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
        <Header locale="en" content={commonDe} />
        {children}
        <Footer locale="en" content={commonDe} />
      </body>
    </html>
  );
}
