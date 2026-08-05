import CallbackPage from "@/components/pages/CallbackPage";
import { commonDe } from "@/content/de/common";
import { rueckrufDe } from "@/content/de/rueckruf";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...rueckrufDe.meta,
  alternates: buildAlternates("rueckruf", "de"),
};

/** German callback-request page. Layout in `CallbackPage`, copy in `content/de/rueckruf.ts`. */
export default function RueckrufPage() {
  return <CallbackPage locale="de" content={rueckrufDe} common={commonDe} />;
}
