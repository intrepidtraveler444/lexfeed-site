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
const UA = 'Mozilla/5.0 (compatible; LexFeedDigest/1.0; +https://lexfeedai.netlify.app)';

const NA_GENERAL = 'https://caselaw.nationalarchives.gov.uk/atom.xml?order=-date&per_page=50';
const NEWS = [
  { src: 'Law Society Gazette', url: 'https://www.lawgazette.co.uk/17.rss' },
  { src: 'Legal Cheek',         url: 'https://legalcheek.com/feed' },
  { src: 'Legal Futures',       url: 'https://www.legalfutures.co.uk/feed' },
  { src: 'UK Human Rights Blog', url: 'https://ukhumanrightsblog.com/feed' },
  { src: 'Inforrm · Media Law', url: 'https://inforrm.org/feed' },
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

function parseAtom(xml) {
  return (xml.match(/<entry\b[\s\S]*?<\/entry>/g) || []).map(e => ({
    title: decode((e.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1]),
    date: ((e.match(/<published>([^<]+)<\/published>/) || [])[1] || (e.match(/<updated>([^<]+)<\/updated>/) || [])[1] || '').trim(),
    court: decode((e.match(/<author>[\s\S]*?<name>([\s\S]*?)<\/name>/) || [])[1]),
    link: ((e.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/) || [])[1]
        || (e.match(/<id>([^<]+)<\/id>/) || [])[1] || '').trim(),
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
    const items = (await Promise.all(NEWS.map(async f => {
      try { return parseRss(await fetchText(f.url)).filter(i => ldnDateOf(i.date) === dd).map(i => ({ ...i, src: f.src })); }
      catch { return []; }
    }))).flat().sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
    news = items.slice(0, 3).map(i => ({ title: i.title, link: i.link, src: i.src }));
  } catch {}
  return { date: dd, lead, otherCases, news, builtAt: new Date().toISOString() };
}

export default async (req) => {
  if (req.method === 'OPTIONS') return new Response('', { headers: CORS });
  const store = getStore('lexfeed-digest');
  const dd = digestDate();
  const k = 'daily:' + dd;

  const cached = await store.get(k, { type: 'json' });
  if (cached) return Response.json(cached, { headers: CORS });

  const payload = await compute(dd);
  // Freeze it for the day once there's real content; otherwise allow a later
  // request to recompute (e.g. if judgments hadn't been published yet).
  if (payload.lead || payload.news.length) await store.setJSON(k, payload);
  return Response.json(payload, { headers: CORS });
};

export const config = { path: '/api/digest' };
