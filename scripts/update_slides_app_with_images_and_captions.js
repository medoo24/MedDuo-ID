const fs = require('fs');
const path = require('path');

const slidesData = require('./slides_data.js');
const appJsPath = path.join(__dirname, '..', 'slides-site', 'app.js');
let content = fs.readFileSync(appJsPath, 'utf8');

// 1. Replace window.SLIDES_DATA
console.log('1. Replacing window.SLIDES_DATA...');
const startMarker = 'window.SLIDES_DATA = [';
const endMarker = 'const state = {';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  throw new Error('Could not find SLIDES_DATA markers in app.js');
}

const prefix = content.substring(0, startIdx);
const suffix = content.substring(endIdx);
content = prefix + 'window.SLIDES_DATA = ' + JSON.stringify(slidesData, null, 2) + ';\n\n' + suffix;

// 2. Replace image storage functions
console.log('2. Updating image storage & caption functions...');
const imgFnsTarget = `/* Images */
function getSlideImages(epIdx, slideIdx) {
  const imgs = [];
  let i = 0;
  while (true) {
    const v = localStorage.getItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${i}\`);
    if (v === null) break;
    imgs.push(v);
    i++;
  }
  return imgs;
}
function saveSlideImage(epIdx, slideIdx, imgIdx, base64) {
  localStorage.setItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${imgIdx}\`, base64);
}
function deleteSlideImage(epIdx, slideIdx, imgIdx) {
  // Remove and compact
  const imgs = getSlideImages(epIdx, slideIdx);
  imgs.splice(imgIdx, 1);
  // Clear all keys for this slide
  let i = 0;
  while (localStorage.getItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${i}\`) !== null) {
    localStorage.removeItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${i}\`);
    i++;
  }
  // Re-save
  imgs.forEach((b, idx) => localStorage.setItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${idx}\`, b));
}`;

const imgFnsReplacement = `/* Images & Captions */
function getSlideImages(epIdx, slideIdx) {
  const customImgs = [];
  let i = 0;
  while (true) {
    const v = localStorage.getItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${i}\`);
    if (v === null) break;
    const cap = localStorage.getItem(\`medduo_cap_\${epIdx}_\${slideIdx}_\${i}\`) || '';
    customImgs.push({ url: v, caption: cap });
    i++;
  }
  if (customImgs.length > 0) return customImgs;

  // Fallback to slide default images from master data
  const slides = getEpSlides(epIdx);
  const slide = slides[slideIdx];
  if (slide && slide.images && slide.images.length > 0) {
    return slide.images.map((img, idx) => {
      const savedCap = localStorage.getItem(\`medduo_cap_\${epIdx}_\${slideIdx}_\${idx}\`);
      if (typeof img === 'string') {
        return { url: img, caption: savedCap !== null ? savedCap : '' };
      }
      return {
        url: img.url || img.data || '',
        caption: savedCap !== null ? savedCap : (img.caption || '')
      };
    });
  }
  return [];
}

function saveSlideImage(epIdx, slideIdx, imgIdx, base64, caption = '') {
  localStorage.setItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${imgIdx}\`, base64);
  if (caption) {
    localStorage.setItem(\`medduo_cap_\${epIdx}_\${slideIdx}_\${imgIdx}\`, caption);
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
  localStorage.setItem(\`medduo_cap_\${epIdx}_\${slideIdx}_\${imgIdx}\`, caption);
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
  while (localStorage.getItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${i}\`) !== null || localStorage.getItem(\`medduo_cap_\${epIdx}_\${slideIdx}_\${i}\`) !== null) {
    localStorage.removeItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${i}\`);
    localStorage.removeItem(\`medduo_cap_\${epIdx}_\${slideIdx}_\${i}\`);
    i++;
  }

  // Re-save remaining items
  existing.forEach((item, idx) => {
    localStorage.setItem(\`medduo_img_\${epIdx}_\${slideIdx}_\${idx}\`, item.url);
    if (item.caption) {
      localStorage.setItem(\`medduo_cap_\${epIdx}_\${slideIdx}_\${idx}\`, item.caption);
    }
  });

  // Sync to slide state
  const slides = getEpSlides(epIdx);
  if (slides[slideIdx]) {
    slides[slideIdx].images = existing;
    saveEpSlides(epIdx, slides);
  }
}`;

if (!content.includes(imgFnsTarget)) {
  console.warn('Could not find exact imgFnsTarget, searching by prefix...');
  const idx1 = content.indexOf('/* Images */');
  const idx2 = content.indexOf('/* Favorites */');
  if (idx1 !== -1 && idx2 !== -1) {
    content = content.substring(0, idx1) + imgFnsReplacement + '\n\n' + content.substring(idx2);
    console.log('Replaced by slice indices');
  } else {
    throw new Error('Could not locate image functions section');
  }
} else {
  content = content.replace(imgFnsTarget, imgFnsReplacement);
  console.log('Replaced imgFnsTarget');
}

// 3. Update buildImageZone loop to render editable caption
console.log('3. Updating buildImageZone for editable captions...');
const gridLoopStartIdx = content.indexOf('// Grid of images / videos / gifs');
const gridLoopEndIdx = content.indexOf('zone.appendChild(grid);', gridLoopStartIdx);

if (gridLoopStartIdx !== -1 && gridLoopEndIdx !== -1) {
  const replacementGrid = `// Grid of images / videos / gifs
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
          mediaEl.src = src;
          mediaEl.alt = cap || \`Media \${imgIdx+1}\`;
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
      });\n      `;
  content = content.substring(0, gridLoopStartIdx) + replacementGrid + content.substring(gridLoopEndIdx);
  console.log('Updated buildImageZone grid loop');
} else {
  throw new Error('Could not find grid loop in buildImageZone');
}

// 4. Update PPTX export for images & captions
console.log('4. Updating PPTX export for images & captions...');
const pptStart = content.indexOf('// Render Image on the right if available');
const pptEnd = content.indexOf('const content = slide.content || {};', pptStart);

const pptImgReplacement = `// Render Image on the right if available
        const slideImgs = getSlideImages(state.epIdx, idx);
        const hasSlideImgs = slideImgs && slideImgs.length > 0;
        if (hasSlideImgs) {
          const firstImg = slideImgs[0];
          const imgUrl = (typeof firstImg === 'string') ? firstImg : (firstImg.url || '');
          const imgCap = (typeof firstImg === 'object' && firstImg.caption) ? firstImg.caption : '';

          try {
            const imgOpts = {
              x: 8.2, y: 1.55, w: 4.3, h: imgCap ? 4.2 : 4.8,
              sizing: { type: 'contain', w: 4.3, h: imgCap ? 4.2 : 4.8 }
            };
            if (imgUrl.startsWith('data:')) {
              imgOpts.data = imgUrl;
            } else {
              imgOpts.path = imgUrl;
            }
            s.addImage(imgOpts);

            if (imgCap) {
              s.addText(imgCap, {
                x: 8.2, y: 5.85, w: 4.3, h: 0.9,
                fontSize: 9.5, italic: true, color: '64748B', align: 'center', fontFace: 'Calibri'
              });
            }
          } catch(imgErr) {
            console.warn('Could not add image to PPTX', imgErr);
          }
        }`;

if (pptStart !== -1 && pptEnd !== -1) {
  content = content.substring(0, pptStart) + pptImgReplacement + '\n\n        ' + content.substring(pptEnd);
  console.log('Replaced PPTX image block');
}

fs.writeFileSync(appJsPath, content, 'utf8');
console.log('Successfully updated slides-site/app.js!');

// 5. Update slides-site/style.css
console.log('5. Updating slides-site/style.css...');
const cssPath = path.join(__dirname, '..', 'slides-site', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const captionCss = `
/* ─── Editable Slide Image Captions ─── */
.slide-img-caption {
  margin-top: 6px;
  font-size: 0.78rem;
  line-height: 1.35;
  color: var(--text2);
  background: var(--surface);
  border: 1px dashed var(--border);
  border-radius: 6px;
  padding: 5px 8px;
  text-align: center;
  cursor: text;
  transition: all 0.2s ease;
  max-width: 100%;
  word-break: break-word;
  user-select: text;
}
.slide-img-caption:hover {
  border-color: var(--cyan);
  background: rgba(6, 182, 212, 0.04);
}
.slide-img-caption:focus {
  outline: none;
  border-color: var(--cyan);
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
  background: #ffffff;
  color: var(--text1);
}
.dark-mode .slide-img-caption:focus {
  background: #1e293b;
  color: #f1f5f9;
}
.slide-img-caption[data-empty="true"]::before {
  content: attr(data-placeholder);
  color: var(--text3);
  font-style: italic;
  font-size: 0.75rem;
}
.print-slide-card .slide-img-caption {
  font-size: 0.68rem !important;
  color: #334155 !important;
  background: #F8FAFC !important;
  border: 1px solid #E2E8F0 !important;
  padding: 3px 6px !important;
  margin-top: 4px !important;
  text-align: center !important;
  border-radius: 4px !important;
  font-weight: 500 !important;
}
`;

if (!css.includes('.slide-img-caption')) {
  css += captionCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Added caption styles to slides-site/style.css');
}

console.log('All updates finished successfully!');
