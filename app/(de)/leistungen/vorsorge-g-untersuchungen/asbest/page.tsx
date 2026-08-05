import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonDe } from "@/content/de/common";
import { examPagesDe, examParentLabelDe } from "@/content/de/exams";

const content = examPagesDe.asbest;

export const metadata = examMetadata(content, "de", "asbest");

/**
 * Asbest detail page. Layout and behaviour live in `ExamPage`, which all
 * eight G-Untersuchungen pages share; the copy lives in `content/de/exams.ts`.
 */
export default function AsbestPage() {
  return (
    <ExamPage
      locale="de"
      routeKey="asbest"
      content={content}
      parentLabel={examParentLabelDe}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
