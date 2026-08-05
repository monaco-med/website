import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonDe } from "@/content/de/common";
import { servicePagesDe } from "@/content/de/services";

const content = servicePagesDe.arbeitssicherheit;

export const metadata = contentMetadata(content, "de", "arbeitssicherheit");

/**
 * Arbeitssicherheit service page. Layout lives in `ContentPage`, shared by all four
 * service pages; the copy lives in `content/de/services.ts`.
 */
export default function ArbeitssicherheitPage() {
  return (
    <ContentPage
      locale="de"
      routeKey="arbeitssicherheit"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
