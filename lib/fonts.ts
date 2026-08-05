/**
 * The site's three self-hosted Google Fonts.
 *
 * `next/font` loaders must run at module scope, and each root layout needs the
 * same CSS variables on its `<html>` element — so they are declared once here
 * and shared, rather than re-declared per locale (which would make Next load
 * and emit each font twice).
 *
 * The variable names (`--font-archivo`, `--font-inter`, `--font-mono`) are
 * consumed throughout `app/globals.css`.
 */
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";

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

/** Apply to `<html className>` in every root layout. */
export const fontVariables = `${archivo.variable} ${inter.variable} ${plexMono.variable}`;
