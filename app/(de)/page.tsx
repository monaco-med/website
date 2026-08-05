import HomePage from "@/components/pages/HomePage";
import { commonDe } from "@/content/de/common";
import { homeDe } from "@/content/de/home";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...homeDe.meta,
  alternates: buildAlternates("home", "de"),
};

/** German homepage. Layout in `HomePage`, copy in `content/de/home.ts`. */
export default function GermanHomePage() {
  return <HomePage locale="de" content={homeDe} common={commonDe} />;
}
