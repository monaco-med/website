import ExamPage, { examMetadata } from "@/components/pages/ExamPage";
import { commonDe } from "@/content/de/common";
import { examPagesDe, examParentLabelDe } from "@/content/de/exams";

const content = examPagesDe.g20;

export const metadata = examMetadata(content, "de", "g20");

/**
 * G20 detail page. Layout and behaviour live in `ExamPage`, which all
 * eight G-Untersuchungen pages share; the copy lives in `content/de/exams.ts`.
 */
export default function G20Page() {
  return (
    <ExamPage
      locale="de"
      routeKey="g20"
      content={content}
      parentLabel={examParentLabelDe}
      leistungenLabel={commonDe.header.leistungen}
    />
  );
}
