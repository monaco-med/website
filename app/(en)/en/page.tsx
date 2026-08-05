import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { routesEn } from "@/lib/routes";

export const metadata: Metadata = {
  title: "English version in progress",
  alternates: { canonical: routesEn.home },
};

/**
 * Placeholder for the English homepage (`/en`).
 *
 * Exists so the `(en)` route group has a routable page and its root layout can
 * be exercised end-to-end while the translation is built out. Replaced by the
 * real homepage in T14; nothing links here yet and the tree is `noindex`.
 */
export default function EnglishHomePlaceholder() {
  return (
    <section className="hero">
      <div className="wrap">
        <Reveal className="inner">
          <span className="lbl">English</span>
          <h1>English version in progress</h1>
          <p className="sub">
            This page is a placeholder while the English translation is being prepared.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
