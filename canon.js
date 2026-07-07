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
      { num:'7', head:'Failure of Commercial Organisations to Prevent Bribery', text:'A strict-liability corporate offence committed where a person associated with an organisation bribes another to benefit it — subject to the “adequate procedures” defence.' },
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
    body:"Governs the compulsory admission (“sectioning”), detention, treatment and after-care of people with mental disorder in England and Wales. A core statute for medical and public law, much amended by the Mental Health Act 2007.",
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
      { num:'7', head:'Interpretation', text:'Defines a “course of conduct” (conduct on at least two occasions) and provides that references to harassing a person include alarming them or causing distress.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/1997/40/contents' },

  // ── 10. Constitutional / EU — statute ──
  { id:'k10', type:'curated', cat:'statute', area:'Constitutional',
    title:'European Union (Withdrawal) Act 2018',
    body:"The principal statute giving domestic legal effect to Brexit. It repealed the European Communities Act 1972 and converted the body of EU law applying in the UK into a new category of “retained EU law”.",
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
      { num:'1', head:'Definition of “Domestic Abuse”', text:'Defines domestic abuse between persons aged 16 or over who are personally connected, covering physical or sexual abuse, violent or threatening behaviour, controlling or coercive behaviour, economic abuse, and psychological, emotional or other abuse.' },
      { num:'2', head:'Definition of “Personally Connected”', text:'Sets out the relationships that count — including partners, former partners, those who are or were married or in a civil partnership, and certain relatives.' },
      { num:'3', head:'Children as Victims', text:'A child who sees, hears or experiences the effects of domestic abuse, and is related to the perpetrator or victim, is also to be regarded as a victim of domestic abuse.' },
      { num:'71', head:'Consent to Serious Harm for Sexual Gratification', text:'Confirms that a person cannot consent to the infliction of serious harm for the purposes of sexual gratification, so such consent is not a defence to the resulting offence (the so-called “rough sex” defence).' },
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

  // ── Refill 2026-07-07 ──────────────────────────────────────────────────

  // ── Equity/Trusts — case ──
  { id:'r20260707a', type:'curated', cat:'case-law', area:'Equity',
    title:'FHR European Ventures LLP & Ors v Cedar Capital Partners LLC [2014] UKSC 45',
    court:'UK Supreme Court',
    facts:'FHR retained Cedar Capital as its agent to negotiate the acquisition of the Hotel Negresco in Monaco for €211.5m. Without FHR\'s knowledge Cedar also agreed with the vendor to receive a €10m commission on completion. FHR discovered the arrangement and claimed the commission from Cedar, arguing it was held on constructive trust as a bribe or secret commission paid to their agent in breach of fiduciary duty.',
    judgment:'The Supreme Court unanimously held that the €10m commission was held on constructive trust for FHR and must be disgorged with its traceable proceeds, overruling the earlier line of authority that such payments gave rise only to a personal claim in equity.',
    ratio:'Where an agent receives a bribe or secret commission in breach of their fiduciary duty to a principal, the agent holds those proceeds on constructive trust for the principal from the moment of receipt. The principal accordingly has a proprietary right enabling tracing into substitute assets and priority in insolvency, not merely a personal claim for an account of profits.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2014/45.html' },

  // ── Company — case ──
  { id:'r20260707b', type:'curated', cat:'case-law', area:'Company',
    title:'Sevilleja v Marex Financial Ltd [2020] UKSC 31',
    court:'UK Supreme Court',
    facts:'Marex Financial held a court judgment against two BVI companies for €944,000. Mr Sevilleja, their sole controller, then systematically stripped the companies of their assets before the judgment could be enforced, rendering them unable to satisfy the debt. Marex sued Sevilleja personally for the tort of inducing breach of the companies\' obligation. He argued that Marex\'s loss — being unable to recover the judgment debt — was "reflective" of the companies\' loss and so barred by the Prudential Assurance principle.',
    judgment:'The Supreme Court (4:1) held that the reflective loss principle does not apply to creditors: only shareholders are barred from claiming for loss that mirrors the company\'s loss. Marex\'s claim was not caught by the rule and could proceed.',
    ratio:'The reflective loss principle — that a shareholder cannot bring a personal claim for loss that is merely the reflection of a diminution in the company\'s assets — is a specific rule of company law grounded in the separate legal personality of the company and the structure of shareholder remedies. It extends no further than the shareholder context. A creditor who suffers separate loss because a wrongdoer has stripped a company of assets owed to it is not precluded by the reflective loss principle from bringing a personal tort claim.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2020/31.html' },

  // ── Employment — case ──
  { id:'r20260707c', type:'curated', cat:'case-law', area:'Employment',
    title:'Tillman v Egon Zehnder Ltd [2019] UKSC 32',
    court:'UK Supreme Court',
    facts:'Ms Tillman, a senior executive search consultant, had a post-termination non-compete clause preventing her from being "interested in" any competing business for six months. On leaving, she wished to join a rival firm. Egon Zehnder sought an injunction. Tillman argued the clause was void as an unreasonable restraint of trade because "interested in" was so widely drafted it would prevent her holding even a single share in a publicly listed competitor.',
    judgment:'The Supreme Court unanimously held that the objectionable words "interested in" could be severed from the clause by the blue pencil, leaving the remaining restriction on engagement and employment enforceable as a reasonable restraint of trade.',
    ratio:'The blue pencil severance doctrine permits the court to strike out objectionable words from a restraint of trade clause provided: the unenforceable part can be removed without adding to or varying the remainder; the severance does not change the overall character of the contract; and the remaining terms are reasonable and supported by adequate consideration. The courts take a somewhat more liberal approach to severance in employment contracts than the strict tests suggest, and need not simply sever whole clauses.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2019/32.html' },

  // ── Tort — case ──
  { id:'r20260707d', type:'curated', cat:'case-law', area:'Tort',
    title:'WM Morrison Supermarkets plc v Various Claimants [2020] UKSC 12',
    court:'UK Supreme Court',
    facts:'Mr Skelton, a Morrison\'s payroll auditor, was given an official warning by his employer. Harbouring a grievance, he deliberately posted the personal and financial data of nearly 100,000 Morrison employees online and sent copies to newspapers, for which he was later convicted and imprisoned. Around 5,500 affected employees claimed that Morrison\'s was vicariously liable for his data protection and misuse of private information torts.',
    judgment:'The Supreme Court unanimously allowed Morrison\'s appeal, holding it was not vicariously liable for Skelton\'s wrongdoing.',
    ratio:'Vicarious liability requires a sufficiently close connection between the employee\'s role and the wrongdoing: the employee\'s conduct must be a seamless extension of the performance of their duties. Where an employee\'s tortious acts are driven by personal motives entirely unrelated to the employer\'s business — here, personal vengeance — the wrongdoing falls outside the scope of employment even if the employment provided the opportunity. Proximity of time and place alone does not establish the necessary connection.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2020/12.html' },

  // ── Contract — case ──
  { id:'r20260707e', type:'curated', cat:'case-law', area:'Contract',
    title:'Morris-Garner & Anor v One Step (Support) Ltd [2018] UKSC 20',
    court:'UK Supreme Court',
    facts:'Two employees of One Step (Support) Ltd, which provided supported housing for vulnerable adults, left and set up a competing business in clear breach of post-employment non-compete covenants. One Step struggled to quantify its financial losses precisely and sought an award measured by the sum the parties would notionally have agreed as a licence fee to release the defendants from the covenants — so-called "negotiating damages" or Wrotham Park damages.',
    judgment:'The Supreme Court (3:2) held that negotiating damages were not available on these facts and remitted the case for assessment of conventional compensatory damages for the proven financial loss.',
    ratio:'Negotiating damages (an award based on the hypothetical release sum) are available for breach of contract only where the claimant has a legitimate interest in performance that cannot adequately be protected by compensatory damages — typically where performance itself had value to the claimant beyond mere financial gain. They are not a general substitute for compensatory damages where the claimant has not proved loss. The label "Wrotham Park damages" has generated confusion; the principled basis is gain-based or hybrid, not purely loss-based, and its availability depends on the nature of the contractual interest protected.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2018/20.html' },

  // ── Contract — case ──
  { id:'r20260707f', type:'curated', cat:'case-law', area:'Contract',
    title:'Pakistan International Airline Corporation v Times Travel (UK) Ltd [2021] UKSC 40',
    court:'UK Supreme Court',
    facts:'Times Travel, a small travel agency, was almost entirely dependent on PIAC for its business. PIAC presented it with a new contract requiring it to waive all past claims for unpaid commission and threatened to cut its ticket allocation and refuse renewal of the existing agreement unless it signed. Times Travel signed the new contract under protest but later sought to set aside the waiver clause on grounds of economic duress.',
    judgment:'The Supreme Court (4:1) dismissed Times Travel\'s appeal, holding there was no actionable economic duress.',
    ratio:'The doctrine of economic duress requires both illegitimate pressure and a causal link between that pressure and the claimant\'s entry into the contract. A threat to do something one is entirely lawfully entitled to do — including threatening not to renew a contract or to reduce a trading relationship — cannot constitute illegitimate pressure, even if it leaves the other party in a commercially desperate position. Superior bargaining power does not per se render a contract voidable. The rationale is that courts must respect freedom of contract and cannot routinely review the fairness of commercial bargains.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2021/40.html' },

  // ── Tort / Public Law — case ──
  { id:'r20260707g', type:'curated', cat:'case-law', area:'Tort',
    title:'Poole Borough Council v GN & Anor [2019] UKSC 25',
    court:'UK Supreme Court',
    facts:'Two children, GN and SR, suffered severe and prolonged abuse from a neighbouring family over several years. Despite multiple reports to Poole Borough Council — which had statutory powers and duties under the Children Act 1989 to protect children at risk — no meaningful protective action was taken. The children brought negligence claims against the Council, arguing its repeated failure to act created a duty of care.',
    judgment:'The Supreme Court unanimously dismissed the claims, holding the Council owed no duty of care in the circumstances.',
    ratio:'A public authority does not generally owe a private law duty of care merely because it has statutory powers or duties to protect members of the public. Creating a duty of care for failure to exercise a statutory function would require either: a voluntary assumption of responsibility to the individual claimant; or the authority having directly created the danger causing the harm. Statutory powers for the benefit of a class do not, without more, give rise to a duty to individual members of that class. Stovin v Wise [1996] is affirmed: omissions by public bodies, like omissions generally, do not ordinarily sound in negligence.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2019/25.html' },

  // ── Tort / Company — case ──
  { id:'r20260707h', type:'curated', cat:'case-law', area:'Tort',
    title:'Okpabi & Ors v Royal Dutch Shell Plc & Anor [2021] UKSC 3',
    court:'UK Supreme Court',
    facts:'Nigerian communities in the Niger Delta suffered severe oil pollution from pipelines and infrastructure operated by Shell Petroleum Development Company of Nigeria Ltd (SPDC). The claimants brought proceedings in England against SPDC\'s English-incorporated parent, Royal Dutch Shell (RDS), on the basis that RDS owed them a duty of care in respect of SPDC\'s activities by virtue of parent-level policies and standards that governed the Nigerian operations. The Court of Appeal had struck out the claim against RDS at the pleading stage.',
    judgment:'The Supreme Court (3:2) allowed the appeal, holding that the claimants had a real prospect of establishing a duty of care owed by RDS, and restored the claim against the parent.',
    ratio:'Whether a parent company owes a duty of care to those affected by its subsidiary\'s operations is determined by ordinary negligence principles, not any special parent-company rule. A duty may arise where the parent: actively took control of or supervised the relevant operations; or promulgated group-wide policies or standards that effectively governed how the subsidiary operated the relevant activities. The question is one of fact about the substance of the parent\'s intervention in the subsidiary\'s affairs. Claims should not be dismissed on summary grounds where relevant evidence about the group\'s operational structure has not been disclosed.',
    src:'BAILII', link:'https://www.bailii.org/uk/cases/UKSC/2021/3.html' },

  // ── Criminal — statute ──
  { id:'r20260707i', type:'curated', cat:'statute', area:'Criminal',
    title:'Proceeds of Crime Act 2002',
    body:"The principal UK statute for recovering criminal proceeds and criminalising money laundering. It created a powerful confiscation regime enabling courts to recover assets equivalent to the defendant's criminal benefit following conviction, introduced civil recovery independent of any criminal conviction, and consolidated the money laundering offences that bind businesses and professionals in the regulated sector.",
    sections:[
      { num:'6', head:'Making of Confiscation Order', text:'Where a defendant is convicted and the court finds they have a criminal lifestyle or have benefited from their criminal conduct, it must make a confiscation order for the recoverable amount, subject to available assets.' },
      { num:'76', head:'Criminal Lifestyle', text:'Defines when a defendant has a criminal lifestyle — principally where they are convicted of a listed offence or of four or more offences in a single proceeding that together generate at least £5,000 benefit.' },
      { num:'327', head:'Concealing Criminal Property', text:'An offence to conceal, disguise, convert, transfer or remove criminal property from England and Wales, knowing or suspecting it to be the proceeds of crime.' },
      { num:'328', head:'Arrangements Concerning Criminal Property', text:'An offence to enter into or facilitate an arrangement knowing or suspecting that it facilitates the acquisition, retention, use or control of criminal property by or on behalf of another.' },
      { num:'330', head:'Failure to Disclose (Regulated Sector)', text:'An offence committed where a person in the regulated sector knows or suspects money laundering is occurring and fails to make a disclosure to a nominated officer or the National Crime Agency as soon as reasonably practicable.' },
      { num:'Pt 5', head:'Civil Recovery', text:'Enables the enforcement authorities to recover property that is, or represents, the proceeds of unlawful conduct, through civil proceedings in the High Court — without the need for a criminal conviction.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/2002/29/contents' },

  // ── Employment — statute ──
  { id:'r20260707j', type:'curated', cat:'statute', area:'Employment',
    title:'Health and Safety at Work etc Act 1974',
    body:"The foundational statute governing workplace health and safety in Great Britain. It imposes broad general duties on employers, the self-employed, and others in control of premises to ensure, so far as is reasonably practicable, the health, safety and welfare of employees and others affected by their undertakings. It underpins both criminal prosecution by the Health and Safety Executive and civil claims for breach of statutory duty, and provides the framework for an extensive body of health and safety regulations.",
    sections:[
      { num:'2', head:'General Duties of Employers to Employees', text:'Every employer must, so far as is reasonably practicable, ensure the health, safety and welfare at work of all its employees, including safe systems of work, safe premises, adequate information and training, and a safe working environment.' },
      { num:'3', head:'Duties to Non-Employees', text:'Employers and self-employed persons must conduct their undertakings so as to ensure, so far as reasonably practicable, that persons not in their employment who may be affected are not exposed to risks to their health or safety.' },
      { num:'7', head:'Duties of Employees', text:'Every employee must take reasonable care for their own health and safety and that of others affected by their acts or omissions at work, and must cooperate with their employer in discharging statutory duties.' },
      { num:'37', head:'Offences by Bodies Corporate', text:'Where an offence under the Act is committed by a body corporate with the consent, connivance or neglect of a director, manager or similar officer, that individual as well as the company may be prosecuted and punished.' },
      { num:'47', head:'Civil Liability', text:'Breach of a duty imposed by health and safety regulations (made under the Act) may, unless the regulations otherwise provide, give rise to civil liability in an action for breach of statutory duty.' },
    ],
    src:'legislation.gov.uk', link:'https://www.legislation.gov.uk/ukpga/1974/37/contents' },

  ];
});
