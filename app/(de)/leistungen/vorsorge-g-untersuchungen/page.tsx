import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonDe } from "@/content/de/common";
import { gUntersuchungenDe } from "@/content/de/g-untersuchungen";

const content = gUntersuchungenDe;

export const metadata = contentMetadata(content, "de", "gUntersuchungen");

/**
 * German G-Untersuchungen overview page — the parent of the eight exam detail
 * pages. Layout in `ContentPage`, copy in `content/de/g-untersuchungen.ts`.
 */
export default function GUntersuchungenPage() {
  return (
    <ContentPage
      locale="de"
      routeKey="gUntersuchungen"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
