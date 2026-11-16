import os
from PIL import Image

content_dir = 'images/Content'
out_dir = 'images'
os.makedirs(out_dir, exist_ok=True)

# 1. Map of direct high-quality lecture note photos (need slight contrast/edge polish or direct copy)
lecture_photos = {
    'dr_shereen_framework.jpg': 'photo_2026-11-16_10-12-24.jpg',
    'ossification_centers_diagram.jpg': 'photo_2026-11-16_10-11-35.jpg',
    'upper_limb_epiphysis_diagram.jpg': 'photo_2026-11-16_10-09-54.jpg',
    'lower_limb_epiphysis_diagram.jpg': 'photo_2026-11-16_10-13-30.jpg',
    'pelvis_age_female_rule.jpg': 'photo_2026-11-16_10-15-01.jpg',
    'skull_sutures_diagram.jpg': 'photo_2026-11-16_10-10-26.jpg',
    'mandible_age_diagram.jpg': 'photo_2026-11-16_10-12-47.jpg',
    'teeth_and_hyoid_sternum.jpg': 'photo_2026-11-16_10-14-18.jpg',
    'wrist_xray_growth_plate.jpg': 'photo_2026-11-16_10-29-30.jpg',
    'knee_xray_growth_plate.jpg': 'photo_2026-11-16_10-30-53.jpg',
    'medullary_cavity_structure.jpg': 'photo_2026-11-16_10-36-38.jpg',
    'femur_physis_diagram.jpg': 'photo_2026-11-16_10-35-08.jpg'
}

for out_name, src_name in lecture_photos.items():
    src_path = os.path.join(content_dir, src_name)
    if os.path.exists(src_path):
        img = Image.open(src_path)
        # Save high quality copy
        out_path = os.path.join(out_dir, out_name)
        img.save(out_path, quality=95)
        print(f'Saved polished: {out_name} ({img.size})')

# 2. Crop screenshots that have phone status bar / search bar / navigation bar
# photo_2026-11-16_10-27-30 (2).jpg is size (576, 1280)
# Top bone diagram is around y: 220 to 450
p_long_bone = os.path.join(content_dir, 'photo_2026-11-16_10-27-30 (2).jpg')
if os.path.exists(p_long_bone):
    img = Image.open(p_long_bone)
    # Crop the bone diagram (x: 0 to 576, y: 190 to 440)
    w, h = img.size
    crop_bone = img.crop((0, int(h * 0.16), w, int(h * 0.40)))
    crop_bone.save(os.path.join(out_dir, 'long_bone_anatomy_diagram.jpg'), quality=95)
    print('Cropped long_bone_anatomy_diagram.jpg')

# photo_2026-11-16_10-27-31.jpg is size (576, 1280)
# Epiphyseal line femur head diagram is in the middle
p_femur_head = os.path.join(content_dir, 'photo_2026-11-16_10-27-31.jpg')
if os.path.exists(p_femur_head):
    img = Image.open(p_femur_head)
    w, h = img.size
    crop_femur = img.crop((int(w * 0.1), int(h * 0.18), int(w * 0.9), int(h * 0.65)))
    crop_femur.save(os.path.join(out_dir, 'femur_head_epiphyseal_line.jpg'), quality=95)
    print('Cropped femur_head_epiphyseal_line.jpg')

print('All Content images polished successfully!')
