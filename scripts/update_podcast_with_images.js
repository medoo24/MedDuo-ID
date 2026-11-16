const fs = require('fs');
const path = require('path');

const episodes = require('./episodes_data.js');

// Add images to podcast episodes
// Ep 1: Case 1 illustration
const ep1 = episodes[0];
// Find after Case 1 description (around item 5)
const case1Idx = ep1.dialogue.findIndex(d => d.text && d.text.includes('البرنس متلبس في جريمة'));
if (case1Idx !== -1) {
  ep1.dialogue.splice(case1Idx + 1, 0, {
    type: "image",
    url: "images/el_prince_illustration.jpg",
    caption: "المتهم 'البرنس': شحط بشنب ودقن وبنطلون مسقط في الكلبشات يدعي أنه حدث 15 سنة و9 شهور!"
  });
}

// Ep 1: Dr. Shereen 4 Geometries
const shereenIdx = ep1.dialogue.findIndex(d => d.text && d.text.includes('طريقة د. شيرين الأسطورية'));
if (shereenIdx !== -1) {
  ep1.dialogue.splice(shereenIdx + 3, 0, {
    type: "image",
    url: "images/dr_shereen_framework.jpg",
    caption: "طريقة د. شيرين الأصلية: الأشكال الهندسية الـ 4 لتقدير السن (دايرة صغيرة، دايرة كبيرة، خط بالطول، خط بالعرض)"
  });
}

// Ep 1: Knee X-ray resolution
const res1Idx = ep1.dialogue.findIndex(d => d.text && d.text.includes('أشعة الركبة: الخط الغضروفي بين أسفل الفخذ'));
if (res1Idx !== -1) {
  ep1.dialogue.splice(res1Idx + 1, 0, {
    type: "image",
    url: "images/knee_xray_growth_plate.jpg",
    caption: "أشعة ركبة البرنس: خط المشاشة مفتوح (تحت 21 سنة) بينما كوعه ورسغه لاحمين بالكامل (فوق 18 سنة)"
  });
}

// Ep 2: Charred Skull
const ep2 = episodes[1];
const case2Idx = ep2.dialogue.findIndex(d => d.text && d.text.includes('حريق هائل ولّع في مخزن'));
if (case2Idx !== -1) {
  ep2.dialogue.splice(case2Idx + 1, 0, {
    type: "image",
    url: "images/charred_skull_forensics.jpg",
    caption: "فحص جمجمة المشرحة المتفحمة في حريق المخزن لتحديد الجنس والعمر بالدرزات"
  });
}

// Ep 3: Pelvis Male vs Female
const ep3 = episodes[2];
const pelvIdx = ep3.dialogue.findIndex(d => d.text && d.text.includes('المقارنة الذهنية (Male vs Female Pelvis'));
if (pelvIdx !== -1) {
  ep3.dialogue.splice(pelvIdx + 2, 0, {
    type: "image",
    url: "images/pelvis_male_vs_female.jpg",
    caption: "الفروق الجنائية الـ 6 بين حوض الذكر والأنثى (الزاوية تحت العانة، الثلمة الوركية، ومدخل الحوض)"
  });
}

// Ep 4: Hyoid
const ep4 = episodes[3];
const hyoidIdx = ep4.dialogue.findIndex(d => d.text && d.text.includes('المحطة الثانية: النغمة الموسيقية الأسطورية'));
if (hyoidIdx !== -1) {
  ep4.dialogue.splice(hyoidIdx + 4, 0, {
    type: "image",
    url: "images/hyoid_fracture_biomechanics.jpg",
    caption: "ميكانيكا كسر العظمة اللامية: كسر للخارج ونزيف حيوي في الخنق اليدوي مقابل سليم/للداخل في الشنق"
  });
}

// Ep 5: Bite Mark
const ep5 = episodes[4];
const biteIdx = ep5.dialogue.findIndex(d => d.text && d.text.includes('المحطة الرابعة: عَضّة البني آدم vs عَضّة الكلب'));
if (biteIdx !== -1) {
  ep5.dialogue.splice(biteIdx + 2, 0, {
    type: "image",
    url: "images/bite_mark_forensics.jpg",
    caption: "التحليل الجنائي لآثار العض: عضة الإنسان (حلقة بيضاوية) مقابل عضة الكلب (خطان متوازيان)"
  });
}

// Save updated episodes_data.js
fs.writeFileSync(path.join(__dirname, 'episodes_data.js'), `// Data for all 8 podcast episodes with authentic Egyptian medical mnemonics\nconst EPISODES = ${JSON.stringify(episodes, null, 2)};\nmodule.exports = EPISODES;\n`, 'utf8');
console.log('Saved episodes_data.js with image items!');

// Update podcast-site/app.js
const podAppPath = path.join(__dirname, '..', 'podcast-site', 'app.js');
let podContent = fs.readFileSync(podAppPath, 'utf8');

// Replace EPISODES array
const podStartIdx = podContent.indexOf('const EPISODES = [');
const podEndIdx = podContent.indexOf('const state = {');
podContent = podContent.substring(0, podStartIdx) + 'const EPISODES = ' + JSON.stringify(episodes, null, 2) + ';\n\n' + podContent.substring(podEndIdx);

// Add makeImageCard and support in renderDialogue & renderReading
if (!podContent.includes('function makeImageCard')) {
  const makeImgCardCode = `
// ─── IMAGE CARD FACTORY ──────────────────────────────────────
function makeImageCard(item, itemIdx, epIdx) {
  const wrap = document.createElement('div');
  wrap.className = 'podcast-image-card';
  wrap.dataset.itemIndex = itemIdx;
  wrap.style.cssText = 'margin: 18px auto; max-width: 620px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); text-align: center;';
  
  const capHtml = item.caption ? \`<div class="podcast-img-caption" style="padding: 10px 16px; font-size: 0.85rem; color: var(--text2); font-weight: 500; border-top: 1px solid var(--border); line-height: 1.45; background: var(--surface);">\${escHtml(item.caption)}</div>\` : '';
  
  wrap.innerHTML = \`
    <div style="background:#0F172A; position:relative; overflow:hidden;">
      <img src="\${escHtml(item.url)}" alt="\${escHtml(item.caption || '')}" style="width: 100%; max-height: 420px; object-fit: contain; display: block; margin: 0 auto;" />
    </div>
    \${capHtml}
  \`;
  return wrap;
}
`;
  const bubbleFactoryIdx = podContent.indexOf('// ─── BUBBLE FACTORY ──────────────────────────────────────────');
  podContent = podContent.substring(0, bubbleFactoryIdx) + makeImgCardCode + '\n' + podContent.substring(bubbleFactoryIdx);
  console.log('Added makeImageCard function to podcast app.js');
}

// Support in renderDialogue:
if (podContent.includes("} else if (item.type === 'sub_header') {")) {
  podContent = podContent.replace(
    "} else if (item.type === 'sub_header') {\n      $dialogue.appendChild(makeSubHeader(item, i, idx));\n    } else {",
    "} else if (item.type === 'sub_header') {\n      $dialogue.appendChild(makeSubHeader(item, i, idx));\n    } else if (item.type === 'image') {\n      $dialogue.appendChild(makeImageCard(item, i, idx));\n    } else {"
  );
  console.log('Added image support to renderDialogue');
}

// Support in renderReading:
if (podContent.includes("} else if (item.type === 'sub_header') {\n      const h = document.createElement('div');")) {
  const readingReplaceTarget = `} else if (item.type === 'sub_header') {
      const h = document.createElement('div');
      h.className = 'sub-header-block';
      h.innerHTML = \`
        <div class="sub-header-wrap">
          <span class="sub-header-text">\${escHtml(item.text)}</span>
          <button class="sh-action-btn edit-btn" title="تعديل هذا العنوان الفرعي">✏️ تعديل</button>
        </div>
      \`;
      h.querySelector('.edit-btn').addEventListener('click', () => openEditItemModal(i));
      $reading.appendChild(h);
    } else {`;

  const readingReplacement = `} else if (item.type === 'sub_header') {
      const h = document.createElement('div');
      h.className = 'sub-header-block';
      h.innerHTML = \`
        <div class="sub-header-wrap">
          <span class="sub-header-text">\${escHtml(item.text)}</span>
          <button class="sh-action-btn edit-btn" title="تعديل هذا العنوان الفرعي">✏️ تعديل</button>
        </div>
      \`;
      h.querySelector('.edit-btn').addEventListener('click', () => openEditItemModal(i));
      $reading.appendChild(h);
    } else if (item.type === 'image') {
      $reading.appendChild(makeImageCard(item, i, idx));
    } else {`;
  podContent = podContent.replace(readingReplaceTarget, readingReplacement);
  console.log('Added image support to renderReading');
}

fs.writeFileSync(podAppPath, podContent, 'utf8');
console.log('Successfully updated podcast-site/app.js!');

// Update scripts/sync_transcripts.js for image rendering in markdown
const syncPath = path.join(__dirname, 'sync_transcripts.js');
let syncContent = fs.readFileSync(syncPath, 'utf8');
if (!syncContent.includes("item.type === 'image'")) {
  syncContent = syncContent.replace(
    "} else if (item.type === 'speaker') {",
    "} else if (item.type === 'image') {\n      md += `\\n![\${item.caption || 'صورة توضيحية'}](\${item.url})\\n*\${item.caption || ''}*\\n\\n`;\n    } else if (item.type === 'speaker') {"
  );
  fs.writeFileSync(syncPath, syncContent, 'utf8');
  console.log('Updated sync_transcripts.js for images');
}

// Run sync_transcripts
require('./sync_transcripts.js');
console.log('Transcripts synced with images!');
