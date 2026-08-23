import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonEn } from "@/content/en/common";
import { examPagesEn, examParentLabelEn } from "@/content/en/exams";

const content = examPagesEn.g25;

export const metadata = examMetadata(content, "en", "g25");

/** English G25 exam detail page. */
export default function G25Page() {
  return (
    <ExamPage
      locale="en"
      routeKey="g25"
      content={content}
      parentLabel={examParentLabelEn}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
