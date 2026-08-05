import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonEn } from "@/content/en/common";
import { servicePagesEn } from "@/content/en/services";

const content = servicePagesEn.arbeitssicherheit;

export const metadata = contentMetadata(content, "en", "arbeitssicherheit");

/** English WorkplaceSafety service page. */
export default function WorkplaceSafetyPage() {
  return (
    <ContentPage
      locale="en"
      routeKey="arbeitssicherheit"
      content={content}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
