import FaqPage from "@/components/pages/FaqPage";
import { faqEn } from "@/content/en/faq";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...faqEn.meta,
  alternates: buildAlternates("faq", "en"),
};

/** English FAQ page. */
export default function FaqRoute() {
  return <FaqPage locale="en" content={faqEn} />;
}
