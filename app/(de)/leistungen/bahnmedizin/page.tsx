import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonDe } from "@/content/de/common";
import { servicePagesDe } from "@/content/de/services";

const content = servicePagesDe.bahnmedizin;

export const metadata = contentMetadata(content, "de", "bahnmedizin");

/**
 * Bahnmedizin service page. Layout lives in `ContentPage`, shared by all four
 * service pages; the copy lives in `content/de/services.ts`.
 */
export default function BahnmedizinPage() {
  return (
    <ContentPage
      locale="de"
      routeKey="bahnmedizin"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
