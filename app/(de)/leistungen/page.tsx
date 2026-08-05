import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import { leistungenDe } from "@/content/de/leistungen";

const content = leistungenDe;

export const metadata = contentMetadata(content, "de", "leistungen");

/**
 * German services overview page. Layout in `ContentPage`, copy in
 * `content/de/leistungen.ts`.
 *
 * Sits one level below the root, so it renders no breadcrumb or JSON-LD.
 */
export default function LeistungenPage() {
  return <ContentPage locale="de" routeKey="leistungen" content={content} />;
}
