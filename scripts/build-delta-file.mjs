/**
 * Builds the round-2 review file: only what changed *after* the client's own
 * corrections were applied.
 *
 * The full review file is 1,062 rows and he has already read it once. This one
 * shows the ~40 fields where the live text differs from what he submitted, so
 * he can check every editorial call in one pass instead of re-reading the site.
 *
 * Usage:  node scripts/build-delta-file.mjs <corrections.json> [outfile]
 *
 * Rows carry the same scope-qualified data-path keys and the same editable
 * correction column as the round-1 file, so a further round exports the same
 * JSON shape and goes back through scripts/apply-corrections.mjs unchanged.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

/** Commit holding the English text as it stood *before* the correction round. */
const BASE_REV = process.env.BASE_REV || "c02be6c";

const CORR_PATH = process.argv[2];
const OUT = process.argv[3] || "MonacoMed-Aenderungen-Runde-2.html";
if (!CORR_PATH) {
  console.error("Usage: node scripts/build-delta-file.mjs <corrections.json> [outfile]");
  process.exit(1);
}

/** Same module list and review order as build-review-file.mjs. */
const PAIRS = [
  { label: "Website-Rahmen (Navigation, Fußzeile, Formulare)", file: "common", exportDe: "commonDe", exportEn: "commonEn" },
  { label: "Startseite", file: "home", exportDe: "homeDe", exportEn: "homeEn" },
  ...["arbeitsmedizin", "arbeitssicherheit", "bahnmedizin", "impfungen"].map((k) => ({
    label: `Leistungen: ${k[0].toUpperCase()}${k.slice(1)}`,
    file: "services", exportDe: "servicePagesDe", exportEn: "servicePagesEn", pick: k,
  })),
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
    file: "exams", exportDe: "examPagesDe", exportEn: "examPagesEn", pick: slug,
  })),
  { label: "Impressum & Datenschutz", file: "impressum", exportDe: "impressumDe", exportEn: "impressumEn" },
];

/** Parses the object literal assigned to `exportName` out of a module's source. */
function parseExport(src, exportName) {
  const at = src.indexOf(`export const ${exportName}`);
  if (at === -1) return null;
  const open = src.indexOf("{", src.indexOf("=", at));
  let depth = 0;
  for (let i = open; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}" && --depth === 0) {
      const stub = new Proxy({}, { get: () => new Proxy({}, { get: () => "" }) });
      return new Function("anchors", `return (${src.slice(open, i + 1)});`)(stub);
    }
  }
  return null;
}

function loadExport(path, exportName) {
  if (!existsSync(path)) return null;
  return parseExport(readFileSync(path, "utf8"), exportName);
}

/** Same, but from a git revision — the English text before the corrections. */
function loadExportAt(rev, path, exportName) {
  try {
    return parseExport(execFileSync("git", ["show", `${rev}:${path}`], { encoding: "utf8" }), exportName);
  } catch {
    return null; // file did not exist at that revision
  }
}

const SKIP = ["key", "ctaKey", "variant", "kind", "tone", "flush", "id", "anchor"];
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
      if (SKIP.includes(key)) continue;
      flatten(value, en && typeof en === "object" ? en[key] : undefined, [...path, key], out);
    }
    if (en && typeof en === "object" && !Array.isArray(en)) {
      for (const [key, value] of Object.entries(en)) {
        if (key in de || SKIP.includes(key)) continue;
        const start = out.length;
        flatten(value, value, [...path, key], out);
        for (let i = start; i < out.length; i++) out[i].de = "";
      }
    }
  }
  return out;
}

/**
 * Fields where the client's own wording was deliberately overridden, rather
 * than a typo being fixed. These are the rows he is most likely to want back,
 * so they get their own group instead of hiding among the spelling fixes.
 */
const OVERRIDDEN = new Set([
  "common/header.leistungenSub.4.label",
  "common/footer.links.5.label",
  "services:arbeitsmedizin/sections.0.items.1.text",
  "home/steps.items.3.text",
]);

/** Why the live text differs from the baseline — drives the grouping. */
function classify(key, before, live, wasCorrected) {
  if (OVERRIDDEN.has(key)) return "override";
  const norm = (s) => String(s).toLowerCase().replace(/\s+/g, " ").trim();
  if (norm(before) === norm(live)) return "case";
  if (!wasCorrected) return "sweep";
  return "fix";
}
const REASON = {
  override: ["Deine Formulierung geändert", "Hier habe ich bewusst von deiner Korrektur abgewichen, weil sie im Widerspruch zu einer anderen Stelle stand. <strong>Bitte genau ansehen — wenn du bei deiner Fassung bleiben willst, einfach rechts eintragen.</strong>"],
  fix:   ["Tippfehler / Korrektur", "Kleine Fehler, die beim Korrekturlauf entstanden sind – z. B. ein fehlender Anfangsbuchstabe. <strong>Bitte kurz prüfen.</strong>"],
  sweep: ["Begriff vereinheitlicht", "Diese Stellen hattest du nicht geöffnet, dort stand noch die alte Begriffswahl. Jetzt seitenweit einheitlich. <strong>Bitte kurz prüfen.</strong>"],
  case:  ["Groß-/Kleinschreibung", "Nur die Schreibweise, kein Wort geändert: Überschriften jetzt einheitlich wie im Deutschen – nur das erste Wort groß. Kann man überspringen."],
};

const CORR = JSON.parse(readFileSync(CORR_PATH, "utf8"));
const groups = { override: [], fix: [], sweep: [], case: [] };
for (const pair of PAIRS) {
  let de = loadExport(`content/de/${pair.file}.ts`, pair.exportDe);
  let en = loadExport(`content/en/${pair.file}.ts`, pair.exportEn);
  if (pair.pick) { de = de?.[pair.pick]; en = en?.[pair.pick]; }
  if (!de) continue;
  const scope = pair.pick ? `${pair.file}:${pair.pick}` : pair.file;
  // What the field held before the correction round, for fields he never opened.
  let old = loadExportAt(BASE_REV, `content/en/${pair.file}.ts`, pair.exportEn);
  if (pair.pick) old = old?.[pair.pick];
  const oldByPath = new Map(flatten(de, old ?? {}).map((r) => [r.path, r.en]));

  for (const row of flatten(de, en ?? {})) {
    const key = `${scope}/${row.path}`;
    const submitted = CORR[key];
    const live = row.en;
    // Baseline is what he last saw: his own correction, else the original draft.
    const before = submitted !== undefined ? submitted : (oldByPath.get(row.path) ?? "");
    if (before === live) continue;
    groups[classify(key, before, live, submitted !== undefined)].push({
      key, page: pair.label, de: row.de, before, corrected: submitted !== undefined, live,
    });
  }
}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const total = Object.values(groups).reduce((n, g) => n + g.length, 0);

const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MonacoMed — Änderungen nach deiner Korrekturrunde</title>
<style>
  :root { --line:#dde4e0; --ink:#11201c; --soft:#46554f; --mute:#7c8a83; --green:#13443a; --br:#2f8f74; --sand:#f4f6f5; }
  * { box-sizing:border-box; margin:0; padding:0; }
  body { font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; color:var(--ink); background:var(--sand); padding:32px 20px 80px; }
  .wrap { max-width:1180px; margin:0 auto; }
  h1 { font-size:28px; letter-spacing:-.02em; color:var(--green); }
  .intro { margin-top:12px; color:var(--soft); max-width:70ch; }
  .meta { margin-top:14px; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:12.5px; color:var(--mute); }
  h2 { font-size:19px; margin:40px 0 4px; color:var(--green); scroll-margin-top:16px; }
  h2 .n { font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:13px; color:var(--mute); font-weight:400; }
  .why { color:var(--soft); font-size:13.5px; margin-bottom:12px; max-width:74ch; }
  table { width:100%; border-collapse:collapse; background:#fff; border:1px solid var(--line); border-radius:10px; overflow:hidden; }
  th { text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:var(--br); font-weight:600; padding:9px 12px; border-bottom:1px solid var(--line); }
  td { padding:9px 12px; border-bottom:1px solid var(--line); vertical-align:top; font-size:13.5px; }
  tr:last-child td { border-bottom:none; }
  td.pg { width:150px; color:var(--mute); font-size:11.5px; }
  td.de { color:var(--soft); width:26%; }
  td.was { color:#8a6d3b; width:24%; }
  td.now { color:var(--ink); width:24%; }
  td.none { color:var(--mute); font-style:italic; }
  td.fix { width:22%; padding:4px; }
  .fix textarea { width:100%; min-height:50px; border:1px solid var(--line); border-radius:6px; padding:6px 8px;
    font:inherit; font-size:13px; color:var(--ink); background:#fffdf7; resize:vertical; }
  .fix textarea:focus { outline:2px solid var(--br); border-color:transparent; }
  tr.edited td.fix textarea { background:#f2fbf6; border-color:var(--br); }
  .bar { position:sticky; top:0; z-index:10; background:var(--sand); padding:12px 0 14px; margin-bottom:-4px;
    border-bottom:1px solid var(--line); display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
  .bar button { font:inherit; font-size:13px; font-weight:600; border:none; border-radius:99px; padding:9px 16px; cursor:pointer; background:var(--green); color:#fff; }
  .bar button.ghost { background:transparent; color:var(--green); border:1px solid var(--green); }
  .bar .count { font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:12.5px; color:var(--mute); }
  .hint { margin-top:10px; color:var(--soft); font-size:13.5px; max-width:74ch; background:#fff;
    border:1px solid var(--line); border-left:3px solid var(--br); border-radius:8px; padding:12px 14px; }
  details > summary { cursor:pointer; list-style:none; }
  details > summary::-webkit-details-marker { display:none; }
  details > summary h2::after { content:" ▸ anzeigen"; font-size:13px; color:var(--br); font-weight:400; }
  details[open] > summary h2::after { content:" ▾ ausblenden"; }
  @media print { body { background:#fff; padding:0; } .bar { display:none; } tr { page-break-inside:avoid; } }
  @media (max-width:820px) { td.pg { display:none; } td.de,td.was,td.now,td.fix { width:25%; } }
</style>
</head>
<body>
<div class="wrap">
  <h1>MonacoMed — Änderungen nach deiner Korrekturrunde</h1>
  <p class="intro">
    Deine ${Object.keys(CORR).length} Korrekturen sind vollständig übernommen. Diese Liste zeigt <strong>nur</strong> die
    Stellen, an denen der jetzige Text von dem abweicht, was du geschickt hast — damit du jede
    redaktionelle Entscheidung prüfen kannst, ohne die ganze Website noch einmal zu lesen.
  </p>
  <p class="meta">${total} Abweichungen · ${Object.keys(CORR).length} Korrekturen übernommen · alles Übrige steht genau so, wie du es geschrieben hast</p>
  <div class="hint">
    <strong>Wichtig:</strong> Alles, was hier <em>nicht</em> steht, ist unverändert deine Fassung.
    Wenn dir eine Änderung nicht passt, trag rechts die gewünschte Formulierung ein und exportiere
    am Ende — leere Felder heißen „passt so“.
  </div>
  <div class="bar">
    <button onclick="exportFixes()">Korrekturen exportieren</button>
    <button class="ghost" onclick="copyFixes()">In die Zwischenablage kopieren</button>
    <button class="ghost" onclick="clearFixes()">Alle Eingaben löschen</button>
    <span class="count" id="count">0 Korrekturen</span>
  </div>
${["override", "fix", "sweep", "case"].filter((k) => groups[k].length).map((k) => `
  ${k === "case" ? "<details><summary>" : ""}
  <h2>${REASON[k][0]} <span class="n">· ${groups[k].length}</span></h2>
  <p class="why">${REASON[k][1]}</p>
  ${k === "case" ? "</summary>" : ""}
  <table>
    <thead><tr><th>Seite</th><th>Deutsch</th><th>Vorher</th><th>Jetzt online</th><th>Korrektur</th></tr></thead>
    <tbody>
      ${groups[k].map((r) => `<tr data-path="${esc(r.key)}"><td class="pg" title="${esc(r.key)}">${esc(r.page)}</td><td class="de">${esc(r.de)}</td><td class="was">${esc(r.before)}${r.corrected ? "" : ` <em>(nicht korrigiert)</em>`}</td><td class="now">${esc(r.live)}</td><td class="fix"><textarea data-path="${esc(r.key)}" placeholder="nur ausfüllen, wenn etwas geändert werden soll"></textarea></td></tr>`).join("\n      ")}
    </tbody>
  </table>${k === "case" ? "</details>" : ""}`).join("\n")}
</div>
<script>
const KEY = "monacomed-runde2-korrekturen";
function collect(){const o={};document.querySelectorAll("textarea[data-path]").forEach(t=>{const v=t.value.trim();if(v)o[t.dataset.path]=v;});return o;}
function refresh(){const f=collect(),n=Object.keys(f).length;
  document.getElementById("count").textContent=n===1?"1 Korrektur":n+" Korrekturen";
  document.querySelectorAll("textarea[data-path]").forEach(t=>t.closest("tr").classList.toggle("edited",t.value.trim().length>0));
  try{localStorage.setItem(KEY,JSON.stringify(f));}catch(e){}}
function restore(){let s={};try{s=JSON.parse(localStorage.getItem(KEY)||"{}");}catch(e){}
  document.querySelectorAll("textarea[data-path]").forEach(t=>{if(s[t.dataset.path])t.value=s[t.dataset.path];});refresh();}
function exportFixes(){const f=collect();if(!Object.keys(f).length){alert("Es sind noch keine Korrekturen eingetragen.");return;}
  const b=new Blob([JSON.stringify(f,null,2)],{type:"application/json;charset=utf-8"});
  const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="monacomed-korrekturen-runde2.json";a.click();URL.revokeObjectURL(a.href);}
function copyFixes(){const f=collect();if(!Object.keys(f).length){alert("Es sind noch keine Korrekturen eingetragen.");return;}
  navigator.clipboard.writeText(JSON.stringify(f,null,2)).then(()=>alert("Korrekturen kopiert.")).catch(()=>alert("Kopieren nicht möglich — bitte den Export-Button verwenden."));}
function clearFixes(){if(!confirm("Wirklich alle Eingaben löschen?"))return;
  document.querySelectorAll("textarea[data-path]").forEach(t=>{t.value="";});refresh();}
document.addEventListener("input",e=>{if(e.target.matches("textarea[data-path]"))refresh();});
restore();
</script>
</body>
</html>
`;
writeFileSync(OUT, html);
console.log(`wrote ${OUT}`);
for (const k of ["override", "fix", "sweep", "case"]) console.log(`  ${REASON[k][0].padEnd(26)} ${groups[k].length}`);
console.log(`  ${"total".padEnd(26)} ${total}`);
