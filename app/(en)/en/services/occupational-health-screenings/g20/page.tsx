import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonEn } from "@/content/en/common";
import { examPagesEn, examParentLabelEn } from "@/content/en/exams";

const content = examPagesEn.g20;

export const metadata = examMetadata(content, "en", "g20");

/** English G20 exam detail page. */
export default function G20Page() {
  return (
    <ExamPage
      locale="en"
      routeKey="g20"
      content={content}
      parentLabel={examParentLabelEn}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
