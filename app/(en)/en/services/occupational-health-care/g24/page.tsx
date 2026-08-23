import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonEn } from "@/content/en/common";
import { examPagesEn, examParentLabelEn } from "@/content/en/exams";

const content = examPagesEn.g24;

export const metadata = examMetadata(content, "en", "g24");

/** English G24 exam detail page. */
export default function G24Page() {
  return (
    <ExamPage
      locale="en"
      routeKey="g24"
      content={content}
      parentLabel={examParentLabelEn}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
