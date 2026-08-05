import LeadPage from "@/components/pages/LeadPage";
import { betreuungsbedarfEn } from "@/content/en/betreuungsbedarf";
import { commonEn } from "@/content/en/common";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...betreuungsbedarfEn.meta,
  alternates: buildAlternates("betreuungsbedarf", "en"),
};

/** English needs-assessment page. */
export default function AssessYourNeedsPage() {
  return <LeadPage locale="en" content={betreuungsbedarfEn} common={commonEn} />;
}
