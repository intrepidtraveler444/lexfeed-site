// LexFeed — lawcases.net "Analysis" source.
// lawcases.net (WordPress) exposes no usable analysis RSS feed — its category
// feed is served as cached HTML — so we scrape the Analysis listing pages and
// emit a small RSS 2.0 feed that the front-end consumes like any other news
// source. We surface titles + links only (aggregation that links back to
// lawcases.net); we do not republish article text. Fails soft: on any error it
// returns a valid empty feed so the news section simply shows nothing.

const SOURCES = [
  'https://www.lawcases.net/category/analysis/',
  'https://www.lawcases.net/analysis',
];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const NAMED = { amp:'&', lt:'<', gt:'>', quot:'"', apos:"'", '#039':"'", nbsp:' ',
  hellip:'…', mdash:'—', ndash:'–', rsquo:'’', lsquo:'‘', ldquo:'“', rdquo:'”' };
function decodeEntities(s){
  return String(s)
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-zA-Z]+);/g, (m, n) => (NAMED[n] != null ? NAMED[n] : m));
}
function cleanText(html){
  return decodeEntities(String(html).replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
}
function cdata(s){ return '<![CDATA[' + String(s).replace(/]]>/g, ']]&gt;') + ']]>'; }

async function grab(url){
  try{
    const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'text/html' },
      signal: AbortSignal.timeout(3500) });
    if(!r.ok) return [];
    const html = await r.text();
    const out = [];
    // Analysis article links look like https://www.lawcases.net/analysis/<slug>/
    const re = /<a\b[^>]*href="(https:\/\/www\.lawcases\.net\/analysis\/[^"#?]+?\/)"[^>]*>([\s\S]*?)<\/a>/gi;
    let m;
    while((m = re.exec(html))){
      const link = m[1];
      if(/\/analysis\/(page|category|tag)\//i.test(link)) continue; // skip pagination/taxonomy
      const title = cleanText(m[2]);
      if(title.length < 6) continue;                                // skip image/empty anchors
      out.push({ link, title });
    }
    return out;
  }catch(_){ return []; }
}

export default async () => {
  const headers = {
    'Content-Type': 'application/rss+xml; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=1800'   // 30 min — keeps repeat loads instant
  };

  let items = [];
  try{
    const results = await Promise.all(SOURCES.map(grab));
    const seen = new Set();
    for(const list of results){
      for(const it of list){
        if(seen.has(it.link)) continue;
        seen.add(it.link);
        items.push(it);
      }
    }
    items = items.slice(0, 20);
  }catch(_){ items = []; }

  const body = items.map(it =>
    `<item><title>${cdata(it.title)}</title>` +
    `<link>${it.link}</link>` +
    `<guid isPermaLink="true">${it.link}</guid></item>`
  ).join('');

  const rss =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<rss version="2.0"><channel>' +
    '<title>lawcases.net — Analysis</title>' +
    '<link>https://www.lawcases.net/analysis</link>' +
    '<description>Latest legal analyses from lawcases.net</description>' +
    body +
    '</channel></rss>';

  return new Response(rss, { headers });
};

export const config = { path: '/api/lawcases' };
