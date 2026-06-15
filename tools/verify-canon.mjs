/* ════════════════════════════════════════════════════════════════════════
   LexFeed — canon bank verifier

   Run BEFORE deploying, whenever you add entries to ../canon.js:
       node tools/verify-canon.mjs

   What it guarantees (hard checks — exit code 1 on any FAIL):
     • each entry has the required fields for its category;
     • case-law links are real BAILII *judgment* URLs, not search/redirect
       links (this is the bug that left the cc1–cc13 cards with dead links);
     • statute links are canonical legislation.gov.uk ".../contents" URLs;
     • no two entries duplicate each other (by citation-insensitive title).

   What it can only check best-effort (reported, never silently "passed"):
     • reachability. BAILII sits behind a Cloudflare bot wall and
       legislation.gov.uk throttles bots (HTTP 202), so an automated GET
       cannot read the page text. Those come back as UNVERIFIABLE-HERE — open
       them once in a real browser to confirm. A clean 404 still FAILs.
   ════════════════════════════════════════════════════════════════════════ */
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const CANON = require(resolve(here, '../canon.js'));

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const norm = t => String(t || '').toLowerCase()
  .replace(/\[[^\]]*\]|\([^)]*\)/g, ' ')
  .replace(/\b(ltd|plc|llp|co|the|of|and|v|vs)\b/g, ' ')
  .replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

function structuralErrors(c) {
  const e = [];
  if (!c.id) e.push('missing id');
  if (!c.title) e.push('missing title');
  if (!c.link) e.push('missing link');
  if (!c.src) e.push('missing src');

  let u;
  try { u = new URL(c.link); } catch { e.push(`unparseable link: ${c.link}`); return e; }
  if (u.protocol !== 'https:') e.push('link must be https');
  const host = u.hostname.replace(/^www\./, '');

  if (c.cat === 'case-law') {
    for (const f of ['court', 'facts', 'judgment', 'ratio']) if (!c[f]) e.push(`case missing ${f}`);
    if (host !== 'bailii.org') e.push(`case link must be bailii.org (got ${host})`);
    if (/lucy_search|format\.cgi|redirect\.cgi|[?&]query=/i.test(c.link))
      e.push('case link is a SEARCH/redirect link, not a judgment URL');
    else if (!/\/cases\/.+\/\d+\.(html|pdf)$/i.test(u.pathname))
      e.push('case link is not a /cases/.../<number>.html judgment path');
  } else if (c.cat === 'statute') {
    if (!c.body) e.push('statute missing body');
    if (!Array.isArray(c.sections) || !c.sections.length) e.push('statute missing sections');
    if (host !== 'legislation.gov.uk') e.push(`statute link must be legislation.gov.uk (got ${host})`);
    if (!/\/contents(\/|$)/.test(u.pathname)) e.push('statute link must point to ".../contents"');
  } else {
    e.push(`unexpected cat: ${c.cat}`);
  }
  return e;
}

async function reachability(link) {
  try {
    const r = await fetch(link, { headers: { 'User-Agent': UA }, redirect: 'follow',
      signal: AbortSignal.timeout(20000) });
    const body = await r.text().catch(() => '');
    if (r.status === 404) return { ok: false, note: '404 NOT FOUND' };
    if (/not a bot|just a moment|cf-browser-verification/i.test(body))
      return { ok: null, note: 'UNVERIFIABLE-HERE (BAILII bot wall) — eyeball in a browser' };
    if (r.status === 202 || body.trim() === '')
      return { ok: null, note: 'UNVERIFIABLE-HERE (legislation.gov.uk throttle) — eyeball in a browser' };
    if (r.ok) return { ok: true, note: `reachable (${r.status})` };
    return { ok: null, note: `status ${r.status}` };
  } catch (err) {
    return { ok: null, note: `fetch error: ${err.message}` };
  }
}

(async () => {
  console.log(`Verifying ${CANON.length} canon entries…\n`);
  let hardFail = 0, unverifiable = 0;
  const seen = new Map();

  for (const c of CANON) {
    const label = `[${c.id || '??'}] ${c.title || '(no title)'}`;
    const errs = structuralErrors(c);

    const key = norm(c.title);
    if (seen.has(key)) errs.push(`duplicate title of ${seen.get(key)}`);
    else seen.set(key, c.id);

    if (errs.length) { hardFail++; console.log(`✗ FAIL  ${label}\n        - ${errs.join('\n        - ')}`); continue; }

    const reach = await reachability(c.link);
    if (reach.ok === false) { hardFail++; console.log(`✗ FAIL  ${label}\n        - link ${reach.note}: ${c.link}`); }
    else if (reach.ok === null) { unverifiable++; console.log(`~ CHECK ${label}\n        - ${reach.note}`); }
    else console.log(`✓ OK    ${label}`);
  }

  console.log(`\n${CANON.length} entries · ${hardFail} fail · ${unverifiable} need a manual browser check`);
  process.exit(hardFail ? 1 : 0);
})();
