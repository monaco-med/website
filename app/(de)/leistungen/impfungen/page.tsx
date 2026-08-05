import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonDe } from "@/content/de/common";
import { servicePagesDe } from "@/content/de/services";

const content = servicePagesDe.impfungen;

export const metadata = contentMetadata(content, "de", "impfungen");

/**
 * Impfungen service page. Layout lives in `ContentPage`, shared by all four
 * service pages; the copy lives in `content/de/services.ts`.
 */
export default function ImpfungenPage() {
  return (
    <ContentPage
      locale="de"
      routeKey="impfungen"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
