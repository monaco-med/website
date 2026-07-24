import Reveal from "@/components/Reveal";

/** A single numbered "Warum MonacoMed?" line item. */
export type WhyItem = {
  n: string;
  title: string;
  text: string;
};

/**
 * "Warum MonacoMed?" section: a numbered list of differentiators rendered
 * inside a full-width tinted band.
 *
 * @param solid - Use the solid dark-green background variant (as on
 *   `/fuer-unternehmen`) instead of the default lighter tint (as on the
 *   homepage).
 */
export default function WhyLines({
  items,
  solid = false,
}: {
  items: WhyItem[];
  solid?: boolean;
}) {
  return (
    <section className={solid ? "why-dark solid" : "why-dark"}>
      <div className="wrap">
        <span
          className="lbl"
          style={{ fontSize: 16, letterSpacing: ".12em", color: solid ? "#7fc2ab" : undefined }}
        >
          Warum <span style={{ color: solid ? "#fff" : "var(--green-d)" }}>Monaco</span>Med?
        </span>
        <Reveal className="why-lines" stagger>
          {items.map((item) => (
            <div className="why-line" key={item.n}>
              <span className="wn">{item.n}</span>
              <div>
                <b>{item.title}</b>
                <span className="wd">{item.text}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
