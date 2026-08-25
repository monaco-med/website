import HomePage from "@/components/pages/HomePage";
import { commonEn } from "@/content/en/common";
import { homeEn } from "@/content/en/home";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...homeEn.meta,
  // `title.template` in the root layout appends "| MonacoMed" to every child
  // segment. The German homepage escapes it by sitting in the same segment as
  // its layout; this one is a segment deeper because of the /en prefix, so the
  // brand would appear twice. `absolute` opts out and matches the German side.
  title: { absolute: homeEn.meta.title },
  alternates: buildAlternates("home", "en"),
};

/** English homepage. Layout in `HomePage`, copy in `content/en/home.ts`. */
export default function EnglishHomePage() {
  return <HomePage locale="en" content={homeEn} common={commonEn} />;
}
