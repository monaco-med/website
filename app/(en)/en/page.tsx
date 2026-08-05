import HomePage from "@/components/pages/HomePage";
import { commonEn } from "@/content/en/common";
import { homeEn } from "@/content/en/home";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...homeEn.meta,
  alternates: buildAlternates("home", "en"),
};

/** English homepage. Layout in `HomePage`, copy in `content/en/home.ts`. */
export default function EnglishHomePage() {
  return <HomePage locale="en" content={homeEn} common={commonEn} />;
}
