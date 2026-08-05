/**
 * Builds a standalone side-by-side translation review file for the client.
 *
 * The in-app route `/uebersetzung-review` needs a dev server, which David
 * doesn't run — so this produces a single self-contained HTML file he can open
 * by double-clicking, or that can be emailed as an attachment. No server, no
 * network, no assets.
 *
 * Usage:  node scripts/build-review-file.mjs [outfile]
 *
 * Reads the content modules directly by stripping their TypeScript wrapper,
 * so it stays in step with the site without a build step.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const OUT = process.argv[2] || "MonacoMed-Uebersetzung-Review.html";

/** Content modules to compare, in review order. `pick` selects a sub-key for grouped modules. */
const PAIRS = [
  { label: "Website-Rahmen (Navigation, Fußzeile, Formulare)", file: "common", exportDe: "commonDe", exportEn: "commonEn" },
  { label: "Startseite", file: "home", exportDe: "homeDe", exportEn: "homeEn" },
  { label: "Leistungen: Arbeitsmedizin", file: "services", exportDe: "servicePagesDe", exportEn: "servicePagesEn", pick: "arbeitsmedizin" },
  { label: "Leistungen: Arbeitssicherheit", file: "services", exportDe: "servicePagesDe", exportEn: "servicePagesEn", pick: "arbeitssicherheit" },
  { label: "Leistungen: Bahnmedizin", file: "services", exportDe: "servicePagesDe", exportEn: "servicePagesEn", pick: "bahnmedizin" },
  { label: "Leistungen: Impfungen", file: "services", exportDe: "servicePagesDe", exportEn: "servicePagesEn", pick: "impfungen" },
  { label: "Betriebsarzt München", file: "betriebsarzt-muenchen", exportDe: "betriebsarztMuenchenDe", exportEn: "betriebsarztMuenchenEn" },
  { label: "Für Unternehmen", file: "fuer-unternehmen", exportDe: "fuerUnternehmenDe", exportEn: "fuerUnternehmenEn" },
  { label: "FAQ", file: "faq", exportDe: "faqDe", exportEn: "faqEn" },
  { label: "Kontakt", file: "kontakt", exportDe: "kontaktDe", exportEn: "kontaktEn" },
  { label: "Rückruf", file: "rueckruf", exportDe: "rueckrufDe", exportEn: "rueckrufEn" },
  { label: "Betreuungsbedarf", file: "betreuungsbedarf", exportDe: "betreuungsbedarfDe", exportEn: "betreuungsbedarfEn" },
  { label: "Leistungen (Übersicht)", file: "leistungen", exportDe: "leistungenDe", exportEn: "leistungenEn" },
  { label: "Vorsorge & G-Untersuchungen (Übersicht)", file: "g-untersuchungen", exportDe: "gUntersuchungenDe", exportEn: "gUntersuchungenEn" },
  ...["g20", "g24", "g25", "g26", "g37", "g41", "g42", "asbest"].map((slug) => ({
    label: `G-Untersuchung: ${slug.toUpperCase()}`,
    file: "exams",
    exportDe: "examPagesDe",
    exportEn: "examPagesEn",
    pick: slug,
  })),
];

/** Evaluates the object literal assigned to `exportName` in a content module. */
function loadExport(path, exportName) {
  if (!existsSync(path)) return null;
  const src = readFileSync(path, "utf8");
  const marker = `export const ${exportName}`;
  const at = src.indexOf(marker);
  if (at === -1) return null;
  const open = src.indexOf("{", src.indexOf("=", at));
  let depth = 0;
  for (let i = open; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) {
        const literal = src.slice(open, i + 1);
        // Some modules reference `anchors` for section ids. Those keys are
        // skipped when flattening, but the literal still has to evaluate.
        const anchorStub = new Proxy({}, { get: () => new Proxy({}, { get: () => "" }) });
        return new Function("anchors", `return (${literal});`)(anchorStub);
      }
    }
  }
  return null;
}

/** Walks the German side and looks up the same path in English, so gaps stay visible. */
function flatten(de, en, path = [], out = []) {
  if (typeof de === "string") {
    if (de.trim()) out.push({ path: path.join("."), de, en: typeof en === "string" ? en : "" });
    return out;
  }
  if (Array.isArray(de)) {
    de.forEach((item, i) => flatten(item, Array.isArray(en) ? en[i] : undefined, [...path, i], out));
    return out;
  }
  if (de && typeof de === "object") {
    for (const [key, value] of Object.entries(de)) {
      if (["key", "ctaKey", "variant", "kind", "tone", "flush", "id", "anchor"].includes(key)) continue;
      flatten(value, en && typeof en === "object" ? en[key] : undefined, [...path, key], out);
    }
  }
  return out;
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const groups = [];
for (const pair of PAIRS) {
  let de = loadExport(`content/de/${pair.file}.ts`, pair.exportDe);
  let en = loadExport(`content/en/${pair.file}.ts`, pair.exportEn);
  if (pair.pick) {
    de = de?.[pair.pick];
    en = en?.[pair.pick];
  }
  if (!de) continue;
  // Scope-qualify every key so it is unique across the whole site: 21 pages
  // each have a `meta.title`, so a bare path could not be applied back safely.
  const scope = pair.pick ? `${pair.file}:${pair.pick}` : pair.file;
  const rows = flatten(de, en ?? {}).map((r) => ({ ...r, path: `${scope}/${r.path}` }));
  groups.push({ label: pair.label, rows });
}

const total = groups.reduce((n, g) => n + g.rows.length, 0);
const missing = groups.reduce((n, g) => n + g.rows.filter((r) => !r.en.trim()).length, 0);

const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MonacoMed — Übersetzungs-Review</title>
<style>
  :root { --line:#dde4e0; --ink:#11201c; --soft:#46554f; --mute:#7c8a83; --green:#13443a; --br:#2f8f74; --sand:#f4f6f5; }
  * { box-sizing:border-box; margin:0; padding:0; }
  body { font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; color:var(--ink); background:var(--sand); padding:32px 20px 80px; }
  .wrap { max-width:1180px; margin:0 auto; }
  h1 { font-size:28px; letter-spacing:-.02em; color:var(--green); }
  .intro { margin-top:12px; color:var(--soft); max-width:70ch; }
  .meta { margin-top:14px; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:12.5px; color:var(--mute); }
  .toc { margin-top:22px; display:flex; flex-wrap:wrap; gap:8px; }
  .toc a { font-size:12.5px; text-decoration:none; color:var(--green); border:1px solid var(--line); background:#fff; border-radius:99px; padding:5px 11px; }
  h2 { font-size:19px; margin:40px 0 12px; color:var(--green); scroll-margin-top:16px; }
  table { width:100%; border-collapse:collapse; background:#fff; border:1px solid var(--line); border-radius:10px; overflow:hidden; }
  th { text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:var(--br); font-weight:600; padding:9px 12px; border-bottom:1px solid var(--line); }
  td { padding:9px 12px; border-bottom:1px solid var(--line); vertical-align:top; font-size:13.5px; }
  tr:last-child td { border-bottom:none; }
  td.p { font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:10.5px; color:var(--mute); width:170px; word-break:break-all; }
  td.de { color:var(--soft); width:41%; }
  td.en { color:var(--ink); width:32%; }
  td.missing { color:#b3402f; font-style:italic; }
  td.fix { width:26%; padding:4px; }
  .fix textarea { width:100%; min-height:52px; border:1px solid var(--line); border-radius:6px; padding:6px 8px;
    font:inherit; font-size:13px; color:var(--ink); background:#fffdf7; resize:vertical; }
  .fix textarea:focus { outline:2px solid var(--br); border-color:transparent; }
  tr.edited td.fix textarea { background:#f2fbf6; border-color:var(--br); }
  .bar { position:sticky; top:0; z-index:10; background:var(--sand); padding:12px 0 14px; margin-bottom:-4px;
    border-bottom:1px solid var(--line); display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
  .bar button { font:inherit; font-size:13px; font-weight:600; border:none; border-radius:99px; padding:9px 16px; cursor:pointer;
    background:var(--green); color:#fff; }
  .bar button.ghost { background:transparent; color:var(--green); border:1px solid var(--green); }
  .bar .count { font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:12.5px; color:var(--mute); }
  .hint { margin-top:10px; color:var(--soft); font-size:13.5px; max-width:70ch; background:#fff;
    border:1px solid var(--line); border-left:3px solid var(--br); border-radius:8px; padding:12px 14px; }
  @media print { body { background:#fff; padding:0; } .toc,.bar { display:none; } h2 { page-break-after:avoid; } tr { page-break-inside:avoid; } }
  @media (max-width:820px) { td.p { display:none; } td.de, td.en, td.fix { width:33%; } }
</style>
</head>
<body>
<div class="wrap">
  <h1>MonacoMed — Übersetzungs-Review</h1>
  <p class="intro">
    Deutsch und Englisch nebeneinander. Bitte auf <strong>inhaltliche Abweichungen</strong> prüfen,
    nicht auf wörtliche Übereinstimmung — an einigen Stellen ist bewusst freier übersetzt, damit es
    im Englischen natürlich klingt. Offene Fragen und Begriffsentscheidungen stehen gesammelt in der
    separaten Liste „Offene Punkte“.
  </p>
  <p class="meta">${total} Textstellen · ${missing} noch ohne englische Fassung · Stand: automatisch erzeugt</p>
  <div class="hint">
    <strong>So funktioniert die Korrektur-Spalte:</strong> Nur dort etwas eintragen, wo die englische
    Fassung geändert werden soll — leere Felder bedeuten „passt so“. Eingaben werden automatisch im
    Browser gespeichert, die Datei kann also zwischendurch geschlossen werden.
    Am Ende auf <em>Korrekturen exportieren</em> klicken: das lädt eine kleine Datei herunter, die
    direkt in die Website eingespielt werden kann.
  </div>
  <div class="bar">
    <button onclick="exportFixes()">Korrekturen exportieren</button>
    <button class="ghost" onclick="copyFixes()">In die Zwischenablage kopieren</button>
    <button class="ghost" onclick="clearFixes()">Alle Eingaben löschen</button>
    <span class="count" id="count">0 Korrekturen</span>
  </div>
  <div class="toc">
    ${groups.map((g, i) => `<a href="#g${i}">${esc(g.label)}</a>`).join("\n    ")}
  </div>
  ${groups
    .map(
      (g, i) => `
  <h2 id="g${i}">${esc(g.label)}</h2>
  <table>
    <thead><tr><th>Feld</th><th>Deutsch</th><th>English (Vorschlag)</th><th>Korrektur</th></tr></thead>
    <tbody>
      ${g.rows
        .map(
          (r) => `<tr data-path="${esc(r.path)}"><td class="p" title="${esc(r.path)}">${esc(r.path.split("/")[1] || r.path)}</td><td class="de">${esc(r.de)}</td>${
            r.en.trim()
              ? `<td class="en">${esc(r.en)}</td>`
              : `<td class="en missing">— noch nicht übersetzt —</td>`
          }<td class="fix"><textarea data-path="${esc(r.path)}" placeholder="nur ausfüllen, wenn etwas geändert werden soll"></textarea></td></tr>`
        )
        .join("\n      ")}
    </tbody>
  </table>`
    )
    .join("\n")}
</div>
<script>
/* Corrections are keyed by the same dotted path the site uses internally, so
   scripts/apply-corrections.mjs can write them straight back into content/en. */
const KEY = "monacomed-uebersetzung-korrekturen";

function collect() {
  const out = {};
  document.querySelectorAll("textarea[data-path]").forEach((t) => {
    const v = t.value.trim();
    if (v) out[t.dataset.path] = v;
  });
  return out;
}

function refresh() {
  const fixes = collect();
  const n = Object.keys(fixes).length;
  document.getElementById("count").textContent =
    n === 1 ? "1 Korrektur" : n + " Korrekturen";
  document.querySelectorAll("textarea[data-path]").forEach((t) => {
    t.closest("tr").classList.toggle("edited", t.value.trim().length > 0);
  });
  try { localStorage.setItem(KEY, JSON.stringify(fixes)); } catch (e) {}
}

function restore() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  document.querySelectorAll("textarea[data-path]").forEach((t) => {
    if (saved[t.dataset.path]) t.value = saved[t.dataset.path];
  });
  refresh();
}

function exportFixes() {
  const fixes = collect();
  if (!Object.keys(fixes).length) { alert("Es sind noch keine Korrekturen eingetragen."); return; }
  const blob = new Blob([JSON.stringify(fixes, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "monacomed-korrekturen.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function copyFixes() {
  const fixes = collect();
  if (!Object.keys(fixes).length) { alert("Es sind noch keine Korrekturen eingetragen."); return; }
  navigator.clipboard.writeText(JSON.stringify(fixes, null, 2))
    .then(() => alert("Korrekturen kopiert."))
    .catch(() => alert("Kopieren nicht möglich — bitte den Export-Button verwenden."));
}

function clearFixes() {
  if (!confirm("Wirklich alle Eingaben löschen?")) return;
  document.querySelectorAll("textarea[data-path]").forEach((t) => { t.value = ""; });
  refresh();
}

document.addEventListener("input", (e) => {
  if (e.target.matches("textarea[data-path]")) refresh();
});
restore();
</script>
</body>
</html>
`;

writeFileSync(OUT, html);
console.log(`wrote ${OUT}`);
console.log(`${groups.length} sections · ${total} string pairs · ${missing} untranslated`);
