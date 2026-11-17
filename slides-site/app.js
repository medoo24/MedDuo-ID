const SLIDES_APP_VERSION = 'v2.3_ain_shams_track_2026';
(function checkSlidesVersion() {
  try {
    const cur = localStorage.getItem('medduo_slides_version');
    if (cur !== SLIDES_APP_VERSION) {
      console.log('[MedDuo Slides] Upgrading cache to ' + SLIDES_APP_VERSION);
      for (let i = 0; i < 8; i++) {
        localStorage.removeItem(`medduo_slides_edits_${i}`);
      }
      localStorage.setItem('medduo_slides_version', SLIDES_APP_VERSION);
    }
  } catch(e) {}
})();

function getResolvedImageData(url) {
  if (!url || typeof url !== 'string') return '';
  if (url.startsWith('data:')) return url;
  if (window.SLIDES_IMAGES_DATA) {
    if (window.SLIDES_IMAGES_DATA[url]) return window.SLIDES_IMAGES_DATA[url];
    const clean = url.replace(/^(\.\/|\/)?(images\/)?/, '');
    if (window.SLIDES_IMAGES_DATA['images/' + clean]) return window.SLIDES_IMAGES_DATA['images/' + clean];
    if (window.SLIDES_IMAGES_DATA[clean]) return window.SLIDES_IMAGES_DATA[clean];
  }
  return url;
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ══════════════════════════════════════════════════════════════════
   MedDuo Slides — app.js
   The Bone Code · Pure JS, no frameworks
   ══════════════════════════════════════════════════════════════════ */


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
            "Faculty of Medicine, Ain Shams University · Forensic Medicine Department",
            "Chapter 3: Identification & DNA Typing (Pages 37–40, 42)",
            "Core Foundations: Living ID Scenarios, 6-Step Protocol, Fontanelles, Sutures & Mandible",
            "Presented by MedDuo Forensic Team"
          ]
        },
        "images": [],
        "notes": "أهلاً بكم في العرض التقديمي الأكاديمي الشامل لشبتر الاستعراف والجمجمة طبقاً لكتاب طب عين شمس."
      },
      {
        "type": "concept",
        "title": "Medico-Legal Scenarios: 4 Cardinal Identification Challenges",
        "content": {
          "bullets": [
            "1. Unidentified Living Coma Patient: Elderly ICU admission without civil documents requiring legal identity verification",
            "2. Disputed Heirship / Unregistered Person: Claim of parenthood requiring biological and somatic verification",
            "3. Disputed Minor Age in Criminal Offenses: Accused claiming juvenile status (<15y) to evade adult criminal liability",
            "4. Decomposed / Skeletonized Remains: Excavated infant skull and mandible requiring age, viability, and race determination",
            "Clinical Mandate: Forensic identification establishes absolute civil status, inheritance rights, and criminal responsibility"
          ]
        },
        "images": [
          {
            "url": "images/charred_skull_forensics.jpg",
            "caption": "Forensic evaluation of cranial remains and mandible in medico-legal investigations to establish age, sex, and identity"
          }
        ],
        "notes": "السيناريوهات الأربعة الأساسية في الطب الشرعي: مريض الغيبوبة، نزاع الميراث، ادعاء صغر السن، وفحص الرفات العظمية."
      },
      {
        "type": "concept",
        "title": "Personal Identification: Definition & The 6-Step Standard Hierarchy",
        "content": {
          "bullets": [
            "Definition: Recognition of an individual living or dead based on distinctive biological and physical characteristics",
            "Standard 6-Step Medico-Legal Hierarchy (Sequential Elimination):",
            "   • 1. Race: Caucasoid, Negroid, Mongoloid (Skull shape & Cephalic Index)",
            "   • 2. Sex: Pelvis (most accurate), Skull, Long bones, and DNA (Amelogenin locus)",
            "   • 3. Age: Deciduous & permanent teeth, ossification centers, epiphyseal union, and sutures",
            "   • 4. Stature: Long bone osteometry via Trotter & Gleser regression formulae",
            "   • 5. General Features: Complexion, facial contour, hair, eyes, and dental alignment",
            "   • 6. Peculiar Marks: Fingerprints, scars, tattoos, moles, and congenital deformities"
          ]
        },
        "images": [
          {
            "url": "images/identification_hierarchy.jpg",
            "caption": "The 6-step standard hierarchy of forensic identification from broad racial triage to individualizing peculiar marks"
          }
        ],
        "notes": "التسلسل القياسي للاستعراف: العرق، ثم الجنس، ثم السن، ثم القامة، ثم الملامح العامة، وأخيراً العلامات المميزة."
      },
      {
        "type": "concept",
        "title": "Identification of the Living: 8 Civil & 2 Criminal Medico-Legal Scenarios",
        "content": {
          "bullets": [
            "A. Civil Identification Situations (8 Situations):",
            "   • 1. Persons of unknown identity found unconscious, comatose, or insane",
            "   • 2. Lost children and foundlings (abandoned infants)",
            "   • 3. Persons suffering from memory loss (amnesia) or fugue states",
            "   • 4. Missing persons, soldiers in war, and disaster survivors",
            "   • 5. Disputed parentage, inheritance claims, and paternity suits",
            "   • 6. Pretended death to claim life insurance or evade legal obligations",
            "   • 7. Impersonation of another person to claim property, titles, or wealth",
            "   • 8. Issuance of official documents (passports, national IDs, driver licenses, pensions)",
            "B. Criminal Identification Situations (2 Situations):",
            "   • 1. Criminals and suspects accused of offenses or crimes",
            "   • 2. Absconding prisoners, escaped convicts, and repeat offenders (recidivists)"
          ]
        },
        "images": [
          {
            "url": "images/living_id_situations.jpg",
            "caption": "Medico-legal classification of living identification: 8 civil situations and 2 criminal situations"
          }
        ],
        "notes": "استعراف الأحياء: 8 مواقف مدنية وموقفان جنائيان من صميم كتاب عين شمس ص 37-38."
      },
      {
        "type": "table",
        "title": "Biometric Identification: Physical vs Behavioral Modalities",
        "content": {
          "headers": [
            "Modality Category",
            "Biometric Features",
            "Forensic Stability & Accuracy"
          ],
          "rows": [
            [
              "Physical Biometrics",
              "Fingerprints (Dactylography), Palm prints, Footprints",
              "Permanent, unalterable from 4th month I.U. till death"
            ],
            [
              "Ocular Biometrics",
              "Retinal blood vessel patterns & Iris scanning",
              "Extremely unique (1 in 10^78), unaffected by contact lenses"
            ],
            [
              "Facial & Dental",
              "Facial recognition geometry, Forensic odontogram",
              "Distinctive anatomical landmarks, useful in mass disasters"
            ],
            [
              "Genetic Biometrics",
              "DNA profiling (STR multiplexing & Amelogenin)",
              "Definitive biological proof; identical only in monozygotic twins"
            ],
            [
              "Behavioral Biometrics",
              "Handwriting/Signature, Voice print, Keystroke dynamics",
              "Modifiable by neurological disease, aging, drugs, or stress"
            ]
          ],
          "extra_bullets": [
            "Physical biometrics provide unalterable structural proof, whereas behavioral modalities require corroborative validation."
          ]
        },
        "images": [
          {
            "url": "images/biometrics_comparison.jpg",
            "caption": "Biometric modalities comparison: anatomical stability of physical markers vs dynamic variability of behavioral traits"
          }
        ],
        "notes": "القياسات الحيوية: الفيزيائية ثابتة مدى الحياة ولا تتغير، بينما السلوكية تتأثر بالإجهاد والمرض."
      },
      {
        "type": "concept",
        "title": "The Infant Skull: Architectural Proportions & Mode of Development",
        "content": {
          "bullets": [
            "1. Vault vs Facial Skeleton Proportions:",
            "   • At Birth: Cranium (vault) to face ratio is 8:1 (reflects rapid intrauterine brain growth)",
            "   • In Adults: Cranium to face ratio decreases to 2:1 (expansion of masticatory apparatus & air sinuses)",
            "2. Mode of Skull Bone Development:",
            "   • Vault of the Skull: Develops purely in membrane (fibrous intramembranous ossification)",
            "   • Base of the Skull: Develops in cartilage (endochondral ossification)",
            "3. The 13-5-4 Golden Growth Rule:",
            "   • Circumference at birth = 13 inches (33 cm)",
            "   • Increases by 5 inches during 1st year (reaches 18 inches at age 1 year)",
            "   • Increases by only 4 inches during rest of life (reaches adult average of 22 inches / 56 cm)",
            "Forensic Value: Differentiates viable full-term newborn from pre-term fetus or infant remains"
          ]
        },
        "images": [
          {
            "url": "images/infant_skull_anatomy.jpg",
            "caption": "Infant skull architecture: 8:1 vault to face ratio, open fontanelles, and the 13-5-4 growth rule"
          }
        ],
        "notes": "نسبة الجمجمة للوجه عند الولادة 8:1 وفي البالغين 2:1، وقاعدة 13-5-4 للنمو المحيطي."
      },
      {
        "type": "table",
        "title": "Fontanelles: Chronology, Dimensional Closure & Clinical Red Flags",
        "content": {
          "headers": [
            "Fontanelle",
            "Shape & Location",
            "Normal Closure Timeline",
            "Finger-Breadth Metric / Signs"
          ],
          "rows": [
            [
              "Anterior (Bregma)",
              "Diamond-shaped (sagittal, coronal, frontal sutures)",
              "Closes at 1.5 – 2 years (18–24 months)",
              "Birth = 3 fingers; 9m = 2 fingers; 1y = 1 finger; 18-24m = fully closed"
            ],
            [
              "Posterior (Lambda)",
              "Triangular (sagittal & lambdoid sutures)",
              "Closes at birth or up to 2–3 months",
              "Normally impalpable or tiny cleft after 2nd-3rd month"
            ],
            [
              "Bulging Fontanelle",
              "Elevated above cranial plane",
              "Pathological emergency",
              "Increased ICP: Meningitis, encephalitis, intracranial hemorrhage, hydrocephalus"
            ],
            [
              "Sunken Fontanelle",
              "Depressed below cranial plane",
              "Pathological emergency",
              "Severe infantile dehydration (gastroenteritis), malnutrition, or shock"
            ]
          ],
          "extra_bullets": [
            "Medico-Legal Pearls: Essential for post-mortem infant age estimation; clinical access route for sagittal sinus blood sampling."
          ]
        },
        "images": [
          {
            "url": "images/fontanelle_finger_rule.jpg",
            "caption": "Fontanelle closure chronology: the shrinking finger metric from 3 fingers at birth to complete closure at 18-24 months"
          }
        ],
        "notes": "اليافوخ الأمامي يقفل عند سنة ونصف إلى سنتين بمقياس الأصابع، واليافوخ الخلفي يقفل عند الولادة إلى شهرين أو 3 أشهر."
      },
      {
        "type": "table",
        "title": "Cranial Suture Closure: Normal Chronology vs The Negroid Suture Trap",
        "content": {
          "headers": [
            "Suture Name",
            "Anatomical Location",
            "Obliteration Timeline",
            "Key Medico-Legal Exam Pearl"
          ],
          "rows": [
            [
              "Frontal (Metopic)",
              "Between two halves of frontal bone",
              "2 – 3 years",
              "Persistent in ~10% of Negroid race (Major Exam Trap: Do not mistake for adult skull!)"
            ],
            [
              "Sagittal Suture",
              "Midline between parietal bones",
              "30 years",
              "Starts endocranially at ~22–25y, completely obliterated ectocranially at 30y"
            ],
            [
              "Coronal Suture",
              "Between frontal and parietal bones",
              "40 years",
              "Begins closure at pterion, completely obliterated at age 40y"
            ],
            [
              "Lambdoid Suture",
              "Between occipital and parietal bones",
              "50 years",
              "Obliterated at age 50y; closure follows 'S-C-L' rule (30 - 40 - 50 years)"
            ],
            [
              "All Cranial Sutures",
              "Complete synostosis across skull",
              "70 years",
              "All obliterated except temporoparietal suture which remains open till late senility"
            ]
          ],
          "extra_bullets": [
            "Closure sequence: Endocranial union precedes ectocranial obliteration by several years."
          ]
        },
        "images": [
          {
            "url": "images/cranial_sutures_clock.jpg",
            "caption": "Cranial suture closure timeline: Sagittal (30y), Coronal (40y), Lambdoid (50y), and persistent Metopic suture trap"
          }
        ],
        "notes": "دروز الجمجمة: السهمي 30 سنة، الإكليلي 40 سنة، اللامي 50 سنة، وكلها 70 سنة ما عدا الصدغي الجداري. تذكر مصيدة العرق الزنجي في الدرز الجبهي!"
      },
      {
        "type": "table",
        "title": "Mandible Metamorphosis: Infant, Adult & Senile Morphological Features",
        "content": {
          "headers": [
            "Anatomical Feature",
            "Infant Mandible",
            "Adult Mandible",
            "Elderly / Senile Mandible"
          ],
          "rows": [
            [
              "Angle of Mandible",
              "Obtuse: 140° – 150° (ramus oblique)",
              "Nearly Right angle: 110° – 120° (ramus vertical)",
              "Obtuse again: 140° (resembles infantile angle)"
            ],
            [
              "Mental Foramen",
              "Near lower border (below milk tooth sockets)",
              "Midway between upper and lower borders",
              "Near upper alveolar border (due to alveolar resorption)"
            ],
            [
              "Symphysis Menti",
              "Fibrous synchondrosis at birth; fuses at 1–2y",
              "Completely fused with prominent mental protuberance",
              "Completely fused; mental process remains prominent"
            ],
            [
              "Alveolar Margin",
              "Rudimentary with un-erupted tooth buds",
              "Broad, deep, housing 16 permanent teeth",
              "Completely resorbed and thinned following tooth loss"
            ],
            [
              "Coronoid & Condyle",
              "Coronoid process higher than condyle",
              "Condyloid and coronoid processes balanced",
              "Condyle bent backwards; coronoid prominent"
            ]
          ],
          "extra_bullets": [
            "Diagnostic Value: Mandible is the strongest facial bone and provides rapid age triage in charred and fragmented remains."
          ]
        },
        "images": [
          {
            "url": "images/mandible_metamorphosis.jpg",
            "caption": "Mandible morphological metamorphosis: infant (obtuse angle, low foramen), adult (right angle, mid foramen), senile (obtuse, high foramen)"
          }
        ],
        "notes": "الفك السفلي: منفرجة عند الرضيع، قائمة عند البالغ، وتعود منفرجة عند المسن، مع تغير موقع الثقب الذقني."
      },
      {
        "type": "summary",
        "title": "Episode 1 High-Yield Summary: The Skull & Living Identification",
        "content": {
          "bullets": [
            "1. Hierarchy of Identification: Race → Sex → Age → Stature → General Features → Peculiar Marks",
            "2. Living Identification: 8 Civil scenarios (coma, lost child, amnesia, etc.) + 2 Criminal scenarios (suspects & recidivists)",
            "3. Cranium to Face Proportions: 8:1 at birth → 2:1 in adult (cranial vault in membrane, base in cartilage)",
            "4. Golden Growth Rule (13-5-4): Circumference 13\" at birth + 5\" in 1st year (18\") + 4\" rest of life (22\")",
            "5. Fontanelles: Bregma closes at 1.5–2y (3→2→1 finger rule); Lambda closes at birth to 2–3 months",
            "6. Suture Clocks (S-C-L): Sagittal 30y → Coronal 40y → Lambdoid 50y → All 70y (Metopic closes at 2–3y, persists in 10% Negroid)",
            "7. Mandible Metamorphosis: Angle is obtuse in infants (140°), right in adults (110°-120°), obtuse in elderly (140°)",
            "8. Mental Foramen Position: Low in infant → Midway in adult → High (upper border) in senile resorption"
          ]
        },
        "images": [
          {
            "url": "images/charred_skull_forensics.jpg",
            "caption": "High-yield summary matrix for skull and personal identification in Ain Shams forensic examinations"
          }
        ],
        "notes": "ملخص الأرقام الذهبية للامتحان الشفوي والتحريري لطب عين شمس - الباب الثالث."
      }
    ]
  },
  {
    "title": "Bone Age & Dentition: Eruption, Centers & Legal Ages (MLI)",
    "description": "Ain Shams bone age foundations: deciduous eruption ladder, permanent teeth WBSL differences, postnatal ossific centers (patella trap), elbow scissors (14-17y), female lead rule, and comprehensive Medico-Legal Importance (MLI) table.",
    "slides": [
      {
        "type": "title",
        "title": "The Forensic Age Train — Dentition, Epiphyseal Union & Legal Milestones (MLI)",
        "content": {
          "bullets": [
            "Faculty of Medicine, Ain Shams University · Forensic Medicine Department",
            "Chapter 3: Identification & DNA Typing (Pages 40–44)",
            "Chronological Dentition, Postnatal Ossific Centers, Epiphyseal Union & MLI",
            "Presented by MedDuo Forensic Team"
          ]
        },
        "images": [],
        "notes": "الحلقة الثانية: استعراف العمر عبر الأسنان، مراكز التعظم، التحام المشاشات، وجدول الأهمية الجنائية والمدنية."
      },
      {
        "type": "concept",
        "title": "Age Estimation Challenges: 4 Classic Forensic Scenarios",
        "content": {
          "bullets": [
            "1. Child Labor Offenses: Determining whether a juvenile worker is under 12y (training prohibited) or under 14y/16y/18y",
            "2. Age of Criminal Discrimination: Assessing whether a child offender is below 7y (absolute non-liability) or 7–15y",
            "3. Capital Sentence Threshold (Age 18): Verifying biological age of accused in heinous crimes to determine eligibility for death penalty",
            "4. Identification of Charred Adult Remains: Utilizing clavicular fusion (21-25y) and sternal synostosis (40-60y) to verify identity",
            "Forensic Principle: Teeth provide superior accuracy from infancy to 12y; epiphyseal union dominates from 14y to 25y"
          ]
        },
        "images": [
          {
            "url": "images/epiphyses_summary_deck.jpg",
            "caption": "Radiological examination of epiphyses and dental arches in forensic age estimation cases"
          }
        ],
        "notes": "السيناريوهات الأربعة الكلاسيكية: عمالة الأطفال، سن التمييز، حاجز الـ 18 سنة لتجنب الإعدام، وتحديد سن الجثث المتفحمة."
      },
      {
        "type": "table",
        "title": "Deciduous Dentition: Formula, Chronology & Clinical Rules",
        "content": {
          "headers": [
            "Tooth Type",
            "Dental Formula / Count",
            "Eruption Age Timeline",
            "Clinical & Mnemonic Key"
          ],
          "rows": [
            [
              "Lower Central Incisors",
              "2 Teeth (Right & Left)",
              "6 – 8 Months",
              "First teeth to erupt; lower precedes upper"
            ],
            [
              "Upper Central Incisors",
              "2 Teeth (Right & Left)",
              "7 – 9 Months",
              "Follow lower centrals by ~1 month"
            ],
            [
              "Lateral Incisors (Upper & Lower)",
              "4 Teeth",
              "10 – 12 Months",
              "All 8 incisors present by end of 1st year"
            ],
            [
              "First Milk Molars",
              "4 Teeth (1 per quadrant)",
              "12 – 14 Months (~1 Year)",
              "Erupt before canines ('Molars skip Canines')"
            ],
            [
              "Canines (Eye Teeth)",
              "4 Teeth",
              "16 – 20 Months (~1.5 Years)",
              "Erupt into space between incisors and molars"
            ],
            [
              "Second Milk Molars",
              "4 Teeth",
              "20 – 24 Months (~2 Years)",
              "Completes deciduous dentition (total 20 teeth)"
            ]
          ],
          "extra_bullets": [
            "Deciduous Formula: 2.1.0.2 / 2.1.0.2 = 10 per jaw (Total = 20 teeth; premolars completely absent in milk dentition)",
            "General Rule: Lower teeth erupt 1 to 2 months earlier than corresponding upper teeth."
          ]
        },
        "images": [
          {
            "url": "images/deciduous_eruption_ladder.jpg",
            "caption": "Deciduous dentition eruption ladder: lower centrals (6-8m) to second milk molars (20-24m)"
          }
        ],
        "notes": "الأسنان اللبنية: تبدأ عند 6 شهور بالقواطع المركزية السفلية وتنتهي عند سنتين بالضرس اللبني الثاني. تذكر: لا توجد ضواحك في الأسنان اللبنية!"
      },
      {
        "type": "table",
        "title": "Permanent Dentition: 32 Teeth Eruption Ladder & Key Morphological Differences",
        "content": {
          "headers": [
            "Tooth Type",
            "Eruption Age",
            "Morphological Feature",
            "Deciduous vs Permanent Comparison"
          ],
          "rows": [
            [
              "1st Permanent Molar",
              "6 Years ('Six-Year Molar')",
              "Color",
              "Deciduous: Chalky / bluish-white · Permanent: Yellower / duller"
            ],
            [
              "Central Incisors",
              "7 Years",
              "Size & Shape",
              "Deciduous: Smaller, bulbous crown · Permanent: Larger, broader"
            ],
            [
              "Lateral Incisors",
              "8 Years",
              "Neck Constriction",
              "Deciduous: Marked cervical constriction · Permanent: Less constricted"
            ],
            [
              "1st Premolar",
              "9 Years",
              "Root Anatomy",
              "Deciduous: Thinner, widely divergent roots · Permanent: Stouter, fused"
            ],
            [
              "2nd Premolar",
              "10 Years",
              "Premolar Absence",
              "Deciduous: No premolars exist · Permanent: 8 premolars replace milk molars"
            ],
            [
              "Canine",
              "11 Years",
              "Masticatory Strength",
              "Deciduous: Weaker enamel layer · Permanent: Thicker, stronger enamel"
            ],
            [
              "2nd Permanent Molar",
              "12 Years ('12-Year Molar')",
              "Total Count",
              "Deciduous: 20 teeth (formula 2.1.0.2) · Permanent: 32 teeth (2.1.2.3)"
            ],
            [
              "3rd Permanent Molar",
              "18 – 25 Years (Wisdom Tooth)",
              "Variability",
              "Highly erratic: may be impacted, congenitally missing, or erupt late"
            ]
          ],
          "extra_bullets": [
            "Mnemonic: 'Six-Year Molar' erupts behind 2nd deciduous molar before any milk teeth are shed!"
          ]
        },
        "images": [
          {
            "url": "images/permanent_teeth_timeline.jpg",
            "caption": "Permanent teeth eruption timeline: 6-year molar, incisors (7-8y), premolars (9-10y), canine (11y), 2nd molar (12y), wisdom (18-25y)"
          }
        ],
        "notes": "الأسنان الدائمة: الضرس الأول عند 6 سنين، ثم القواطع والضواحك والأنياب، والضرس الثاني عند 12 سنة، وضرس العقل من 18 إلى 25 سنة."
      },
      {
        "type": "table",
        "title": "Postnatal Ossification Centers: Chronological Emergence (Ages 1 to 6y)",
        "content": {
          "headers": [
            "Age of Emergence",
            "Ossification Center",
            "Anatomical Landmark",
            "Key Medico-Legal Exam Pearl"
          ],
          "rows": [
            [
              "1st Year",
              "Heads of 3 major bones",
              "Head of humerus, head of femur, upper end of tibia",
              "Crucial for verifying healthy infancy development"
            ],
            [
              "2nd Year",
              "Lower ends of two leg/forearm bones",
              "Lower end of radius & lower end of tibia",
              "Readily visualized on routine wrist and ankle X-rays"
            ],
            [
              "3rd Year",
              "PATELLA (Knee Cap)",
              "Sesamoid bone in quadriceps tendon",
              "THE #1 EXAM TRAP: Patella appears at 3 years!"
            ],
            [
              "4th Year",
              "Upper fibula & greater trochanter",
              "Proximal fibular head & proximal femur",
              "Key marker for preschool age estimation"
            ],
            [
              "5th Year",
              "Lower end of fibula",
              "Lateral malleolus of ankle joint",
              "Exception to epiphyseal rule (appears late, fuses early)"
            ],
            [
              "6th Year",
              "Head of radius & lower end of ulna",
              "Proximal radius (elbow) & distal ulna (wrist)",
              "Signals commencement of compulsory primary school age"
            ]
          ],
          "extra_bullets": [
            "Exam Trap: Never forget that the Patella appears at age 3 years—frequently tested in oral exams."
          ]
        },
        "images": [
          {
            "url": "images/ossification_centers_1to6.jpg",
            "caption": "Chronological appearance of postnatal ossification centers: 1y (major heads) to 6y (head of radius, lower ulna)"
          }
        ],
        "notes": "مراكز التعظم بعد الولادة: سنة رؤوس، سنتين أطراف سفلية للزند والقصبة، 3 سنين الصابونة (مصيدة!)، 4 سنين رأس الشظية والمدور الكبير، 5 سنين أسفل الشظية، 6 سنين رأس الكعبرة وأسفل الزند."
      },
      {
        "type": "table",
        "title": "Epiphyseal Union of Upper Limb: The Elbow Scissors & Landmark Ages",
        "content": {
          "headers": [
            "Age",
            "Epiphyseal Union Landmark",
            "Joint Involved",
            "Clinical / Diagnostic Significance"
          ],
          "rows": [
            [
              "14 Years",
              "Trochlea unites with Capitulum",
              "Elbow Joint (Distal Humerus)",
              "Commencement of elbow scissors fusion"
            ],
            [
              "15 Years",
              "Conjoined Trochlea-Capitulum fuses with Humerus Shaft",
              "Elbow Joint",
              "Marks juvenile detention boundary"
            ],
            [
              "16 Years",
              "Lateral Epicondyle fuses with humerus; Olecranon fuses with ulna",
              "Elbow Joint",
              "Excludes child labor in hazardous occupations"
            ],
            [
              "17 Years",
              "Medial Epicondyle fuses with humerus; Head of radius fuses",
              "Elbow Joint",
              "Elbow joint is completely closed! ('Elbow scissors: 14 to 17y')"
            ],
            [
              "18 – 20 Years",
              "Metacarpals and Phalanges fuse with shafts",
              "Hand & Fingers",
              "Key corroboration for 18-year legal adult threshold"
            ],
            [
              "20 – 21 Years",
              "Lower end of radius & lower end of ulna fuse with shafts",
              "Wrist Joint",
              "Wrist completely closed; adult skeletal status achieved"
            ],
            [
              "20 – 21 Years",
              "Head of humerus fuses with shaft; Coracoid (15-17y), Acromion (18-20y)",
              "Shoulder Joint",
              "Upper limb elongation completely ceases"
            ]
          ],
          "extra_bullets": [
            "Mnemonic: 'Elbow Scissors' runs sequentially from 14 to 17 years (14y Trochlea-Capitulum → 15y Shaft → 16y Lat Epicondyle → 17y Med Epicondyle)."
          ]
        },
        "images": [
          {
            "url": "images/elbow_scissors_diagram.jpg",
            "caption": "The Elbow Scissors (14 to 17 years): sequential epiphyseal fusion at the elbow joint"
          }
        ],
        "notes": "مقص الكوع من 14 إلى 17 سنة: 14 البكرة مع اللقمة، 15 يلتحمان بالجذع، 16 اللقمة الوحشية والأولكرانون، 17 اللقمة الإنسية ورأس الكعبرة."
      },
      {
        "type": "table",
        "title": "Epiphyseal Union: Pelvis, Lower Limb & Axial Skeleton",
        "content": {
          "headers": [
            "Age",
            "Anatomical Landmark / Epiphysis",
            "Skeletal Region",
            "Forensic / Medico-Legal Importance"
          ],
          "rows": [
            [
              "16 Years",
              "Y-shaped (Triradiate) cartilage of acetabulum fuses",
              "Pelvic Girdle (Hip Joint)",
              "Ilium, ischium, and pubis become a single pelvic bone"
            ],
            [
              "18 Years",
              "Lower end of tibia & lower end of fibula fuse with shafts",
              "Ankle Joint",
              "Ankle completely closed; adult threshold established"
            ],
            [
              "18 – 19 Years",
              "Head of femur & Greater trochanter fuse with shaft",
              "Hip Joint (Femur)",
              "Pelvic growth consolidation"
            ],
            [
              "20 – 21 Years",
              "Lower femur, Upper tibia, Upper fibula (all knee epiphyses)",
              "Knee Joint",
              "Knee completely closed; full adult stature achieved"
            ],
            [
              "20 – 21 Years",
              "Iliac crest & Ischial tuberosity fuse with os coxae",
              "Pelvic Girdle",
              "Marks termination of pelvic expansion"
            ],
            [
              "21 – 25 Years",
              "Sternal end of clavicle fuses with shaft",
              "Shoulder Girdle (Axial)",
              "LAST long bone epiphysis in the human body to fuse!"
            ]
          ],
          "extra_bullets": [
            "Diagnostic Rule: Sternal end of clavicle (21-25y) is the gold standard for verifying age of majority (21y) in forensic radiology."
          ]
        },
        "images": [
          {
            "url": "images/epiphyses_summary_deck.jpg",
            "caption": "Epiphyseal union of pelvis, knee, ankle, and sternal clavicle across juvenile and young adult stages"
          }
        ],
        "notes": "الحوض يكتمل عند 16 سنة (غضروف الحق)، الكاحل عند 18، الركبة عند 20-21، والطرف القصي للترقوة هو آخر مشاشة وتلتحم من 21 إلى 25 سنة."
      },
      {
        "type": "concept",
        "title": "Biological Principles in Age Estimation: The Female Lead Rule",
        "content": {
          "bullets": [
            "1. The Female Lead Rule (قاعدة تقدم الإناث):",
            "   • Epiphyses appear and unite 1 to 2 years EARLIER in females than in males (driven by earlier estrogen surge)",
            "   • Example 1: Sternal end of clavicle fuses at 21–23y in females vs 23–25y in males",
            "   • Example 2: Knee epiphyses fuse at 18–19y in females vs 20–21y in males",
            "   • Criminal Implication: A 16-year-old female may present with epiphyseal status equivalent to an 18-year-old male!",
            "2. The Law of Ossification Emergence vs Union:",
            "   • The epiphysis that appears FIRST in life unites LAST (e.g. head of humerus appears at 1y, unites at 20-21y)",
            "   • Exception: Lower end of fibula appears late (5y) but unites early (18y)",
            "3. Extrinsic Modifiers of Bone Age:",
            "   • Malnutrition, rickets, and severe chronic infections delay epiphyseal union by 1 to 3 years",
            "   • Hyperthyroidism and precocious puberty accelerate epiphyseal closure"
          ]
        },
        "images": [
          {
            "url": "images/female_lead_rule.jpg",
            "caption": "The Female Lead Rule: accelerated ossification and epiphyseal closure in females by 1 to 2 years"
          }
        ],
        "notes": "قاعدة تقدم الإناث بسنة إلى سنتين وأثرها على تقدير السن الجنائي وقانون ظهور والتحام المشاشات."
      },
      {
        "type": "table",
        "title": "Medico-Legal Importance (MLI) of Ages: Pediatric & Juvenile Milestones",
        "content": {
          "headers": [
            "Age Milestone",
            "Legal / Civil Designation",
            "Forensic Significance & Egyptian Law Provisions"
          ],
          "rows": [
            [
              "Age 6 Years",
              "Compulsory Education",
              "Mandatory enrollment in primary schools; child welfare regulations apply"
            ],
            [
              "Age 7 Years",
              "Age of Discrimination (سن التمييز)",
              "Under 7y: ABSOLUTE lack of criminal responsibility (لا مسؤولية جنائية على الإطلاق)"
            ],
            [
              "Age 12 Years",
              "Child Labor Training",
              "Training or employment of children under 12y is strictly prohibited by law"
            ],
            [
              "Age 14 Years",
              "Presumption Against Rape",
              "A male child under 14y is legally presumed incapable of committing rape; light regulated work permitted"
            ],
            [
              "Age 15 Years",
              "Juvenile Custody Threshold",
              "Cannot be sentenced to adult imprisonment or capital punishment; placed in social welfare institutions; end of mother's custody dispute"
            ],
            [
              "Age 16 Years",
              "National Identity Card",
              "Mandatory issuance of National ID card; employment in hazardous work (battery factories, chemicals, mining) prohibited under 18y"
            ]
          ],
          "extra_bullets": [
            "Egyptian Penal & Child Law (Law 12/1996 amended by Law 126/2008): Defines juvenile protections from 7 to 18 years."
          ]
        },
        "images": [
          {
            "url": "images/mli_pediatric_table.jpg",
            "caption": "Medico-Legal Importance (MLI) milestones from age 6 (school) to 16 (National ID and hazardous labor prohibition)"
          }
        ],
        "notes": "جدول الأهمية الطبية الشرعية للأعمار الصغيرة: سن 7 لا مسؤولية جنائية، سن 12 حظر تدريب، سن 14 استحالة الاغتصاب، سن 16 بطاقة الرقم القومي وحظر الأعمال الخطرة."
      },
      {
        "type": "table",
        "title": "Medico-Legal Importance (MLI) of Ages: Adult & Civic Milestones",
        "content": {
          "headers": [
            "Age Milestone",
            "Legal / Civil Designation",
            "Constitutional & Civil Law Provisions"
          ],
          "rows": [
            [
              "Age 18 Years",
              "Adult Criminal Responsibility",
              "Child Law protections expire; capital punishment (execution) & life imprisonment become legally applicable; full driver's license"
            ],
            [
              "Age 21 Years",
              "Age of Majority (سن الرشد القانوني)",
              "Full civil capacity; unrestricted management and disposition of property and financial wealth; legal capacity to marry without guardian"
            ],
            [
              "Age 30 Years",
              "Parliamentary Candidacy",
              "Minimum legal age for candidacy in the Egyptian Senate (مجلس الشيوخ)"
            ],
            [
              "Age 35 Years",
              "Judicial High Office",
              "Minimum age requirement for appointment to the Supreme Constitutional Court and senior judicial bodies"
            ],
            [
              "Age 40 Years",
              "Presidential Candidacy",
              "Minimum constitutional age requirement for candidacy for President of the Republic"
            ],
            [
              "Age 60 Years",
              "Official Retirement Age",
              "Mandatory retirement age for government and public sector civil servants; pension entitlement"
            ]
          ],
          "extra_bullets": [
            "Key Distinction: Age 18 = Criminal Adulthood (Full criminal liability); Age 21 = Civil Adulthood (Financial & civil capacity)."
          ]
        },
        "images": [
          {
            "url": "images/mli_adult_table.jpg",
            "caption": "Adult medico-legal and civic milestones: age 18 (criminal adulthood), 21 (civil majority), 30 (Senate), 60 (pension)"
          }
        ],
        "notes": "الفرق الجوهري بين سن 18 (الرشد الجنائي وإمكانية الإعدام) وسن 21 (الرشد المدني وإدارة الأموال)."
      },
      {
        "type": "summary",
        "title": "Episode 2 Master Matrix: Teeth, Epiphyses & Legal Ages Summary",
        "content": {
          "bullets": [
            "1. Deciduous Teeth (20): Lower centrals (6-8m) → Upper centrals (7-9m) → Laterals (10-12m) → Molars 1 (12-14m) → Canines (16-20m) → Molars 2 (20-24m)",
            "2. Permanent Teeth (32): 1st Molar (6y) → Centrals (7y) → Laterals (8y) → Premolar 1 (9y) → Premolar 2 (10y) → Canine (11y) → 2nd Molar (12y) → 3rd Molar (18-25y)",
            "3. Ossific Centers (1 to 6y): 1y Heads (hum/fem/tib) → 2y Low radius/tib → 3y PATELLA (Trap!) → 4y Up fibula/Gt trochanter → 5y Low fibula → 6y Head radius/Low ulna",
            "4. Elbow Scissors (14 to 17y): 14y Trochlea-Capitulum → 15y Shaft fusion → 16y Lateral epicondyle → 17y Medial epicondyle (Elbow complete)",
            "5. Landmark Closures: Pelvis Y-cartilage (16y) → Ankle (18y) → Knee & Wrist (20-21y) → Sternal Clavicle (21-25y) → Sternum Body (40-60y)",
            "6. Female Lead Rule: Females advance 1 to 2 years ahead of males in ossification and epiphyseal closure",
            "7. Cardinal Legal Ages: Age 7 (No liability) → Age 16 (National ID) → Age 18 (Criminal adult / Death penalty) → Age 21 (Civil majority)"
          ]
        },
        "images": [
          {
            "url": "images/epiphyses_summary_deck.jpg",
            "caption": "Comprehensive chronological master matrix for age estimation in Ain Shams forensic examinations"
          }
        ],
        "notes": "الجدول النهائي الشامل لجميع تواريخ الأسنان والعظام والأعمار القانونية المقررة في امتحان عين شمس."
      }
    ]
  },
  {
    "title": "Prints & DNA Profiling: Dactylography, Forensic Loci & Typing",
    "description": "Ain Shams forensic genetics: Dactylography (Galton rules, 1 in 64B, epidermis vs dermis), double helix biology, 90% silent regions, 16 forensic loci, Amelogenin sex marker, Y-chromosome, mtDNA, 6 steps of typing, and paternity.",
    "slides": [
      {
        "type": "title",
        "title": "The Immortal Code — Dactylography, The 90% Silent DNA & Forensic Typing",
        "content": {
          "bullets": [
            "Faculty of Medicine, Ain Shams University · Forensic Medicine Department",
            "Chapter 3: Identification & DNA Typing (Pages 45–52)",
            "Dactylography, Friction Ridges, Non-Coding DNA, 16 Forensic Loci & Paternity",
            "Presented by MedDuo Forensic Team"
          ]
        },
        "images": [],
        "notes": "الحلقة الثالثة: البصمات، الحمض النووي الصامت، الخطوات الست للتحليل، وقضايا إثبات النسب والجنايات."
      },
      {
        "type": "concept",
        "title": "Fingerprints & DNA: 4 Cardinal Diagnostic Dilemmas",
        "content": {
          "bullets": [
            "1. Intentional Mutilation of Friction Ridges: Suspect burning fingertips with acid/heat to obliterate fingerprints",
            "2. The Monozygotic (Identical) Twin Defense: Armed robbery suspect claiming crime scene DNA could belong to his innocent twin",
            "3. Rootless Biological Traces: A shed hair shaft without follicular root left at crime scene requiring specialized DNA typing",
            "4. Disputed Paternity with Significant Inheritance: Mother claiming child paternity against denying putative father",
            "Diagnostic Power: Dactylography distinguishes identical twins; DNA typing provides 1 in 10^15 statistical individuality"
          ]
        },
        "images": [
          {
            "url": "images/dna_gel_electrophoresis.jpg",
            "caption": "Forensic laboratory identification utilizing friction ridge analysis and STR DNA typing multiplexes"
          }
        ],
        "notes": "السيناريوهات الأربعة: محاولة طمس البصمات، معضلة التوأم المتطابق، الشعرة بدون بصيلة، وقضية إثبات النسب."
      },
      {
        "type": "concept",
        "title": "Dactylography: Galton's Principles of Friction Ridge Biology",
        "content": {
          "bullets": [
            "1. Definition: The study of epidermal papillary friction ridges on the palmar surface of hands and plantar surface of feet",
            "2. Galton's Cardinal Principles of Dactylography:",
            "   • Absolute Individuality: Probability of two identical prints is 1 in 64 billion (exceeds global human population)",
            "   • Permanent Immutability: Formed in the 4th month of intrauterine life and remain unchanged until post-mortem decomposition",
            "   • Monozygotic Distinction: Even identical twins (with identical DNA) possess distinct, unique fingerprint patterns!",
            "3. Anatomical Architecture (The Dual Shield):",
            "   • Epidermal Layer: Superficial ridges replicated faithfully by underlying dermal papillae",
            "   • Papillary Dermis: Generative basement matrix; contains tactile receptors and sweat gland ducts",
            "4. Ridge Pattern Classification (Galton / Henry System):",
            "   • Loops: ~65% of all patterns (Ulnar and Radial loops)",
            "   • Whorls: ~30% of patterns (Circular or spiral ridges with two deltas)",
            "   • Arches: ~5% of patterns (Plain and Tented arches; no delta)",
            "   • Composites: Rare complex combinations (Central pocket, lateral pocket, accidental)"
          ]
        },
        "images": [
          {
            "url": "images/fingerprint_patterns.jpg",
            "caption": "Fingerprint ridge patterns: Loops (65%), Whorls (30%), Arches (5%), and Henry ridge characteristics"
          }
        ],
        "notes": "مبادئ جالتون: الانفرادية المطلقة (1 في 64 مليار)، الثبات الدائم من الشهر الرابع جنينياً، واختلاف بصمات التوأم المتطابق."
      },
      {
        "type": "table",
        "title": "Fingerprint Alterations: Trauma, Chemical Burns & Pathological Conditions",
        "content": {
          "headers": [
            "Condition / Injury",
            "Depth of Tissue Involvement",
            "Effect on Friction Ridges",
            "Forensic / Medico-Legal Outcome"
          ],
          "rows": [
            [
              "Superficial Abrasion / Scald",
              "Epidermis only (Stratum corneum)",
              "Ridges regenerate completely without distortion within weeks",
              "Original fingerprint pattern is 100% restored"
            ],
            [
              "Deep Incision / Acid Burn",
              "Extends into Papillary Dermis (>1-2 mm)",
              "Destroys dermal papillae; heals by fibrous cicatrix (scar)",
              "Permanent scar creates an ADDITIONAL unique identifying mark!"
            ],
            [
              "Surgical Skin Grafting",
              "Full-thickness excision and graft",
              "Replaced by smooth non-ridge skin",
              "Readily recognized as intentional mutilation; raises criminal suspicion"
            ],
            [
              "Senile Atrophy",
              "Dermal thinning in elderly",
              "Ridges become faint, shallow, and difficult to record",
              "Requires special oblique lighting or chemical enhancement"
            ],
            [
              "Pathological Skin Diseases",
              "Scleroderma, Leprosy, Chronic Eczema",
              "Causes permanent atrophy, ulceration, or loss of ridge detail",
              "Documented as pathological dermatological condition"
            ]
          ],
          "extra_bullets": [
            "Forensic Rule: You cannot erase a fingerprint—superficial damage regrows, and deep damage creates an incriminating permanent scar!"
          ]
        },
        "images": [
          {
            "url": "images/mutilation_scars_dermis.jpg",
            "caption": "Epidermis vs Dermis damage: superficial regeneration vs permanent scar formation creating an additional identifying mark"
          }
        ],
        "notes": "استحالة طمس البصمة: الحرق السطحي يعود كما كان، والحرق العميق في الأدمة يترك ندبة دائمة تصبح دليلاً إضافياً ضد المجرم!"
      },
      {
        "type": "concept",
        "title": "DNA Biology: The 90% Non-Coding Genome & Forensic Polymorphism",
        "content": {
          "bullets": [
            "1. Nuclear DNA Architecture:",
            "   • Double helix composed of 3.2 billion base pairs packaged into 23 pairs of chromosomes (46 total)",
            "   • Identical in every nucleated cell of a single human individual (blood, semen, saliva, skin, bone, tooth pulp)",
            "2. The 90% Non-Coding (Silent) Genome Paradox:",
            "   • Only ~1% to 2% of human DNA codes for functional proteins (Exons)",
            "   • Over 90% consists of non-coding, silent intronic sequences ('Junk DNA')",
            "   • Why Forensics Uses Non-Coding Regions:",
            "     - Immune from natural selection pressure, accumulating vast hypervariable mutations across generations",
            "     - Contains polymorphic Short Tandem Repeats (STRs: 2 to 6 base pair repeats)",
            "     - Highly individualistic: Length polymorphisms generate unique individual profiles without revealing medical disease traits"
          ]
        },
        "images": [
          {
            "url": "images/dna_silent_regions.jpg",
            "caption": "The human genome: ~1-2% coding genes vs >90% non-coding silent intronic DNA harboring polymorphic STR repeats"
          }
        ],
        "notes": "الـ 90% DNA الصامت: لا يشفر بروتينات، غني بالتكرارات المترادفة القصيرة (STRs)، وهو كنز البصمة الوراثية الشرعية."
      },
      {
        "type": "table",
        "title": "DNA vs Fingerprints: Probability Metrics & Identical Twins Resolution",
        "content": {
          "headers": [
            "Parameter",
            "Forensic DNA Profiling",
            "Dactylography (Fingerprints)",
            "Diagnostic Resolution / Court Value"
          ],
          "rows": [
            [
              "Random Match Probability",
              "1 in 10^15 to 1 in 10^18 (with 15 STR loci)",
              "1 in 64 Billion (Galton calculation)",
              "Both astronomical; virtually impossible for unrelated individuals to match"
            ],
            [
              "Monozygotic (Identical) Twins",
              "100% IDENTICAL DNA profile",
              "TOTALLY DISTINCT fingerprint patterns",
              "Fingerprints resolve twin crimes where DNA is inconclusive!"
            ],
            [
              "Mechanism of Variance",
              "Inherited parental genomic alleles",
              "Intrauterine random micro-forces & volar pad tension",
              "Ridge patterns develop epigenetically in 10th-16th week I.U."
            ],
            [
              "Biological Substrate",
              "Any nucleated cell (even microscopic trace)",
              "Palmar and plantar skin ridges only",
              "DNA enables microscopic trace analysis (LCN DNA)"
            ],
            [
              "Degradation Resistance",
              "Susceptible to heat, humidity, UV light, nucleases",
              "Physical print vanishes if skin decomposes",
              "Bone and teeth preserve DNA for centuries"
            ]
          ],
          "extra_bullets": [
            "Golden Rule: Fingerprints and DNA are complementary—fingerprints defeat twin defenses, DNA solves trace and skeletonized cases."
          ]
        },
        "images": [
          {
            "url": "images/identical_twins_dna_vs_prints.jpg",
            "caption": "Identical twins dilemma: 100% identical DNA profile vs completely distinct fingerprint friction ridge patterns"
          }
        ],
        "notes": "التوأم المتطابق له نفس الحمض النووي 100%، لكن بصمات أصابعه مختلفة تماماً، وبذلك تحسم البصمات قضايا التوأم."
      },
      {
        "type": "concept",
        "title": "The Standard 16 Forensic Loci & The Amelogenin Sex Marker",
        "content": {
          "bullets": [
            "1. Standard Forensic Multiplex (The 16-Loci System):",
            "   • 15 Autosomal STR Loci: Spread across different non-homologous chromosomes (e.g. D8S1179, D21S11, D18S51, vWA, FGA, TH01)",
            "   • Under Hardy-Weinberg equilibrium, multiplying allele frequencies yields match probability < 1 in 10^15",
            "2. The 16th Locus: Amelogenin (Sex Determination Gene):",
            "   • Gene codes for tooth enamel protein; located on both X and Y chromosomes",
            "   • Structural Difference: X-chromosome amelogenin has a 6-base-pair deletion compared to Y-chromosome amelogenin",
            "   • Electropherogram Peak Interpretation:",
            "     - Female (XX): Single peak at 106 bp (homozygous for X)",
            "     - Male (XY): Two distinct peaks at 106 bp and 112 bp (heterozygous for X and Y)",
            "Forensic Utility: Instantly identifies sex from minute blood drops, bone dust, or sexual assault swabs"
          ]
        },
        "images": [
          {
            "url": "images/amelogenin_sex_marker.jpg",
            "caption": "Amelogenin sex-typing locus: single peak (XX, female) vs two distinct peaks (XY, male) on capillary electropherogram"
          }
        ],
        "notes": "الـ 16 Loci القياسية: 15 موقعاً على كروموسومات جسدية + موقع الأميلوجينين (قمتين للذكر وقمة واحدة للأنثى)."
      },
      {
        "type": "table",
        "title": "Specialized DNA Profiling: Y-Chromosome STRs vs Mitochondrial DNA",
        "content": {
          "headers": [
            "Feature",
            "Y-Chromosome STRs (Y-STR)",
            "Mitochondrial DNA (mtDNA)",
            "Primary Forensic Applications"
          ],
          "rows": [
            [
              "Location & Copy Number",
              "Non-recombining region of Y chromosome (1 copy/cell)",
              "Mitochondria in cytoplasm (1,000 to 10,000 copies/cell)",
              "Y-STR: Male traces · mtDNA: Highly degraded remains"
            ],
            [
              "Mode of Inheritance",
              "Strictly Paternal (father to sons unchanged)",
              "Strictly Maternal (mother to all children)",
              "Y-STR: Paternal pedigree · mtDNA: Maternal pedigree"
            ],
            [
              "Power of Discrimination",
              "Moderate (all male relatives share same haplotype)",
              "Moderate (all maternal relatives share same sequence)",
              "Exclude non-relatives; corroborate lineage"
            ],
            [
              "Mixed Sample Utility",
              "Detects tiny male DNA trace amidst huge female excess",
              "Not suitable for male-female mixtures",
              "Y-STR is gold standard in gang rape & sexual assault!"
            ]
          ],
          "extra_bullets": [
            "Specialized Application: mtDNA is the gold standard for analyzing shed hair shafts lacking a follicular root."
          ]
        },
        "images": [
          {
            "url": "images/specialized_dna_ystr_mtdna.jpg",
            "caption": "Specialized forensic DNA: paternal Y-STR transmission vs maternal mtDNA inheritance across generations"
          }
        ],
        "notes": "الـ Y-STR للذكور وقضايا الاغتصاب المتعدد، والـ mtDNA للأنساب من جهة الأم وخصلات الشعر بدون جذر."
      },
      {
        "type": "table",
        "title": "The 6 Standard Steps of DNA Typing: From Crime Scene to Profile",
        "content": {
          "headers": [
            "Step Number",
            "Laboratory Procedure",
            "Technical Method / Equipment",
            "Key Precautions / Objectives"
          ],
          "rows": [
            [
              "Step 1: Collection",
              "Gathering biological evidence at scene",
              "Sterile swabs, forceps, paper envelopes",
              "Strict chain of custody; avoid plastic bags (mold growth)"
            ],
            [
              "Step 2: Preservation",
              "Transport and biological storage",
              "Dry preservation; freezing at -20°C to -80°C",
              "Prevents enzymatic nuclease degradation & bacterial decay"
            ],
            [
              "Step 3: Extraction",
              "Isolating pure DNA from cellular matrix",
              "Organic (Phenol-Chloroform) or Chelex / Silica columns",
              "Lyses cell membranes, removes proteins and PCR inhibitors"
            ],
            [
              "Step 4: PCR Amplification",
              "Enzymatic exponential replication",
              "Thermal cycler (Taq polymerase, primers, dNTPs)",
              "Amplifies target 16 STR loci millions of times from picograms"
            ],
            [
              "Step 5: Electrophoresis",
              "Separation of STR fragments by size",
              "Capillary electrophoresis with polymer matrix",
              "Sizing fragments down to single base-pair resolution"
            ],
            [
              "Step 6: Detection",
              "Laser excitation & profile generation",
              "Fluorescent CCD camera & GeneMapper software",
              "Generates electropherogram peaks showing STR alleles"
            ]
          ],
          "extra_bullets": [
            "Official Textbook Step Sequence: Collection → Preservation → Extraction → Amplification → Separation → Detection."
          ]
        },
        "images": [
          {
            "url": "images/dna_typing_6steps.jpg",
            "caption": "The 6 laboratory steps of DNA typing: Collection, Preservation, Extraction, PCR Amplification, Electrophoresis, Laser Detection"
          }
        ],
        "notes": "خطوات فحص الـ DNA الست: الجمع، الحفظ بالتجميد، الاستخلاص، التضخيم بالـ PCR، الفصل الكهربائي، والكشف بالليزر."
      },
      {
        "type": "concept",
        "title": "Medico-Legal Applications of DNA Profiling in Civil & Criminal Law",
        "content": {
          "bullets": [
            "1. Criminal Investigation & Forensic Casework:",
            "   • Linking suspect biological traces (blood, semen, saliva, skin cells) to crime scenes",
            "   • Exonerating falsely accused innocent suspects (cold case reviews & innocence projects)",
            "2. Mass Disasters & Skeletonized Remains Identification:",
            "   • Identifying victims of airplane crashes, fires, wars, and tsunamis by matching against family reference profiles",
            "3. Disputed Parentage (Paternity & Maternity Testing):",
            "   • Genetic Principle: A child inherits exactly 50% of autosomal alleles from mother and 50% from biological father",
            "   • Rule of Exclusion: If a child possesses an obligate paternal allele absent in the alleged father across 2 or more loci, paternity is EXCLUDED 100%!",
            "   • Rule of Inclusion: If the alleged father possesses all obligate paternal alleles across all 15 STR loci, paternity is PROVEN with statistical probability > 99.999%"
          ]
        },
        "images": [
          {
            "url": "images/disputed_paternity_ruling.jpg",
            "caption": "Disputed paternity analysis: obligate paternal alleles inheritance establishing 100% exclusion or >99.999% inclusion"
          }
        ],
        "notes": "تطبيقات الـ DNA القضائية: الجنايات، الكوارث الكبرى، وقضايا النسب (النفي قطعي 100%، والإثبات احتمالي يفوق 99.999%)."
      },
      {
        "type": "table",
        "title": "Official Chapter 3 Review Questions: Model Answers (Page 52)",
        "content": {
          "headers": [
            "Question #",
            "Official Examination Question",
            "Core Model Answer Points (High-Yield Ain Shams Criteria)"
          ],
          "rows": [
            [
              "Question 1",
              "Skeletal changes at 16 years",
              "1. Y-cartilage of acetabulum fuses · 2. Conjoined trochlea-capitulum fuses with humerus · 3. Lateral epicondyle fuses with humerus · 4. Olecranon fuses with ulna"
            ],
            [
              "Question 2",
              "MLI of age 18 years",
              "1. Death penalty and life imprisonment become legally applicable · 2. Full adult criminal responsibility (Child Law expires) · 3. Driver's license eligible"
            ],
            [
              "Question 3",
              "Short notes on Dactylography",
              "1. Galton principles (1 in 64B uniqueness, permanent from 4th month I.U.) · 2. Patterns: Loops (65%), Whorls (30%), Arches (5%) · 3. Deep scars create new mark"
            ],
            [
              "Question 4",
              "Steps of DNA typing",
              "1. Collection · 2. Preservation (-20°C) · 3. Extraction · 4. PCR Amplification · 5. Capillary Electrophoresis · 6. Laser Detection"
            ],
            [
              "Question 5",
              "Medico-legal uses of DNA",
              "1. Crime scene suspect identification · 2. Exoneration of innocent suspects · 3. Mass disaster victim ID · 4. Disputed paternity (exclusion 100%, inclusion >99.999%)"
            ]
          ],
          "extra_bullets": [
            "Source: Official End-of-Chapter Review Questions, Forensic Medicine Department, Ain Shams University."
          ]
        },
        "images": [
          {
            "url": "images/dna_gel_electrophoresis.jpg",
            "caption": "Model answers for official Chapter 3 examination questions (Ain Shams Faculty of Medicine, page 52)"
          }
        ],
        "notes": "إجابات الأسئلة الرسمية الخمسة لنهاية الباب الثالث في كتاب عين شمس ص 52."
      }
    ]
  }
];


window.MUST_SLIDES_DATA = [

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

// Determine initial track from URL or localStorage
const initialUrlTrack = new URLSearchParams(window.location.search).get('track');
const initialStoredTrack = localStorage.getItem('medduo_selected_track');
const defaultTrack = (initialUrlTrack === 'must' || (!initialUrlTrack && initialStoredTrack === 'must')) ? 'must' : 'ain_shams';


// ── BUILD VERSION CACHE BUSTER ──
const SLIDES_BUILD_VERSION = '2026-11-17-v3-academic';
if (localStorage.getItem('medduo_slides_version') !== SLIDES_BUILD_VERSION) {
  for (let ep = 0; ep < 10; ep++) {
    localStorage.removeItem(`medduo_slides_edits_ain_shams_${ep}`);
    localStorage.removeItem(`medduo_slides_edits_must_${ep}`);
    localStorage.removeItem(`medduo_slides_edits_${ep}`);
  }
  localStorage.setItem('medduo_slides_version', SLIDES_BUILD_VERSION);
}

window.SLIDES_DATA = (defaultTrack === 'must') ? window.MUST_SLIDES_DATA : window.AIN_SHAMS_SLIDES_DATA;

const state = {
  view: 'home',       // 'home' | 'episode' | 'favorites'
  track: defaultTrack,// 'ain_shams' | 'must'
  epIdx: 0,
  slideIdx: 0,
  overviewMode: false,
  presMode: false,
  addSlideAfter: null, // null = end, number = after index
};

/* Episode data with localStorage overlay & track isolation */
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
}

/* Images & Captions */
function getSlideImages(epIdx, slideIdx) {
  const customImgs = [];
  let i = 0;
  while (true) {
    const v = localStorage.getItem(`medduo_img_${epIdx}_${slideIdx}_${i}`);
    if (v === null) break;
    const cap = localStorage.getItem(`medduo_cap_${epIdx}_${slideIdx}_${i}`) || '';
    customImgs.push({ url: v, caption: cap });
    i++;
  }
  if (customImgs.length > 0) return customImgs;

  // Fallback to slide default images from current slides or master data
  const slides = getEpSlides(epIdx);
  const slide = slides[slideIdx];
  if (slide && slide.images && slide.images.length > 0) {
    return slide.images.map((img, idx) => {
      const savedCap = localStorage.getItem(`medduo_cap_${epIdx}_${slideIdx}_${idx}`);
      if (typeof img === 'string') {
        return { url: img, caption: savedCap !== null ? savedCap : '' };
      }
      return {
        url: img.url || img.data || '',
        caption: savedCap !== null ? savedCap : (img.caption || '')
      };
    });
  }

  // Double fallback to window.SLIDES_DATA master data
  if (window.SLIDES_DATA && window.SLIDES_DATA[epIdx] && window.SLIDES_DATA[epIdx].slides && window.SLIDES_DATA[epIdx].slides[slideIdx]) {
    const masterSlide = window.SLIDES_DATA[epIdx].slides[slideIdx];
    if (masterSlide.images && masterSlide.images.length > 0) {
      return masterSlide.images.map((img, idx) => {
        const savedCap = localStorage.getItem(`medduo_cap_${epIdx}_${slideIdx}_${idx}`);
        if (typeof img === 'string') {
          return { url: img, caption: savedCap !== null ? savedCap : '' };
        }
        return {
          url: img.url || img.data || '',
          caption: savedCap !== null ? savedCap : (img.caption || '')
        };
      });
    }
  }
  return [];
}

function saveSlideImage(epIdx, slideIdx, imgIdx, base64, caption = '') {
  localStorage.setItem(`medduo_img_${epIdx}_${slideIdx}_${imgIdx}`, base64);
  if (caption) {
    localStorage.setItem(`medduo_cap_${epIdx}_${slideIdx}_${imgIdx}`, caption);
  }
  // Sync to slide state
  const slides = getEpSlides(epIdx);
  if (slides[slideIdx]) {
    if (!slides[slideIdx].images) slides[slideIdx].images = [];
    slides[slideIdx].images[imgIdx] = { url: base64, caption };
    saveEpSlides(epIdx, slides);
  }
}

function saveSlideImageCaption(epIdx, slideIdx, imgIdx, caption) {
  localStorage.setItem(`medduo_cap_${epIdx}_${slideIdx}_${imgIdx}`, caption);
  // Sync to slide state
  const slides = getEpSlides(epIdx);
  if (slides[slideIdx] && slides[slideIdx].images && slides[slideIdx].images[imgIdx]) {
    if (typeof slides[slideIdx].images[imgIdx] === 'string') {
      slides[slideIdx].images[imgIdx] = { url: slides[slideIdx].images[imgIdx], caption };
    } else {
      slides[slideIdx].images[imgIdx].caption = caption;
    }
    saveEpSlides(epIdx, slides);
  }
}

function deleteSlideImage(epIdx, slideIdx, imgIdx) {
  const existing = getSlideImages(epIdx, slideIdx);
  existing.splice(imgIdx, 1);

  // Clear all localStorage keys for this slide
  let i = 0;
  while (localStorage.getItem(`medduo_img_${epIdx}_${slideIdx}_${i}`) !== null || localStorage.getItem(`medduo_cap_${epIdx}_${slideIdx}_${i}`) !== null) {
    localStorage.removeItem(`medduo_img_${epIdx}_${slideIdx}_${i}`);
    localStorage.removeItem(`medduo_cap_${epIdx}_${slideIdx}_${i}`);
    i++;
  }

  // Re-save remaining items
  existing.forEach((item, idx) => {
    localStorage.setItem(`medduo_img_${epIdx}_${slideIdx}_${idx}`, item.url);
    if (item.caption) {
      localStorage.setItem(`medduo_cap_${epIdx}_${slideIdx}_${idx}`, item.caption);
    }
  });

  // Sync to slide state
  const slides = getEpSlides(epIdx);
  if (slides[slideIdx]) {
    slides[slideIdx].images = existing;
    saveEpSlides(epIdx, slides);
  }
}

/* Favorites */
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('medduo_favorites') || '[]'); } catch(e) { return []; }
}
function saveFavorites(favs) {
  localStorage.setItem('medduo_favorites', JSON.stringify(favs));
}


/* ════════════════════════════════════
   ROUTING
   ════════════════════════════════════ */
function showView(name) {
  state.view = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const v = document.getElementById(`view-${name}`);
  if (v) v.classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  showView('home');
  renderHome();
}

function openEpisode(epIdx) {
  state.epIdx = epIdx;
  state.slideIdx = 0;
  state.overviewMode = false;
  showView('episode');
  renderEpisodeToolbar();
  renderSlide();
}

function openFavorites() {
  showView('favorites');
  renderFavorites();
}



/* ════════════════════════════════════
   TRACK SWITCHING (Ain Shams vs MUST)
   ════════════════════════════════════ */
function updateActiveTrack(newTrack, skipHistory = false) {
  state.track = (newTrack === 'must') ? 'must' : 'ain_shams';
  localStorage.setItem('medduo_selected_track', state.track);
  window.SLIDES_DATA = (state.track === 'must') ? window.MUST_SLIDES_DATA : window.AIN_SHAMS_SLIDES_DATA;

  const btnGotoPodcast = document.getElementById('btn-goto-podcast');
  if (btnGotoPodcast) {
    btnGotoPodcast.href = `../podcast-site/?track=${state.track}`;
  }

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

/* ════════════════════════════════════
   HOME RENDER
   ════════════════════════════════════ */
function renderHome() {
  const grid = document.getElementById('episodes-grid');
  grid.innerHTML = '';
  window.SLIDES_DATA.forEach((ep, i) => {
    const slides = getEpSlides(i);
    const card = document.createElement('div');
    card.className = 'ep-card';
    card.innerHTML = `
      <div class="ep-num">Episode ${i+1}</div>
      <div class="ep-title">${ep.title}</div>
      <div class="ep-desc">${ep.description}</div>
      <div class="ep-meta">
        <span class="ep-count">${slides.length} slides</span>
        <button class="ep-open">Open →</button>
      </div>
    `;
    card.querySelector('.ep-open').addEventListener('click', (e) => {
      e.stopPropagation();
      openEpisode(i);
    });
    card.addEventListener('click', () => openEpisode(i));
    grid.appendChild(card);
  });
}


/* ════════════════════════════════════
   EPISODE TOOLBAR
   ════════════════════════════════════ */
function renderEpisodeToolbar() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);
  const bc = document.getElementById('breadcrumb');
  bc.innerHTML = `<strong>Episode ${state.epIdx+1}</strong> — ${ep.title} &nbsp;<span style="color:var(--cyan)">${slides.length} slides</span>`;
}


/* ════════════════════════════════════
   SLIDE RENDERING
   ════════════════════════════════════ */
function renderSlide() {
  const slides = getEpSlides(state.epIdx);
  const n = slides.length;
  const idx = Math.max(0, Math.min(state.slideIdx, n - 1));
  state.slideIdx = idx;

  // counter
  document.getElementById('slide-counter').textContent = `Slide ${idx+1} / ${n}`;

  // nav buttons
  document.getElementById('btn-prev').disabled = idx === 0;
  document.getElementById('btn-next').disabled = idx === n - 1;

  // overview: hide slide viewer, show overview
  const ovPanel = document.getElementById('overview-panel');
  const svPanel = document.getElementById('slide-viewer');
  if (state.overviewMode) {
    ovPanel.classList.remove('hidden');
    svPanel.classList.add('hidden');
    renderOverview();
    return;
  } else {
    ovPanel.classList.add('hidden');
    svPanel.classList.remove('hidden');
  }

  const slide = slides[idx];
  const card = document.getElementById('slide-card');
  card.innerHTML = '';
  card.style.opacity = '0';
  card.appendChild(buildSlideCard(slide, idx, slides));
  setTimeout(() => card.style.opacity = '1', 20);
}

/* ════════════════════════════════════
   VISUAL COMPONENT BUILDERS (DOM)
   ════════════════════════════════════ */
function buildFlowchart(flowData) {
  const container = document.createElement('div');
  container.className = 'visual-flowchart';
  flowData.forEach((node, i) => {
    const el = document.createElement('div');
    el.className = 'flow-node';
    el.innerHTML = `
      <div class="flow-node-top">
        <span class="flow-node-step">${escHtml(node.step || `STEP ${i+1}`)}</span>
        <span class="flow-node-icon">${escHtml(node.icon || '➡️')}</span>
      </div>
      <div class="flow-node-title">${escHtml(node.title || '')}</div>
      <div class="flow-node-desc">${escHtml(node.desc || '')}</div>
    `;
    container.appendChild(el);
    if (i < flowData.length - 1) {
      const arrow = document.createElement('div');
      arrow.className = 'flow-arrow';
      arrow.innerHTML = '➔';
      container.appendChild(arrow);
    }
  });
  return container;
}

function buildCardsGrid(cardsData) {
  const grid = document.createElement('div');
  grid.className = 'visual-cards-grid';
  cardsData.forEach(c => {
    const card = document.createElement('div');
    const theme = c.theme || 'cyan';
    card.className = `visual-card theme-${theme}`;
    const itemsHTML = (c.items || []).map(it => `<li>${escHtml(it)}</li>`).join('');
    const highlightHTML = c.highlight ? `<div class="card-highlight">${escHtml(c.highlight)}</div>` : '';
    card.innerHTML = `
      <div class="card-top">
        <span class="card-badge">${escHtml(c.badge || '')}</span>
        <span class="card-icon">${escHtml(c.icon || '📌')}</span>
      </div>
      <div class="card-title">${escHtml(c.title || '')}</div>
      <ul class="card-items">${itemsHTML}</ul>
      ${highlightHTML}
    `;
    grid.appendChild(card);
  });
  return grid;
}

function buildTimeline(timelineData) {
  const container = document.createElement('div');
  container.className = 'visual-timeline';
  timelineData.forEach(item => {
    const row = document.createElement('div');
    row.className = 'timeline-item';
    row.innerHTML = `
      <div class="timeline-pill">${escHtml(item.age || item.time || '')}</div>
      <div class="timeline-icon">${escHtml(item.icon || '⏱️')}</div>
      <div class="timeline-body">
        <div class="timeline-title">${escHtml(item.title || '')}</div>
        <div class="timeline-desc">${escHtml(item.desc || '')}</div>
      </div>
    `;
    container.appendChild(row);
  });
  return container;
}

function buildTrapBox(trapData) {
  const box = document.createElement('div');
  box.className = 'visual-trap-box';
  box.innerHTML = `
    <div class="trap-header">⚠️ EXAM TRAP · شفوي عين شمس</div>
    <div class="trap-title">${escHtml(trapData.title || '')}</div>
    <div class="trap-body">${escHtml(trapData.desc || '')}</div>
  `;
  return box;
}

/* ════════════════════════════════════
   VISUAL COMPONENT BUILDERS (INLINE HTML FOR PDF / PRINT)
   ════════════════════════════════════ */
function buildFlowchartHTML(flowData) {
  let html = '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">';
  flowData.forEach((node, i) => {
    html += `
      <div style="flex:1 1 150px;min-width:130px;background:#F8FAFC;border:1px solid #CBD5E1;border-radius:8px;padding:8px 10px;box-sizing:border-box;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <span style="font-size:9px;font-weight:800;color:#0284C7;background:#E0F2FE;padding:1px 6px;border-radius:10px;">${escHtml(node.step || `STEP ${i+1}`)}</span>
          <span style="font-size:12px;">${escHtml(node.icon || '➡️')}</span>
        </div>
        <div style="font-size:11px;font-weight:700;color:#0F172A;margin-bottom:3px;line-height:1.2;">${escHtml(node.title || '')}</div>
        <div style="font-size:9.5px;color:#475569;line-height:1.35;">${escHtml(node.desc || '')}</div>
      </div>
    `;
    if (i < flowData.length - 1 && i % 3 !== 2) {
      html += `<div style="display:flex;align-items:center;color:#94A3B8;font-size:11px;font-weight:bold;">➔</div>`;
    }
  });
  html += '</div>';
  return html;
}

function buildCardsGridHTML(cardsData) {
  const colCount = cardsData.length > 2 ? (cardsData.length === 3 ? 3 : 2) : cardsData.length;
  let html = `<div style="display:grid;grid-template-columns:repeat(${colCount}, 1fr);gap:10px;margin-bottom:12px;">`;
  cardsData.forEach(c => {
    const theme = c.theme || 'cyan';
    let borderTop = '#0284C7';
    let badgeBg = '#E0F2FE';
    let badgeColor = '#0369A1';
    if (theme === 'amber') { borderTop = '#F59E0B'; badgeBg = '#FEF3C7'; badgeColor = '#B45309'; }
    else if (theme === 'emerald') { borderTop = '#10B981'; badgeBg = '#D1FAE5'; badgeColor = '#047857'; }
    else if (theme === 'rose') { borderTop = '#F43F5E'; badgeBg = '#FFE4E6'; badgeColor = '#BE123C'; }
    else if (theme === 'purple') { borderTop = '#8B5CF6'; badgeBg = '#EDE9FE'; badgeColor = '#6D28D9'; }

    const itemsHTML = (c.items || []).map(it => `<li style="margin-bottom:2px;">${escHtml(it)}</li>`).join('');
    const highlightHTML = c.highlight ? `<div style="margin-top:6px;padding:4px 8px;background:#F8FAFC;border-left:3px solid ${borderTop};border-radius:4px;font-size:10px;font-weight:600;color:#0F172A;">${escHtml(c.highlight)}</div>` : '';

    html += `
      <div style="background:#FFFFFF;border:1px solid #CBD5E1;border-top:3.5px solid ${borderTop};border-radius:8px;padding:10px 12px;box-sizing:border-box;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:9px;font-weight:800;background:${badgeBg};color:${badgeColor};padding:1px 6px;border-radius:10px;">${escHtml(c.badge || '')}</span>
          <span style="font-size:13px;">${escHtml(c.icon || '📌')}</span>
        </div>
        <div style="font-size:11.5px;font-weight:700;color:#0F172A;margin-bottom:6px;line-height:1.25;">${escHtml(c.title || '')}</div>
        <ul style="margin:0;padding-left:14px;font-size:10px;color:#334155;line-height:1.4;">${itemsHTML}</ul>
        ${highlightHTML}
      </div>
    `;
  });
  html += '</div>';
  return html;
}

function buildTimelineHTML(timelineData) {
  let html = '<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px;">';
  timelineData.forEach(item => {
    html += `
      <div style="display:flex;align-items:center;gap:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:6px;padding:6px 10px;">
        <span style="background:#0284C7;color:#FFFFFF;font-size:9.5px;font-weight:800;padding:2px 8px;border-radius:12px;white-space:nowrap;">${escHtml(item.age || item.time || '')}</span>
        <span style="font-size:12px;">${escHtml(item.icon || '⏱️')}</span>
        <div style="flex:1;min-width:0;">
          <span style="font-size:11px;font-weight:700;color:#0F172A;margin-right:6px;">${escHtml(item.title || '')}:</span>
          <span style="font-size:10px;color:#475569;">${escHtml(item.desc || '')}</span>
        </div>
      </div>
    `;
  });
  html += '</div>';
  return html;
}

function buildTrapBoxHTML(trapData) {
  return `
    <div style="background:#FFFBEB;border:1.5px solid #F59E0B;border-left:4px solid #D97706;border-radius:8px;padding:10px 14px;margin-top:10px;margin-bottom:10px;">
      <div style="font-size:9.5px;font-weight:800;color:#B45309;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">⚠️ EXAM TRAP · شفوي عين شمس</div>
      <div style="font-size:11.5px;font-weight:700;color:#92400E;margin-bottom:3px;">${escHtml(trapData.title || '')}</div>
      <div style="font-size:10.5px;color:#78350F;line-height:1.4;">${escHtml(trapData.desc || '')}</div>
    </div>
  `;
}


function typeBadgeHTML(type) {
  return `<span class="type-badge ${type}">${type.toUpperCase()}</span>`;
}

function buildSlideCard(slide, idx, slides) {
  const wrap = document.createElement('div');
  const layout = slide.mediaLayout || 'top';
  wrap.className = `slide-card-wrap layout-${layout}`;

  // ── Header ──
  const hdr = document.createElement('div');
  hdr.className = 'slide-header';
  hdr.innerHTML = `
    <div class="slide-header-left">
      ${typeBadgeHTML(slide.type)}
      <span class="slide-num-chip">#${idx+1}</span>
    </div>
    <div class="slide-header-right">
      <button class="icon-btn" data-action="save" title="Save changes" style="color:#10B981;font-weight:700">💾 Save</button>
      <button class="icon-btn" data-action="edit" title="Edit slide">✏️ Edit</button>
      <button class="icon-btn fav-star" data-action="fav" title="Add to Favorites">★ Favorite</button>
      <button class="icon-btn" data-action="clone" title="Duplicate slide">⧉ Clone</button>
      ${idx > 0 ? `<button class="icon-btn" data-action="up" title="Move up">↑</button>` : ''}
      ${idx < slides.length - 1 ? `<button class="icon-btn" data-action="down" title="Move down">↓</button>` : ''}
      <button class="icon-btn danger" data-action="del" title="Delete slide">🗑</button>
    </div>
  `;
  wrap.appendChild(hdr);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'slide-body';

  if (slide.type === 'title') {
    body.appendChild(buildTitleSlide(slide));
  } else {
    // Title
    const tEl = document.createElement('div');
    tEl.className = 'slide-title-display';
    tEl.textContent = slide.title;
    body.appendChild(tEl);

    const content = slide.content || {};

    if (slide.type === 'quiz') {
      body.appendChild(buildQuiz(content));
    } else if (content.calc) {
      body.appendChild(buildCalc(content.calc));
    } else {
      // Flowchart
      if (content.flowchart && content.flowchart.length) {
        body.appendChild(buildFlowchart(content.flowchart));
      }
      // Cards Grid (Mindmap / Comparison / Clinical Cases)
      if (content.cards && content.cards.length) {
        body.appendChild(buildCardsGrid(content.cards));
      }
      // Timeline
      if (content.timeline && content.timeline.length) {
        body.appendChild(buildTimeline(content.timeline));
      }
      // Exam Trap Callout Box
      if (content.trap) {
        body.appendChild(buildTrapBox(content.trap));
      }
      // Table
      if (content.rows) {
        body.appendChild(buildTable(content));
        if (content.extra_bullets && content.extra_bullets.length) {
          body.appendChild(buildBullets(content.extra_bullets));
        }
      }
      // Bullets (rendered if present)
      if (content.bullets && content.bullets.length) {
        body.appendChild(buildBullets(content.bullets));
      }
    }
  }

  // Notes
  const noteWrap = document.createElement('div');
  noteWrap.className = 'slide-notes-area';
  noteWrap.innerHTML = `<div class="notes-label">📝 Notes</div>`;
  const noteTA = document.createElement('textarea');
  noteTA.placeholder = 'Add notes here…';
  noteTA.value = slide.notes || '';
  noteTA.addEventListener('input', () => {
    const s = getEpSlides(state.epIdx);
    s[idx].notes = noteTA.value;
    saveEpSlides(state.epIdx, s);
  });
  noteWrap.appendChild(noteTA);
  body.appendChild(noteWrap);

  // ── Inner Container with Flexible Layout (Top / Right / Left / Bottom) ──
  const innerWrap = document.createElement('div');
  innerWrap.className = 'slide-inner-wrap';
  const imgZone = buildImageZone(idx);

  if (layout === 'bottom') {
    innerWrap.appendChild(body);
    innerWrap.appendChild(imgZone);
  } else if (layout === 'left') {
    innerWrap.appendChild(imgZone);
    innerWrap.appendChild(body);
  } else if (layout === 'right') {
    innerWrap.appendChild(body);
    innerWrap.appendChild(imgZone);
  } else {
    // default top
    innerWrap.appendChild(imgZone);
    innerWrap.appendChild(body);
  }
  wrap.appendChild(innerWrap);

  // ── Footer ──
  const slides2 = getEpSlides(state.epIdx);
  const n = slides2.length;
  const footer = document.createElement('div');
  footer.className = 'slide-footer';
  const dots = Array.from({length: Math.min(n, 15)}, (_, di) => {
    const active = di === idx ? ' active' : '';
    return `<span class="prog-dot${active}" title="Slide ${di+1}"></span>`;
  }).join('');
  footer.innerHTML = `
    <img src="Logo.jpg" alt="MedDuo" class="slide-footer-logo" />
    <div class="slide-progress-dots">${dots}</div>
  `;
  wrap.appendChild(footer);

  // ── Event listeners ──
  hdr.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === 'save') {
      saveEpSlides(state.epIdx, slides);
      showToast('✓ All changes saved to localStorage!');
    }
    else if (action === 'edit') startEdit(idx);
    else if (action === 'fav') addToFavorites(idx);
    else if (action === 'clone') cloneSlide(idx);
    else if (action === 'up') moveSlide(idx, -1);
    else if (action === 'down') moveSlide(idx, 1);
    else if (action === 'del') deleteSlide(idx);
  });

  return wrap;
}

function buildTitleSlide(slide) {
  const c = slide.content || {};
  const bullets = (c.bullets || []).filter(b => b.trim());
  const wrap = document.createElement('div');
  wrap.className = 'title-slide-inner';
  wrap.innerHTML = `
    <img src="Logo.jpg" alt="MedDuo" class="title-logo" />
    <div class="title-main">${slide.title}</div>
    <div class="title-episode-badge">${bullets[0] || ''}</div>
    ${bullets[1] ? `<div style="font-size:0.9rem;color:var(--text2)">${bullets[1]}</div>` : ''}
    <div class="title-ecg" aria-hidden="true">
      <svg viewBox="0 0 300 40" preserveAspectRatio="none">
        <polyline points="0,20 50,20 60,5 70,35 80,10 90,28 100,20 300,20"
          fill="none" stroke="#4DD9E8" stroke-width="2" stroke-linejoin="round"/>
      </svg>
    </div>
  `;
  return wrap;
}

function buildBullets(bullets) {
  const ul = document.createElement('ul');
  ul.className = 'slide-bullets';
  bullets.forEach(b => {
    if (b === '') return; // skip blank separators in display
    const li = document.createElement('li');
    const isIndented = b.match(/^\s+/);
    if (isIndented) li.classList.add('indented');
    li.textContent = b.trim();
    ul.appendChild(li);
  });
  return ul;
}

function buildTable(content) {
  const tbl = document.createElement('table');
  tbl.className = 'slide-table';
  if (content.headers && content.headers.length) {
    const thead = tbl.createTHead();
    const tr = thead.insertRow();
    content.headers.forEach(h => {
      const th = document.createElement('th');
      th.textContent = h;
      tr.appendChild(th);
    });
  }
  if (content.rows && content.rows.length) {
    const tbody = tbl.createTBody();
    content.rows.forEach(row => {
      const tr = tbody.insertRow();
      row.forEach(cell => {
        const td = tr.insertCell();
        td.textContent = cell;
      });
    });
  }
  return tbl;
}

function buildQuiz(content) {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="quiz-question-box">🔬 ${content.question || ''}</div>
    <button class="quiz-reveal-btn">🔍 Reveal Answer</button>
    <div class="quiz-answer-box" style="display:none">${content.answer || ''}</div>
  `;
  wrap.querySelector('.quiz-reveal-btn').addEventListener('click', function() {
    const ans = wrap.querySelector('.quiz-answer-box');
    const shown = ans.style.display !== 'none';
    ans.style.display = shown ? 'none' : 'block';
    this.textContent = shown ? '🔍 Reveal Answer' : '🙈 Hide Answer';
  });
  return wrap;
}

function buildCalc(steps) {
  const box = document.createElement('div');
  box.className = 'calc-box';
  steps.forEach(line => {
    const p = document.createElement('div');
    p.className = 'calc-line';
    if (line.startsWith('VERDICT') || line.startsWith('BOTH') || line.startsWith('→')) {
      p.classList.add('result');
    }
    p.textContent = line;
    box.appendChild(p);
  });
  return box;
}

/* ════════════════════════════════════
   IMAGE ZONE
   ════════════════════════════════════ */

/* ════════════════════════════════════
   FORENSIC IMAGE GALLERY (23 DIAGRAMS)
   ════════════════════════════════════ */
const FORENSIC_IMAGE_GALLERY = [
  {
    category: "The 'El-Prince' Case & Suspect Illustrations",
    items: [
      {
        url: "images/el_prince_illustration.jpg",
        name: "El-Prince: Thug in Handcuffs (Cartoon)",
        caption: "المتهم \"البرنس\": بشنب ودقن وبنطلون مسقط في الكلبشات يدعي أنه حدث 15 سنة و9 شهور!"
      },
      {
        url: "images/el_prince_realistic.jpg",
        name: "El-Prince: Realistic Suspect Inspection",
        caption: "فحص المتهم \"البرنس\": غياب خط النمو بالركبة (Knee Union) يؤكد بلوغه 21 سنة وكذب شهادة الميلاد!"
      }
    ]
  },
  {
    category: "Bone Age Estimation & Epiphyseal Milestones",
    items: [
      {
        url: "images/dr_shereen_framework.jpg",
        name: "Dr. Shereen Framework (4 Geometries)",
        caption: "طريقة د. شيرين: الأشكال الهندسية الـ 4 لتقدير السن (دايرة صغيرة، دايرة كبيرة، خط بالطول، خط بالعرض)"
      },
      {
        url: "images/ossification_centers_diagram.jpg",
        name: "Ossification Centers (Qatra & Infancy)",
        caption: "مخطط مراكز التعظم: داخل الرحم \"قطرة\" (الكعب 5، تالوس 7، فخذ 8، ركبة 9 وكيوبويد) و\"واحد فوق واتنين تحت\""
      },
      {
        url: "images/upper_limb_epiphysis_diagram.jpg",
        name: "Upper Limb & Elbow Scissors Rule",
        caption: "مقص الكوع والطرف العلوي: قمر 14، سن الجمباز 15، مقص 16 و 17، والساعة والشنطة 20 سنة"
      },
      {
        url: "images/lower_limb_epiphysis_diagram.jpg",
        name: "Lower Limb & Milestone Ages",
        caption: "أعمار مفصلية: كفك 18 سنة، الساعة والشنطة 20 سنة، سن التخرج 21 سنة، وتخرج طب 23-25 سنة"
      },
      {
        url: "images/knee_xray_growth_plate.jpg",
        name: "Knee X-ray & Physis Growth Plate",
        caption: "أشعة سينية لمفصل الركبة توضح خط النمو الغضروفي (Epiphyseal Plate) قبل الالتحام التام"
      },
      {
        url: "images/wrist_xray_growth_plate.jpg",
        name: "Wrist & Hand X-ray (Age 18 Milestone)",
        caption: "أشعة عظام الرسغ واليد لتقدير السن الجنائي: التحام مشط اليد عند سن 18 سنة"
      },
      {
        url: "images/medullary_cavity_structure.jpg",
        name: "Medullary Cavity Expansion",
        caption: "التجويف النخاعي (Medullary Cavity): يمتد للعنق الجراحي عند 30 سنة والعنق التشريحي عند 33 سنة"
      },
      {
        url: "images/long_bone_anatomy_diagram.jpg",
        name: "Long Bone Anatomy & Zones",
        caption: "تشريح العظام الطويلة: المشاش (Epiphysis)، صفيحة النمو (Physis)، والعمود العظمي (Diaphysis)"
      },
      {
        url: "images/femur_physis_diagram.jpg",
        name: "Femur Epiphysis & Histology",
        caption: "مخطط صفيحة النمو في رأس الفخذ والتحامها التام عند سن 18 سنة"
      },
      {
        url: "images/femur_head_epiphyseal_line.jpg",
        name: "Femur Head Epiphyseal Line",
        caption: "صورة ماكروسكوبية لرأس عظمة الفخذ توضح خط الالتحام العظمي التام"
      }
    ]
  },
  {
    category: "The Skull, Mandible & Sutures",
    items: [
      {
        url: "images/charred_skull_forensics.jpg",
        name: "Charred Skull Autopsy (Kafr El-Sheikh)",
        caption: "الجثة المتفحمة في كفر الشيخ: فحص الجمجمة، الأسنان، ودرزات العظام لتحديد السن والهوية"
      },
      {
        url: "images/skull_sutures_diagram.jpg",
        name: "Skull Sutures Fusion (Sagittal, Coronal, Lambdoid)",
        caption: "درزات الجمجمة: السهمي (Sagittal 25-30)، الإكليلي (Coronal 40)، واللامي (Lambdoid 50)"
      },
      {
        url: "images/mandible_age_diagram.jpg",
        name: "Mandible Angle & Age Changes",
        caption: "تغيرات زاوية الفك السفلي عبر العمر: منفرجة 140° في حديث الولادة والمسنين، وقائمة 110° في البالغين"
      }
    ]
  },
  {
    category: "The Pelvis, Hyoid & Strangulation",
    items: [
      {
        url: "images/pelvis_male_vs_female.jpg",
        name: "Pelvis: Male vs Female Differences",
        caption: "الفروق الجنسية في الحوض: الزاوية العانية (Subpubic Angle)، المدخل الكلوي مقابل البيضاوي، والتجويف الحقي"
      },
      {
        url: "images/pelvis_age_female_rule.jpg",
        name: "Pelvis Epiphyses & Female 1-2 Year Lead",
        caption: "قاعدة الحوض لتقدير السن: الإناث يسبقن الذكور بعام إلى عامين في التحام عظام الحوض"
      },
      {
        url: "images/hyoid_fracture_biomechanics.jpg",
        name: "Hyoid Fracture Biomechanics (Strangulation)",
        caption: "كسر العظم اللامي في الخنق اليدوي (Manual Strangulation): فحص القرون الكبرى والانفصال العظمي"
      },
      {
        url: "images/teeth_and_hyoid_sternum.jpg",
        name: "Sternum, Hyoid & Teeth Composite",
        caption: "أعضاء الطب الشرعي الحاسمة: عظم القص واللامي والأسنان كشهود إثبات في قضايا القتل"
      }
    ]
  },
  {
    category: "Odontology, DNA, Ancestry & Stature",
    items: [
      {
        url: "images/bite_mark_forensics.jpg",
        name: "Bite Mark Analysis & Odontology",
        caption: "تحليل آثار العضات (Bite Marks) ومطابقة طبعة الأسنان لتحديد هوية الجاني"
      },
      {
        url: "images/fingerprint_patterns_dna.jpg",
        name: "Fingerprints & DNA Profiles",
        caption: "البصمات العشرية والـ DNA: الهوية اليقينية التي لا تكذب ولا تتشابه بين شخصين"
      },
      {
        url: "images/cranial_race_identification.jpg",
        name: "Cranial Race & Ancestry Morphology",
        caption: "تحديد السلالة والعرق من عظام الجمجمة: فتحة الأنف، الحجاج، وشكل الفك السفلي"
      },
      {
        url: "images/osteometric_board_stature.jpg",
        name: "Osteometric Board & Pearson's Stature",
        caption: "لوح قياس العظام (Osteometric Board) لتطبيق معادلات بيرسون: طول الفخذ × 4 = طول الإنسان"
      }
    ]
  }
];

function openGalleryModal(slideIdx) {
  const modal = document.getElementById('modal-gallery');
  const container = document.getElementById('gallery-container');
  if (!modal || !container) return;

  container.innerHTML = '';

  FORENSIC_IMAGE_GALLERY.forEach(cat => {
    const sec = document.createElement('div');
    sec.className = 'gallery-cat-section';
    sec.innerHTML = `<div class="gallery-cat-title">${cat.category}</div>`;

    const grid = document.createElement('div');
    grid.className = 'gallery-grid';

    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      const resolved = getResolvedImageData(item.url);
      card.innerHTML = `
        <img src="${resolved}" alt="${escHtml(item.name)}" class="gallery-thumb" loading="lazy" />
        <div class="gallery-info">
          <div class="gallery-name">${escHtml(item.name)}</div>
          <div class="gallery-cap-preview" title="${escHtml(item.caption)}">${escHtml(item.caption)}</div>
        </div>
      `;
      card.addEventListener('click', () => {
        addGalleryImageToSlide(state.epIdx, slideIdx, item.url, item.caption);
        modal.classList.add('hidden');
      });
      grid.appendChild(card);
    });

    sec.appendChild(grid);
    container.appendChild(sec);
  });

  modal.classList.remove('hidden');
}

function addGalleryImageToSlide(epIdx, slideIdx, imgUrl, caption) {
  const slides = getEpSlides(epIdx);
  if (!slides[slideIdx]) return;
  if (!slides[slideIdx].images) slides[slideIdx].images = [];
  
  const imgIdx = slides[slideIdx].images.length;
  slides[slideIdx].images.push({ url: imgUrl, caption: caption });
  saveEpSlides(epIdx, slides);
  
  saveSlideImageCaption(epIdx, slideIdx, imgIdx, caption);
  
  renderSlide();
  showToast('✓ Attached diagram & caption to slide!');
}

function buildImageZone(slideIdx) {
  const epIdx = state.epIdx;
  const slides = getEpSlides(epIdx);
  const slide = slides[slideIdx] || {};
  const currentLayout = slide.mediaLayout || 'top';
  const zone = document.createElement('div');
  zone.className = 'image-zone';

  function refresh() {
    zone.innerHTML = '';
    const imgs = getSlideImages(epIdx, slideIdx);
    if (imgs.length === 0) {
      // Empty state
      const empty = document.createElement('div');
      empty.className = 'image-zone-empty';
      empty.innerHTML = `
        <span style="font-weight:600;color:var(--text2);">📷 Slide Diagrams & Illustrations</span>
        <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;justify-content:center;">
          <button class="tool-btn btn-open-gallery" style="background:#0284C7;color:#fff;font-size:0.75rem;padding:5px 12px;border-radius:6px;font-weight:700;">🖼 Built-in Gallery (23 Images)</button>
          <label class="tool-btn" style="cursor:pointer;font-size:0.75rem;padding:5px 12px;border-radius:6px;background:var(--surface2);border:1px solid var(--border);">➕ Upload Local File<input type="file" accept="image/*,video/mp4,video/webm" multiple style="display:none" /></label>
        </div>
      `;
      empty.querySelector('.btn-open-gallery').addEventListener('click', (e) => {
        e.preventDefault();
        openGalleryModal(slideIdx);
      });
      empty.querySelector('input[type=file]').addEventListener('change', (e) => handleImgUpload(e, slideIdx, () => renderSlide()));
      zone.appendChild(empty);
    } else {
      // Top bar with Layout options and Gallery
      const topBar = document.createElement('div');
      topBar.className = 'img-layout-bar';
      topBar.style.display = 'flex';
      topBar.style.justifyContent = 'space-between';
      topBar.style.alignItems = 'center';
      topBar.style.flexWrap = 'wrap';
      topBar.style.gap = '8px';
      
      const posWrap = document.createElement('div');
      posWrap.style.display = 'flex';
      posWrap.style.alignItems = 'center';
      posWrap.style.gap = '4px';
      posWrap.innerHTML = `
        <span style="font-size:0.72rem;color:var(--text2);font-weight:600">Layout:</span>
        <button class="pos-btn ${currentLayout==='top'?'active':''}" data-pos="top" title="Above content">⬆️ Top</button>
        <button class="pos-btn ${currentLayout==='right'?'active':''}" data-pos="right" title="Right side of content">➡️ Right</button>
        <button class="pos-btn ${currentLayout==='left'?'active':''}" data-pos="left" title="Left side of content">⬅️ Left</button>
        <button class="pos-btn ${currentLayout==='bottom'?'active':''}" data-pos="bottom" title="Below content">⬇️ Bottom</button>
      `;
      posWrap.querySelectorAll('.pos-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          slide.mediaLayout = btn.dataset.pos;
          saveEpSlides(epIdx, slides);
          renderSlide();
        });
      });
      topBar.appendChild(posWrap);

      const actionWrap = document.createElement('div');
      actionWrap.style.display = 'flex';
      actionWrap.style.gap = '6px';
      actionWrap.style.alignItems = 'center';

      const galleryBtn = document.createElement('button');
      galleryBtn.className = 'tool-btn';
      galleryBtn.style.cssText = 'background:#0284C7;color:#fff;font-size:0.72rem;padding:4px 10px;border-radius:6px;font-weight:700;';
      galleryBtn.textContent = '🖼 Gallery';
      galleryBtn.title = 'Choose from 23 forensic medical images';
      galleryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openGalleryModal(slideIdx);
      });
      actionWrap.appendChild(galleryBtn);

      const addLabel = document.createElement('div');
      addLabel.className = 'img-add-btn-bar';
      addLabel.innerHTML = `<label style="cursor:pointer;font-size:0.72rem;padding:4px 8px;border-radius:6px;background:var(--surface2);border:1px solid var(--border);">➕ Upload<input type="file" accept="image/*,video/mp4,video/webm" multiple style="display:none" /></label>`;
      addLabel.querySelector('input[type=file]').addEventListener('change', (e) => handleImgUpload(e, slideIdx, () => renderSlide()));
      actionWrap.appendChild(addLabel);

      topBar.appendChild(actionWrap);
      zone.appendChild(topBar);

      // Grid of images / videos / gifs
      const grid = document.createElement('div');
      grid.className = 'image-flex-grid';
      imgs.forEach((item, imgIdx) => {
        const wrap = document.createElement('div');
        wrap.className = 'slide-img-wrap';
        
        const src = (typeof item === 'string') ? item : (item.url || '');
        const cap = (typeof item === 'object' && item.caption) ? item.caption : '';

        let mediaEl;
        if (src.startsWith('data:video/') || src.endsWith('.mp4') || src.endsWith('.webm')) {
          mediaEl = document.createElement('video');
          mediaEl.src = src;
          mediaEl.controls = true;
          mediaEl.autoplay = true;
          mediaEl.loop = true;
          mediaEl.muted = true;
          mediaEl.playsInline = true;
          mediaEl.className = 'slide-media-item';
        } else {
          mediaEl = document.createElement('img');
          mediaEl.src = getResolvedImageData(src);
          mediaEl.alt = cap || `Media ${imgIdx+1}`;
          mediaEl.className = 'slide-media-item';
        }

        // Editable Caption under the media
        const capEl = document.createElement('div');
        capEl.className = 'slide-img-caption';
        capEl.contentEditable = 'true';
        capEl.title = 'Click to edit caption (Enter or click outside to save)';
        capEl.setAttribute('data-placeholder', '✏️ Click to add/edit caption…');
        capEl.textContent = cap || '';
        if (!cap) capEl.setAttribute('data-empty', 'true');

        capEl.addEventListener('focus', () => {
          if (capEl.getAttribute('data-empty') === 'true') {
            capEl.removeAttribute('data-empty');
          }
        });

        capEl.addEventListener('blur', () => {
          const text = capEl.textContent.trim();
          if (!text) {
            capEl.setAttribute('data-empty', 'true');
          }
          saveSlideImageCaption(epIdx, slideIdx, imgIdx, text);
        });

        capEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            capEl.blur();
          }
        });

        const del = document.createElement('button');
        del.className = 'slide-img-del';
        del.title = 'Delete media';
        del.innerHTML = '×';
        del.addEventListener('click', (e) => {
          e.stopPropagation();
          if (!confirm('Delete this media item?')) return;
          deleteSlideImage(epIdx, slideIdx, imgIdx);
          renderSlide();
        });

        wrap.appendChild(mediaEl);
        wrap.appendChild(capEl);
        wrap.appendChild(del);
        grid.appendChild(wrap);
      });
      zone.appendChild(grid);
    }
  }

  refresh();
  return zone;
}

function handleImgUpload(e, slideIdx, cb) {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  const epIdx = state.epIdx;
  let loaded = 0;
  const existing = getSlideImages(epIdx, slideIdx).length;
  files.forEach((file, fi) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      saveSlideImage(epIdx, slideIdx, existing + fi, ev.target.result);
      loaded++;
      if (loaded === files.length) {
        showToast('✓ Media added to slide!');
        cb();
      }
    };
    reader.readAsDataURL(file);
  });
}


/* ════════════════════════════════════
   SLIDE EDIT MODE
   ════════════════════════════════════ */
function startEdit(idx) {
  const slides = getEpSlides(state.epIdx);
  const slide = slides[idx];
  const card = document.getElementById('slide-card');
  const body = card.querySelector('.slide-body');
  if (!body) return;

  body.innerHTML = '';
  const content = slide.content || {};

  // Title input
  const titleLabel = document.createElement('label');
  titleLabel.className = 'edit-label';
  titleLabel.textContent = 'Slide Title';
  const titleInput = document.createElement('input');
  titleInput.className = 'edit-input';
  titleInput.type = 'text';
  titleInput.value = slide.title;
  body.appendChild(titleLabel);
  body.appendChild(titleInput);

  if (slide.type === 'quiz') {
    // Question
    const qLabel = document.createElement('label');
    qLabel.className = 'edit-label';
    qLabel.textContent = 'Question';
    const qTA = document.createElement('textarea');
    qTA.className = 'edit-textarea';
    qTA.value = content.question || '';
    body.appendChild(qLabel);
    body.appendChild(qTA);
    // Answer
    const aLabel = document.createElement('label');
    aLabel.className = 'edit-label';
    aLabel.textContent = 'Answer';
    const aTA = document.createElement('textarea');
    aTA.className = 'edit-textarea';
    aTA.value = content.answer || '';
    body.appendChild(aLabel);
    body.appendChild(aTA);

    addEditActions(body, () => {
      slide.title = titleInput.value;
      slide.content = { question: qTA.value, answer: aTA.value };
      slides[idx] = slide;
      saveEpSlides(state.epIdx, slides);
      renderSlide();
    });

  } else if (content.calc) {
    const cLabel = document.createElement('label');
    cLabel.className = 'edit-label';
    cLabel.textContent = 'Calculation Steps (one per line)';
    const cTA = document.createElement('textarea');
    cTA.className = 'edit-textarea';
    cTA.value = content.calc.join('\n');
    body.appendChild(cLabel);
    body.appendChild(cTA);

    addEditActions(body, () => {
      slide.title = titleInput.value;
      slide.content = { calc: cTA.value.split('\n') };
      slides[idx] = slide;
      saveEpSlides(state.epIdx, slides);
      renderSlide();
    });

  } else if (content.rows) {
    // Table: make cells contenteditable
    const tLabel = document.createElement('label');
    tLabel.className = 'edit-label';
    tLabel.textContent = 'Table (cells are editable)';
    body.appendChild(tLabel);
    const tbl = buildTable(content);
    // Make all cells editable
    tbl.querySelectorAll('td').forEach(td => {
      td.setAttribute('contenteditable', 'true');
      td.style.minWidth = '60px';
    });
    tbl.querySelectorAll('th').forEach(th => {
      th.setAttribute('contenteditable', 'true');
      th.style.cursor = 'text';
    });
    body.appendChild(tbl);

    if (content.bullets) {
      const bLabel = document.createElement('label');
      bLabel.className = 'edit-label';
      bLabel.textContent = 'Additional bullets (one per line)';
      const bTA = document.createElement('textarea');
      bTA.className = 'edit-textarea';
      bTA.value = (content.bullets || []).join('\n');
      body.appendChild(bLabel);
      body.appendChild(bTA);
    }
    if (content.extra_bullets) {
      const ebLabel = document.createElement('label');
      ebLabel.className = 'edit-label';
      ebLabel.textContent = 'Extra bullets (one per line)';
      const ebTA = document.createElement('textarea');
      ebTA.className = 'edit-textarea';
      ebTA.value = (content.extra_bullets || []).join('\n');
      body.appendChild(ebLabel);
      body.appendChild(ebTA);

      addEditActions(body, () => {
        slide.title = titleInput.value;
        // Collect table headers/rows from DOM
        const headers = Array.from(tbl.querySelectorAll('th')).map(th => th.textContent.trim());
        const rows = Array.from(tbl.querySelectorAll('tbody tr')).map(tr =>
          Array.from(tr.querySelectorAll('td')).map(td => td.textContent.trim())
        );
        const newContent = { headers, rows, extra_bullets: ebTA.value.split('\n') };
        if (content.bullets) newContent.bullets = body.querySelector('.edit-textarea[data-role=bullets]') ?
          body.querySelector('.edit-textarea[data-role=bullets]').value.split('\n') : content.bullets;
        slide.content = newContent;
        slides[idx] = slide;
        saveEpSlides(state.epIdx, slides);
        renderSlide();
      });
      return;
    }

    addEditActions(body, () => {
      slide.title = titleInput.value;
      const headers = Array.from(tbl.querySelectorAll('th')).map(th => th.textContent.trim());
      const rows = Array.from(tbl.querySelectorAll('tbody tr')).map(tr =>
        Array.from(tr.querySelectorAll('td')).map(td => td.textContent.trim())
      );
      const newContent = { headers, rows };
      if (content.bullets) newContent.bullets = content.bullets;
      slide.content = newContent;
      slides[idx] = slide;
      saveEpSlides(state.epIdx, slides);
      renderSlide();
    });

  } else if (content.bullets) {
    const bLabel = document.createElement('label');
    bLabel.className = 'edit-label';
    bLabel.textContent = 'Bullets (one per line, leading spaces = sub-bullet)';
    const bTA = document.createElement('textarea');
    bTA.className = 'edit-textarea';
    bTA.value = (content.bullets || []).join('\n');
    body.appendChild(bLabel);
    body.appendChild(bTA);

    addEditActions(body, () => {
      slide.title = titleInput.value;
      slide.content = { bullets: bTA.value.split('\n') };
      slides[idx] = slide;
      saveEpSlides(state.epIdx, slides);
      renderSlide();
    });

  } else {
    // title type, bullets or general slide
    const bLabel = document.createElement('label');
    bLabel.className = 'edit-label';
    bLabel.textContent = 'Slide Points / Bullets (one per line, leading spaces = sub-bullet)';
    const bTA = document.createElement('textarea');
    bTA.className = 'edit-textarea';
    bTA.value = (content.bullets || []).join('\n');
    body.appendChild(bLabel);
    body.appendChild(bTA);

    addEditActions(body, () => {
      slide.title = titleInput.value;
      slide.content = Object.assign({}, slide.content, { bullets: bTA.value.split('\n') });
      slides[idx] = slide;
      saveEpSlides(state.epIdx, slides);
      renderSlide();
    });
  }
}

function addEditActions(container, onSave) {
  const actDiv = document.createElement('div');
  actDiv.className = 'edit-actions';
  const saveBtn = document.createElement('button');
  saveBtn.className = 'save-btn';
  saveBtn.textContent = '✓ Save';
  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'cancel-btn';
  cancelBtn.textContent = '✗ Cancel';
  saveBtn.addEventListener('click', onSave);
  cancelBtn.addEventListener('click', () => renderSlide());
  actDiv.appendChild(saveBtn);
  actDiv.appendChild(cancelBtn);
  container.appendChild(actDiv);
}


/* ════════════════════════════════════
   SLIDE OPERATIONS
   ════════════════════════════════════ */
function cloneSlide(idx) {
  const slides = getEpSlides(state.epIdx);
  const ep = window.SLIDES_DATA[state.epIdx];
  const clone = JSON.parse(JSON.stringify(slides[idx]));
  slides.splice(idx + 1, 0, clone);
  saveEpSlides(state.epIdx, slides);
  
  // Also instantly stash it to the cross-episode clipboard archive!
  addToStash(clone, `Ep ${state.epIdx+1}: ${ep.title}`);
  
  state.slideIdx = idx + 1;
  renderEpisodeToolbar();
  renderSlide();
  showToast('⧉ Slide duplicated here & saved to your Stash!');
}

function moveSlide(idx, dir) {
  const slides = getEpSlides(state.epIdx);
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= slides.length) return;
  [slides[idx], slides[newIdx]] = [slides[newIdx], slides[idx]];
  saveEpSlides(state.epIdx, slides);
  state.slideIdx = newIdx;
  renderSlide();
}

function deleteSlide(idx) {
  const slides = getEpSlides(state.epIdx);
  if (slides.length <= 1) { alert('Cannot delete the only slide.'); return; }
  if (!confirm(`Delete slide "${slides[idx].title}"?`)) return;
  slides.splice(idx, 1);
  saveEpSlides(state.epIdx, slides);
  state.slideIdx = Math.min(idx, slides.length - 1);
  renderEpisodeToolbar();
  renderSlide();
}

function addToFavorites(idx) {
  const slides = getEpSlides(state.epIdx);
  const slide = slides[idx];
  const ep = window.SLIDES_DATA[state.epIdx];
  const favs = getFavorites();
  favs.push({
    episodeTitle: ep.title,
    epIdx: state.epIdx,
    slideIdx: idx,
    slideTitle: slide.title,
    slideData: JSON.parse(JSON.stringify(slide)),
    savedAt: new Date().toISOString()
  });
  saveFavorites(favs);
  addToStash(slide, `Ep ${state.epIdx+1}: ${ep.title}`);
  showToast('★ Added to Favorites & Stash');
}

function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = `
    position:fixed;bottom:30px;left:50%;transform:translateX(-50%);
    background:#1E293B;color:#fff;padding:10px 24px;border-radius:20px;
    font-size:0.88rem;font-weight:600;z-index:9999;
    box-shadow:0 4px 20px rgba(0,0,0,0.3);
    animation: fadein 0.2s ease;
  `;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}


/* ════════════════════════════════════
   ADD SLIDE MODAL
   ════════════════════════════════════ */
let addSlideAtIdx = null; // null = end

function openAddSlideModal(afterIdx) {
  addSlideAtIdx = afterIdx;
  document.getElementById('new-slide-title').value = '';
  document.getElementById('modal-add-slide').classList.remove('hidden');
  document.getElementById('new-slide-title').focus();
}

function confirmAddSlide() {
  const title = document.getElementById('new-slide-title').value.trim() || 'New Slide';
  const type = document.getElementById('new-slide-type').value;
  const newSlide = { type, title, content: { bullets: ['Add content here…'] }, images: [], notes: '' };
  if (type === 'quiz') newSlide.content = { question: '', answer: '' };
  if (type === 'table') newSlide.content = { headers: ['Column 1','Column 2'], rows: [['',''],['','']] };
  if (type === 'title') newSlide.content = { bullets: [] };

  const slides = getEpSlides(state.epIdx);
  if (addSlideAtIdx !== null) {
    slides.splice(addSlideAtIdx + 1, 0, newSlide);
    state.slideIdx = addSlideAtIdx + 1;
  } else {
    slides.push(newSlide);
    state.slideIdx = slides.length - 1;
  }
  saveEpSlides(state.epIdx, slides);
  document.getElementById('modal-add-slide').classList.add('hidden');
  renderEpisodeToolbar();
  renderSlide();
}


/* ════════════════════════════════════
   OVERVIEW MODE
   ════════════════════════════════════ */
function renderOverview() {
  const slides = getEpSlides(state.epIdx);
  const grid = document.getElementById('overview-grid');
  grid.innerHTML = '';
  slides.forEach((slide, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'ov-thumb';
    thumb.innerHTML = `
      ${typeBadgeHTML(slide.type)}
      <div class="ov-thumb-num">#${i+1}</div>
      <div class="ov-thumb-title">${slide.title}</div>
    `;
    thumb.addEventListener('click', () => {
      state.slideIdx = i;
      state.overviewMode = false;
      renderSlide();
      document.getElementById('btn-overview').textContent = '⊞ Overview';
    });
    grid.appendChild(thumb);
  });
}


/* ════════════════════════════════════
   FAVORITES PAGE
   ════════════════════════════════════ */
function renderFavorites() {
  const grid = document.getElementById('fav-grid');
  const favs = getFavorites();
  grid.innerHTML = '';
  if (favs.length === 0) {
    grid.innerHTML = '<div class="fav-empty">No favorites yet. Star a slide with the ★ button while viewing an episode.</div>';
    return;
  }
  favs.forEach((fav, fi) => {
    const card = document.createElement('div');
    card.className = 'fav-card';
    const dt = new Date(fav.savedAt).toLocaleString();
    card.innerHTML = `
      <div class="fav-card-title">${fav.slideTitle}</div>
      <div class="fav-card-ep">From: ${fav.episodeTitle}</div>
      <div class="fav-card-time">${dt}</div>
      <div class="fav-card-actions">
        <button class="tool-btn" data-action="preview">👁 Preview</button>
        <button class="tool-btn danger-btn" data-action="remove">🗑 Remove</button>
      </div>
      <div class="fav-preview" style="display:none"></div>
    `;
    card.querySelector('[data-action=preview]').addEventListener('click', function() {
      const preview = card.querySelector('.fav-preview');
      if (preview.style.display === 'none') {
        preview.style.display = 'block';
        // Render slide content (read-only)
        preview.innerHTML = '';
        const slides = getEpSlides(fav.epIdx);
        const slide = fav.slideData;
        const mini = document.createElement('div');
        mini.className = 'slide-card';
        mini.style.boxShadow = 'none';
        mini.style.border = '1px solid var(--border)';
        mini.style.pointerEvents = 'none';
        const body = document.createElement('div');
        body.className = 'slide-body';
        const tEl = document.createElement('div');
        tEl.className = 'slide-title-display';
        tEl.textContent = slide.title;
        body.appendChild(tEl);
        const content = slide.content || {};
        if (content.question) body.appendChild(buildQuiz(content));
        else if (content.calc) body.appendChild(buildCalc(content.calc));
        else {
          if (content.flowchart && content.flowchart.length) body.appendChild(buildFlowchart(content.flowchart));
          if (content.cards && content.cards.length) body.appendChild(buildCardsGrid(content.cards));
          if (content.timeline && content.timeline.length) body.appendChild(buildTimeline(content.timeline));
          if (content.trap) body.appendChild(buildTrapBox(content.trap));
          if (content.rows) body.appendChild(buildTable(content));
          if (content.bullets) body.appendChild(buildBullets(content.bullets));
        }
        mini.appendChild(body);
        preview.appendChild(mini);
        this.textContent = '🙈 Hide Preview';
      } else {
        preview.style.display = 'none';
        this.textContent = '👁 Preview';
      }
    });
    card.querySelector('[data-action=remove]').addEventListener('click', () => {
      if (!confirm('Remove from favorites?')) return;
      const favs2 = getFavorites();
      favs2.splice(fi, 1);
      saveFavorites(favs2);
      renderFavorites();
    });
    grid.appendChild(card);
  });
}


/* ════════════════════════════════════
   EXPORT — FAVORITES HTML
   ════════════════════════════════════ */
function exportFavorites() {
  const favs = getFavorites();
  if (favs.length === 0) { alert('No favorites to export.'); return; }
  let slidesHTML = '';
  favs.forEach(fav => {
    const slide = fav.slideData;
    const content = slide.content || {};
    let innerHTML = `<h2 style="font-family:Poppins,sans-serif;font-size:1.2rem;margin-bottom:12px">${slide.title}</h2>`;
    if (content.question) {
      innerHTML += `<div style="background:#FFF8E1;border:2px solid #FFD93D;border-radius:10px;padding:14px;margin-bottom:10px">${content.question}</div>`;
      innerHTML += `<div style="background:#F0FFF4;border:1.5px solid #6BCB77;border-radius:10px;padding:14px">${content.answer}</div>`;
    } else if (content.calc) {
      innerHTML += `<pre style="background:#1E293B;color:#94A3B8;padding:16px;border-radius:8px;font-size:0.88rem">${content.calc.join('\n')}</pre>`;
    } else if (content.rows) {
      innerHTML += buildTableHTML(content);
    } else if (content.bullets) {
      innerHTML += '<ul style="list-style:none;padding:0">' +
        (content.bullets || []).filter(b => b).map(b =>
          `<li style="margin:6px 0;padding-left:${b.match(/^\s+/) ? '28px' : '0'}">${b.trim()}</li>`
        ).join('') + '</ul>';
    }
    slidesHTML += `
      <div style="background:#fff;border:1.5px solid #E2E8F0;border-radius:16px;padding:28px;margin-bottom:24px;page-break-inside:avoid">
        <span style="display:inline-block;padding:3px 12px;border-radius:20px;font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:12px;${badgeStyle(slide.type)}">${slide.type.toUpperCase()}</span>
        <div style="font-size:0.75rem;color:#64748B;margin-bottom:10px">From: ${fav.episodeTitle}</div>
        ${innerHTML}
      </div>`;
  });
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>MedDuo Favorites</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@700;800&display=swap" rel="stylesheet">
  <style>body{font-family:Inter,sans-serif;background:#F8FAFC;color:#1E293B;padding:32px;max-width:900px;margin:0 auto}
  h1{font-family:Poppins,sans-serif;color:#4DD9E8;margin-bottom:24px}
  @media print{body{padding:0}}</style></head><body>
  <h1>⭐ MedDuo Favorites — The Bone Code</h1>
  <p style="color:#64748B;margin-bottom:28px">Exported: ${new Date().toLocaleString()}</p>
  ${slidesHTML}</body></html>`;
  downloadFile('medduo-favorites.html', html);
}

function buildTableHTML(content) {
  let h = `<table style="border-collapse:collapse;width:100%">`;
  if (content.headers) {
    h += '<thead><tr>';
    content.headers.forEach(hd => h += `<th style="background:#4DD9E8;color:#1E293B;padding:9px 12px;text-align:left;font-size:0.85rem">${hd}</th>`);
    h += '</tr></thead>';
  }
  if (content.rows) {
    h += '<tbody>';
    content.rows.forEach((row, ri) => {
      h += `<tr style="${ri%2===1?'background:#F0FEFF':''}">`;
      row.forEach(c => h += `<td style="padding:8px 12px;border-bottom:1px solid #E2E8F0;font-size:0.85rem">${c}</td>`);
      h += '</tr>';
    });
    h += '</tbody>';
  }
  return h + '</table>';
}

function badgeStyle(type) {
  const map = {
    title: 'background:#4DD9E8;color:#1E293B',
    case: 'background:#FF6B6B;color:#fff',
    concept: 'background:#6BCB77;color:#fff',
    table: 'background:#FFD93D;color:#1E293B',
    timeline: 'background:#8B5CF6;color:#fff',
    resolution: 'background:#0EA5E9;color:#fff',
    summary: 'background:#64748B;color:#fff',
    quiz: 'background:#F28CB1;color:#fff',
  };
  return map[type] || 'background:#94A3B8;color:#fff';
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}


/* ════════════════════════════════════
   EXPORT — EPISODE HTML
   ════════════════════════════════════ */
function exportEpisodeHTML() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);
  let slidesHTML = '';
  slides.forEach((slide, i) => {
    const content = slide.content || {};
    let innerHTML = `<h2 style="font-family:Poppins,sans-serif;font-size:1.3rem;margin-bottom:14px">${slide.title}</h2>`;
    if (slide.type === 'title') {
      innerHTML = `<div style="text-align:center;padding:32px 0">
        <h1 style="font-family:Poppins,sans-serif;font-size:1.8rem;color:#1E293B">${slide.title}</h1>
        ${(content.bullets||[]).map(b => `<p style="color:#64748B">${b}</p>`).join('')}
      </div>`;
    } else if (content.question) {
      innerHTML += `<div style="background:#FFF8E1;border:2px solid #FFD93D;border-radius:10px;padding:14px;margin-bottom:10px">${content.question}</div>`;
      innerHTML += `<div style="background:#F0FFF4;border:1.5px solid #6BCB77;border-radius:10px;padding:14px">${content.answer}</div>`;
    } else if (content.calc) {
      innerHTML += `<pre style="background:#1E293B;color:#94A3B8;padding:16px;border-radius:8px;font-size:0.88rem;white-space:pre-wrap">${content.calc.join('\n')}</pre>`;
    } else {
      if (content.flowchart && content.flowchart.length) {
        innerHTML += buildFlowchartHTML(content.flowchart);
      }
      if (content.cards && content.cards.length) {
        innerHTML += buildCardsGridHTML(content.cards);
      }
      if (content.timeline && content.timeline.length) {
        innerHTML += buildTimelineHTML(content.timeline);
      }
      if (content.trap) {
        innerHTML += buildTrapBoxHTML(content.trap);
      }
      if (content.rows) {
        innerHTML += buildTableHTML(content);
        if (content.extra_bullets) innerHTML += content.extra_bullets.map(b => `<p style="margin:6px 0">${b}</p>`).join('');
      }
      if (content.bullets && content.bullets.length) {
        innerHTML += '<ul style="list-style:none;padding:0">' +
          (content.bullets||[]).filter(b => b).map(b =>
            `<li style="margin:6px 0;padding-left:${b.match(/^\s+/)?'28px':'0'}">${b.trim()}</li>`
          ).join('') + '</ul>';
      }
    }
    slidesHTML += `
      <div style="background:#fff;border:1.5px solid #E2E8F0;border-radius:16px;padding:28px;margin-bottom:24px;page-break-inside:avoid">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <span style="${badgeStyle(slide.type)};padding:4px 12px;border-radius:20px;font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px">${slide.type.toUpperCase()}</span>
          <span style="font-size:0.75rem;color:#94A3B8">#${i+1}</span>
        </div>
        ${innerHTML}
      </div>`;
  });
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>MedDuo Ep ${state.epIdx+1}: ${ep.title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@700;800&display=swap" rel="stylesheet">
  <style>body{font-family:Inter,sans-serif;background:#F8FAFC;color:#1E293B;padding:32px;max-width:900px;margin:0 auto}
  @media print{body{padding:0}}</style></head><body>
  <h1 style="font-family:Poppins,sans-serif;color:#4DD9E8;margin-bottom:4px">Episode ${state.epIdx+1}: ${ep.title}</h1>
  <p style="color:#64748B;margin-bottom:28px">MedDuo — The Bone Code · ${slides.length} slides · ${new Date().toLocaleString()}</p>
  ${slidesHTML}</body></html>`;
  downloadFile(`medduo-ep${state.epIdx+1}-slides.html`, html);
}


/* ════════════════════════════════════
   EXPORT — POWERPOINT (.PPTX)
   ════════════════════════════════════ */
/* ════════════════════════════════════
   EXPORT — POWERPOINT (.PPTX)
   Pixel-Perfect Layouts, Scaled Fonts, No Overflow
   ════════════════════════════════════ */
/* ════════════════════════════════════
   CLEAN SLIDE SHEET RENDERER
   Dedicated for High-Resolution PDF & Print (100% Page Fill, Zero Blank Notes)
   ════════════════════════════════════ */
function buildCleanSlideSheet(slide, idx, totalSlides, epIdx) {
  const sheet = document.createElement('div');
  sheet.className = 'clean-slide-sheet';
  sheet.style.cssText = 'width:1120px;height:792px;max-height:792px;box-sizing:border-box;background:#FFFFFF;padding:34px 44px;display:flex;flex-direction:column;justify-content:flex-start;page-break-after:always;page-break-inside:avoid;overflow:hidden;position:relative;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#1E293B;';

  const ep = window.SLIDES_DATA[epIdx] || { title: '' };

  // Header
  const hdr = document.createElement('div');
  hdr.className = 'clean-slide-header';
  hdr.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;';
  hdr.innerHTML = `
    <div style="font-size:11px;font-weight:700;color:#0284C7;letter-spacing:0.5px;text-transform:uppercase;">
      MedDuo Forensics · Episode ${epIdx + 1}
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="${badgeStyle(slide.type)};padding:3px 10px;border-radius:20px;font-size:0.7rem;font-weight:700;text-transform:uppercase;">${slide.type.toUpperCase()}</span>
      <span style="font-size:0.75rem;color:#94A3B8;font-weight:600;">#${idx + 1}</span>
    </div>
  `;
  sheet.appendChild(hdr);

  // Title
  const titleEl = document.createElement('div');
  titleEl.style.cssText = 'font-family:Poppins,sans-serif;font-size:22px;font-weight:700;color:#0F172A;margin:6px 0 10px 0;line-height:1.25;';
  titleEl.textContent = slide.title;
  sheet.appendChild(titleEl);

  // Divider
  const divEl = document.createElement('div');
  divEl.style.cssText = 'height:1.5px;background:#E2E8F0;width:100%;margin-bottom:18px;';
  sheet.appendChild(divEl);

  // Body container
  const body = document.createElement('div');
  body.style.cssText = 'display:flex;gap:28px;flex:1;min-height:0;overflow:hidden;align-items:flex-start;';

  // Get Images
  const imgs = getSlideImages(epIdx, idx);
  const hasImgs = imgs && imgs.length > 0;

  // Content Column
  const contentCol = document.createElement('div');
  contentCol.style.cssText = 'flex:1;min-width:0;overflow:hidden;';

  const content = slide.content || {};

  if (slide.type === 'title') {
    contentCol.innerHTML = `
      <div style="text-align:${hasImgs ? 'left' : 'center'};padding:${hasImgs ? '20px 0' : '50px 0'};">
        <h1 style="font-family:Poppins,sans-serif;font-size:2rem;color:#0284C7;margin-bottom:12px;">${escHtml(slide.title)}</h1>
        ${(content.bullets || []).map(b => `<p style="font-size:1.1rem;color:#475569;margin:8px 0;line-height:1.5;">${escHtml(b)}</p>`).join('')}
      </div>
    `;
  } else if (content.question) {
    contentCol.innerHTML = `
      <div style="background:#FEF3C7;border:1.5px solid #F59E0B;border-radius:10px;padding:16px 20px;margin-bottom:14px;">
        <div style="font-size:11px;font-weight:700;color:#B45309;text-transform:uppercase;margin-bottom:4px;">Question</div>
        <div style="font-size:14px;color:#92400E;font-weight:600;line-height:1.5;">${escHtml(content.question)}</div>
      </div>
      <div style="background:#DCFCE7;border:1.5px solid #10B981;border-radius:10px;padding:16px 20px;">
        <div style="font-size:11px;font-weight:700;color:#15803D;text-transform:uppercase;margin-bottom:4px;">Answer & Analysis</div>
        <div style="font-size:13.5px;color:#166534;line-height:1.5;">${escHtml(content.answer)}</div>
      </div>
    `;
  } else if (content.calc) {
    contentCol.innerHTML = `
      <pre style="background:#0F172A;color:#38BDF8;font-family:Consolas,monospace;font-size:12px;padding:18px;border-radius:10px;line-height:1.6;white-space:pre-wrap;margin:0;">${escHtml(content.calc.join('\n'))}</pre>
    `;
  } else if (content.rows) {
    const isCompact = content.rows.length > 5;
    let tableHTML = `
      <table style="width:100%;border-collapse:collapse;font-size:${isCompact ? '11px' : '12px'};border:1px solid #CBD5E1;border-radius:8px;overflow:hidden;margin-bottom:12px;">
        <thead>
          <tr style="background:#0284C7;color:#FFFFFF;">
            ${content.headers.map(h => `<th style="padding:${isCompact ? '6px 10px' : '8px 12px'};text-align:left;font-weight:600;">${escHtml(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${content.rows.map((r, ri) => `
            <tr style="background:${ri % 2 === 0 ? '#F8FAFC' : '#FFFFFF'};border-top:1px solid #E2E8F0;">
              ${r.map(c => `<td style="padding:${isCompact ? '5px 10px' : '7px 12px'};color:#1E293B;line-height:1.4;">${escHtml(c)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    if (content.extra_bullets && content.extra_bullets.length) {
      tableHTML += `
        <div style="margin-top:8px;">
          ${content.extra_bullets.map(b => `<div style="font-size:11.5px;color:#334155;margin:4px 0;line-height:1.4;">• ${escHtml(b.replace(/^[\s•\-\*]+/, ''))}</div>`).join('')}
        </div>
      `;
    }
    contentCol.innerHTML = tableHTML;
  } else if (content.bullets && content.bullets.length) {
    const count = content.bullets.length;
    let bSize = count > 8 ? '11.5px' : (count > 5 ? '12.5px' : '13.5px');
    let bMargin = count > 8 ? '6px' : '10px';
    let bulletsHTML = '<div style="display:flex;flex-direction:column;gap:' + bMargin + ';">';
    content.bullets.forEach(b => {
      const isSub = b.startsWith('  ') || b.startsWith('	') || b.match(/^\s+•/);
      const cleanB = b.replace(/^[\s•\-\*]+/, '').trim();
      bulletsHTML += `
        <div style="display:flex;gap:10px;align-items:flex-start;padding-left:${isSub ? '24px' : '0'};font-size:${isSub ? '11px' : bSize};line-height:1.5;color:${isSub ? '#475569' : '#1E293B'};">
          <span style="color:#0284C7;font-weight:bold;line-height:1;">${isSub ? '○' : '●'}</span>
          <span style="flex:1;">${escHtml(cleanB)}</span>
        </div>
      `;
    });
    bulletsHTML += '</div>';
    contentCol.innerHTML = bulletsHTML;
  }

  body.appendChild(contentCol);

  // Media Column (Right) if images exist
  if (hasImgs) {
    const mediaCol = document.createElement('div');
    mediaCol.style.cssText = 'width:440px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;';

    const firstImg = imgs[0];
    const rawUrl = typeof firstImg === 'string' ? firstImg : (firstImg.url || '');
    const cap = typeof firstImg === 'object' && firstImg.caption ? firstImg.caption : '';
    const resolvedUrl = getResolvedImageData(rawUrl);

    const imgEl = document.createElement('img');
    imgEl.src = resolvedUrl;
    imgEl.alt = cap || 'Forensic diagram';
    imgEl.style.cssText = 'max-width:440px;max-height:430px;width:auto;height:auto;object-fit:contain;border-radius:8px;border:1px solid #CBD5E1;box-shadow:0 4px 12px rgba(0,0,0,0.06);display:block;';
    mediaCol.appendChild(imgEl);

    if (cap) {
      const capEl = document.createElement('div');
      capEl.style.cssText = 'margin-top:10px;font-size:11.5px;color:#475569;font-style:italic;text-align:center;line-height:1.45;max-width:440px;word-break:break-word;';
      capEl.textContent = cap;
      mediaCol.appendChild(capEl);
    }

    body.appendChild(mediaCol);
  }

  sheet.appendChild(body);

  // Presenter Notes strictly if non-empty
  if (slide.notes && slide.notes.trim().length > 0) {
    const noteEl = document.createElement('div');
    noteEl.style.cssText = 'margin-top:12px;padding:8px 12px;background:#F8FAFC;border-left:3px solid #0284C7;border-radius:4px;font-size:11px;color:#475569;line-height:1.4;';
    noteEl.innerHTML = `📝 <strong>Presenter Note:</strong> ${escHtml(slide.notes.trim())}`;
    sheet.appendChild(noteEl);
  }

  // Footer
  const footer = document.createElement('div');
  footer.style.cssText = 'margin-top:auto;padding-top:10px;border-top:1px solid #E2E8F0;display:flex;align-items:center;justify-content:space-between;';
  footer.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;">
      <img src="${getResolvedImageData('Logo.jpg')}" alt="MedDuo" style="height:20px;object-fit:contain;" />
      <span style="font-size:11px;color:#64748B;font-weight:600;">MedDuo — The Bone Code</span>
    </div>
    <span style="font-size:11px;color:#94A3B8;font-weight:500;">Slide ${idx + 1} of ${totalSlides}</span>
  `;
  sheet.appendChild(footer);

  return sheet;
}


/* ════════════════════════════════════
   EXPORT — POWERPOINT (.PPTX)
   Genuine 16:9 Canvas, Scaled Text, Embedded Base64 Images & Notes Pane
   ════════════════════════════════════ */
function exportEpisodePPT() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);

  if (typeof PptxGenJS === 'undefined') {
    alert('PowerPoint generator library is not loaded. Please check your internet connection.');
    return;
  }

  showToast('⏳ Generating genuine PowerPoint (.pptx) with diagrams...');
  try {
    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9'; // 13.33 x 7.5 inches
    pptx.author = 'MedDuo';
    pptx.company = 'MedDuo Forensic Medicine';
    pptx.title = `Episode ${state.epIdx + 1}: ${ep.title}`;

    slides.forEach((slide, i) => {
      const s = pptx.addSlide();

      // Brand Chip & Title Banner
      s.addText(`MedDuo · The Bone Code · Episode ${state.epIdx + 1}`, {
        x: 0.8, y: 0.35, w: 10.0, h: 0.28,
        fontSize: 10, bold: true, color: '0284C7', fontFace: 'Calibri'
      });

      s.addText(slide.title, {
        x: 0.8, y: 0.65, w: 11.7, h: 0.65,
        fontSize: 20, bold: true, color: '0F172A', fontFace: 'Calibri'
      });

      // Thin separator line
      s.addShape(pptx.shapes.LINE, {
        x: 0.8, y: 1.35, w: 11.7, h: 0,
        line: { color: 'E2E8F0', width: 1 }
      });

      // Images and Layout
      const slideImgs = getSlideImages(state.epIdx, i);
      const hasSlideImgs = slideImgs && slideImgs.length > 0;
      const totalW = hasSlideImgs ? 7.0 : 11.7;
      const contentStartY = 1.55;

      if (hasSlideImgs) {
        const firstImg = slideImgs[0];
        const rawUrl = (typeof firstImg === 'string') ? firstImg : (firstImg.url || '');
        const imgCap = (typeof firstImg === 'object' && firstImg.caption) ? firstImg.caption : '';
        const base64Data = getResolvedImageData(rawUrl);

        try {
          const imgH = imgCap ? 4.1 : 4.8;
          const imgOpts = {
            x: 8.0, y: 1.55, w: 4.5, h: imgH,
            sizing: { type: 'contain', w: 4.5, h: imgH }
          };
          if (base64Data.startsWith('data:')) {
            imgOpts.data = base64Data;
          } else {
            imgOpts.path = rawUrl;
          }
          s.addImage(imgOpts);

          if (imgCap) {
            s.addText(imgCap, {
              x: 7.9, y: 5.85, w: 4.7, h: 1.1,
              fontSize: 9.5, italic: true, color: '475569', align: 'center', fontFace: 'Calibri',
              valign: 'top', wrap: true
            });
          }
        } catch(imgErr) {
          console.warn('Could not add image to PPTX slide', i, imgErr);
        }
      }

      const content = slide.content || {};

      // Render Title Slide
      if (slide.type === 'title') {
        s.addText(slide.title, {
          x: 0.8, y: 2.2, w: totalW, h: 1.4,
          fontSize: 28, bold: true, color: '0284C7', align: hasSlideImgs ? 'left' : 'center', fontFace: 'Calibri'
        });
        if (content.bullets && content.bullets.length) {
          s.addText(content.bullets.join('\n'), {
            x: 0.8, y: 3.8, w: totalW, h: 1.8,
            fontSize: 15, color: '475569', align: hasSlideImgs ? 'left' : 'center', fontFace: 'Calibri',
            lineSpacing: 22
          });
        }
      }
      // Render Table Slide
      else if (content.rows) {
        const colCount = content.headers.length;
        let colWidths = [];
        if (colCount === 2) {
          colWidths = [totalW * 0.35, totalW * 0.65];
        } else if (colCount === 3) {
          colWidths = [totalW * 0.22, totalW * 0.38, totalW * 0.40];
        } else {
          colWidths = content.headers.map(() => totalW / colCount);
        }

        const isCompact = content.rows.length > 5;
        const tableFontSize = isCompact ? 9.5 : 11;
        const cellPadding = isCompact ? [2, 4, 2, 4] : [4, 6, 4, 6];

        const tableData = [
          content.headers.map(h => ({
            text: h,
            options: { bold: true, fill: '0284C7', color: 'FFFFFF', fontFace: 'Calibri', margin: cellPadding }
          })),
          ...content.rows.map((r, ri) => r.map(c => ({
            text: c,
            options: { fill: ri % 2 === 0 ? 'F8FAFC' : 'FFFFFF', color: '1E293B', fontFace: 'Calibri', margin: cellPadding }
          })))
        ];

        s.addTable(tableData, {
          x: 0.8, y: contentStartY, w: totalW, colW: colWidths,
          fontSize: tableFontSize, border: { pt: 0.5, color: 'CBD5E1' }
        });

        if (content.extra_bullets && content.extra_bullets.length) {
          const approxTableH = (content.rows.length + 1) * (isCompact ? 0.32 : 0.42);
          const extraY = Math.min(5.6, contentStartY + approxTableH + 0.15);
          const extraH = Math.max(0.8, 6.8 - extraY);

          const extraItems = content.extra_bullets.map((b, bi) => ({
            text: b.replace(/^[\s•\-\*]+/, '').trim(),
            options: {
              bullet: true,
              breakLine: bi < content.extra_bullets.length - 1,
              fontSize: 10,
              color: '334155',
              fontFace: 'Calibri'
            }
          }));

          s.addText(extraItems, {
            x: 0.8, y: extraY, w: totalW, h: extraH,
            valign: 'top', fontFace: 'Calibri'
          });
        }
      }
      // Render Quiz Slide
      else if (content.question) {
        const qH = Math.min(1.8, Math.max(1.1, (content.question.length / 50) * 0.35));
        s.addText(`QUESTION:\n${content.question}`, {
          x: 0.8, y: contentStartY, w: totalW, h: qH,
          fontSize: 13, bold: true, color: '92400E', fill: 'FEF3C7',
          margin: 10, fontFace: 'Calibri', valign: 'top', wrap: true
        });

        const aY = contentStartY + qH + 0.25;
        const aH = Math.min(3.2, Math.max(1.2, 6.8 - aY));
        s.addText(`ANSWER:\n${content.answer}`, {
          x: 0.8, y: aY, w: totalW, h: aH,
          fontSize: 12.5, color: '166534', fill: 'DCFCE7',
          margin: 10, fontFace: 'Calibri', valign: 'top', wrap: true
        });
      }
      // Render Calc Slide
      else if (content.calc) {
        const calcLines = content.calc.length;
        const calcFontSize = calcLines > 8 ? 10 : 11.5;
        s.addText(content.calc.join('\n'), {
          x: 0.8, y: contentStartY, w: totalW, h: Math.min(5.1, calcLines * 0.35 + 0.5),
          fontSize: calcFontSize, fontFace: 'Courier New', color: '38BDF8', fill: '0F172A',
          margin: 10, valign: 'top', wrap: true
        });
      }
      // Render Bullets Slide
      else if (content.bullets && content.bullets.length) {
        const count = content.bullets.length;
        let fSize = 13;
        let lSpace = 20;
        if (count >= 10) { fSize = 10; lSpace = 15; }
        else if (count >= 7) { fSize = 11.5; lSpace = 18; }
        else if (count >= 5) { fSize = 12.5; lSpace = 20; }

        const textItems = content.bullets.map((b, bi) => {
          const isSub = b.startsWith('  ') || b.startsWith('	') || b.match(/^\s+•/);
          return {
            text: b.replace(/^[\s•\-\*]+/, '').trim(),
            options: {
              bullet: true,
              breakLine: bi < content.bullets.length - 1,
              indentLevel: isSub ? 1 : 0,
              fontSize: isSub ? fSize - 1 : fSize,
              color: isSub ? '475569' : '1E293B',
              fontFace: 'Calibri',
              lineSpacing: lSpace
            }
          };
        });

        s.addText(textItems, {
          x: 0.8, y: contentStartY, w: totalW, h: 5.2,
          valign: 'top', fontFace: 'Calibri'
        });
      }

      // Add Notes strictly to Presenter Notes pane if not empty
      if (slide.notes && slide.notes.trim()) {
        s.addNotes(slide.notes.trim());
      }
    });

    pptx.writeFile({ fileName: `medduo-ep${state.epIdx + 1}-presentation.pptx` })
      .then(() => showToast('✓ Genuine PowerPoint (.pptx) downloaded!'))
      .catch(err => {
        console.error(err);
        alert('Error generating PPTX: ' + err.message);
      });
  } catch(err) {
    console.error('PptxGenJS error', err);
    alert('Failed to generate PowerPoint: ' + err.message);
  }
}


/* ════════════════════════════════════
   DOWNLOAD PDF (ONE-CLICK AUTOMATIC)
   Full-Bleed A4 Landscape, 100% Page Fill, Zero Blank Notes, All Images Rendered
   ════════════════════════════════════ */
async function downloadEpisodePDF() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);

  const jsPDFConstructor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
  if (!jsPDFConstructor || typeof html2canvas === 'undefined') {
    printEpisode();
    return;
  }

  showToast('⏳ Generating presentation PDF with diagrams...');

  // Off-screen / in-flow container
  const tempContainer = document.createElement('div');
  tempContainer.id = 'medduo-pdf-temp-container';
  tempContainer.style.cssText = 'position:fixed;top:0;left:0;width:1120px;height:792px;background:#FFFFFF;z-index:999999;overflow:hidden;pointer-events:none;opacity:0.99;box-shadow:0 10px 40px rgba(0,0,0,0.3);';

  const progressBanner = document.createElement('div');
  progressBanner.style.cssText = 'position:absolute;top:12px;right:24px;background:#0284C7;color:#fff;padding:6px 16px;border-radius:20px;font-size:12px;font-weight:700;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.25);';
  progressBanner.textContent = 'Rendering PDF slides...';
  tempContainer.appendChild(progressBanner);

  document.body.appendChild(tempContainer);

  try {
    const pdf = new jsPDFConstructor({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    for (let idx = 0; idx < slides.length; idx++) {
      progressBanner.textContent = `Rendering slide ${idx + 1} of ${slides.length}...`;
      showToast(`⏳ Rendering slide ${idx + 1} of ${slides.length}...`);

      const sheet = buildCleanSlideSheet(slides[idx], idx, slides.length, state.epIdx);
      sheet.style.width = '1120px';
      sheet.style.height = '792px';

      // Remove any previously rendered slide
      tempContainer.querySelectorAll('.clean-slide-sheet').forEach(el => el.remove());
      tempContainer.appendChild(sheet);

      // Await images inside sheet to decode
      const imgs = Array.from(sheet.querySelectorAll('img'));
      await Promise.all(imgs.map(img => img.complete ? Promise.resolve() : img.decode().catch(() => {})));

      await new Promise(r => setTimeout(r, 60));

      const canvas = await html2canvas(sheet, {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        width: 1120,
        height: 792,
        scrollX: 0,
        scrollY: 0,
        logging: false
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      if (idx > 0) pdf.addPage([297, 210], 'landscape');
      pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210, undefined, 'FAST');
    }

    pdf.save(`medduo-ep${state.epIdx + 1}-presentation.pdf`);
    showToast('✓ Presentation PDF downloaded successfully!');
  } catch(err) {
    console.error('PDF generation error:', err);
    printEpisode();
  } finally {
    tempContainer.remove();
  }
}


/* ════════════════════════════════════
   PRINT / PDF (ALL SLIDES)
   ════════════════════════════════════ */
function printEpisode() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);
  const existing = document.getElementById('medduo-print-area');
  if (existing) existing.remove();

  const printArea = document.createElement('div');
  printArea.id = 'medduo-print-area';

  slides.forEach((slide, idx) => {
    const sheet = buildCleanSlideSheet(slide, idx, slides.length, state.epIdx);
    sheet.classList.add('print-slide-sheet');
    printArea.appendChild(sheet);
  });

  document.body.appendChild(printArea);
  window.print();

  window.addEventListener('afterprint', () => {
    const el = document.getElementById('medduo-print-area');
    if (el) el.remove();
  }, { once: true });
}

/* ════════════════════════════════════
   SLIDE STASH / CLIPBOARD ARCHIVE
   ════════════════════════════════════ */
function getStash() {
  try { return JSON.parse(localStorage.getItem('medduo_stash') || '[]'); } catch(e) { return []; }
}
function saveStash(items) {
  localStorage.setItem('medduo_stash', JSON.stringify(items));
  updateStashCount();
}
function updateStashCount() {
  const el = document.getElementById('stash-count');
  if (el) el.textContent = getStash().length;
}
function addToStash(slideData, sourceEpTitle) {
  const stash = getStash();
  stash.unshift({
    id: 'stash_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    title: slideData.title,
    slideData: JSON.parse(JSON.stringify(slideData)),
    sourceEp: sourceEpTitle || 'Current Deck',
    savedAt: new Date().toISOString()
  });
  saveStash(stash);
}

function openStashModal() {
  const modal = document.getElementById('modal-stash');
  const list = document.getElementById('stash-list');
  const stash = getStash();
  list.innerHTML = '';

  if (stash.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:30px;color:#94A3B8;font-size:0.9rem">
      Your Slide Stash is empty.<br>Click "⧉ Clone" or "★ Favorite" on any slide to save it here for instant recall!
    </div>`;
  } else {
    stash.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'stash-item';
      const time = new Date(item.savedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      row.innerHTML = `
        <div class="stash-item-info">
          <div class="stash-item-title">${item.title}</div>
          <div class="stash-item-meta">From ${item.sourceEp} · ${time}</div>
        </div>
        <div class="stash-item-actions">
          <button class="tool-btn" style="font-size:0.75rem;background:#4DD9E8;color:#0F172A;font-weight:700" data-paste="${idx}">📋 Paste Here</button>
          <button class="tool-btn danger-btn" style="font-size:0.75rem" data-del="${idx}">🗑️</button>
        </div>
      `;
      row.querySelector('[data-paste]').addEventListener('click', () => {
        pasteFromStash(idx);
        modal.classList.add('hidden');
      });
      row.querySelector('[data-del]').addEventListener('click', () => {
        const s2 = getStash();
        s2.splice(idx, 1);
        saveStash(s2);
        openStashModal();
      });
      list.appendChild(row);
    });
  }

  modal.classList.remove('hidden');
}

function pasteFromStash(stashIdx) {
  const stash = getStash();
  const item = stash[stashIdx];
  if (!item) return;

  if (state.epIdx === null) {
    // If on home page, open episode 0
    state.epIdx = 0;
    state.slideIdx = 0;
    showView('episode');
  }

  const slides = getEpSlides(state.epIdx);
  const clone = JSON.parse(JSON.stringify(item.slideData));
  const insertPos = (state.slideIdx !== null ? state.slideIdx + 1 : slides.length);
  slides.splice(insertPos, 0, clone);
  saveEpSlides(state.epIdx, slides);

  state.slideIdx = insertPos;
  renderEpisodeToolbar();
  renderSlide();
  showToast(`✓ Pasted "${item.title}" into current episode!`);
}

function exportStashPresentation() {
  const stash = getStash();
  if (stash.length === 0) { alert('No stashed slides to export.'); return; }
  let slidesHTML = '';
  stash.forEach((item, i) => {
    const slide = item.slideData;
    const content = slide.content || {};
    let innerHTML = `<h2 style="font-family:Poppins,sans-serif;font-size:1.3rem;margin-bottom:14px">${slide.title}</h2>`;
    if (content.rows) {
      innerHTML += buildTableHTML(content);
    } else if (content.bullets) {
      innerHTML += '<ul style="list-style:none;padding:0">' +
        (content.bullets||[]).map(b => `<li style="margin:6px 0">${b}</li>`).join('') + '</ul>';
    } else if (content.question) {
      innerHTML += `<div style="background:#FFF8E1;padding:12px">${content.question}</div><div style="background:#F0FFF4;padding:12px;margin-top:8px">${content.answer}</div>`;
    }
    slidesHTML += `
      <div style="background:#fff;border:1.5px solid #E2E8F0;border-radius:16px;padding:28px;margin-bottom:24px;page-break-inside:avoid">
        <div style="font-size:0.75rem;color:#0284C7;font-weight:700">STASHED SLIDE #${i+1} · FROM: ${item.sourceEp}</div>
        ${innerHTML}
      </div>`;
  });
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>MedDuo Stashed Slides</title>
  <style>body{font-family:Inter,sans-serif;background:#F8FAFC;padding:32px;max-width:900px;margin:0 auto}</style></head>
  <body><h1>📋 MedDuo Custom Stash (${stash.length} slides)</h1>${slidesHTML}</body></html>`;
  downloadFile('medduo-custom-stash.html', html);
}


/* ════════════════════════════════════
   PRESENTATION MODE
   ════════════════════════════════════ */
function enterPresentation() {
  state.presMode = true;
  document.getElementById('presentation-overlay').classList.remove('hidden');
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
  renderPresSlide();
}

function exitPresentation() {
  state.presMode = false;
  document.getElementById('presentation-overlay').classList.add('hidden');
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
}

function renderPresSlide() {
  const slides = getEpSlides(state.epIdx);
  const idx = state.slideIdx;
  const wrap = document.getElementById('pres-slide-wrap');
  wrap.style.opacity = '0';
  wrap.innerHTML = '';
  const card = document.createElement('div');
  card.className = 'slide-card pres-slide-card';
  card.appendChild(buildSlideCard(slides[idx], idx, slides));
  
  // Hide only editing chrome in presentation mode; keep media visible!
  card.querySelectorAll('.slide-header-right').forEach(el => el.style.display = 'none');
  card.querySelectorAll('.slide-notes-area').forEach(el => el.style.display = 'none');
  card.querySelectorAll('.image-zone-empty, .img-add-btn-bar, .slide-img-del, .img-layout-bar').forEach(el => el.style.display = 'none');
  
  wrap.appendChild(card);
  document.getElementById('pres-counter').textContent = `${idx+1} / ${slides.length}`;
  setTimeout(() => wrap.style.opacity = '1', 20);
}

function presNavigate(dir) {
  const slides = getEpSlides(state.epIdx);
  const newIdx = state.slideIdx + dir;
  if (newIdx < 0 || newIdx >= slides.length) return;
  state.slideIdx = newIdx;
  renderPresSlide();
  // keep main viewer in sync
  document.getElementById('slide-counter').textContent = `Slide ${newIdx+1} / ${slides.length}`;
}


/* ════════════════════════════════════
   KEYBOARD NAVIGATION
   ════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  if (state.view !== 'episode') return;

  // Don't intercept if typing in an input/textarea
  const tag = document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.getAttribute('contenteditable')) return;

  // 'F' or 'f' toggles Presentation Mode (Fullscreen)
  if (e.key === 'f' || e.key === 'F') {
    e.preventDefault();
    if (state.presMode) {
      exitPresentation();
    } else {
      enterPresentation();
    }
    return;
  }

  if (state.presMode) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); presNavigate(1); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); presNavigate(-1); }
    else if (e.key === 'Escape') exitPresentation();
    return;
  }

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    navigate(1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    navigate(-1);
  } else if (e.key === ' ') {
    e.preventDefault();
    navigate(1);
  }
});

function navigate(dir) {
  if (state.overviewMode) return;
  const slides = getEpSlides(state.epIdx);
  const newIdx = state.slideIdx + dir;
  if (newIdx < 0 || newIdx >= slides.length) return;
  state.slideIdx = newIdx;
  renderSlide();
}


/* ════════════════════════════════════
   EVENT BINDINGS
   ════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Track tabs event listeners
  const tabAin = document.getElementById('tab-ain-shams');
  const tabMust = document.getElementById('tab-must');
  if (tabAin) tabAin.addEventListener('click', () => updateActiveTrack('ain_shams'));
  if (tabMust) tabMust.addEventListener('click', () => updateActiveTrack('must'));

  // Initialize track state
  updateActiveTrack(state.track, true);

  renderHome();

  // Header
  document.getElementById('logo-btn').addEventListener('click', goHome);
  document.getElementById('btn-home').addEventListener('click', goHome);
  document.getElementById('btn-favorites').addEventListener('click', openFavorites);
  document.getElementById('btn-stash').addEventListener('click', openStashModal);
  updateStashCount();

  // Episode toolbar
  document.getElementById('btn-back').addEventListener('click', goHome);
  document.getElementById('btn-overview').addEventListener('click', () => {
    state.overviewMode = !state.overviewMode;
    document.getElementById('btn-overview').textContent = state.overviewMode ? '← Slides' : '⊞ Overview';
    renderSlide();
  });
  document.getElementById('btn-save-deck').addEventListener('click', () => {
    saveEpSlides(state.epIdx, getEpSlides(state.epIdx));
    showToast('💾 Changes saved to localStorage!');
  });
  document.getElementById('btn-present').addEventListener('click', enterPresentation);
  const btnExpHtml = document.getElementById('btn-export-html');
  if (btnExpHtml) btnExpHtml.addEventListener('click', exportEpisodeHTML);
  document.getElementById('btn-export-ppt').addEventListener('click', exportEpisodePPT);
  document.getElementById('btn-download-pdf').addEventListener('click', downloadEpisodePDF);
  document.getElementById('btn-print').addEventListener('click', printEpisode);
  document.getElementById('btn-reset-ep').addEventListener('click', () => {
    if (!confirm(`Reset Episode ${state.epIdx + 1} to the latest official version with all diagrams and mnemonics? This will replace your local edits.`)) return;
    localStorage.removeItem(`medduo_slides_edits_${state.track}_${state.epIdx}`);
    localStorage.removeItem(`medduo_slides_edits_${state.epIdx}`);
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 10; j++) {
        localStorage.removeItem(`medduo_img_${state.epIdx}_${i}_${j}`);
        localStorage.removeItem(`medduo_cap_${state.epIdx}_${i}_${j}`);
      }
    }
    state.slideIdx = 0;
    renderEpisodeToolbar();
    renderSlide();
    showToast(`✓ Episode ${state.epIdx + 1} reset to latest official version!`);
  });

  // Gallery Modal Close Listeners
  const modalGal = document.getElementById('modal-gallery');
  const closeGal = document.getElementById('modal-gallery-close');
  if (closeGal && modalGal) {
    closeGal.addEventListener('click', () => modalGal.classList.add('hidden'));
    modalGal.addEventListener('click', (e) => {
      if (e.target === modalGal) modalGal.classList.add('hidden');
    });
  }

  // Nav
  document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
  document.getElementById('btn-next').addEventListener('click', () => navigate(1));
  document.getElementById('btn-add-slide-end').addEventListener('click', () => openAddSlideModal(null));
  document.getElementById('btn-paste-stash').addEventListener('click', openStashModal);

  // Stash Modal
  document.getElementById('modal-stash-close').addEventListener('click', () => {
    document.getElementById('modal-stash').classList.add('hidden');
  });
  document.getElementById('modal-stash').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-stash')) {
      document.getElementById('modal-stash').classList.add('hidden');
    }
  });
  document.getElementById('btn-clear-stash').addEventListener('click', () => {
    if (!confirm('Clear all stashed slides?')) return;
    saveStash([]);
    openStashModal();
  });
  document.getElementById('btn-export-stash').addEventListener('click', exportStashPresentation);

  // Modal
  document.getElementById('modal-add-confirm').addEventListener('click', confirmAddSlide);
  document.getElementById('modal-add-cancel').addEventListener('click', () => document.getElementById('modal-add-slide').classList.add('hidden'));
  document.getElementById('modal-add-slide').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-add-slide')) document.getElementById('modal-add-slide').classList.add('hidden');
  });

  // Presentation
  document.getElementById('pres-prev').addEventListener('click', () => presNavigate(-1));
  document.getElementById('pres-next').addEventListener('click', () => presNavigate(1));
  document.getElementById('pres-exit').addEventListener('click', exitPresentation);
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && state.presMode) exitPresentation();
  });

  // Favorites export
  document.getElementById('btn-export-favs').addEventListener('click', exportFavorites);
});
