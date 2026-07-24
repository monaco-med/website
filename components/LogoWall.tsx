import Reveal from "@/components/Reveal";

/**
 * Client/reference company names shown on the homepage. Originally this
 * section rendered client logo images (hence the component name) — per
 * client request it now renders names only, styled as a text grid (see
 * `.ref-grid`/`.ref-cell` in `app/globals.css`). Add or remove a name here
 * to change the list; no image assets are involved anymore.
 */
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

/** Homepage "Unternehmen, die MonacoMed vertrauen" reference section. */
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
