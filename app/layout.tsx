import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Betriebsarzt & Arbeitsmedizin in München`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "de_DE",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.zip,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
