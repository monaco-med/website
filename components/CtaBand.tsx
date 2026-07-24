import Link from "next/link";
import Reveal from "@/components/Reveal";

/**
 * Full-width dark call-to-action banner, used as the closing section of
 * most content pages (a single primary link, e.g. to `routes.betreuungsbedarf`
 * or `routes.rueckruf`).
 */
export default function CtaBand({
  label,
  title,
  text,
  ctaHref,
  ctaLabel,
  center = false,
}: {
  label: string;
  title: string;
  text: string;
  ctaHref: string;
  ctaLabel: string;
  center?: boolean;
}) {
  return (
    <section className={center ? "cta-band center" : "cta-band"}>
      <div className="wrap">
        <Reveal>
          <span className="lbl" style={{ color: "#7fc2ab" }}>
            {label}
          </span>
          <h2 style={{ marginTop: 14 }}>{title}</h2>
          <p>{text}</p>
          <div style={{ marginTop: 28 }}>
            <Link href={ctaHref} className="btn btn-light">
              {ctaLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
