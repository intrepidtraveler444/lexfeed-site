/* ════════════════════════════════════════════════════════════════════════
   LexFeed — Accounts, persistence & free/premium plans (Firebase)

   Cost: Firebase Spark (free) tier — Auth (email/password) + Cloud Firestore.
   $0 until well into thousands of daily users.

   ── SETUP (one-time) ──────────────────────────────────────────────────────
   1. Create a project at https://console.firebase.google.com
   2. Build → Authentication → Sign-in method → enable **Email/Password**.
   3. Build → Firestore Database → Create database (Production mode).
   4. Firestore → Rules → ADD this match block (merge it alongside any existing
      rules if you're reusing a project — do NOT delete the others):
        match /lexfeed_users/{uid} {
          allow read, write: if request.auth != null && request.auth.uid == uid;
        }
   5. Project settings → Your apps → Add app → Web (</>) → copy the config into
      FIREBASE_CONFIG below. (Reusing an existing project is fine — one project
      hosts many apps and shares Auth + Firestore.)

   Until real apiKey values are filled in, accounts are disabled and the site
   behaves exactly as before (all gates open).
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // ── FIREBASE CONFIG (values only — compat SDK, no import statements) ──────
  var FIREBASE_CONFIG = {
    apiKey:            "AIzaSyDj2vXz1htBUX13VyBISVDqMIY7BKsFu0s",
    authDomain:        "gen-lang-client-0810817787.firebaseapp.com",
    projectId:         "gen-lang-client-0810817787",
    storageBucket:     "gen-lang-client-0810817787.firebasestorage.app",
    messagingSenderId: "1013512407067",
    appId:             "1:1013512407067:web:c99384090d60bc8ce5d0be",
    measurementId:     "G-C1J2E0TTC3"
  };

  // ── Plan limits ──────────────────────────────────────────────────────────
  var FREE_NEW_LIMIT  = 50;   // distinct *new* posts a free user may see
  var FREE_SAVE_LIMIT = 20;   // total saved posts on the free plan
  var PREMIUM_CODE     = 'premium4';   // test unlock (remove before real launch)

  var CONFIGURED = FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey.indexOf('YOUR_') !== 0;

  // In-memory profile mirror of users/{uid}
  var state = {
    user:    null,            // firebase user
    plan:    'free',          // 'free' | 'premium'
    username:'',
    seen:    new Set(),       // distinct post ids served to this user (drives FREE_NEW_LIMIT)
    loaded:  false
  };
  var db = null, auth = null, saveTimer = null;

  // ── Bridge to index.html's in-memory state (saves / achievements / read) ──
  function bridge() { return window.LF_STATE || null; }

  // ════════════════════════════════════════════════════════════════════════
  //  GATING API (called from index.html; permissive for guests/premium)
  // ════════════════════════════════════════════════════════════════════════
  var API = {
    isReady:    function () { return CONFIGURED; },
    isLoggedIn: function () { return !!state.user; },
    isPremium:  function () { return state.plan === 'premium'; },

    // May this (possibly new) post be served into the feed?
    canServe: function (id) {
      if (!state.user || state.plan === 'premium') return true;     // guest & premium: unlimited
      return state.seen.has(id) || state.seen.size < FREE_NEW_LIMIT; // free: repeats free, else within 50
    },
    atNewLimit: function () {
      return !!state.user && state.plan !== 'premium' && state.seen.size >= FREE_NEW_LIMIT;
    },
    // Record a post as seen (only matters for logged-in users).
    noteSeen: function (id) {
      if (!state.user || state.plan === 'premium') return;
      if (!state.seen.has(id)) { state.seen.add(id); scheduleSave(); }
    },

    // May a free user add one more save? `count` = current saves.size in index.html.
    canSave: function (count) {
      if (!state.user || state.plan === 'premium') return true;
      return count < FREE_SAVE_LIMIT;
    },

    // Persist the latest snapshot (debounced) — called by index.html on any change.
    pushState: function () { if (state.user) scheduleSave(); },

    showUpgrade: function (reason) { openModal('upgrade', reason); }
  };
  window.LF_AUTH = API;

  // ════════════════════════════════════════════════════════════════════════
  //  FIRESTORE SYNC
  // ════════════════════════════════════════════════════════════════════════
  // Namespaced collection so LexFeed coexists with anything else in a shared project.
  function userRef() { return db.collection('lexfeed_users').doc(state.user.uid); }

  function scheduleSave() {
    if (!state.user) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(persist, 1500);   // debounce to stay well within free quotas
  }

  function persist() {
    if (!state.user) return;
    var b = bridge(); var snap = b ? b.snapshot() : {};
    var data = {
      username:     state.username,
      plan:         state.plan,
      savedIds:     snap.saves || [],
      savedData:    snap.savedData || {},
      achievements: snap.ach || [],
      totalRead:    snap.total || 0,
      streak:       snap.streak || null,
      seenIds:      Array.from(state.seen),
      updatedAt:    Date.now()
    };
    userRef().set(data, { merge: true }).catch(function (e) { console.warn('[auth] save failed', e); });
  }

  // Pull the cloud doc, merge with whatever is already local, hydrate the page.
  function loadProfile() {
    return userRef().get().then(function (doc) {
      var d = doc.exists ? doc.data() : {};
      state.plan     = d.plan || 'free';
      state.username = d.username || state.username || (state.user.email || '').split('@')[0];
      (d.seenIds || []).forEach(function (id) { state.seen.add(id); });
      state.loaded = true;

      var b = bridge();
      if (b) b.hydrate({                          // merge cloud → local (union/max)
        saves: d.savedIds, savedData: d.savedData, ach: d.achievements,
        total: d.totalRead, streak: d.streak
      });
      if (!doc.exists) persist();                 // first login → seed the doc from local state
      renderBadge();
    });
  }

  // ════════════════════════════════════════════════════════════════════════
  //  AUTH ACTIONS
  // ════════════════════════════════════════════════════════════════════════
  function signUp(username, email, password) {
    state.username = username;
    return auth.createUserWithEmailAndPassword(email, password)
      .then(function (cr) { if (cr.user.updateProfile) cr.user.updateProfile({ displayName: username }); });
  }
  function signIn(email, password) { return auth.signInWithEmailAndPassword(email, password); }
  function signOut() { return auth.signOut(); }

  function redeem(code) {
    if (!state.user) { return Promise.reject(new Error('Sign in first')); }
    if (String(code).trim() !== PREMIUM_CODE) return Promise.reject(new Error('Invalid code'));
    state.plan = 'premium';
    renderBadge();
    persist();
    return Promise.resolve();
  }

  // ════════════════════════════════════════════════════════════════════════
  //  UI  (badge in header + modal injected from JS)
  // ════════════════════════════════════════════════════════════════════════
  function injectStyles() {
    var css = ''
      + '.lf-acct{display:flex;align-items:center;gap:.4rem}'
      + '.lf-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;z-index:9999}'
      + '.lf-overlay.on{display:flex}'
      + '.lf-modal{background:#fff;color:#111;max-width:380px;width:92%;border-radius:14px;padding:1.4rem;box-shadow:0 18px 60px rgba(0,0,0,.4);font-family:inherit}'
      + '.lf-modal h3{margin:.1rem 0 1rem;font-size:1.15rem}'
      + '.lf-modal input{width:100%;box-sizing:border-box;padding:.6rem .7rem;margin:.3rem 0;border:1px solid #ccc;border-radius:8px;font-size:.95rem}'
      + '.lf-modal button.lf-go{width:100%;padding:.65rem;margin-top:.6rem;border:0;border-radius:8px;background:#1a5;color:#fff;font-weight:600;cursor:pointer;font-size:.95rem}'
      + '.lf-modal .lf-tabs{display:flex;gap:.5rem;margin-bottom:.8rem}'
      + '.lf-modal .lf-tabs span{flex:1;text-align:center;padding:.45rem;border-radius:8px;background:#eee;cursor:pointer;font-size:.9rem}'
      + '.lf-modal .lf-tabs span.on{background:#1a5;color:#fff}'
      + '.lf-row{display:flex;justify-content:space-between;align-items:center;margin:.5rem 0;font-size:.92rem}'
      + '.lf-err{color:#c00;font-size:.85rem;min-height:1em;margin-top:.3rem}'
      + '.lf-x{float:right;cursor:pointer;border:0;background:none;font-size:1.1rem;color:#888}'
      + '.lf-badge{font-size:.7rem;padding:.1rem .4rem;border-radius:6px;background:#eee;color:#555}'
      + '.lf-badge.prem{background:#f5c518;color:#3a2d00}'
      + '.acct-btn{cursor:pointer;background:rgba(255,255,255,.12);color:inherit;border:1px solid rgba(255,255,255,.25);border-radius:8px;padding:.35rem .6rem;font:inherit;font-size:.82rem}';
    var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  }

  function renderBadge() {
    var btn = document.getElementById('acctBtn');
    if (!btn) return;
    if (state.user) {
      btn.innerHTML = '👤 ' + esc(state.username) +
        ' <span class="lf-badge ' + (state.plan === 'premium' ? 'prem' : '') + '">' +
        (state.plan === 'premium' ? 'Premium' : 'Free') + '</span>';
    } else {
      btn.textContent = 'Sign in';
    }
  }
  function esc(s) { return String(s || '').replace(/[<>&"]/g, function (c) { return ({ '<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;' })[c]; }); }

  var overlay;
  function ensureOverlay() {
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.className = 'lf-overlay';
    overlay.addEventListener('click', function (e) { if (e.target === overlay) overlay.classList.remove('on'); });
    document.body.appendChild(overlay);
    return overlay;
  }

  function openModal(view, reason) {
    ensureOverlay();
    if (state.user && view !== 'upgrade') view = 'profile';
    var html = '';
    if (view === 'upgrade') {
      var msg = reason === 'save'
        ? 'You\'ve saved the maximum of ' + FREE_SAVE_LIMIT + ' posts on the free plan.'
        : 'You\'ve reached the free limit of ' + FREE_NEW_LIMIT + ' new posts.';
      html = '<button class="lf-x" data-close>✕</button><h3>Go Premium</h3>'
        + '<p style="font-size:.9rem;color:#444">' + msg + ' Upgrade for unlimited posts and saves.</p>'
        + (state.user
            ? '<input id="lf-code" placeholder="Have a code? (e.g. ' + PREMIUM_CODE + ')"><div class="lf-err" id="lf-err"></div><button class="lf-go" data-redeem>Unlock Premium</button>'
            : '<button class="lf-go" data-signin>Sign in to upgrade</button>');
    } else if (view === 'profile') {
      html = '<button class="lf-x" data-close>✕</button><h3>👤 ' + esc(state.username) + '</h3>'
        + '<div class="lf-row"><span>Plan</span><b>' + (state.plan === 'premium' ? 'Premium ✨' : 'Free') + '</b></div>'
        + (state.plan !== 'premium'
            ? '<div class="lf-row"><span>New posts seen</span><b>' + state.seen.size + ' / ' + FREE_NEW_LIMIT + '</b></div>'
              + '<input id="lf-code" placeholder="Redeem code (e.g. ' + PREMIUM_CODE + ')"><div class="lf-err" id="lf-err"></div><button class="lf-go" data-redeem>Unlock Premium</button>'
            : '<p style="font-size:.9rem;color:#1a5">Unlimited access enabled. 🎉</p>')
        + '<button class="lf-go" style="background:#666;margin-top:1rem" data-signout>Sign out</button>';
    } else {
      var tab = view === 'signup' ? 'signup' : 'signin';
      html = '<button class="lf-x" data-close>✕</button><h3>Welcome to LexFeed</h3>'
        + '<div class="lf-tabs"><span data-tab="signin" class="' + (tab==='signin'?'on':'') + '">Sign in</span>'
        + '<span data-tab="signup" class="' + (tab==='signup'?'on':'') + '">Create account</span></div>'
        + (tab === 'signup' ? '<input id="lf-user" placeholder="Username" autocomplete="username">' : '')
        + '<input id="lf-email" type="email" placeholder="Email" autocomplete="email">'
        + '<input id="lf-pass" type="password" placeholder="Password (min 6 chars)" autocomplete="current-password">'
        + '<div class="lf-err" id="lf-err"></div>'
        + '<button class="lf-go" data-' + (tab==='signup'?'dosignup':'dosignin') + '>' + (tab==='signup'?'Create account':'Sign in') + '</button>';
    }
    overlay.innerHTML = '<div class="lf-modal">' + html + '</div>';
    overlay.classList.add('on');
    wireModal();
  }

  function err(m) { var e = document.getElementById('lf-err'); if (e) e.textContent = m; }

  function wireModal() {
    var q = function (s) { return overlay.querySelector(s); };
    var on = function (sel, fn) { var el = q(sel); if (el) el.addEventListener('click', fn); };
    on('[data-close]', function () { overlay.classList.remove('on'); });
    overlay.querySelectorAll('[data-tab]').forEach(function (t) {
      t.addEventListener('click', function () { openModal(t.getAttribute('data-tab')); });
    });
    on('[data-signin]', function () { openModal('signin'); });
    on('[data-signout]', function () { signOut(); overlay.classList.remove('on'); });
    on('[data-dosignin]', function () {
      signIn(q('#lf-email').value.trim(), q('#lf-pass').value)
        .then(function () { overlay.classList.remove('on'); }).catch(function (e) { err(humanErr(e)); });
    });
    on('[data-dosignup]', function () {
      var u = q('#lf-user').value.trim();
      if (u.length < 2) return err('Pick a username (2+ characters).');
      signUp(u, q('#lf-email').value.trim(), q('#lf-pass').value)
        .then(function () { overlay.classList.remove('on'); }).catch(function (e) { err(humanErr(e)); });
    });
    on('[data-redeem]', function () {
      redeem(q('#lf-code').value).then(function () { openModal('profile'); }).catch(function (e) { err(e.message || 'Invalid code'); });
    });
  }

  function humanErr(e) {
    var c = (e && e.code) || '';
    if (c.indexOf('email-already-in-use') > -1) return 'That email already has an account — try signing in.';
    if (c.indexOf('invalid-email') > -1) return 'That email looks invalid.';
    if (c.indexOf('weak-password') > -1) return 'Password must be at least 6 characters.';
    if (c.indexOf('wrong-password') > -1 || c.indexOf('user-not-found') > -1 || c.indexOf('invalid-credential') > -1) return 'Email or password is incorrect.';
    return (e && e.message) || 'Something went wrong.';
  }

  // ════════════════════════════════════════════════════════════════════════
  //  BOOTSTRAP
  // ════════════════════════════════════════════════════════════════════════
  function boot() {
    injectStyles();
    var btn = document.getElementById('acctBtn');
    if (btn) btn.addEventListener('click', function () { openModal(state.user ? 'profile' : 'signin'); });

    if (!CONFIGURED || typeof firebase === 'undefined') {
      if (btn) { btn.title = 'Accounts are not configured yet (add Firebase keys in auth.js).'; }
      renderBadge();
      return; // site runs fully; gates stay open
    }

    firebase.initializeApp(FIREBASE_CONFIG);
    auth = firebase.auth();
    db   = firebase.firestore();
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function(){});

    auth.onAuthStateChanged(function (user) {
      state.user = user;
      if (user) {
        state.username = user.displayName || (user.email || '').split('@')[0];
        loadProfile().catch(function (e) { console.warn('[auth] load failed', e); });
      } else {
        state.plan = 'free'; state.seen = new Set(); state.loaded = false;
      }
      renderBadge();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
