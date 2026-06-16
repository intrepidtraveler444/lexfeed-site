/* ════════════════════════════════════════════════════════════════════════
   LexFeed — extras bank verifier (journal articles + glossary terms)

   Run BEFORE deploying, whenever you add entries to ../extras.js:
       node tools/verify-extras.mjs

   What it guarantees (hard checks — exit code 1 on any FAIL):
     • each entry has the required fields for its category;
     • journal-article links are STABLE publisher / DOI landing pages from a
       known-host allowlist — never a Google-Scholar (or other) *search* link;
     • the article title carries a year in 2006–2026 (the "last 20 years" rule);
     • legal-term links are real lexisnexis.co.uk "/legal/glossary/<slug>" URLs;
     • no two entries duplicate each other by citation-insensitive title OR link.

   What it can only check best-effort (reported, never silently "passed"):
     • reachability. Publisher sites and LexisNexis often bot-wall/throttle, so
       an automated GET can't read the page. Those come back as
       UNVERIFIABLE-HERE — real existence is proven by the WebSearch sourcing
       step (see tools/PIPELINE.md). A clean 404 still FAILs.
   ════════════════════════════════════════════════════════════════════════ */
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const EXTRAS = require(resolve(here, '../extras.js'));

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

// Stable scholarly landing pages only — DOI resolvers + major UK/legal publishers.
const ARTICLE_HOSTS = new Set([
  'doi.org', 'dx.doi.org',
  'cambridge.org', 'academic.oup.com', 'ssrn.com', 'papers.ssrn.com',
  'journals.sagepub.com', 'tandfonline.com', 'onlinelibrary.wiley.com',
  'link.springer.com', 'jstor.org', 'heinonline.org',
]);

const norm = t => String(t || '').toLowerCase()
  .replace(/\[[^\]]*\]|\([^)]*\)/g, ' ')
  .replace(/\b(ltd|plc|llp|co|the|of|and|v|vs)\b/g, ' ')
  .replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

function structuralErrors(c, cat) {
  const e = [];
  if (!c.id) e.push('missing id');
  if (!c.title) e.push('missing title');
  if (!c.link) e.push('missing link');
  if (!c.src) e.push('missing src');
  if (!c.body) e.push('missing body');

  let u;
  try { u = new URL(c.link); } catch { e.push(`unparseable link: ${c.link}`); return e; }
  if (u.protocol !== 'https:') e.push('link must be https');
  const host = u.hostname.replace(/^www\./, '');

  if (cat === 'journal-article') {
    if (/scholar\.google|[?&]q=|[?&]query=|\/search/i.test(c.link))
      e.push('article link is a SEARCH link, not a stable article/DOI page');
    else if (!ARTICLE_HOSTS.has(host))
      e.push(`article link host not in allowlist (got ${host})`);
    const year = (String(c.title).match(/\b(19|20)\d{2}\b/g) || []).map(Number);
    if (!year.some(y => y >= 2006 && y <= 2026))
      e.push('article title has no year in 2006–2026 (must be from the last 20 years)');
  } else if (cat === 'legal-term') {
    if (!c.example) e.push('term missing example');
    if (host !== 'lexisnexis.co.uk') e.push(`term link must be lexisnexis.co.uk (got ${host})`);
    if (!/^\/legal\/glossary\/[a-z0-9-]+\/?$/.test(u.pathname))
      e.push('term link must be a /legal/glossary/<slug> URL');
  }
  return e;
}

async function reachability(link) {
  try {
    const r = await fetch(link, { headers: { 'User-Agent': UA }, redirect: 'follow',
      signal: AbortSignal.timeout(20000) });
    const body = await r.text().catch(() => '');
    if (r.status === 404) return { ok: false, note: '404 NOT FOUND' };
    if (/not a bot|just a moment|cf-browser-verification|access denied|captcha/i.test(body))
      return { ok: null, note: 'UNVERIFIABLE-HERE (bot wall) — eyeball in a browser' };
    if (r.status === 202 || r.status === 403 || body.trim() === '')
      return { ok: null, note: `UNVERIFIABLE-HERE (status ${r.status}/throttle) — eyeball in a browser` };
    if (r.ok) return { ok: true, note: `reachable (${r.status})` };
    return { ok: null, note: `status ${r.status}` };
  } catch (err) {
    return { ok: null, note: `fetch error: ${err.message}` };
  }
}

(async () => {
  const articles = Array.isArray(EXTRAS.articles) ? EXTRAS.articles : [];
  const terms = Array.isArray(EXTRAS.terms) ? EXTRAS.terms : [];
  const all = [...articles.map(c => [c, 'journal-article']), ...terms.map(c => [c, 'legal-term'])];
  console.log(`Verifying ${articles.length} articles + ${terms.length} terms = ${all.length} extras entries…\n`);

  let hardFail = 0, unverifiable = 0;
  const seenTitle = new Map(), seenLink = new Map(), seenId = new Map();

  for (const [c, cat] of all) {
    const label = `[${c.id || '??'}] ${c.title || '(no title)'}`;
    const errs = structuralErrors(c, cat);

    const tk = norm(c.title);
    if (seenTitle.has(tk)) errs.push(`duplicate title of ${seenTitle.get(tk)}`); else seenTitle.set(tk, c.id);
    if (c.link) { if (seenLink.has(c.link)) errs.push(`duplicate link of ${seenLink.get(c.link)}`); else seenLink.set(c.link, c.id); }
    if (c.id) { if (seenId.has(c.id)) errs.push(`duplicate id (also ${seenId.get(c.id)})`); else seenId.set(c.id, c.title); }

    if (errs.length) { hardFail++; console.log(`✗ FAIL  ${label}\n        - ${errs.join('\n        - ')}`); continue; }

    const reach = await reachability(c.link);
    if (reach.ok === false) { hardFail++; console.log(`✗ FAIL  ${label}\n        - link ${reach.note}: ${c.link}`); }
    else if (reach.ok === null) { unverifiable++; console.log(`~ CHECK ${label}\n        - ${reach.note}`); }
    else console.log(`✓ OK    ${label}`);
  }

  console.log(`\n${all.length} entries · ${hardFail} fail · ${unverifiable} need a manual browser check`);
  process.exit(hardFail ? 1 : 0);
})();
