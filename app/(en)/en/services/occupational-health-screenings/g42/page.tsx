import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonEn } from "@/content/en/common";
import { examPagesEn, examParentLabelEn } from "@/content/en/exams";

const content = examPagesEn.g42;

export const metadata = examMetadata(content, "en", "g42");

/** English G42 exam detail page. */
export default function G42Page() {
  return (
    <ExamPage
      locale="en"
      routeKey="g42"
      content={content}
      parentLabel={examParentLabelEn}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
