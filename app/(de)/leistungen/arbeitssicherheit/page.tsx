import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
import { commonDe } from "@/content/de/common";
import { servicePagesDe } from "@/content/de/services";

const content = servicePagesDe.arbeitssicherheit;

export const metadata = serviceMetadata(content, "de", "arbeitssicherheit");

/**
 * Arbeitssicherheit service page. Layout lives in `ServicePage`, shared by all four
 * service pages; the copy lives in `content/de/services.ts`.
 */
export default function ArbeitssicherheitPage() {
  return (
    <ServicePage
      locale="de"
      routeKey="arbeitssicherheit"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
