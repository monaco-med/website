import LeadPage from "@/components/pages/LeadPage";
import { betreuungsbedarfDe } from "@/content/de/betreuungsbedarf";
import { commonDe } from "@/content/de/common";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...betreuungsbedarfDe.meta,
  alternates: buildAlternates("betreuungsbedarf", "de"),
};

/** German needs-assessment page. Layout in `LeadPage`, copy in `content/de/betreuungsbedarf.ts`. */
export default function BetreuungsbedarfPage() {
  return <LeadPage locale="de" content={betreuungsbedarfDe} common={commonDe} />;
}
