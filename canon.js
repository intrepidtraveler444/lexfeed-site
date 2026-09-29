/* ════════════════════════════════════════════════════════════════════════
   LexFeed — CANON BANK (drip-release pool)

   A queue of *verified, genuinely-new* landmark UK cases & statutes that the
   site reveals automatically over time (see "CANON DRIP" in index.html).

   RULES for every entry — enforced by tools/verify-canon.mjs:
     • case-law  → link MUST be a real BAILII judgment URL
                   (https://www.bailii.org/.../<number>.html  — NOT a
                    lucy_search / format.cgi / redirect.cgi search link).
     • statute   → link MUST be a real legislation.gov.uk ".../contents" URL.
     • The item must be a landmark most UK law students learn.
     • It must NOT duplicate anything already in index.html's CURATED list
       (the drip also de-dupes at runtime as a safety net).

   Release ORDER = array order below. Add new verified entries at the END.
   Every link here was confirmed against the live source before committing.
   ════════════════════════════════════════════════════════════════════════ */
;(function (root, factory) {
  var CANON = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = CANON;       // Node (verifier)
  else (typeof globalThis !== 'undefined' ? globalThis : root).LEXFEED_CANON = CANON; // browser
})(this, function () {
  return [

  // ── 1. Public Law — case ──
  { id:'k1', type:'curated', cat:'case-law', area:'Public Law',
    title:'Padfield v Minister of Agriculture, Fisheries and Food [1968] UKHL 1',
    court:'House of Lords',
    facts:'South-east milk producers complained about the regional price differential set under the Milk Marketing Scheme. The statute said the Minister "may" refer such complaints to a committee of investigation; the Minister refused to refer, partly for fear of political embarrassment.',
    judgment:'The House of Lords held the refusal unlawful and ordered the Minister to consider the complaint according to law, rejecting the idea that the discretion was unfettered.',
    ratio:'A statutory discretion, however widely framed, must be exercised to promote the policy and objects of the Act — ascertained by construing the statute as a whole. Using a discretion to frustrate that policy, or for an extraneous purpose, is unlawful and reviewable.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/1968/1.html' },

  // ── 2. Public Law — statute ──
  { id:'k2', type:'curated', cat:'statute', area:'Public Law',
    title:'Mental Capacity Act 2005',
    body:"Provides the statutory framework for decisions made on behalf of adults who lack capacity. Built on a presumption of capacity and a best-interests standard, it is central to medical law and Court of Protection practice.",
    sections:[
      { num:'1', head:'The Principles', text:'A person must be assumed to have capacity unless established otherwise; they are not to be treated as unable to decide until all practicable help has failed; an unwise decision does not itself prove incapacity; and any act done for them must be in their best interests and the least restrictive option.' },
      { num:'2', head:'People Who Lack Capacity', text:'A person lacks capacity if, at the material time, they cannot make a decision because of an impairment of, or disturbance in, the functioning of the mind or brain.' },
      { num:'3', head:'Inability to Make Decisions', text:'A person is unable to decide if they cannot understand, retain, or use and weigh the relevant information, or cannot communicate their decision.' },
      { num:'4', head:'Best Interests', text:'The decision-maker must consider all relevant circumstances, including the person’s past and present wishes, beliefs and values, and the views of those close to them.' },
      { num:'5', head:'Acts in Connection with Care or Treatment', text:'Protects carers and professionals from liability for acts reasonably done in a person’s best interests where they reasonably believe the person lacks capacity.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2005/9/contents' },

  // ── 3. Constitutional — case ──
  { id:'k3', type:'curated', cat:'case-law', area:'Constitutional',
    title:'M v Home Office [1993] UKHL 5',
    court:'House of Lords',
    facts:'An asylum seeker, M, was removed from the UK in breach of an undertaking given to a judge and a subsequent injunction. The Home Secretary argued that ministers of the Crown were immune from injunctions and from contempt proceedings in their official capacity.',
    judgment:'The House of Lords rejected the immunity argument and held the Home Secretary to be in contempt, the first such finding against a Minister of the Crown.',
    ratio:'The rule of law binds the Crown’s ministers: courts may grant injunctions against, and make findings of contempt against, a minister acting in an official capacity. The executive obeys the law as a matter of necessity, not of grace.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/1993/5.html' },

  // ── 4. Criminal — statute ──
  { id:'k4', type:'curated', cat:'statute', area:'Criminal',
    title:'Bribery Act 2010',
    body:"Modernised and consolidated UK anti-bribery law, replacing a patchwork of common law and older statutes. Notable for its broad offences, extensive extraterritorial reach, and a distinctive corporate ‘failure to prevent’ offence.",
    sections:[
      { num:'1', head:'Bribing Another Person', text:'Offering, promising or giving a financial or other advantage to induce or reward improper performance of a relevant function.' },
      { num:'2', head:'Being Bribed', text:'Requesting, agreeing to receive or accepting an advantage in connection with the improper performance of a function or activity.' },
      { num:'6', head:'Bribery of Foreign Public Officials', text:'A separate offence of bribing a foreign public official to obtain or retain business or a business advantage.' },
      { num:'7', head:'Failure of Commercial Organisations to Prevent Bribery', text:'A strict-liability corporate offence committed where a person associated with an organisation bribes another to benefit it — subject to the "adequate procedures" defence.' },
      { num:'9', head:'Guidance', text:'Requires the Secretary of State to publish guidance on procedures organisations can put in place to prevent bribery.' },
      { num:'12', head:'Territorial Application', text:'Offences may be prosecuted even where the conduct occurs wholly abroad, provided the person has a close connection with the UK.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2010/23/contents' },

  // ── 5. Tort — case ──
  { id:'k5', type:'curated', cat:'case-law', area:'Tort',
    title:'Spartan Steel & Alloys Ltd v Martin & Co (Contractors) Ltd [1972] EWCA Civ 3',
    court:'Court of Appeal',
    facts:'Contractors negligently cut a power cable supplying the claimant’s steel factory. The claimant lost the metal melt in progress (and the profit on it) and also lost profit on further melts it could not process during the 14-hour power cut.',
    judgment:'The Court of Appeal (Lord Denning MR) allowed recovery for the damaged melt and the profit on it, but refused the lost profit on the melts that could not be processed during the outage.',
    ratio:'Pure economic loss not consequent on physical damage to the claimant’s own property is generally irrecoverable in negligence. The boundary is drawn as a matter of policy to keep liability within acceptable limits.',
    src:'BAILII', link:'https://www.bailii.org/ew/cases/EWCA/Civ/1972/3.html' },

  // ── 6. Criminal — statute ──
  { id:'k6', type:'curated', cat:'statute', area:'Criminal',
    title:'Modern Slavery Act 2015',
    body:"Consolidated slavery and human-trafficking offences, strengthened victim protection, created the Independent Anti-slavery Commissioner, and introduced a transparency-in-supply-chains reporting duty for larger businesses.",
    sections:[
      { num:'1', head:'Slavery, Servitude and Forced Labour', text:'An offence to hold another in slavery or servitude, or to require them to perform forced or compulsory labour.' },
      { num:'2', head:'Human Trafficking', text:'An offence to arrange or facilitate the travel of another person with a view to their exploitation.' },
      { num:'3', head:'Meaning of Exploitation', text:'Defines exploitation to include slavery/servitude, sexual exploitation, forced labour, and the securing of services from children and vulnerable persons.' },
      { num:'8', head:'Reparation Orders', text:'Courts may order convicted offenders to pay compensation to victims for harm resulting from the offence.' },
      { num:'45', head:'Defence for Victims', text:'A statutory defence for slavery or trafficking victims who are compelled to commit certain offences as a direct consequence of their exploitation.' },
      { num:'54', head:'Transparency in Supply Chains', text:'Commercial organisations above a turnover threshold must prepare an annual slavery and human trafficking statement.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2015/30/contents' },

  // ── 7. Criminal / Public — statute ──
  { id:'k7', type:'curated', cat:'statute', area:'Criminal',
    title:'Terrorism Act 2000',
    body:"The principal modern counter-terrorism statute. It supplies the working legal definition of terrorism, the regime for proscribing organisations, and a range of investigative, arrest and stop-and-search powers.",
    sections:[
      { num:'1', head:'Definition of Terrorism', text:'Defines terrorism as the use or threat of action designed to influence government or intimidate the public for a political, religious, racial or ideological cause.' },
      { num:'3', head:'Proscription', text:'Empowers the Home Secretary to proscribe organisations concerned in terrorism, subject to a statutory appeal mechanism.' },
      { num:'11', head:'Membership', text:'An offence to belong, or profess to belong, to a proscribed organisation.' },
      { num:'12', head:'Support', text:'An offence to invite support for, or to arrange a meeting supporting, a proscribed organisation.' },
      { num:'41', head:'Arrest Without Warrant', text:'A constable may arrest without warrant a person reasonably suspected of being a terrorist, with extended detention subject to judicial oversight.' },
      { num:'43', head:'Search of Persons', text:'Power to stop and search a person reasonably suspected of being a terrorist for evidence of involvement in terrorism.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2000/11/contents' },

  // ── 8. Public Law — statute ──
  { id:'k8', type:'curated', cat:'statute', area:'Public Law',
    title:'Mental Health Act 1983',
    body:"Governs the compulsory admission (\"sectioning\"), detention, treatment and after-care of people with mental disorder in England and Wales. A core statute for medical and public law, much amended by the Mental Health Act 2007.",
    sections:[
      { num:'2', head:'Admission for Assessment', text:'Allows detention for assessment for up to 28 days on the application of an approved mental health professional and two medical recommendations.' },
      { num:'3', head:'Admission for Treatment', text:'Allows detention for treatment for up to 6 months, renewable, where appropriate medical treatment is available.' },
      { num:'4', head:'Emergency Admission', text:'Permits admission for assessment in cases of urgent necessity on a single medical recommendation, for up to 72 hours.' },
      { num:'5', head:'Holding Powers', text:'Allows the temporary detention of a patient already in hospital pending an application under section 2 or 3.' },
      { num:'117', head:'After-care', text:'Imposes a joint duty on health and social services to provide after-care for certain patients following discharge from detention.' },
      { num:'136', head:'Police Power in Public Places', text:'A constable may remove a person who appears mentally disordered from a public place to a place of safety for assessment.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/1983/20/contents' },

  // ── 9. Criminal / Tort — statute ──
  { id:'k9', type:'curated', cat:'statute', area:'Criminal',
    title:'Protection from Harassment Act 1997',
    body:"Created both criminal offences and a civil cause of action for harassment. Originally aimed at stalking, it is now widely used in workplace, neighbour and online-harassment disputes.",
    sections:[
      { num:'1', head:'Prohibition of Harassment', text:'A person must not pursue a course of conduct which amounts to harassment of another and which they know or ought to know amounts to harassment.' },
      { num:'2', head:'Offence of Harassment', text:'Makes pursuing a prohibited course of conduct a criminal offence.' },
      { num:'3', head:'Civil Remedy', text:'An actual or apprehended breach may found a civil claim, allowing damages (including for anxiety) and an injunction.' },
      { num:'4', head:'Fear of Violence', text:'A more serious offence where the course of conduct causes another to fear, on at least two occasions, that violence will be used against them.' },
      { num:'4A', head:'Stalking Involving Fear or Distress', text:'Targets stalking that causes fear of violence or serious alarm or distress with a substantial adverse effect on daily activities.' },
      { num:'7', head:'Interpretation', text:'Defines a "course of conduct" (conduct on at least two occasions) and provides that references to harassing a person include alarming them or causing distress.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/1997/40/contents' },

  // ── 10. Constitutional / EU — statute ──
  { id:'k10', type:'curated', cat:'statute', area:'Constitutional',
    title:'European Union (Withdrawal) Act 2018',
    body:"The principal statute giving domestic legal effect to Brexit. It repealed the European Communities Act 1972 and converted the body of EU law applying in the UK into a new category of \"retained EU law\".",
    sections:[
      { num:'1', head:'Repeal of the ECA 1972', text:'Repealed the European Communities Act 1972 on exit day, ending the constitutional conduit for EU law in the UK.' },
      { num:'2', head:'Saving for EU-derived Domestic Legislation', text:'Preserves domestic legislation that had been made to implement EU obligations.' },
      { num:'3', head:'Incorporation of Direct EU Legislation', text:'Converts directly-applicable EU legislation (such as regulations) into domestic law as retained EU law.' },
      { num:'4', head:'Saving for Directly Effective Rights', text:'Preserves certain rights and obligations that were available in domestic law under section 2(1) of the ECA.' },
      { num:'6', head:'Interpretation of Retained EU Law', text:'Sets out how retained EU law is to be interpreted and the (limited) status of retained CJEU case law.' },
      { num:'7A', head:'Effect of the Withdrawal Agreement', text:'Gives general effect in domestic law to rights and obligations arising under the EU-UK Withdrawal Agreement.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2018/16/contents' },

  // ── 11. Tort — case (sourced via the lawteacher pathway) ──
  { id:'k11', type:'curated', cat:'case-law', area:'Tort',
    title:'Fearn & Ors v Board of Trustees of the Tate Gallery [2023] UKSC 4',
    court:'UK Supreme Court',
    facts:'Residents of glass-walled flats next to Tate Modern were overlooked by hundreds of thousands of visitors using the gallery’s public viewing platform, who could see directly into their living spaces and frequently photographed them. The residents sued in private nuisance.',
    judgment:'The Supreme Court held (3:2) that the visual intrusion was an actionable private nuisance and allowed the appeal, reversing the courts below.',
    ratio:'Private nuisance can extend to overlooking where there is a substantial interference with the ordinary use and enjoyment of land. The test is whether the defendant’s own use of its land is a common and ordinary use, judged by the locality; a claimant is not required to take defensive self-help measures (such as blinds) to avoid an abnormal intrusion.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2023/4.html' },

  // ── 12. Property/Equity — case (sourced via the lawteacher pathway) ──
  { id:'k12', type:'curated', cat:'case-law', area:'Property',
    title:'Guest & Anor v Guest [2022] UKSC 27',
    court:'UK Supreme Court',
    facts:'A son worked for decades at low wages on the family farm relying on his parents’ repeated assurances that he would inherit a substantial share of it. After the relationship broke down he was effectively disinherited, and he claimed proprietary estoppel.',
    judgment:'The Supreme Court (3:2) upheld the estoppel and clarified the correct approach to the remedy, allowing the parents’ appeal only on the form of relief.',
    ratio:'The purpose of relief for proprietary estoppel is to remedy the unconscionability of going back on a promise — normally by satisfying the claimant’s expectation. The court may award a lesser remedy where fulfilling the expectation would be out of all proportion to the detriment suffered, and must allow for accelerated receipt where the benefit is given early.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2022/27.html' },

  // ── 13. Criminal — case ──
  { id:'k13', type:'curated', cat:'case-law', area:'Criminal',
    title:'Sweet v Parsley [1969] UKHL 1',
    court:'House of Lords',
    facts:'Miss Sweet owned a farmhouse which she sublet to lodgers and rarely visited. Cannabis was smoked on the premises by tenants, without her knowledge or participation. She was charged under the Dangerous Drugs Act 1965 with being "concerned in the management" of premises used for the purpose of smoking cannabis.',
    judgment:'The House of Lords allowed her appeal, holding that the offence required mens rea. The prosecution had failed to prove any knowledge of or participation in the drug use on her part.',
    ratio:'Parliament is presumed not to intend to make a person criminally liable for conduct in which they are in no way blameworthy. Whenever a statute creating a criminal offence is silent as to mens rea, the courts should read in a requirement of mental fault unless Parliament has expressly or by necessary implication excluded it. The presumption is particularly strong for "truly criminal" offences as opposed to purely regulatory ones.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/1969/1.html' },

  // ── 14. Company — case ──
  { id:'k14', type:'curated', cat:'case-law', area:'Company',
    title:'O\'Neill v Phillips [1999] UKHL 24',
    court:'House of Lords',
    facts:'O\'Neill, an employee of Phillips\' company, was made a director and given a 25% shareholding. Phillips indicated he was willing to let O\'Neill take over operational management and receive 50% of profits, but no formal agreement was ever made. After a business downturn, Phillips withdrew the informal promises and resumed control. O\'Neill petitioned under s.459 Companies Act 1985 alleging unfair prejudice.',
    judgment:'The House of Lords dismissed the petition. Lord Hoffmann held that withdrawal of negotiations about increasing O\'Neill\'s stake could not constitute unfair prejudice, as no binding obligation had ever been entered into.',
    ratio:'A member of a company may petition for relief from unfair prejudice where the affairs of the company are conducted in a manner that breaches the terms on which it was agreed — including equitable obligations arising from the parties\' relationship — that those affairs would be conducted. The concept of fairness is not to be applied too liberally; a reasonable offer to buy out a petitioner on fair terms will generally render further litigation about conduct unnecessary. Mere withdrawal from exploratory negotiations is not unfairness.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/1999/24.html' },

  // ── 15. Employment — case ──
  { id:'k15', type:'curated', cat:'case-law', area:'Employment',
    title:'Autoclenz Ltd v Belcher [2011] UKSC 41',
    court:'UK Supreme Court',
    facts:'Twenty car valeters engaged by Autoclenz signed written contracts describing them as self-employed independent contractors, stating that they were free to send a substitute and that the company was under no obligation to offer, nor they to accept, work. In practice they worked regular hours, could not substitute, and were expected to be available. They claimed entitlement to the national minimum wage and paid annual leave as "workers" under the relevant regulations.',
    judgment:'The Supreme Court held that the valeters were workers entitled to statutory protection. The Employment Tribunal\'s assessment of the true working relationship was restored.',
    ratio:'In employment disputes, courts are not bound by the literal terms of a written contract where those terms do not reflect the true agreement between the parties. The court must ascertain the real relationship by examining how the parties actually conducted themselves. The inequality of bargaining power that typically exists between a business and an individual seeking work is a relevant contextual factor in determining whether contractual terms reflect genuine agreement or have been imposed.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2011/41.html' },

  // ── 16. Trusts — case ──
  { id:'k16', type:'curated', cat:'case-law', area:'Trusts',
    title:'Foskett v McKeown [2000] UKHL 29',
    court:'House of Lords',
    facts:'Murphy misappropriated money from a group of purchasers and used part of it to pay the third and fourth annual premiums on a life assurance policy. He later committed suicide, triggering a death benefit of around £1 million payable under the policy. The dispute was between the purchasers, who claimed a proportionate share of the proceeds on the ground that their traceable funds had contributed to them, and Murphy\'s children, the named beneficiaries.',
    judgment:'The House of Lords (3:2) held that the purchasers were entitled to a proportionate share of the death benefit corresponding to the fraction of the total premiums paid with their misappropriated money.',
    ratio:'The right to trace property into its substitutes is a proprietary right arising from a pre-existing beneficial interest, not a personal claim for unjust enrichment. Where a beneficiary\'s assets are mixed with or used to augment other assets, the beneficiary acquires a proportionate beneficial interest in the augmented fund. The remedy is to vindicate an existing property right, and the quantification of that right follows arithmetically from the contribution of the traceable asset.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/2000/29.html' },

  // ── 17. Evidence — case ──
  { id:'k17', type:'curated', cat:'case-law', area:'Evidence',
    title:'Horncastle & Ors, R v [2009] UKSC 14',
    court:'UK Supreme Court',
    facts:'Each appellant had been convicted of a serious criminal offence where the prosecution\'s case relied significantly on a written statement from a witness who did not give oral evidence at trial. The European Court of Human Rights had ruled in Al-Khawaja v UK that convicting a defendant solely or to a decisive degree on the basis of such an untested statement violated Art 6 ECHR. The appellants argued their convictions were unsafe on the same basis.',
    judgment:'The Supreme Court dismissed all the appeals and declined to follow the ECtHR\'s "sole or decisive" rule, finding that the UK statutory hearsay regime under the Criminal Justice Act 2003 contained sufficient safeguards to ensure a fair trial.',
    ratio:'UK courts are obliged to take Strasbourg jurisprudence into account but are not bound by it, particularly where a Grand Chamber ruling has failed to appreciate a distinctive feature of domestic law. A higher domestic court may decline to follow an ECtHR decision and seek to resolve the divergence through dialogue rather than automatic compliance. The admissibility of hearsay evidence does not automatically breach Art 6 ECHR if the overall proceedings are fair and adequate counterbalancing safeguards exist.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2009/14.html' },

  // ── 18. Criminal — case ──
  { id:'k18', type:'curated', cat:'case-law', area:'Criminal',
    title:'B v Director of Public Prosecutions [2000] UKHL 13',
    court:'House of Lords',
    facts:'A 15-year-old boy on a bus repeatedly asked a 13-year-old girl to perform a sexual act. He was charged under s.1(1) Indecency with Children Act 1960 with inciting a child under 14 to commit an act of gross indecency. He claimed he had genuinely believed the girl was 14 or older. The magistrate convicted on the basis that the offence was one of strict liability in relation to the age element.',
    judgment:'The House of Lords allowed the appeal. An honest belief that the victim was 14 or over was a defence. The offence was not one of strict liability on the age element.',
    ratio:'The presumption that Parliament intends mens rea to be an element of a criminal offence (established in Sweet v Parsley) applies with full force unless Parliament has clearly and unambiguously created a strict liability offence. An honest belief, even if unreasonably held, is sufficient to negative the mental element and provide a defence. The court must look to the language, subject matter and object of the statute to determine whether Parliament has displaced the presumption.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/2000/13.html' },

       // ── Employment — case ──
  { id:'m1', type:'curated', cat:'case-law', area:'Employment',
    title:'Uber BV & Ors v Aslam & Ors [2021] UKSC 5',
    court:'UK Supreme Court',
    facts:'Drivers using the Uber app claimed they were "workers" entitled to the minimum wage and paid holiday under the Employment Rights Act 1996, despite written agreements casting them as self-employed contractors transacting directly with passengers. Uber set the fares, dictated the terms and controlled how drivers performed.',
    judgment:'The Supreme Court unanimously held the drivers were workers, and were working whenever they were signed in to the app and ready to accept trips in their area.',
    ratio:'Worker status is decided by the statutory purpose of protecting vulnerable workers, applied to the practical reality of the relationship — not the labels in the contract. Where one party dictates the terms and the other is in a subordinate, dependent position, the court looks through the documents to the substance of the bargain.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2021/5.html' },

  // ── Tort — case ──
  { id:'m2', type:'curated', cat:'case-law', area:'Tort',
    title:'Vedanta Resources plc & Anor v Lungowe & Ors [2019] UKSC 20',
    court:'UK Supreme Court',
    facts:'Zambian villagers sued a UK-domiciled parent company and its Zambian mining subsidiary in the English courts over pollution, raising whether England was the proper place to try the claim and whether a parent could owe a duty of care for its subsidiary’s operations.',
    judgment:'The Supreme Court allowed the claim to proceed in England, holding it was arguable that the parent owed a relevant duty of care.',
    ratio:'There is no distinct category of parent-company liability; ordinary negligence principles apply. A parent may owe a duty to those harmed by its subsidiary where, in fact, it took over or held itself out as exercising supervision and control of the relevant operations — the question turns on the degree of intervention, not corporate structure.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2019/20.html' },

  // ── Human Rights — case ──
  { id:'m3', type:'curated', cat:'case-law', area:'Human Rights',
    title:'Lee v Ashers Baking Co Ltd & Ors [2018] UKSC 49',
    court:'UK Supreme Court',
    facts:'A bakery owned by Christians declined to make a cake iced with the message "Support Gay Marriage". The customer claimed direct discrimination on grounds of sexual orientation and political opinion.',
    judgment:'The Supreme Court held there was no unlawful discrimination: the objection was to the message, not to the customer or any protected characteristic.',
    ratio:'Refusing to produce a message with which one profoundly disagrees is not discrimination against the person who requested it, where the objection is to the message itself and would apply whoever asked. Compelling a person to express a belief they reject engages their Convention rights to freedom of thought, conscience and expression.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2018/49.html' },

  // ── Contract — case ──
  { id:'m4', type:'curated', cat:'case-law', area:'Contract',
    title:'Wells v Devani [2019] UKSC 4',
    court:'UK Supreme Court',
    facts:'An estate agent claimed commission after an oral exchange in which the precise event triggering payment had not been spelled out. The seller argued no enforceable contract had been formed because an essential term was missing.',
    judgment:'The Supreme Court held a binding contract existed and the agent was entitled to his commission.',
    ratio:'A contract is not void for uncertainty merely because a term is left unstated; a court may imply what the parties must have intended so as to give the agreement business efficacy. Where the parties plainly intended to be bound and have acted on their bargain, courts are slow to strike it down as too uncertain to enforce.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2019/4.html' },

  // ── Tort (privacy) — case ──
  { id:'m5', type:'curated', cat:'case-law', area:'Tort',
    title:'PJS v News Group Newspapers Ltd [2016] UKSC 26',
    court:'UK Supreme Court',
    facts:'A claimant in the public eye sought to restrain publication of details of an extramarital sexual encounter. The material had already circulated online and in publications abroad, and the newspaper argued an injunction could no longer serve any purpose.',
    judgment:'The Supreme Court, by a majority, continued the injunction pending trial.',
    ratio:'In misuse of private information the issue is not only whether information is already accessible but the further intrusion and distress that permanent, mass media publication would cause. Privacy, unlike confidence, is not necessarily destroyed by limited prior disclosure, and there is a qualitative difference between scattered online material and front-page print.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2016/26.html' },

  // ── Employment — case ──
  { id:'m6', type:'curated', cat:'case-law', area:'Employment',
    title:'Pimlico Plumbers Ltd & Anor v Smith [2018] UKSC 29',
    court:'UK Supreme Court',
    facts:'A plumber engaged on ostensibly self-employed terms — VAT-registered and providing his own tools, but working solely for the company under its rules and branding — claimed he was in fact a worker entitled to associated rights.',
    judgment:'The Supreme Court unanimously upheld the tribunal’s conclusion that he was a worker.',
    ratio:'Worker status depends on whether the individual undertook to perform the work personally and whether the counterparty was a client or customer of a business run by the individual. A narrow, fettered right of substitution — limited to colleagues bound on similar terms — is consistent with an obligation of personal performance.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2018/29.html' },

  // ── Criminal — statute ──
  { id:'m7', type:'curated', cat:'statute', area:'Criminal',
    title:'Sentencing Act 2020',
    body:"Consolidated the law on sentencing procedure in England and Wales into a single ‘Sentencing Code’, bringing together the powers of the criminal courts when dealing with offenders. It restates rather than reforms the law, aiming to make sentencing more accessible and to cut the errors caused by scattered, frequently-amended provisions.",
    sections:[
      { num:'1', head:'The Sentencing Code', text:'Introduces the Sentencing Code as the consolidated framework governing the sentencing of offenders in the criminal courts.' },
      { num:'57', head:'Purposes of Sentencing', text:'For offenders aged 18 or over, the court must have regard to the punishment of offenders, the reduction of crime (including by deterrence), reform and rehabilitation, the protection of the public, and reparation by offenders.' },
      { num:'63', head:'Assessing Seriousness', text:'In considering the seriousness of an offence the court must consider the offender’s culpability and any harm which the offence caused, was intended to cause, or might foreseeably have caused.' },
      { num:'73', head:'Reduction for Guilty Pleas', text:'The court must take into account the stage in proceedings at which the offender indicated an intention to plead guilty and the circumstances in which that indication was given.' },
      { num:'230', head:'Threshold for Custody', text:'A court must not pass a custodial sentence unless the offence (or combination of offences) was so serious that neither a fine alone nor a community sentence can be justified.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2020/17/contents' },

  // ── Criminal — statute ──
  { id:'m8', type:'curated', cat:'statute', area:'Criminal',
    title:'Domestic Abuse Act 2021',
    body:"Created the first statutory definition of domestic abuse in England and Wales, recognising that abuse extends well beyond physical violence. It strengthened protections for victims, treated children exposed to abuse as victims in their own right, and closed gaps in the criminal law.",
    sections:[
      { num:'1', head:'Definition of "Domestic Abuse"', text:'Defines domestic abuse between persons aged 16 or over who are personally connected, covering physical or sexual abuse, violent or threatening behaviour, controlling or coercive behaviour, economic abuse, and psychological, emotional or other abuse.' },
      { num:'2', head:'Definition of "Personally Connected"', text:'Sets out the relationships that count — including partners, former partners, those who are or were married or in a civil partnership, and certain relatives.' },
      { num:'3', head:'Children as Victims', text:'A child who sees, hears or experiences the effects of domestic abuse, and is related to the perpetrator or victim, is also to be regarded as a victim of domestic abuse.' },
      { num:'71', head:'Consent to Serious Harm for Sexual Gratification', text:'Confirms that a person cannot consent to the infliction of serious harm for the purposes of sexual gratification, so such consent is not a defence to the resulting offence (the so-called "rough sex" defence).' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2021/17/contents' },

  // ── Public — statute ──
  { id:'m9', type:'curated', cat:'statute', area:'Public',
    title:'Environment Act 2021',
    body:"A landmark post-Brexit framework for environmental protection in the UK. It sets legally binding environmental targets, creates new domestic governance machinery to replace EU oversight, and reaches across waste, air and water quality, and nature recovery.",
    sections:[
      { num:'1', head:'Environmental Targets', text:'Empowers and requires the Secretary of State to set long-term, legally binding targets, including at least one in each priority area: air quality, water, biodiversity, and resource efficiency and waste reduction.' },
      { num:'22', head:'The Office for Environmental Protection', text:'Establishes the OEP, an independent body charged with monitoring environmental law and progress on targets and with enforcing compliance by public authorities — taking over the oversight role formerly held by EU institutions.' },
      { num:'Pt 3', head:'Waste and Resource Efficiency', text:'Introduces extended producer responsibility, deposit and return schemes, and charges on single-use items, with powers to drive a more circular economy.' },
      { num:'Pt 6', head:'Nature and Biodiversity', text:'Requires most new development to deliver a measurable biodiversity net gain, and introduces local nature recovery strategies and conservation covenants.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2021/30/contents' },

  // ── Public Law — statute ──
  { id:'m10', type:'curated', cat:'statute', area:'Public Law',
    title:'Investigatory Powers Act 2016',
    body:"Overhauled and avowed the legal framework governing the use of interception and surveillance powers by the intelligence agencies and law enforcement, following revelations about bulk data collection. Dubbed the ‘Snoopers’ Charter’, it introduced new oversight in exchange for placing sweeping powers on a clear statutory footing.",
    sections:[
      { num:'Pt 2', head:'Lawful Interception', text:'Sets out the warrant regime for intercepting the content of communications and makes intentional interception without lawful authority a criminal offence.' },
      { num:'Pt 4', head:'Retention of Communications Data', text:'Allows the Secretary of State to require telecommunications operators to retain communications data — including internet connection records — for up to 12 months.' },
      { num:'Pt 6', head:'Bulk Powers', text:'Authorises bulk interception, bulk acquisition of communications data, and bulk equipment interference, subject to statutory safeguards and warrants.' },
      { num:'227', head:'The Investigatory Powers Commissioner', text:'Creates the Investigatory Powers Commissioner and Judicial Commissioners, who must approve the most intrusive warrants under a “double-lock” alongside the Secretary of State.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2016/25/contents' },

  // ── Constitutional — case ──
  { id:'m11', type:'curated', cat:'case-law', area:'Constitutional',
    title:'R (Miller) v Secretary of State for Exiting the European Union [2017] UKSC 5',
    court:'UK Supreme Court',
    facts:'Following the 2016 referendum vote to leave the EU, the government argued it could give notice of withdrawal under Article 50 TEU by exercise of the royal prerogative without further parliamentary authority. Gina Miller and other claimants brought judicial review proceedings contending that an Act of Parliament was constitutionally required before notification could lawfully be given.',
    judgment:'The Supreme Court held, by 8 to 3, that parliamentary authorisation was necessary before Article 50 could be triggered. Accordingly, the Government could not serve the notice without first obtaining the approval of Parliament through legislation.',
    ratio:'The royal prerogative cannot be used where its exercise would inevitably remove or curtail rights conferred on individuals by Parliament through statute. The European Communities Act 1972 had made EU law a source of domestic legal rights, and those rights could not be removed by prerogative action alone — only Parliament could authorise a step having that constitutional consequence.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2017/5.html' },

  // ── Human Rights — case ──
  { id:'m12', type:'curated', cat:'case-law', area:'Human Rights',
    title:'A & Ors v Secretary of State for the Home Department [2004] UKHL 56',
    court:'House of Lords',
    facts:'Following the September 2001 attacks, Parliament enacted s.23 of the Anti-terrorism, Crime and Security Act 2001, enabling indefinite detention without charge or trial of foreign nationals certified by the Home Secretary as suspected international terrorists. The government had also issued a formal derogation from Article 5 ECHR. Nine detainees held at Belmarsh high-security prison challenged the lawfulness of their detention.',
    judgment:'The House of Lords, 8 to 1, declared s.23 incompatible with Articles 5 and 14 ECHR and quashed the derogation order. The powers could not be justified because they were both disproportionate to the emergency and discriminatory, applying only to foreign nationals when British nationals posed an equivalent threat.',
    ratio:'A derogation from the ECHR is valid only if it is strictly required by the exigencies of the declared emergency. Legislation that subjects foreign nationals to indefinite detention while leaving comparably dangerous British nationals at liberty cannot be rationally justified under Article 14; an emergency invoked to justify derogation cannot legitimise measures of whose necessity the state cannot give a coherent account.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/2004/56.html' },

  // ── Contract — case ──
  { id:'m13', type:'curated', cat:'case-law', area:'Contract',
    title:'Williams v Roffey Bros & Nicholls (Contractors) Ltd [1989] EWCA Civ 5',
    court:'Court of Appeal',
    facts:'Roffey Bros held a refurbishment contract and subcontracted the carpentry to Williams at a price that left him financially unable to continue. Faced with penalty clauses if the main contract fell behind, Roffey Bros orally agreed to pay Williams an extra sum per flat completed to secure timely completion. After Williams finished several more flats, Roffey Bros refused to pay the agreed extras, arguing there was no fresh consideration.',
    judgment:'The Court of Appeal held the additional promise enforceable. By securing timely completion and avoiding penalty liability, Roffey Bros had obtained a practical benefit sufficient to support the new promise.',
    ratio:'A promise to perform an existing contractual duty to the same promisee can constitute good consideration for a further promise if the promisor in fact obtains a real practical benefit — such as avoiding a penalty clause or securing completion — as a result. A legal detriment to the promisee is not essential; a factual, practical benefit to the party giving the new promise is sufficient.',
    src:'BAILII', link:'https://www.bailii.org/ew/cases/EWCA/Civ/1989/5.html' },

  // ── Equity — case ──
  { id:'m14', type:'curated', cat:'case-law', area:'Equity',
    title:'Westdeutsche Landesbank Girozentrale v Islington LBC [1996] UKHL 12',
    court:'House of Lords',
    facts:'A German bank entered interest-rate swap agreements with the London Borough of Islington. When such contracts were subsequently held to be void ab initio — local authorities having no capacity to enter them — the bank sought recovery of net sums paid together with compound interest, on the basis that the council held the money on a resulting or constructive trust.',
    judgment:'The House of Lords held no trust had arisen on the facts. The bank was entitled to restitution at common law but could not claim compound interest because equity did not intervene: the council had received the money innocently, without knowledge of any factor that affected its conscience.',
    ratio:'A resulting trust does not arise simply because a payment was made under a void transaction or under a mistake of law. Equity acts on the conscience of the holder of property: a trust requires that the holder have knowledge of facts that make it unconscionable for them to retain the property beneficially. Good faith receipt of money, without awareness of the vitiating factor, does not impose a trust.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/1996/12.html' },

  // ── Contract — case ──
  { id:'m15', type:'curated', cat:'case-law', area:'Contract',
    title:'Ruxley Electronics & Construction Ltd v Forsyth [1995] UKHL 8',
    court:'House of Lords',
    facts:'A contractor built a swimming pool shallower than specified — 6 feet at the diving end instead of the contracted 7 feet 6 inches. The pool was safe to use and dive into, and the shortfall caused no measurable diminution in the market value of the property. The homeowner claimed the cost of demolishing and rebuilding the pool to the specified depth, amounting to £21,560.',
    judgment:'The House of Lords held that the cost-of-cure measure was not recoverable; it would be wholly unreasonable and disproportionate to any benefit obtained. An award of £2,500 for loss of amenity was affirmed in its place.',
    ratio:'Where the cost of curing a breach of contract is out of all proportion to the benefit it would confer, the court is not bound to award cost-of-cure damages. It may instead award diminution in value (here nil) together with a modest sum for loss of amenity. The fundamental purpose of contractual damages is to compensate the claimant for genuine loss, not to impose a financial penalty on the defendant, and reasonableness governs which measure is appropriate.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/1995/8.html' },

  // ── Tort — Vicarious Liability (close connection test) ──
  { id:'r20260929a', type:'curated', cat:'case-law', area:'Tort',
    title:'Lister & Ors v Hesley Hall Ltd [2001] UKHL 22',
    court:'House of Lords',
    facts:'The appellants were former pupils at Wilsic Hall School, a residential school for children with behavioural difficulties run by Hesley Hall Ltd. While resident in the school\'s boarding annex between 1979 and 1982, they were systematically sexually abused by the warden of the annex, Grain, whom the company employed to look after them. They sued the employer for vicarious liability.',
    judgment:'The House of Lords unanimously held Hesley Hall Ltd vicariously liable for Grain\'s assaults, overruling Trotman v North Yorkshire CC and restoring a purposive approach to vicarious liability for intentional wrongdoing.',
    ratio:'An employer is vicariously liable for an employee\'s intentional tort where there is a sufficiently close connection between the tortious acts and the employment. The older Salmond test — asking whether the act was an improper mode of performing an authorised task — is inadequate for deliberate wrongs. The correct question is whether the wrongful acts were so closely connected with what the employee was employed to do that it would be fair and just to hold the employer liable.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/2001/22.html' },

  // ── Tort / Medical Law — Causation and Informed Consent ──
  { id:'r20260929b', type:'curated', cat:'case-law', area:'Tort',
    title:'Chester v Afshar [2004] UKHL 41',
    court:'House of Lords',
    facts:'Miss Chester was referred to a neurosurgeon, Mr Afshar, for treatment of serious back pain. He advised and performed spinal surgery without warning her of a small (1–2%) risk of cauda equina syndrome. She suffered that complication. The trial judge found that, had she been warned, she would not have refused surgery altogether, but might have sought further advice and had the operation on a different date; there was no finding that surgery on a different date would have avoided the injury.',
    judgment:'The House of Lords (3:2) held Mr Afshar liable, modifying the orthodox "but for" test of causation to vindicate the patient\'s right to make an informed decision about her own treatment.',
    ratio:'Where a doctor\'s negligence consists in failing to warn a patient of a risk that then materialises, the patient may establish causation even if they cannot show they would have refused surgery altogether. It suffices to show that, but for the failure to warn, they would not have consented to surgery on that particular occasion. The modification is justified to give content to the patient\'s right to autonomy — the right to decide whether, when and by whom to be treated — which the duty to warn is designed to protect.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/2004/41.html' },

  // ── Tort — Negligent Survey and UCTA Disclaimer ──
  { id:'r20260929c', type:'curated', cat:'case-law', area:'Tort',
    title:'Smith v Eric S Bush (A Firm) [1990] UKHL 1',
    court:'House of Lords',
    facts:'Mrs Smith applied for a mortgage to buy a modest terraced house. The building society instructed Eric S Bush to value it; the report was made available to Mrs Smith and included a disclaimer of the surveyors\' liability to anyone other than the Society. Relying on the report without commissioning her own survey, she purchased the property. The surveyor had negligently failed to spot that two chimney breasts had been removed, leaving chimneys unsupported; after purchase the chimneys collapsed, causing serious damage.',
    judgment:'The House of Lords held the surveyors owed a duty of care to Mrs Smith and that the disclaimer was unenforceable under s.2(2) of the Unfair Contract Terms Act 1977 as failing the statutory reasonableness test.',
    ratio:'A professional valuer acting for a mortgagee, who knows the report will be passed to and relied upon by the purchaser, assumes a responsibility to that purchaser sufficient to found a Hedley Byrne duty of care. A disclaimer seeking to exclude that liability in a standard domestic property transaction will generally fail the UCTA 1977 reasonableness test, given the practical inequality between the parties, the foreseeability that a modest purchaser will rely on the survey rather than pay for their own, and the professional\'s ability to insure against the risk.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/1990/1.html' },

  // ── Tort — Solicitors\' Negligence and Third-Party Beneficiaries ──
  { id:'r20260929d', type:'curated', cat:'case-law', area:'Tort',
    title:'White v Jones [1995] UKHL 5',
    court:'House of Lords',
    facts:'A testator had quarrelled with his daughters but later reconciled and instructed his solicitors to draw up a new will giving each daughter £9,000. The solicitors negligently delayed acting on the instructions and the testator died before the new will was executed. Under the existing will the daughters received nothing. They sued the solicitors in negligence for the loss of their intended legacies.',
    judgment:'The House of Lords (3:2) held the solicitors liable to the daughters as intended beneficiaries, extending the Hedley Byrne principle by close analogy to fill a gap in the law that would otherwise leave a wrong without a remedy.',
    ratio:'A solicitor who accepts instructions to alter a testator\'s will owes a duty of care to the intended beneficiaries even though there is no contract between them. The Hedley Byrne principle of assumption of responsibility is applied by incremental analogy: in the absence of such liability the only parties with a cause of action — the testator\'s estate — would suffer no loss, while those who suffer the loss — the intended beneficiaries — would have no remedy. The law will not tolerate that outcome.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKHL/1995/5.html' },

  // ── Equity — Fiduciary Duty / Constructive Trust of Secret Commission ──
  { id:'r20260929e', type:'curated', cat:'case-law', area:'Equity',
    title:'FHR European Ventures LLP & Ors v Cedar Capital Partners LLC [2014] UKSC 45',
    court:'UK Supreme Court',
    facts:'Cedar Capital Partners acted as agent for FHR in negotiating the purchase of the Monte Carlo Grand Hotel complex for €211.5 million. Without disclosing the fact to FHR, Cedar had separately agreed to receive a €10 million commission from the vendor on completion. FHR claimed Cedar must hold that secret commission on constructive trust for FHR rather than merely being personally liable to account for it.',
    judgment:'The Supreme Court unanimously held that a bribe or secret commission received by an agent in breach of their fiduciary duty is held on constructive trust for the principal, overruling Lister v Stubbs and the line of authority limiting the principal to a personal remedy.',
    ratio:'Where an agent receives a bribe or secret commission as a result of their position, that money is held on constructive trust for the principal. The former distinction between misapplied trust property (proprietary remedy available) and bribes (personal remedy only) cannot be justified in principle and is overruled. The rule serves the policy of deterrence: an agent cannot profit from their own breach of duty while the principal bears the commercial risk of the transaction.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2014/45.html' },

  // ── Contract — Illegality (range-of-factors approach) ──
  { id:'r20260929f', type:'curated', cat:'case-law', area:'Contract',
    title:'Patel v Mirza [2016] UKSC 42',
    court:'UK Supreme Court',
    facts:'Mr Patel transferred £620,000 to Mr Mirza to be used in betting on RBS share prices, using insider information that Mr Mirza expected to receive from contacts at RBS ahead of a government announcement. The expected information never materialised and no bet was placed. Mr Patel sought to recover his money; Mr Mirza resisted on the basis that the agreement to use insider information was an illegal conspiracy to commit the offence of insider dealing.',
    judgment:'The Supreme Court (6:3) allowed Mr Patel to recover his money, abandoning the reliance-based rule in Tinsley v Milligan [1994] 1 AC 340 in favour of a more flexible, policy-driven approach.',
    ratio:'Whether a claim tainted by illegality should succeed depends on balancing the policies underlying the illegality principle: whether allowing the claim would damage the integrity of the legal system by furthering the purpose of the rule broken; the seriousness and nature of the illegality; and whether refusing relief would be disproportionate. Courts must weigh these considerations rather than apply a rigid rule tied to the claimant\'s need to rely on the illegal act. Where money has been transferred for an illegal purpose that was never carried out, restitutionary recovery will ordinarily be allowed.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2016/42.html' },

  // ── Human Rights — statute ──
  { id:'r20260929g', type:'curated', cat:'statute', area:'Human Rights',
    title:'Human Rights Act 1998',
    body:"Gave further effect in domestic law to rights and freedoms guaranteed under the European Convention on Human Rights. It requires courts to read legislation compatibly with Convention rights so far as possible, obliges public authorities to act compatibly with those rights, and enables higher courts to make declarations of incompatibility. The Act transformed the constitutional landscape of public and private law in the United Kingdom.",
    sections:[
      { num:'2', head:'Interpretation of Convention Rights', text:'Courts and tribunals determining a question connected with a Convention right must take into account any judgment, decision, declaration or opinion of the European Court of Human Rights, so far as relevant.' },
      { num:'3', head:'Interpretation of Legislation', text:'Primary and subordinate legislation must be read and given effect in a way which is compatible with Convention rights, so far as it is possible to do so — even if a different interpretation would otherwise be required.' },
      { num:'4', head:'Declaration of Incompatibility', text:'Where a court is satisfied that a provision of primary legislation is incompatible with a Convention right and cannot be read compatibly under s.3, it may make a declaration of incompatibility, which does not affect the validity or operation of the provision but triggers a fast-track Parliamentary remedial procedure.' },
      { num:'6', head:'Acts of Public Authorities', text:'It is unlawful for a public authority to act in a way which is incompatible with a Convention right, unless required to do so by primary legislation which cannot be read compatibly.' },
      { num:'7', head:'Proceedings', text:'A person who claims a public authority has acted or proposes to act unlawfully under s.6 may bring proceedings or rely on the Convention right in legal proceedings, but only if they are (or would be) a victim within the meaning of Art 34 ECHR.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/1998/42/contents' },

  // ── Company — statute ──
  { id:'r20260929h', type:'curated', cat:'statute', area:'Company',
    title:'Companies Act 2006',
    body:"A comprehensive reform of UK company law that, for the first time, codified directors\' general duties in statutory form, restating the pre-existing equitable and common law rules. It also modernised share capital, accounts and audit, shareholder rights, company formation, and corporate governance. The Act remains the dominant statute governing companies in Great Britain and is notable for the \'enlightened shareholder value\' model embedded in the s.172 duty.",
    sections:[
      { num:'170', head:'Scope and Nature of General Duties', text:'The general duties are owed by a director to the company. They are based on and must be interpreted and applied in the same way as the common law rules and equitable principles they replace. More than one of the duties may apply in any given case.' },
      { num:'172', head:'Duty to Promote the Success of the Company', text:'A director must act in the way they consider, in good faith, would be most likely to promote the success of the company for the benefit of its members as a whole, having regard (among other matters) to long-term consequences, employee interests, business relationships, community and environmental impact, and the desirability of maintaining a reputation for high standards of business conduct.' },
      { num:'173', head:'Duty to Exercise Independent Judgment', text:'A director must exercise independent judgment and may not agree to fetter their discretion, except where permitted by the company\'s constitution or where acting in accordance with an agreement duly entered into.' },
      { num:'174', head:'Duty to Exercise Reasonable Care, Skill and Diligence', text:'A director must exercise the care, skill and diligence that would be exercised by a reasonably diligent person with the general knowledge and experience reasonably expected of a director in the same position and any additional actual knowledge or skill the individual director has.' },
      { num:'175', head:'Duty to Avoid Conflicts of Interest', text:'A director must avoid a situation in which they have, or can have, a direct or indirect interest that conflicts, or possibly may conflict, with the interests of the company, in particular regarding the exploitation of any property, information or opportunity.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2006/46/contents' },

  // ── Employment — statute ──
  { id:'r20260929i', type:'curated', cat:'statute', area:'Employment',
    title:'Equality Act 2010',
    body:"Consolidated and harmonised the law against discrimination across the United Kingdom, replacing a patchwork of earlier Acts covering race, sex, disability and other grounds. It introduced the single concept of \'protected characteristics\', unified the prohibited conduct categories, extended the public sector equality duty, and became the principal statute governing anti-discrimination law for employment, services, housing and education.",
    sections:[
      { num:'4', head:'Protected Characteristics', text:'The protected characteristics are age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.' },
      { num:'13', head:'Direct Discrimination', text:'A person directly discriminates against another if, because of a protected characteristic, they treat that person less favourably than they treat or would treat others not sharing that characteristic.' },
      { num:'19', head:'Indirect Discrimination', text:'A person indirectly discriminates if they apply a provision, criterion or practice equally to all, but which puts persons sharing a protected characteristic at a particular disadvantage compared with others and which cannot be justified as a proportionate means of achieving a legitimate aim.' },
      { num:'26', head:'Harassment', text:'A person harasses another if they engage in unwanted conduct related to a relevant protected characteristic which has the purpose or effect of violating the person\'s dignity or creating an intimidating, hostile, degrading, humiliating or offensive environment for them.' },
      { num:'149', head:'Public Sector Equality Duty', text:'A public authority must, in exercising its functions, have due regard to the need to eliminate discrimination, advance equality of opportunity, and foster good relations between persons who share a relevant protected characteristic and those who do not.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2010/15/contents' },

  ];
});
