// LexFeed feed proxy — fetches an allow-listed RSS/Atom feed server-side and
// returns it with permissive CORS. This removes the dependency on flaky public
// CORS proxies (which were slow, rate-limited, and served stale cached feeds),
// so news + legislation load fast and fresh. Restricted to known feed hosts.
const ALLOW = [
  // Courts / legislation
  'legislation.gov.uk', 'nationalarchives.gov.uk', 'bailii.org', 'supremecourt.uk',
  // Legal trade press & specialist blogs
  'lawgazette.co.uk', 'legalcheek.com', 'legalfutures.co.uk', 'thejusticegap.com',
  'ukhumanrightsblog.com', 'freemovement.org.uk', 'inforrm.org', 'transparencyproject.org.uk',
  'thesecretbarrister.com', 'ukscblog.com', 'pinktape.co.uk', 'ukconstitutionallaw.org',
  'panopticonblog.com', 'civillitigationbrief.com', 'lawandreligionuk.com', 'eachother.org.uk',
  'globallegalpost.com',
  // Mainstream press law sections + Google News keyword search
  'theguardian.com', 'ft.com', 'independent.co.uk', 'thetimes.co.uk', 'theconversation.com',
  'news.google.com'
];

export default async (req) => {
  const cors = { 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=300' };
  const u = new URL(req.url).searchParams.get('url');
  if (!u) return new Response('missing url', { status: 400, headers: cors });

  let target;
  try { target = new URL(u); } catch { return new Response('bad url', { status: 400, headers: cors }); }
  if (target.protocol !== 'https:' && target.protocol !== 'http:')
    return new Response('bad protocol', { status: 400, headers: cors });

  const host = target.hostname.replace(/^www\./, '');
  if (!ALLOW.some(d => host === d || host.endsWith('.' + d)))
    return new Response('host not allowed', { status: 403, headers: cors });

  try {
    const r = await fetch(target.toString(), {
      headers: {
        'Accept': 'application/rss+xml,application/atom+xml,application/xml,text/xml,*/*',
        'User-Agent': 'LexFeed/1.0 (+feed proxy)'
      },
      signal: AbortSignal.timeout(12000)
    });
    const text = await r.text();
    return new Response(text, {
      status: r.ok ? 200 : 502,
      headers: { ...cors, 'Content-Type': 'application/xml; charset=utf-8' }
    });
  } catch {
    return new Response('upstream fetch failed', { status: 502, headers: cors });
  }
};

export const config = { path: '/api/feed' };
