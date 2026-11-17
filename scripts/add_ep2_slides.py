import json

# Read app.js
with open("slides-site/app.js", "r", encoding="utf-8") as f:
    text = f.read()

ep2_slides = [
  {
    "type": "title",
    "title": "The Forensic Age Train — Dentition, Epiphyseal Union & Legal Milestones (MLI)",
    "content": {
      "bullets": [
        "Faculty of Medicine, Ain Shams University · Chapter 3 (Pages 41, 43–48)",
        "Episode 2 · Ain Shams Forensic Trilogy",
        "Presented by Dr. Tarek (Forensic Consultant) & Dr. Atef (Resident)",
        "Core Themes: Milky vs Permanent Dentition, Ossific Centers, Epiphyseal Union, The Female 1-2 Year Lead, and The Official Ain Shams Medico-Legal Importance (MLI) Table"
      ]
    },
    "images": [],
    "notes": "مرحباً بكم في الحلقة الثانية من ثلاثية طب عين شمس. نناقش في هذه الحلقة قطار الأعمار الجنائية والمدنية من بزوغ أول سن حتى سن المعاش 60 سنة."
  },
  {
    "type": "case",
    "title": "Case: The Battery Factory Arson & The 4 Forensic Suspects",
    "content": {
      "bullets": [
        "Incident: Arson, armed robbery & guard murder at an illegal lead-acid battery recycling plant in El-Obour",
        "Suspect 1 ('Antar'): Arrested shooter; defense presents certificate claiming age 14y 11m to invoke Child Law (evading death penalty & life imprisonment)",
        "Suspect 2 ('Bondaq'): Caught stealing; owner claims age 12y (punishable), parents claim under 7y (lack of discrimination, guardian liable)",
        "Suspect 3 (Factory Owner): Charged with employing minors under 16 in hazardous prohibited occupations (toxic lead smelting & battery acid fumes)",
        "Skeletal Remains: Charred human bones found in basement; court asks: is this the 60y missing pensioner (manubrium fusion) or a 20y youth?"
      ]
    },
    "images": [
      {
        "url": "images/el_prince_illustration.jpg",
        "caption": "المتهم 'عنتر' في مواجهة النيابة: يدعي أنه طفل 14 سنة و11 شهراً للإفلات من الإعدام بموجب قانون الطفل"
      }
    ],
    "notes": "القضية تجمع بين قانون الطفل، وقانون العمل وحظر مصانع البطاريات، والمسؤولية الجنائية الكاملة وسن المعاش."
  },
  {
    "type": "anatomy",
    "title": "Milky Dentition: The 20 Deciduous Teeth & Eruption Timeline",
    "content": {
      "bullets": [
        "Total Number: 20 teeth (10 maxillary, 10 mandibular) — NO premolars, NO 3rd molars",
        "Eruption Span: Starts at 6 months, completed at 24 months (2 years)",
        "The Official Ain Shams Eruption Sequence (Page 41):",
        "  • Lower central incisors → 6 months (first teeth to erupt)",
        "  • Upper central incisors → 8 months",
        "  • Lateral incisors (upper & lower) → 10 months",
        "  • First milky molar → 12 months (1 year — before canines!)",
        "  • Canines → 18 months (1.5 years)",
        "  • Second milky molar → 24 months (2 years — completes milky set)",
        "Clinical Mnemonic: 'قواطع سفلية 6، علوية 8، جانبية 10، الضرس الأول عند سنة، الناب سنة ونص، والضرس الثاني عند سنتين'"
      ]
    },
    "images": [
      {
        "url": "images/teeth_and_hyoid_sternum.jpg",
        "caption": "تسلسل بزوغ الأسنان اللبنية الـ 20: من القواطع المركزية السفلية عند 6 شهور حتى الضرس اللبني الثاني عند سنتين"
      }
    ],
    "notes": "انتبه لمصيدة الشفوي: الضرس اللبني الأول يسبق الناب؛ الضرس الأول عند سنة والناب عند سنة ونصف."
  },
  {
    "type": "concept",
    "title": "Permanent Dentition: 32 Teeth & The 4 W-B-S-L Differences",
    "content": {
      "bullets": [
        "Total Number: 32 teeth (16 upper, 16 lower)",
        "Eruption Chronology (Ain Shams Curriculum, Page 41):",
        "  • 1st Permanent Molar → 6 years ('ضرس سن المدرسة والتعليم')",
        "  • Central Incisors → 7 years ('سن التمييز')",
        "  • Lateral Incisors → 8 years",
        "  • 1st Premolar → 9 years | 2nd Premolar → 10 years",
        "  • Canines → 11 years",
        "  • 2nd Permanent Molar → 12 years ('ضرس المسؤولية الجزئية')",
        "  • 3rd Permanent Molar (Wisdom Tooth) → 18 to 25 years",
        "The 4 Key Differences between Permanent & Milky Teeth (W-B-S-L Rule):",
        "  • 1. Whiter (أكثر بياضاً)",
        "  • 2. Broader (أعرض تاجاً)",
        "  • 3. Stronger (أقوى بنية ومينا)",
        "  • 4. Larger (أكبر حجماً وجذوراً)"
      ]
    },
    "images": [
      {
        "url": "images/teeth_and_hyoid_sternum.jpg",
        "caption": "الأسنان الدائمة الـ 32: الضرس الأول عند سن 6 سنين، والقواطع عند 7 سنين، وضرس العقل من 18 إلى 25 سنة"
      }
    ],
    "notes": "قاعدة WBSL الأربعة للفروق بين اللبني والدائم: Whiter, Broader, Stronger, Larger."
  },
  {
    "type": "anatomy",
    "title": "Appearance of Postnatal Ossific Centers (Age 1 to 6 Years)",
    "content": {
      "bullets": [
        "Definition: Centers of bone growth appearing as dark vascular areas inside translucent cartilage on X-ray",
        "Postnatal Ossification Timeline (Ain Shams Curriculum, Page 43):",
        "  • 1 Year → Head of humerus, head of femur, and upper tibia",
        "  • 2 Years → Lower end of radius and lower end of tibia",
        "  • 3 Years → Patella (الرضفة — عظمة صابونة الركبة)",
        "  • 4 Years → Upper end of fibula, greater trochanter of femur",
        "  • 5 Years → Lower end of fibula",
        "  • 6 Years → Head of radius, lower end of ulna",
        "⚠️ High-Yield Exam Trap — The Patella at 3 Years:",
        "  • Appearance of the patella ossification center definitively proves an age of at least 3 years!"
      ]
    },
    "images": [
      {
        "url": "images/ossification_centers_diagram.jpg",
        "caption": "مراكز التعظم بعد الولادة: عظمة الرضفة (Patella) تظهر عند سن 3 سنوات، والرأس الكعبري والزند السفلي عند 6 سنوات"
      }
    ],
    "notes": "ظهور مركز تعظم الرضفة عند سن 3 سنوات سؤال شفوي شهير جداً في طب عين شمس."
  },
  {
    "type": "anatomy",
    "title": "Epiphyseal Union I: The Elbow Scissors & Upper Limb (14y to 21y)",
    "content": {
      "bullets": [
        "Elbow Joint Epiphyseal Sequence (The Critical Juvenile Age Window):",
        "  • Age 14 Years: Trochlea unites with Capitulum (humerus)",
        "  • Age 15 Years: Both Trochlea & Capitulum unite with shaft of humerus (resolves 'Antar's' claim!)",
        "  • Age 16 Years: Lateral epicondyle unites with shaft of humerus + Upper end of ulna (olecranon) unites with shaft",
        "  • Age 17 Years: Medial epicondyle unites with shaft of humerus + Upper end of radius (head) unites with shaft",
        "Hand & Wrist Epiphyseal Sequence:",
        "  • Age 18 Years: Distal ends of metacarpals & proximal ends of proximal phalanges unite with shafts (Male mark)",
        "  • Age 20–21 Years: Lower ends of radius and ulna unite with their shafts"
      ]
    },
    "images": [
      {
        "url": "images/upper_limb_epiphysis_diagram.jpg",
        "caption": "التحام مشاشات الطرف العلوي ومفصل الكوع: 14 سنة (بكرة ورؤيس)، 15 سنة (التحام بعضد العضد)، و16 و17 سنة"
      }
    ],
    "notes": "مفصل الكوع هو ميزان محكمة الأحداث بين سن 14 و 15 و 16 و 17 سنة."
  },
  {
    "type": "anatomy",
    "title": "Epiphyseal Union II: Pelvis, Lower Limb & Axial Skeleton (6y to 70y)",
    "content": {
      "bullets": [
        "Pelvis & Hip Joint (Ain Shams Pages 44, 46):",
        "  • Age 6 Years: Pubic ramus unites with ischial ramus (ischiopubic union)",
        "  • Age 15 Years: Ilium, ischium & pubis unite to form the acetabulum (disappearance of Y-shaped cartilage)",
        "  • Age 21 Years: Ischial tuberosity unites with ischium",
        "  • Age 23 Years: Iliac crest unites with ilium",
        "Lower Extremity & Knee Joint:",
        "  • Age 18 Years: Lower ends of tibia and fibula unite with shafts",
        "  • Age 21 Years: Lower end of femur + Upper ends of tibia and fibula unite with shafts (The Knee Joint Rule)",
        "Clavicle & Skull Base:",
        "  • Age 23 Years: Sternal end of clavicle with shaft + Basiocciput with basisphenoid at skull base",
        "Sternum, Hyoid & Advanced Adult Milestones:",
        "  • Age 30y: Sagittal suture | Age 40y: Xiphoid process & Coronal suture",
        "  • Age 50y: Hyoid greater cornu & Lambdoid suture | Age 60y: Manubrium sterni with body | Age 70y: All sutures"
      ]
    },
    "images": [
      {
        "url": "images/lower_limb_epiphysis_diagram.jpg",
        "caption": "التحام مشاشات الحوض والطرف السفلي: غضروف الحُق Y-shaped عند 15 سنة، ومفصل الركبة عند 21 سنة، وعظم الترقوة عند 23 سنة"
      }
    ],
    "notes": "عظمة القص تحكي عمر الإنسان البالغ: الخنجري عند 40 سنة وقبضة القص عند 60 سنة."
  },
  {
    "type": "concept",
    "title": "The Female Lead Rule: Advanced Ossification by 1 to 2 Years",
    "content": {
      "bullets": [
        "The Universal Forensic Principle (Ain Shams Curriculum, Page 44 & 47):",
        "  • 'All mentioned epiphyseal union ages are EARLIER by 1 to 2 years in females!'",
        "  • Biological basis: Earlier onset of pubertal growth spurt and estrogenic acceleration of epiphyseal closure",
        "High-Yield Medico-Legal Conversions:",
        "  • At Age 16 Years:",
        "    - In Males: Lateral epicondyle unites with humerus shaft",
        "    - In Females: Distal metacarpals unite with shafts (equivalent to male 18y!)",
        "  • At Age 18 Years:",
        "    - In Males: Distal metacarpals unite with shafts",
        "    - In Females: Lower ends of radius and ulna unite with shafts (equivalent to male 20y!)",
        "Forensic Rule: Never deliver an age estimate from epiphyseal fusion without first determining SEX!"
      ]
    },
    "images": [
      {
        "url": "images/pelvis_age_female_rule.jpg",
        "caption": "القاعدة النسائية في الطب الشرعي: تقدم الإناث في التحام المشاشات بسنة إلى سنتين عن الذكور في جميع المفاصل"
      }
    ],
    "notes": "قاعدة ذهبية: لا تقدر سن هيكل عظمي من المشاشات قبل أن تحدد جنسه أولاً، لأن الأنثى تسبق الذكر بسنة لسنتين!"
  },
  {
    "type": "anatomy",
    "title": "Medico-Legal Importance (MLI) Table: Ages 6, 7, 12, 14, 15, 16 Years",
    "content": {
      "bullets": [
        "6 Years: Age of education (سن التعليم); 1st permanent molar & ischiopubic union",
        "7 Years: Age of discrimination (سن التمييز); crime under 7y is guardian's responsibility; trial in Child Court without punishment until 12y; central incisors",
        "12 Years: Child training for work illegal under 12y; partly responsible (punished in juvenile reformatory, but NOT imprisoned); 2nd permanent molar",
        "14 Years: Child cannot commit crime of rape under 14y; child work strictly illegal; trochlea + capitulum",
        "15 Years: Mother's custody ends (child chooses custodian); adult court trial with REDUCED sanctions (NO execution, life sentence, or aggravated prison); humerus lower end + acetabulum",
        "16 Years: National ID card (بطاقة الرقم القومي); prohibited from hazardous work (battery factories!); lateral epicondyle in males / metacarpals in females"
      ]
    },
    "images": [
      {
        "url": "images/dr_shereen_framework.jpg",
        "caption": "جدول الأهمية الطبية الشرعية للطفولة والأحداث: سن التمييز 7، وحظر التدريب 12، وحظر العمل 14، وتخفيف العقوبات 15، وبطاقة الرقم القومي 16"
      }
    ],
    "notes": "محطات الطفولة والأحداث ترسم بدقة حدود المسؤولية الجنائية وقوانين العمل من 6 إلى 16 سنة."
  },
  {
    "type": "concept",
    "title": "Medico-Legal Importance (MLI) Table: Ages 18, 21, 30, 35, 60 Years",
    "content": {
      "bullets": [
        "18 Years ('أم المحطات' — The Milestone of Adulthood):",
        "  • Legal age of marriage",
        "  • Legal age for consent in rape investigations",
        "  • Voting & political rights",
        "  • Governmental employment & civil service",
        "  • Driving license issuance",
        "  • FULL criminal responsibility (trial in adult felony court, execution & life imprisonment applicable)",
        "  • Military conscription recruitment",
        "  • Skeletal markers: Metacarpals (males) / Lower radius & ulna (females)",
        "21 Years: Full civil rights (الأهلية المدنية وإدارة الأموال); X-ray on knee joint",
        "30 Years: Membership of People's Assembly (مجلس النواب); closure of sagittal suture",
        "35 Years: Legal age for President of the Republic (رئيس الجمهورية)",
        "60 Years: Legal age of retirement pension (سن المعاش); union of manubrium sterni with body of sternum"
      ]
    },
    "images": [
      {
        "url": "images/teeth_and_hyoid_sternum.jpg",
        "caption": "المحطات الجنائية والدستورية الكبرى: 18 سنة (المسؤولية الجنائية الكاملة والإعدام)، 21 (الأهلية المدنية)، 30 (البرلمان)، 35 (الرئاسة)، و60 (سن المعاش)"
      }
    ],
    "notes": "سن 18 هو أهم سن جنائي في القانون المصري؛ وسن 60 يحدد المعاش بالتحام قبضة القص بجسم القص."
  },
  {
    "type": "summary",
    "title": "Episode 2 Summary: Chronological Master Matrix & Oral Exam Traps",
    "content": {
      "bullets": [
        "6m → Lower central incisors (first tooth) | 2y → Second milky molar (20 teeth complete)",
        "6y → 1st permanent molar & ischiopubic union (School age)",
        "7y → Central incisors (Discrimination age)",
        "12y → 2nd permanent molar (Partial juvenile responsibility)",
        "14y → Trochlea + Capitulum (Rape impossibility)",
        "15y → Lower humerus & Acetabulum (Exclusion from death penalty & life imprisonment)",
        "16y → National ID card & Battery factory prohibition",
        "18y → Full criminal adulthood, execution, marriage, voting, driving & military",
        "21y → Knee joint & Civil rights | 60y → Manubrium sterni & Pension",
        "Female Rule → All epiphyseal unions 1–2 years earlier in females!"
      ]
    },
    "images": [
      {
        "url": "images/dr_shereen_framework.jpg",
        "caption": "المصفوفة الشاملة لقطار الأعمار الجنائية: ربط التسنين والمشاشات بالمواد القانونية والدستورية"
      }
    ],
    "notes": "هذه المصفوفة هي الخلاصة الشاملة لجدول صفحة 47 و 48 في كتاب قسم الطب الشرعي بعين شمس."
  }
]

# Find episode 2 in window.AIN_SHAMS_SLIDES_DATA
# Current placeholder:
old_ep2 = '''  {
    "title": "Bone Age & Dentition: Eruption, Centers & Legal Ages (MLI)",
    "description": "Milky (20) & permanent (32) dentition, 4 differences, ossific centers (1-6y, patella at 3y), epiphyseal union (6-70y, female lead), and complete Medico-Legal Importance (MLI) table (6 to 60y).",
    "slides": [
      {
        "type": "title",
        "title": "Bone Age & Dentition — Eruption, Centers & Legal Ages (MLI)",
        "content": {
          "bullets": [
            "Faculty of Medicine, Ain Shams University · Chapter 3 (Pages 41, 43–48)",
            "Episode 2 · Ain Shams Forensic Trilogy",
            "Presented by Dr. Tarek & Dr. Atef",
            "Full slide deck coming up next in sequence!"
          ]
        },
        "images": [
          {
            "url": "images/teeth_and_hyoid_sternum.jpg",
            "caption": "تسنين الأسنان ومراكز التعظم والتحام المشاشات في جدول الأعمار الجنائية"
          }
        ],
        "notes": "الحلقة الثانية: سيتم استكمال شرائحها بالتفصيل في الخطوة القادمة."
      }
    ]
  },'''

new_ep2 = f'''  {{
    "title": "Bone Age & Dentition: Eruption, Centers & Legal Ages (MLI)",
    "description": "Milky (20) & permanent (32) dentition, 4 differences, ossific centers (1-6y, patella at 3y), epiphyseal union (6-70y, female lead), and complete Medico-Legal Importance (MLI) table (6 to 60y).",
    "slides": {json.dumps(ep2_slides, ensure_ascii=False, indent=6)}
  }},'''

if old_ep2 in text:
    text = text.replace(old_ep2, new_ep2)
    with open("slides-site/app.js", "w", encoding="utf-8") as f:
        f.write(text)
    print("SUCCESS: Episode 2 slides added to app.js!")
else:
    print("ERROR: old_ep2 not found in app.js")
