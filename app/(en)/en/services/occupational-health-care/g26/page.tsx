import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonEn } from "@/content/en/common";
import { examPagesEn, examParentLabelEn } from "@/content/en/exams";

const content = examPagesEn.g26;

export const metadata = examMetadata(content, "en", "g26");

/** English G26 exam detail page. */
export default function G26Page() {
  return (
    <ExamPage
      locale="en"
      routeKey="g26"
      content={content}
      parentLabel={examParentLabelEn}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
