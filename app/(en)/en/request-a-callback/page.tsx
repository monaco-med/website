import CallbackPage from "@/components/pages/CallbackPage";
import { commonEn } from "@/content/en/common";
import { rueckrufEn } from "@/content/en/rueckruf";
import { buildAlternates } from "@/lib/seo";

export const metadata = {
  ...rueckrufEn.meta,
  alternates: buildAlternates("rueckruf", "en"),
};

/** English callback-request page. */
export default function RequestACallbackPage() {
  return <CallbackPage locale="en" content={rueckrufEn} common={commonEn} />;
}
