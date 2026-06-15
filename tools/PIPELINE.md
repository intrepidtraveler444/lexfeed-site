# LexFeed — how curated posts grow on their own

Two halves of one loop:

```
  lawteacher.net  ──►  [ SOURCING ]  ──►  canon.js  ──►  [ DRIP ]  ──►  feed
   (landmark list)     fills the bank      (reservoir)   empties it      (live site)
                       periodically                      passively
```

* **DRIP** (already live, no work needed) — `applyCanonDrip()` in `index.html`
  reveals bank entries by calendar date: **2 on launch day, then +1 per day**.
  It de-dupes by id *and* citation-insensitive title, so nothing already
  curated can re-appear, and respects admin removals.
* **SOURCING** — the steps below top `canon.js` up so the drip never runs dry.
  Run them periodically (by hand, or on a schedule — see bottom). As long as
  you add **≥ ~10 verified cases/month**, the library grows forever.

## The sourcing run (your lawteacher pathway, step by step)

1. **Source** ~8–12 candidate landmark case names, in priority order:
   1. **Your own knowledge** of the UK student canon (leading cases per
      subject) — the most reliable "is it landmark?" signal, and it doesn't
      depend on any site's HTML.
   2. **Cross-check / expand** with e-lawresources.co.uk topic case lists and
      Wikipedia subject articles (e.g. *English contract law*, *English tort
      law*) plus their leading-case lists.
   3. **New landmarks**: UK Supreme Court decided cases
      (https://www.supremecourt.uk/cases/) and the UKSC Blog (ukscblog.com).
   ⚠️ Use every source only as a *list of which case names matter* — never copy
   their summary prose (write your own; theirs is copyrighted). lawteacher.net
   remains a fine optional cross-check too.

2. **De-dupe** against the whole existing library + bank:
   ```
   node tools/find-candidates.mjs candidates.txt
   # or scrape a page:  node tools/find-candidates.mjs --url <lawteacher-page>
   ```
   Keep only the `NEW` list.

3. **Verify a real BAILII judgment link** for each new case. Search
   `"<case name> bailii"` and take the canonical
   `https://www.bailii.org/.../cases/.../<number>.html` URL from the results
   (a search hit means the real page exists and is indexed). If there is **no
   BAILII judgment**, drop the case — the link requirement is non-negotiable.

4. **Write the card** in the same shape as existing case cards and append it to
   the end of `canon.js` (release order = array order). Use the next free
   `k`-id. Schema:
   ```js
   { id:'k13', type:'curated', cat:'case-law', area:'Tort',
     title:'… [YYYY] UKSC n', court:'…',
     facts:'…', judgment:'…', ratio:'…',
     src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/YYYY/n.html' }
   ```
   (Statutes: `cat:'statute'`, `body`, `sections:[{num,head,text}]`, and a
   `legislation.gov.uk/.../contents` link.)

5. **Gate it.** Nothing ships unverified:
   ```
   node tools/verify-canon.mjs        # must end with "0 fail"
   ```
   This rejects search/redirect links, wrong hosts, malformed judgment paths,
   and duplicate titles. (Reachability shows `UNVERIFIABLE-HERE` because BAILII
   has a Cloudflare bot wall and legislation.gov.uk throttles bots — that's
   expected; the search hit in step 3 is your real-existence check.)

6. **Deploy** — drag the folder to Netlify. Done. The drip takes it from there.

## Recognised `area` values (use one so filters work)
Criminal · Contract · Property · Tort · Constitutional · Public Law · Public ·
Human Rights · EU Law · Equity · Trusts · Family · Company · Employment · Evidence

## Make it passive (optional)
Steps 1–5 are a perfect job for a **scheduled Claude Code agent** (`/schedule`):
have it run weekly, source a handful of landmark cases, run the two scripts,
append verified cards to `canon.js`, and open the result for you to deploy. The
drip already handles release pacing — the schedule just handles refill pacing.
