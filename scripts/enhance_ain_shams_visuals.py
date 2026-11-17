# scripts/enhance_ain_shams_visuals.py
import re
import json

# 1. READ EXISTING AIN_SHAMS_SLIDES_DATA FROM app.js
with open("slides-site/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# ==============================================================
# EPISODE 1 ENHANCED SLIDES WITH FLOWCHARTS, CARDS, TIMELINES
# ==============================================================
ep1_slides = [
  {
    "type": "title",
    "title": "Personal Identification & The Skull — Living ID, Fontanels & Sutures",
    "content": {
      "bullets": [
        "Faculty of Medicine, Ain Shams University · Chapter 3 (Pages 37–40, 42)",
        "Episode 1 · Ain Shams Forensic Trilogy",
        "Presented by Dr. Tarek (Forensic Consultant) & Dr. Atef (Resident)",
        "Visual Learning Edition: Mindmaps, Flowcharts, Diagnostic Trees & Oral Exam Traps"
      ]
    },
    "images": [],
    "notes": "أهلاً بكم في النسخة المرئية المتقدمة لشبتر الاستعراف بطب عين شمس. تم تصميم الشرائح بخرائط ذهنية وتدفقات انسيابية لتسهيل الحفظ المتقن للامتحانات."
  },
  {
    "type": "case",
    "title": "Case Investigation: The ICU Coma, Missing Heir & The Heliopolis Remains",
    "content": {
      "cards": [
        {
          "badge": "CIVIL CASE 1",
          "theme": "cyan",
          "icon": "🏥",
          "title": "مريض غيبوبة الدمرداش (ICU Coma)",
          "items": [
            "مسن في أواخر الستينيات استقبلته طوارئ الدمرداش في غيبوبة كاملة",
            "مجهول الهوية وبدون أي أوراق ثبوتية (Unconscious patient)",
            "الهدف: إثبات الهوية المدنية وإخطار ذويه والتحفظ على أملاكه"
          ]
        },
        {
          "badge": "CIVIL CASE 2",
          "theme": "amber",
          "icon": "📜",
          "title": "نزاع ميراث ساقط قيد (Unregistered Heir)",
          "items": [
            "شاب يدعي أنه الابن المخطوف منذ 24 عاماً للرجل الثري",
            "ساقط قيد رسمياً بدون شهادة ميلاد أو بطاقة رقم قومي",
            "الهدف: إثبات البنوة والنسب الشرعي لاستحقاق التركة"
          ]
        },
        {
          "badge": "CRIMINAL CASE",
          "theme": "rose",
          "icon": "✈️",
          "title": "قاصر المطار المزيف (Airport Impostor)",
          "items": [
            "متهم هارب ضبط بمطار القاهرة بجواز سفر وشهادة ميلاد مزورة",
            "يدعي أنه حدث تحت 15 سنة للإفلات من عقوبة الإعدام والمؤبد",
            "الهدف: تحديد العمر العظمي البيولوجي الحقيقي لمحاكمته"
          ]
        },
        {
          "badge": "SKELETAL CASE",
          "theme": "emerald",
          "icon": "⚰️",
          "title": "رفات فيلا مصر الجديدة (Infant Remains)",
          "items": [
            "صندوق خشبي عثر عليه عمال الحفر يضم جمجمة رضيع وفك سفلي",
            "المطلوب: هل ولد حياً أم سقط جنيناً؟ كم كان عمره عند الوفاة؟"
          ]
        }
      ]
    },
    "images": [
      {
        "url": "images/charred_skull_forensics.jpg",
        "caption": "فحص رفات الجمجمة والفك في مشرحة الدمرداش لتحديد الهوية والسن والعرق في قضايا الجنايات والميراث"
      }
    ],
    "notes": "القضية تجمع بين استعراف الأحياء والجمجمة، وهي المدخل الواقعي لكل جدول وقانون في هذا الفصل."
  },
  {
    "type": "concept",
    "title": "Personal Identification: Definition & The 6-Step Standard Hierarchy",
    "content": {
      "flowchart": [
        { "step": "STEP 1", "icon": "🌍", "title": "Race (العرق)", "desc": "Caucasoid, Negroid, Mongoloid · Cranial vault & Cephalic index" },
        { "step": "STEP 2", "icon": "⚧", "title": "Sex (الجنس)", "desc": "Pelvis, Skull, Long bones, Amelogenin DNA locus" },
        { "step": "STEP 3", "icon": "⏳", "title": "Age (العمر)", "desc": "Teeth eruption, Ossific centers, Epiphyseal union, Sutures" },
        { "step": "STEP 4", "icon": "📏", "title": "Stature (القامة)", "desc": "Long bone osteometry via Trotter & Gleser regression math" },
        { "step": "STEP 5", "icon": "👤", "title": "General Features", "desc": "Complexion, Hair, Eyes, Facial contours, Dental alignment" },
        { "step": "STEP 6", "icon": "🧬", "title": "Peculiar Marks", "desc": "Scars, Tattoos, Deformities, Fingerprints, DNA Profile" }
      ],
      "bullets": [
        "📌 Definition: Determination of individuality of a person, living or dead, complete or in parts (Ain Shams Curriculum, Page 37).",
        "⚖️ Strict Sequential Rule: Broad population filters (Race/Sex/Age) precede individual pinpointing (Prints/DNA)."
      ]
    },
    "images": [
      {
        "url": "images/cranial_race_identification.jpg",
        "caption": "البروتوكول السداسي للاستعراف: من تحديد العرق والجنس والسن حتى الملامح والعلامات الفردية والبصمة"
      }
    ],
    "notes": "احفظ الترتيب السداسي بالترتيب: العرق، الجنس، السن، الطول، الملامح العامة، ثم العلامات الفردية التخصصية."
  },
  {
    "type": "anatomy",
    "title": "Identification of the Living: 8 Civil & 2 Criminal Medico-Legal Scenarios",
    "content": {
      "cards": [
        {
          "badge": "8 CIVIL CASES",
          "theme": "cyan",
          "icon": "🏛️",
          "title": "استعراف الأحياء المدني (Civil Identification)",
          "items": [
            "1. Coma & amnesia patients in emergency care",
            "2. Missing persons reunited after long absence",
            "3. Newborn babies inadvertently switched in nurseries",
            "4. Impostors claiming inheritance/lineage ('ساقط قيد')",
            "5. Disputed identity in marriage contracts/nullity",
            "6. Military conscription fitness and age compliance",
            "7. Employment, pension verification (Age 60), insurance",
            "8. Passports, border security, and naturalization"
          ],
          "highlight": "سؤال شفوي متكرر: اذكر 5 حالات مدنية للاستعراف على الأحياء!"
        },
        {
          "badge": "2 CRIMINAL CASES",
          "theme": "rose",
          "icon": "🚔",
          "title": "استعراف الأحياء الجنائي (Criminal Identification)",
          "items": [
            "1. Fugitive criminals & recidivists (أرباب السوابق)",
            "2. Suspects confronted with eyewitnesses in line-ups (طابور العرض)",
            "👂 Forensic History: Saddam Hussein body double controversy resolved via ear auricle cartilage biometrics!"
          ],
          "highlight": "طابور العرض وبصمات السوابق هما ركيزة الاستعراف الجنائي للأحياء."
        }
      ]
    },
    "images": [
      {
        "url": "images/el_prince_illustration.jpg",
        "caption": "استعراف الأحياء الجنائي: المتهمون وأرباب السوابق في طوابير العرض وتطابق البصمات والقياسات الحيوية"
      }
    ],
    "notes": "في الامتحان الشفوي يطلب منك سرد 5 حالات مدنية وحالتين جنائيتين؛ تذكر دائماً أطفال الحضانة وغيبوبة الطوارئ وطابور العرض."
  },
  {
    "type": "concept",
    "title": "Biometrics Architecture: Physical vs Behavioral Modalities",
    "content": {
      "cards": [
        {
          "badge": "PHYSICAL BIOMETRICS",
          "theme": "cyan",
          "icon": "🖐️",
          "title": "القياسات الفيزيائية (ثبات تشريحي مدى الحياة)",
          "items": [
            "Dactylography (Fingerprints): 1 in 64 billion chance; unalterable",
            "Iris Recognition: Intricate trabecular meshwork; unique in twins",
            "Facial Geometry: Nodal points (interpupillary, nasal, chin)",
            "Ear Auricle: Concha, helix, and antihelix contours",
            "Palmar & Plantar Prints: Epidermal friction ridges",
            "Vein Pattern Scanning: Subcutaneous infrared vascular maps"
          ],
          "highlight": "ثابتة بنيوياً ولا تتغير طوال حياة الإنسان."
        },
        {
          "badge": "BEHAVIORAL BIOMETRICS",
          "theme": "amber",
          "icon": "✍️",
          "title": "القياسات السلوكية (قابلة للتأثر بالصحة والإجهاد)",
          "items": [
            "Voiceprint: Acoustic frequency spectrum & formant resonance",
            "Dynamic Signature: Pen acceleration, stroke vectoring, pressure",
            "Gait Analysis: Spatiotemporal step cadence, velocity, angles"
          ],
          "highlight": "تتأثر بالحالة النفسية، التقدم في العمر، والأمراض العصبية."
        }
      ]
    },
    "images": [
      {
        "url": "images/fingerprint_patterns_dna.jpg",
        "caption": "القياسات الحيوية (Biometrics): البصمات وشبكية العين وهندسة الوجه مقابل البصمة الصوتية والتوقيع الحركي"
      }
    ],
    "notes": "الفرق الجوهري: الفيزيائية ثابتة تشريحياً، بينما السلوكية تتأثر بالحالة النفسية والمرضية والإجهاد."
  },
  {
    "type": "anatomy",
    "title": "The Infant Skull: The 13-5-4 Golden Architectural Formula",
    "content": {
      "cards": [
        {
          "badge": "RATIO 8:1",
          "theme": "rose",
          "icon": "👶",
          "title": "Proportion & Mode of Growth",
          "items": [
            "Cranium to Face Ratio: 8 : 1 in newborns vs 2 : 1 in adults",
            "Membranous Vault: Allows molding during vaginal birth",
            "Cartilaginous Base: Solid protection for brainstem & vital centers"
          ]
        },
        {
          "badge": "THE 13-5-4 RULE",
          "theme": "emerald",
          "icon": "📐",
          "title": "قاعدة الـ 13-5-4 المعمارية",
          "items": [
            "13 Bones Vault: 2 Frontal + 2 Parietal + 1 Occipital + 8 Temporal parts (4 each)",
            "5 Fontanelles: 2 Median (Anterior & Posterior) + 3 Lateral pairs",
            "4 Sutures: Frontal (metopic), Sagittal, Coronal, Lambdoid"
          ]
        }
      ],
      "bullets": [
        "🩺 Clinical Significance: Permits elastic head compressibility during labor and accommodates rapid brain tripling in infancy."
      ]
    },
    "images": [
      {
        "url": "images/skull_sutures_diagram.jpg",
        "caption": "تشريح جمجمة الرضيع: نسبة الجمجمة للوجه 8:1، وقاعدة الـ 13 عظمة، 5 يافيخ، و4 خطوط درزية"
      }
    ],
    "notes": "نسبة الجمجمة للوجه 8:1 عند الولادة وتصبح 2:1 في البالغين؛ سؤال كلاسيكي في كل امتحانات الشفوي."
  },
  {
    "type": "concept",
    "title": "Fontanels: The Shrinking Finger Metric (Bregma vs Lambda)",
    "content": {
      "timeline": [
        { "age": "At Birth", "icon": "💎", "title": "Bregma = 3 Fingers Breadth (اتساع 3 أصابع)", "desc": "Diamond-shaped anterior fontanel at junction of frontal & sagittal sutures" },
        { "age": "6 Months", "icon": "👇", "title": "Bregma = 2 Fingers Breadth (اتساع إصبعين)", "desc": "Progressive ossification along margins" },
        { "age": "12 Months (1y)", "icon": "👇", "title": "Bregma = 1 Finger Breadth (اتساع إصبع واحد)", "desc": "Reduced to fingertip dimension" },
        { "age": "18 Months (1.5y)", "icon": "🔒", "title": "Bregma = FULLY CLOSED (الانغلاق التام)", "desc": "Complete bony obliteration in normal infants" },
        { "age": "2–3 Months", "icon": "🔺", "title": "Lambda (Posterior Fontanel) Closes", "desc": "Triangular fontanel at sagittal & lambdoid junction closes early" }
      ],
      "trap": {
        "title": "Red Flags: Bulging vs Depressed Fontanelle (طوارئ الأطفال والطب الشرعي)",
        "desc": "Bulging fontanelle indicates raised intracranial pressure, meningitis, or shaken baby subdural hematoma. Depressed fontanelle indicates severe infantile dehydration, malnutrition, or neglect!"
      }
    },
    "images": [
      {
        "url": "images/skull_sutures_diagram.jpg",
        "caption": "اليافوخ الأمامي (معين الشكل): يقبل 3 أصابع عند الولادة وينغلق بمعدل إصبع كل 6 شهور حتى تمام الغلق عند 18 شهراً"
      }
    ],
    "notes": "قاعدة الأصابع المتناقصة بمعدل إصبع كل 6 شهور تجعل تقدير عمر الرضيع دقيقاً للغاية في الفحص الإكلينيكي والجنائي."
  },
  {
    "type": "anatomy",
    "title": "Cranial Sutures: Chronology & The Negroid Metopic Exam Trap",
    "content": {
      "timeline": [
        { "age": "3 Years", "icon": "🧩", "title": "Frontal (Metopic) Suture Closes Normally", "desc": "Obliterates between the two frontal bones" },
        { "age": "30 Years", "icon": "📏", "title": "Sagittal Suture Closes", "desc": "Commences from endocranial (inner) aspect outward" },
        { "age": "40 Years", "icon": "👑", "title": "Coronal Suture Closes", "desc": "Crown suture between frontal and parietals" },
        { "age": "50 Years", "icon": "📐", "title": "Lambdoid Suture Closes", "desc": "Posterior suture between parietals and occipital" },
        { "age": "70 Years", "icon": "🔒", "title": "All Cranial Sutures Obliterated", "desc": "Except temporoparietal suture which may persist" }
      ],
      "trap": {
        "title": "THE #1 AIN SHAMS EXAM TRAP: The Negroid Frontal Suture Persistence",
        "desc": "The frontal suture closes at 3 years normally, but PERSISTS UP TO 30 YEARS in Negroid skulls! Finding an open frontal suture does NOT prove infant age under 3 years if Negroid facial/cranial characteristics are present!"
      }
    },
    "images": [
      {
        "url": "images/cranial_race_identification.jpg",
        "caption": "درزات الجمجمة: الدرز السهمي (30 سنة)، الإكليلي (40)، واللامي (50)، ومصيدة الدرز الجبهي حتى 30 سنة في الزنوج"
      }
    ],
    "notes": "مصيدة امتحانات عين شمس: متى يستمر الدرز الجبهي مفتوحاً حتى سن 30 سنة؟ الإجابة: في الجماجم الزنجية (Negroid skulls)."
  },
  {
    "type": "anatomy",
    "title": "Mandible Metamorphosis: Infant, Adult & Senile Resorption",
    "content": {
      "cards": [
        {
          "badge": "INFANT MANDIBLE",
          "theme": "cyan",
          "icon": "👶",
          "title": "فك الرضيع (Infant)",
          "items": [
            "Angle: Obtuse (~140°)",
            "Symphysis: 2 fibrous halves at birth; unites by bone at 1–2 years",
            "Mental Foramen: Located near lower border (below tooth buds)"
          ],
          "highlight": "زاوية منفرجة والفتحة الذقنية قريبة من الحافة السفلية."
        },
        {
          "badge": "ADULT MANDIBLE",
          "theme": "emerald",
          "icon": "🧑",
          "title": "فك البالغ (Adult)",
          "items": [
            "Angle: Right angle (~110°–120°) due to vigorous mastication",
            "Dental Arch: 16 permanent teeth with prominent alveolar ridge",
            "Mental Foramen: Positioned midway between upper & lower borders"
          ],
          "highlight": "الزاوية الوحيدة القائمة؛ والفتحة الذقنية في المنتصف."
        },
        {
          "badge": "SENILE MANDIBLE",
          "theme": "amber",
          "icon": "👴",
          "title": "فك المسن (Elderly)",
          "items": [
            "Angle: Reverts to Obtuse (~140°) due to tooth loss & muscle atrophy",
            "Alveolar Margin: MARKEDLY RESORBED (ضمور الحافة السنخية)",
            "Mental Foramen: Shifted to lie near the UPPER border!"
          ],
          "highlight": "ضمور الحافة السنخية يرفع الفتحة الذقنية للحافة العلوية."
        }
      ]
    },
    "images": [
      {
        "url": "images/mandible_age_diagram.jpg",
        "caption": "تحولات الفك السفلي: منفرجة (140°) في الرضيع → قائمة (110°) في البالغ → منفرجة مع ضمور الحافة السنخية في المسن"
      }
    ],
    "notes": "زاوية الفك قائمة فقط في البالغ، ومنفرجة في الرضيع والمسن؛ والفتحة الذقنية تقترب من الحافة العلوية في المسن بسبب ذوبان الحافة السنخية."
  },
  {
    "type": "summary",
    "title": "Episode 1 Summary: Key Rules, Numbers & Oral Exam Pearls",
    "content": {
      "cards": [
        {
          "badge": "THE 7 SACRED NUMBERS",
          "theme": "purple",
          "icon": "🔢",
          "title": "الأرقام الذهبية لامتحانات عين شمس",
          "items": [
            "8:1 → Cranium to face ratio in infants (2:1 in adults)",
            "3 Fingers → Bregma at birth (shrinks 1 finger / 6m to close at 18m)",
            "2–3 Months → Posterior triangular fontanel closure",
            "3y vs 30y → Metopic suture (Normal 3y vs Negroid skulls up to 30y)",
            "140° vs 110° vs 140° → Mandible angle evolution",
            "8 + 2 → Living ID scenarios (8 Civil + 2 Criminal)",
            "6 Steps → Hierarchy: Race → Sex → Age → Stature → General → Peculiar"
          ]
        }
      ]
    },
    "images": [
      {
        "url": "images/dr_shereen_framework.jpg",
        "caption": "خلاصة الحلقة الأولى: القواعد الرقمية والمصائد الشفوية في استعراف الأحياء والجمجمة الآدمية"
      }
    ],
    "notes": "هذه الأرقام السبعة هي جوهر أسئلة لجان الشفوي والـ MCQ لطب عين شمس في درس الجمجمة واستعراف الأحياء."
  }
]

# ==============================================================
# EPISODE 2 ENHANCED SLIDES WITH DENTAL TIMELINE & MLI HIGHWAY
# ==============================================================
ep2_slides = [
  {
    "type": "title",
    "title": "The Forensic Age Train — Dentition, Epiphyseal Union & Legal Milestones (MLI)",
    "content": {
      "bullets": [
        "Faculty of Medicine, Ain Shams University · Chapter 3 (Pages 41, 43–48)",
        "Episode 2 · Ain Shams Forensic Trilogy",
        "Presented by Dr. Tarek (Forensic Consultant) & Dr. Atef (Resident)",
        "Visual Learning Edition: Dental Ladder, Ossification Clock, Elbow Scissors & The MLI Highway"
      ]
    },
    "images": [],
    "notes": "مرحباً بكم في الحلقة الثانية من ثلاثية طب عين شمس. نناقش في هذه الحلقة قطار الأعمار الجنائية والمدنية من بزوغ أول سن حتى سن المعاش 60 سنة."
  },
  {
    "type": "case",
    "title": "Case: The Battery Factory Arson & The 4 Forensic Suspects",
    "content": {
      "cards": [
        {
          "badge": "SUSPECT 1",
          "theme": "rose",
          "icon": "⚖️",
          "title": "المتهم 'عنتر' (القتل وسرقة الخزينة)",
          "items": [
            "محاميه يدعي أنه طفل 14 سنة و11 شهراً للإفلات من الإعدام والمؤبد",
            "المطلوب شرعياً: فحص التحام مشاشات الكوع والكتف والحوض بدقة"
          ],
          "highlight": "التحام بكرة ورؤيس العضد يفصل بين سن 14 وسن 15 سنة."
        },
        {
          "badge": "SUSPECT 2",
          "theme": "amber",
          "icon": "🧒",
          "title": "الطفل 'بندق' (نزاع سن التمييز)",
          "items": [
            "صاحب المصنع يدعي أن عمره 12 سنة لتحميله مسؤولية السرقة",
            "أهله يصرخون بأنه تحت 7 سنوات (غير مميز والمسؤولية على الولي)"
          ],
          "highlight": "بزوغ القواطع المركزية عند 7 سنين والضرس الثاني عند 12 سنة."
        },
        {
          "badge": "SUSPECT 3",
          "theme": "cyan",
          "icon": "🏭",
          "title": "صاحب المصنع (تشغيل الأطفال)",
          "items": [
            "متهم بتشغيل أحداث في مهن خطرة محظورة (صهر الرصاص وأحماض البطاريات)",
            "القانون يحظر تشغيل من هم دون 16 سنة في مصانع البطاريات"
          ],
          "highlight": "سن 16 سنة هو سن بطاقة الرقم القومي وحظر مصانع البطاريات."
        },
        {
          "badge": "SKELETAL REMAINS",
          "theme": "emerald",
          "icon": "🦴",
          "title": "الرفات المتفحمة في البدروم",
          "items": [
            "هل الجثة لوالد صاحب المصنع صاحب المعاش (فوق 60 سنة)؟",
            "أم لشاب في أول العشرينات هارب من التجنيد؟"
          ],
          "highlight": "التحام قبضة القص بجسم القص عند 60 سنة يحسم اللغز."
        }
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
    "title": "Milky Dentition: The 20 Deciduous Teeth & Eruption Ladder",
    "content": {
      "timeline": [
        { "age": "6 Months", "icon": "🦷", "title": "Lower Central Incisors (القواطع المركزية السفلية)", "desc": "First teeth to erupt in human life! (قواطع القرض السفلية)" },
        { "age": "8 Months", "icon": "🦷", "title": "Upper Central Incisors (القواطع المركزية العلوية)", "desc": "Follows shortly on the maxillary arch" },
        { "age": "10 Months", "icon": "🦷", "title": "Lateral Incisors (القواطع الجانبية)", "desc": "Upper and lower lateral incisors erupt" },
        { "age": "12 Months (1y)", "icon": "⭐", "title": "First Milky Molar (الضرس اللبني الأول)", "desc": "HIGH YIELD: Erupts at 1 year, BEFORE canines!" },
        { "age": "18 Months", "icon": "🦷", "title": "Canines (الأنياب)", "desc": "Erupts between 1st and 2nd milky molars" },
        { "age": "24 Months (2y)", "icon": "🔒", "title": "Second Milky Molar (الضرس اللبني الثاني)", "desc": "Completes the deciduous dentition (Total = 20 teeth)" }
      ],
      "bullets": [
        "📌 Deciduous Dental Formula: 2 Incisors, 1 Canine, 0 Premolars, 2 Molars per quadrant (2:1:0:2 = 20 total)."
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
      "cards": [
        { "badge": "W", "theme": "cyan", "icon": "✨", "title": "Whiter", "items": ["أكثر بياضاً ناصعاً مقارنة باللبني"] },
        { "badge": "B", "theme": "emerald", "icon": "📐", "title": "Broader", "items": ["أعرض في التاج وسطح المضغ الأطباقي"] },
        { "badge": "S", "theme": "amber", "icon": "💪", "title": "Stronger", "items": ["أقوى في طبقة المينا والبنية العاجية"] },
        { "badge": "L", "theme": "rose", "icon": "🐘", "title": "Larger", "items": ["أكبر حجماً وجذوراً وتثبيتاً في الفك"] }
      ],
      "timeline": [
        { "age": "6 Years", "icon": "🏫", "title": "1st Permanent Molar", "desc": "School entry milestone ('ضرس سن المدرسة والتعليم')" },
        { "age": "7 Years", "icon": "⚖️", "title": "Central Incisors", "desc": "Age of discrimination ('سن التمييز الجنائي')" },
        { "age": "8 Years", "icon": "🦷", "title": "Lateral Incisors", "desc": "Upper and lower lateral replacement" },
        { "age": "9–10 Years", "icon": "🦷", "title": "Premolars (1st & 2nd)", "desc": "Replace milky molars" },
        { "age": "11 Years", "icon": "🦷", "title": "Canines", "desc": "Permanent maxillary & mandibular eye teeth" },
        { "age": "12 Years", "icon": "⚠️", "title": "2nd Permanent Molar", "desc": "Partial criminal responsibility milestone" },
        { "age": "18–25 Years", "icon": "🧠", "title": "3rd Permanent Molar", "desc": "Wisdom tooth ('ضرس العقل') — Adulthood marker" }
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
      "timeline": [
        { "age": "1 Year", "icon": "🦴", "title": "Heads of 3 Major Long Bones", "desc": "Head of humerus, head of femur, and upper end of tibia" },
        { "age": "2 Years", "icon": "🦴", "title": "Lower Radius & Lower Tibia", "desc": "Secondary triangular center of distal radius" },
        { "age": "3 Years", "icon": "⭐", "title": "PATELLA (عظمة الرضفة / صابونة الركبة)", "desc": "HIGH-YIELD EXAM TRAP: Patella appears at 3y on X-ray!" },
        { "age": "4 Years", "icon": "🦴", "title": "Upper Fibula & Greater Trochanter", "desc": "Proximal fibular head and femoral greater trochanter" },
        { "age": "5 Years", "icon": "🦴", "title": "Lower Fibula", "desc": "Distal lateral malleolus center" },
        { "age": "6 Years", "icon": "🦴", "title": "Head of Radius & Lower Ulna", "desc": "Proximal radial head and distal ulnar head" }
      ],
      "trap": {
        "title": "THE PATELLA 3-YEAR RULE (مصيدة امتحانات عين شمس)",
        "desc": "ظهور مركز تعظم الرضفة (Patella) في أشعة الركبة يثبت بشكل قطعي أن عمر الطفل لا يقل عن 3 سنوات كاملة!"
      }
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
      "flowchart": [
        { "step": "AGE 14y", "icon": "✂️", "title": "Trochlea + Capitulum", "desc": "Unite together (بكرة ورؤيس العضد يندمجان معاً)" },
        { "step": "AGE 15y", "icon": "⚖️", "title": "Unite with Humerus Shaft", "desc": "Both unite with shaft (حل لغز عنتر وسن 15 سنة)" },
        { "step": "AGE 16y", "icon": "💪", "title": "Lateral Epicondyle + Ulna", "desc": "Lateral epicondyle & Upper end of ulna (olecranon)" },
        { "step": "AGE 17y", "icon": "🎯", "title": "Medial Epicondyle + Radius", "desc": "Medial epicondyle & Upper end of radius (head)" }
      ],
      "cards": [
        {
          "badge": "WRIST & HAND (18y–21y)",
          "theme": "cyan",
          "icon": "🖐️",
          "title": "مشاشات اليد والرسغ (Hand & Wrist)",
          "items": [
            "Age 18 Years: Distal ends of metacarpals unite with shafts (Male adulthood mark)",
            "Age 20–21 Years: Lower ends of radius and ulna unite with shafts"
          ]
        }
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
      "cards": [
        {
          "badge": "PELVIS & HIP",
          "theme": "cyan",
          "icon": "🦴",
          "title": "عظام الحوض ومفصل الفخذ",
          "items": [
            "Age 6y: Pubic ramus unites with ischial ramus (ischiopubic union)",
            "Age 15y: Ilium, ischium & pubis form acetabulum (Y-cartilage closes)",
            "Age 21y: Ischial tuberosity unites with ischium",
            "Age 23y: Iliac crest unites with ilium"
          ]
        },
        {
          "badge": "LOWER LIMB & KNEE",
          "theme": "emerald",
          "icon": "🦵",
          "title": "الطرف السفلي ومفصل الركبة",
          "items": [
            "Age 18y: Lower ends of tibia and fibula unite with shafts",
            "Age 21y: Lower femur + Upper tibia/fibula unite (Knee Joint Milestone)",
            "Age 23y: Sternal end of clavicle + Basiocciput with basisphenoid"
          ]
        },
        {
          "badge": "AXIAL SKELETON",
          "theme": "amber",
          "icon": "💀",
          "title": "القص واللامي والجمجمة",
          "items": [
            "Age 30y: Sagittal suture closure",
            "Age 40y: Xiphoid process + Coronal suture closure",
            "Age 50y: Greater cornu of hyoid + Lambdoid suture closure",
            "Age 60y: Manubrium sterni with body (Pension Milestone)",
            "Age 70y: All sutures closed (except temporoparietal)"
          ]
        }
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
      "cards": [
        {
          "badge": "UNIVERSAL LAW",
          "theme": "rose",
          "icon": "♀️",
          "title": "قاعدة تقدم الإناث بسنة إلى سنتين",
          "items": [
            "All mentioned epiphyseal union ages are EARLIER by 1 to 2 years in females!",
            "Biological Cause: Early pubertal surge & estrogenic stimulation of epiphyseal plate fusion",
            "Mandatory Rule: NEVER estimate age from bone X-rays without establishing biological SEX first!"
          ]
        },
        {
          "badge": "LEGAL CONVERSIONS",
          "theme": "purple",
          "icon": "⚖️",
          "title": "التحويلات الجنائية لسن 16 و18 سنة",
          "items": [
            "At Age 16y in Females: Metacarpals already united (equals 18y in males!)",
            "At Age 18y in Females: Lower radius & ulna united (equals 20y in males!)",
            "At Age 15y in Females: Lateral epicondyle already united"
          ]
        }
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
      "timeline": [
        { "age": "6 Years", "icon": "🏫", "title": "سن التعليم (Age of Education)", "desc": "1st permanent molar erupts; ischiopubic ramus unites" },
        { "age": "7 Years", "icon": "⚖️", "title": "سن التمييز (Age of Discrimination)", "desc": "Under 7y guardian liable; above 7y Child Court trial WITHOUT punishment until 12y; central incisors" },
        { "age": "12 Years", "icon": "🛠️", "title": "حظر التدريب والمسؤولية الجزئية", "desc": "Work training illegal under 12y; partly responsible (punished in juvenile reformatory, NO prison); 2nd molar" },
        { "age": "14 Years", "icon": "🚫", "title": "استحالة الاغتصاب وحظر العمل", "desc": "Cannot commit rape under 14y; child labor strictly illegal; trochlea + capitulum union" },
        { "age": "15 Years", "icon": "🛡️", "title": "انتهاء الحضانة وتخفيف العقوبات", "desc": "Mother custody ends; adult court with REDUCED sanctions (NO execution, life sentence, hard labor); lower humerus + acetabulum" },
        { "age": "16 Years", "icon": "🪪", "title": "بطاقة الرقم القومي وحظر مصانع البطاريات", "desc": "National ID cards; prohibited from hazardous duties (batteries factories!); lateral epicondyle in males / metacarpals in females" }
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
      "cards": [
        {
          "badge": "AGE 18: MILESTONE",
          "theme": "rose",
          "icon": "⚖️",
          "title": "أم المحطات — سن 18 سنة",
          "items": [
            "Legal age of marriage",
            "Legal age for sexual consent in rape trials",
            "Voting & political franchise rights",
            "Governmental employment & civil service",
            "Private vehicle driving license",
            "FULL CRIMINAL RESPONSIBILITY (Adult felony court, execution & life imprisonment applicable!)",
            "Military conscription recruitment"
          ],
          "highlight": "العلامة العظمية: أمشاط اليد في الذكور، وأسفل الكعبرة والزند في الإناث."
        },
        {
          "badge": "CONSTITUTIONAL AGES",
          "theme": "purple",
          "icon": "🏛️",
          "title": "أعمار الدستور والتقاعد",
          "items": [
            "21 Years: Full civil rights (الأهلية المدنية وإدارة الأموال); Knee joint X-ray",
            "30 Years: People's Assembly membership (مجلس النواب); Sagittal suture",
            "35 Years: President of the Republic eligibility (رئيس الجمهورية)",
            "60 Years: Retirement pension (سن المعاش); Manubrium sterni with body union"
          ],
          "highlight": "سن 60 سنة: التحام قبضة القص بجسم القص يحدد استحقاق المعاش."
        }
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
      "flowchart": [
        { "step": "6y", "icon": "🏫", "title": "School Age", "desc": "1st molar + Ischiopubic" },
        { "step": "7y", "icon": "⚖️", "title": "Discrimination", "desc": "Central incisors" },
        { "step": "12y", "icon": "🛠️", "title": "Partial Resp.", "desc": "2nd molar" },
        { "step": "14y", "icon": "🚫", "title": "No Rape", "desc": "Trochlea + Capitulum" },
        { "step": "15y", "icon": "🛡️", "title": "No Execution", "desc": "Humerus + Acetabulum" },
        { "step": "16y", "icon": "🪪", "title": "National ID", "desc": "Battery ban" },
        { "step": "18y", "icon": "⚖️", "title": "Adulthood", "desc": "Execution eligible" },
        { "step": "21y", "icon": "📜", "title": "Civil Rights", "desc": "Knee joint" },
        { "step": "60y", "icon": "👴", "title": "Pension", "desc": "Sternum union" }
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

# ==============================================================
# EPISODE 3 ENHANCED SLIDES WITH MOLECULAR MAPS & 6-STEP LAB FLOW
# ==============================================================
ep3_slides = [
  {
    "type": "title",
    "title": "The Immortal Code — Dactylography, The 90% Silent DNA & Forensic Typing",
    "content": {
      "bullets": [
        "Faculty of Medicine, Ain Shams University · Chapter 3 (Pages 48–52)",
        "Episode 3 · Ain Shams Forensic Trilogy (The Finale)",
        "Presented by Dr. Tarek (Forensic Consultant) & Dr. Atef (Resident)",
        "Visual Learning Edition: Genomic Paradox, 16 Forensic Loci, Y-STR vs mtDNA, 6-Step Lab Flow, and Page 52 Exam Solutions"
      ]
    },
    "images": [],
    "notes": "مرحباً بكم في الحلقة الثالثة والختامية من ثلاثية منهج طب عين شمس. نناقش في هذه الحلقة علم البصمات وتفاصيل البصمة الوراثية وتطبيقاتها القضائية."
  },
  {
    "type": "case",
    "title": "Case: The Diplomat's Villa Heist, Identical Twins & The Mixed Semen",
    "content": {
      "cards": [
        {
          "badge": "CRIME 1",
          "theme": "rose",
          "icon": "🖐️",
          "title": "تشويه بصمات البرنس",
          "items": [
            "كوى باطن أصابعه بالنار وموس الحلاقة لمسح البصمة",
            "السؤال: هل ينجح في الإفلات أم صنع ندبة إدانة أبدية؟"
          ],
          "highlight": "تدمير الأدمة يصنع ندبة تمييز إضافية."
        },
        {
          "badge": "CRIME 2",
          "theme": "purple",
          "icon": "🧬",
          "title": "خليط السائل المنوي (Mixed Semen)",
          "items": [
            "اعتداء جنسي جماعي شارك فيه اثنان من الذكور",
            "السؤال: كيف نفصل شفرة كل جاني من الخليط المعقد؟"
          ],
          "highlight": "كروموسوم Y هو مفتاح فك اشتباك الاغتصاب الجماعي."
        },
        {
          "badge": "LEGAL DILEMMA",
          "theme": "amber",
          "icon": "👥",
          "title": "لغز التوأم المتطابق (Uniovular Twins)",
          "items": [
            "المتهم المقبوض عليه له توأم متطابق يشاركه نفس الـ DNA تماماً",
            "السؤال: ما هو الدليل القاطع للفصل بين التوأمين؟"
          ],
          "highlight": "بصمات الأصابع الجلدية تختلف حتى في التوائم المتطابقة."
        },
        {
          "badge": "CIVIL LAWSUIT",
          "theme": "cyan",
          "icon": "👶",
          "title": "قضية إثبات نسب المليونير",
          "items": [
            "سيدة تدعي أن الدبلوماسي المتوفى والد طفلها الرضيع",
            "الورثة يطالبون بفصائل الدم ABO والطب الشرعي ينتدب للـ DNA"
          ],
          "highlight": "فصائل الدم تنفي فقط، بينما الـ DNA قطعي الإثبات والنفي."
        }
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
      "cards": [
        {
          "badge": "1 IN 64 BILLION",
          "theme": "cyan",
          "icon": "🌍",
          "title": "الانفراد الكوني (Cosmic Singularity)",
          "items": [
            "Chance of two identical fingerprints: 1 in 64,000,000,000!",
            "Earth Population: ~8 billion humans $\\rightarrow$ Absolute individuality",
            "Papillary ridges with sweat gland ducts opening on ridge summits"
          ]
        },
        {
          "badge": "DUAL ANCHOR",
          "theme": "emerald",
          "icon": "🛡️",
          "title": "الحصن المزدوج (Epidermis + Dermis)",
          "items": [
            "Ridges originate in dermal papillae and project through epidermis",
            "Permanent structural configuration unchanged from womb to tomb",
            "Even severe desquamation leaves the deep template intact"
          ]
        }
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
      "cards": [
        {
          "badge": "MUTILATION ATTEMPTS",
          "theme": "rose",
          "icon": "🔥",
          "title": "محاولات طمس وتشويه البصمات",
          "items": [
            "Epidermis Only Destroyed: Re-epithelializes with NO alteration in ridge pattern!",
            "Dermis Destroyed: Heals by fibrous scar creating ADDITIONAL POINTS OF IDENTIFICATION!"
          ],
          "highlight": "المتهم الذي يحرق الأدمة يصنع ختم إدانة إضافي مستحيل يتكرر!"
        },
        {
          "badge": "PATHOLOGY",
          "theme": "amber",
          "icon": "🩺",
          "title": "الأمراض وتلف البصمات",
          "items": [
            "Reversible Atrophy (ضمور مؤقت مسترد): Celiac Disease (حساسية القمح) & Dermatitis",
            "Permanent Impairment (تلف دائم): Leprosy (مرض الجذام) & Exposure to Radiation"
          ],
          "highlight": "حساسية القمح والإكزيما تعود طبيعية؛ والجذام والإشعاع تلف دائم."
        }
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
      "cards": [
        {
          "badge": "10% CODING",
          "theme": "amber",
          "icon": "⚙️",
          "title": "الجينات المشفرة (Genes for Proteins)",
          "items": [
            "Only 10% of total DNA used for genetic coding",
            "Synthesizes structural and metabolic proteins",
            "Highly conserved and shared across all human populations"
          ]
        },
        {
          "badge": "90% SILENT",
          "theme": "cyan",
          "icon": "💎",
          "title": "المناطق الصامتة (Forensics Goldmine)",
          "items": [
            "90% of DNA has NO known protein synthesis function",
            "Hypervariable sequences (extreme polymorphism)",
            "Constant throughout life in every nucleated cell",
            "Strictly inherited from biological parents to children"
          ],
          "highlight": "الـ 90% الصامتة هي سر تفرد البصمة الوراثية لكل بني آدم على الكوكب!"
        }
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
      "cards": [
        {
          "badge": "PROBABILITY SCALE",
          "theme": "purple",
          "icon": "🎲",
          "title": "احتمالات التطابق الوراثي",
          "items": [
            "Between 2 Unrelated Persons: 1 in a Million Billion (1 in 10¹⁵)",
            "Among Biological Siblings (الأشقاء): 1 in Ten Thousand Billion (1 in 10¹³)",
            "Uniovular (Identical) Twins: 100% IDENTICAL DNA!"
          ]
        },
        {
          "badge": "THE TWIN SOLUTION",
          "theme": "emerald",
          "icon": "🖐️",
          "title": "حل معضلة التوأم المتطابق",
          "items": [
            "Uniovular twins share the exact same fertilized ovum DNA",
            "DNA Profiling CANNOT distinguish identical twins in court",
            "THE JUDICIAL SAVIOR: DACTYLOGRAPHY (FINGERPRINTS)!",
            "Intrauterine fluid pressures create unique fingerprints even for identical twins!"
          ],
          "highlight": "البصمات الجلدية هي الدليل البيولوجي الوحيد الذي يفصل بين التوأمين المتطابقين."
        }
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
      "cards": [
        {
          "badge": "15 AUTOSOMAL LOCI",
          "theme": "cyan",
          "icon": "🧬",
          "title": "15 موقعاً على كروموسومات جسدية",
          "items": [
            "Located on intergenic silent areas of autosomal chromosomes",
            "Provides discrimination power exceeding 1 in 10¹⁵",
            "Standard international profiling set (CODIS / Interpol loci)"
          ]
        },
        {
          "badge": "1 SEX LOCUS: AMELOGENIN",
          "theme": "rose",
          "icon": "⚧",
          "title": "موقع الأميلوجينين لتحديد الجنس",
          "items": [
            "Located on sex chromosomes (X and Y)",
            "Codes for tooth enamel matrix protein with different sequence sizes",
            "Interpretation: XX profile = Female (أنثى) | XY profile = Male (ذكر)",
            "Definitively identifies sex from charred fragments & decomposed bones"
          ]
        }
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
      "cards": [
        {
          "badge": "Y-CHROMOSOME (Y-STR)",
          "theme": "cyan",
          "icon": "♂️",
          "title": "كروموسوم الذكورة (Paternal Lineage)",
          "items": [
            "Inherited strictly from biological father to sons",
            "Linked with male surname (اسم ولقب العائلة)",
            "FORENSIC SUPERPOWER: Crimes of Multiple / Gang Rape!",
            "Untangles mixed semen stains containing traces from multiple men"
          ],
          "highlight": "يفصل السائل المنوي المختلط في قضايا الاغتصاب الجماعي."
        },
        {
          "badge": "MITOCHONDRIAL DNA (mtDNA)",
          "theme": "rose",
          "icon": "♀️",
          "title": "حمض الميتوكوندريا (Maternal Lineage)",
          "items": [
            "Located in cytoplasm outside the nucleus (mitochondria)",
            "Found in NON-NUCLEATED samples: Hair shafts without root, Nails, RBCs",
            "Transmitted exclusively through the maternal ovum",
            "Identifies maternal origin only (سلالة الأم فقط)"
          ],
          "highlight": "يحل لغز ساق الشعرة المكسورة بدون بصيلة والأظافر."
        }
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
      "flowchart": [
        { "step": "STEP 1", "icon": "🧪", "title": "Collection", "desc": "From nucleated cells (semen, hair root, WBCs). Handle with sterile precautions against contamination" },
        { "step": "STEP 2", "icon": "❄️", "title": "Preservation", "desc": "Preserve fresh samples at -20°C/-80°C to prevent enzymatic and bacterial degradation" },
        { "step": "STEP 3", "icon": "🔬", "title": "Extraction", "desc": "Chemical lysis and purification of pristine DNA strands from cellular matrices" },
        { "step": "STEP 4", "icon": "⚡", "title": "PCR Amplification", "desc": "Polymerase Chain Reaction creates millions of copies of the 16 target loci" },
        { "step": "STEP 5", "icon": "📊", "title": "Agar Electrophoresis", "desc": "Electric voltage separates amplified DNA fragments by molecular size & charge" },
        { "step": "STEP 6", "icon": "📸", "title": "Laser Camera", "desc": "Laser camera connected to computer documents, compares, and stores band profiles" }
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
      "cards": [
        {
          "badge": "DEFINITIVE TEST",
          "theme": "emerald",
          "icon": "⚖️",
          "title": "قضايا النسب (Disputed Paternity)",
          "items": [
            "ABO Blood Groups: Good Negative ONLY (Can exclude paternity, CANNOT prove it!)",
            "DNA Typing: DEFINITIVE PATERNITY TEST (Both positive confirmation and exclusion!)",
            "Child inherits 50% from mother and 50% from biological father"
          ],
          "highlight": "اختبار قطعي بنسبة تفوق 99.999% لحسم قضايا النسب والميراث."
        },
        {
          "badge": "CRIMINAL & DVI",
          "theme": "cyan",
          "icon": "🔍",
          "title": "الجنايات واستعراف الرفات والكوارث",
          "items": [
            "Identification or elimination of crime suspects in Murder, Robbery, Rape",
            "Identification of body remains (DVI) in plane crashes, explosions, charred bodies",
            "Sex & Species identification via polymorphism in non-coding satellite sequences"
          ]
        }
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
      "cards": [
        {
          "badge": "Q1 & Q2",
          "theme": "cyan",
          "icon": "📝",
          "title": "العظام عند 16 سنة والأهمية الجنائية لـ 18 سنة",
          "items": [
            "Q1 (Age 16y): Lateral epicondyle + upper ulna + lesser trochanter (male) / Distal metacarpals (female)",
            "Q2 (Age 18y): Marriage, rape consent, voting, driving, civil service, military, FULL adult criminal responsibility & execution"
          ]
        },
        {
          "badge": "Q3 & Q4",
          "theme": "amber",
          "icon": "📝",
          "title": "مذكرة البصمات وخطوات فحص الـ DNA",
          "items": [
            "Q3 (Dactylography): Ridges with sweat pores; 1 in 64B; epidermis + dermis; celiac/dermatitis reversible; leprosy permanent; scars add points of ID",
            "Q4 (DNA Steps): 1. Collection, 2. Preservation, 3. Extraction, 4. PCR, 5. Electrophoresis, 6. Laser imaging"
          ]
        },
        {
          "badge": "Q5",
          "theme": "emerald",
          "icon": "📝",
          "title": "تطبيقات الـ DNA القضائية",
          "items": [
            "1. Suspect identification & elimination",
            "2. Definitive paternity test",
            "3. Body remains & disaster victim identification (DVI)",
            "4. Sex & species determination"
          ]
        }
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

ain_shams_all = [
  {
    "title": "The Skull & Living ID: Personal ID, Fontanels, Sutures & Mandible",
    "description": "Ain Shams forensic foundation: 6-step ID protocol, 8 civil & 2 criminal living cases, 13-5-4 infant skull, fontanels finger metric, cranial suture timeline, the Negroid metopic trap, and mandible metamorphosis.",
    "slides": ep1_slides
  },
  {
    "title": "Bone Age & Dentition: Eruption, Centers & Legal Ages (MLI)",
    "description": "Milky (20) & permanent (32) dentition, 4 differences, ossific centers (1-6y, patella at 3y), epiphyseal union (6-70y, female lead), and complete Medico-Legal Importance (MLI) table (6 to 60y).",
    "slides": ep2_slides
  },
  {
    "title": "Prints & DNA Profiling: Dactylography, Forensic Loci & Typing",
    "description": "Dactylography (1 in 64B, epidermis vs dermis), DNA double helix, 90% silent regions, 16 forensic loci, Amelogenin sex marker, Y-chromosome, mtDNA, 6 steps of typing, and paternity.",
    "slides": ep3_slides
  }
]

# Update window.AIN_SHAMS_SLIDES_DATA in slides-site/app.js
json_deck = json.dumps(ain_shams_all, ensure_ascii=False, indent=2)
pattern = r'window\.AIN_SHAMS_SLIDES_DATA\s*=\s*\[[\s\S]*?\];\s*(/\*\s*═+\s*MUST SLIDE DATA)'
replacement = f"window.AIN_SHAMS_SLIDES_DATA = {json_deck};\n\n\\1"

app_js = re.sub(pattern, lambda m: f"window.AIN_SHAMS_SLIDES_DATA = {json_deck};\n\n{m.group(1)}", app_js, count=1)

with open("slides-site/app.js", "w", encoding="utf-8") as f:
    f.write(app_js)

print("SUCCESS: AIN_SHAMS_SLIDES_DATA enhanced with full visual structures!")
