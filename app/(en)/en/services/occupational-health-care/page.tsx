import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonEn } from "@/content/en/common";
import { gUntersuchungenEn } from "@/content/en/g-untersuchungen";

const content = gUntersuchungenEn;

export const metadata = contentMetadata(content, "en", "gUntersuchungen");

/** English G-Untersuchungen overview — parent of the eight exam detail pages. */
export default function OccupationalHealthScreeningsPage() {
  return (
    <ContentPage
      locale="en"
      routeKey="gUntersuchungen"
      content={content}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
