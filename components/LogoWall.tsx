import Image from "next/image";
import Reveal from "@/components/Reveal";

const logos = [
  { src: "/images/logo-betz-chrom.png", alt: "Betz Chrom", w: 304, h: 165 },
  { src: "/images/logo-deepdrive.png", alt: "DeepDrive", w: 371, h: 136 },
  { src: "/images/logo-ems.png", alt: "EMS", w: 464, h: 108 },
  { src: "/images/logo-jobrad-loop.png", alt: "JobRad Loop", w: 200, h: 200 },
  { src: "/images/logo-o2-surftown.png", alt: "O2 Surftown MUC", w: 560, h: 338 },
  { src: "/images/logo-torqeedo.png", alt: "Torqeedo", w: 560, h: 126 },
  { src: "/images/logo-ohb.png", alt: "OHB", w: 420, h: 120 },
];

export default function LogoWall() {
  return (
    <section id="referenzen">
      <div className="wrap" style={{ paddingTop: 44, paddingBottom: 20 }}>
        <Reveal>
          <p
            className="refs-line"
            style={{ marginBottom: 0, color: "var(--green-br)", fontSize: 17 }}
          >
            Unternehmen, die <span className="mm">Monaco<i>Med</i></span> vertrauen
          </p>
        </Reveal>
      </div>
      <div className="refs" style={{ padding: "22px 0" }}>
        <div className="wrap">
          <Reveal className="logo-grid" stagger>
            <div className="logo-cell">
              <span className="logo-word">Paulaner</span>
            </div>
            {logos.map((logo) => (
              <div className="logo-cell" key={logo.src}>
                <Image src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
