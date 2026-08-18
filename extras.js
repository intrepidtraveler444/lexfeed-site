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

  // ── 2026-08-18 weekly refill ──

  { id:'xa20260818a', type:'curated', cat:'journal-article', area:'Constitutional',
    title:"Bingham — 'The Rule of Law' (2007) 66 CLJ 67",
    body:"Lord Bingham's landmark article — drawn from his Hamlyn Lectures and later the basis of his celebrated monograph — offers the most authoritative modern elaboration of the rule of law from a practising jurist. He identifies eight sub-rules that together constitute the concept: that law must be accessible, clear and predictable; that it should be settled by law rather than discretion; that equality before the law; that fundamental rights must be protected; that dispute resolution must be accessible; that public officers must act in good faith within their powers; that fair trial rights must be guaranteed; and that states must comply with international law obligations. The article is a touchstone for public-law scholarship and a required starting point for any discussion of constitutional fundamentals in the UK.",
    src:'Cambridge Law Journal', link:'https://www.cambridge.org/core/journals/cambridge-law-journal/article/abs/rule-of-law/0E971B5BB930C2E363D351C5CBC3B855' },

  { id:'xa20260818b', type:'curated', cat:'journal-article', area:'Tort',
    title:"Varuhas — 'The Concept of Vindication in the Law of Torts' (2014) 34 OJLS 253",
    body:"Jason Varuhas advances a sustained argument that tort law serves a distinct 'vindicatory' function — the affirmation and protection of the claimant's rights — that is not fully captured by the dominant compensatory or deterrence accounts. Drawing on the law of trespass, defamation and the emerging recognition of rights-based damages, he contends that vindicatory awards are doctrinally coherent and theoretically defensible as part of a rights-based conception of tort. The article sharpened the academic debate following the Supreme Court's rejection of vindicatory damages in Lumba and is widely cited in tort theory literature.",
    src:'Oxford Journal of Legal Studies', link:'https://academic.oup.com/ojls/article-abstract/34/2/253/1448858' },

  { id:'xa20260818c', type:'curated', cat:'journal-article', area:'Human Rights',
    title:"Tsakyrakis — 'Proportionality: An Assault on Human Rights?' (2009) 7 ICON 468",
    body:"Stavros Tsakyrakis mounts a striking challenge to the near-universal adoption of proportionality as the master-test in human rights adjudication. He argues that proportionality analysis, in practice, invites judges to weigh incommensurable values — individual rights against collective interests — under the illusion of rational calculation, thereby concealing political choices as technical legal judgements. The article is a key point of reference in the ongoing debate between proportionality's proponents (notably Alexy and Rivers) and its sceptics, and is regularly cited in UK human rights scholarship.",
    src:'International Journal of Constitutional Law', link:'https://academic.oup.com/icon/article-abstract/7/3/468/703178' },

  { id:'xa20260818d', type:'curated', cat:'journal-article', area:'Contract',
    title:"Carter & Courtney — 'Good Faith in Contracts: Is There an Implied Promise to Act Honestly?' (2016) 75 CLJ 608",
    body:"J. W. Carter and Wayne Courtney examine whether English contract law should recognise a general implied duty of good faith, a question given fresh urgency by Leggatt J's obiter remarks in Yam Seng v International Trade Corporation. Their analysis isolates the strand of good faith reducible to honest dealing and asks whether it can be implied as a matter of law across all contracts or only in specific relational contracts. They conclude that while honest dealing can be implied in particular relational contracts, a general doctrine remains incompatible with the adversarial premises of English contract law — a position the Court of Appeal subsequently confirmed in TSG Building Services.",
    src:'Cambridge Law Journal', link:'https://www.cambridge.org/core/journals/cambridge-law-journal/article/abs/good-faith-in-contracts-is-there-an-implied-promise-to-act-honestly/00A6FE955B9CEA616A15EEBEEBB6E5E5' },

  { id:'xa20260818e', type:'curated', cat:'journal-article', area:'Criminal',
    title:"Cornford — 'Beyond Fair Labelling: Offence Differentiation in Criminal Law' (2022) 42 OJLS 985",
    body:"Tom Cornford revisits the concept of fair labelling — the principle that offences should be named and graded so as accurately to communicate their moral gravity to the public and the offender — and argues that existing accounts focus too narrowly on the communicative function of conviction labels. He proposes that offence differentiation has an additional role in structuring sentencing and generating consistency, so that the design of offences cannot be assessed by looking at the label alone. The article reopens a settled debate with fresh analytical tools and connects it to contemporary controversies about serious violence offences.",
    src:'Oxford Journal of Legal Studies', link:'https://academic.oup.com/ojls/article/42/4/985/6594404' },

  { id:'xa20260818f', type:'curated', cat:'journal-article', area:'Equity',
    title:"Etherton — 'Constructive Trusts: A New Model for Equity and Unjust Enrichment' (2008) 67 CLJ 265",
    body:"Sir Terence Etherton (later Sir Terence, Master of the Rolls) examines the constructive trust following the House of Lords' decision in Stack v Dowden and argues that a coherent doctrine cannot rest on the single concept of 'common intention', which is too malleable to provide principled outcomes. He proposes that constructive trusts in domestic property cases would be better rationalised through the unjust enrichment principle — supplemented by a remedial constructive trust jurisdiction — aligning English law with the emerging international consensus. A landmark contribution to the property-equity interface, the article is frequently assigned in land law and equity courses.",
    src:'Cambridge Law Journal', link:'https://www.cambridge.org/core/journals/cambridge-law-journal/article/abs/constructive-trusts-a-new-model-for-equity-and-unjust-enrichment/71DEA48C91BF1990C21B3CD530D3B204' },

  { id:'xa20260818g', type:'curated', cat:'journal-article', area:'Employment',
    title:"Atkinson — 'Employment Status and Human Rights: An Emerging Approach' (2023) 86 MLR 1166",
    body:"Joe Atkinson analyses the growing judicial tendency to determine employment status — worker, employee, or independent contractor — through a human-rights lens, particularly via Article 8 ECHR (private and family life) and the right against forced labour under Article 4. Drawing on recent Supreme Court and ECtHR decisions, he argues that human rights norms are reshaping the traditional factors-based test and producing a distinct strand of cases in which the vulnerability of the individual rather than formal contractual arrangements drives the outcome. The article speaks directly to the gig economy cases that have generated enormous academic and policy interest.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/full/10.1111/1468-2230.12803' },

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

  // ── 2026-08-18 weekly refill ──

  { id:'xt20260818a', type:'curated', cat:'legal-term', area:'Tort',
    title:'Joint and Several Liability',
    body:"Joint and several liability arises where two or more defendants are each independently responsible for the whole of the claimant's loss. The claimant may enforce the full judgment against any one of them, leaving the defendant who pays to seek contribution from the others under the Civil Liability (Contribution) Act 1978. It is the default position in English tort law where multiple tortfeasors have caused an indivisible harm, and is contrasted with several (proportionate) liability, where each defendant is liable only for their share.",
    example:"Three contractors negligently install a gas system, and an explosion injures a homeowner. All three are found liable. Because the harm is indivisible, the homeowner may recover the full damages from whichever contractor has the deepest pocket, and that contractor must then claim contribution from the others.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/joint-several-liability' },

  { id:'xt20260818b', type:'curated', cat:'legal-term', area:'Property',
    title:'Lien',
    body:"A lien is the right of a person in possession of another's goods or property to retain that possession as security until a debt or obligation owed to them is discharged. At common law it is a passive right only — the lien-holder cannot sell the goods; they may merely detain them. Equitable liens and statutory liens (e.g. under the Torts (Interference with Goods) Act 1977) may confer a right of sale after notice. Liens arise in many professional and commercial contexts, including solicitors' liens over client files and ship-owners' liens on cargo.",
    example:"A garage carries out extensive repairs to a customer's car and presents an invoice the customer refuses to pay. The garage may exercise a common-law lien, retaining the car until the bill is settled, without needing a court order.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/lien' },

  { id:'xt20260818c', type:'curated', cat:'legal-term', area:'Contract',
    title:'Non Est Factum',
    body:"Non est factum ('it is not my deed') is a plea that a party who signed a document is not bound by it because the document is fundamentally different from what they believed they were signing, and the signer was not careless in making the mistake. It is an extremely narrow doctrine, available only to those who, by reason of incapacity or fraud, were unable to understand the nature or effect of the document and who took reasonable precautions. Where it succeeds, the document is void, not merely voidable.",
    example:"An elderly woman with poor sight is asked to sign what she is told is a birthday card, but is in fact a guarantee of her son's debts. If she can show that she was not negligent and that the document was fundamentally different from what she understood she was signing, she may avoid liability under the guarantee by pleading non est factum.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/non-est-factum' },

  { id:'xt20260818d', type:'curated', cat:'legal-term', area:'Tort',
    title:'Passing Off',
    body:"Passing off is a common-law tort protecting unregistered goodwill and reputation in trade. The classic trinity of elements, established in Reckitt & Colman v Borden, requires the claimant to show: (1) that they possess goodwill or reputation attached to their goods or services; (2) a misrepresentation by the defendant, whether deliberate or not, that is likely to lead the public to believe that the defendant's goods or services are the claimant's; and (3) damage or a likelihood of damage to the claimant's goodwill. It is the domestic common-law counterpart to the registered-trade-mark regime.",
    example:"A small brewery builds up a strong local reputation under the name 'Golden Fox Ale'. A competitor begins selling beer in almost identical packaging under a name likely to be confused with it. The original brewery may sue in passing off, without needing a registered trade mark, if the confusion causes it to lose custom.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/passing-off' },

  { id:'xt20260818e', type:'curated', cat:'legal-term', area:'Tort',
    title:'Remoteness of Damage',
    body:"Remoteness of damage is the legal principle that limits a defendant's liability in negligence to loss that is not too remote a consequence of the breach of duty. Following The Wagon Mound (No 1), the test is whether the type of damage suffered was reasonably foreseeable at the time of the breach — the defendant need not foresee the precise manner in which it occurs or its full extent, only its general kind. In contract, the comparable rule from Hadley v Baxendale requires that loss falls within the reasonable contemplation of the parties at the time of contract formation.",
    example:"A ship negligently spills fuel oil into Sydney Harbour and the oil is ignited by welding work on a nearby vessel, burning it out. The shipowner is not liable for the fire damage because fire caused by the oil on water was not reasonably foreseeable, even though some oil damage to the claimant's ship was foreseeable. The Wagon Mound (No 1).",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/remoteness' },

  { id:'xt20260818f', type:'curated', cat:'legal-term', area:'Contract',
    title:'Implied Term',
    body:"An implied term is a term read into a contract by law or by the court, notwithstanding its absence from the parties' express agreement. Terms may be implied in fact — to give the contract business efficacy or to reflect what the parties must obviously have intended (applying the 'officious bystander' test) — or implied in law — as incidents of a recognised category of contract (such as the employer's duty of mutual trust and confidence), or by statute (such as the quality terms in the Consumer Rights Act 2015). The Supreme Court in Marks & Spencer v BNP Paribas confirmed the high threshold for implication in fact.",
    example:"An employment contract says nothing about confidentiality. A court may imply a term in law obliging the employee to keep the employer's trade secrets confidential during employment, because such a term is a standard incident of employment relationships, without needing to find that the parties specifically agreed to it.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/implied-term' },

  { id:'xt20260818g', type:'curated', cat:'legal-term', area:'Contract',
    title:'Good Faith',
    body:"Good faith in English contract law is a contested concept. Unlike many civil-law systems, English law has traditionally declined to recognise a general implied duty of good faith in negotiations or contractual performance, preferring party autonomy and certainty. However, the courts increasingly accept that specific relational contracts may contain implied duties of honesty and fair dealing, and good faith obligations are expressly incorporated in areas such as insurance (utmost good faith under s.14 Insurance Act 2015) and consumer contracts (the 'significant imbalance' test in the Consumer Rights Act 2015). The debate was reinvigorated by Leggatt J's remarks in Yam Seng v International Trade Corporation [2013].",
    example:"A long-term commercial distribution agreement says nothing about how the distributor must exercise its discretion over ordering quantities. A court may, in an appropriate relational contract, imply a duty that the discretion be exercised in good faith and not in a way designed to undermine the other party's legitimate expectations — though it would not impose an overarching good-faith duty in a purely one-off arm's-length transaction.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/good-faith' },

  ],

  };
});
