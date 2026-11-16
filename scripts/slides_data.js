// Slides data for MedDuo Slides Site — with authentic Egyptian medical mnemonics & rich illustrations

const SLIDES_DATA = [
  {
    "title": "The 18-Year Secret: Bone Age Estimation",
    "description": "Dr. Shereen's 4-geometry framework, intrauterine centers ('Ca-T-Ra'), elbow scissors, milestone ages (18, 20, 21, 23y), and the Female Law.",
    "slides": [
      {
        "type": "title",
        "title": "The 18-Year Secret — Bone Age Estimation",
        "content": {
          "bullets": [
            "Episode 1 · The Bone Code",
            "MedDuo Forensic Medicine Podcast",
            "Dr. Shereen's 4-Geometry Framework & High-Yield Mnemonics",
            "Presented by Dr. Tarek & Dr. Atef"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "case",
        "title": "Case: The 'El-Prince' Suspect & Juvenile Dilemma",
        "content": {
          "bullets": [
            "Suspect 'El-Prince' caught red-handed in armed robbery & murder",
            "Defense lawyer presents birth certificate claiming age 15 years 9 months",
            "Demands referral to juvenile court (evading adult life sentence or execution)",
            "Prosecution suspects forged certificate (suspect exhibits adult facial features & physique)",
            "Court orders X-rays of elbow, wrist, and knee to determine true biological age"
          ]
        },
        "images": [
          {
            "url": "images/el_prince_illustration.jpg",
            "caption": "المتهم \"البرنس\": بشنب ودقن وبنطلون مسقط في الكلبشات يدعي أنه حدث 15 سنة و9 شهور!"
          }
        ],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Dr. Shereen's Framework: The 4 Geometries of Age Estimation",
        "content": {
          "bullets": [
            "1. Small Circle (الدايرة الصغيرة): Ossification centers in cartilage",
            "2. Big Circle (الدايرة الكبيرة): Skull sutures, fontanelles, and dentition",
            "3. Vertical Line (الخط بالطول): Medullary cavity expansion (Bone marrow growth):",
            "   • Reaches surgical neck at age 30 years",
            "   • Reaches anatomical neck at age 33 years ('30 جراحي و 33 تشريحي')",
            "4. Horizontal Line (الخط بالعرض): Epiphyseal line union (Growth cessation)"
          ]
        },
        "images": [
          {
            "url": "images/dr_shereen_framework.jpg",
            "caption": "طريقة د. شيرين: الأشكال الهندسية الـ 4 لتقدير السن (دايرة صغيرة، دايرة كبيرة، خط بالطول، خط بالعرض)"
          }
        ],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Intrauterine & Infancy Ossification Centers",
        "content": {
          "headers": [
            "Age / Period",
            "Ossification Center",
            "Clinical / Mnemonic Key"
          ],
          "rows": [
            [
              "5 Months I.U.",
              "Calcaneus (كعب)",
              "Letter 'C' closed looks like Arabic '5' (قطرة)"
            ],
            [
              "7 Months I.U.",
              "Talus (كاحل)",
              "Letter 'T' resembles '7', directly beneath tibia"
            ],
            [
              "8 Months I.U.",
              "Lower end of Femur",
              "Letter 'F' inverted looks like '8'"
            ],
            [
              "9 Months (Birth)",
              "Knee & Cuboid (طماعة)",
              "'Nine = Knee': Lower femur + Upper tibia + Cuboid"
            ],
            [
              "1 Year (واحد فوق)",
              "Upper Humerus & Upper Femur",
              "Infancy rule: 'One above' (shoulder & hip)"
            ],
            [
              "2 Years (اتنين تحت)",
              "Lower Tibia/Fibula & Radius",
              "Infancy rule: 'Two below' (ankle & wrist, fills 2/3 at 7y)"
            ]
          ]
        },
        "images": [
          {
            "url": "images/ossification_centers_diagram.jpg",
            "caption": "مخطط مراكز التعظم: داخل الرحم \"قطرة\" (الكعب 5، تالوس 7، فخذ 8، ركبة 9 وكيوبويد) و\"واحد فوق واتنين تحت\""
          }
        ],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Elbow Joint: Scissors Rule & Union Milestones",
        "content": {
          "bullets": [
            "Ossification Centers — Scissors Rule (6 & 12 years):",
            "  • Upper radius at 6y; scissors with 12y (same arm carries same number)",
            "  • Lower ulna at 6y (half scissors below)",
            "Epiphyseal Union (Early fusion joint):",
            "  • Capitulum & Trochlea: 14 months ('قمر 14')",
            "  • Trochlea + Capitulum fuse with shaft: 15 years ('سن الجمباز')",
            "  • Lateral epicondyle: 16-17 years",
            "  • Medial epicondyle: 17-18 years ('2 L rule' with Lesser trochanter)"
          ]
        },
        "images": [
          {
            "url": "images/upper_limb_epiphysis_diagram.jpg",
            "caption": "مقص الكوع والطرف العلوي: قمر 14، سن الجمباز 15، مقص 16 و 17، والساعة والشنطة 20 سنة"
          }
        ],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Milestone Ages & Union Timelines",
        "content": {
          "headers": [
            "Milestone Age",
            "Skeletal Epiphyseal Union",
            "Forensic & Legal Significance"
          ],
          "rows": [
            [
              "18 Years (كفك 18)",
              "Hand metacarpals, head of femur, lower tibia/fibula",
              "Full criminal responsibility (Adult court trial), military draft, voting, female consent"
            ],
            [
              "20 Years (الساعة والشنطة)",
              "Lower radius/ulna (watch) + Upper humerus (bag)",
              "Approaching complete limb bone maturity"
            ],
            [
              "21 Years (سن التخرج)",
              "Knee (Lower femur + Upper tibia) + Ischial tuberosity",
              "Full civil rights (الأهلية المدنية), inheritance management, end of legal guardianship"
            ],
            [
              "23-25 Years (تخرج طب)",
              "Medial clavicle, iliac crest, basilar suture",
              "Last bone in human body to fuse (Clavicle up to 25-28y)"
            ]
          ]
        },
        "images": [
          {
            "url": "images/lower_limb_epiphysis_diagram.jpg",
            "caption": "محطات سن التخرج: كفك 18، ركبة وقعدة بيوت 21 (كليات تانية)، والترقوة وقاع الجمجمة 23 (طالب طب)"
          }
        ],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "The Forensic Golden Rule: The Female Law of Bone Aging",
        "content": {
          "bullets": [
            "Core Forensic Law: 'الفيميل تسبق الميل بسنتين في الهيفات، لكن متسبقوش في الدواير!'",
            "1. Epiphyseal Union & Lengths (الهيفات):",
            "   • Females precede males by 2 years in epiphyseal appearance and union",
            "   • Female Age = Male Age - 2 years (e.g. Knee fuses at 19y in females vs 21y in males)",
            "2. Cranial, Dental & Medullary Circles (الدواير):",
            "   • Skull sutures, fontanelles, dentition, and medullary cavity are identical (Female = Male)",
            "Critical Trap: Never apply the 2-year difference to cranial sutures or dental eruption!"
          ]
        },
        "images": [
          {
            "url": "images/pelvis_age_female_rule.jpg",
            "caption": "القاعدة الشرعية: الفيميل تسبق الميل بسنتين في الهيفات (الأطوال والمشاشات)، ومتسبقوش في الدواير!"
          }
        ],
        "notes": ""
      },
      {
        "type": "resolution",
        "title": "Case Resolution: How Skeletal Radiographs Unmasked 'El-Prince'",
        "content": {
          "bullets": [
            "Elbow X-ray: Lateral epicondyle completely fused (> 16-17y)",
            "Hand & Wrist X-ray: Metacarpals and distal radius completely fused (> 18y)",
            "Knee X-ray: Epiphyseal growth plate open and unfused (< 21y)",
            "Forensic Verdict:",
            "  • Defense claim of 15y 9m is medically refuted — birth certificate is forged",
            "  • Suspect is strictly between 18 and 21 years old",
            "  • Subject to adult criminal jurisdiction with full responsibility — juvenile motion denied"
          ]
        },
        "images": [
          {
            "url": "images/el_prince_realistic.jpg",
            "caption": "المتهم \"البرنس\" في جلسة التحقيق بالنيابة بعد ثبوت مسؤوليته الجنائية الكاملة"
          },
          {
            "url": "images/knee_xray_growth_plate.jpg",
            "caption": "أشعة ركبة البرنس: خط المشاشة مفتوح (تحت 21 سنة) بينما رسغه وكوعه ملتحمان تماماً (فوق 18 سنة)"
          }
        ],
        "notes": ""
      },
      {
        "type": "summary",
        "title": "Episode 1 — Master Bone Age & Union Reference Table",
        "content": {
          "headers": [
            "Anatomical Site",
            "Ossification Center",
            "Epiphyseal Union Age",
            "Key Mnemonic"
          ],
          "rows": [
            [
              "Intrauterine",
              "Calcaneus (5m), Talus (7m), Cuboid (9m)",
              "—",
              "قطرة (Ca - T - Ra) & Nine = Knee"
            ],
            [
              "Elbow",
              "Capitulum (1y), Radius (6y), Ulna (6y)",
              "16 - 17 years",
              "قمر 14 & سن الجمباز 15"
            ],
            [
              "Hand & Wrist",
              "Carpals (infancy), Radius (2y)",
              "18 years (Metacarpals), 20y (Radius/Ulna)",
              "كفك 18 & الساعة والشنطة 20"
            ],
            [
              "Knee",
              "Lower femur (8-9m), Upper tibia (9m)",
              "21 years",
              "سن تخرج الكليات التانية والنوادي"
            ],
            [
              "Clavicle & Pelvis",
              "Iliac crest (puberty), Clavicle",
              "23 years (to 28y medial clavicle)",
              "سن تخرج طالب الطب ومسؤولية الكتاف"
            ]
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "quiz",
        "title": "Board Review Question: Bone Age Estimation",
        "content": {
          "bullets": [
            "Question: A male suspect's X-ray shows complete union of the distal metacarpals, head of femur, but an open epiphyseal line at the knee joint. What is his legal status under Egyptian Law?",
            "Options:",
            "  A) Minor under 15 — Juvenile court mandatory",
            "  B) Juvenile between 15-18 — Reduced juvenile penalties",
            "  C) Adult above 18 and under 21 — Full criminal responsibility in Adult Court (Correct)",
            "  D) Full civil capacity above 21 — Guardianship terminated",
            "Explanation: Complete union of metacarpals proves age ≥ 18y (adult criminal jurisdiction), while open knee confirms age < 21y."
          ]
        },
        "images": [],
        "notes": ""
      }
    ]
  },
  {
    "title": "The Skull: Sex and Age Determination",
    "description": "Skull sexual dimorphism, birth circumference (13\"), fontanelles (3-finger rule), suture clocks (Metopic, Basilar, S-C-L 30-40-50 & 60y obliteration), and mandible aging.",
    "slides": [
      {
        "type": "title",
        "title": "The Skull: Sex & Age Determination",
        "content": {
          "bullets": [
            "Episode 2 · The Bone Code",
            "MedDuo Forensic Medicine Podcast",
            "The 5 Dimorphic Features, Fontanelles & Cranial Suture Timelines",
            "Presented by Dr. Tarek & Dr. Atef"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "case",
        "title": "Case: The Incinerated Body in the Abandoned Warehouse",
        "content": {
          "bullets": [
            "Charred skeleton discovered under debris of an incinerated warehouse near Cairo",
            "Soft tissues, facial features, and fingerprints completely destroyed by fire",
            "Missing persons in area: Mr. Fawzy (male, 45y) and Ms. Rania (female, 28y)",
            "Forensic challenge: Determine sex and biological age from skull and mandible alone"
          ]
        },
        "images": [
          {
            "url": "images/charred_skull_forensics.jpg",
            "caption": "جمجمة المشرحة المتفحمة في حريق المخزن مع أدلة وفهارس القياس الجنائي"
          }
        ],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Skull Sex Differences: The 5 Golden Diagnostic Marks",
        "content": {
          "headers": [
            "Anatomical Feature",
            "Male Skull",
            "Female Skull"
          ],
          "rows": [
            [
              "Size, Weight & Build",
              "Bigger, heavier, rugged, prominent ridges",
              "Smaller, lighter, smooth, delicate"
            ],
            [
              "Supra-orbital Ridges",
              "Prominent, heavy bony brow ridge",
              "Smooth, less marked, flat"
            ],
            [
              "Fronto-nasal Junction",
              "Angular, sharp, distinct notch",
              "Smooth, graceful curve"
            ],
            [
              "Mastoid & Styloid",
              "Large, blunt, bulky (powerful neck muscles)",
              "Small, slender, pointed"
            ],
            [
              "Occipital Condyles",
              "Long, narrow articulating surfaces",
              "Short, broad articulating surfaces"
            ]
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "timeline",
        "title": "Infant Cranium: Birth Circumference (13\") & Fontanelle Closure",
        "content": {
          "bullets": [
            "Birth Head Circumference: 13 inches ('رقم النحس 13')",
            "Posterior Fontanelle Closure: At birth in full term or 2-3 months post-natal",
            "Anterior Fontanelle Closure: 18 months (1.5 years):",
            "  • The 3-Finger Rule: Fits 3 fingers at birth",
            "  • 6 months: Decreases to 2 fingers",
            "  • 12 months: Decreases to 1 finger",
            "  • 18 months: Completely closed — zero finger admission"
          ]
        },
        "images": [
          {
            "url": "images/skull_sutures_diagram.jpg",
            "caption": "محيط رأس الوليد (13 بوصة)، اليافوخ وقاعدة الـ 3 صوابع، وساعة درزات القبة S-C-L (30-40-50)"
          }
        ],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Cranial Suture Timelines: Metopic, Basilar & S-C-L (30-40-50)",
        "content": {
          "headers": [
            "Suture Name",
            "Anatomical Location",
            "Closure Age Range",
            "Egyptian Mnemonic"
          ],
          "rows": [
            [
              "Metopic Suture",
              "Frontal midline",
              "2 - 3 years",
              "المكتوب على الجبين: الحياة، الموت، الرزق (3)"
            ],
            [
              "Basilar Suture",
              "Basi-occiput to Basi-sphenoid",
              "18 - 21 / 23 years",
              "سن تخرج طالب الطب الغلبان (23 سنة)"
            ],
            [
              "Sagittal (S)",
              "Parietal midline",
              "30 - 35 years",
              "سن الترشح لمجلس الشعب (30 سنة)"
            ],
            [
              "Coronal (C)",
              "Frontal-parietal junction",
              "35 - 40 years",
              "التاج.. نزول الوحي والقرآن (40 سنة)"
            ],
            [
              "Lambdoid (L)",
              "Parietal-occipital junction",
              "45 - 50 years",
              "روح نام.. داخل على المعاش (50 سنة)"
            ],
            [
              "All Sutures",
              "Complete obliteration",
              "60 years",
              "محو كامل لجميع الدرزات (سن المعاش)"
            ]
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Mandible Morphology & The Female Law in Cranial Sutures",
        "content": {
          "bullets": [
            "Mandibular Angle Lifecycle:",
            "  • Infancy / Childhood: Wide obtuse angle (~140°) due to absent teeth",
            "  • Young Adult: Right angle (~110-120°) with strong muscular chewing and full dentition",
            "  • Elderly / Senile: Reverts to wide obtuse angle (~140°) following tooth loss & alveolar resorption",
            "The Female Law in Skull Sutures:",
            "  • The skull is a 'Circle' (دايرة) — Females DO NOT precede males in suture closure (Female = Male)!",
            "  • Suture closure ages are identical in both sexes."
          ]
        },
        "images": [
          {
            "url": "images/mandible_age_diagram.jpg",
            "caption": "تحولات زاوية الفك السفلي: منفرجة 140° في الطفل ➔ قائمة 90-110° في البالغ ➔ منفرجة 140° في العجوز"
          }
        ],
        "notes": ""
      },
      {
        "type": "resolution",
        "title": "Case Resolution: Identifying the Incinerated Skull",
        "content": {
          "bullets": [
            "Sex Identification:",
            "  • Heavy rugged vault, prominent supra-orbital ridges, large bulky mastoid processes",
            "  • Definitively MALE — Ms. Rania (28y) conclusively excluded",
            "Age Estimation:",
            "  • Sagittal suture completely obliterated endocranially (> 35y)",
            "  • Coronal suture progressing through mid-closure (~40-45y)",
            "  • Lambdoid suture open and patent (< 50y); Mandibular angle ~115° (adult)",
            "Conclusion: Victim is male aged 40-45 years — Conclusively Mr. Fawzy (45y)"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "summary",
        "title": "Episode 2 — Key High-Yield Points",
        "content": {
          "bullets": [
            "Sex accuracy from skull alone: ~70-80% (secondary to pelvis)",
            "Suture closure starts ENDOCRANIALLY and progresses ECTOCRANIALLY",
            "Closure sequence: Metopic (2-3y) ➔ Basilar (21-23y) ➔ S-C-L (30, 40, 50y) ➔ Obliteration (60y)",
            "Fontanelle rule: Posterior at birth / 2-3m, Anterior at 18m (3-finger decrement)",
            "Female Rule: Sutures belong to 'الدواير' — No 2-year sex difference!"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "quiz",
        "title": "Board Review Question: Skull Suture & Sex Identification",
        "content": {
          "bullets": [
            "Question: An unidentified skull exhibits prominent supraorbital ridges, large mastoid processes, completely obliterated sagittal suture, half-closed coronal suture, and patent lambdoid suture. What is the most probable profile?",
            "Options:",
            "  A) Female aged 25-30 years",
            "  B) Male aged 40-45 years (Correct)",
            "  C) Male aged 60-65 years",
            "  D) Female aged 40-45 years",
            "Explanation: Prominent brow and mastoid establish male sex. Complete sagittal (30-35y) + partial coronal (40y) + open lambdoid (< 50y) places age precisely at 40-45 years."
          ]
        },
        "images": [],
        "notes": ""
      }
    ]
  },
  {
    "title": "The Pelvis: Gold Standard for Sex and Age Determination",
    "description": "Pelvic functional biomechanics, 6 diagnostic sex features (95% accuracy), and the pelvic age clock (Ramus 6y, Acetabulum 15y, Tuberosity 21y, Crest 23y).",
    "slides": [
      {
        "type": "title",
        "title": "The Pelvis: Gold Standard for Sex & Age Determination",
        "content": {
          "bullets": [
            "Episode 3 · The Bone Code",
            "MedDuo Forensic Medicine Podcast",
            "The 6 Skeletal Keys (95% Accuracy) & The Pelvic Age Clock",
            "Presented by Dr. Tarek & Dr. Atef"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "case",
        "title": "Case: The Submerged Nile Sack",
        "content": {
          "bullets": [
            "Weighted burlap sack recovered by river police from the bottom of the Nile in Giza",
            "Contains skeleton submerged > 18 months in fresh water; soft tissues completely vanished",
            "Skull fragmented and unreadable by river currents and rock impacts; pelvis 100% intact",
            "Missing persons: Haj Radwan (livestock trader, 55y) vs Ms. Seham (nurse, 29y)"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Pelvic Biomechanics: Why the Pelvis Yields 95% Diagnostic Accuracy",
        "content": {
          "bullets": [
            "Functional evolutionary adaptation:",
            "  • Male pelvis: Exclusively adapted for bipedal locomotion and heavy weight-bearing (compact, narrow, robust)",
            "  • Female pelvis: Adapted to create a functional birth canal (wide, shallow, spacious)",
            "Pelvis alone provides 95% sexing accuracy (highest of any single skeletal element in the human body)"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Pelvic Sex Differences: The 6 Diagnostic Skeletal Keys",
        "content": {
          "headers": [
            "Anatomical Feature",
            "Female Pelvis",
            "Male Pelvis"
          ],
          "rows": [
            [
              "Subpubic Angle",
              "Obtuse 90° - 100° (L-shape between thumb & index)",
              "Acute 60° - 70° (V-sign with fingers)"
            ],
            [
              "Greater Sciatic Notch",
              "Wide, shallow, spacious (> 60° angle)",
              "Narrow, deep, acute (< 30° angle)"
            ],
            [
              "Pelvic Inlet",
              "Round to broad oval, spacious birth canal",
              "Heart-shaped (playing card heart) due to sacral promontory"
            ],
            [
              "Sacrum",
              "Short, broad, markedly curved backwards",
              "Long, narrow, relatively flat"
            ],
            [
              "Acetabulum",
              "Small, shallow (adapted to female femoral head)",
              "Large, deep, heavily rimmed"
            ],
            [
              "Pelvic Cavity",
              "Cylindrical, wide, shallow basin",
              "Funnel-shaped, deep, conical"
            ]
          ]
        },
        "images": [
          {
            "url": "images/pelvis_male_vs_female.jpg",
            "caption": "المقارنة الجنائية بين حوض الذكر والأنثى (الزاوية تحت العانة، الثلمة الوركية، ومدخل الحوض)"
          }
        ],
        "notes": ""
      },
      {
        "type": "table",
        "title": "The Pelvic Age Clock: Primary School, Gymnastics & Graduation Ages",
        "content": {
          "headers": [
            "Age Marker",
            "Pelvic Fusion Site",
            "Egyptian Forensic Mnemonic"
          ],
          "rows": [
            [
              "6 Years",
              "Pubic Ramus with Ischial Ramus",
              "سن دخول أولى ابتدائي والمشي للمدرسة"
            ],
            [
              "15 Years",
              "Acetabulum (Triradiate Y-cartilage)",
              "سن الجمباز التحتاني (مع سن الجمباز الفوقاني في الكوع)"
            ],
            [
              "21 Years",
              "Ischial Tuberosity",
              "سن تخرج الكليات التانية وقعدة البيوت (تحمل وزن الجلوس)"
            ],
            [
              "23 Years",
              "Iliac Crest ( عرف الحرقفة )",
              "سن تخرج طالب الطب ومسؤولية الكتاف"
            ],
            [
              "20 - 50 Years",
              "Pubic Symphyseal Face (Todd phases)",
              "تموجات أفقية في العشرينات ➔ حافة ملساء في التلاتينات ➔ تآكل بعد الـ 40"
            ]
          ]
        },
        "images": [
          {
            "url": "images/pelvis_age_female_rule.jpg",
            "caption": "ساعة الحوض العمرية: أولى ابتدائي 6 سنين، سن الجمباز 15، قعدة البيوت 21، وعرف الحرقفة 23 سنة"
          }
        ],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Pubic Symphysis Metamorphosis (Todd & Suchey-Brooks Phases)",
        "content": {
          "bullets": [
            "The pubic symphyseal face undergoes systematic decade-by-decade degeneration:",
            "  • Phase 1 (18-20y): Billowing ridges and furrows; no distinct margin",
            "  • Phase 2 (20-29y): Furrows begin filling with fine bone; dorsal margin appears",
            "  • Phase 3 (30-39y): Continuous complete oval rim; surface smooths down",
            "  • Phase 4 (40-49y): Rim begins breaking down; bony osteophytic lipping",
            "  • Phase 5 (50+y): Surface irregular, erratic depression, porous and eroded"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "resolution",
        "title": "Case Resolution: Decoding the Nile Sack",
        "content": {
          "bullets": [
            "Pelvic Sexing: Subpubic angle 95° (obtuse), sciatic notch wide and shallow, inlet wide oval",
            "Definitively FEMALE (95% confidence) — Haj Radwan (55y male) excluded immediately",
            "Pelvic Age Clock: Acetabulum, Ischial tuberosity, and Iliac crest completely fused (> 23y)",
            "Pubic symphysis shows Todd Phase 2/3 (smooth face with complete oval rim, ~28-30y)",
            "Verdict: Victim is female aged 28-31 years — Matches missing nurse Seham (29y) perfectly"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "summary",
        "title": "Episode 3 — High-Yield Review & The Female Rule in Pelvis",
        "content": {
          "bullets": [
            "Pelvis accuracy: 95% for sex determination (Subpubic angle + Sciatic notch are top 2)",
            "Age clock: Ramus (6y) ➔ Acetabulum (15y) ➔ Tuberosity (21y) ➔ Crest (23y)",
            "Female Law in Pelvis: Epiphyseal fusion of pelvic crest and tuberosity occurs ~2 years earlier in females!",
            "Pubic symphyseal face is the single most reliable pelvic marker for adult age (20 to 50y)"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "quiz",
        "title": "Board Review Question: Pelvic Sex & Age Determination",
        "content": {
          "bullets": [
            "Question: An intact human pelvis shows a subpubic angle of 95°, wide greater sciatic notch, complete fusion of the iliac crest, and early rim formation on the pubic symphysis. What is the profile?",
            "Options:",
            "  A) Male aged 15-18 years",
            "  B) Female aged 25-30 years (Correct)",
            "  C) Male aged 50-60 years",
            "  D) Female aged 14-16 years",
            "Explanation: Subpubic angle of 95° is definitively female. Complete crest fusion confirms age > 21-23y, and early symphyseal rim matches late 20s."
          ]
        },
        "images": [],
        "notes": ""
      }
    ]
  },
  {
    "title": "Sternum & Hyoid: Witnesses to Strangulation",
    "description": "Ashley's 1:2 rule for sternal sexing, the '40 - 60 - 40' age rule, and hyoid fracture biomechanics (throttling vs hanging).",
    "slides": [
      {
        "type": "title",
        "title": "Sternum & Hyoid: Silent Witnesses to Strangulation",
        "content": {
          "bullets": [
            "Episode 4 · The Bone Code",
            "MedDuo Forensic Medicine Podcast",
            "Ashley's Sternal Rule, The '40 - 60 - 40' Clock, & Hyoid Biomechanics",
            "Presented by Dr. Tarek & Dr. Atef"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "case",
        "title": "Case: The Millionaire's Staged Hanging",
        "content": {
          "bullets": [
            "Prominent 52-year-old businessman found hanging from ceiling fan in locked bedroom",
            "Family claims suicide over financial losses; health inspector writes 'Suicidal Hanging'",
            "Prosecutor notices feet touching floor, no overturned chair, faint neck marks under ligature",
            "Forensic autopsy ordered to determine: Real suicidal hanging vs manual strangulation (Throttling) staged post-mortem"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Sternum Sex Determination: Ashley's 1:2 Rule",
        "content": {
          "headers": [
            "Feature / Metric",
            "Male Sternum",
            "Female Sternum"
          ],
          "rows": [
            [
              "Body to Manubrium Ratio",
              "Body length > 2 × Manubrium length",
              "Body length < 2 × Manubrium length"
            ],
            [
              "Diagnostic Formula",
              "Body / Manubrium > 2.0",
              "Body / Manubrium < 2.0"
            ],
            [
              "Combined Sternal Length",
              "> 140 mm in adult males",
              "< 130 mm in adult females"
            ],
            [
              "Morphology",
              "Longer, narrower body",
              "Shorter, wider body"
            ]
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "table",
        "title": "The '40 - 60 - 40' Master Rule: Hyoid & Sternum Age Clock",
        "content": {
          "headers": [
            "Anatomical Joint",
            "Skeletal Region",
            "Fusion Age",
            "Mnemonic / Sign"
          ],
          "rows": [
            [
              "Hyoid Greater Cornu with Body",
              "Neck / Throat (فوق)",
              "40 Years",
              "حط إيدك على رقبتك: يتحول لعظم هش قابل للكسر"
            ],
            [
              "Manubrium with Sternal Body",
              "Upper Chest (في النص)",
              "60 Years",
              "سن المعاش الحكومي (أعلى عظمة القص)"
            ],
            [
              "Xiphoid with Sternal Body",
              "Mid Chest (تحت)",
              "40 Years",
              "النتوء الخنجري أسفل عظمة القص"
            ]
          ]
        },
        "images": [
          {
            "url": "images/teeth_and_hyoid_sternum.jpg",
            "caption": "النغمة الموسيقية الأسطورية \"40 - 60 - 40\": اللامي 40 فوق، قبضة القص 60 في النص، الخنجري 40 تحت"
          }
        ],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Forensic Hyoid Biomechanics: Throttling (Outward) vs Hanging (Inward)",
        "content": {
          "bullets": [
            "Age susceptibility: Hyoid is flexible cartilage < 40y (rarely fractures); fully ossified & brittle > 40y",
            "1. Manual Strangulation (Throttling / الخنق باليدين):",
            "   • Attacker's fingers squeeze inward across throat ➔ Great horns splay and snap OUTWARD",
            "   • Accompanied by massive vital hemorrhage in neck muscles + crescentic fingernail abrasions",
            "2. Ligature Hanging (الشنق بالحبل):",
            "   • Noose pulls upward and inward ➔ Fracture is rare (15-20%), and displaced INWARD",
            "   • No crescentic fingernail abrasions around larynx"
          ]
        },
        "images": [
          {
            "url": "images/hyoid_fracture_biomechanics.jpg",
            "caption": "ميكانيكا كسر العظمة اللامية: كسر للخارج ونزيف حيوي في الخنق اليدوي مقابل سليم/للداخل في الشنق"
          }
        ],
        "notes": ""
      },
      {
        "type": "resolution",
        "title": "Case Resolution: Unmasking the Millionaire's Staged Suicide",
        "content": {
          "bullets": [
            "Sternum: Xiphoid fused (> 40y), Manubrium unfused (< 60y) — perfectly consistent with 52y",
            "Hyoid Bone: Right greater horn completely fractured with OUTWARD displacement",
            "Vital Reaction: Massive extravasation of blood into deep neck muscles around fracture site",
            "External Neck: 3 crescentic fingernail scratches on right side of larynx, 1 on left",
            "Ligature Mark: Shallow, completely devoid of vital inflammatory reaction",
            "Verdict: Homicide by manual throttling; body staged in ceiling fan post-mortem to fake suicide"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "summary",
        "title": "Episode 4 — Key Diagnostic Takeaways",
        "content": {
          "bullets": [
            "Master Mnemonic: '40 - 60 - 40' (Hyoid 40 ➔ Manubrium 60 ➔ Xiphoid 40)",
            "Ashley's rule: Body > 2x Manubrium in males; Body < 2x Manubrium in females",
            "Hyoid fracture direction is decisive: OUTWARD in throttling, INWARD/absent in hanging",
            "Vital reaction (deep muscle hematoma) confirms injury occurred while victim was alive"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "quiz",
        "title": "Board Review Question: Hyoid Fracture in Strangulation",
        "content": {
          "bullets": [
            "Question: An autopsy on a 50-year-old male found suspended by a rope reveals an outward-displaced fracture of the greater horn of the hyoid bone with massive vital muscle hemorrhage. What is the forensic finding?",
            "Options:",
            "  A) Accidental hanging",
            "  B) Typical suicidal hanging",
            "  C) Homicidal manual throttling with post-mortem hanging suspension (Correct)",
            "  D) Pathological fracture due to senility",
            "Explanation: Outward displacement of hyoid fracture + vital hemorrhage + ligature without vital reaction is pathognomonic for manual strangulation staged post-mortem."
          ]
        },
        "images": [],
        "notes": ""
      }
    ]
  },
  {
    "title": "Forensic Odontology: Teeth as Evidence",
    "description": "Deciduous eruption ('6m mouse' & vaccinations), permanent multiples of 6 (discernment 7y, canine 11y), metallic lines, and bite mark analysis.",
    "slides": [
      {
        "type": "title",
        "title": "Forensic Odontology: Teeth Never Lie",
        "content": {
          "bullets": [
            "Episode 5 · The Bone Code",
            "MedDuo Forensic Medicine Podcast",
            "Deciduous Eruption, Permanent Multiples of 6, & Bite Mark Forensics",
            "Presented by Dr. Tarek & Dr. Atef"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "case",
        "title": "Case: The Train Fire & The Shoulder Bite Mark",
        "content": {
          "bullets": [
            "Charred body recovered from burning passenger train carriage in Upper Egypt",
            "Possible identities: Child 'Ziad' (8y) vs Young adult 'Marwan' (19y)",
            "Simultaneously, police arrest fleeing criminal 'Antar' with deep bite mark on shoulder",
            "Antar claims: 'A stray dog bit me as I jumped from the train!'",
            "Forensic tasks: ID charred body from jaw dentition, and analyze Antar's bite mark"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Deciduous Teeth Eruption: The '6m Mouse' & Vaccination Milestones",
        "content": {
          "headers": [
            "Deciduous Tooth (20 total)",
            "Eruption Age",
            "Egyptian Forensic Mnemonic"
          ],
          "rows": [
            [
              "Central Incisors",
              "6 Months",
              "الفار.. والفار 6 (سن وديدي بيطلع عند 6 شهور)"
            ],
            [
              "Lateral Incisors",
              "9 Months",
              "سن تطعيم الحصبة (Measles vaccination)"
            ],
            [
              "First Molar",
              "1 Year (12m)",
              "قاعدة 1 و 2: ضرس واحد عند سنة واحدة"
            ],
            [
              "Canines (الأنياب)",
              "18 Months",
              "سن تطعيم الـ MMR (9 × 2 = 18 شهر)"
            ],
            [
              "Second Molar",
              "2 Years (24m)",
              "قاعدة 1 و 2: ضرس اتنين عند سنتين"
            ]
          ]
        },
        "images": [
          {
            "url": "images/teeth_and_hyoid_sternum.jpg",
            "caption": "جدول التسنين اللبني (الفار 6، سن التطعيمات 9 و 18 شهر) والدائم (مضاعفات 6 وسن التمييز 7 سنين)"
          }
        ],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Permanent Teeth Eruption: Multiples of 6, Discernment (7y) & Wisdom",
        "content": {
          "headers": [
            "Permanent Tooth (32 total)",
            "Eruption Age",
            "Mnemonic / Legal Milestone"
          ],
          "rows": [
            [
              "1st Permanent Molar",
              "6 Years",
              "مضاعفات رقم 6 الأولى (خلف الأسنان اللبنية مباشرة)"
            ],
            [
              "Central Incisor",
              "7 Years",
              "سن التمييز في الشريعة والقانون (أكل الساندوتش وعض الزميل)"
            ],
            [
              "Lateral Incisor",
              "8 Years",
              "بجوار القاطع الأوسط (7 ➔ 8 سنين)"
            ],
            [
              "1st Premolar (الضاحك 1)",
              "9 Years",
              "درجات الشطار في الامتحان: جايب 9 من 10"
            ],
            [
              "2nd Premolar (الضاحك 2)",
              "10 Years",
              "درجات الشطار في الامتحان: جايب 10 من 10"
            ],
            [
              "Permanent Canine (الناب)",
              "11 Years",
              "شكله يشبه رقم 11 (عند 11 سنة)"
            ],
            [
              "2nd Permanent Molar",
              "12 Years",
              "مضاعفات رقم 6 الثانية (6 × 2 = 12)"
            ],
            [
              "3rd Molar (Wisdom / العقل)",
              "18 - 25 Years",
              "مضاعفات 6 الثالثة وسن الرشد القانوني"
            ]
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Forensic Dental Rules: The Female Law & Metallic Poisoning Lines",
        "content": {
          "bullets": [
            "The Female Law in Odontology:",
            "  • Teeth belong to 'الدواير' — Females DO NOT precede males in tooth eruption (Female = Male)!",
            "  • The dental eruption timetable applies identically to boys and girls.",
            "Chronic Heavy Metal Poisoning Lines on Gingival Margin:",
            "  • Lead (الرصاص): Burton's Blue Line (blue-black stippled line)",
            "  • Mercury (الزئبق): Dark Grey to black line with stomatitis",
            "  • Copper (النحاس): Distinct Greenish line",
            "  • Bismuth (البزموت): Jet Black line"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Bite Mark Forensics: Human (Elliptical) vs Dog (Parallel) & Saliva DNA",
        "content": {
          "bullets": [
            "Human Bite Mark (عضة إنسان):",
            "  • Circular or Elliptical ring pattern with central intact area",
            "  • Composite of contusions and abrasions corresponding to incisal edges",
            "Dog Bite Mark (عضة كلب):",
            "  • Long pointed snout leaves TWO PARALLEL LINES of puncture lacerations",
            "Forensic Protocol:",
            "  • 1. Double-swab saliva technique immediately for criminal DNA profiling",
            "  • 2. Dental silicone cast impressions of suspect's teeth for photographic superimposition"
          ]
        },
        "images": [
          {
            "url": "images/bite_mark_forensics.jpg",
            "caption": "التحليل الجنائي لآثار العض: عضة الإنسان (حلقة بيضاوية) مقابل عضة الكلب (خطان متوازيان)"
          }
        ],
        "notes": ""
      },
      {
        "type": "resolution",
        "title": "Case Resolution: Charred Body ID & Antar's Bite Mark",
        "content": {
          "bullets": [
            "Charred Jaw Examination:",
            "  • Permanent central & lateral incisors erupted; both premolars erupted (age > 10y)",
            "  • Canines (11y) and 2nd molars (12y) unerupted; wisdom teeth absent",
            "  • Estimated Age: 10-11 years ➔ Cannot be Marwan (19y); confirms Ziad (8y with advanced dental spur)",
            "Antar's Shoulder Injury:",
            "  • Elliptical ring of contusions and abrasions ➔ Conclusively HUMAN bite mark (dog claim debunked)",
            "  • Saliva DNA matched victim struggling before carriage was set ablaze ➔ Antar convicted"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "summary",
        "title": "Episode 5 — Dental Eruption & Bite Mark Reference",
        "content": {
          "bullets": [
            "Deciduous: Central 6m ➔ Lateral 9m ➔ Molar 1y ➔ Canine 18m ➔ Molar 2y",
            "Permanent: 1st Molar 6y ➔ Central 7y (تمييز) ➔ Canine 11y ➔ 2nd Molar 12y ➔ Wisdom 18-25y",
            "Female Law: Dental eruption is identical in males and females (الدواير)",
            "Bite mark: Elliptical = Human; Two parallel lines = Dog; always swab for saliva DNA"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "quiz",
        "title": "Board Review Question: Dental Age & Bite Mark Analysis",
        "content": {
          "bullets": [
            "Question: An unburned mandible shows erupted permanent central/lateral incisors, erupted 1st & 2nd premolars, but unerupted permanent canines and unerupted 2nd molars. What is the approximate age?",
            "Options:",
            "  A) 6 - 7 years",
            "  B) 10 - 11 years (Correct)",
            "  C) 14 - 15 years",
            "  D) 18 - 20 years",
            "Explanation: Eruption of premolars occurs at 9-10y. Canines erupt at 11y and 2nd molars at 12y. The individual is strictly in the 10-11 year window."
          ]
        },
        "images": [],
        "notes": ""
      }
    ]
  },
  {
    "title": "Fingerprints & DNA: The Science of Infallible Identity",
    "description": "Dactylography biology, DNA loci, acid damage truth, and the identical-twins dilemma solved.",
    "slides": [
      {
        "type": "title",
        "title": "Fingerprints & DNA: The Infallible Witnesses",
        "content": {
          "bullets": [
            "Episode 6 · The Bone Code"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "case",
        "title": "Case: The Jewellery Heist & Identical Twins",
        "content": {
          "bullets": [
            "Armed robbery of jeweller's villa — safe broken, millions in jewellery stolen",
            "Thief cuts hand on broken glass → leaves blood drops + bloody fingerprint on safe edge",
            "Forensic lab: DNA from blood matches a family of identical twins: Essam & Hussam",
            "Both arrested; Hussam: clean hands, no injuries",
            "Essam: before arrest, submerges fingertips in concentrated sulfuric acid (miya nar)",
            "Defense attorney argues: (1) DNA is inconclusive — identical twins share DNA, (2) Fingerprints destroyed by acid — no comparison possible",
            "Prosecution refers both twins to forensic department"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Fingerprint Biology (Dactylography)",
        "content": {
          "bullets": [
            "Formation: epidermal ridges develop at 4th intrauterine month — before birth",
            "Structure: skin ridges (papillary lines) + grooves on volar surface of fingers",
            "Uniqueness: 1 in 64 million probability of two identical fingerprints — even in identical twins",
            "Permanence: unchanged for life until post-mortem decomposition",
            "Court standard: >16 comparison points required for positive ID",
            "Poroscopy: sweat pore size, number, and distribution — adds further comparison points"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Fingerprint Pattern Types",
        "content": {
          "headers": [
            "Pattern",
            "Frequency",
            "Description"
          ],
          "rows": [
            [
              "Arches",
              "6%",
              "Bridge/tent shape — least common"
            ],
            [
              "Ulnar Loops",
              "65%",
              "Most common; opens toward ulna (inner wrist)"
            ],
            [
              "Radial Loops",
              "3%",
              "Opens toward radius (outer wrist)"
            ],
            [
              "Whorls",
              "25%",
              "Closed spiral — 1 in 4 people; commonest after loops"
            ],
            [
              "Composite",
              "1–2%",
              "Mixed pattern"
            ]
          ]
        },
        "images": [
          {
            "url": "images/fingerprint_patterns_dna.jpg",
            "caption": "أنماط بصمات الأصابع (حلقة، دوامة، قوس) وعلامات المينوشيا، مع شفرة الـ DNA ونقاط الـ STR"
          }
        ],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Acid Damage to Fingerprints",
        "content": {
          "bullets": [
            "Skin layers: Epidermis (outer) + Dermis (deep)",
            "",
            "If damage limited to Epidermis:",
            "  → Skin regenerates fully after healing",
            "  → Ridges return IDENTICAL to original — same fingerprint",
            "",
            "If Dermis is destroyed:",
            "  → Permanent scar tissue forms",
            "  → BUT scar = new unique identifying feature (additional comparison points)",
            "  → Creates a distinctive pattern that belongs ONLY to this person",
            "",
            "Conclusion: Trying to destroy fingerprints with acid = self-incrimination",
            "The harder the destruction, the more unique the resulting scar"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "DNA Profiling — Forensic Method",
        "content": {
          "bullets": [
            "Forensic DNA uses non-coding intergenic segments (not genes for traits)",
            "16 forensic loci analysed (internationally standardised)",
            "Uniqueness: 1 in 1,000,000,000,000 (one in a trillion)",
            "",
            "Amelogenin locus → determines sex (XX = female, XY = male)",
            "Y-chromosome: paternally inherited — tracks male lineage; used in gang rape (mixed semen)",
            "",
            "Mitochondrial DNA (mtDNA): maternally inherited, present in anucleate cells",
            "  → Found in: RBCs, hair SHAFT, nails (no nucleus needed)",
            "  → Nuclear DNA: from hair ROOT sheath only",
            "",
            "LIMITATION: Identical twins share identical nuclear DNA → cannot distinguish them"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Identical Twins: DNA Limitation & Solution",
        "content": {
          "bullets": [
            "Identical (Monozygotic) twins: same fertilised egg → same nuclear DNA sequence",
            "→ 16 forensic loci are IDENTICAL between them",
            "→ DNA CANNOT identify which twin committed the crime",
            "",
            "SOLUTION: Fingerprints",
            "→ Fingerprints develop independently in the womb (influenced by amniotic fluid flow)",
            "→ Identical twins ALWAYS have different fingerprints",
            "→ Pattern type, ridge details, and pore positions differ",
            "",
            "Practical rule: DNA narrows → Fingerprints confirm"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "resolution",
        "title": "Case Resolution: The Twin Heist",
        "content": {
          "bullets": [
            "DNA from crime scene blood: matches BOTH twins (identical DNA) → inconclusive for ID",
            "Crime scene fingerprint: Whorl pattern",
            "Hussam fingerprint examination: Ulnar loops → NO match to crime scene → Hussam INNOCENT",
            "Essam fingerprint examination:",
            "  Acid damaged dermis → permanent scar formed",
            "  Scar margins show Whorl ridge remnants",
            "  Scar shape itself = unique identifier",
            "  >16 comparison points confirmed with crime scene print",
            "VERDICT: Essam GUILTY — acid treatment created permanent self-incriminating evidence"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "summary",
        "title": "Episode 6 — Key Points",
        "content": {
          "bullets": [
            "Fingerprints form at 4th intrauterine month; unique even in identical twins (1:64 million)",
            "Pattern frequency: Loops (68%) > Whorls (25%) > Arches (6%) > Composite (1-2%)",
            "Acid + Epidermis only = fingerprint fully regenerates",
            "Acid + Dermis = permanent scar = new unique identifier = worse outcome for criminal",
            "DNA uses 16 non-coding loci; Amelogenin = sex; mtDNA = maternal lineage",
            "Critical: Identical twins share DNA → fingerprints are the tiebreaker"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "quiz",
        "title": "Review Question",
        "content": {
          "question": "An identical twin suspect burns his fingertips in acid before arrest. His defence argues: (a) DNA from the crime scene is inconclusive, and (b) fingerprints are destroyed. How does forensic science counter both arguments?",
          "answer": "(a) DNA limitation acknowledged — identical twins share nuclear DNA. Counter: fingerprints are always different even in identical twins — DNA narrows suspects, fingerprints identify. (b) Acid affecting dermis → permanent scar with Whorl remnants visible at scar margins → new unique identifier with >16 comparison points → fingerprint evidence stands and is stronger than before."
        },
        "images": [],
        "notes": ""
      }
    ]
  },
  {
    "title": "Race Identification from Skeletal Remains",
    "description": "Skull shape, nasal features, pterion, and dental markers reveal racial origin from bone alone.",
    "slides": [
      {
        "type": "title",
        "title": "Race Identification from Skeletal Remains",
        "content": {
          "bullets": [
            "Episode 7 · The Bone Code"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "case",
        "title": "Case: The Desert Excavation",
        "content": {
          "bullets": [
            "Land reclamation workers discover a secret burial in Western Desert",
            "Complete but fully skeletonised remains — no soft tissue",
            "15 years ago, a mining expedition in this region disappeared:",
            "  • Klaus — German engineer (Caucasoid)",
            "  • Kim — Chinese geologist (Mongoloid)",
            "  • Kwame — South African mining expert (Negroid)",
            "Question: Which of the three does this skeleton belong to?",
            "Skull and mandible sent to forensic department for racial identification"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Forensic Racial Classification",
        "content": {
          "bullets": [
            "Three classical forensic groups (note: a spectrum, not rigid categories):",
            "  1. Caucasoid — European, North African, Middle Eastern",
            "  2. Mongoloid — East Asian, Southeast Asian, Indigenous American",
            "  3. Negroid — Sub-Saharan African",
            "Note: Egyptians measure intermediate between Caucasoid and Negroid",
            "Racial identification from bone uses: skull morphology + dental features",
            "Accuracy: ~85% from skull alone; combined with dentition improves"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Skull Racial Characteristics",
        "content": {
          "headers": [
            "Feature",
            "Caucasoid",
            "Mongoloid",
            "Negroid"
          ],
          "rows": [
            [
              "Skull shape",
              "Mesocephalic (medium)",
              "Brachycephalic (round, broad)",
              "Dolichocephalic (long & narrow)"
            ],
            [
              "Nasal bridge",
              "Narrow & prominent (leptorrhine)",
              "Flat & broad (mesorrhine)",
              "Very flat & wide (platyrrhine)"
            ],
            [
              "Prognathism",
              "Absent or mild",
              "Absent",
              "Marked (jaws protrude forward)"
            ],
            [
              "Frontal suture",
              "Closes at ~3 years",
              "Closes at ~3 years",
              "Persists to ~30 years"
            ],
            [
              "Pterion shape",
              "H-shaped",
              "H-shaped",
              "X-shaped or single point"
            ],
            [
              "Palate",
              "High arched",
              "High arched",
              "Less arched / flat"
            ],
            [
              "Mastoid process",
              "Well developed",
              "Medium",
              "Short"
            ]
          ]
        },
        "images": [
          {
            "url": "images/cranial_race_identification.jpg",
            "caption": "القياسات الجنائية لتحديد العرق: القوقازي (محجر مائل وأنف ضيق)، الزنجي (محجر مربع وبروز فك)، والمغولي (أسنان مجرفية)"
          }
        ],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Negroid Skull — 6 Key Features",
        "content": {
          "bullets": [
            "1. DOLICHOCEPHALIC — skull long & narrow (front to back)",
            "2. FLAT NASAL BRIDGE — with wide nasal openings (platyrrhine)",
            "3. PROGNATHISM — upper and lower jaws protrude forward + less arched palate",
            "4. SHORT MASTOID PROCESS — behind the ear",
            "5. X-SHAPED PTERION — where 4 skull bones meet at temple; normally H-shaped in other races",
            "6. PERSISTENT FRONTAL SUTURE — Metopic suture remains visible until age 30 (not 3y)"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Racial Dental Characteristics",
        "content": {
          "bullets": [
            "MONGOLOID — KEY HALLMARK:",
            "  Shovel-shaped upper incisors (concave on lingual/inner surface)",
            "  Lateral edges raised like a shovel or spade",
            "  Most distinctive racial dental feature",
            "",
            "NEGROID:",
            "  Large, strong teeth",
            "  Ivory-white coloration",
            "  Excellent alignment (good dentition)",
            "",
            "CAUCASOID:",
            "  No single pathognomonic dental feature",
            "  Generally medium-sized teeth"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "resolution",
        "title": "Case Resolution: The Desert Excavation",
        "content": {
          "bullets": [
            "Kim (Mongoloid) EXCLUDED: upper incisors are NOT shovel-shaped → not Mongoloid",
            "Klaus (Caucasoid) EXCLUDED:",
            "  • Pterion = X-shaped (Caucasoid has H-shaped)",
            "  • Frontal suture would have closed at 3y, not persisting",
            "  • No prognathism, no flat nasal bridge",
            "All 6 Negroid features confirmed in specimen:",
            "  ✓ Dolichocephalic skull",
            "  ✓ Flat nasal bridge + wide openings",
            "  ✓ Marked prognathism",
            "  ✓ Short mastoid",
            "  ✓ X-shaped Pterion",
            "  ✓ Persistent frontal suture",
            "VERDICT: Remains belong to Kwame — notify South African embassy"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "summary",
        "title": "Episode 7 — Key Points",
        "content": {
          "bullets": [
            "Negroid hallmarks: Dolichocephalic, flat nose (platyrrhine), prognathism, short mastoid, X-pterion, persistent metopic suture to 30y",
            "Mongoloid hallmark: Shovel-shaped upper incisors — most distinctive single dental feature",
            "Caucasoid: H-shaped Pterion, early metopic closure (3y), no prognathism",
            "Egyptians: intermediate measurements between Caucasoid and Negroid",
            "Pterion shape is a quick screening test: H = non-Negroid; X = Negroid",
            "Metallic poisoning gum lines: Lead=Blue, Mercury=Grey, Copper=Green, Bismuth=Black"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "quiz",
        "title": "Review Question",
        "content": {
          "question": "A skull shows: dolichocephalic shape, X-shaped Pterion, persistent frontal suture visible at estimated age 25y, marked prognathism, flat nasal bridge, and large well-aligned ivory-white teeth. (a) Which racial group? (b) Which three features are most diagnostically specific?",
          "answer": "(a) Negroid (African) — all 6 key features present. (b) Most specific: X-shaped Pterion (not H-shaped like all other races), Persistent frontal suture to 30y (others close at 3y), Marked prognathism with flat palate. These three alone would be sufficient for diagnosis."
        },
        "images": [],
        "notes": ""
      }
    ]
  },
  {
    "title": "Stature Estimation: Pearson's Formulae",
    "description": "From bone length to living height — Pearson's regression equations and a step-by-step calculation.",
    "slides": [
      {
        "type": "title",
        "title": "Stature Estimation: Pearson's Formulae",
        "content": {
          "bullets": [
            "Episode 8 · The Bone Code",
            "Final Episode — Identification Complete"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "case",
        "title": "Case: The Dismembered Remains",
        "content": {
          "bullets": [
            "Stray dogs uncover a plastic bag in an agricultural drainage canal",
            "Contents: one complete LEFT femur + one complete RIGHT humerus",
            "Fully decomposed — no soft tissue, no identity",
            "These are the only remains found",
            "Two registered missing persons from the area:",
            "  • Engineer Adel — basketball player, documented height: 192 cm",
            "  • Teacher Sobhy — short stature, documented height: 160 cm",
            "Question: Which person do these bones belong to?",
            "Measurements taken: Femur = 40 cm | Humerus = 28.8 cm"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Living Stature Estimation — The Span Rule",
        "content": {
          "bullets": [
            "For living persons with spinal deformity or inability to stand:",
            "Arm Span Rule: Height ≈ Arm span (outstretched fingertip to fingertip)",
            "Useful when direct height measurement is impossible",
            "Accuracy: within ~2–3 cm in most adults",
            "Application: elderly patients, kyphosis, scoliosis assessment"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "concept",
        "title": "Pearson's Formulae — From Dead Bone to Living Height",
        "content": {
          "bullets": [
            "Karl Pearson (mathematician/anthropologist) derived regression equations from cadaver studies",
            "Key principle: Long bone length = known fixed % of total body height",
            "",
            "FEMUR = 25% of total height (1/4 of height)",
            "→ Formula: Height = Femur length × 4",
            "",
            "HUMERUS = 18% of total height",
            "→ Formula: Height = Humerus length ÷ 0.18",
            "",
            "Reliability order: Femur > Tibia > Humerus > Radius/Ulna",
            "Using 2 bones and cross-checking = higher accuracy"
          ]
        },
        "images": [
          {
            "url": "images/osteometric_board_stature.jpg",
            "caption": "لوح قياس العظام (Osteometric Board) وحساب الطول الحقيقي بالمللي بمعادلات انحدار بيرسون"
          }
        ],
        "notes": ""
      },
      {
        "type": "table",
        "title": "Long Bone Height Ratios",
        "content": {
          "headers": [
            "Bone",
            "% of Total Height",
            "Formula",
            "Reliability"
          ],
          "rows": [
            [
              "Femur (thigh)",
              "25%",
              "Length × 4",
              "Most reliable"
            ],
            [
              "Tibia (shin)",
              "~22%",
              "Length ÷ 0.22",
              "Second"
            ],
            [
              "Humerus (upper arm)",
              "18%",
              "Length ÷ 0.18",
              "Third"
            ],
            [
              "Radius/Ulna (forearm)",
              "~15%",
              "Length ÷ 0.15",
              "Least reliable"
            ]
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "resolution",
        "title": "Case Resolution: Calculation — Step by Step",
        "content": {
          "calc": [
            "Given: Femur = 40 cm | Humerus = 28.8 cm",
            "FROM FEMUR (Pearson):",
            "  Height = 40 cm × 4 = 160 cm",
            "FROM HUMERUS (Pearson):",
            "  Height = 28.8 ÷ 0.18 = 160.0 cm",
            "BOTH METHODS AGREE: 160 cm",
            "Engineer Adel = 192 cm → DOES NOT MATCH",
            "Teacher Sobhy = 160 cm → EXACT MATCH",
            "VERDICT: Remains identified as Teacher Sobhy (160 cm)",
            "→ Murder investigation opened"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "summary",
        "title": "Episode 8 — Key Points & Series Finale",
        "content": {
          "bullets": [
            "Stature estimation: Femur = 25% (×4), Humerus = 18% (÷0.18)",
            "Two-bone cross-verification increases accuracy significantly",
            "Pearson's formulae are population-specific but widely accepted in Egyptian forensic practice",
            "This completes the Identification chapter:",
            "  Session 1: Bone age (Epiphyseal fusion)",
            "  Session 2–3: Sex (Skull, Pelvis)",
            "  Session 4: Neck & Chest (Sternum, Hyoid)",
            "  Session 5: Teeth & Bite marks",
            "  Session 6: Fingerprints & DNA",
            "  Session 7: Race",
            "  Session 8: Stature → Full identification profile from skeletal remains alone"
          ]
        },
        "images": [],
        "notes": ""
      },
      {
        "type": "quiz",
        "title": "Final Review Question",
        "content": {
          "question": "A femur measures 48 cm. Using Pearson's formula: (a) Calculate the estimated stature. (b) If a second bone (humerus = 34.56 cm) is available, verify the result. (c) Which of two missing persons (192 cm vs 160 cm) does this identify?",
          "answer": "(a) Femur: 48 × 4 = 192 cm. (b) Humerus: 34.56 ÷ 0.18 = 192 cm — both confirm 192 cm. (c) Engineer Adel (192 cm) — the basketball player."
        },
        "images": [],
        "notes": ""
      }
    ]
  }
];

module.exports = SLIDES_DATA;
