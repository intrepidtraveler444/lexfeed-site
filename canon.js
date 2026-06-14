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

  ];
});
