import ContentPage, { contentMetadata } from "@/components/pages/ContentPage";
import PhysicianJsonLd from "@/components/PhysicianJsonLd";
import { betriebsarztMuenchenEn } from "@/content/en/betriebsarzt-muenchen";

const content = betriebsarztMuenchenEn;

export const metadata = contentMetadata(content, "en", "betriebsarztMuenchen");

/** English company-doctor-in-Munich landing page. */
export default function CompanyDoctorMunichPage() {
  return (
    <ContentPage
      locale="en"
      routeKey="betriebsarztMuenchen"
      content={content}
      jsonLd={<PhysicianJsonLd locale="en" />}
    />
  );
}
