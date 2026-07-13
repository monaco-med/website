import Reveal from "@/components/Reveal";

export type ExamItem = {
  n: string;
  title: string;
  text: string;
};

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
