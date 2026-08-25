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

  { id:'xa20260825a', type:'curated', cat:'journal-article', area:'Tort',
    title:"Howarth — 'Many Duties of Care—Or A Duty of Care? Notes from the Underground' (2006) 26 OJLS 449",
    body:"David Howarth challenges the orthodoxy that English negligence law rests on a single unified duty of care. Through close analysis of the case law, he demonstrates that courts apply distinct duties calibrated to the relationship, the type of harm, and the context, and that the Caparo three-stage test conceals rather than resolves the underlying disagreements about the scope of liability. Howarth's taxonomic critique has shaped subsequent academic and judicial debate about the coherence of duty of care doctrine, influencing how the boundaries of liability are approached in areas from public authority liability to pure economic loss.",
    src:'Oxford Journal of Legal Studies', link:'https://academic.oup.com/ojls/article/26/3/449/1451997' },

  { id:'xa20260825b', type:'curated', cat:'journal-article', area:'Public Law',
    title:"Bingham — 'The Rule of Law' (2007) 66 CLJ 67",
    body:"Written before his landmark book of the same name, Lord Bingham's article sets out eight sub-rules that together constitute the rule of law in its thickest sense. The piece moves beyond purely procedural requirements — that law must be clear, accessible, and prospective — to insist on substantive demands: that the law must protect fundamental human rights and that government must comply with international obligations. Drawing on English constitutional history and comparative examples, Bingham provides an indispensable starting-point for serious study of constitutionalism and deeply influenced subsequent Supreme Court jurisprudence on legality and parliamentary sovereignty.",
    src:'Cambridge Law Journal', link:'https://www.cambridge.org/core/journals/cambridge-law-journal/article/abs/rule-of-law/0E971B5BB930C2E363D351C5CBC3B855' },

  { id:'xa20260825c', type:'curated', cat:'journal-article', area:'Equity',
    title:"Webb — 'What is Unjust Enrichment?' (2009) 29 OJLS 215",
    body:"Charlie Webb critically examines the concept of unjust enrichment as it has developed in English law since Lipkin Gorman v Karpnale. Challenging the Birksian orthodoxy that unjust enrichment is a unifying principle for all restitutionary claims, Webb argues that the 'unjust' element is genuinely normative rather than merely technical, and that its content cannot be understood by reference to 'unjust factors' alone. The piece dissects the 'at the expense of' requirement and examines the interaction with defences, offering a more sophisticated map of the restitutionary landscape than a simple event-based classification provides.",
    src:'Oxford Journal of Legal Studies', link:'https://doi.org/10.1093/ojls/gqp008' },

  { id:'xa20260825d', type:'curated', cat:'journal-article', area:'Tort',
    title:"Steel & Ibbetson — 'More Grief on Uncertain Causation in Tort' (2011) 70 CLJ 451",
    body:"Sandy Steel and David Ibbetson interrogate the troubled relationship between material contribution to risk and material contribution to damage following Barker v Corus and Sienkiewicz v Greif. They trace how the House of Lords' expansions in Fairchild opened doctrinal fault lines that have not been consistently resolved, and carefully distinguish genuine scientific uncertainty from cases where claimants simply cannot prove a factual causal link. The article argues that conflating the two categories distorts causation doctrine and produces unjust outcomes for both claimants and defendants, and has been widely cited in subsequent causation scholarship.",
    src:'Cambridge Law Journal', link:'https://www.jstor.org/stable/41300983' },

  { id:'xa20260825e', type:'curated', cat:'journal-article', area:'Tort',
    title:"Goudkamp & Nolan — 'Contributory Negligence in the Twenty-First Century: An Empirical Study of First Instance Decisions' (2016) 79 MLR 575",
    body:"Through systematic empirical study of over 300 first-instance judgments in which contributory negligence was pleaded, James Goudkamp and Donal Nolan reveal striking patterns in how courts apportion liability under the Law Reform (Contributory Negligence) Act 1945. Deductions cluster around round numbers — especially 25%, 33% and 50% — suggesting judges rely on intuition rather than principled analysis of relative blameworthiness and causal contribution. The article challenges the assumption that the 1945 Act delivers calibrated proportionate justice and provides an empirical baseline that has informed subsequent calls for legislative and doctrinal reform.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-2230.12202' },

  { id:'xa20260825f', type:'curated', cat:'journal-article', area:'Employment',
    title:"Freedland — 'From the Contract of Employment to the Personal Work Nexus' (2006) 35 ILJ 1",
    body:"Mark Freedland argues that the traditional binary of employment contract versus self-employment is no longer adequate to capture the variety of working relationships in modern labour markets. He develops the concept of the 'personal work nexus' — a broader normative category encompassing all personal work relationships — as the appropriate unit of analysis for employment law. Drawing on comparative and contractual theory, the article traces how courts have strained the contract of employment to accommodate atypical workers, and proposes a new analytical framework that better reflects economic reality and the protective goals of labour law.",
    src:'Industrial Law Journal', link:'https://academic.oup.com/ilj/article-abstract/35/1/1/690475' },

  { id:'xa20260825g', type:'curated', cat:'journal-article', area:'Criminal',
    title:"Lacey — 'Historicising Criminalisation: Conceptual and Empirical Issues for a Research Agenda' (2009) 72 MLR 936",
    body:"Nicola Lacey proposes a research agenda for understanding criminalisation — the process by which conduct comes to be defined and enforced as criminal — in its historical, social, and institutional context. She argues that the analytic jurisprudence of criminalisation must be supplemented by empirical and comparative scholarship that traces how criminal law categories have expanded and contracted across time, and why similar societies diverge in what they criminalise. Lacey's framework has been highly influential in criminal law theory, stimulating a generation of comparative and sociological work on the politics of criminal legislation.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/10.1111/j.1468-2230.2009.00775.x' },

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

  { id:'xt20260825a', type:'curated', cat:'legal-term', area:'Tort',
    title:'Contributory Negligence',
    body:"Contributory negligence is the failure of a claimant to take reasonable care for their own safety, which contributes to the damage they suffer. Under the Law Reform (Contributory Negligence) Act 1945 it does not bar recovery entirely, as it did at common law, but reduces the claimant's damages by such proportion as the court considers just and equitable having regard to the claimant's share in responsibility for the damage. The apportionment reflects both the relative blameworthiness of the parties' conduct and the causative potency of each party's fault.",
    example:"A cyclist rides at night without lights and is struck by a motorist who jumps a red light. The court finds the motorist primarily liable but reduces the cyclist's damages by 25% to reflect the contributory negligence of riding unlit, which increased the risk and severity of the collision.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/contributory-negligence' },

  { id:'xt20260825b', type:'curated', cat:'legal-term', area:'Tort',
    title:'Joint and Several Liability',
    body:"Where two or more defendants are jointly and severally liable for the same damage, each is liable for the full amount of the claimant's loss and the claimant may recover the whole from any one of them, regardless of their respective degrees of fault. As between themselves the defendants may seek a contribution under the Civil Liability (Contribution) Act 1978. Joint and several liability is the default position where multiple tortfeasors independently cause the same indivisible damage, contrasted with several liability where each defendant is responsible only for a distinct divisible portion of the harm.",
    example:"Two factories independently discharge chemicals into a river and together destroy a downstream fish farm; neither discharge alone would have caused the damage. Both may be jointly and severally liable: the fish farmer can recover the full loss from either, leaving the factories to sort out contribution between themselves.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/joint-several-liability' },

  { id:'xt20260825c', type:'curated', cat:'legal-term', area:'Contract',
    title:'Mitigation',
    body:"Mitigation is the duty on a party who has suffered a breach of contract (or a tort) to take all reasonable steps to minimise the loss flowing from that breach. A claimant who fails to mitigate cannot recover losses that reasonable mitigation would have avoided. The burden of proving failure to mitigate lies on the defendant. The duty is not absolute: a claimant need not take exceptional or unduly risky steps, and need not sacrifice commercial interests or dignity to placate the defaulting party.",
    example:"An employee who is wrongfully dismissed is under a duty to mitigate by seeking alternative employment. If she declines a reasonable offer of comparable work at similar pay, her employer can reduce the damages payable to reflect the wages she would have earned had she accepted the available role.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/mitigation' },

  { id:'xt20260825d', type:'curated', cat:'legal-term', area:'Tort',
    title:'Remoteness',
    body:"In negligence, remoteness limits the type of damage for which a defendant is liable: only damage of a kind that was a reasonably foreseeable consequence of the breach of duty is recoverable. The test, established in The Wagon Mound (No 1), replaced the earlier 'direct consequences' rule from Re Polemis. The defendant need not foresee the precise manner of injury or its full extent — the 'thin skull' rule means they take the claimant as they find them — but the type or kind of damage must be within the range of reasonable foresight.",
    example:"A contractor negligently spills oil on water near a wharf. He could not reasonably foresee that sparks from nearby welding would ignite the oil and destroy the wharf by fire. The fire damage is too remote: although he was negligent, the type of damage (fire) was not a reasonably foreseeable consequence of spilling oil in those circumstances.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/remoteness' },

  { id:'xt20260825e', type:'curated', cat:'legal-term', area:'Equity',
    title:'Breach of Confidence',
    body:"Breach of confidence is an equitable action that lies where information carrying the necessary quality of confidence is communicated in circumstances imposing an obligation of confidence and is then used or disclosed without the confider's consent. Following the Human Rights Act 1998, the doctrine expanded — particularly for private information — to incorporate Article 8 ECHR privacy values, becoming the primary vehicle in English law for protecting personal privacy in the absence of a standalone privacy tort.",
    example:"An employee during her employment receives access to a confidential customer database. After leaving, she copies and shares it with a competitor. The former employer may sue for breach of confidence to restrain further disclosure and recover any profits the competitor derived from the information.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/breach-of-confidence' },

  { id:'xt20260825f', type:'curated', cat:'legal-term', area:'Contract',
    title:'Non est factum',
    body:"Non est factum (Latin: 'it is not my deed') is a plea by which a party seeks to avoid a written contract or deed on the ground that it is fundamentally different in character from that which they believed themselves to be signing, and that they were not careless in signing it. The doctrine is very narrowly construed: the document must be radically different in nature, not merely in its terms, from what the signer understood; and the signer must not have been negligent. It is available only to a limited class who, through disability such as blindness or illiteracy, were genuinely unable to understand what they signed.",
    example:"An elderly woman is told a document she is asked to sign is a simple guarantee of her son's small overdraft; in reality it is a second mortgage over her home for a much larger sum. If she can show the document was fundamentally different from what she believed and that she was not careless, she may plead non est factum to avoid liability under it.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/non-est-factum' },

  { id:'xt20260825g', type:'curated', cat:'legal-term', area:'Tort',
    title:"Occupiers' Liability",
    body:"Occupiers' liability governs the duties owed by a person in control of premises to those who enter them. In England and Wales it is governed primarily by two statutes: the Occupiers' Liability Act 1957 imposes a 'common duty of care' on occupiers toward lawful visitors, requiring reasonable care in all the circumstances to ensure the visitor is reasonably safe; and the Occupiers' Liability Act 1984 imposes a more limited duty in respect of trespassers. The content of each duty depends on the category of entrant, the nature of the premises, and any warnings or exclusions.",
    example:"A supermarket knows a freezer cabinet has been leaking and creating a slippery floor but leaves the hazard unattended for over an hour. A customer slips and is injured. The supermarket, as occupier, has breached the common duty of care owed to lawful visitors under the 1957 Act by failing to inspect, remedy, or adequately warn of the hazard.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/occupiers-liability' },

  ],

  };
});
