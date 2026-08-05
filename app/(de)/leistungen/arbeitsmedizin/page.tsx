import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonDe } from "@/content/de/common";
import { servicePagesDe } from "@/content/de/services";

const content = servicePagesDe.arbeitsmedizin;

export const metadata = contentMetadata(content, "de", "arbeitsmedizin");

/**
 * Arbeitsmedizin service page. Layout lives in `ContentPage`, shared by all four
 * service pages; the copy lives in `content/de/services.ts`.
 */
export default function ArbeitsmedizinPage() {
  return (
    <ContentPage
      locale="de"
      routeKey="arbeitsmedizin"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
