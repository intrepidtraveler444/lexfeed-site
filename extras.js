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

  { id:'xa20260929a', type:'curated', cat:'journal-article', area:'Contract',
    title:"Webb — 'Performance and Compensation: An Analysis of Contract Damages and Contractual Obligation' (2006) 26 OJLS 41",
    body:"Charlie Webb argues that contract law protects two distinct interests: the performance interest (in receiving what was promised) and the compensation interest (in not being made worse off by reliance on the promise). He contends that conventional expectation damages do not in fact serve the performance interest but rather the compensation interest, by putting the claimant in the position they would have been in had the contract been performed. This reframing has significant consequences for how exceptional remedies — such as cost-of-cure damages and gains-based relief — should be understood and justified. The article became an important reference in the continuing debate about the goals of contractual damages.",
    src:'Oxford Journal of Legal Studies', link:'https://academic.oup.com/ojls/article-abstract/26/1/41/1505683' },

  { id:'xa20260929b', type:'curated', cat:'journal-article', area:'Public Law',
    title:"Young — 'In Defence of Due Deference' (2009) 72 MLR 554",
    body:"Alison Young defends a contextual account of judicial deference to elected institutions in human rights adjudication. She challenges both the view that courts should always independently and fully evaluate proportionality and the view that legislative judgment should simply be accepted. Her 'due deference' model holds that the weight a court appropriately gives to a democratic decision-maker's assessment depends on whether that institution has a comparative epistemic advantage — whether it knows more about the relevant facts, values or practical consequences. The article is an influential contribution to the ongoing debate about the proper relationship between courts and Parliament under the Human Rights Act 1998.",
    src:'Modern Law Review', link:'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-2230.2009.00757.x' },

  { id:'xa20260929c', type:'curated', cat:'journal-article', area:'Contract',
    title:"Collins — 'Implied Terms: The Foundation in Good Faith and Fair Dealing' (2014) 67 CLP 297",
    body:"Hugh Collins argues that the orthodox account of implied terms — resting on the 'business efficacy' and 'officious bystander' tests — fails to explain the full range of terms courts actually imply. He contends the true foundation is a general obligation of good faith and fair dealing implicit in the contractual relationship. Terms implied in law, he shows, represent judicial standards of fair dealing for particular types of relationship; terms implied in fact represent a judgment that one party has acted inconsistently with good faith in the specific contractual context. The article provokes the question whether English contract law already operates as a good-faith system in substance, whatever the formal position on a general duty of good faith.",
    src:'Current Legal Problems', link:'https://academic.oup.com/clp/article/67/1/297/368080' },

  { id:'xa20260929d', type:'curated', cat:'journal-article', area:'Employment',
    title:"Bogg — 'Common Law and Statute in the Law of Employment' (2016) 69 CLP 67",
    body:"Alan Bogg examines the interplay between common law and statute in employment law, a field where the two sources coexist and interact with unusual frequency. He identifies three modes of interaction: statutory pre-emption (where a statute displaces common law development in the same area); analogy (where statute acts as a stimulus for the common law to develop in a parallel direction); and rights-protection (where the common law constrains how statutory powers are exercised). Against the prevailing assumption that statutory growth simply crowds out the common law, the article shows that creative interaction between the two sources continues to shape the substance of the law in ways that neither source alone would produce.",
    src:'Current Legal Problems', link:'https://academic.oup.com/clp/article-abstract/69/1/67/2670051' },

  { id:'xa20260929e', type:'curated', cat:'journal-article', area:'Tort',
    title:"Nolan — 'Varying the Standard of Care in Negligence' (2013) 72 CLJ 651",
    body:"Donal Nolan provides the first systematic analysis of how and why the standard of care in negligence is varied downwards to favour defendants in certain contexts. He examines modifications for children, professionals, emergency responders, persons with disabilities, and others, asking three questions for each: to what extent has English law already varied the standard; if variation is justified, how should the modified standard be framed; and when and why might a modified standard be desirable as a matter of policy. The article produces a coherent map of a neglected area of negligence doctrine and criteria for evaluating future developments, arguing that variations in the standard of care are best understood as context-sensitive allocations of risk rather than ad hoc exceptions.",
    src:'Cambridge Law Journal', link:'https://www.cambridge.org/core/journals/cambridge-law-journal/article/abs/varying-the-standard-of-care-in-negligence/3D9C8AFBD97295F2F318CD30A8E389DB' },

  { id:'xa20260929f', type:'curated', cat:'journal-article', area:'Equity',
    title:"Mitchell — 'Equitable Compensation for Breach of Fiduciary Duty' (2013) 66 CLP 307",
    body:"Charles Mitchell surveys the development of equitable compensation for breach of fiduciary duty across England and the principal Commonwealth jurisdictions and examines a series of contested questions: what the remedy is designed to achieve; whether and how far it should be assimilated to common law compensatory damages; how causation and loss are assessed; and whether a claimant's contributory conduct can reduce the award. He argues that equitable compensation for fiduciary breach occupies genuinely distinct doctrinal space whose distinctive features — including the relaxed approach to causation and the evidential presumption against the defaulting fiduciary — are principled rather than anomalous. A widely cited article on a topic of growing significance as fiduciary relationships expand into commercial and professional practice.",
    src:'Current Legal Problems', link:'https://academic.oup.com/clp/article-abstract/66/1/307/311198' },

  { id:'xa20260929g', type:'curated', cat:'journal-article', area:'Criminal',
    title:"Lamond — 'What is a Crime?' (2007) 27 OJLS 609",
    body:"Grant Lamond offers a philosophical account of the distinguishing mark of criminal as opposed to civil wrongdoing. He argues that crimes are wrongs for which the state claims the authority to punish — a claim grounded in the idea that such wrongs are 'public wrongs' in the sense that the public, through state institutions, has a proper interest in condemning and sanctioning them. This account is distinguished from theories based on the severity of the sanction, the moral gravity of the wrong, or its harmfulness. The article examines why certain wrongs merit the specific response of state punishment rather than civil liability and addresses the expressive and communicative functions of criminal conviction, making it a foundational text in contemporary analytical criminal law theory.",
    src:'Oxford Journal of Legal Studies', link:'https://academic.oup.com/ojls/article-abstract/27/4/609/1459997' },

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

  { id:'xt20260929a', type:'curated', cat:'legal-term', area:'Tort',
    title:'Contributory Negligence',
    body:"Contributory negligence is a partial defence arising where a claimant's own failure to take reasonable care for their own safety has contributed to the damage they have suffered. Under the Law Reform (Contributory Negligence) Act 1945, a finding of contributory negligence does not defeat the claim but reduces the damages awarded to the claimant by the proportion that the court thinks just and equitable having regard to the claimant's share in responsibility for the damage. The court considers both the blameworthiness of the claimant's conduct and the causative potency of that conduct compared with the defendant's.",
    example:"A cyclist rides at night without lights and is struck by a negligently driven car. The court finds the defendant 80% responsible and the cyclist 20% contributorily negligent for failing to make herself visible. Damages of £25,000 are reduced by 20% to £20,000.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/contributory-negligence' },

  { id:'xt20260929b', type:'curated', cat:'legal-term', area:'Contract',
    title:'Lien',
    body:"A lien is a right to retain possession of another person's property as security until a debt or obligation connected with that property is satisfied. A particular (specific) lien entitles the holder to retain only the specific goods in relation to which the obligation arose; a general lien, which arises by custom in certain trades and professions or by express agreement, covers all sums owed between the parties. An equitable lien is non-possessory — it creates a charge over specific property in equity regardless of whether the holder has possession — and differs from the purely possessory common law lien.",
    example:"A solicitor holds a client's original documents and title deeds in their file. When the client moves to a new firm without paying outstanding fees, the solicitor may exercise a general lien over the documents and decline to release them until the fees are settled, provided there is no court order to the contrary.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/lien' },

  { id:'xt20260929c', type:'curated', cat:'legal-term', area:'Contract',
    title:'Implied Term',
    body:"An implied term is a term that forms part of a contract even though the parties have not expressly agreed to it. Terms may be implied by statute (for example, under the Sale of Goods Act 1979 a condition of satisfactory quality is implied into sales made in the course of a business), by custom or usage within a particular trade, or by the courts. Judicial implication falls into two categories: terms implied in fact (where the court concludes the parties must have intended the term to apply, applying the 'business efficacy' or 'officious bystander' test) and terms implied in law (where the court treats the obligation as an incident of a defined type of contract, such as employment or tenancy, regardless of the parties' actual intentions).",
    example:"An employment contract says nothing about a duty of mutual trust and confidence. A court will nonetheless imply such a term as a matter of law into all employment contracts: an employer who behaves in a way calculated and likely to destroy the employment relationship without reasonable justification will have breached this implied term, even though neither party discussed or agreed to it.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/implied-term' },

  { id:'xt20260929d', type:'curated', cat:'legal-term', area:'Property',
    title:'Nemo Dat Rule',
    body:"The nemo dat rule (from the Latin nemo dat quod non habet — no one gives what they do not have) is the fundamental principle that a seller cannot transfer to a buyer a better title to goods or land than the seller themselves possesses. A purchaser from a thief or from a person without authority to sell therefore generally acquires no title. The rule is subject to statutory exceptions designed to protect bona fide purchasers in commerce, including mercantile agency under the Factors Act 1889, seller and buyer in possession under the Sale of Goods Act 1979, and private purchasers of motor vehicles on hire-purchase under the Hire Purchase Act 1964.",
    example:"A car is stolen and sold by the thief to an innocent purchaser who pays market value in good faith. Under the nemo dat rule the original owner retains title and may recover the car. If, however, the thief had been entrusted with the vehicle as a mercantile agent and had disposed of it in the ordinary course of a business of selling motor cars, the Factors Act 1889 exception might vest good title in the innocent buyer.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/nemo-dat-rule' },

  { id:'xt20260929e', type:'curated', cat:'legal-term', area:'Contract',
    title:'Utmost Good Faith',
    body:"Utmost good faith (uberrima fides) is the heightened contractual duty of disclosure imposed on parties to certain types of contract, most notably contracts of insurance. It requires each party — in practice primarily the proposer for insurance — to volunteer all facts that would be material to the other party's decision whether to contract and on what terms, whether or not they are directly asked. Concealment of a material fact, even without fraudulent intent, may entitle the other party to avoid the contract from the outset. The duty reflects the acute information asymmetry in transactions where one party possesses unique knowledge about the subject matter of the risk.",
    example:"An applicant for life insurance fails to disclose a recent diagnosis of a serious cardiac condition, having answered only the specific questions on the proposal form. Because a history of heart disease is a material fact an insurer would need in order to assess the risk and set the premium, the insurer may avoid the policy under the duty of utmost good faith, even if the applicant did not deliberately conceal the information.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/utmost-good-faith' },

  { id:'xt20260929f', type:'curated', cat:'legal-term', area:'Contract',
    title:'Affirmation of Contracts',
    body:"Affirmation occurs where a party, having become aware of a ground that would entitle it to rescind a contract or to treat it as discharged by repudiation, instead elects to keep the contract on foot. Affirmation may be express — a declaration of intention to proceed — or implied by conduct that is inconsistent with an intention to rescind or accept the repudiation, such as continuing to perform, accepting further performance, or otherwise treating the contract as subsisting. Once a party affirms, the right to rescind or accept the repudiation on that ground is permanently lost, though the right to claim damages for any continuing breach remains.",
    example:"A buyer of a commercial vehicle discovers that it was materially misdescribed in a contract that would entitle her to rescind. Rather than rescinding promptly, she uses the vehicle for two months for business purposes after learning of the misdescription. A court may hold that her continued use constituted an affirmation, extinguishing the right to rescind and leaving her with a claim in damages only.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/affirmation-of-contracts' },

  { id:'xt20260929g', type:'curated', cat:'legal-term', area:'Tort',
    title:'Tort of Deceit',
    body:"The tort of deceit (or fraudulent misrepresentation) is committed where a defendant makes a false representation knowingly, or without belief in its truth, or recklessly as to whether it is true or false, intending that the claimant should act on it, and the claimant does so act and consequently suffers loss. Conscious dishonesty — fraud in the common law sense — is the hallmark of deceit, distinguishing it from negligent misrepresentation. Uniquely, the rule in Doyle v Olby allows the victim to recover all direct losses flowing from the fraudulent transaction, without being limited by the foreseeability principle that caps damages in negligence.",
    example:"A seller misrepresents to a buyer that a business premises holds a full seven-day alcohol licence, knowing this to be false, in order to induce the buyer to pay the asking price. The buyer relies on this and suffers losses when trading on the two unlicensed evenings is prohibited. The seller is liable in deceit for all direct consequential losses the buyer suffers — assessed at the wider Doyle v Olby measure — rather than merely the foreseeable loss the negligence measure would allow.",
    src:'LexisNexis Glossary', link:'https://www.lexisnexis.co.uk/legal/glossary/tort-of-deceit' },

  ],

  };
});
