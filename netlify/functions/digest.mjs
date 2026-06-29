// LexFeed daily digest — computed once per day, server-side, and cached in
// Netlify Blobs so every visitor sees the SAME pick and it doesn't change on
// reload. Picks the day's most senior National Archives judgment (with a valid
// judgment URL) plus up to 3 news stories from today.
import { getStore } from '@netlify/blobs';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS',
  'Cache-Control': 'public, max-age=600'   // identical payload anyway; eases load
};
const UA = 'Mozilla/5.0 (compatible; LexFeedDigest/1.0; +https://lexfeeduk.netlify.app)';

const NA_GENERAL = 'https://caselaw.nationalarchives.gov.uk/atom.xml?order=-date&per_page=50';
const NEWS = [
  { src: 'The Guardian · Law',    url: 'https://www.theguardian.com/law/rss' },
  { src: 'Financial Times · Law', url: 'https://www.ft.com/law?format=rss' },
  { src: 'Law Society Gazette',   url: 'https://www.lawgazette.co.uk/17.rss' },
  { src: 'Legal Cheek',           url: 'https://legalcheek.com/feed' },
  { src: 'Legal Futures',         url: 'https://www.legalfutures.co.uk/feed' },
  { src: 'UK Human Rights Blog',  url: 'https://ukhumanrightsblog.com/feed' },
  { src: 'Inforrm · Media Law',   url: 'https://inforrm.org/feed' },
];

const pad = n => String(n).padStart(2, '0');
function ldnParts(when) {
  const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', hourCycle: 'h23',
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit' })
    .formatToParts(when || new Date()).reduce((a, x) => (a[x.type] = x.value, a), {});
  return { y: +p.year, m: +p.month, d: +p.day, hour: +p.hour };
}
// The day the digest covers (17:00→05:00 window; before 5am it's the previous day).
function digestDate() {
  const p = ldnParts();
  if (p.hour < 5) { const dt = new Date(Date.UTC(p.y, p.m - 1, p.d)); dt.setUTCDate(dt.getUTCDate() - 1);
    return dt.getUTCFullYear() + '-' + pad(dt.getUTCMonth() + 1) + '-' + pad(dt.getUTCDate()); }
  return p.y + '-' + pad(p.m) + '-' + pad(p.d);
}
function ldnDateOf(iso) {
  const t = Date.parse(iso); if (isNaN(t)) return '';
  const p = ldnParts(new Date(t)); return p.y + '-' + pad(p.m) + '-' + pad(p.d);
}

function decode(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;|&#x27;/gi, "'").replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/\s+/g, ' ').trim();
}
async function fetchText(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA,
    Accept: 'application/atom+xml,application/rss+xml,application/xml,text/xml,*/*' },
    signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return r.text();
}

// Pick the human-readable page link from an <entry>. Atom puts href/rel in any
// order and lists several alternates (page, /data.xml, PDF on assets host); we
// want the clean page URL, never the data.xml/pdf or the internal /id/ URI.
function pickLink(e) {
  const hrefs = [...e.matchAll(/<link\b[^>]*\bhref="([^"]+)"/g)].map(m => m[1]);
  return (hrefs.find(h => !/\/data\.\w+$|\.pdf$|\.xml$/i.test(h) && !/assets\.caselaw/i.test(h))
       || hrefs[0] || (e.match(/<id>([^<]+)<\/id>/) || [])[1] || '').trim();
}
function parseAtom(xml) {
  return (xml.match(/<entry\b[\s\S]*?<\/entry>/g) || []).map(e => ({
    title: decode((e.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1]),
    date: ((e.match(/<published>([^<]+)<\/published>/) || [])[1] || (e.match(/<updated>([^<]+)<\/updated>/) || [])[1] || '').trim(),
    court: decode((e.match(/<author>[\s\S]*?<name>([\s\S]*?)<\/name>/) || [])[1]),
    link: pickLink(e),
    summary: decode((e.match(/<summary[^>]*>([\s\S]*?)<\/summary>/) || [])[1]),
  })).filter(x => x.title && x.link);
}
function parseRss(xml) {
  return (xml.match(/<item\b[\s\S]*?<\/item>/g) || []).map(it => ({
    title: decode((it.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1]),
    link: decode((it.match(/<link[^>]*>([\s\S]*?)<\/link>/) || [])[1]),
    date: ((it.match(/<pubDate>([^<]+)<\/pubDate>/) || [])[1] || (it.match(/<dc:date>([^<]+)<\/dc:date>/) || [])[1] || '').trim(),
  })).filter(x => x.title && x.link);
}

function courtTier(court) {
  const c = String(court || '').toLowerCase();
  if (/supreme|privy council/.test(c)) return 0;
  if (/court of appeal/.test(c)) return 1;
  if (/high court/.test(c)) return 2;
  if (/tribunal/.test(c)) return 4;
  return 3;
}
function shortCourt(c) { return String(c || '').replace(/^United Kingdom /, 'UK ').trim(); }
// A real NA judgment URL looks like /uksc/2026/15 or /ewca/civ/2026/123 — reject
// the homepage / non-judgment links so the card never points at a 404.
function validNA(link) {
  try {
    const u = new URL(link);
    if (!/(^|\.)nationalarchives\.gov\.uk$/.test(u.hostname)) return false;
    return /\/[a-z]+(?:\/[a-z]+)?\/\d{4}\/\d+/i.test(u.pathname);
  } catch { return false; }
}

// Pick up to n items favouring source diversity: the most recent item from each
// distinct source first, then backfill with the next-most-recent if needed.
function pickDiverse(itemsDesc, n) {
  const out = [], seen = new Set();
  for (const it of itemsDesc) { if (!seen.has(it.src)) { seen.add(it.src); out.push(it); if (out.length >= n) break; } }
  if (out.length < n) for (const it of itemsDesc) { if (out.length >= n) break; if (!out.includes(it)) out.push(it); }
  return out.slice(0, n);
}
// For the daily digest: one most-recent story per source within the last `days`
// days, then backfill from any date if too few sources — so the picks
// consistently span more than one outlet even on quiet news days.
function diverseRecent(itemsDesc, n, days) {
  const cutoff = Date.now() - days * 86400000;
  const recentBySrc = new Map(), anyBySrc = new Map();
  for (const it of itemsDesc) {
    if (!anyBySrc.has(it.src)) anyBySrc.set(it.src, it);
    if ((Date.parse(it.date) || 0) >= cutoff && !recentBySrc.has(it.src)) recentBySrc.set(it.src, it);
  }
  const byDate = arr => arr.sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
  const picks = byDate([...recentBySrc.values()]);
  if (picks.length < n) for (const it of byDate([...anyBySrc.values()])) {
    if (picks.length >= n) break;
    if (!picks.some(p => p.src === it.src)) picks.push(it);
  }
  return picks.slice(0, n);
}
// For the weekly digest: n stories each from a DIFFERENT day (and a different
// source where the week allows), so they span the week rather than cluster.
function pickByDistinctDay(itemsDesc, n) {
  const out = [], days = new Set(), srcs = new Set();
  const take = it => { out.push(it); days.add(ldnDateOf(it.date)); srcs.add(it.src); };
  const has = it => out.includes(it);
  for (const it of itemsDesc) { if (out.length >= n) break; if (!days.has(ldnDateOf(it.date)) && !srcs.has(it.src)) take(it); }   // distinct day + source
  if (out.length < n) for (const it of itemsDesc) { if (out.length >= n) break; if (!has(it) && !days.has(ldnDateOf(it.date))) take(it); } // distinct day
  if (out.length < n) for (const it of itemsDesc) { if (out.length >= n) break; if (!has(it) && !srcs.has(it.src)) take(it); }            // distinct source
  if (out.length < n) for (const it of itemsDesc) { if (out.length >= n) break; if (!has(it)) take(it); }                                 // anything
  return out.slice(0, n);
}

async function compute(dd) {
  let lead = null, otherCases = 0, news = [];
  try {
    const today = parseAtom(await fetchText(NA_GENERAL))
      .filter(e => ldnDateOf(e.date) === dd && validNA(e.link))
      .sort((a, b) => courtTier(a.court) - courtTier(b.court));
    if (today[0]) {
      const c = today[0];
      lead = { title: c.title, court: shortCourt(c.court), link: c.link, desc: (c.summary || '').slice(0, 200) };
    }
    otherCases = Math.max(0, today.length - 1);
  } catch {}
  try {
    // Strictly that day's news, but spread across sources where the day offers more than one.
    const items = (await Promise.all(NEWS.map(async f => {
      try { return parseRss(await fetchText(f.url)).filter(i => ldnDateOf(i.date) === dd).map(i => ({ ...i, src: f.src })); }
      catch { return []; }
    }))).flat().sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
    news = pickDiverse(items, 3).map(i => ({ title: i.title, link: i.link, src: i.src }));
  } catch {}
  return { date: dd, lead, otherCases, news, builtAt: new Date().toISOString() };
}

// The Mon–Fri range the weekend round-up covers (the week that just ended).
function weekRange() {
  const p = ldnParts();
  const dow = new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay();   // 0=Sun … 6=Sat
  const back = (dow + 1) % 7;                                       // days back to the most recent Saturday
  const sat = new Date(Date.UTC(p.y, p.m - 1, p.d)); sat.setUTCDate(sat.getUTCDate() - back);
  const fmt = dt => dt.getUTCFullYear() + '-' + pad(dt.getUTCMonth() + 1) + '-' + pad(dt.getUTCDate());
  const fri = new Date(sat); fri.setUTCDate(fri.getUTCDate() - 1);
  const mon = new Date(sat); mon.setUTCDate(mon.getUTCDate() - 5);
  return { from: fmt(mon), to: fmt(fri) };
}
function legType(link) {
  if (/\/ukpga\//.test(link)) return 'UK Act';
  if (/\/uksi\//.test(link))  return 'Statutory Instrument';
  if (/\/asp\//.test(link))   return 'Act of the Scottish Parliament';
  if (/\/ssi\//.test(link))   return 'Scottish SI';
  if (/\/nia\//.test(link))   return 'NI Act';
  if (/\/(anaw|asc|wsi)\//.test(link)) return 'Welsh legislation';
  return 'Legislation';
}

async function computeWeekly({ from, to }) {
  const inRange = iso => { const ds = ldnDateOf(iso); return ds >= from && ds <= to; };
  let cases = [], legislation = null, news = [];
  try {
    cases = parseAtom(await fetchText('https://caselaw.nationalarchives.gov.uk/atom.xml?order=-date&per_page=100'))
      .filter(e => inRange(e.date) && validNA(e.link))
      .sort((a, b) => courtTier(a.court) - courtTier(b.court))
      .slice(0, 2)
      .map(c => ({ title: c.title, court: shortCourt(c.court), link: c.link }));
  } catch {}
  try {
    const leg = parseAtom(await fetchText('https://www.legislation.gov.uk/new/data.feed'))
      .filter(e => inRange(e.date))
      .sort((a, b) => (/\/ukpga\//.test(a.link) ? 0 : 1) - (/\/ukpga\//.test(b.link) ? 0 : 1));
    if (leg[0]) legislation = { title: leg[0].title, link: leg[0].link, type: legType(leg[0].link) };
  } catch {}
  try {
    const items = (await Promise.all(NEWS.map(async f => {
      try { return parseRss(await fetchText(f.url)).filter(i => inRange(i.date)).map(i => ({ ...i, src: f.src })); }
      catch { return []; }
    }))).flat().sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
    news = pickByDistinctDay(items, 3).map(i => ({ title: i.title, link: i.link, src: i.src }));
  } catch {}
  return { from, to, cases, legislation, news, builtAt: new Date().toISOString() };
}

export default async (req) => {
  if (req.method === 'OPTIONS') return new Response('', { headers: CORS });
  const store = getStore('lexfeed-digest');
  const weekly = new URL(req.url).searchParams.get('type') === 'weekly';

  const V = 'v7:';   // bump to discard any stale cached digests after a logic fix (v7: added Guardian + FT news sources)

  if (weekly) {
    const range = weekRange();
    const k = 'weekly:' + V + range.from + '_' + range.to;
    const cached = await store.get(k, { type: 'json' });
    if (cached) return Response.json(cached, { headers: CORS });
    const payload = await computeWeekly(range);
    if (payload.cases.length || payload.legislation || payload.news.length) await store.setJSON(k, payload);
    return Response.json(payload, { headers: CORS });
  }

  const dd = digestDate();
  const k = 'daily:' + V + dd;
  const cached = await store.get(k, { type: 'json' });
  if (cached) return Response.json(cached, { headers: CORS });
  const payload = await compute(dd);
  // The daily digest only covers weekdays, so a judgment is expected — only
  // freeze once we actually have one (don't cache a transient empty result).
  if (payload.lead) await store.setJSON(k, payload);
  return Response.json(payload, { headers: CORS });
};

export const config = { path: '/api/digest' };
