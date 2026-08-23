import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonEn } from "@/content/en/common";
import { examPagesEn, examParentLabelEn } from "@/content/en/exams";

const content = examPagesEn.g41;

export const metadata = examMetadata(content, "en", "g41");

/** English G41 exam detail page. */
export default function G41Page() {
  return (
    <ExamPage
      locale="en"
      routeKey="g41"
      content={content}
      parentLabel={examParentLabelEn}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
