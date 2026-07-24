import Reveal from "@/components/Reveal";

const references = [
  "Paulaner Brauerei Gruppe",
  "OHB System AG",
  "Sumitomo Drive Technologies",
  "Munich Electrification GmbH",
  "Torqeedo GmbH",
  "JobRad Loop",
  "ASMPT Logistics GmbH",
  "Roland Berger Stiftung",
  "EMS Electro Medical Systems",
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
          <Reveal className="ref-grid" stagger>
            {references.map((name) => (
              <div className="ref-cell" key={name}>
                <span>{name}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
