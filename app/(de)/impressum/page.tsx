import LegalPage from "@/components/pages/LegalPage";
import { impressumDe } from "@/content/de/impressum";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...impressumDe.meta,
  alternates: buildAlternates("impressum", "de"),
  robots: { index: true, follow: true },
};

/**
 * German Impressum & Datenschutzerklärung. Layout in `LegalPage`, text in
 * `content/de/impressum.ts` — which must stay verbatim, it is a legal document.
 */
export default function ImpressumPage() {
  return <LegalPage locale="de" content={impressumDe} />;
}
