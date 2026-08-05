import ContactHubPage from "@/components/pages/ContactHubPage";
import { kontaktEn } from "@/content/en/kontakt";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...kontaktEn.meta,
  alternates: buildAlternates("kontakt", "en"),
};

/** English contact hub. */
export default function ContactPage() {
  return <ContactHubPage locale="en" content={kontaktEn} />;
}
