import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
import { commonDe } from "@/content/de/common";
import { servicePagesDe } from "@/content/de/services";

const content = servicePagesDe.impfungen;

export const metadata = serviceMetadata(content, "de", "impfungen");

/**
 * Impfungen service page. Layout lives in `ServicePage`, shared by all four
 * service pages; the copy lives in `content/de/services.ts`.
 */
export default function ImpfungenPage() {
  return (
    <ServicePage
      locale="de"
      routeKey="impfungen"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
