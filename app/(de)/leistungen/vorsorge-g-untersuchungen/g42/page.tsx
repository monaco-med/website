import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonDe } from "@/content/de/common";
import { examPagesDe, examParentLabelDe } from "@/content/de/exams";

const content = examPagesDe.g42;

export const metadata = examMetadata(content, "de", "g42");

/**
 * G42 detail page. Layout and behaviour live in `ExamPage`, which all
 * eight G-Untersuchungen pages share; the copy lives in `content/de/exams.ts`.
 */
export default function G42Page() {
  return (
    <ExamPage
      locale="de"
      routeKey="g42"
      content={content}
      parentLabel={examParentLabelDe}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
