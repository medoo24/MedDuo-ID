import json

with open("slides-site/app.js", "r", encoding="utf-8") as f:
    text = f.read()

ep3_slides = [
  {
    "type": "title",
    "title": "The Immortal Code — Dactylography, The 90% Silent DNA & Forensic Typing",
    "content": {
      "bullets": [
        "Faculty of Medicine, Ain Shams University · Chapter 3 (Pages 48–52)",
        "Episode 3 · Ain Shams Forensic Trilogy (The Finale)",
        "Presented by Dr. Tarek (Forensic Consultant) & Dr. Atef (Resident)",
        "Core Themes: Dactylography (1 in 64B), Dermis vs Epidermis, 90% Silent Genome, The 16 Loci & Amelogenin, Y-Chromosome in Gang Rape, Mitochondrial DNA, 6-Step Typing Pipeline, Definitive Paternity, and Chapter 3 Official Review Questions"
      ]
    },
    "images": [],
    "notes": "مرحباً بكم في الحلقة الثالثة والختامية من ثلاثية منهج طب عين شمس. نناقش في هذه الحلقة علم البصمات وتفاصيل البصمة الوراثية وتطبيقاتها القضائية."
  },
  {
    "type": "case",
    "title": "Case: The Diplomat's Villa Heist, Identical Twins & The Mixed Semen",
    "content": {
      "bullets": [
        "Incident: High-stakes nocturnal burglary, safe cracked with oxyacetylene torch, and violent assault at a Heliopolis residence",
        "Suspect 1 ('El-Prince'): Captured safe-cracker; deliberately burned fingertips with acid & razor cuts claiming 'my fingerprints are gone forever!'",
        "Biological Evidence 1: Mixed semen swab recovered from bedroom assault with DNA traces from two male perpetrators",
        "Biological Evidence 2: Single broken hair shaft on carpet lacking a root or follicular tissue (non-nucleated sample)",
        "The Twin Dilemma: Suspect 2 has an identical uniovular twin brother sharing 100% identical DNA; defense asserts reasonable doubt",
        "Disputed Paternity: A woman claims the deceased diplomat fathered her infant; heirs demand blood group testing (ABO) to exclude her"
      ]
    },
    "images": [
      {
        "url": "images/el_prince_illustration.jpg",
        "caption": "المتهم 'البرنس': شوه باطن أصابعه بالنار والموس لمسح البصمة، فوقع في فخ الندوب الدائمة وعلامات الإدانة الإضافية"
      }
    ],
    "notes": "هذه القضية تجمع كل معضلات البصمات والـ DNA، وتوضح لماذا تفصل البصمة بين التوائم، وكيف يفصل Y-chromosome خليط السائل المنوي."
  },
  {
    "type": "anatomy",
    "title": "Dactylography I: Papillary Ridges, 1 in 64 Billion & The Dual Shield",
    "content": {
      "bullets": [
        "Anatomical Foundation (Ain Shams Curriculum, Page 48):",
        "  • The skin of the palmar aspect of the hand is covered with elevated papillary ridges",
        "  • Ducts of sweat glands open upon the summits of these ridges (Sweat Pores)",
        "  • Secretions of sweat and sebum transfer a precise microscopic friction ridge impression onto touched surfaces",
        "Cosmic Uniqueness & Individuality:",
        "  • Chance of two individuals possessing identical fingerprints: 1 in 64 Billion (1 in 64,000,000,000)!",
        "  • Given a global human population of ~8 billion, duplication is practically and statistically impossible",
        "The Dual-Layer Biological Anchor:",
        "  • Ridges are structurally rooted in BOTH the Epidermis and the underlying Dermis",
        "  • Therefore: The fingerprint pattern remains fundamentally UNCHANGED throughout entire human life!"
      ]
    },
    "images": [
      {
        "url": "images/fingerprint_patterns_dna.jpg",
        "caption": "تشريح بصمات الأصابع: خطوط راحة اليد وفتحات مسام العرق، ونسبة الانفراد الكوني (1 في 64 مليار)"
      }
    ],
    "notes": "انتبه للأرقام: احتمال تطابق البصمات هو 1 في 64 مليار؛ وتواجدها في طبقتي البشرة والأدمة يجعلها ثابتة مدى الحياة."
  },
  {
    "type": "concept",
    "title": "Dactylography II: Mutilation Attempts, Scars & Pathological Atrophy",
    "content": {
      "bullets": [
        "Criminal Mutilation Attempts (Ain Shams Page 48 — Refuting 'El-Prince'):",
        "  • If Epidermis Only is destroyed: Ridge pattern regenerates perfectly with NO alteration!",
        "  • If Dermis is destroyed: Skin cannot regenerate ridges; heals by dense fibrous scar creating ADDITIONAL POINTS OF IDENTIFICATION!",
        "Pathological Atrophy & Alterations of Ridges:",
        "  • 1. Reversible Atrophy (ضمور مؤقت مسترد):",
        "    - Occurs in: Celiac Disease (حساسية القمح) and Dermatitis (التهابات وحساسية الجلد)",
        "    - Ridges re-emerge in full detail once the underlying disease resolves or gluten is eliminated",
        "  • 2. Permanent Impairment / Destruction (تلف دائم غير مسترد):",
        "    - Occurs in: Leprosy (الجذام) due to dermal nerve & deep tissue necrosis",
        "    - Occurs after: Exposure to Radiation (التعرض للإشعاع) destroying basal stem cells"
      ]
    },
    "images": [
      {
        "url": "images/fingerprint_patterns_dna.jpg",
        "caption": "محاولات طمس البصمات: تدمير البشرة يعود كما كان، وتدمير الأدمة يصنع ندبة تمييز إضافية؛ والضمور المؤقت في حساسية القمح والدائم في الجذام"
      }
    ],
    "notes": "سؤال شفوي متكرر: ما أثر حرق البشرة فقط مقارنة بالأدمة؟ وما هي الأمراض التي تسبب ضموراً مؤقتاً أو تلفاً دائماً للبصمات؟"
  },
  {
    "type": "concept",
    "title": "DNA Profiling: The Double Helix & The 90% Silent Genome Paradox",
    "content": {
      "bullets": [
        "Molecular Architecture (Ain Shams Curriculum, Pages 49–50):",
        "  • Deoxyribonucleic acid (DNA) represents the human genome located inside the cell nucleus",
        "  • Two sugar-phosphate strands wound into a right-handed Double Helix",
        "  • Strands bound by complementary base pairs: Adenine ↔ Thymine (2 H-bonds) & Cytosine ↔ Guanine (3 H-bonds)",
        "  • Long DNA ribbon folded onto histones into chromosomes carrying hundreds to thousands of genes",
        "The Forensic Paradox — Coding (10%) vs Silent (90%):",
        "  • Only 10% of DNA represents functional genes coding for specific protein synthesis",
        "  • 90% of DNA represents Silent Segments (inert intergenic regions with no known metabolic function)",
        "Why Silent Regions are the Golden Standard for Forensics:",
        "  • 1. Base sequence varies tremendously between different individuals (Extreme Polymorphism)",
        "  • 2. Constant throughout life in every nucleated cell of a given individual",
        "  • 3. Strictly inherited from biological parents to biological offspring"
      ]
    },
    "images": [
      {
        "url": "images/fingerprint_patterns_dna.jpg",
        "caption": "شريط الـ DNA الحلزوني المزدوج: 10% فقط جينات مشفرة، و90% مناطق صامتة متباينة وهي كنز الطب الشرعي"
      }
    ],
    "notes": "الـ 90% الصامتة هي أساس الاستعراف الشرعي لأنها شديدة التباين بين البشر، وثابتة للشخص نفسه، وتورث من الوالدين."
  },
  {
    "type": "concept",
    "title": "Genetic Probabilities & The Uniovular Identical Twins Paradox",
    "content": {
      "bullets": [
        "Mathematical Probabilities of Sharing Identical DNA Sequences (Page 50):",
        "  • Between Two Unrelated Persons: 1 in a Million Billion (1 in 10¹⁵) → Absolute individual singularity",
        "  • Among Full Biological Siblings (الأشقاء): 1 in Ten Thousand Billion (1 in 10¹³)",
        "The Sole Exception in Nature — Uniovular (Identical) Twins:",
        "  • Uniovular twins develop from the division of a single fertilized ovum",
        "  • Therefore: They share the EXACT SAME DNA (100% genomic identity)!",
        "Resolving The Twin Legal Dilemma:",
        "  • If DNA cannot distinguish identical twins in a crime scene... WHAT CAN?",
        "  • DACTYLOGRAPHY (FINGERPRINTS)!",
        "  • Fingerprint ridge development in utero is influenced by localized micro-environmental pressures & amniotic fluid dynamics",
        "  • Even identical uniovular twins have completely distinct, non-matching fingerprints!"
      ]
    },
    "images": [
      {
        "url": "images/fingerprint_patterns_dna.jpg",
        "caption": "مفارقة التوأم المتطابق: يشتركان في الـ DNA بنسبة 100%، بينما تفصل بينهما بصمات الأصابع الجلدية بشكل قاطع"
      }
    ],
    "notes": "التوأم أحادي الزيجوت هو الاستثناء الوحيد في تطابق الـ DNA الكامل؛ والفيصل الحاسم بينهما في مسرح الجريمة هو بصمات الأصابع."
  },
  {
    "type": "anatomy",
    "title": "The 16 Forensic Loci & The Amelogenin Sex Marker",
    "content": {
      "bullets": [
        "Definition of a Locus (Ain Shams Curriculum, Page 50):",
        "  • A defined physical location/segment on the DNA strand, situated in non-coding silent areas, standardized for analytical profiling",
        "The 16 Standard Forensic Loci:",
        "  • 15 Autosomal Loci: Located on intergenic regions of non-sex chromosomes; provide discrimination power exceeding 1 in 10¹⁵",
        "  • 1 Sex-Determining Locus: Located on the sex chromosomes (X and Y)",
        "The Amelogenin Locus (جين الأميلوجينين):",
        "  • Gene coding for tooth enamel protein, but with differing sequence lengths on the X and Y chromosomes",
        "  • Interpretation in Forensic Laboratory:",
        "    - Peak at X only (XX profile) → Definitive Female (أنثى)",
        "    - Peaks at both X and Y (XY profile) → Definitive Male (ذكر)",
        "  • Resolves sex identification from badly decomposed, fragmented, or charred remains!"
      ]
    },
    "images": [
      {
        "url": "images/cranial_race_identification.jpg",
        "caption": "المواقع الوراثية الـ 16 في الطب الشرعي: 15 موقعاً على كروموسومات جسدية وموقع الأميلوجينين لتحديد الجنس (X أو Y)"
      }
    ],
    "notes": "موقع Amelogenin هو المسؤول عن تحديد جنس صاحب العينة البيولوجية على الكروموسومات الجنسية."
  },
  {
    "type": "anatomy",
    "title": "Specialized DNA: Y-Chromosome (Gang Rape) vs mtDNA (Hair Shafts)",
    "content": {
      "bullets": [
        "1. Y-Chromosome Profiling (Paternal Lineage):",
        "  • Inherited exclusively from biological father to sons (Paternal DNA only)",
        "  • Linked with Male Surname (اسم وعائلة الذكور) across generations",
        "  • Forensic Super-Power: Untangles Multiple Rape / Gang Rape investigations (جرائم الاغتصاب الجماعي)!",
        "  • Isolates individual male haplogroups from complex mixed semen stains where female DNA is overwhelmingly predominant",
        "2. Mitochondrial DNA / mtDNA (Maternal Lineage):",
        "  • Located in mitochondria (cytoplasmic inclusion bodies, outside the nucleus)",
        "  • Found abundantly in Non-Nucleated Cells / Dead Tissues:",
        "    - Hair shafts without roots (ساق الشعرة بدون بصيلة)",
        "    - Nails (الأظافر)",
        "    - Mature Red Blood Cells (كرات الدم الحمراء الناضجة)",
        "  • Transmitted exclusively through the maternal ovum (sperm mitochondria in tail are discarded upon fertilization)",
        "  • Identifies Maternal Origin Only (النسب وسلالة الأم فقط)"
      ]
    },
    "images": [
      {
        "url": "images/fingerprint_patterns_dna.jpg",
        "caption": "كروموسوم Y (توارث أبوي، اسم العائلة، وفصل السائل المنوي المختلط) مقابل حمض الميتوكوندريا (سيتوبلازمي، الخلايا عديمة الأنوية، وتوارث أمومي)"
      }
    ],
    "notes": "كروموسوم Y يحل ألغاز الاغتصاب الجماعي ويرتبط بلقب العائلة؛ والـ mtDNA يحل ألغاز الشعر عديم الجذور ويورث من الأم فقط."
  },
  {
    "type": "concept",
    "title": "The 6 Steps of DNA Typing: From Biological Trace to Laser Camera",
    "content": {
      "bullets": [
        "The Official 6-Step Laboratory Pipeline (Ain Shams Curriculum, Pages 50–51):",
        "  • 1. Collection of Samples: Searched for in nucleated cells (semen, soft tissue, hair roots, WBCs). Handled under sterile precautions to prevent sample contamination",
        "  • 2. Preservation: Fresh biological samples preserved at suitable low temperature (-20°C / -80°C) to prevent enzymatic/bacterial degradation",
        "  • 3. DNA Extraction: Chemical isolation and purification of pristine DNA strands from cellular matrices",
        "  • 4. PCR Amplification: Polymerase Chain Reaction to multiply minute forensic traces, synthesizing millions of copies of target loci",
        "  • 5. Agar Gel Electrophoresis: Electric field separates amplified DNA fragments by molecular size and electrical charge",
        "  • 6. Interpretation & Laser Documentation: High-resolution laser camera connected to computer documents, compares, and stores band profiles"
      ]
    },
    "images": [
      {
        "url": "images/fingerprint_patterns_dna.jpg",
        "caption": "المراحل الست لفحص البصمة الوراثية: 1. الجمع، 2. الحفظ بالتبريد، 3. الاستخلاص، 4. تكبير الـ PCR، 5. الترحيل الكهربائي، 6. التوثيق بالليزر"
      }
    ],
    "notes": "سؤال تحريري سنوي: اذكر خطوات فحص البصمة الوراثية بالترتيب. احفظ السلسلة: Collection, Preservation, Extraction, PCR, Electrophoresis, Laser."
  },
  {
    "type": "concept",
    "title": "Medicolegal Applications: Disputed Paternity & Forensic Uses",
    "content": {
      "bullets": [
        "1. Identification or Elimination of Crime Suspects: In murder, armed robbery, and rape trials",
        "2. Disputed Paternity (قضايا إنكار وإثبات النسب — The Definitive Test):",
        "  • Classical Blood Groups (ABO / Rh) are Good Negative Tests ONLY: Can definitively exclude paternity, but CANNOT prove it!",
        "  • DNA Typing is a DEFINITIVE PATERNITY TEST (both exclusionary and affirmatively confirmatory): Child inherits 50% of loci from biological mother and 50% from biological father!",
        "3. Identification of Body Remains & Disaster Victim ID (DVI): In aircraft crashes, train explosions, putrefaction, and charred remains",
        "4. Identification of Sex & Species: Polymorphism in non-coding sequences of sex chromosomes (Amelogenin) and human-specific satellite repeats"
      ]
    },
    "images": [
      {
        "url": "images/charred_skull_forensics.jpg",
        "caption": "التطبيقات القضائية للبصمة الوراثية: استعراف المشتبه بهم، قضايا النسب كاختبار قطعي إيجابي، واستعراف الأشلاء والكوارث الجماعية"
      }
    ],
    "notes": "لماذا يعد الـ DNA اختباراً قطعياً للنسب بينما فصائل الدم اختبارات سلبية فقط؟ لأن فصائل الدم تنفي فقط، بينما الـ DNA ينفي ويثبت بنسبة 99.999%."
  },
  {
    "type": "summary",
    "title": "Official Chapter 3 Review Questions: Model Answers (Page 52)",
    "content": {
      "bullets": [
        "Q1 (Age 16y Findings): Lateral epicondyle + upper ulna + lesser trochanter unite with shafts (male) / Distal metacarpals unite (female)",
        "Q2 (Age 18y Medico-Legal Importance): Legal marriage, consent in rape, voting, civil service, driving license, military recruitment, FULL criminal responsibility & adult court",
        "Q3 (Dactylography Account): Ridges with sweat pores; 1 in 64B; epidermis + dermis; celiac/dermatitis reversible; leprosy/radiation permanent; dermal scars add points of ID",
        "Q4 (Steps of DNA Typing): 1. Collection (nucleated, prevent contamination), 2. Preservation, 3. Extraction, 4. PCR, 5. Electrophoresis, 6. Laser documentation",
        "Q5 (Medicolegal Applications): Suspect identification/elimination, Definitive paternity test, Body remains / DVI, Sex & species determination"
      ]
    },
    "images": [
      {
        "url": "images/dr_shereen_framework.jpg",
        "caption": "نموذج الإجابة الرسمي للأسئلة الخمسة بنهاية الباب الثالث في كتاب قسم الطب الشرعي بجامعة عين شمس"
      }
    ],
    "notes": "الأسئلة الخمسة بنهاية الفصل هي أسئلة امتحانات الفاينال المجمعة لكتاب قسم الطب الشرعي بعين شمس."
  }
]

old_ep3 = '''  {
    "title": "Prints & DNA Profiling: Dactylography, Forensic Loci & Typing",
    "description": "Dactylography (1 in 64B, epidermis vs dermis), DNA double helix, 90% silent regions, 16 forensic loci, Amelogenin sex marker, Y-chromosome, mtDNA, 6 steps of typing, and paternity.",
    "slides": [
      {
        "type": "title",
        "title": "Prints & DNA Profiling — Dactylography, Forensic Loci & Typing",
        "content": {
          "bullets": [
            "Faculty of Medicine, Ain Shams University · Chapter 3 (Pages 48–52)",
            "Episode 3 · Ain Shams Forensic Trilogy",
            "Presented by Dr. Tarek & Dr. Atef",
            "Full slide deck coming up next in sequence!"
          ]
        },
        "images": [
          {
            "url": "images/fingerprint_patterns_dna.jpg",
            "caption": "البصمات والشفرة الوراثية: 16 موقعاً جينياً وموقع الأميلوجينين"
          }
        ],
        "notes": "الحلقة الثالثة: سيتم استكمال شرائحها بالتفصيل في الخطوة القادمة."
      }
    ]
  }'''

new_ep3 = f'''  {{
    "title": "Prints & DNA Profiling: Dactylography, Forensic Loci & Typing",
    "description": "Dactylography (1 in 64B, epidermis vs dermis), DNA double helix, 90% silent regions, 16 forensic loci, Amelogenin sex marker, Y-chromosome, mtDNA, 6 steps of typing, and paternity.",
    "slides": {json.dumps(ep3_slides, ensure_ascii=False, indent=6)}
  }}'''

if old_ep3 in text:
    text = text.replace(old_ep3, new_ep3)
    with open("slides-site/app.js", "w", encoding="utf-8") as f:
        f.write(text)
    print("SUCCESS: Episode 3 slides added to app.js!")
else:
    print("ERROR: old_ep3 not found in app.js")
