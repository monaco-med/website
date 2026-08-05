import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
import { commonDe } from "@/content/de/common";
import { servicePagesDe } from "@/content/de/services";

const content = servicePagesDe.arbeitsmedizin;

export const metadata = serviceMetadata(content, "de", "arbeitsmedizin");

/**
 * Arbeitsmedizin service page. Layout lives in `ServicePage`, shared by all four
 * service pages; the copy lives in `content/de/services.ts`.
 */
export default function ArbeitsmedizinPage() {
  return (
    <ServicePage
      locale="de"
      routeKey="arbeitsmedizin"
      content={content}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
