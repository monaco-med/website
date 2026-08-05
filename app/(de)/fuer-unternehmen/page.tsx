import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { fuerUnternehmenDe } from "@/content/de/fuer-unternehmen";

const content = fuerUnternehmenDe;

export const metadata = contentMetadata(content, "de", "fuerUnternehmen");

/**
 * German "Für Unternehmen" page. Layout in `ContentPage`, copy in
 * `content/de/fuer-unternehmen.ts`.
 *
 * Top-level marketing page, so it renders no breadcrumb or JSON-LD.
 */
export default function FuerUnternehmenPage() {
  return <ContentPage locale="de" routeKey="fuerUnternehmen" content={content} />;
}
