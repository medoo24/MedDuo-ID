const fs = require('fs');
const path = require('path');

const slidesData = require('./slides_data.js');

// Helper to attach image to a slide
function setImage(epIdx, slideIdx, url, caption) {
  const slide = slidesData[epIdx].slides[slideIdx];
  if (!slide) {
    console.warn(`Slide not found: ep ${epIdx+1}, slide ${slideIdx+1}`);
    return;
  }
  slide.images = [{ url, caption }];
}

function addImage(epIdx, slideIdx, url, caption) {
  const slide = slidesData[epIdx].slides[slideIdx];
  if (!slide) return;
  slide.images.push({ url, caption });
}

// ─── EPISODE 1 ───
// Slide 2: Case El-Prince
setImage(0, 1, 'images/el_prince_illustration.jpg', 'المتهم "البرنس": بشنب ودقن وبنطلون مسقط في الكلبشات يدعي أنه حدث 15 سنة و9 شهور!');
// Slide 3: Dr. Shereen Framework
setImage(0, 2, 'images/dr_shereen_framework.jpg', 'طريقة د. شيرين: الأشكال الهندسية الـ 4 لتقدير السن (دايرة صغيرة، دايرة كبيرة، خط بالطول، خط بالعرض)');
// Slide 4: Intrauterine & Infancy Centers
setImage(0, 3, 'images/ossification_centers_diagram.jpg', 'مخطط مراكز التعظم: داخل الرحم "قطرة" (الكعب 5، تالوس 7، فخذ 8، ركبة 9 وكيوبويد) و"واحد فوق واتنين تحت"');
// Slide 5: Elbow scissors & union
setImage(0, 4, 'images/upper_limb_epiphysis_diagram.jpg', 'مقص الكوع والطرف العلوي: قمر 14، سن الجمباز 15، مقص 16 و 17، والساعة والشنطة 20 سنة');
// Slide 6: Milestone ages & graduation
setImage(0, 5, 'images/lower_limb_epiphysis_diagram.jpg', 'محطات سن التخرج: كفك 18، ركبة وقعدة بيوت 21 (كليات تانية)، والترقوة وقاع الجمجمة 23 (طالب طب)');
// Slide 7: The Female Law
setImage(0, 6, 'images/pelvis_age_female_rule.jpg', 'القاعدة الشرعية: الفيميل تسبق الميل بسنتين في الهيفات (الأطوال والمشاشات)، ومتسبقوش في الدواير!');
// Slide 8: Case Resolution: El-Prince
setImage(0, 7, 'images/el_prince_realistic.jpg', 'المتهم "البرنس" في جلسة التحقيق بالنيابة بعد ثبوت مسؤوليته الجنائية الكاملة');
addImage(0, 7, 'images/knee_xray_growth_plate.jpg', 'أشعة ركبة البرنس: خط المشاشة مفتوح (تحت 21 سنة) بينما رسغه وكوعه ملتحمان تماماً (فوق 18 سنة)');

// ─── EPISODE 2 ───
// Slide 2: Case Incinerated Skull
setImage(1, 1, 'images/charred_skull_forensics.jpg', 'جمجمة المشرحة المتفحمة في حريق المخزن مع أدلة وفهارس القياس الجنائي');
// Slide 4: Suture Clocks & Dimensions
setImage(1, 3, 'images/skull_sutures_diagram.jpg', 'محيط رأس الوليد (13 بوصة)، اليافوخ وقاعدة الـ 3 صوابع، وساعة درزات القبة S-C-L (30-40-50)');
// Slide 6: Mandible Angles
setImage(1, 5, 'images/mandible_age_diagram.jpg', 'تحولات زاوية الفك السفلي: منفرجة 140° في الطفل ➔ قائمة 90-110° في البالغ ➔ منفرجة 140° في العجوز');

// ─── EPISODE 3 ───
// Slide 4: Pelvic Sex Differences
setImage(2, 3, 'images/pelvis_male_vs_female.jpg', 'المقارنة الجنائية بين حوض الذكر والأنثى (الزاوية تحت العانة، الثلمة الوركية، ومدخل الحوض)');
// Slide 5: Pelvic Age Clock
setImage(2, 4, 'images/pelvis_age_female_rule.jpg', 'ساعة الحوض العمرية: أولى ابتدائي 6 سنين، سن الجمباز 15، قعدة البيوت 21، وعرف الحرقفة 23 سنة');

// ─── EPISODE 4 ───
// Slide 4: 40-60-40 Master Rule
setImage(3, 3, 'images/teeth_and_hyoid_sternum.jpg', 'النغمة الموسيقية الأسطورية "40 - 60 - 40": اللامي 40 فوق، قبضة القص 60 في النص، الخنجري 40 تحت');
// Slide 5: Hyoid Biomechanics
setImage(3, 4, 'images/hyoid_fracture_biomechanics.jpg', 'ميكانيكا كسر العظمة اللامية: كسر للخارج ونزيف حيوي في الخنق اليدوي مقابل سليم/للداخل في الشنق');

// ─── EPISODE 5 ───
// Slide 3: Deciduous Teeth Eruption
setImage(4, 2, 'images/teeth_and_hyoid_sternum.jpg', 'جدول التسنين اللبني (الفار 6، سن التطعيمات 9 و 18 شهر) والدائم (مضاعفات 6 وسن التمييز 7 سنين)');
// Slide 6: Bite Mark Analysis
setImage(4, 5, 'images/bite_mark_forensics.jpg', 'التحليل الجنائي لآثار العض: عضة الإنسان (حلقة بيضاوية) مقابل عضة الكلب (خطان متوازيان)');

// ─── EPISODE 6 ───
// Slide 4: Fingerprint Patterns & DNA
setImage(5, 3, 'images/fingerprint_patterns_dna.jpg', 'أنماط بصمات الأصابع (حلقة، دوامة، قوس) وعلامات المينوشيا، مع شفرة الـ DNA ونقاط الـ STR');

// ─── EPISODE 7 ───
// Slide 4: Skull Racial Characteristics
setImage(6, 3, 'images/cranial_race_identification.jpg', 'القياسات الجنائية لتحديد العرق: القوقازي (محجر مائل وأنف ضيق)، الزنجي (محجر مربع وبروز فك)، والمغولي (أسنان مجرفية)');

// ─── EPISODE 8 ───
// Slide 4: Pearson Formulae & Stature
setImage(7, 3, 'images/osteometric_board_stature.jpg', 'لوح قياس العظام (Osteometric Board) وحساب الطول الحقيقي بالمللي بمعادلات انحدار بيرسون');

// Save updated slides_data.js
const outCode = `// Slides data for MedDuo Slides Site — with authentic Egyptian medical mnemonics & rich illustrations\n\nconst SLIDES_DATA = ${JSON.stringify(slidesData, null, 2)};\n\nmodule.exports = SLIDES_DATA;\n`;
fs.writeFileSync(path.join(__dirname, 'slides_data.js'), outCode, 'utf8');
console.log('Successfully attached images and captions to slides_data.js!');
