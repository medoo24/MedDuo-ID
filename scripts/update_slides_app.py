import re

with open("slides-site/app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update SLIDES_APP_VERSION
content = content.replace("const SLIDES_APP_VERSION = 'v2.2_mnemonics_and_images_2026';", "const SLIDES_APP_VERSION = 'v2.3_ain_shams_track_2026';")

# 2. Prepare AIN_SHAMS_SLIDES_DATA
ain_shams_json = '''
/* ════════════════════════════════════
   AIN SHAMS SLIDE DATA (Chapter 3: ID & DNA)
   ════════════════════════════════════ */
window.AIN_SHAMS_SLIDES_DATA = [
  {
    "title": "The Skull & Living ID: Personal ID, Fontanels, Sutures & Mandible",
    "description": "Ain Shams forensic foundation: 6-step ID protocol, 8 civil & 2 criminal living cases, 13-5-4 infant skull, fontanels finger metric, cranial suture timeline, the Negroid metopic trap, and mandible metamorphosis.",
    "slides": [
      {
        "type": "title",
        "title": "Personal Identification & The Skull — Living ID, Fontanels & Sutures",
        "content": {
          "bullets": [
            "Faculty of Medicine, Ain Shams University · Chapter 3 (Pages 37–40, 42)",
            "Episode 1 · Ain Shams Forensic Trilogy",
            "Presented by Dr. Tarek & Dr. Atef",
            "Comprehensive Clinical-Forensic Guide: Living ID, Cranial Architecture & Oral Exam Traps"
          ]
        },
        "images": [],
        "notes": "أهلاً بكم في الحلقة الأولى من ثلاثية منهج طب عين شمس. نناقش في هذه الحلقة الاستعراف واستعراف الأحياء وتشريح الجمجمة بالتفصيل المعتمد في امتحانات القسم."
      },
      {
        "type": "case",
        "title": "Case Investigation: The ICU Coma, Missing Heir & The Heliopolis Remains",
        "content": {
          "bullets": [
            "Case 1: Deep coma patient admitted to El-Demerdash ICU with no identity documents (Civil identification required)",
            "Case 2: Unregistered adult ('ساقط قيد') claiming to be the legitimate heir of an estate; court demands biological verification",
            "Case 3: Airport arrest of an impostor presenting a forged birth certificate claiming age under 15 to evade extradition",
            "Case 4: Human skeletal remains (infant cranium and weathered mandible) discovered at a Heliopolis construction site",
            "Prosecution Mandate: Determine living identity, chronological age, race, and skeletal profile with scientific certainty"
          ]
        },
        "images": [
          {
            "url": "images/charred_skull_forensics.jpg",
            "caption": "فحص رفات الجمجمة والفك في مشرحة الدمرداش لتحديد الهوية والسن والعرق في قضايا الجنايات والميراث"
          }
        ],
        "notes": "القضية الجنائية والمدنية تجمع بين استعراف الأحياء والجمجمة، وهي المدخل الواقعي لكل جدول وقانون في هذا الفصل."
      },
      {
        "type": "concept",
        "title": "Personal Identification: Definition & The 6-Step Standard Hierarchy",
        "content": {
          "bullets": [
            "Definition: Determination of individuality of a person, living or dead, complete or in parts",
            "Standard 6-Step Hierarchy (Ain Shams Curriculum, Page 37):",
            "  1. Race: Caucasoid, Negroid, or Mongoloid (cranial vault shape & cephalic index)",
            "  2. Sex: Male vs Female (pelvis, skull, long bones, DNA Amelogenin locus)",
            "  3. Age: Teeth eruption, ossific centers, epiphyseal union, suture closure",
            "  4. Stature: Long bone measurements via osteometric board & mathematical regression formulas",
            "  5. General Features: Complexion, hair, eyes, facial contour, and dental alignment",
            "  6. Individual Peculiar Features: Scars, tattoos, deformities, occupational marks, prints, and DNA profile"
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
          "bullets": [
            "8 Civil Scenarios (حالات الاستعراف المدني):",
            "  • Coma, head injury, and amnesia patients in emergency care",
            "  • Missing persons reunited after long periods",
            "  • Newborn babies inadvertently switched or mixed in hospital nurseries",
            "  • Impostors claiming inheritance, royal lineage, or disputed property ('ساقط قيد')",
            "  • Disputed identity in marriage contracts or nullity petitions",
            "  • Military conscription fitness and age compliance",
            "  • Civil service employment, retirement pension verification (Age 60), and insurance claims",
            "  • Passports, immigration, border security, and citizenship naturalization",
            "2 Criminal Scenarios (حالات الاستعراف الجنائي):",
            "  • Fugitive criminals and recidivists (أرباب السوابق والهاربون من العدالة)",
            "  • Accused suspects confronted with eyewitnesses in formal police line-ups (طابور العرض)",
            "Forensic Historical Pearl: Ear biometrics (cartilage whorls) used to verify Saddam Hussein from surgical body doubles"
          ]
        },
        "images": [
          {
            "url": "images/el_prince_illustration.jpg",
            "caption": "استعراف الأحياء الجنائي: المتهمون وأرباب السوابق في طوابير العرض وتطابق البصمات والقياسات الحيوية"
          }
        ],
        "notes": "سؤال شفوي متكرر: اذكر 5 حالات مدنية وحالتين جنائيتين للاستعراف على الأحياء. تذكر أطفال الحضانة، غيبوبة الطوارئ، وطابور العرض."
      },
      {
        "type": "concept",
        "title": "Biometrics Architecture: Physical vs Behavioral Modalities",
        "content": {
          "bullets": [
            "Definition: Automated verification or identification based on physiological or behavioral characteristics",
            "Physical Biometrics (القياسات التشريحية الفيزيائية — ثبات تركيبي مدى الحياة):",
            "  • Dactylography (Fingerprints): 1 in 64 billion chance; present in epidermis & dermis",
            "  • Iris Recognition: Intricate trabecular meshwork; unique even between identical twins",
            "  • Facial Geometry: Nodal facial distances (interpupillary, nasal bridge, jaw contour)",
            "  • Ear Auricle: Morphological topography of concha, helix, and antihelix",
            "  • Palmar & Plantar Prints: Epidermal friction ridges on palms and soles",
            "  • Vascular Vein Scanning: Near-infrared imaging of subcutaneous venous maps",
            "Behavioral Biometrics (القياسات السلوكية — تتأثر بالحالة النفسية والإجهاد والمرض):",
            "  • Voiceprint: Acoustic frequency spectrum, resonance, and formant shifts",
            "  • Dynamic Signature: Pen acceleration, stroke vectoring, and pressure patterns",
            "  • Gait Analysis: Spatiotemporal step cadence, velocity, and limb excursion angles"
          ]
        },
        "images": [
          {
            "url": "images/fingerprint_patterns_dna.jpg",
            "caption": "القياسات الحيوية (Biometrics): البصمات وشبكية العين وهندسة الوجه مقابل البصمة الصوتية والتوقيع الحركي"
          }
        ],
        "notes": "الميزة الجوهرية: القياسات الفيزيائية ثابتة تشريحياً ولا تتغير، بينما القياسات السلوكية تتأثر بالإجهاد والحالة النفسية."
      },
      {
        "type": "anatomy",
        "title": "The Infant Skull: The 13-5-4 Golden Architectural Formula",
        "content": {
          "bullets": [
            "Structural Distinctives (Ain Shams Forensic Anatomy, Page 38):",
            "  • Cranium to Face Ratio: 8 : 1 at birth (massive neurocranium) vs 2 : 1 in adults",
            "  • Dual Ossification: Membranous vault (birth canal compressibility) + Cartilaginous base (brainstem protection)",
            "The 13-5-4 Mnemonic Rule (قاعدة الـ 13-5-4 الذهبية لجمجمة الرضيع):",
            "  • 13 Bones form the vault: 2 frontal, 2 parietal, 1 occipital (interparietal), 4 parts each temporal (8 total)",
            "  • 5 Fontanelles (اليافيخ): 2 Median (Anterior & Posterior) + 3 Lateral pairs (Anterolateral, Posterolateral)",
            "  • 4 Sutural Lines (الدرزات): Frontal (metopic), Sagittal, Coronal, and Lambdoid sutures",
            "Functional Significance: Elastic birth moldability without brain injury; rapid brain enlargement in early childhood"
          ]
        },
        "images": [
          {
            "url": "images/skull_sutures_diagram.jpg",
            "caption": "تشريح جمجمة الرضيع: نسبة الجمجمة للوجه 8:1، وقاعدة الـ 13 عظمة، 5 يافيخ، و4 خطوط درزية"
          }
        ],
        "notes": "نسبة الجمجمة للوجه 8:1 في الرضيع وتصبح 2:1 في البالغين؛ سؤال شفوي كلاسيكي في كل لجان الامتحانات."
      },
      {
        "type": "concept",
        "title": "Fontanels: The Shrinking Finger Metric (Bregma vs Lambda)",
        "content": {
          "bullets": [
            "Anterior Fontanelle (Bregma / اليافوخ الأمامي):",
            "  • Shape: Diamond-shaped (معين الشكل), at junction of frontal and sagittal sutures",
            "  • Size at Birth: Admits 3 fingers breadth (اتساع 3 أصابع فاحصة)",
            "  • Shrinking Rate: Shrinks by 1 finger breadth every 6 months!",
            "    - At birth → 3 fingers breadth",
            "    - At 6 months → 2 fingers breadth",
            "    - At 12 months (1 year) → 1 finger breadth",
            "    - At 18 months (1.5 years) → Fully closed (Complete ossification)",
            "Posterior Fontanelle (Lambda / اليافوخ الخلفي):",
            "  • Shape: Triangular (مثلث الشكل), at junction of sagittal and lambdoid sutures",
            "  • Closure Age: Closes at 2 to 3 months after birth",
            "Forensic & Pediatric Red Flags:",
            "  • Bulging fontanel: Raised intracranial pressure, meningitis, subdural hematoma (shaken baby)",
            "  • Depressed fontanel: Severe infantile dehydration, starvation, or acute neglect"
          ]
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
          "bullets": [
            "Normal Suture Closure Timeline (Ain Shams Curriculum, Page 40):",
            "  • Frontal (Metopic) Suture: Closes at 3 years normally",
            "  • Sagittal Suture: Closes at 30 years (commences from endocranial / inner aspect)",
            "  • Coronal Suture: Closes at 40 years",
            "  • Lambdoid Suture: Closes at 50 years",
            "  • Complete Obliteration: All cranial sutures close at 70 years (except temporoparietal suture)",
            "The #1 Ain Shams Exam Trap — Negroid Frontal Suture Persistence:",
            "  • General rule: Frontal suture closes at 3 years",
            "  • Negroid Skull Exception: Metopic suture persists up to 30 years of age!",
            "  • Medico-Legal Trap: An open frontal suture in a skull does NOT prove an age under 3 years if Negroid racial features are present!"
          ]
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
          "bullets": [
            "Infant Mandible (فك الرضيع):",
            "  • Angle: Obtuse (~140°)",
            "  • Symphysis Menti: 2 separate halves united by fibrous tissue at birth; unites by bone at 1–2 years",
            "  • Mental Foramen: Positioned near lower border (below deciduous tooth buds)",
            "Adult Mandible (فك البالغ):",
            "  • Angle: Right angle (~110°–120°) due to vigorous masticatory muscle pull (masseter & medial pterygoid)",
            "  • Dental Arch: Complete permanent dentition (16 teeth) with well-developed alveolar ridge",
            "  • Mental Foramen: Midway between upper and lower borders (below 2nd premolar)",
            "Senile / Elderly Mandible (فك المسن العجوز):",
            "  • Angle: Reverts to Obtuse (~140°) due to loss of teeth and masticatory muscle atrophy",
            "  • Alveolar Margin: Markedly resorbed (ضمور الحافة السنخية) following tooth loss",
            "  • Mental Foramen: Shifted to lie near the upper border!"
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
          "bullets": [
            "8:1 Ratio → Cranium to face size in infants (converts to 2:1 in adults)",
            "3 Fingers → Anterior fontanel at birth, shrinking by 1 finger every 6m to close at 18 months",
            "2–3 Months → Posterior triangular fontanel closure",
            "3 Years vs 30 Years → Frontal metopic suture closure (Normal 3y vs Negroid skulls up to 30y)",
            "140° vs 110° vs 140° → Angle of mandible (Infant → Adult → Senile with alveolar resorption)",
            "8 + 2 Scenarios → Living identification: 8 Civil cases + 2 Criminal cases",
            "6-Step Hierarchy → Race → Sex → Age → Stature → General features → Peculiar individual marks"
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
  },
  {
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
  },
  {
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
  }
];

/* ════════════════════════════════════
   MUST SLIDE DATA (The Bone Code · 8 Episodes)
   ════════════════════════════════════ */
window.MUST_SLIDES_DATA = [
'''

# Replace "window.SLIDES_DATA = [" with AIN_SHAMS and MUST_SLIDES_DATA
content = content.replace("/* ════════════════════════════════════\n   SLIDE DATA\n   ════════════════════════════════════ */\nwindow.SLIDES_DATA = [", ain_shams_json, 1)

# Now after MUST_SLIDES_DATA closes at line 1739:
old_state_def = '''const state = {
  view: 'home',       // 'home' | 'episode' | 'favorites'
  epIdx: 0,
  slideIdx: 0,
  overviewMode: false,
  presMode: false,
  addSlideAfter: null, // null = end, number = after index
};'''

new_state_def = '''// Determine initial track from URL or localStorage
const initialUrlTrack = new URLSearchParams(window.location.search).get('track');
const initialStoredTrack = localStorage.getItem('medduo_selected_track');
const defaultTrack = (initialUrlTrack === 'must' || (!initialUrlTrack && initialStoredTrack === 'must')) ? 'must' : 'ain_shams';

window.SLIDES_DATA = (defaultTrack === 'must') ? window.MUST_SLIDES_DATA : window.AIN_SHAMS_SLIDES_DATA;

const state = {
  view: 'home',       // 'home' | 'episode' | 'favorites'
  track: defaultTrack,// 'ain_shams' | 'must'
  epIdx: 0,
  slideIdx: 0,
  overviewMode: false,
  presMode: false,
  addSlideAfter: null, // null = end, number = after index
};'''

content = content.replace(old_state_def, new_state_def)

# Update getEpSlides and saveEpSlides
old_get_save = '''/* Episode data with localStorage overlay */
function getEpSlides(epIdx) {
  const key = `medduo_slides_edits_${epIdx}`;
  const saved = localStorage.getItem(key);
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  // Deep clone to avoid mutating the master data
  return JSON.parse(JSON.stringify(window.SLIDES_DATA[epIdx].slides));
}
function saveEpSlides(epIdx, slides) {
  localStorage.setItem(`medduo_slides_edits_${epIdx}`, JSON.stringify(slides));
}'''

new_get_save = '''/* Episode data with localStorage overlay & track isolation */
function getEpSlides(epIdx) {
  const track = state.track || 'ain_shams';
  const key = `medduo_slides_edits_${track}_${epIdx}`;
  const saved = localStorage.getItem(key);
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  // Backward compatibility for legacy MUST track edits
  if (track === 'must') {
    const legacySaved = localStorage.getItem(`medduo_slides_edits_${epIdx}`);
    if (legacySaved) {
      try { return JSON.parse(legacySaved); } catch(e) {}
    }
  }
  const epData = (track === 'must') ? window.MUST_SLIDES_DATA : window.AIN_SHAMS_SLIDES_DATA;
  if (!epData || !epData[epIdx]) return [];
  // Deep clone to avoid mutating the master data
  return JSON.parse(JSON.stringify(epData[epIdx].slides));
}
function saveEpSlides(epIdx, slides) {
  const track = state.track || 'ain_shams';
  localStorage.setItem(`medduo_slides_edits_${track}_${epIdx}`, JSON.stringify(slides));
}'''

content = content.replace(old_get_save, new_get_save)

# Add track switcher function
track_switcher_code = '''
/* ════════════════════════════════════
   TRACK SWITCHING (Ain Shams vs MUST)
   ════════════════════════════════════ */
function updateActiveTrack(newTrack, skipHistory = false) {
  state.track = (newTrack === 'must') ? 'must' : 'ain_shams';
  localStorage.setItem('medduo_selected_track', state.track);
  window.SLIDES_DATA = (state.track === 'must') ? window.MUST_SLIDES_DATA : window.AIN_SHAMS_SLIDES_DATA;

  // Update tabs UI
  const tabAin = document.getElementById('tab-ain-shams');
  const tabMust = document.getElementById('tab-must');
  if (tabAin && tabMust) {
    tabAin.classList.toggle('active', state.track === 'ain_shams');
    tabMust.classList.toggle('active', state.track === 'must');
  }

  // Update hero title & sub
  const heroTitle = document.querySelector('.hero-title');
  const heroSub = document.querySelector('.hero-sub');
  if (heroTitle && heroSub) {
    if (state.track === 'ain_shams') {
      heroTitle.innerHTML = 'Ain Shams <span>Forensic</span>';
      heroSub.textContent = 'Identification & DNA Typing (Chapter 3) · 3 Episodes · MedDuo Series';
    } else {
      heroTitle.innerHTML = 'The <span>Bone</span> Code';
      heroSub.textContent = 'Forensic Medicine · 8 Episodes · MedDuo Podcast';
    }
  }

  // Update URL search parameter
  if (!skipHistory) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('track', state.track);
      window.history.replaceState({}, '', url.toString());
    } catch(e) {}
  }

  // Re-render home if active
  if (state.view === 'home') {
    renderHome();
  }
}
'''

# Insert track_switcher_code right before renderHome
content = content.replace("/* ════════════════════════════════════\n   HOME RENDER\n   ════════════════════════════════════ */", track_switcher_code + "\n/* ════════════════════════════════════\n   HOME RENDER\n   ════════════════════════════════════ */")

# Update DOMContentLoaded
old_dom_loaded = """document.addEventListener('DOMContentLoaded', () => {
  renderHome();"""

new_dom_loaded = """document.addEventListener('DOMContentLoaded', () => {
  // Track tabs event listeners
  const tabAin = document.getElementById('tab-ain-shams');
  const tabMust = document.getElementById('tab-must');
  if (tabAin) tabAin.addEventListener('click', () => updateActiveTrack('ain_shams'));
  if (tabMust) tabMust.addEventListener('click', () => updateActiveTrack('must'));

  // Initialize track state
  updateActiveTrack(state.track, true);

  renderHome();"""

content = content.replace(old_dom_loaded, new_dom_loaded)

with open("slides-site/app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("slides-site/app.js successfully updated!")
