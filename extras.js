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

  { id:'xa20260714a', type:'curated', cat:'journal-article', area:'Equity',
    title:"Edelman — 'When Do Fiduciary Duties Arise?' (2010) 126 LQR 302",
    body:"James Edelman examines the conditions that trigger fiduciary duties and argues that they arise whenever one party has a discretionary power over another's legal or practical interests, rather than only within pre-specified categories of relationship. Drawing on Privy Council and High Court authority, he contends that the categories of fiduciary relationship remain open and that the key question is always functional — whether one party has undertaken to act in another's interest. The article provides a principled analytical framework for identifying fiduciary duties and has been widely cited in cases concerning novel claimant-defendant relationships.",
    src:'Law Quarterly Review', link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1697656' },

  { id:'xa20260714b', type:'curated', cat:'journal-article', area:'Contract',
    title:"Burrows — 'Illegality after Patel v Mirza' (2017) 70 CLP 55",
    body:"Andrew Burrows analyses the Supreme Court's landmark decision in Patel v Mirza [2016] UKSC 42 and its restructuring of the illegality defence in private law. He examines the 'range of factors' approach adopted by the majority — which asks whether enforcing the agreement would harm the integrity of the legal system, having regard to the purpose of the prohibition, potential penalties and proportionality — and contrasts it with the minority's preferred rule-based approach. The article provides a rigorous unpacking of the competing methodologies and assesses which better serves coherence across contract, unjust enrichment and tort.",
    src:'Current Legal Problems', link:'https://doi.org/10.1093/clp/cux008' },

  { id:'xa20260714c', type:'curated', cat:'journal-article', area:'Tort',
    title:"Tofaris & Steel — 'Negligence Liability for Omissions and the Police' (2016) 75 CLJ 128",
    body:"Stelios Tofaris and Sandy Steel scrutinise the law's general refusal to impose negligence liability for pure omissions, and in particular the special treatment of the police as defendants. Beginning from the conceptual distinction between acts and omissions and its grounding in autonomy, they examine the recognised exceptions — assumption of responsibility, creation of danger, and control over third parties — and argue that the immunity enjoyed by the police is broader than principle demands. The article shaped academic debate before the Supreme Court's decisions in Robinson v Chief Constable of West Yorkshire and subsequent omissions cases.",
    src:'Cambridge Law Journal', link:'https://www.cambridge.org/core/journals/cambridge-law-journal/article/abs/negligence-liability-for-omissions-and-the-police/AC83F61745C4326FEE217D993868C08D' },

  { id:'xa20260714d', type:'curated', cat:'journal-article', area:'Tort',
    title:"Steel — 'Justifying Exceptions to Proof of Causation in Tort Law' (2015) 78 MLR 729",
    body:"Sandy Steel examines cases where courts have relaxed strict 'but for' proof of causation — from the Fairchild material increase in risk doctrine to Chester v Afshar's departure for patient autonomy — and asks whether they can be coherently justified. He argues that the exceptions are better understood as modifications to the standard of proof or as policy-driven liability rules, rather than as genuine alternatives to factual causal proof, and proposes principled criteria by which further exceptions should be evaluated. The article is a leading modern treatment of causation's role in defining the outer limits of tort liability.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-2230.12142' },

  { id:'xa20260714e', type:'curated', cat:'journal-article', area:'Equity',
    title:"Nolan — 'Equitable Property' (2006) 122 LQR 232",
    body:"Richard Nolan surveys the category of equitable property rights — interests recognised as proprietary by equity even though the common law does not — and asks what, if anything, makes such rights distinctively equitable. He argues that equitable property is best understood not as a second tier of ownership but as a set of rights that equity confers in particular circumstances, principally to address the unconscionable exercise of legal entitlements. The article illuminates the relationship between equity and property law and has been influential in debates about beneficial interests under trusts, tracing and the content of equitable remedies.",
    src:'Law Quarterly Review', link:'https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/lqr122&section=16' },

  { id:'xa20260714f', type:'curated', cat:'journal-article', area:'Tort',
    title:"Robertson — 'Policy-Based Reasoning in Duty of Care Cases' (2013) 33 Legal Studies 119",
    body:"Andrew Robertson examines the role of policy arguments in determining whether a duty of care exists in novel negligence cases and argues that courts and commentators have misconceived the relationship between principle and policy. He contends that policy considerations operate as constraints on the application of principle rather than as a free-standing basis for finding or denying a duty, and that treating policy as a trump card produces incoherent and unpredictable results. The article is a significant contribution to the methodology of duty of care analysis and has informed subsequent debate about the role of policy in private law.",
    src:'Legal Studies', link:'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1748-121X.2012.00242.x' },

  { id:'xa20260714g', type:'curated', cat:'journal-article', area:'Employment',
    title:"Freedland & Prassl — 'Employees, Workers, and the Sharing Economy: Changing Practices and Changing Concepts in the United Kingdom' (2017) 42 ELRev 272",
    body:"Mark Freedland and Jeremias Prassl analyse the legal status of workers in the 'gig economy' against the background of the Employment Rights Act 1996 and the established tripartite taxonomy of employee, worker and independent contractor. They argue that the expansion of work through digital intermediary platforms challenges the foundational assumptions of personal employment law, and propose a 'personal work nexus' theory that focuses on the personal character of the work relationship rather than on formal categorisation. The article anticipated and shaped the subsequent cascade of litigation — including Uber, Deliveroo and Pimlico Plumbers — that culminated in Supreme Court decisions redefining worker status.",
    src:'European Labour Law Journal', link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2932757' },

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

  { id:'xt20260714a', type:'curated', cat:'legal-term', area:'Tort',
    title:'Contributory Negligence',
    body:"Contributory negligence is the claimant's own failure to take reasonable care for their own safety which, together with the defendant's negligence, caused or contributed to their loss. Under the Law Reform (Contributory Negligence) Act 1945 it does not defeat the claim outright but reduces the damages by such proportion as the court considers just and equitable having regard to the claimant's share in responsibility. It is assessed objectively — the standard is that of the reasonable person in the claimant's position — and both causative contribution and blameworthiness are relevant to the apportionment.",
    example:"A pedestrian steps into the road without looking and is struck by a negligently speeding driver. The court finds both parties at fault and apportions liability 70% to the driver and 30% to the pedestrian, so damages are reduced by 30% to reflect the pedestrian's contributory negligence.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/contributory-negligence' },

  { id:'xt20260714b', type:'curated', cat:'legal-term', area:'Criminal',
    title:'Mens Rea',
    body:"Mens rea (Latin: 'guilty mind') denotes the mental element required by the definition of a criminal offence — the state of mind the prosecution must prove alongside the actus reus before a defendant can be convicted. Different offences require different forms of mens rea: intention (the highest degree, where the defendant desired the result), recklessness (conscious and unjustifiable risk-taking), knowledge, or negligence. Strict liability offences are the exception: they require no proof of mens rea as to one or more elements, which is constitutionally significant for the presumption of innocence.",
    example:"A defendant is charged with theft, which requires an intention to permanently deprive the owner. If the defendant genuinely believed the property was abandoned, he lacks the necessary mens rea — the dishonest intention — and must be acquitted even though he took another's goods.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/mens-rea' },

  { id:'xt20260714c', type:'curated', cat:'legal-term', area:'Criminal',
    title:'Actus Reus',
    body:"Actus reus (Latin: 'guilty act') describes the external, physical element of a criminal offence — the conduct, consequence, or state of affairs that the law prohibits and that the prosecution must establish as a precondition of liability. It encompasses acts, omissions where there is a legal duty to act, and states of being or possession in status offences. The actus reus must ordinarily be a voluntary act of the defendant; involuntary movements caused by automatism do not constitute an actus reus and provide a complete defence.",
    example:"In a charge of assault occasioning actual bodily harm, the actus reus is the infliction of the bodily harm. A defendant who causes injury during an epileptic seizure, having no voluntary control over his movements, has not committed the actus reus of the offence and may be acquitted on the ground of automatism.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/actus-reus' },

  { id:'xt20260714d', type:'curated', cat:'legal-term', area:'Property',
    title:'Adverse Possession',
    body:"Adverse possession is the process by which a person who is not the paper title owner may acquire title to land by factual possession of it, without the owner's licence, for the required limitation period. At common law and under the Limitation Act 1980 the period was twelve years, after which the owner's right to recover the land was statute-barred. The Land Registration Act 2002 significantly reformed the position for registered land: after ten years' adverse possession the squatter may apply to be registered, but the registered owner then has two years to object and recover the land.",
    example:"A farmer has maintained and cultivated a strip of unregistered land bordering his field for over twelve years, treating it as his own without the true owner's permission or protest. Under the Limitation Act 1980 the owner's right of action is extinguished and the farmer may apply to be registered as the new proprietor by adverse possession.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/adverse-possession' },

  { id:'xt20260714e', type:'curated', cat:'legal-term', area:'Criminal',
    title:'Self-Defence',
    body:"Self-defence is a common-law and statutory defence (now partly governed by s.76 Criminal Justice and Immigration Act 2008) that justifies the use of force against an actual or apprehended unlawful attack on oneself or another. The force used must be reasonable in the circumstances as the defendant believed them to be, even if that belief was mistaken (provided it was honest). Force is not reasonable if it is disproportionate to the threat or if it is pre-emptive beyond what is immediately necessary, though the jury must bear in mind that a person acting in the heat of the moment cannot be expected to weigh responses to a nicety.",
    example:"A man is set upon by an attacker and, believing he faces a serious assault, strikes the attacker once to escape. If the jury finds his belief was genuinely held and his response was what a reasonable person could regard as proportionate in the moment, he will be acquitted on the ground of self-defence.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/self-defence' },

  { id:'xt20260714f', type:'curated', cat:'legal-term', area:'Tort',
    title:'Passing Off',
    body:"Passing off is a common-law tort that protects the goodwill of a business from misrepresentation. The classic formulation from Jif Lemon requires proof of three elements: (1) goodwill or reputation attached to the claimant's goods or services; (2) a misrepresentation (whether or not intentional) by the defendant likely to lead the public to believe the defendant's goods or services are those of the claimant; and (3) damage to the claimant's goodwill as a result. It is distinct from registered trade mark infringement and protects the trader's business reputation rather than any intellectual property right in a name or mark per se.",
    example:"A new tea company begins selling 'Tetly Tea' in packaging nearly identical to Tetley's. Tetley can sue in passing off: it has established goodwill in the name and get-up; consumers are likely to be deceived into thinking they are buying Tetley's product; and Tetley suffers loss of sales and damage to its reputation as a result.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/passing-off' },

  { id:'xt20260714g', type:'curated', cat:'legal-term', area:'Contract',
    title:'Consideration',
    body:"Consideration is the element of a contract that distinguishes it from a gratuitous promise: something of value that each party gives in exchange for the other's promise or act, so that the agreement is made for value and not as a gift. English law defines it as 'some right, interest, profit or benefit accruing to one party, or some forbearance, detriment, loss or responsibility given, suffered or undertaken by the other' (Currie v Misa). Consideration must be sufficient (legally recognised) but need not be adequate (commercially fair); it must not be past; and it must move from the promisee — rules that distinguish binding bargains from moral obligations.",
    example:"A seller promises to deliver a car in exchange for a buyer's promise to pay £5,000. Each party's promise is consideration for the other's: the seller's legal obligation to deliver and the buyer's legal obligation to pay are what make the agreement enforceable as a contract, rather than a gratuitous undertaking by either side.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/consideration' },

  ],

  };
});
