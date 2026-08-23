import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonEn } from "@/content/en/common";
import { examPagesEn, examParentLabelEn } from "@/content/en/exams";

const content = examPagesEn.g37;

export const metadata = examMetadata(content, "en", "g37");

/** English G37 exam detail page. */
export default function G37Page() {
  return (
    <ExamPage
      locale="en"
      routeKey="g37"
      content={content}
      parentLabel={examParentLabelEn}
      leistungenLabel={commonEn.header.leistungen}
    />
  );
}
