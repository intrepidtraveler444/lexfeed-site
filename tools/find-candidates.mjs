/* ════════════════════════════════════════════════════════════════════════
   LexFeed — candidate finder (the "is it already curated?" gate, automated)

   This is step 2 of the lawteacher sourcing pathway, made programmatic. Give
   it a list of candidate case names (from lawteacher.net) and it tells you
   which are GENUINELY NEW — i.e. not already in index.html's CURATED list and
   not already queued in canon.js. De-dup is citation-insensitive.

   Usage:
     node tools/find-candidates.mjs candidates.txt          # one case per line
     node tools/find-candidates.mjs --url <lawteacher-url>   # scrape names off a page
     node tools/find-candidates.mjs --url <url> --json       # machine-readable

   It does NOT fetch BAILII or write cards — those are steps 3–4 (a search to
   confirm the real judgment URL + an original summary), then add to canon.js
   and run verify-canon.mjs. See tools/PIPELINE.md.
   ════════════════════════════════════════════════════════════════════════ */
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const norm = t => String(t || '').toLowerCase()
  .replace(/\[[^\]]*\]|\([^)]*\)/g, ' ')          // drop [2023] UKSC 4, (No 2)
  .replace(/&amp;/g, ' ').replace(/&/g, ' ')
  .replace(/\b(ltd|plc|llp|co|ors|anor|others|another|the|of|and|v|vs|r)\b/g, ' ')
  .replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

// --- build the set of everything already in the app ---
function existingKeys() {
  const keys = new Set();
  const html = readFileSync(resolve(root, 'index.html'), 'utf8');
  // CURATED block only, so we don't pull in glossary terms / SQE questions wholesale
  const start = html.indexOf('const CURATED');
  const slice = start >= 0 ? html.slice(start) : html;
  for (const m of slice.matchAll(/\btitle:\s*'([^']*)'|\btitle:\s*"([^"]*)"/g))
    keys.add(norm(m[1] || m[2]));
  for (const c of require(resolve(root, 'canon.js'))) keys.add(norm(c.title));
  return keys;
}

// --- pull candidate case names off a lawteacher page (or any HTML) ---
async function scrape(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
  const html = await r.text();
  const out = new Set();
  // "Name v Name [YYYY] COURT n"  — the citation anchors the match
  const re = /([A-Z][A-Za-z'’.&,\- ]{2,60}? v [A-Za-z'’.&,\- ]{2,60}?\[\d{4}\][^<\n]{0,40})/g;
  for (const m of html.matchAll(re)) out.add(m[1].replace(/\s+/g, ' ').trim());
  return [...out];
}

const args = process.argv.slice(2);
const json = args.includes('--json');
const urlIx = args.indexOf('--url');

(async () => {
  let candidates = [];
  if (urlIx >= 0) candidates = await scrape(args[urlIx + 1]);
  else {
    const file = args.find(a => !a.startsWith('--'));
    if (!file) { console.error('Pass a candidates file or --url <page>'); process.exit(2); }
    candidates = readFileSync(resolve(process.cwd(), file), 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
  }

  const have = existingKeys();
  const fresh = [], dup = [], seen = new Set();
  for (const c of candidates) {
    const k = norm(c);
    if (!k || seen.has(k)) continue; seen.add(k);
    (have.has(k) ? dup : fresh).push(c);
  }

  if (json) { console.log(JSON.stringify({ fresh, dup }, null, 2)); return; }
  console.log(`Scanned ${candidates.length} candidates against ${have.size} existing entries.\n`);
  console.log(`NEW (${fresh.length}) — verify a BAILII link, then add to canon.js:`);
  fresh.forEach(c => console.log('  + ' + c));
  console.log(`\nALREADY CURATED (${dup.length}) — skip:`);
  dup.forEach(c => console.log('  - ' + c));
})();
