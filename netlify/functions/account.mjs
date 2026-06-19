// LexFeed accounts — username/password profiles + Free/Premium plan.
// Netlify Blobs (free, zero-config). Stores one record per user holding a
// scrypt-hashed password and the user's synced state bag (saved posts,
// achievements, reading history, streak, goal, plan). Sessions are stateless
// HMAC-signed tokens. Set SESSION_SECRET in Netlify env (a default is used
// otherwise, with a warning — fine for local/dev, not for production).
import { getStore } from '@netlify/blobs';
import { scryptSync, randomBytes, timingSafeEqual, createHmac } from 'node:crypto';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
  'Cache-Control': 'no-store'
};

const SECRET = process.env.SESSION_SECRET || 'lexfeed-dev-secret-change-me';
if (!process.env.SESSION_SECRET) console.warn('[account] SESSION_SECRET not set — using insecure default.');

const TOKEN_TTL = 90 * 24 * 3600 * 1000;        // 90 days
const MAX_BODY  = 256 * 1024;                    // 256 KB cap on synced data
const USER_RE   = /^[a-zA-Z0-9_]{3,30}$/;
const EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// One-time recovery code (XXXX-XXXX-XXXX-XXXX) — lets a user reset their own
// password with no email service required. Stored only as a scrypt hash.
function genRecoveryCode() {
  return randomBytes(8).toString('hex').toUpperCase().match(/.{4}/g).join('-');
}

const b64url   = buf => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64urlDe = s => Buffer.from(String(s).replace(/-/g, '+').replace(/_/g, '/'), 'base64');
const key      = u => 'user:' + String(u).toLowerCase();

function hashPassword(password, salt = randomBytes(16).toString('hex')) {
  return { salt, hash: scryptSync(password, salt, 64).toString('hex') };
}
function verifyPassword(password, salt, expectedHex) {
  const got = scryptSync(password, salt, 64);
  const exp = Buffer.from(expectedHex, 'hex');
  return got.length === exp.length && timingSafeEqual(got, exp);
}

function signToken(username) {
  const payload = b64url(JSON.stringify({ u: username, iat: Date.now(), exp: Date.now() + TOKEN_TTL }));
  const sig = b64url(createHmac('sha256', SECRET).update(payload).digest());
  return payload + '.' + sig;
}
function verifyToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null;
  const [payload, sig] = token.split('.');
  const expected = b64url(createHmac('sha256', SECRET).update(payload).digest());
  const a = Buffer.from(sig || ''), b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  let data; try { data = JSON.parse(b64urlDe(payload).toString()); } catch { return null; }
  if (!data || !data.u || !data.exp || Date.now() > data.exp) return null;
  return data.u;
}

const publicUser = rec => ({ username: rec.username, plan: rec.plan || 'free', data: rec.data || {},
  email: rec.email || '', hasRecovery: !!(rec.recovery && rec.recovery.hash) });

export default async (req) => {
  if (req.method === 'OPTIONS') return new Response('', { headers: CORS });
  const store = getStore('lexfeed-users');

  // GET ?token=... → "me"
  if (req.method === 'GET') {
    const token = new URL(req.url).searchParams.get('token');
    const u = verifyToken(token);
    if (!u) return new Response('unauthorized', { status: 401, headers: CORS });
    const rec = await store.get(key(u), { type: 'json' });
    if (!rec) return new Response('not found', { status: 404, headers: CORS });
    return Response.json(publicUser(rec), { headers: CORS });
  }

  if (req.method !== 'POST') return new Response('method not allowed', { status: 405, headers: CORS });

  let b;
  try { b = await req.json(); } catch { return new Response('bad json', { status: 400, headers: CORS }); }
  const action = b.action;

  if (action === 'signup' || action === 'login') {
    const username = String(b.username || '').trim();
    const password = String(b.password || '');
    if (!USER_RE.test(username)) return new Response('username must be 3–30 chars (letters, numbers, _)', { status: 400, headers: CORS });
    if (password.length < 6)     return new Response('password must be at least 6 characters', { status: 400, headers: CORS });

    const k = key(username);
    const existing = await store.get(k, { type: 'json' });

    if (action === 'signup') {
      if (existing) return new Response('that username is taken', { status: 409, headers: CORS });
      const email = String(b.email || '').trim().toLowerCase();
      if (email && !EMAIL_RE.test(email)) return new Response('that email address looks invalid', { status: 400, headers: CORS });
      const { salt, hash } = hashPassword(password);
      const recoveryCode = genRecoveryCode();
      const rec = { username, salt, hash, email, recovery: hashPassword(recoveryCode),
        plan: 'free', data: {}, createdAt: new Date().toISOString() };
      await store.setJSON(k, rec);
      // recoveryCode is returned ONCE, on signup, for the user to save.
      return Response.json({ token: signToken(username), ...publicUser(rec), recoveryCode }, { headers: CORS });
    }

    // login
    if (!existing || !verifyPassword(password, existing.salt, existing.hash))
      return new Response('wrong username or password', { status: 401, headers: CORS });
    return Response.json({ token: signToken(username), ...publicUser(existing) }, { headers: CORS });
  }

  if (action === 'save') {
    const u = verifyToken(b.token);
    if (!u) return new Response('unauthorized', { status: 401, headers: CORS });
    const k = key(u);
    const rec = await store.get(k, { type: 'json' });
    if (!rec) return new Response('not found', { status: 404, headers: CORS });
    if (b.data !== undefined) {
      const json = JSON.stringify(b.data);
      if (json.length > MAX_BODY) return new Response('data too large', { status: 413, headers: CORS });
      rec.data = b.data;
    }
    if (b.plan === 'free' || b.plan === 'premium') rec.plan = b.plan;
    rec.updatedAt = new Date().toISOString();
    await store.setJSON(k, rec);
    return Response.json({ ok: true, plan: rec.plan }, { headers: CORS });
  }

  // Self-service password reset via the recovery code (no email needed).
  if (action === 'reset') {
    const username = String(b.username || '').trim();
    const code = String(b.code || '').trim().toUpperCase();
    const np = String(b.newPassword || '');
    if (!USER_RE.test(username)) return new Response('enter your username', { status: 400, headers: CORS });
    if (np.length < 6) return new Response('new password must be at least 6 characters', { status: 400, headers: CORS });
    const k = key(username);
    const rec = await store.get(k, { type: 'json' });
    if (!rec || !rec.recovery || !verifyPassword(code, rec.recovery.salt, rec.recovery.hash))
      return new Response('wrong username or recovery code', { status: 401, headers: CORS });
    const ph = hashPassword(np); rec.salt = ph.salt; rec.hash = ph.hash;
    const recoveryCode = genRecoveryCode(); rec.recovery = hashPassword(recoveryCode);  // rotate (single-use)
    rec.updatedAt = new Date().toISOString();
    await store.setJSON(k, rec);
    return Response.json({ token: signToken(username), ...publicUser(rec), recoveryCode }, { headers: CORS });
  }

  // Logged-in: (re)generate a recovery code — covers accounts created before this existed.
  if (action === 'setRecovery') {
    const u = verifyToken(b.token);
    if (!u) return new Response('unauthorized', { status: 401, headers: CORS });
    const k = key(u); const rec = await store.get(k, { type: 'json' });
    if (!rec) return new Response('not found', { status: 404, headers: CORS });
    const recoveryCode = genRecoveryCode(); rec.recovery = hashPassword(recoveryCode);
    rec.updatedAt = new Date().toISOString();
    await store.setJSON(k, rec);
    return Response.json({ ok: true, recoveryCode }, { headers: CORS });
  }

  // Logged-in: add/update a recovery email (optional; for support + future reset).
  if (action === 'setEmail') {
    const u = verifyToken(b.token);
    if (!u) return new Response('unauthorized', { status: 401, headers: CORS });
    const email = String(b.email || '').trim().toLowerCase();
    if (email && !EMAIL_RE.test(email)) return new Response('that email address looks invalid', { status: 400, headers: CORS });
    const k = key(u); const rec = await store.get(k, { type: 'json' });
    if (!rec) return new Response('not found', { status: 404, headers: CORS });
    rec.email = email; rec.updatedAt = new Date().toISOString();
    await store.setJSON(k, rec);
    return Response.json({ ok: true, email }, { headers: CORS });
  }

  if (action === 'me') {
    const u = verifyToken(b.token);
    if (!u) return new Response('unauthorized', { status: 401, headers: CORS });
    const rec = await store.get(key(u), { type: 'json' });
    if (!rec) return new Response('not found', { status: 404, headers: CORS });
    return Response.json(publicUser(rec), { headers: CORS });
  }

  return new Response('unknown action', { status: 400, headers: CORS });
};

export const config = { path: '/api/account' };
