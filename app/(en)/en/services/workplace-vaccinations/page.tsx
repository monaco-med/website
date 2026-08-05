import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { commonEn } from "@/content/en/common";
import { servicePagesEn } from "@/content/en/services";

const content = servicePagesEn.impfungen;

export const metadata = contentMetadata(content, "en", "impfungen");

/** English WorkplaceVaccinations service page. */
export default function WorkplaceVaccinationsPage() {
  return (
    <ContentPage
      locale="en"
      routeKey="impfungen"
      content={content}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
