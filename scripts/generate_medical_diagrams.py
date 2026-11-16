import os
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

out_dir = 'images'
os.makedirs(out_dir, exist_ok=True)

plt.rcParams['font.family'] = 'DejaVu Sans'

# ─── 1. Pelvis: Male vs Female (Episode 3) ───
fig, ax = plt.subplots(figsize=(10, 6), dpi=150)
fig.patch.set_facecolor('#0F172A')
ax.set_facecolor('#1E293B')

ax.set_xlim(0, 10)
ax.set_ylim(0, 6)
ax.axis('off')

# Title
ax.text(5, 5.5, 'FORENSIC PELVIC DIMORPHISM (95% ACCURACY)', color='#38BDF8', fontsize=14, weight='bold', ha='center')
ax.text(5, 5.1, 'The 6 Golden Diagnostic Keys: Functional Adaptation for Birth Canal', color='#94A3B8', fontsize=10, ha='center')

# Male Box
rect_m = patches.FancyBboxPatch((0.5, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#475569", fc="#0F172A")
ax.add_patch(rect_m)
ax.text(2.6, 4.4, '♂ MALE PELVIS', color='#60A5FA', fontsize=12, weight='bold', ha='center')
ax.text(2.6, 4.0, 'Heavy, Narrow & Deep (Locomotion)', color='#94A3B8', fontsize=9, ha='center', style='italic')

m_points = [
    '• Subpubic Angle: Acute (60° - 70°) "V-Sign"',
    '• Greater Sciatic Notch: Narrow & Deep (< 30°)',
    '• Pelvic Inlet: Heart-shaped (Promontory encroaches)',
    '• Sacrum: Long, Narrow, Relatively Flat',
    '• Acetabulum: Large & Deep (Heavier weight)',
    '• Pelvic Cavity: Funnel-shaped, Conical'
]
for i, pt in enumerate(m_points):
    ax.text(0.8, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

# Female Box
rect_f = patches.FancyBboxPatch((5.3, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#06B6D4", fc="#0F172A")
ax.add_patch(rect_f)
ax.text(7.4, 4.4, '♀ FEMALE PELVIS', color='#2DD4BF', fontsize=12, weight='bold', ha='center')
ax.text(7.4, 4.0, 'Wide, Shallow & Cylindrical (Birth Canal)', color='#94A3B8', fontsize=9, ha='center', style='italic')

f_points = [
    '• Subpubic Angle: Obtuse (90° - 100°) "L-Shape"',
    '• Greater Sciatic Notch: Wide & Shallow (> 60°)',
    '• Pelvic Inlet: Round to Broad Oval (Spacious)',
    '• Sacrum: Short, Broad, Curved Backwards',
    '• Acetabulum: Small & Shallow (Adaptable)',
    '• Pelvic Cavity: Wide Cylindrical Basin'
]
for i, pt in enumerate(f_points):
    ax.text(5.6, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'pelvis_male_vs_female.jpg'), facecolor=fig.get_facecolor(), bbox_inches='tight')
plt.close()
print('Generated pelvis_male_vs_female.jpg')

# ─── 2. Hyoid & Strangulation Biomechanics (Episode 4) ───
fig, ax = plt.subplots(figsize=(10, 6), dpi=150)
fig.patch.set_facecolor('#0F172A')
ax.set_facecolor('#1E293B')
ax.set_xlim(0, 10)
ax.set_ylim(0, 6)
ax.axis('off')

ax.text(5, 5.5, 'HYOID BONE FRACTURE: THROTTLING vs HANGING', color='#F43F5E', fontsize=14, weight='bold', ha='center')
ax.text(5, 5.1, 'Direction of Fracture Displacement & Vital Reactions', color='#94A3B8', fontsize=10, ha='center')

# Throttling Box
rect_th = patches.FancyBboxPatch((0.5, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#E11D48", fc="#0F172A")
ax.add_patch(rect_th)
ax.text(2.6, 4.4, '🖐️ MANUAL STRANGULATION (Throttling)', color='#FB7185', fontsize=11, weight='bold', ha='center')
ax.text(2.6, 4.0, 'Homicidal Compression by Fingers', color='#FDA4AF', fontsize=9, ha='center', style='italic')

th_points = [
    '• Mechanism: Fingers squeeze sides inward',
    '• Greater Cornu: Splayed & Snaps OUTWARD',
    '• Fracture Type: Outward-displaced fracture',
    '• Vital Reaction: Massive deep muscle hematoma',
    '• Skin Signs: Crescentic fingernail abrasions',
    '• Rule: Age > 40y (Brittle ossified bone)'
]
for i, pt in enumerate(th_points):
    ax.text(0.8, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

# Hanging Box
rect_hg = patches.FancyBboxPatch((5.3, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#38BDF8", fc="#0F172A")
ax.add_patch(rect_hg)
ax.text(7.4, 4.4, '🪢 LIGATURE HANGING', color='#38BDF8', fontsize=11, weight='bold', ha='center')
ax.text(7.4, 4.0, 'Suspension Traction by Ligature', color='#7DD3FC', fontsize=9, ha='center', style='italic')

hg_points = [
    '• Mechanism: Noose pulls upward and inward',
    '• Greater Cornu: Rare fracture (15-20%)',
    '• Fracture Type: Displaced INWARD (if any)',
    '• Vital Reaction: Minimal or absent in post-mortem',
    '• Skin Signs: Oblique ligature furrow (inverted V)',
    '• Post-mortem staging: Furrow has NO vital bleed'
]
for i, pt in enumerate(hg_points):
    ax.text(5.6, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'hyoid_fracture_biomechanics.jpg'), facecolor=fig.get_facecolor(), bbox_inches='tight')
plt.close()
print('Generated hyoid_fracture_biomechanics.jpg')

# ─── 3. Bite Mark Analysis: Human vs Dog (Episode 5) ───
fig, ax = plt.subplots(figsize=(10, 6), dpi=150)
fig.patch.set_facecolor('#0F172A')
ax.set_facecolor('#1E293B')
ax.set_xlim(0, 10)
ax.set_ylim(0, 6)
ax.axis('off')

ax.text(5, 5.5, 'FORENSIC BITE MARK ANALYSIS: HUMAN vs ANIMAL', color='#F59E0B', fontsize=14, weight='bold', ha='center')
ax.text(5, 5.1, 'Morphological Pattern & Evidence Protocol', color='#94A3B8', fontsize=10, ha='center')

# Human Bite
rect_hb = patches.FancyBboxPatch((0.5, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#D97706", fc="#0F172A")
ax.add_patch(rect_hb)
ax.text(2.6, 4.4, '👤 HUMAN BITE MARK', color='#FBBF24', fontsize=11, weight='bold', ha='center')
ax.text(2.6, 4.0, 'Opposing U-shaped Dental Arcs', color='#FDE68A', fontsize=9, ha='center', style='italic')

hb_points = [
    '• Pattern: Elliptical or Circular Ring',
    '• Center: Intact pale skin / suck mark (ecchymosis)',
    '• Lesion Type: Paired curved rows of contusions',
    '• Distinctives: Missing, rotated or crooked teeth',
    '• Saliva: High yield for STR-DNA profiling',
    '• Age of Mark: Color sequence (Red ➔ Blue ➔ Yellow)'
]
for i, pt in enumerate(hb_points):
    ax.text(0.8, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

# Dog Bite
rect_db = patches.FancyBboxPatch((5.3, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#10B981", fc="#0F172A")
ax.add_patch(rect_db)
ax.text(7.4, 4.4, '🐕 DOG / CANINE BITE MARK', color='#34D399', fontsize=11, weight='bold', ha='center')
ax.text(7.4, 4.0, 'Elongated Snout with Puncturing Canines', color='#A7F3D0', fontsize=9, ha='center', style='italic')

db_points = [
    '• Pattern: Two Parallel Lines of puncture holes',
    '• Snout Profile: Triangular narrow jaw arc',
    '• Lesion Type: Deep puncture lacerations & tearing',
    '• Tissue Damage: Severe soft-tissue avulsion',
    '• Bacterial Risk: Pasteurella multocida infection',
    '• Forensic Fact: Cannot be confused with human ring'
]
for i, pt in enumerate(db_points):
    ax.text(5.6, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'bite_mark_forensics.jpg'), facecolor=fig.get_facecolor(), bbox_inches='tight')
plt.close()
print('Generated bite_mark_forensics.jpg')

# ─── 4. Fingerprints & DNA (Episode 6) ───
fig, ax = plt.subplots(figsize=(10, 6), dpi=150)
fig.patch.set_facecolor('#0F172A')
ax.set_facecolor('#1E293B')
ax.set_xlim(0, 10)
ax.set_ylim(0, 6)
ax.axis('off')

ax.text(5, 5.5, 'DACTYLOGRAPHY: GALTON PATTERNS & DNA PROFILE', color='#A855F7', fontsize=14, weight='bold', ha='center')
ax.text(5, 5.1, 'Infallible Identification & The Identical Twin Rule', color='#94A3B8', fontsize=10, ha='center')

# Patterns Box
rect_fp = patches.FancyBboxPatch((0.5, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#9333EA", fc="#0F172A")
ax.add_patch(rect_fp)
ax.text(2.6, 4.4, '👆 FINGERPRINT PATTERNS (Galton)', color='#C084FC', fontsize=11, weight='bold', ha='center')
ax.text(2.6, 4.0, 'Dermal Papillae Uniqueness (1 in 64 Billion)', color='#E9D5FF', fontsize=9, ha='center', style='italic')

fp_points = [
    '• Loop (60-65%): Ridges enter, loop & exit; 1 Delta',
    '• Whorl (30-35%): Circular / Spiral ridges; 2 Deltas',
    '• Arch (5%): Wave / Tented tent structure; 0 Delta',
    '• Minutiae: Ridge endings, bifurcations, dots',
    '• Acid Attack: Regrows if dermal papillae intact!',
    '• Identical Twins: DIFFERENT fingerprints (uterine path)'
]
for i, pt in enumerate(fp_points):
    ax.text(0.8, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

# DNA Box
rect_dna = patches.FancyBboxPatch((5.3, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#38BDF8", fc="#0F172A")
ax.add_patch(rect_dna)
ax.text(7.4, 4.4, '🧬 STR-DNA PROFILING', color='#38BDF8', fontsize=11, weight='bold', ha='center')
ax.text(7.4, 4.0, '16 to 24 Core Forensic Loci (CODIS)', color='#BAE6FD', fontsize=9, ha='center', style='italic')

dna_points = [
    '• Target: Short Tandem Repeats (STR) loci',
    '• Random Match Prob.: 1 in 1 Quintillion',
    '• Amelogenin Gene: Sex determination (X, Y)',
    '• Biological Sources: Blood, semen, saliva, bone',
    '• Crucial Exception: Identical Twins share 100% DNA!',
    '• Solution: Fingerprint solves what DNA cannot'
]
for i, pt in enumerate(dna_points):
    ax.text(5.6, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'fingerprint_patterns_dna.jpg'), facecolor=fig.get_facecolor(), bbox_inches='tight')
plt.close()
print('Generated fingerprint_patterns_dna.jpg')

# ─── 5. Race Identification (Episode 7) ───
fig, ax = plt.subplots(figsize=(10, 6), dpi=150)
fig.patch.set_facecolor('#0F172A')
ax.set_facecolor('#1E293B')
ax.set_xlim(0, 10)
ax.set_ylim(0, 6)
ax.axis('off')

ax.text(5, 5.5, 'FORENSIC CRANIOMETRY: RACE IDENTIFICATION', color='#38BDF8', fontsize=14, weight='bold', ha='center')
ax.text(5, 5.1, 'The 3 Main Skeletal Racial Classifications (> 85% Accuracy)', color='#94A3B8', fontsize=10, ha='center')

# 3 columns
cols = [
    ('CAUCASOID (قوقازي)', '#38BDF8', 0.5, [
        '• Orbits: Sloping / Triangular',
        '• Nasal Aperture: Narrow (Leptorrhine)',
        '• Nasal Bridge: High & Prominent',
        '• Face Profile: Flat (Orthognathic)',
        '• Palate: Narrow & Triangular',
        '• Incisors: Smooth lingual surface'
    ]),
    ('NEGROID (زنجي)', '#F59E0B', 3.65, [
        '• Orbits: Square / Rectangular',
        '• Nasal Aperture: Wide (Platyrrhine)',
        '• Nasal Bridge: Flat & Low',
        '• Face Profile: Prognathic (Protruding)',
        '• Palate: Broad & U-shaped',
        '• Limbs: High Crural index (Long legs)'
    ]),
    ('MONGOLOID (مغولي)', '#10B981', 6.8, [
        '• Orbits: Circular & Wide',
        '• Nasal Aperture: Medium (Mesorrhine)',
        '• Nasal Bridge: Low to Concave',
        '• Cheekbones: Flared & Prominent zygoma',
        '• Palate: Horseshoe-shaped',
        '• Hallmark: Shovel-shaped Incisors (90%)'
    ])
]

for title, color, x_pos, pts in cols:
    box = patches.FancyBboxPatch((x_pos, 0.6), 2.85, 4.2, boxstyle="round,pad=0.15", ec=color, fc="#0F172A")
    ax.add_patch(box)
    ax.text(x_pos + 1.42, 4.4, title, color=color, fontsize=10, weight='bold', ha='center')
    for i, pt in enumerate(pts):
        ax.text(x_pos + 0.15, 3.8 - i * 0.55, pt, color='#F1F5F9', fontsize=8.5)

plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'cranial_race_identification.jpg'), facecolor=fig.get_facecolor(), bbox_inches='tight')
plt.close()
print('Generated cranial_race_identification.jpg')

# ─── 6. Stature & Pearson Formulae (Episode 8) ───
fig, ax = plt.subplots(figsize=(10, 6), dpi=150)
fig.patch.set_facecolor('#0F172A')
ax.set_facecolor('#1E293B')
ax.set_xlim(0, 10)
ax.set_ylim(0, 6)
ax.axis('off')

ax.text(5, 5.5, "STATURE ESTIMATION: PEARSON'S REGRESSION FORMULAE", color='#10B981', fontsize=14, weight='bold', ha='center')
ax.text(5, 5.1, 'Calculating Living Height from Dry Long Bones (± 3 cm Accuracy)', color='#94A3B8', fontsize=10, ha='center')

# Left Box: Quick Rules
rect_q = patches.FancyBboxPatch((0.5, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#059669", fc="#0F172A")
ax.add_patch(rect_q)
ax.text(2.6, 4.4, '📏 QUICK ANTHROPOMETRIC RULES', color='#34D399', fontsize=11, weight='bold', ha='center')
ax.text(2.6, 4.0, 'Living & Skeletal Proportions', color='#A7F3D0', fontsize=9, ha='center', style='italic')

q_points = [
    '• Arm Span: Finger tip to finger tip = 100% Stature',
    '• Femur Length: Represents ~27% of total stature',
    '• Tibia Length: Represents ~22% of total stature',
    '• Humerus Length: Represents ~20% of total stature',
    '• Symmetrical: Bilateral bones equal within 2-3 mm',
    '• Instrument: Measured on Osteometric Board (mm)'
]
for i, pt in enumerate(q_points):
    ax.text(0.8, 3.5 - i * 0.5, pt, color='#F1F5F9', fontsize=9.5)

# Right Box: Pearson's Formulae
rect_p = patches.FancyBboxPatch((5.3, 0.6), 4.2, 4.2, boxstyle="round,pad=0.2", ec="#38BDF8", fc="#0F172A")
ax.add_patch(rect_p)
ax.text(7.4, 4.4, "📐 PEARSON'S REGRESSION (MALE)", color='#38BDF8', fontsize=11, weight='bold', ha='center')
ax.text(7.4, 4.0, 'Mathematical Certainty for Courts', color='#BAE6FD', fontsize=9, ha='center', style='italic')

p_points = [
    '• Femur Alone (Male):',
    '   Stature = 81.306 + (1.880 × Femur) ± 3.5 cm',
    '• Tibia Alone (Male):',
    '   Stature = 70.641 + (2.392 × Tibia) ± 3.5 cm',
    '• Femur + Tibia Combined (Gold Standard):',
    '   Stature = 71.272 + (1.159 × Femur) + (1.126 × Tibia)',
    '• Case Example: Femur 46.5 cm ➔ 168.7 cm living height'
]
for i, pt in enumerate(p_points):
    ax.text(5.6, 3.5 - i * 0.55, pt, color='#F1F5F9', fontsize=9.2)

plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'osteometric_board_stature.jpg'), facecolor=fig.get_facecolor(), bbox_inches='tight')
plt.close()
print('Generated osteometric_board_stature.jpg')

print('All medical diagrams generated successfully!')
