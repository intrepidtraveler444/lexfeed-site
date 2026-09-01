/* ════════════════════════════════════════════════════════════════════════
   LexFeed — EXTRAS BANK (drip-release pool for articles + glossary terms)

   A second drip pool, parallel to canon.js. The site reveals ONE groundbreaking
   journal article + ONE LexisNexis glossary term per day (see "EXTRAS DRIP" in
   index.html), in addition to the 2 canon cases/statutes.

   RULES for every entry — enforced by tools/verify-extras.mjs:
     • journal-article → must be a well-received, genuinely landmark piece from
                         the LAST 20 YEARS (2006–2026; the year must appear in
                         the title) and link to a STABLE publisher / DOI / SSRN
                         landing page from the host allowlist — NEVER a Google
                         Scholar (or other) *search* link.
     • legal-term      → must be a real LexisNexis glossary entry, linking to
                         https://www.lexisnexis.co.uk/legal/glossary/<slug>.
     • No entry may duplicate anything already in index.html's CURATED list
       (existing ja / lt ids) — by title or link. The drip also de-dupes at
       runtime (by id + citation-insensitive title) as a safety net.

   Release ORDER = array order below. Add new verified entries at the END.
   Every link here was confirmed via web search before committing (publisher
   pages and LexisNexis throttle bots, so a raw GET can't prove existence —
   see tools/source-verification notes / PIPELINE.md).
   ════════════════════════════════════════════════════════════════════════ */
;(function (root, factory) {
  var X = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = X;        // Node (verifier)
  else (typeof globalThis !== 'undefined' ? globalThis : root).LEXFEED_EXTRAS = X; // browser
})(this, function () {
  return {

  // ══════════════════════════════════════════════════════════════════════
  //  JOURNAL ARTICLES — groundbreaking scholarship, 2006–2026
  // ══════════════════════════════════════════════════════════════════════
  articles: [

  { id:'xa1', type:'curated', cat:'journal-article', area:'Criminal',
    title:"Chalmers & Leverick — 'Fair Labelling in Criminal Law' (2008) 71 MLR 217",
    body:"James Chalmers and Fiona Leverick subject the much-invoked but rarely examined principle of 'fair labelling' to sustained analysis. They argue the principle — that offence labels should fairly represent the nature and magnitude of a defendant's wrongdoing — rests on several distinct rationales, including the proportionate communication of censure, fairness to the offender, and the practical needs of sentencing, criminal records and public information. Tracing its limits against competing demands such as administrative convenience and the risk of endless offence-proliferation, the article gives criminal law theory a clear framework for evaluating how crimes are defined and named.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/10.1111/j.1468-2230.2008.00689.x' },

  { id:'xa2', type:'curated', cat:'journal-article', area:'Constitutional',
    title:"Barber — 'The Afterlife of Parliamentary Sovereignty' (2011) 9 ICON 144",
    body:"Nicholas Barber argues that the orthodox Diceyan rule of parliamentary sovereignty was effectively abandoned in Factortame, when the courts disapplied an Act of Parliament for conflict with EU law. Yet the label 'sovereignty', he contends, lives on — repeatedly re-attached by scholars and judges to new and quite different constitutional phenomena, from the rule of recognition to manner-and-form theories. The piece is a sharp, much-cited intervention in the post-Factortame debate over what, if anything, now grounds the authority of statute in the United Kingdom.",
    src:'International Journal of Constitutional Law', link:'https://academic.oup.com/icon/article/9/1/144/902288' },

  { id:'xa3', type:'curated', cat:'journal-article', area:'Tort',
    title:"Nolan — 'Deconstructing the Duty of Care' (2013) 129 LQR 559",
    body:"Donal Nolan mounts a fundamental challenge to the orthodoxy that a 'duty of care' is an indispensable element of the tort of negligence. He argues the concept has become a confused catch-all that obscures rather than illuminates, and proposes its 'deconstruction': the disparate questions currently bundled under duty should be redistributed to other, better-defined elements of the negligence inquiry — fault, damage, causation, remoteness and defences. Widely cited and debated, it is a leading modern re-examination of the architecture of negligence.",
    src:'Law Quarterly Review', link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3093657' },

  { id:'xa4', type:'curated', cat:'journal-article', area:'Constitutional',
    title:"Elliott — 'The Supreme Court's Judgment in Miller: In Search of Constitutional Principle' (2017) 76 CLJ 257",
    body:"Mark Elliott offers a leading academic analysis of R (Miller) v Secretary of State for Exiting the European Union, in which the Supreme Court held that triggering Article 50 required statutory authority and could not rest on prerogative power. Elliott examines the constitutional principles the majority relied on — the relationship between prerogative and statute, the status of EU law in the domestic order, and the limits of the devolution settlement's Sewel convention — and questions how securely the reasoning is anchored. The article became a reference point for understanding the constitutional architecture exposed by Brexit.",
    src:'Cambridge Law Journal', link:'https://www.cambridge.org/core/journals/cambridge-law-journal/article/abs/supreme-courts-judgment-in-miller-in-search-of-constitutional-principle/06AFCC7EE90A9CE60C436D893A52D6EF' },

  { id:'xa5', type:'curated', cat:'journal-article', area:'Public Law',
    title:"Craig — 'The Nature of Reasonableness Review' (2013) 66 CLP 131",
    body:"Paul Craig redresses the imbalance in a literature dominated by proportionality by analysing reasonableness as a ground of judicial review in its own right. He argues that reasonableness review is concerned with the weight and balance a primary decision-maker accords to relevant considerations in pursuit of a legitimate purpose, and that this can be more or less intensive depending on context. The article clarifies the relationship — and overlap — between reasonableness and proportionality, and is a standard modern reference on the intensity of review in administrative law.",
    src:'Current Legal Problems', link:'https://academic.oup.com/clp/article/66/1/131/311225' },

  { id:'xa6', type:'curated', cat:'journal-article', area:'Contract',
    title:"Chen-Wishart — 'In Defence of Consideration' (2013) 13 OUCLJ 209",
    body:"Against the recurring calls to abolish or sideline the doctrine of consideration, Mindy Chen-Wishart defends it as performing valuable and distinctive work in marking which promises the law will enforce. She argues that consideration embodies the idea of reciprocity at the heart of contract and cannot be simply replaced by intention to create legal relations or reliance-based liability without loss. The article is a leading contemporary statement of the case for retaining consideration as a coherent organising principle of contract formation.",
    src:'Oxford University Commonwealth Law Journal', link:'https://www.tandfonline.com/doi/abs/10.5235/14729342.13.1.209' },

  { id:'xa7', type:'curated', cat:'journal-article',
    title:"Raz — 'The Argument from Justice, or How Not to Reply to Legal Positivism' (2007)",
    body:"Joseph Raz replies to Robert Alexy's 'argument from injustice' — the non-positivist claim that grossly unjust norms cannot count as law. Raz argues this misunderstands legal positivism: positivism does not deny that law has moral aspects or that morality bears on adjudication, but maintains that the existence and content of law is ultimately a matter of social fact, not moral merit. A precise and influential restatement of the positivist position by one of its foremost modern exponents, it is a key text in contemporary analytical jurisprudence.",
    src:'Oxford Legal Studies Research Paper', link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=999873' },

  { id:'xa8', type:'curated', cat:'journal-article', area:'Equity',
    title:"Smith — 'Fiduciary Relationships: Ensuring the Loyal Exercise of Judgement on Behalf of Another' (2014) 130 LQR 608",
    body:"Lionel Smith advances a unifying theory of fiduciary relationships built around the idea of decision-making power exercised on behalf of another. On this account the core fiduciary duty of loyalty is not merely a list of prohibitions (no conflicts, no profits) but a positive requirement that discretionary judgement be exercised in the beneficiary's interest. Smith shows how the justification for the duties, their content, and the distinctive remedies that follow form a conceptual unity, in a piece that has shaped modern debate on the nature of fiduciary obligation.",
    src:'Law Quarterly Review', link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2559974' },

  { id:'xa9', type:'curated', cat:'journal-article', area:'Human Rights',
    title:"Phillipson & Williams — 'Horizontal Effect and the Constitutional Constraint' (2011) 74 MLR 878",
    body:"Gavin Phillipson and Alexander Williams propose a 'constitutional constraint' model of the duty the Human Rights Act imposes on courts to give horizontal effect to Convention rights through the common law. Steering between strong 'direct' horizontal effect and weak deference, they argue courts must develop the common law compatibly with the Convention, but only where that can be achieved by incremental development consistent with existing principle. The article is a leading contribution to the long-running debate on how far human rights bind private parties in English law.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-2230.2011.00876.x' },

  { id:'xa10', type:'curated', cat:'journal-article', area:'Tort',
    title:"Gardner — 'What is Tort Law For? Part 1. The Place of Corrective Justice' (2011) 30 Law and Philosophy 1",
    body:"John Gardner defends the proposal that tort law exists to do corrective justice between the parties — to repair the wrong one person has done another. Central to his account is the 'continuity thesis': the duty to repair is a rational echo of the original duty that was breached, so that paying damages is the next-best way of conforming to a reason one has already flouted. Clarifying and defending corrective justice against its critics, the article is among the most influential modern works in tort theory and the philosophy of private law.",
    src:'Law and Philosophy', link:'https://link.springer.com/article/10.1007/s10982-010-9086-6' },

  { id:'xa11', type:'curated', cat:'journal-article', area:'Criminal',
    title:"Ashworth — 'Four Threats to the Presumption of Innocence' (2006) 10 E&P 241",
    body:"Andrew Ashworth maps four distinct ways in which the presumption of innocence is eroded in modern criminal justice: confinement (defining offences so the presumption bites on less), erosion (multiplying reverse burdens and exceptions), evasion (using civil and hybrid procedures to sidestep criminal protections), and side-stepping (restricting liberty short of conviction). Defending the presumption as a fundamental right rather than a mere procedural rule, the article became a touchstone for debates on reverse burdens, preventive orders and the boundary between the criminal and the civil.",
    src:'International Journal of Evidence & Proof', link:'https://journals.sagepub.com/doi/abs/10.1350/ijep.10.4.241' },

  { id:'xa12', type:'curated', cat:'journal-article', area:'Tort',
    title:"Stapleton — 'Unnecessary Causes' (2013) 129 LQR 39",
    body:"Jane Stapleton argues that the law should recognise a notion of factual causation wider than the 'but for' test of necessity. Where a defendant's wrongful contribution was part of a set of conditions sufficient to produce the harm, it can be a genuine cause even though it was not strictly necessary — as in cases of over-determination and multiple sufficient causes. Drawing on the NESS analysis, the article reshaped thinking about causation in tort and informed the courts' treatment of difficult multiple-cause and contribution problems.",
    src:'Law Quarterly Review', link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276779' },

  { id:'xa13', type:'curated', cat:'journal-article', area:'Constitutional',
    title:"Allan — 'Questions of Legality and Legitimacy: Form and Substance in British Constitutionalism' (2011) 9 ICON 155",
    body:"T. R. S. Allan argues that the formal doctrine of absolute parliamentary sovereignty cannot be the whole truth of the British constitution, because it would authorise the infringement of the very values of legality and equality that give law its legitimacy. He contends that constitutional fundamentals are best understood through substantive principles of the rule of law rather than bare formal rules. A leading statement of common-law constitutionalism, the article sits at the centre of the modern debate between legal and political conceptions of the constitution.",
    src:'International Journal of Constitutional Law', link:'https://academic.oup.com/icon/article/9/1/155/902267' },

  { id:'xa14', type:'curated', cat:'journal-article', area:'Property',
    title:"McFarlane & Robertson — 'Apocalypse Averted: Proprietary Estoppel in the House of Lords' (2009) 125 LQR 535",
    body:"Ben McFarlane and Andrew Robertson examine the House of Lords' decisions in Cobbe v Yeoman's Row and Thorner v Major, which together appeared first to imperil and then to rescue the modern doctrine of proprietary estoppel. They argue that, properly read, the cases preserve a coherent estoppel based on a promise or assurance, reasonable reliance and detriment, distinct from contract and from constructive trust. The article is a leading analysis of the elements and rationale of proprietary estoppel after a turbulent period in the House of Lords.",
    src:'Law Quarterly Review', link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1494965' },

  { id:'xa20260901a', type:'curated', cat:'journal-article', area:'Tort',
    title:"Howarth — 'Many Duties of Care — or a Duty of Care? Notes from the Underground' (2006) 26 OJLS 449",
    body:"David Howarth challenges the assumption, common after Caparo, that English negligence law operates through a single general duty of care test qualified by incrementalism and policy. He argues instead that the case law is best understood as a set of distinct, context-specific duties — duties not to cause physical injury, not to cause economic loss, not to make careless statements, and so on — each with its own conditions and limits. Treating the 'duty of care' as a single concept, he contends, distorts analysis by importing the reasoning appropriate to one context into another where it does not belong. The article is a significant challenge to unified duty-of-care thinking.",
    src:'Oxford Journal of Legal Studies', link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1096826' },

  { id:'xa20260901b', type:'curated', cat:'journal-article', area:'Tort',
    title:"Nolan — 'New Forms of Damage in Negligence' (2007) 70 MLR 59",
    body:"Donal Nolan examines the courts' willingness to recognise novel heads of compensable damage in negligence, focusing in particular on the development of 'loss of a chance' claims after Gregg v Scott and of psychiatric injury liability after Page v Smith. He argues that extending the concept of recoverable damage is a more principled and transparent way to expand negligence liability than manipulating the duty of care, and analyses the conditions under which new forms of damage should be recognised. The article is a leading contribution on how the damage element shapes and limits the scope of negligence.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-2230.2006.00626.x' },

  { id:'xa20260901c', type:'curated', cat:'journal-article', area:'Constitutional',
    title:"Kavanagh — 'Deference or Defiance? The Limits of the Judicial Role in Constitutional Adjudication' (2008)",
    body:"Aileen Kavanagh examines the appropriate degree of judicial deference to legislative and executive decisions under the Human Rights Act. She argues that 'deference' is an unhelpful label that obscures the real question — when should courts exercise strong or weak review? — and proposes instead a 'due deference' model that calibrates judicial scrutiny to the relative institutional competence and constitutional role of the courts versus the other branches. The chapter is a leading statement of a principled, differentiated approach to the intensity of human rights review, contrasting with both strong judicial supremacy and blanket legislative deference.",
    src:'Cambridge University Press', link:'https://www.cambridge.org/core/books/abs/expounding-the-constitution/deference-or-defiance-the-limits-of-the-judicial-role-in-constitutional-adjudication/687BA9FA306DA3F5B5C433A26397E5BD' },

  { id:'xa20260901d', type:'curated', cat:'journal-article', area:'Trusts',
    title:"Etherton — 'Constructive Trusts: A New Model for Equity and Unjust Enrichment' (2008) 67 CLJ 265",
    body:"Sir Terence Etherton (later Master of the Rolls) argues that the English law of constructive trusts is fragmented across too many disparate categories — common intention trusts, strangers who receive or assist, unconscionable retention — none of which has a unifying principle. He proposes a new model in which constructive trusts in the personal property sphere are properly understood as part of the law of unjust enrichment: the trust arises wherever, on analogy with unjust enrichment, there is no basis for the defendant to retain the benefit against the claimant. The article opened a significant debate about the doctrinal foundations of the constructive trust.",
    src:'Cambridge Law Journal', link:'https://doi.org/10.1017/S0008197308000342' },

  { id:'xa20260901e', type:'curated', cat:'journal-article', area:'Equity',
    title:"Webb — 'What Right Does Unjust Enrichment Law Protect?' (2008) 28 OJLS 245",
    body:"Charlie Webb argues that the standard answer — that unjust enrichment law protects a property right the claimant already had — is circular and incomplete, and that the right protected must instead be identified by examining the grounds for restitution themselves. On his account, the law of unjust enrichment protects an entitlement to the direct transfers of value for which no legal basis has been provided, and this explains both the conditions for the obligation to arise and the measure of recovery. The article is an important analytical intervention on the normative foundation of unjust enrichment doctrine.",
    src:'Oxford Journal of Legal Studies', link:'https://academic.oup.com/ojls/article-abstract/28/2/245/1477573' },

  { id:'xa20260901f', type:'curated', cat:'journal-article', area:'Tort',
    title:"Tofaris & Steel — 'Negligence Liability for Omissions and the Police' (2016) 75 CLJ 128",
    body:"Stelios Tofaris and Sandy Steel examine the no-liability-for-omissions rule in negligence and the exceptional police immunity from suit affirmed in cases such as Michael v Chief Constable of South Wales. They argue the policy justifications conventionally offered for both doctrines — that defendants cannot control third parties, that liability would over-deter and cause defensive behaviour — fail on their own terms when tested against the actual cases. The article mounts a sustained empirical and normative critique of the immunity and calls for the Supreme Court to reconsider it, and remains a leading academic response to the controversial Michael decision.",
    src:'Cambridge Law Journal', link:'https://www.cambridge.org/core/journals/cambridge-law-journal/article/abs/negligence-liability-for-omissions-and-the-police/AC83F61745C4326FEE217D993868C08D' },

  { id:'xa20260901g', type:'curated', cat:'journal-article', area:'Tort',
    title:"Goudkamp & Nolan — 'Contributory Negligence in the Twenty-First Century: An Empirical Study of First Instance Decisions' (2016) 79 MLR 575",
    body:"James Goudkamp and Donal Nolan present a systematic empirical analysis of how English first-instance courts actually apply contributory negligence — the defence that reduces a claimant's damages for their own fault — across a large sample of decided cases. They find striking inconsistency in the approach taken to both the liability and quantum stages, including wide variation in the reduction percentages awarded for comparable conduct and a tendency for courts to treat the defence as a rough-and-ready device rather than a principled apportionment of responsibility. The study is both a valuable empirical baseline and a call for greater doctrinal coherence.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-2230.12202' },

  ],

  // ══════════════════════════════════════════════════════════════════════
  //  LEGAL TERMS — LexisNexis glossary (slugs not used by lt1–lt59)
  // ══════════════════════════════════════════════════════════════════════
  terms: [

  { id:'xt1', type:'curated', cat:'legal-term', area:'Property',
    title:'Bailment',
    body:"Bailment is the legal relationship that arises where one person (the bailee) is voluntarily and knowingly in possession of goods belonging to another (the bailor). It exists independently of any contract, being created simply by the bailee taking the bailor's goods into custody. The defining feature common to every bailment is a duty on the bailee to take reasonable care of the goods and not to convert them; the standard of that duty varies with whether the bailment is for reward or gratuitous, and for whose benefit it exists.",
    example:"A customer leaves her coat with a restaurant's cloakroom attendant in exchange for a ticket. The restaurant becomes the bailee of the coat and owes a duty to take reasonable care of it, so if it is lost through the attendant's carelessness the restaurant may be liable in bailment, even though no separate fee was charged.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/bailment' },

  { id:'xt2', type:'curated', cat:'legal-term', area:'Contract',
    title:'Privity of Contract',
    body:"The doctrine of privity holds that, as a general rule, only the parties to a contract can acquire rights under it or have obligations imposed upon them by it — even where the contract was made for the very purpose of benefiting a third party. A stranger to the agreement can therefore neither sue nor be sued upon it. The rule's harshness has been substantially relaxed by the Contracts (Rights of Third Parties) Act 1999, which allows a third party to enforce a term in specified circumstances, but privity still governs contracts that fall outside the Act.",
    example:"Parents contract with a caterer for their daughter's wedding, the contract expressly stating the food is for the daughter's benefit. If the catering is defective, at common law the daughter — not being a party — cannot sue on the contract because of privity, though the 1999 Act may now give her a direct right to enforce it.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/privity-of-contract' },

  { id:'xt3', type:'curated', cat:'legal-term', area:'Criminal',
    title:'Duress by Threats',
    body:"Duress by threats is a common-law defence that excuses a defendant who commits an offence because they were compelled to do so by a threat of death or serious injury to themselves or another. The threat must be such that a sober person of reasonable firmness, sharing the defendant's relevant characteristics, would have given way to it, and there must be no safe avenue of escape. It is a complete defence to most crimes, but is unavailable for murder, attempted murder and (potentially) treason, and is lost where the defendant voluntarily associated with violent criminals.",
    example:"A man is told by an armed gang that unless he drives them to a robbery his family will be killed, and he has no realistic chance to alert the police. If a reasonable person in his position would also have complied, he may rely on duress by threats as a defence to the offences committed in driving them — though not if the charge were murder.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/duress-by-threats' },

  { id:'xt4', type:'curated', cat:'legal-term', area:'Property',
    title:'Easement',
    body:"An easement is a right enjoyed by the owner of one piece of land (the dominant tenement) over neighbouring land in another's ownership (the servient tenement), which binds successors in title. It is a right to use the servient land in a particular way, or to restrict its use, but does not confer possession or a right to take the land's produce. Common examples are rights of way and rights to light or support; easements may be acquired by express or implied grant, by prescription (long use), or under the rule in the doctrine of lost modern grant.",
    example:"A homeowner has used a path across her neighbour's garden to reach the road for over twenty years without objection. She may acquire an easement — a right of way by prescription — that binds not only the current neighbour but anyone who later buys that garden.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/easement' },

  { id:'xt5', type:'curated', cat:'legal-term', area:'Contract',
    title:'Set-Off',
    body:"Set-off is the discharge of reciprocal obligations between two parties to the extent of the smaller obligation, allowing a party sued for a debt to reduce or extinguish the claim by applying a cross-claim it holds against the claimant. English law recognises several types: common-law (independent) set-off, available where there are mutual liquidated cross-debts; equitable (transaction) set-off, where the cross-claims are so closely connected that it would be unjust to enforce one without the other; and the mandatory set-off that operates in insolvency.",
    example:"A supplier sues a buyer for £10,000 owed on delivered goods. The buyer has a closely connected claim for £4,000 because some of those goods were defective. By equitable set-off the buyer can defend the claim to the extent of £4,000, so the supplier effectively recovers only £6,000.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/set-off' },

  { id:'xt6', type:'curated', cat:'legal-term', area:'Contract',
    title:'Repudiatory Breach',
    body:"A repudiatory breach is a breach so serious that it goes to the root of the contract, entitling the innocent party to treat itself as discharged from further performance and to claim damages. It arises where a party fails or refuses to perform an essential or fundamental term, breaches a condition, or otherwise evinces an intention no longer to be bound. The innocent party has an election: it may accept the repudiation and terminate, or affirm the contract and keep it alive — but it cannot do both, and must communicate its choice.",
    example:"A builder engaged to renovate a house downs tools halfway through and announces he will not return. This refusal to perform a fundamental obligation is a repudiatory breach, so the owner may accept it, terminate the contract, hire another builder and sue for the additional cost.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/repudiatory-breach' },

  { id:'xt7', type:'curated', cat:'legal-term', area:'Contract',
    title:'Waiver',
    body:"In contract law, waiver denotes a party voluntarily giving up, or not insisting upon, the precise performance of a right or obligation owed to it under the contract — whether before or after a breach. It may be express or implied from conduct, and where the other party relies on it the waiving party may, at least temporarily, be prevented from going back on the concession. Waiver is closely related to, and sometimes analysed through, the doctrines of election and promissory estoppel.",
    example:"A landlord accepts rent late, month after month, without complaint despite a clause requiring payment on the first. By this conduct the landlord may be taken to have waived strict compliance with the payment date, and cannot suddenly forfeit the lease for lateness without first giving reasonable notice that timely payment will again be required.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/waiver' },

  { id:'xt8', type:'curated', cat:'legal-term', area:'Equity',
    title:'Account of Profits',
    body:"An account of profits is an equitable, gain-based remedy that requires a defendant to give up the profits wrongfully made, rather than to compensate the claimant for loss suffered. It is available principally where the defendant stood in a fiduciary or other relationship of trust to the claimant and improperly profited from that position, and also for certain wrongs such as breach of confidence and infringement of intellectual property. Because it strips gains regardless of the claimant's loss, it is a powerful deterrent against disloyal or unconscionable conduct.",
    example:"A company director secretly diverts a lucrative contract to his own side business and makes £50,000 profit. Even if the company cannot prove it would have won the contract itself, equity may order the director to account for the £50,000, because he is not permitted to retain a profit made in breach of his fiduciary duty.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/account-of-profits' },

  { id:'xt9', type:'curated', cat:'legal-term', area:'Tort',
    title:'Conversion',
    body:"Conversion is a tort of strict liability protecting a person's right to possession of goods. It is committed by a positive, wrongful act that is so inconsistent with the claimant's right to possess the goods as to amount to a denial of that right — for example taking, wrongfully selling, destroying or refusing to return them. The claimant need not own the goods outright; an immediate right to possession suffices, and the defendant's honest belief that the act was lawful is generally no defence.",
    example:"A storage company, told to release a customer's furniture, instead sells it to a third party believing the storage fees were unpaid. By selling goods in a way wholly inconsistent with the customer's right to possess them, the company commits conversion and is liable for the value of the furniture, even though it acted in good faith.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/conversion' },

  { id:'xt10', type:'curated', cat:'legal-term', area:'Contract',
    title:'Anticipatory Breach',
    body:"Anticipatory breach occurs where, before performance falls due, one party makes clear by words or conduct that it will not perform its contractual obligations when the time for performance arrives. The innocent party need not wait until the date of performance: it may treat the renunciation as a present repudiatory breach, accept it, terminate the contract and sue for damages straight away. Alternatively it may affirm the contract and keep it open, though it then bears the risk of intervening events that might discharge the contract.",
    example:"A singer engaged to perform at a concert in three months' time writes to the organiser a month beforehand saying she will definitely not appear. This is an anticipatory breach, and the organiser may immediately treat the contract as at an end and sue for damages without waiting for the concert date to pass.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/anticipatory-breach' },

  { id:'xt11', type:'curated', cat:'legal-term', area:'Criminal',
    title:'Defence of Necessity',
    body:"Necessity is a narrow common-law defence under which conduct that would otherwise be criminal is excused or justified because it was done to avoid a greater and imminent evil. In its modern form, often called duress of circumstances, it requires that the defendant acted reasonably and proportionately to avoid a threat of death or serious injury arising from the surrounding situation rather than from a person's direct demand. The courts have been cautious about its scope, fearing it could become a licence to break the law, and it is unavailable as a defence to murder save in the most exceptional circumstances.",
    example:"A driver exceeds the speed limit and jumps a red light to rush a passenger who is suffering a life-threatening allergic reaction to hospital. Because he acted reasonably and proportionately to avoid serious harm created by the emergency, he may rely on necessity (duress of circumstances) as a defence to the driving offences.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/defence-of-necessity' },

  { id:'xt12', type:'curated', cat:'legal-term', area:'Property',
    title:'Mesne Profits',
    body:"Mesne profits are the sums a landowner may recover from a person who has wrongfully remained in, or taken, possession of land without authority — typically a trespasser or a tenant who holds over after a lease has ended. They represent compensation for the owner's loss of use of the land during the period of wrongful occupation, conventionally measured by the ordinary letting value of the property, and are claimed in addition to (and distinct from) any arrears of rent owed under an expired tenancy.",
    example:"A commercial tenant's lease expires but he refuses to leave and stays for a further six months. The landlord can claim mesne profits for that period — usually the market rent the premises would have commanded — to compensate for being kept out of possession while the former tenant wrongfully remained.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/mesne-profits' },

  { id:'xt13', type:'curated', cat:'legal-term', area:'Evidence',
    title:'Standard of Proof',
    body:"The standard of proof is the degree to which a party bearing the burden of proof must establish a fact before a court will accept it. English law applies two principal standards: in criminal cases the prosecution must prove guilt 'beyond reasonable doubt' (so that the tribunal is sure), while in civil cases facts are proved on 'the balance of probabilities' — that is, more likely than not. The standard is distinct from the burden of proof, which identifies which party must do the proving.",
    example:"In a road-traffic case the same collision may give rise to both a prosecution and a civil claim. A defendant might be acquitted of dangerous driving because guilt was not proved beyond reasonable doubt, yet still be held liable in the negligence claim, where the injured claimant need only prove fault on the balance of probabilities.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/standard-of-proof' },

  { id:'xt14', type:'curated', cat:'legal-term', area:'Trusts',
    title:'Tracing',
    body:"Tracing is the process of identifying a new asset as the substitute for an original asset, so that a claimant can assert a proprietary claim against the substitute or its product. It is not itself a remedy but a technique of identification: having traced value from the original property into its replacement, the claimant may then claim it, for example where trust money has been misapplied. Equity's tracing rules are more generous than the common law's, permitting value to be followed through mixed funds using presumptions designed to protect the beneficiary.",
    example:"A trustee wrongfully withdraws £20,000 of trust money and uses it to buy shares that then double in value. Using the equitable tracing rules the beneficiaries can trace the trust money into the shares and claim them, capturing the increase in value, rather than being limited to a personal claim for the original £20,000.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/tracing' },

  { id:'xt20260901a', type:'curated', cat:'legal-term', area:'Trusts',
    title:'Constructive Trust',
    body:"A constructive trust is a trust imposed by equity irrespective of the parties' expressed intention, arising by operation of law wherever conscience dictates that one person should not retain a beneficial interest in property that legally belongs to them. It is not a single doctrine but a family of situations — including common intention constructive trusts of the family home, receipt of trust property with knowledge, and stranger assistance in a breach of fiduciary duty — united by the equitable principle that the legal owner holds the property for the benefit of another. The remedy is proprietary rather than personal and so takes priority in insolvency.",
    example:"A cohabiting couple buy a house in the man's sole name, but both contribute to the purchase price and decorating with a common intention to share ownership. On separation equity may impose a constructive trust, giving the woman a proportionate beneficial interest in the property even though she holds no legal title.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/constructive-trust' },

  { id:'xt20260901b', type:'curated', cat:'legal-term', area:'Tort',
    title:'Volenti Non Fit Injuria',
    body:"Volenti non fit injuria — 'to one who consents, no wrong is done' — is a complete defence in tort law that bars a claimant who has freely and voluntarily consented to the very risk that caused their injury. The consent must be genuine and informed: the defendant must show not merely that the claimant knew of the risk but that they accepted it as their own, and consent obtained under pressure or without full knowledge of the danger does not suffice. The defence has been narrowed by statute in the employment context, and knowledge of risk alone (scienti) is not sufficient — there must be voluntary agreement (volenti).",
    example:"A spectator at a cricket match is struck by a ball hit over the boundary in the ordinary course of play. Because the spectator voluntarily attended a match knowing that balls occasionally clear the boundary, the club can rely on volenti non fit injuria — the claimant accepted the inherent risk of attending.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/volenti-non-fit-injuria' },

  { id:'xt20260901c', type:'curated', cat:'legal-term', area:'Contract',
    title:'Quantum Meruit',
    body:"Quantum meruit — 'as much as he has earned' — is a restitutionary remedy by which a party who has performed work or provided services under a void or discharged contract, or at the request of the other party without an agreed price, may recover a reasonable sum for the value of the benefit conferred. It is available both as a claim in unjust enrichment and, where a contract is partly performed before frustration or discharge for breach, as a way of ensuring that the performing party is not left entirely without compensation.",
    example:"A builder completes three-quarters of a renovation contract before the owner wrongfully refuses to permit further access and terminates the contract. Even though the work is incomplete, the builder can claim quantum meruit — a reasonable sum reflecting the value of the work actually done — rather than being left empty-handed because the contract price was for full completion.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/quantum-meruit' },

  { id:'xt20260901d', type:'curated', cat:'legal-term', area:'Contract',
    title:'Frustration of Contract',
    body:"Frustration automatically discharges a contract where, after formation, an event occurs that is not the fault of either party and makes performance radically different from what was undertaken. The supervening event must be unforeseen and must destroy the commercial purpose of the contract or render it physically impossible: mere increased difficulty or expense will not suffice. The consequences of frustration are governed partly by the common law and partly by the Law Reform (Frustrated Contracts) Act 1943, which provides for recovery of money paid and recompense for valuable benefits conferred before discharge.",
    example:"A hall is booked for a concert but burns down before the date. Neither party is at fault, and performance has become physically impossible: the contract is frustrated. Under the 1943 Act any advance booking fee already paid may be recovered, and the hall owner can offset expenses reasonably incurred in preparing for the event.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/frustration-of-contract' },

  { id:'xt20260901e', type:'curated', cat:'legal-term', area:'Contract',
    title:'Undue Influence',
    body:"Undue influence is an equitable doctrine that allows a contract or gift to be set aside where one party's consent was obtained by the improper exertion of influence over them by the other. Actual undue influence is proved by demonstrating that specific illegitimate pressure was brought to bear; presumed undue influence arises automatically from certain relationships of trust and confidence (e.g. solicitor/client, doctor/patient) once the transaction calls for explanation. Where a third party's undue influence causes a party to enter a transaction with a lender, the lender may also lose the benefit of the transaction if they had notice of the circumstances.",
    example:"An elderly woman in poor health transfers her house to her sole carer under a deed the carer drafted and presented without encouraging her to seek independent legal advice. This falls within a relationship of trust and confidence, so a presumption of undue influence arises; the carer must rebut it, or equity will set the transfer aside.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/undue-influence' },

  { id:'xt20260901f', type:'curated', cat:'legal-term', area:'Tort',
    title:'Res Ipsa Loquitur',
    body:"Res ipsa loquitur — 'the thing speaks for itself' — is an evidentiary doctrine in negligence that allows the fact of an accident to raise an inference of the defendant's negligence, without the claimant needing to prove the specific act or omission that caused it. Three conditions must be satisfied: the defendant must have been in control of the situation, the accident must be of a kind that does not ordinarily happen without negligence, and there must be no explanation pointing elsewhere. Once the inference arises the evidential burden shifts; the defendant may rebut it by proving they exercised all reasonable care.",
    example:"A patient goes under general anaesthetic for an operation on their left knee and wakes to find their right knee has been operated on. The facts are sufficient to raise res ipsa loquitur — a surgical team in full control does not operate on the wrong limb without some negligence — and the burden shifts to the surgeon to explain what happened.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/res-ipsa-loquitur-' },

  { id:'xt20260901g', type:'curated', cat:'legal-term', area:'Contract',
    title:'Specific Performance (Commercial)',
    body:"Specific performance is an equitable remedy that compels a party in breach of contract to perform their contractual obligations rather than simply paying damages. In commercial contexts it is ordered where monetary compensation would be inadequate — most commonly on a sale of land (since each parcel is unique) or a sale of goods that are rare or unique — and the court has a broad discretion to refuse it where enforcement would cause undue hardship, where the order would require constant supervision, or where the claimant has acted inequitably. It does not lie against personal service contracts.",
    example:"A vendor contracts to sell a 500-year-old manor house and then refuses to complete. The buyer cannot easily purchase an equivalent property, so damages would be inadequate. The court may grant specific performance ordering the vendor to complete the conveyance, since land is unique and equity's jurisdiction in such cases is well established.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/specific-performance-commercial' },

  ],

  };
});
