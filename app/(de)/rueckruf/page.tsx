import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CallbackForm from "@/components/CallbackForm";
import { buildAlternates } from "@/lib/seo";
import { commonDe } from "@/content/de/common";

export const metadata: Metadata = {
  title: "Rückruf anfordern",
  description:
    "Hinterlassen Sie Ihr Anliegen und Ihr Wunschzeitfenster – wir rufen Sie zurück. Direkt, persönlich, ohne Callcenter.",
  alternates: buildAlternates("rueckruf", "de"),
};

/**
 * Callback-request page (`/rueckruf`) — the landing target for every
 * "Rückruf anfordern" / single-inquiry CTA site-wide (e.g. all
 * G-Untersuchungen child pages, Bahnmedizin). Uses `CallbackForm`, not
 * `ContactForm` — a lighter form (concern + preferred callback window)
 * suited to a quick, specific request rather than the fuller company
 * needs-assessment intake on `/betreuungsbedarf`.
 */
export default function RueckrufPage() {
  return (
    <section className="pad">
      <div className="wrap">
        <div className="cb-wrap">
          <Reveal className="cb-head">
            <span className="lbl">Rückruf</span>
            <h1>Rückruf anfordern</h1>
            <p>Hinterlassen Sie uns kurz Ihr Anliegen und wann es am besten passt — wir rufen zurück.</p>
          </Reveal>
          <Reveal>
            <CallbackForm locale="de" content={commonDe} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
