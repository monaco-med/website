import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonEn } from "@/content/en/common";
import { servicePagesEn } from "@/content/en/services";

const content = servicePagesEn.bahnmedizin;

export const metadata = contentMetadata(content, "en", "bahnmedizin");

/** English RailwayMedicine service page. */
export default function RailwayMedicinePage() {
  return (
    <ContentPage
      locale="en"
      routeKey="bahnmedizin"
      content={content}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
