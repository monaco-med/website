import ContactHubPage from "@/components/pages/ContactHubPage";
import { kontaktDe } from "@/content/de/kontakt";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...kontaktDe.meta,
  alternates: buildAlternates("kontakt", "de"),
};

/** German contact hub. Layout in `ContactHubPage`, copy in `content/de/kontakt.ts`. */
export default function KontaktPage() {
  return <ContactHubPage locale="de" content={kontaktDe} />;
}
