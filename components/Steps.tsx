import Reveal from "@/components/Reveal";

export type StepItem = {
  n: string;
  title: string;
  text: string;
};

export default function Steps({ items }: { items: StepItem[] }) {
  const cls = items.length === 5 ? "steps steps-5" : "steps";
  return (
    <Reveal className={cls} stagger>
      {items.map((item) => (
        <div className="step" key={item.n}>
          <div className="n">{item.n}</div>
          <div className="bar" />
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </Reveal>
  );
}
