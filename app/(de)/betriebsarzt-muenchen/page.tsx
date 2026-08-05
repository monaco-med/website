import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import PhysicianJsonLd from "@/components/PhysicianJsonLd";
import { betriebsarztMuenchenDe } from "@/content/de/betriebsarzt-muenchen";

const content = betriebsarztMuenchenDe;

export const metadata = contentMetadata(content, "de", "betriebsarztMuenchen");

/**
 * German Betriebsarzt München local-SEO landing page. Layout lives in
 * `ContentPage`; copy in `content/de/betriebsarzt-muenchen.ts`.
 *
 * Emits Physician structured data rather than a breadcrumb trail — this page
 * deliberately sits outside the Leistungen hierarchy.
 */
export default function BetriebsarztMuenchenPage() {
  return (
    <ContentPage
      locale="de"
      routeKey="betriebsarztMuenchen"
      content={content}
      jsonLd={<PhysicianJsonLd locale="de" />}
    />
  );
}
