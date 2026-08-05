/**
 * Applies David's translation corrections back into `content/en/*`.
 *
 * Input is the JSON exported from the review file
 * (`MonacoMed-Uebersetzung-Review.html` → "Korrekturen exportieren"), keyed by
 * the same dotted paths the review file displays:
 *
 *   { "header.navItems.0.label": "For businesses", ... }
 *
 * Usage:
 *   node scripts/apply-corrections.mjs monacomed-korrekturen.json          # dry run
 *   node scripts/apply-corrections.mjs monacomed-korrekturen.json --write  # apply
 *
 * Edits are located by walking the dotted path through the source text, not by
 * searching for the old string — several fields legitimately hold identical
 * text (`meta.title` and `h1` are usually the same), and a plain search would
 * either refuse to act or patch the wrong one. Only the exact string literal at
 * the resolved path is rewritten, so comments, ordering and formatting survive.
 *
 * Run without `--write` first and read the report.
 */
import { readFileSync, writeFileSync } from "node:fs";

const [inputPath, ...flags] = process.argv.slice(2);
const WRITE = flags.includes("--write");

if (!inputPath) {
  console.error("Usage: node scripts/apply-corrections.mjs <corrections.json> [--write]");
  process.exit(1);
}

/** English content modules, in the order the review file lists them. */
const MODULES = [
  { file: "common", exportName: "commonEn" },
  { file: "home", exportName: "homeEn" },
  { file: "services", exportName: "servicePagesEn", keyed: true },
  { file: "betriebsarzt-muenchen", exportName: "betriebsarztMuenchenEn" },
  { file: "fuer-unternehmen", exportName: "fuerUnternehmenEn" },
  { file: "faq", exportName: "faqEn" },
  { file: "kontakt", exportName: "kontaktEn" },
  { file: "rueckruf", exportName: "rueckrufEn" },
  { file: "betreuungsbedarf", exportName: "betreuungsbedarfEn" },
  { file: "leistungen", exportName: "leistungenEn" },
  { file: "g-untersuchungen", exportName: "gUntersuchungenEn" },
  { file: "exams", exportName: "examPagesEn", keyed: true },
  { file: "impressum", exportName: "impressumEn" },
];

/** Advances past a string literal starting at `i`. */
function skipString(src, i) {
  const quote = src[i];
  i++;
  while (i < src.length) {
    if (src[i] === "\\") i += 2;
    else if (src[i] === quote) return i + 1;
    else i++;
  }
  return i;
}

/** Range of the value that follows `start`, which sits on `{`, `[` or a quote. */
function valueRange(src, start) {
  const ch = src[start];
  if (ch === '"' || ch === "'" || ch === "`") return [start, skipString(src, start)];
  if (ch !== "{" && ch !== "[") {
    let i = start;
    while (i < src.length && !",}]\n".includes(src[i])) i++;
    return [start, i];
  }
  const close = ch === "{" ? "}" : "]";
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") {
      i = skipString(src, i) - 1;
      continue;
    }
    if (c === ch) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) return [start, i + 1];
    }
  }
  return [start, src.length];
}

/** First non-whitespace index at or after `i`. */
function skipSpace(src, i) {
  while (i < src.length && /\s/.test(src[i])) i++;
  return i;
}

/** Finds `key:` at the top level of the object spanning [from,to). */
function findKey(src, from, to, key) {
  let depth = 0;
  for (let i = from; i < to; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") {
      i = skipString(src, i) - 1;
      continue;
    }
    if (c === "{" || c === "[") depth++;
    else if (c === "}" || c === "]") depth--;
    else if (depth === 1) {
      const slice = src.slice(i, i + key.length + 1);
      const before = src[i - 1];
      if (slice === key + ":" && !/[\w$]/.test(before)) {
        return valueRange(src, skipSpace(src, i + key.length + 1));
      }
    }
  }
  return null;
}

/** Range of the nth top-level element of the array spanning [from,to). */
function findIndex(src, from, to, n) {
  let depth = 0;
  let seen = -1;
  for (let i = from; i < to; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") {
      const end = skipString(src, i);
      if (depth === 1) {
        seen++;
        if (seen === n) return [i, end];
      }
      i = end - 1;
      continue;
    }
    if (c === "[" || c === "{") {
      depth++;
      if (depth === 2) {
        seen++;
        const range = valueRange(src, i);
        if (seen === n) return range;
        i = range[1] - 1;
        depth--;
      }
    } else if (c === "]" || c === "}") depth--;
  }
  return null;
}

/** Resolves a dotted path to the exact [start,end) of its string literal. */
function locate(src, rootRange, path) {
  let [from, to] = rootRange;
  for (const segment of path.split(".")) {
    const next = /^\d+$/.test(segment)
      ? findIndex(src, from, to, Number(segment))
      : findKey(src, from, to, segment);
    if (!next) return null;
    [from, to] = next;
  }
  return src[from] === '"' ? [from, to] : null;
}

/** Range of the object literal assigned to `exportName`. */
function rootRange(src, exportName) {
  const at = src.indexOf(`export const ${exportName}`);
  if (at === -1) return null;
  return valueRange(src, src.indexOf("{", src.indexOf("=", at)));
}

const corrections = Object.entries(JSON.parse(readFileSync(inputPath, "utf8")));
console.log(`${corrections.length} correction(s) in ${inputPath}\n`);

const byFile = new Map(MODULES.map((m) => [m.file, m]));
const sources = new Map();
const problems = [];
let applied = 0;

for (const [key, newText] of corrections) {
  // Keys are scope-qualified by the review file: "<file>[:<pick>]/<path>"
  const slash = key.indexOf("/");
  if (slash === -1) {
    problems.push(`bad key     ${key} (expected "<module>/<path>")`);
    continue;
  }
  const scope = key.slice(0, slash);
  const path = key.slice(slash + 1);
  const [file, pick] = scope.split(":");

  const mod = byFile.get(file);
  if (!mod) {
    problems.push(`unknown     ${key} → no module "${file}"`);
    continue;
  }

  if (!sources.has(file)) {
    try {
      sources.set(file, readFileSync(`content/en/${file}.ts`, "utf8"));
    } catch {
      problems.push(`missing     content/en/${file}.ts (not translated yet)`);
      continue;
    }
  }
  let src = sources.get(file);

  const root = rootRange(src, mod.exportName);
  if (!root) {
    problems.push(`no export   ${mod.exportName} in ${file}.ts`);
    continue;
  }

  const fullPath = pick ? `${pick}.${path}` : path;
  const range = locate(src, root, fullPath);
  if (!range) {
    problems.push(`no match    ${key}`);
    continue;
  }

  const oldText = JSON.parse(src.slice(range[0], range[1]));
  if (oldText === newText) continue;

  src = src.slice(0, range[0]) + JSON.stringify(newText) + src.slice(range[1]);
  sources.set(file, src);
  console.log(`  ${file}.ts  ${fullPath}`);
  console.log(`    - ${oldText}`);
  console.log(`    + ${newText}`);
  applied++;
}

if (WRITE) {
  for (const [file, src] of sources) writeFileSync(`content/en/${file}.ts`, src);
}

console.log(`\n${applied} correction(s) ${WRITE ? "applied" : "ready to apply (dry run)"}`);
if (problems.length) {
  console.log(`\n${problems.length} need manual attention:`);
  for (const p of problems) console.log(`  ${p}`);
}
if (!WRITE && applied) {
  console.log("\nRe-run with --write to apply, then: npm run lint && npm run build");
}
