import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { fuerUnternehmenEn } from "@/content/en/fuer-unternehmen";

const content = fuerUnternehmenEn;

export const metadata = contentMetadata(content, "en", "fuerUnternehmen");

/** English "For companies" page. */
export default function ForCompaniesPage() {
  return <ContentPage locale="en" routeKey="fuerUnternehmen" content={content} />;
}
