import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonEn } from "@/content/en/common";
import { examPagesEn, examParentLabelEn } from "@/content/en/exams";

const content = examPagesEn.asbest;

export const metadata = examMetadata(content, "en", "asbest");

/** English Asbestos exam detail page. */
export default function AsbestosPage() {
  return (
    <ExamPage
      locale="en"
      routeKey="asbest"
      content={content}
      parentLabel={examParentLabelEn}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
