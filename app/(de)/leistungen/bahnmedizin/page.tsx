import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
import { commonDe } from "@/content/de/common";
import { servicePagesDe } from "@/content/de/services";

const content = servicePagesDe.bahnmedizin;

export const metadata = serviceMetadata(content, "de", "bahnmedizin");

/**
 * Bahnmedizin service page. Layout lives in `ServicePage`, shared by all four
 * service pages; the copy lives in `content/de/services.ts`.
 */
export default function BahnmedizinPage() {
  return (
    <ServicePage
      locale="de"
      routeKey="bahnmedizin"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
