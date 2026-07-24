import Reveal from "@/components/Reveal";

/** A single numbered step (`n` is the display label, e.g. "01" or "Schritt 01"). */
export type StepItem = {
  n: string;
  title: string;
  text: string;
};

/**
 * Numbered process/step list. Applies a `steps-5` modifier class when
 * given exactly 5 items so `app/globals.css` can size that specific case
 * differently — pass any other length for the standard layout.
 */
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
