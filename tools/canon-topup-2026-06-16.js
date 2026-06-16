/* ════════════════════════════════════════════════════════════════════════
   LexFeed — EMERGENCY CANON TOP-UP  (2026-06-16)

   10 verified, genuinely-new landmark entries (6 cases + 4 statutes) to extend
   the drip bank past the existing k1–k12. Every link below was confirmed via
   web search (UKSC judgments on BAILII; Acts on legislation.gov.uk).

   HOW TO USE:
     1. Merge the canon-refill/2026-06-16 PR into `main` first.
     2. Edit `canon.js` on GitHub and paste the entries between the LAST entry
        and the closing `];`. (IDs are `m…` so they cannot clash with the
        agent's `k…` ids, whatever number it stopped at.)
     3. `node tools/verify-canon.mjs` → must end "0 fail", then commit.

   These are the array elements only — drop them straight into the canon array.
   ════════════════════════════════════════════════════════════════════════ */
module.exports = [

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

];
