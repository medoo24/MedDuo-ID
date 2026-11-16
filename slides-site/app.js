/* ══════════════════════════════════════════════════════════════════
   MedDuo Slides — app.js
   The Bone Code · Pure JS, no frameworks
   ══════════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════
   SLIDE DATA
   ════════════════════════════════════ */
window.SLIDES_DATA = [

  /* ─── Episode 1 ─── */
  {
    title: "The 18-Year Secret: Bone Age Estimation",
    description: "How X-rays of elbow, wrist, and knee unlock a suspect's true age — and legal status.",
    slides: [
      { type: "title", title: "The 18-Year Secret — Bone Age Estimation",
        content: { bullets: ["Episode 1 · The Bone Code", "MedDuo Forensic Medicine Podcast"] }, images: [], notes: "" },

      { type: "case", title: "Case: The El-Prince Suspect",
        content: { bullets: [
          "Suspect 'El-Prince' arrested for murder & armed robbery",
          "Defense lawyer presents birth certificate: age 15 years 9 months",
          "Requests juvenile court referral — cannot be tried as adult",
          "Prosecution suspects forged birth certificate (suspect has beard, adult features)",
          "Court orders X-rays: elbow, wrist, knee — to determine true age"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Identification (Istiaraf): Presumptive vs Positive",
        content: { bullets: [
          "Presumptive ID: appearance, clothing, tattoos, voice — circumstantial only, not court-conclusive",
          "Positive ID (court-conclusive): 3 methods:",
          "  • Fingerprints — 1 in 64 million uniqueness, even in identical twins",
          "  • DNA — approaches 100% (limitation: identical twins share nuclear DNA)",
          "  • Dental prints — jaw structure + dental records match"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Epiphyseal Plate Biology",
        content: { bullets: [
          "Long bone = Diaphysis (shaft) + Epiphysis (ends)",
          "Between them: Epiphyseal plate (growth cartilage)",
          "Non-union (plate visible on X-ray) = bone still growing",
          "Union (plate fused, invisible) = growth complete, age milestone passed",
          "Key principle: fusion timing is predictable within known age ranges"
        ]}, images: [], notes: "" },

      { type: "table", title: "Elbow Fusion Ages & Legal Significance",
        content: { headers: ["Structure","Age of Fusion","Legal Significance"],
          rows: [
            ["Trochlea + Capitulum","14 years","Minimum age for criminal responsibility (sexual offences)"],
            ["Lateral Epicondyle","16 years","National ID card eligibility"],
            ["Medial Epicondyle + Radius Head","17 years","—"]
          ]
        }, images: [], notes: "" },

      { type: "table", title: "Structures Fusing at Age 18",
        content: { headers: ["Structure","Note"],
          rows: [
            ["Distal metacarpals & phalanges","Hand X-ray"],
            ["Head of femur","Hip"],
            ["Ankle joint",""]
          ],
          extra_bullets: ["Legal milestones at 18: Full criminal responsibility · Military service · Driving licence · Voting rights · Age of consent"]
        }, images: [], notes: "" },

      { type: "table", title: "Age 21 & Beyond",
        content: { headers: ["Age","Fusion Event","Legal Significance"],
          rows: [
            ["21y","Lower femur + Upper tibia/fibula","Full civil rights, inheritance management, end of guardianship"]
          ]
        }, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution: El-Prince",
        content: { headers: ["X-ray Site","Finding","Conclusion"],
          rows: [
            ["Elbow — Lateral Epicondyle","Fully fused","Age > 16 years"],
            ["Wrist — Distal metacarpals","Fully fused","Age > 18 years"],
            ["Knee — Lower femur","Non-union (open)","Age < 21 years"],
            ["VERDICT","Age 18–21 years","Tried as adult — full criminal responsibility"]
          ]
        }, images: [], notes: "" },

      { type: "summary", title: "Episode 1 — Key Reference Table",
        content: { headers: ["Bone/Structure","Age","Legal Significance"],
          rows: [
            ["Trochlea + Capitulum","14y","Sexual offences criminal threshold"],
            ["Lateral Epicondyle","16y","National ID"],
            ["Medial Epicondyle + Radius head","17y","—"],
            ["Distal metacarpals, Femur head, Ankle","18y","Full criminal responsibility, voting, driving"],
            ["Lower femur + Upper tibia/fibula","21y","Full civil rights"]
          ]
        }, images: [], notes: "" },

      { type: "quiz", title: "Review Question",
        content: {
          question: "A suspect's X-ray shows: Lateral epicondyle FUSED, distal metacarpals FUSED, lower femur NOT fused (non-union). What is the estimated age range, and what is the legal status under Egyptian law?",
          answer: "Age: 18–21 years. Legal status: Full criminal responsibility — tried as adult in criminal court, not juvenile court."
        }, images: [], notes: "" }
    ]
  },

  /* ─── Episode 2 ─── */
  {
    title: "The Skull: Sex and Age Determination",
    description: "Skull morphology, suture closure timelines, and mandible aging applied to a fire victim.",
    slides: [
      { type: "title", title: "The Skull: Sex & Age Determination",
        content: { bullets: ["Episode 2 · The Bone Code"] }, images: [], notes: "" },

      { type: "case", title: "Case: The Incinerated Body",
        content: { bullets: [
          "Massive fire in abandoned warehouse on Cairo outskirts",
          "After fire suppression, completely charred skeleton found",
          "No soft tissue, no skin, no fingerprints remain",
          "Two missing persons in the area:",
          "  • Mr. Fawzi — businessman, age 45",
          "  • Ms. Rania — accountant, age 28",
          "Question: Is the skull male or female? Which person is this?"
        ]}, images: [], notes: "" },

      { type: "table", title: "Skull Sex Differences",
        content: { headers: ["Feature","Male","Female"],
          rows: [
            ["Size & Weight","Bigger & heavier","Smaller, lighter & smoother"],
            ["Supra-orbital ridges","Prominent (marked brow)","Smooth / less marked"],
            ["Fronto-nasal junction","Angular","Smooth curve"],
            ["Mastoid & Styloid process","Long & bulky","Short & small"],
            ["Occipital condyles","Long & narrow","Short & broad"]
          ]
        }, images: [], notes: "" },

      { type: "timeline", title: "Cranial Suture Closure Ages",
        content: { bullets: [
          "3 years — Frontal/Metopic suture (standard)",
          "30 years — Frontal suture in Negroid race (persists longer)",
          "23 years — Sphenooccipital base (+ medial clavicle, iliac crest)",
          "25–30 years — Sagittal suture (inner surface first, then outer)",
          "40 years — Coronal suture (+ Xiphoid process, Hyoid greater cornua)",
          "50 years — Lambdoid suture",
          "70 years — All remaining sutures"
        ]}, images: [], notes: "" },

      { type: "table", title: "Suture Closure Reference",
        content: { headers: ["Suture","Location","Closure Age","Note"],
          rows: [
            ["Frontal/Metopic","Midline forehead","3y (std) / 30y (Negroid)","Racial variation"],
            ["Sphenooccipital","Skull base","23 years","Also: medial clavicle, iliac crest"],
            ["Sagittal","Midline top of skull","25–30 years","Inner surface first"],
            ["Coronal","Front crown","40 years","Also: Xiphoid, Hyoid"],
            ["Lambdoid","Rear skull","50 years",""],
            ["All sutures","—","70 years","Except Parieto-temporal"]
          ]
        }, images: [], notes: "" },

      { type: "concept", title: "Mandible Aging",
        content: { headers: ["Stage","Jaw Angle","Mental Foramen Position","Teeth"],
          rows: [
            ["Infant","Obtuse","Near lower border","Absent/erupting"],
            ["Adult","90° (right angle)","Midway","Present, well-aligned"],
            ["Senile","Obtuse again","Near alveolar margin (top)","Lost — alveolus resorbed"]
          ]
        }, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution: The Incinerated Skull",
        content: { bullets: [
          "Skull features: smooth, light, curved fronto-nasal angle → FEMALE skull",
          "→ Mr. Fawzi (male) is excluded from all consideration",
          "Sagittal suture: fully closed inside AND outside → age > 30 years",
          "Coronal suture: still open, not fused → age < 40 years",
          "Wisdom tooth present in mandible → age > 18 years",
          "Conclusion: Female, age 30–40 years → consistent with Ms. Rania (28y)",
          "Note: 28y is within 2y margin of Sagittal closure — clinically consistent",
          "VERDICT: Remains identified as Ms. Rania"
        ]}, images: [], notes: "" },

      { type: "summary", title: "Episode 2 — Key Points",
        content: { bullets: [
          "Sex before puberty (< 14y): cannot determine from skull alone — testosterone drives male features",
          "5 key skull differences: supra-orbital ridge, fronto-nasal junction, mastoid, occipital condyles, size",
          "Suture closure = reliable age timeline from 3y to 70y",
          "Mandible: infant & senile both have obtuse angle — different cause",
          "Practical tip: Sagittal (midline crown) + Coronal (front crown) = most commonly tested pair"
        ]}, images: [], notes: "" },

      { type: "quiz", title: "Review Question",
        content: {
          question: "A skull shows: prominent supra-orbital ridges, angular fronto-nasal junction, Sagittal suture fully closed, Coronal suture open. Wisdom tooth present. Determine: (a) Sex, (b) Approximate age range.",
          answer: "(a) Male — prominent ridges and angular junction are male features. (b) Age 30–40 years: Sagittal closed (>25-30y), Coronal open (<40y), wisdom tooth present (>18y)."
        }, images: [], notes: "" }
    ]
  },

  /* ─── Episode 3 ─── */
  {
    title: "The Pelvis: Gold Standard for Sex Determination",
    description: "Six measurable skeletal features and the pelvic age clock — with a Nile mystery.",
    slides: [
      { type: "title", title: "The Pelvis: Gold Standard for Sex Determination",
        content: { bullets: ["Episode 3 · The Bone Code"] }, images: [], notes: "" },

      { type: "case", title: "Case: The Nile Sack",
        content: { bullets: [
          "Fishermen net a submerged sack from the Nile riverbed",
          "Contents: partially decomposed lower skeleton — pelvis + femur fragment only",
          "No soft tissue, no identity documents",
          "Two missing persons reported in the area:",
          "  • Abdo — fisherman, male, age 42",
          "  • Tafida — female, age 35, mother of 3 children",
          "Question: Whose skeleton is this?"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Why the Pelvis? Functional Anatomy",
        content: { bullets: [
          "Male pelvis function: locomotion, support, weight bearing",
          "→ Structure: narrow, deep, heavy, restricted inlet",
          "Female pelvis function: birth canal — fetus must pass through",
          "→ Structure: wide, shallow, light, broad inlet",
          "This functional difference = 6 measurable skeletal differences",
          "Accuracy of sex determination from pelvis: ~95%"
        ]}, images: [], notes: "" },

      { type: "table", title: "Pelvis Sex Differences — 6 Features",
        content: { headers: ["Feature","Male","Female"],
          rows: [
            ["Subpubic angle","Acute (<90°) — V-shaped","Obtuse (>90°) — U-shaped"],
            ["Sacrum","Long, narrow, curved (3 sacroiliac segments)","Short, wide, less curved (2 sacroiliac segments)"],
            ["Greater sciatic notch","Deep & narrow (cave-like)","Wide & shallow"],
            ["Acetabulum","Wide & deep","Narrow & shallow"],
            ["Obturator foramen","Oval","Triangular"],
            ["Iliac crest","Highly arched","Less arched / flatter"]
          ]
        }, images: [], notes: "" },

      { type: "table", title: "Pelvic Age Clock",
        content: { headers: ["Age","Fusion Event","Notes"],
          rows: [
            ["6 years","Pubic ramus + Ischial ramus",""],
            ["15 years (puberty)","Y-shaped suture in acetabulum","3 bones meet at hip socket"],
            ["21 years","Ischial tuberosity fuses to ischium",""],
            ["23 years","Iliac crest fuses to ilium","Simultaneous: medial clavicle"]
          ]
        }, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution: The Nile Sack",
        content: { bullets: [
          "Subpubic angle: OBTUSE (>90°), U-shaped → Female pelvis → Abdo excluded",
          "Greater sciatic notch: wide & shallow → confirms female",
          "Sacrum: short and wide → confirms female",
          "Femur head: fully fused → age > 18 years",
          "Lower femur: non-union (open epiphyseal plate) → age < 21y (males) / ~19y (females)",
          "Iliac crest: fully fused → age > 23 years",
          "CONFLICT: Female, appears < 20y based on femur BUT iliac crest fused (>23y)",
          "Females mature ~2y earlier: lower femur closes ~19y in females",
          "Conclusion: Female, approximately 20–25 years old",
          "This is NOT Tafida (35y) — Tafida's knee would be fully fused",
          "VERDICT: Unknown third victim — investigation must be widened"
        ]}, images: [], notes: "" },

      { type: "summary", title: "Episode 3 — Key Points",
        content: { bullets: [
          "Pelvis = most reliable bone for sex determination (~95% accuracy)",
          "Subpubic angle: quickest visual clue (V = Male, U = Female)",
          "Sacrum: 3 segments in male, 2 in female (sacroiliac joint)",
          "Acetabulum Y-suture closes at puberty (15y) — often tested in exams",
          "Females: epiphyseal fusion ~2 years earlier than males",
          "When bones conflict: consider all evidence together, not single feature"
        ]}, images: [], notes: "" },

      { type: "quiz", title: "Review Question",
        content: {
          question: "The pelvis shows: obtuse subpubic angle, wide sciatic notch, iliac crest FULLY fused, femur head fused, lower femur NON-union. Determine: (a) Sex, (b) Approximate age range.",
          answer: "(a) Female — obtuse subpubic angle + wide sciatic notch are female hallmarks. (b) Age approximately 20–25 years: iliac crest fused (>23y), femur head fused (>18y), lower femur open (<21y males / ~19y females — but iliac crest rules lower bound to >23y)."
        }, images: [], notes: "" }
    ]
  },

  /* ─── Episode 4 ─── */
  {
    title: "Sternum & Hyoid: Witnesses to Strangulation",
    description: "Two bones that expose a staged suicide — and reveal manual throttling.",
    slides: [
      { type: "title", title: "Sternum & Hyoid: Silent Witnesses to Strangulation",
        content: { bullets: ["Episode 4 · The Bone Code"] }, images: [], notes: "" },

      { type: "case", title: "Case: The Millionaire's Death",
        content: { bullets: [
          "Wealthy businessman found hanging from ceiling fan in locked bedroom",
          "Door locked from inside with key",
          "Family: 'He was depressed and bankrupt — suicide'",
          "Prosecution: suspicious circumstances",
          "Forensic examination: neck and chest structures examined carefully",
          "Evidence from two bones: Sternum and Hyoid"
        ]}, images: [], notes: "" },

      { type: "table", title: "Sternum — Sex Determination",
        content: { headers: ["Feature","Male","Female"],
          rows: [
            ["Overall dimensions","Long & broad","Short & narrow"],
            ["Body vs Manubrium ratio","Body length > 2× Manubrium length","Body length < 2× Manubrium length"],
            ["Practical test","Measure both — if ratio > 2 = male","Ratio < 2 = female"]
          ]
        }, images: [], notes: "" },

      { type: "table", title: "Sternum — Age Estimation",
        content: { headers: ["Age","Event","Memory Aid"],
          rows: [
            ["40 years","Xiphoid process fuses to sternal body","'Mid-life crisis — sword in the chest' (Xiphoid = sword)"],
            ["60 years","Manubrium fuses to sternal body","'Retirement age — chest locked shut'"]
          ]
        }, images: [], notes: "" },

      { type: "concept", title: "The Hyoid Bone — Anatomy & Age",
        content: { bullets: [
          "Only completely free-floating bone in the body — no joint articulation",
          "Location: anterior neck, below mandible, above thyroid cartilage",
          "Shape: U-shaped horseshoe",
          "Components: Body (central) + 2 Greater cornua + 2 Lesser cornua",
          "Age significance: Greater cornua fuse to body at 40 years",
          "Before 40y: junction is cartilaginous → elastic, absorbs compression → rarely fractures",
          "After 40y: fully ossified → rigid → fractures under neck pressure"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Hyoid Fracture Direction: The Key Evidence",
        content: { bullets: [
          "THROTTLING (Manual strangulation — hands around neck):",
          "  → Fingers compress from OUTSIDE INWARD",
          "  → Fracture direction: INWARDS (medially displaced)",
          "",
          "HANGING (rope traction):",
          "  → Rope pulls UPWARD and OUTWARD under weight",
          "  → Fracture direction: OUTWARDS (if fracture occurs at all)",
          "",
          "Rule: Inward fracture = hands; Outward = rope",
          "This distinction can convert a staged suicide into a murder charge"
        ]}, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution: The Millionaire",
        content: { bullets: [
          "Sternum body > 2× Manubrium → MALE",
          "Xiphoid process fused to body → age > 40 years",
          "Hyoid greater cornua fused to body → age > 40 years",
          "Manubrium NOT fused to body → age < 60 years",
          "Age estimate: 40–60 years",
          "Hyoid fracture direction: INWARD displacement",
          "→ Inward fracture = throttling by hands (manual strangulation)",
          "→ Rope causes outward fracture — this rules out hanging as cause of death",
          "VERDICT: Murder staged as suicide — victim was throttled, then hung post-mortem"
        ]}, images: [], notes: "" },

      { type: "summary", title: "Episode 4 — Key Points",
        content: { bullets: [
          "Sternum sex: ratio of Body to Manubrium (>2 = Male, <2 = Female)",
          "Sternum age: Xiphoid fuses at 40y, Manubrium fuses at 60y",
          "Hyoid is unique: only free-floating bone, U-shaped",
          "Hyoid fuses at 40y → elastic before, rigid after",
          "Critical distinction: Throttling = inward fracture; Hanging = outward fracture",
          "Forensic rule: always document Hyoid status in all neck trauma cases"
        ]}, images: [], notes: "" },

      { type: "quiz", title: "Review Question",
        content: {
          question: "Post-mortem findings: Hyoid bone with fused greater cornua and inward fracture. Sternum: Xiphoid fused to body, Manubrium NOT fused. Sternal body is 2.3× length of Manubrium. Determine: (a) Sex, (b) Age range, (c) Manner of death.",
          answer: "(a) Male (body > 2× manubrium). (b) Age 40–60 years (Xiphoid+Hyoid fused at 40y; Manubrium not yet fused at 60y). (c) Throttling / manual strangulation — inward Hyoid fracture is pathognomonic for hand compression, NOT hanging."
        }, images: [], notes: "" }
    ]
  },

  /* ─── Episode 5 ─── */
  {
    title: "Forensic Odontology: Teeth as Evidence",
    description: "Tooth eruption timelines, bite mark analysis, and two simultaneous forensic questions solved.",
    slides: [
      { type: "title", title: "Forensic Odontology: Teeth Never Lie",
        content: { bullets: ["Episode 5 · The Bone Code"] }, images: [], notes: "" },

      { type: "case", title: "Case: The Train Fire & The Bite Mark",
        content: { bullets: [
          "Catastrophic train fire — entire passenger car engulfed",
          "Completely charred body recovered — no skin, no fingerprints, no soft tissue",
          "Two missing passengers from same car:",
          "  • Ziyad — child, 8 years old",
          "  • Marwan — university student, 19 years old",
          "Simultaneously: surviving victim reports attacker bit her left shoulder before the fire",
          "Suspect 'Antar' has fresh wound on left shoulder — claims it is a dog bite",
          "Forensic dentistry called for two separate questions"
        ]}, images: [], notes: "" },

      { type: "table", title: "Deciduous (Milk) Teeth Eruption",
        content: { headers: ["Age","Tooth Erupted","Notes"],
          rows: [
            ["6 months","Lower Central Incisor","First tooth — 'teething'"],
            ["9 months","Lateral Incisor",""],
            ["12 months (1 year)","First Molar","Birthday cake time!"],
            ["18 months","Canine",""],
            ["24 months (2 years)","Second Molar","Complete set: 20 teeth (5 per quadrant)"]
          ]
        }, images: [], notes: "" },

      { type: "table", title: "Permanent Teeth Eruption",
        content: { headers: ["Age","Tooth","Legal/Forensic Note"],
          rows: [
            ["6 years","1st Permanent Molar","Erupts in free space — no deciduous displaced; 'school tooth'"],
            ["7 years","Central Incisor","Age of legal discernment (Egypt)"],
            ["8 years","Lateral Incisor",""],
            ["9–10 years","1st & 2nd Premolars",""],
            ["11 years","Canine",""],
            ["12 years","2nd Molar",""],
            ["18–25 years","3rd Molar (Wisdom)","Age of consent & criminal responsibility; last tooth to erupt"]
          ]
        }, images: [], notes: "" },

      { type: "concept", title: "Forensic Dental Importance — 3 Areas",
        content: { bullets: [
          "1. PERSONAL IDENTIFICATION:",
          "   Enamel = hardest biological tissue; survives fire, decomposition, acid",
          "   Antemortem dental records (X-rays, charts, fillings) matched to postmortem",
          "   Crowding, missing teeth, fillings, implants = unique pattern",
          "",
          "2. RACE DETERMINATION:",
          "   Negroid: large, strong, ivory-white, well-aligned teeth",
          "   Mongoloid: shovel-shaped concave upper incisors (key hallmark)",
          "",
          "3. CHRONIC METALLIC POISONING (gum line deposits):",
          "   Lead → Blue gum line · Mercury → Grey · Copper → Green · Bismuth → Black"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Bite Mark Analysis",
        content: { bullets: [
          "HUMAN BITE:",
          "   Elliptical / circular ring pattern",
          "   Combination of contusions (bruising) + abrasions (scraping)",
          "   Caused by rotational grinding of upper + lower teeth",
          "",
          "DOG BITE:",
          "   Two parallel diverging lines (snout shape, pointed canines)",
          "",
          "EVIDENCE COLLECTION from bite mark:",
          "   • Saliva swab → DNA profiling (collected immediately)",
          "   • Dental cast (silicon/wax mold) → compare tooth spacing & irregularities",
          "   • Bruise dating: Red → Blue → Brown-green → Yellow (confirms timing)"
        ]}, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution Part 1: Identifying the Charred Body",
        content: { bullets: [
          "Dental examination of charred jaw:",
          "  Premolars (1st & 2nd): PRESENT → age > 10 years",
          "  Canine: ABSENT, deciduous still in place → age < 11 years",
          "  2nd Permanent Molar: NOT erupted → age < 12 years",
          "  3rd Molar (Wisdom): NOT present → age < 18 years",
          "Conclusion: Dental age approximately 10–11 years",
          "Cannot be Marwan (19y) — his wisdom tooth would be erupting",
          "Body is Ziyad (stated age 8y has ~2y developmental variation)",
          "Marwan likely escaped from the train"
        ]}, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution Part 2: The Bite Mark on Antar",
        content: { bullets: [
          "Wound morphology: ELLIPTICAL ring of contusions + abrasions",
          "→ This is a HUMAN bite — not a dog bite (which is two parallel lines)",
          "Overlapped upper central incisor impression visible in cast",
          "Dental cast of victim's teeth: perfect match to wound impression",
          "Saliva swab from wound: DNA matches victim's sample",
          "Timing: bruise color (blue-purple) = < 24 hours old — consistent with incident",
          "VERDICT: Antar is the attacker — human bite proven, dental cast confirmed identity"
        ]}, images: [], notes: "" },

      { type: "summary", title: "Episode 5 — Key Points",
        content: { bullets: [
          "Enamel = most resistant biological tissue; key in mass disasters",
          "Deciduous teeth: 20 total (5/quadrant); erupt 6mo–24mo",
          "Permanent teeth: 32 total (8/quadrant); erupt 6y–18-25y",
          "Molars pattern: 1st at 6y, 2nd at 12y, 3rd (wisdom) at 18-25y — multiply by 6!",
          "Human bite = elliptical; Dog bite = two parallel lines",
          "Bite mark evidence: saliva DNA + dental cast + bruise dating"
        ]}, images: [], notes: "" },

      { type: "quiz", title: "Review Question",
        content: {
          question: "A bite mark shows an elliptical ring of contusions. The suspect claims it is a dog bite. (a) How do you refute this claim? (b) What two additional analyses confirm the attacker's identity?",
          answer: "(a) Dog bite pattern = two parallel diverging lines from pointed canines; human bite = elliptical ring from rotational chewing. The elliptical pattern refutes the dog bite claim. (b) 1. Dental cast: match suspect's dental impressions to bite wound; 2. Saliva swab from wound: DNA profiling to link suspect."
        }, images: [], notes: "" }
    ]
  },

  /* ─── Episode 6 ─── */
  {
    title: "Fingerprints & DNA: The Science of Infallible Identity",
    description: "Dactylography biology, DNA loci, acid damage truth, and the identical-twins dilemma solved.",
    slides: [
      { type: "title", title: "Fingerprints & DNA: The Infallible Witnesses",
        content: { bullets: ["Episode 6 · The Bone Code"] }, images: [], notes: "" },

      { type: "case", title: "Case: The Jewellery Heist & Identical Twins",
        content: { bullets: [
          "Armed robbery of jeweller's villa — safe broken, millions in jewellery stolen",
          "Thief cuts hand on broken glass → leaves blood drops + bloody fingerprint on safe edge",
          "Forensic lab: DNA from blood matches a family of identical twins: Essam & Hussam",
          "Both arrested; Hussam: clean hands, no injuries",
          "Essam: before arrest, submerges fingertips in concentrated sulfuric acid (miya nar)",
          "Defense attorney argues: (1) DNA is inconclusive — identical twins share DNA, (2) Fingerprints destroyed by acid — no comparison possible",
          "Prosecution refers both twins to forensic department"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Fingerprint Biology (Dactylography)",
        content: { bullets: [
          "Formation: epidermal ridges develop at 4th intrauterine month — before birth",
          "Structure: skin ridges (papillary lines) + grooves on volar surface of fingers",
          "Uniqueness: 1 in 64 million probability of two identical fingerprints — even in identical twins",
          "Permanence: unchanged for life until post-mortem decomposition",
          "Court standard: >16 comparison points required for positive ID",
          "Poroscopy: sweat pore size, number, and distribution — adds further comparison points"
        ]}, images: [], notes: "" },

      { type: "table", title: "Fingerprint Pattern Types",
        content: { headers: ["Pattern","Frequency","Description"],
          rows: [
            ["Arches","6%","Bridge/tent shape — least common"],
            ["Ulnar Loops","65%","Most common; opens toward ulna (inner wrist)"],
            ["Radial Loops","3%","Opens toward radius (outer wrist)"],
            ["Whorls","25%","Closed spiral — 1 in 4 people; commonest after loops"],
            ["Composite","1–2%","Mixed pattern"]
          ]
        }, images: [], notes: "" },

      { type: "concept", title: "Acid Damage to Fingerprints",
        content: { bullets: [
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
        ]}, images: [], notes: "" },

      { type: "concept", title: "DNA Profiling — Forensic Method",
        content: { bullets: [
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
        ]}, images: [], notes: "" },

      { type: "concept", title: "Identical Twins: DNA Limitation & Solution",
        content: { bullets: [
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
        ]}, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution: The Twin Heist",
        content: { bullets: [
          "DNA from crime scene blood: matches BOTH twins (identical DNA) → inconclusive for ID",
          "Crime scene fingerprint: Whorl pattern",
          "Hussam fingerprint examination: Ulnar loops → NO match to crime scene → Hussam INNOCENT",
          "Essam fingerprint examination:",
          "  Acid damaged dermis → permanent scar formed",
          "  Scar margins show Whorl ridge remnants",
          "  Scar shape itself = unique identifier",
          "  >16 comparison points confirmed with crime scene print",
          "VERDICT: Essam GUILTY — acid treatment created permanent self-incriminating evidence"
        ]}, images: [], notes: "" },

      { type: "summary", title: "Episode 6 — Key Points",
        content: { bullets: [
          "Fingerprints form at 4th intrauterine month; unique even in identical twins (1:64 million)",
          "Pattern frequency: Loops (68%) > Whorls (25%) > Arches (6%) > Composite (1-2%)",
          "Acid + Epidermis only = fingerprint fully regenerates",
          "Acid + Dermis = permanent scar = new unique identifier = worse outcome for criminal",
          "DNA uses 16 non-coding loci; Amelogenin = sex; mtDNA = maternal lineage",
          "Critical: Identical twins share DNA → fingerprints are the tiebreaker"
        ]}, images: [], notes: "" },

      { type: "quiz", title: "Review Question",
        content: {
          question: "An identical twin suspect burns his fingertips in acid before arrest. His defence argues: (a) DNA from the crime scene is inconclusive, and (b) fingerprints are destroyed. How does forensic science counter both arguments?",
          answer: "(a) DNA limitation acknowledged — identical twins share nuclear DNA. Counter: fingerprints are always different even in identical twins — DNA narrows suspects, fingerprints identify. (b) Acid affecting dermis → permanent scar with Whorl remnants visible at scar margins → new unique identifier with >16 comparison points → fingerprint evidence stands and is stronger than before."
        }, images: [], notes: "" }
    ]
  },

  /* ─── Episode 7 ─── */
  {
    title: "Race Identification from Skeletal Remains",
    description: "Skull shape, nasal features, pterion, and dental markers reveal racial origin from bone alone.",
    slides: [
      { type: "title", title: "Race Identification from Skeletal Remains",
        content: { bullets: ["Episode 7 · The Bone Code"] }, images: [], notes: "" },

      { type: "case", title: "Case: The Desert Excavation",
        content: { bullets: [
          "Land reclamation workers discover a secret burial in Western Desert",
          "Complete but fully skeletonised remains — no soft tissue",
          "15 years ago, a mining expedition in this region disappeared:",
          "  • Klaus — German engineer (Caucasoid)",
          "  • Kim — Chinese geologist (Mongoloid)",
          "  • Kwame — South African mining expert (Negroid)",
          "Question: Which of the three does this skeleton belong to?",
          "Skull and mandible sent to forensic department for racial identification"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Forensic Racial Classification",
        content: { bullets: [
          "Three classical forensic groups (note: a spectrum, not rigid categories):",
          "  1. Caucasoid — European, North African, Middle Eastern",
          "  2. Mongoloid — East Asian, Southeast Asian, Indigenous American",
          "  3. Negroid — Sub-Saharan African",
          "Note: Egyptians measure intermediate between Caucasoid and Negroid",
          "Racial identification from bone uses: skull morphology + dental features",
          "Accuracy: ~85% from skull alone; combined with dentition improves"
        ]}, images: [], notes: "" },

      { type: "table", title: "Skull Racial Characteristics",
        content: { headers: ["Feature","Caucasoid","Mongoloid","Negroid"],
          rows: [
            ["Skull shape","Mesocephalic (medium)","Brachycephalic (round, broad)","Dolichocephalic (long & narrow)"],
            ["Nasal bridge","Narrow & prominent (leptorrhine)","Flat & broad (mesorrhine)","Very flat & wide (platyrrhine)"],
            ["Prognathism","Absent or mild","Absent","Marked (jaws protrude forward)"],
            ["Frontal suture","Closes at ~3 years","Closes at ~3 years","Persists to ~30 years"],
            ["Pterion shape","H-shaped","H-shaped","X-shaped or single point"],
            ["Palate","High arched","High arched","Less arched / flat"],
            ["Mastoid process","Well developed","Medium","Short"]
          ]
        }, images: [], notes: "" },

      { type: "concept", title: "Negroid Skull — 6 Key Features",
        content: { bullets: [
          "1. DOLICHOCEPHALIC — skull long & narrow (front to back)",
          "2. FLAT NASAL BRIDGE — with wide nasal openings (platyrrhine)",
          "3. PROGNATHISM — upper and lower jaws protrude forward + less arched palate",
          "4. SHORT MASTOID PROCESS — behind the ear",
          "5. X-SHAPED PTERION — where 4 skull bones meet at temple; normally H-shaped in other races",
          "6. PERSISTENT FRONTAL SUTURE — Metopic suture remains visible until age 30 (not 3y)"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Racial Dental Characteristics",
        content: { bullets: [
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
        ]}, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution: The Desert Excavation",
        content: { bullets: [
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
        ]}, images: [], notes: "" },

      { type: "summary", title: "Episode 7 — Key Points",
        content: { bullets: [
          "Negroid hallmarks: Dolichocephalic, flat nose (platyrrhine), prognathism, short mastoid, X-pterion, persistent metopic suture to 30y",
          "Mongoloid hallmark: Shovel-shaped upper incisors — most distinctive single dental feature",
          "Caucasoid: H-shaped Pterion, early metopic closure (3y), no prognathism",
          "Egyptians: intermediate measurements between Caucasoid and Negroid",
          "Pterion shape is a quick screening test: H = non-Negroid; X = Negroid",
          "Metallic poisoning gum lines: Lead=Blue, Mercury=Grey, Copper=Green, Bismuth=Black"
        ]}, images: [], notes: "" },

      { type: "quiz", title: "Review Question",
        content: {
          question: "A skull shows: dolichocephalic shape, X-shaped Pterion, persistent frontal suture visible at estimated age 25y, marked prognathism, flat nasal bridge, and large well-aligned ivory-white teeth. (a) Which racial group? (b) Which three features are most diagnostically specific?",
          answer: "(a) Negroid (African) — all 6 key features present. (b) Most specific: X-shaped Pterion (not H-shaped like all other races), Persistent frontal suture to 30y (others close at 3y), Marked prognathism with flat palate. These three alone would be sufficient for diagnosis."
        }, images: [], notes: "" }
    ]
  },

  /* ─── Episode 8 ─── */
  {
    title: "Stature Estimation: Pearson's Formulae",
    description: "From bone length to living height — Pearson's regression equations and a step-by-step calculation.",
    slides: [
      { type: "title", title: "Stature Estimation: Pearson's Formulae",
        content: { bullets: ["Episode 8 · The Bone Code", "Final Episode — Identification Complete"] }, images: [], notes: "" },

      { type: "case", title: "Case: The Dismembered Remains",
        content: { bullets: [
          "Stray dogs uncover a plastic bag in an agricultural drainage canal",
          "Contents: one complete LEFT femur + one complete RIGHT humerus",
          "Fully decomposed — no soft tissue, no identity",
          "These are the only remains found",
          "Two registered missing persons from the area:",
          "  • Engineer Adel — basketball player, documented height: 192 cm",
          "  • Teacher Sobhy — short stature, documented height: 160 cm",
          "Question: Which person do these bones belong to?",
          "Measurements taken: Femur = 40 cm | Humerus = 28.8 cm"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Living Stature Estimation — The Span Rule",
        content: { bullets: [
          "For living persons with spinal deformity or inability to stand:",
          "Arm Span Rule: Height ≈ Arm span (outstretched fingertip to fingertip)",
          "Useful when direct height measurement is impossible",
          "Accuracy: within ~2–3 cm in most adults",
          "Application: elderly patients, kyphosis, scoliosis assessment"
        ]}, images: [], notes: "" },

      { type: "concept", title: "Pearson's Formulae — From Dead Bone to Living Height",
        content: { bullets: [
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
        ]}, images: [], notes: "" },

      { type: "table", title: "Long Bone Height Ratios",
        content: { headers: ["Bone","% of Total Height","Formula","Reliability"],
          rows: [
            ["Femur (thigh)","25%","Length × 4","Most reliable"],
            ["Tibia (shin)","~22%","Length ÷ 0.22","Second"],
            ["Humerus (upper arm)","18%","Length ÷ 0.18","Third"],
            ["Radius/Ulna (forearm)","~15%","Length ÷ 0.15","Least reliable"]
          ]
        }, images: [], notes: "" },

      { type: "resolution", title: "Case Resolution: Calculation — Step by Step",
        content: { calc: [
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
        ]}, images: [], notes: "" },

      { type: "summary", title: "Episode 8 — Key Points & Series Finale",
        content: { bullets: [
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
        ]}, images: [], notes: "" },

      { type: "quiz", title: "Final Review Question",
        content: {
          question: "A femur measures 48 cm. Using Pearson's formula: (a) Calculate the estimated stature. (b) If a second bone (humerus = 34.56 cm) is available, verify the result. (c) Which of two missing persons (192 cm vs 160 cm) does this identify?",
          answer: "(a) Femur: 48 × 4 = 192 cm. (b) Humerus: 34.56 ÷ 0.18 = 192 cm — both confirm 192 cm. (c) Engineer Adel (192 cm) — the basketball player."
        }, images: [], notes: "" }
    ]
  }

]; // end SLIDES_DATA


/* ════════════════════════════════════
   STATE
   ════════════════════════════════════ */
const state = {
  view: 'home',       // 'home' | 'episode' | 'favorites'
  epIdx: 0,
  slideIdx: 0,
  overviewMode: false,
  presMode: false,
  addSlideAfter: null, // null = end, number = after index
};

/* Episode data with localStorage overlay */
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
}

/* Images */
function getSlideImages(epIdx, slideIdx) {
  const imgs = [];
  let i = 0;
  while (true) {
    const v = localStorage.getItem(`medduo_img_${epIdx}_${slideIdx}_${i}`);
    if (v === null) break;
    imgs.push(v);
    i++;
  }
  return imgs;
}
function saveSlideImage(epIdx, slideIdx, imgIdx, base64) {
  localStorage.setItem(`medduo_img_${epIdx}_${slideIdx}_${imgIdx}`, base64);
}
function deleteSlideImage(epIdx, slideIdx, imgIdx) {
  // Remove and compact
  const imgs = getSlideImages(epIdx, slideIdx);
  imgs.splice(imgIdx, 1);
  // Clear all keys for this slide
  let i = 0;
  while (localStorage.getItem(`medduo_img_${epIdx}_${slideIdx}_${i}`) !== null) {
    localStorage.removeItem(`medduo_img_${epIdx}_${slideIdx}_${i}`);
    i++;
  }
  // Re-save
  imgs.forEach((b, idx) => localStorage.setItem(`medduo_img_${epIdx}_${slideIdx}_${idx}`, b));
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
    } else if (content.rows) {
      // has table
      body.appendChild(buildTable(content));
      if (content.extra_bullets && content.extra_bullets.length) {
        body.appendChild(buildBullets(content.extra_bullets));
      }
    } else if (content.bullets) {
      body.appendChild(buildBullets(content.bullets));
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
        <span>📷 Add Media (Image, GIF, Video)</span>
        <label>➕ Upload<input type="file" accept="image/*,video/mp4,video/webm" multiple style="display:none" /></label>
      `;
      empty.querySelector('input[type=file]').addEventListener('change', (e) => handleImgUpload(e, slideIdx, () => renderSlide()));
      zone.appendChild(empty);
    } else {
      // Top bar with Layout options and Add More
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

      const addLabel = document.createElement('div');
      addLabel.className = 'img-add-btn-bar';
      addLabel.innerHTML = `<label>➕ Add More<input type="file" accept="image/*,video/mp4,video/webm" multiple style="display:none" /></label>`;
      addLabel.querySelector('input[type=file]').addEventListener('change', (e) => handleImgUpload(e, slideIdx, () => renderSlide()));
      topBar.appendChild(addLabel);

      zone.appendChild(topBar);

      // Grid of images / videos / gifs
      const grid = document.createElement('div');
      grid.className = 'image-flex-grid';
      imgs.forEach((b64, imgIdx) => {
        const wrap = document.createElement('div');
        wrap.className = 'slide-img-wrap';
        
        let mediaEl;
        if (b64.startsWith('data:video/')) {
          mediaEl = document.createElement('video');
          mediaEl.src = b64;
          mediaEl.controls = true;
          mediaEl.autoplay = true;
          mediaEl.loop = true;
          mediaEl.muted = true;
          mediaEl.playsInline = true;
          mediaEl.className = 'slide-media-item';
        } else {
          mediaEl = document.createElement('img');
          mediaEl.src = b64;
          mediaEl.alt = `Media ${imgIdx+1}`;
          mediaEl.className = 'slide-media-item';
        }

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
    // title type or unknown
    addEditActions(body, () => {
      slide.title = titleInput.value;
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
        else if (content.rows) body.appendChild(buildTable(content));
        else if (content.bullets) body.appendChild(buildBullets(content.bullets));
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
    } else if (content.rows) {
      innerHTML += buildTableHTML(content);
      if (content.extra_bullets) innerHTML += content.extra_bullets.map(b => `<p style="margin:6px 0">${b}</p>`).join('');
    } else if (content.bullets) {
      innerHTML += '<ul style="list-style:none;padding:0">' +
        (content.bullets||[]).filter(b => b).map(b =>
          `<li style="margin:6px 0;padding-left:${b.match(/^\s+/)?'28px':'0'}">${b.trim()}</li>`
        ).join('') + '</ul>';
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
function exportEpisodePPT() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);

  if (typeof PptxGenJS !== 'undefined') {
    showToast('⏳ Generating genuine PowerPoint (.pptx)...');
    try {
      const pptx = new PptxGenJS();
      pptx.layout = 'LAYOUT_16x9'; // 13.33 x 7.5 inches
      pptx.author = 'MedDuo';
      pptx.company = 'MedDuo Forensic Medicine';
      pptx.title = `Episode ${state.epIdx+1}: ${ep.title}`;

      slides.forEach((slide, i) => {
        const s = pptx.addSlide();

        // 1. Brand Chip & Title Banner
        s.addText(`MedDuo · The Bone Code · Episode ${state.epIdx+1}`, {
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

        // Determine if slide has images to allocate layout
        const hasImages = slide.images && slide.images.length > 0;
        const totalW = hasImages ? 7.2 : 11.7;
        const contentStartY = 1.55;

        // Render Image on the right if available
        if (hasImages && slide.images[0].data) {
          try {
            s.addImage({
              data: slide.images[0].data,
              x: 8.3, y: 1.55, w: 4.2, h: 4.8,
              sizing: { type: 'contain', w: 4.2, h: 4.8 }
            });
          } catch(imgErr) {
            console.warn('Could not add image to PPTX', imgErr);
          }
        }

        const content = slide.content || {};

        // Title slide
        if (slide.type === 'title') {
          s.addText(slide.title, {
            x: 1.0, y: 2.2, w: 11.3, h: 1.4,
            fontSize: 28, bold: true, color: '0284C7', align: 'center', fontFace: 'Calibri'
          });
          if (content.bullets && content.bullets.length) {
            s.addText(content.bullets.join('\n'), {
              x: 1.0, y: 3.8, w: 11.3, h: 1.6,
              fontSize: 15, color: '475569', align: 'center', fontFace: 'Calibri',
              lineSpacing: 22
            });
          }
        }
        // Table slide
        else if (content.rows) {
          const colCount = content.headers.length;
          let colWidths = [];
          if (colCount === 2) {
            colWidths = [totalW * 0.35, totalW * 0.65];
          } else if (colCount === 3) {
            colWidths = [totalW * 0.22, totalW * 0.35, totalW * 0.43];
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

          // Extra bullets below table if present
          if (content.extra_bullets && content.extra_bullets.length) {
            const approxTableH = (content.rows.length + 1) * (isCompact ? 0.32 : 0.42);
            const extraY = Math.min(5.6, contentStartY + approxTableH + 0.15);
            const extraH = Math.max(0.8, 6.8 - extraY);

            const extraItems = content.extra_bullets.map((b, bi) => ({
              text: b.replace(/^[\s•\-\*]+/, '').trim(),
              options: {
                bullet: true,
                breakLine: bi < content.extra_bullets.length - 1,
                fontSize: 10.5,
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
        // Quiz / Question slide
        else if (content.question) {
          const qH = Math.min(2.0, Math.max(1.1, (content.question.length / 50) * 0.35));
          s.addText(`QUESTION:\n${content.question}`, {
            x: 0.8, y: contentStartY, w: totalW, h: qH,
            fontSize: 13.5, bold: true, color: '92400E', fill: 'FEF3C7',
            margin: 10, fontFace: 'Calibri', valign: 'top'
          });

          const aY = contentStartY + qH + 0.25;
          const aH = Math.min(3.2, Math.max(1.2, 6.8 - aY));
          s.addText(`ANSWER:\n${content.answer}`, {
            x: 0.8, y: aY, w: totalW, h: aH,
            fontSize: 13, color: '166534', fill: 'DCFCE7',
            margin: 10, fontFace: 'Calibri', valign: 'top'
          });
        }
        // Calculation slide
        else if (content.calc) {
          const calcLines = content.calc.length;
          const calcFontSize = calcLines > 8 ? 10.5 : 12;
          s.addText(content.calc.join('\n'), {
            x: 0.8, y: contentStartY, w: totalW, h: Math.min(5.1, calcLines * 0.32 + 0.5),
            fontSize: calcFontSize, fontFace: 'Courier New', color: '38BDF8', fill: '0F172A',
            margin: 10, valign: 'top'
          });
        }
        // Bullet points slide
        else if (content.bullets && content.bullets.length) {
          const count = content.bullets.length;
          let fSize = 13.5;
          let lSpace = 20;
          if (count >= 10) { fSize = 10.5; lSpace = 15; }
          else if (count >= 7) { fSize = 12; lSpace = 18; }

          const textItems = content.bullets.map((b, bi) => {
            const isSub = b.startsWith('  ') || b.startsWith('\t') || b.match(/^\s+•/);
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

        // Add Notes to PowerPoint Presenter Notes Pane (Clean & Official!)
        if (slide.notes && slide.notes.trim()) {
          s.addNotes(slide.notes.trim());
        }
      });

      pptx.writeFile({ fileName: `medduo-ep${state.epIdx+1}-presentation.pptx` })
        .then(() => showToast('✓ Genuine PowerPoint (.pptx) downloaded!'))
        .catch(err => {
          console.error(err);
          alert('Error generating PPTX: ' + err.message);
        });
      return;
    } catch(err) {
      console.warn('PptxGenJS error, using HTML export fallback', err);
    }
  }

  exportEpisodeHTML();
}


/* ════════════════════════════════════
   DOWNLOAD PDF (ONE-CLICK AUTOMATIC)
   Full-Bleed A4 Landscape, 100% Page Fill, Zero Empty Notes
   ════════════════════════════════════ */
function downloadEpisodePDF() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);

  if (typeof html2pdf !== 'undefined') {
    showToast('⏳ Generating presentation PDF...');

    // 1120px width x 792px height = Exact A4 Landscape aspect ratio (1.414)
    const tempContainer = document.createElement('div');
    tempContainer.style.background = '#0F172A';
    tempContainer.style.padding = '0';
    tempContainer.style.margin = '0';
    tempContainer.style.fontFamily = 'Inter, Arial, sans-serif';
    tempContainer.style.width = '1120px';

    slides.forEach((slide, idx) => {
      // Each slide is an exact full-bleed presentation sheet
      const pageSheet = document.createElement('div');
      pageSheet.className = 'pdf-slide-sheet';
      pageSheet.style.width = '1120px';
      pageSheet.style.height = '792px';
      pageSheet.style.maxHeight = '792px';
      pageSheet.style.boxSizing = 'border-box';
      pageSheet.style.background = '#FFFFFF';
      pageSheet.style.padding = '36px 44px';
      pageSheet.style.margin = '0';
      pageSheet.style.display = 'flex';
      pageSheet.style.flexDirection = 'column';
      pageSheet.style.justifyContent = 'flex-start';
      pageSheet.style.pageBreakAfter = 'always';
      pageSheet.style.pageBreakInside = 'avoid';
      pageSheet.style.overflow = 'hidden';
      pageSheet.style.position = 'relative';

      // Build slide visual card
      const card = buildSlideCard(slide, idx, slides);

      // Permanently remove all editing controls and empty notes areas
      card.querySelectorAll('.slide-header-right, .slide-notes-area, .slide-img-del, .img-add-btn-bar, .image-zone-empty, .img-layout-bar').forEach(el => el.remove());

      // If user actually wrote custom notes, append a sleek footnote
      if (slide.notes && slide.notes.trim()) {
        const noteDiv = document.createElement('div');
        noteDiv.style.marginTop = 'auto';
        noteDiv.style.paddingTop = '8px';
        noteDiv.style.borderTop = '1px dashed #CBD5E1';
        noteDiv.style.fontSize = '11px';
        noteDiv.style.color = '#64748B';
        noteDiv.innerHTML = `📝 <strong>Presenter Note:</strong> ${escHtml(slide.notes.trim())}`;
        card.appendChild(noteDiv);
      }

      pageSheet.appendChild(card);
      tempContainer.appendChild(pageSheet);
    });

    document.body.appendChild(tempContainer);

    const opt = {
      margin: 0,
      filename: `medduo-ep${state.epIdx+1}-presentation.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        width: 1120,
        windowWidth: 1120
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(tempContainer).save().then(() => {
      tempContainer.remove();
      showToast('✓ Presentation PDF downloaded successfully!');
    }).catch(err => {
      tempContainer.remove();
      console.error(err);
      printEpisode();
    });
  } else {
    printEpisode();
  }
}


/* ════════════════════════════════════
   PRINT / PDF (ALL SLIDES)
   ════════════════════════════════════ */
function printEpisode() {
  const slides = getEpSlides(state.epIdx);
  const existing = document.getElementById('medduo-print-area');
  if (existing) existing.remove();

  const printArea = document.createElement('div');
  printArea.id = 'medduo-print-area';

  slides.forEach((slide, idx) => {
    const card = document.createElement('div');
    card.className = 'slide-card print-slide-card';
    card.appendChild(buildSlideCard(slide, idx, slides));
    
    // Remove edit controls and empty notes
    card.querySelectorAll('.slide-header-right, .slide-notes-area, .slide-img-del, .img-add-btn-bar, .image-zone-empty, .img-layout-bar').forEach(el => el.remove());

    if (slide.notes && slide.notes.trim()) {
      const noteDiv = document.createElement('div');
      noteDiv.style.marginTop = 'auto';
      noteDiv.style.paddingTop = '8px';
      noteDiv.style.borderTop = '1px dashed #CBD5E1';
      noteDiv.style.fontSize = '11px';
      noteDiv.style.color = '#64748B';
      noteDiv.innerHTML = `📝 <strong>Presenter Note:</strong> ${escHtml(slide.notes.trim())}`;
      card.appendChild(noteDiv);
    }

    printArea.appendChild(card);
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
  document.getElementById('btn-export-html').addEventListener('click', exportEpisodeHTML);
  document.getElementById('btn-export-ppt').addEventListener('click', exportEpisodePPT);
  document.getElementById('btn-download-pdf').addEventListener('click', downloadEpisodePDF);
  document.getElementById('btn-print').addEventListener('click', printEpisode);
  document.getElementById('btn-reset-ep').addEventListener('click', () => {
    if (!confirm('Reset all edits for this episode? This cannot be undone.')) return;
    localStorage.removeItem(`medduo_slides_edits_${state.epIdx}`);
    state.slideIdx = 0;
    renderEpisodeToolbar();
    renderSlide();
    showToast('Episode reset to original.');
  });

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
