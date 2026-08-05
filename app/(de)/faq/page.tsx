import FaqPage from "@/components/pages/FaqPage";
import { faqDe } from "@/content/de/faq";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...faqDe.meta,
  alternates: buildAlternates("faq", "de"),
};

/** German FAQ page. Layout in `FaqPage`, copy in `content/de/faq.ts`. */
export default function FaqRoute() {
  return <FaqPage locale="de" content={faqDe} />;
}
