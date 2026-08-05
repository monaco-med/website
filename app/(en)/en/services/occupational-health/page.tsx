import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonEn } from "@/content/en/common";
import { servicePagesEn } from "@/content/en/services";

const content = servicePagesEn.arbeitsmedizin;

export const metadata = contentMetadata(content, "en", "arbeitsmedizin");

/** English OccupationalHealth service page. */
export default function OccupationalHealthPage() {
  return (
    <ContentPage
      locale="en"
      routeKey="arbeitsmedizin"
      content={content}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
