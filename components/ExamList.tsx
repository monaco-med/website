import Reveal from "@/components/Reveal";

/** One numbered exam/vorsorge entry (e.g. a G-Untersuchungen category). */
export type ExamItem = {
  n: string;
  title: string;
  text: string;
};

/** Numbered list of medical exam types, each with a title and description. */
export default function ExamList({ items }: { items: ExamItem[] }) {
  return (
    <Reveal className="exam-list" stagger>
      {items.map((item) => (
        <div className="exam" key={item.n}>
          <span className="n">{item.n}</span>
          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
