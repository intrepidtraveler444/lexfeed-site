// LexFeed shared store — global admin edits + post flags.
// Uses Netlify Blobs (free, zero-config on Netlify). Reads are public so every
// visitor's feed reflects admin edits; writes that change curated content
// require the admin password (set ADMIN_PASSWORD env var, default "Code4").
import { getStore } from '@netlify/blobs';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store'
};

export default async (req) => {
  // Fail closed: if no admin password is configured, admin writes are disabled
  // entirely (no guessable default). Set ADMIN_PASSWORD in the Netlify env.
  const ADMIN = process.env.ADMIN_PASSWORD || null;
  const store = getStore('lexfeed');

  if (req.method === 'OPTIONS') return new Response('', { headers: CORS });

  // Public read: current edits + flags
  if (req.method === 'GET') {
    const edits = (await store.get('cardEdits', { type: 'json' })) || {};
    const flags = (await store.get('flags', { type: 'json' })) || [];
    const newCards = (await store.get('newCards', { type: 'json' })) || [];
    const removed = (await store.get('removed', { type: 'json' })) || [];
    return Response.json({ edits, flags, newCards, removed }, { headers: CORS });
  }

  if (req.method === 'POST') {
    let b;
    try { b = await req.json(); } catch { return new Response('bad json', { status: 400, headers: CORS }); }

    // Anyone may submit a flag — justification required.
    if (b.action === 'flag') {
      const f = b.flag || {};
      if (!f.reason || !String(f.reason).trim())
        return new Response('reason required', { status: 400, headers: CORS });
      const flags = (await store.get('flags', { type: 'json' })) || [];
      flags.push({
        id: f.id, cat: f.cat,
        title: String(f.title || '').slice(0, 300),
        reason: String(f.reason).slice(0, 2000),
        date: new Date().toISOString()
      });
      await store.setJSON('flags', flags);
      return Response.json({ ok: true }, { headers: CORS });
    }

    // Admin-only actions below.
    if (!ADMIN)
      return new Response('admin not configured', { status: 503, headers: CORS });
    if (b.password !== ADMIN)
      return new Response('unauthorized', { status: 401, headers: CORS });

    // Password is valid → used by the admin gate to verify the entered password.
    if (b.action === 'checkAuth') return Response.json({ ok: true }, { headers: CORS });

    if (b.action === 'saveEdit') {
      const edits = (await store.get('cardEdits', { type: 'json' })) || {};
      edits[b.id] = Object.assign(edits[b.id] || {}, b.overrides || {});
      await store.setJSON('cardEdits', edits);
      return Response.json({ ok: true, edits }, { headers: CORS });
    }

    if (b.action === 'dismissFlag') {
      let flags = (await store.get('flags', { type: 'json' })) || [];
      if (Number.isInteger(b.index)) flags.splice(b.index, 1);
      await store.setJSON('flags', flags);
      return Response.json({ ok: true, flags }, { headers: CORS });
    }

    if (b.action === 'addCard') {
      if (!b.card || !b.card.id) return new Response('card required', { status: 400, headers: CORS });
      const arr = (await store.get('newCards', { type: 'json' })) || [];
      const i = arr.findIndex(c => c.id === b.card.id);
      if (i >= 0) arr[i] = b.card; else arr.push(b.card);
      await store.setJSON('newCards', arr);
      return Response.json({ ok: true }, { headers: CORS });
    }

    if (b.action === 'removeCard') {
      if (!b.id) return new Response('id required', { status: 400, headers: CORS });
      const removed = (await store.get('removed', { type: 'json' })) || [];
      if (!removed.includes(b.id)) removed.push(b.id);
      await store.setJSON('removed', removed);
      // also drop it from admin-added cards, if present
      const nc = (await store.get('newCards', { type: 'json' })) || [];
      const filtered = nc.filter(c => c.id !== b.id);
      if (filtered.length !== nc.length) await store.setJSON('newCards', filtered);
      return Response.json({ ok: true }, { headers: CORS });
    }

    return new Response('unknown action', { status: 400, headers: CORS });
  }

  return new Response('method not allowed', { status: 405, headers: CORS });
};

export const config = { path: '/api/store' };
