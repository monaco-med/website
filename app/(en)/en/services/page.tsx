import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { leistungenEn } from "@/content/en/leistungen";

const content = leistungenEn;

export const metadata = contentMetadata(content, "en", "leistungen");

/** English services overview page. */
export default function ServicesPage() {
  return <ContentPage locale="en" routeKey="leistungen" content={content} />;
}
