import LegalPage from "@/components/pages/LegalPage";
import { impressumEn } from "@/content/en/impressum";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...impressumEn.meta,
  alternates: buildAlternates("impressum", "en"),
};

/**
 * English legal notice & privacy policy. A convenience translation — the first
 * block on the page states that the German version at `/impressum` prevails.
 */
export default function LegalNoticePage() {
  return <LegalPage locale="en" content={impressumEn} />;
}
