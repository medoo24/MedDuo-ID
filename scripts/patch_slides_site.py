# -*- coding: utf-8 -*-
"""
Patch slides-site/app.js to add:
1. 51 photos to FORENSIC_IMAGE_GALLERY (total 74 images)
2. Tabbed modal gallery with Wikimedia Commons live search and direct URL insertion
3. Restrict media layout strictly to 'top' and 'right' (removing 'left' and 'bottom')
4. Object deletion from slide cards, flowchart, tables, and exam traps
5. Card color theme switcher on each card (Cyan, Emerald, Amber, Rose, Purple, Slate, Dark)
6. Blank slides & ➕ Insert dropdown menu (cards, flowchart steps, tables, traps, bullets, images)
7. Local upload fix via Canvas compression (1200px max, 0.82 JPEG quality)
8. Imageless slide support (100% full width, no empty dashed box)
9. Gemini AI Slide Assistant per slide with quick action recipes & custom prompt
10. Gemini AI API Key Settings modal
"""

import os, re, json

with open('slides-site/app.js', 'r', encoding='utf-8') as f:
    code = f.read()

# ── 1. Photos list ──
photos_dir = 'slides-site/images/photos'
files = [f for f in os.listdir(photos_dir) if f.endswith('.jpg') and not f.endswith('_thumb.jpg')]
def get_num(fn):
    m = re.search(r'photo_(\d+)', fn)
    return int(m.group(1)) if m else 9999
files.sort(key=get_num)

photo_items = []
for f in files:
    num = get_num(f)
    photo_items.append({
        'url': f'images/photos/{f}',
        'name': f'Forensic Atlas Photo #{num}',
        'caption': f'أرشيف الطب الشرعي والأطلس العملي - صورة فحص عيني رقم #{num}'
    })

photos_cat_str = '  {\n    category: "Forensic Case Archive & Atlas Photos (51 Real Cases)",\n    items: ' + json.dumps(photo_items, indent=6, ensure_ascii=False) + '\n  },\n'

# Add to FORENSIC_IMAGE_GALLERY
gallery_start = 'const FORENSIC_IMAGE_GALLERY = ['
if gallery_start in code:
    code = code.replace(gallery_start, gallery_start + '\n' + photos_cat_str, 1)
    print('✓ Added 51 photos to FORENSIC_IMAGE_GALLERY')

# ── 2. Replace buildCardsGrid ──
old_cards_grid = '''function buildCardsGrid(cardsData) {
  const grid = document.createElement('div');
  grid.className = 'visual-cards-grid';
  cardsData.forEach(c => {
    const card = document.createElement('div');
    const theme = c.theme || 'cyan';
    card.className = `visual-card theme-${theme}`;
    const itemsHTML = (c.items || []).map(it => `<li contenteditable="true" title="Click to edit item">${escHtml(it)}</li>`).join('');
    const highlightHTML = c.highlight ? `<div class="card-highlight" contenteditable="true">${escHtml(c.highlight)}</div>` : '';
    card.innerHTML = `
      <div class="card-top">
        <span class="card-badge">${escHtml(c.badge || '')}</span>
        <span class="card-icon">${escHtml(c.icon || '📌')}</span>
      </div>
      <div class="card-title" contenteditable="true" title="Click to edit title">${escHtml(c.title || '')}</div>
      <ul class="card-items">${itemsHTML}</ul>
      ${highlightHTML}
    `;
    grid.appendChild(card);
  });
  return grid;
}'''

new_cards_grid = '''function buildCardsGrid(cardsData, slideIdx) {
  const grid = document.createElement('div');
  grid.className = 'visual-cards-grid';
  const epIdx = state.epIdx;
  const sIdx = (typeof slideIdx === 'number') ? slideIdx : state.slideIdx;

  cardsData.forEach((c, ci) => {
    const card = document.createElement('div');
    const theme = c.theme || 'cyan';
    card.className = `visual-card theme-${theme}`;
    
    // Action bar on each card: color theme palette & delete button
    const actBar = document.createElement('div');
    actBar.className = 'card-action-bar';
    actBar.innerHTML = `
      <div class="card-color-palette hidden">
        <span class="swatch-dot swatch-cyan" data-theme="cyan" title="Cyan"></span>
        <span class="swatch-dot swatch-emerald" data-theme="emerald" title="Emerald"></span>
        <span class="swatch-dot swatch-amber" data-theme="amber" title="Amber"></span>
        <span class="swatch-dot swatch-rose" data-theme="rose" title="Rose"></span>
        <span class="swatch-dot swatch-purple" data-theme="purple" title="Purple"></span>
        <span class="swatch-dot swatch-slate" data-theme="slate" title="Slate"></span>
        <span class="swatch-dot swatch-dark" data-theme="dark" title="Dark"></span>
      </div>
      <button class="card-action-btn color-btn" title="Change Card Color">🎨</button>
      <button class="card-action-btn del" title="Delete this Card">🗑</button>
    `;

    const palette = actBar.querySelector('.card-color-palette');
    actBar.querySelector('.color-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      palette.classList.toggle('hidden');
    });

    palette.querySelectorAll('.swatch-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        c.theme = dot.dataset.theme;
        const slides = getEpSlides(epIdx);
        if (slides[sIdx] && slides[sIdx].content) {
          slides[sIdx].content.cards = cardsData;
          saveEpSlides(epIdx, slides);
        }
        card.className = `visual-card theme-${dot.dataset.theme}`;
        palette.classList.add('hidden');
        showToast(`✓ Color theme set to ${dot.dataset.theme}`);
      });
    });

    actBar.querySelector('.del').addEventListener('click', (e) => {
      e.stopPropagation();
      if (!confirm(`Delete card "${c.title || 'Card'}"?`)) return;
      cardsData.splice(ci, 1);
      const slides = getEpSlides(epIdx);
      if (slides[sIdx] && slides[sIdx].content) {
        slides[sIdx].content.cards = cardsData;
        saveEpSlides(epIdx, slides);
      }
      renderSlide();
      showToast('✓ Card deleted');
    });

    card.appendChild(actBar);

    const itemsHTML = (c.items || []).map(it => `<li contenteditable="true" title="Click to edit item">${escHtml(it)}</li>`).join('');
    const highlightHTML = c.highlight ? `<div class="card-highlight" contenteditable="true">${escHtml(c.highlight)}</div>` : '';
    
    const cardContent = document.createElement('div');
    cardContent.innerHTML = `
      <div class="card-top">
        <span class="card-badge">${escHtml(c.badge || '')}</span>
        <span class="card-icon">${escHtml(c.icon || '📌')}</span>
      </div>
      <div class="card-title" contenteditable="true" title="Click to edit title">${escHtml(c.title || '')}</div>
      <ul class="card-items">${itemsHTML}</ul>
      ${highlightHTML}
    `;
    card.appendChild(cardContent);
    grid.appendChild(card);
  });
  return grid;
}'''

if old_cards_grid in code:
    code = code.replace(old_cards_grid, new_cards_grid, 1)
    print('✓ Updated buildCardsGrid')
else:
    print('⚠️ buildCardsGrid match failed')

# ── 3. Replace buildTrapBox ──
old_trap = '''function buildTrapBox(trapData) {
  const box = document.createElement('div');
  box.className = 'visual-trap-box';
  box.innerHTML = `
    <div class="trap-header">⚠️ EXAM TRAP · شفوي عين شمس</div>
    <div class="trap-title">${escHtml(trapData.title || '')}</div>
    <div class="trap-body">${escHtml(trapData.desc || '')}</div>
  `;
  return box;
}'''

new_trap = '''function buildTrapBox(trapData) {
  const box = document.createElement('div');
  box.className = 'visual-trap-box';
  box.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <div class="trap-header">⚠️ EXAM TRAP · شفوي عين شمس</div>
      <button class="card-action-btn del trap-del-btn" title="Delete Exam Trap" style="margin-bottom:6px;">🗑</button>
    </div>
    <div class="trap-title" contenteditable="true">${escHtml(trapData.title || '')}</div>
    <div class="trap-body" contenteditable="true">${escHtml(trapData.desc || '')}</div>
  `;
  box.querySelector('.trap-del-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (!confirm('Remove this Exam Trap from slide?')) return;
    const slides = getEpSlides(state.epIdx);
    if (slides[state.slideIdx] && slides[state.slideIdx].content) {
      delete slides[state.slideIdx].content.trap;
      saveEpSlides(state.epIdx, slides);
    }
    renderSlide();
    showToast('✓ Exam Trap removed');
  });
  return box;
}'''

if old_trap in code:
    code = code.replace(old_trap, new_trap, 1)
    print('✓ Updated buildTrapBox')
else:
    print('⚠️ buildTrapBox match failed')

# ── 4. Replace buildSlideCard ──
idx_bsc_start = code.find('function buildSlideCard(slide, idx, slides) {')
idx_bsc_end = code.find('function buildTitleSlide(slide) {')
if idx_bsc_start != -1 and idx_bsc_end != -1:
    new_bsc = '''function buildSlideCard(slide, idx, slides) {
  const wrap = document.createElement('div');
  let layout = slide.mediaLayout || 'right';
  if (layout !== 'top' && layout !== 'right') layout = 'right';
  
  const imgs = getSlideImages(state.epIdx, idx);
  const isImageless = (!imgs || imgs.length === 0);
  wrap.className = `slide-card-wrap layout-${layout}${isImageless ? ' is-imageless' : ''}`;

  // ── Header ──
  const hdr = document.createElement('div');
  hdr.className = 'slide-header';
  hdr.innerHTML = `
    <div class="slide-header-left">
      ${typeBadgeHTML(slide.type)}
      <span class="slide-num-chip">#${idx+1}</span>
    </div>
    <div class="slide-header-right">
      <div class="insert-menu-wrap" style="position:relative;display:inline-block;">
        <button class="icon-btn insert-trigger-btn" title="Insert component" style="background:#0284C7;color:#fff;font-weight:700;border:none;padding:5px 10px;border-radius:6px;">➕ Insert ▾</button>
        <div class="insert-dropdown hidden">
          <div class="insert-dropdown-item" data-insert="card">🃏 Add Visual Card</div>
          <div class="insert-dropdown-item" data-insert="flow">🔀 Add Flowchart Step</div>
          <div class="insert-dropdown-item" data-insert="table">📊 Add Comparison Table</div>
          <div class="insert-dropdown-item" data-insert="trap">⚠️ Add Exam Trap Callout</div>
          <div class="insert-dropdown-item" data-insert="bullets">📝 Add Bullet Points</div>
          <div class="insert-dropdown-item" data-insert="image">🖼 Add Image / Diagram</div>
        </div>
      </div>
      <button class="icon-btn ai-slide-btn" data-action="ai-edit" title="Gemini AI Slide Assistant" style="background:linear-gradient(135deg, #0284C7, #6366F1);color:#fff;font-weight:700;border:none;padding:5px 10px;border-radius:6px;box-shadow:0 2px 6px rgba(99,102,241,0.25);">✨ AI Edit</button>
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

  // Wire Insert Menu
  const insertBtn = hdr.querySelector('.insert-trigger-btn');
  const insertMenu = hdr.querySelector('.insert-dropdown');
  insertBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    insertMenu.classList.toggle('hidden');
  });
  document.addEventListener('click', () => {
    if (insertMenu) insertMenu.classList.add('hidden');
  });

  insertMenu.querySelectorAll('.insert-dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      insertMenu.classList.add('hidden');
      handleInsertObject(idx, item.dataset.insert);
    });
  });

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
      const hasContent = (content.cards && content.cards.length) ||
                         (content.flowchart && content.flowchart.length) ||
                         (content.rows && content.rows.length) ||
                         (content.bullets && content.bullets.length) ||
                         content.trap || content.timeline;

      if (!hasContent) {
        // Blank Canvas state
        const blankCanvas = document.createElement('div');
        blankCanvas.className = 'blank-canvas-placeholder';
        blankCanvas.innerHTML = `
          <div style="font-size:1.15rem;font-weight:700;color:#0F172A;margin-bottom:6px;">⚪ Blank Slide Canvas</div>
          <div style="font-size:0.85rem;color:#64748B;margin-bottom:18px;">This slide is currently blank. Click any block below or use <strong>➕ Insert</strong> to build:</div>
          <div class="blank-canvas-actions">
            <button class="blank-action-btn" data-type="card">🃏 Insert 2x2 Card Grid</button>
            <button class="blank-action-btn" data-type="flow">🔀 Insert Flowchart Pipeline</button>
            <button class="blank-action-btn" data-type="table">📊 Insert Comparison Table</button>
            <button class="blank-action-btn" data-type="trap">⚠️ Insert Exam Trap Callout</button>
            <button class="blank-action-btn" data-type="bullets">📝 Insert Bullet Points</button>
            <button class="blank-action-btn" data-type="image">🖼 Attach Diagram / Image</button>
          </div>
        `;
        blankCanvas.querySelectorAll('.blank-action-btn').forEach(b => {
          b.addEventListener('click', () => handleInsertObject(idx, b.dataset.type));
        });
        body.appendChild(blankCanvas);
      } else {
        // Flowchart
        if (content.flowchart && content.flowchart.length) {
          body.appendChild(buildFlowchart(content.flowchart));
        }
        // Cards Grid
        if (content.cards && content.cards.length) {
          body.appendChild(buildCardsGrid(content.cards, idx));
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
        // Bullets
        if (content.bullets && content.bullets.length) {
          body.appendChild(buildBullets(content.bullets));
        }
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

  // ── Inner Container with Flexible Layout (Top / Right) ──
  const innerWrap = document.createElement('div');
  innerWrap.className = 'slide-inner-wrap';

  if (isImageless) {
    innerWrap.appendChild(body);
  } else {
    const imgZone = buildImageZone(idx);
    if (layout === 'top') {
      innerWrap.appendChild(imgZone);
      innerWrap.appendChild(body);
    } else {
      // right
      innerWrap.appendChild(body);
      innerWrap.appendChild(imgZone);
    }
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
    if (action === 'ai-edit') openAISlideModal(idx);
    else if (action === 'save') {
      // Sync any direct contenteditable changes back into slide data
      const currentSlide = slides[state.slideIdx];
      const cardEl = document.getElementById('slide-card');
      if (currentSlide && cardEl) {
        if (currentSlide.content && currentSlide.content.cards) {
          const vCards = cardEl.querySelectorAll('.visual-card');
          vCards.forEach((vc, ci) => {
            if (currentSlide.content.cards[ci]) {
              const tEl = vc.querySelector('.card-title');
              if (tEl) currentSlide.content.cards[ci].title = tEl.textContent.trim();
              const items = Array.from(vc.querySelectorAll('.card-items li')).map(li => li.textContent.trim()).filter(Boolean);
              if (items.length) currentSlide.content.cards[ci].items = items;
            }
          });
        } else if (currentSlide.content && currentSlide.content.flowchart) {
          const fNodes = cardEl.querySelectorAll('.flow-node');
          fNodes.forEach((fn, ni) => {
            if (currentSlide.content.flowchart[ni]) {
              const tEl = fn.querySelector('.flow-node-title');
              if (tEl) currentSlide.content.flowchart[ni].title = tEl.textContent.trim();
              const dEl = fn.querySelector('.flow-node-desc');
              if (dEl) currentSlide.content.flowchart[ni].desc = dEl.textContent.trim();
            }
          });
        }
      }
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

'''
    code = code[:idx_bsc_start] + new_bsc + code[idx_bsc_end:]
    print('✓ Updated buildSlideCard with imageless & AI & insert support')
else:
    print('⚠️ buildSlideCard slice failed')

# ── 5. Replace openGalleryModal, buildImageZone, handleImgUpload ──
idx_ogm_start = code.find('function openGalleryModal(slideIdx) {')
idx_se_start = code.find('function startEdit(idx) {')

if idx_ogm_start != -1 and idx_se_start != -1:
    new_gallery_and_img = '''let currentGallerySlideIdx = null;

function openGalleryModal(slideIdx) {
  currentGallerySlideIdx = slideIdx;
  const modal = document.getElementById('modal-gallery');
  if (!modal) return;

  // Switch to atlas tab by default
  switchGalleryTab('atlas');
  renderAtlasGallery('');
  modal.classList.remove('hidden');
}

function switchGalleryTab(tabName) {
  document.querySelectorAll('.gallery-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabName);
  });
  document.querySelectorAll('.gallery-tab-content').forEach(c => {
    c.style.display = 'none';
  });
  const target = document.getElementById(`gallery-tab-${tabName}`);
  if (target) target.style.display = 'flex';
}

function renderAtlasGallery(filterKeyword, filterCat) {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  container.innerHTML = '';

  const kw = (filterKeyword || '').toLowerCase().trim();

  FORENSIC_IMAGE_GALLERY.forEach(cat => {
    // Check if category matches filterCat
    if (filterCat === 'photos' && !cat.category.includes('51 Real Cases')) return;
    if (filterCat === 'diagrams' && cat.category.includes('51 Real Cases')) return;
    if (filterCat === 'skull' && !cat.category.includes('Skull')) return;
    if (filterCat === 'pelvis' && !cat.category.includes('Pelvis')) return;
    if (filterCat === 'epiphysis' && !cat.category.includes('Bone Age')) return;
    if (filterCat === 'odontology' && !cat.category.includes('Odontology')) return;
    if (filterCat === 'prince' && !cat.category.includes('El-Prince')) return;

    const matchingItems = cat.items.filter(item => {
      if (!kw) return true;
      return (item.name && item.name.toLowerCase().includes(kw)) ||
             (item.caption && item.caption.toLowerCase().includes(kw));
    });

    if (matchingItems.length === 0) return;

    const sec = document.createElement('div');
    sec.className = 'gallery-cat-section';
    sec.innerHTML = `<div class="gallery-cat-title">${cat.category} (${matchingItems.length})</div>`;

    const grid = document.createElement('div');
    grid.className = 'gallery-grid';

    matchingItems.forEach(item => {
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
        addGalleryImageToSlide(state.epIdx, currentGallerySlideIdx, item.url, item.caption);
        document.getElementById('modal-gallery').classList.add('hidden');
      });
      grid.appendChild(card);
    });

    sec.appendChild(grid);
    container.appendChild(sec);
  });

  if (container.children.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:#64748B;padding:30px;">No images found matching your search.</div>';
  }
}

// ── Wikimedia Commons Online Search ──
async function runOnlineSearch(query) {
  const statusEl = document.getElementById('online-search-status');
  const grid = document.getElementById('online-results-grid');
  if (!query || !grid) return;

  statusEl.textContent = `🔍 Searching Wikimedia Commons for "${query}"...`;
  grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:30px;color:#0284C7;font-weight:600;">Searching millions of biomedical & anatomical images...</div>';

  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=20&prop=imageinfo&iiprop=url&iiurlwidth=500&format=json&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    const pages = data?.query?.pages || {};
    const items = Object.values(pages);

    if (items.length === 0) {
      statusEl.textContent = 'No images found. Try a broader search keyword.';
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:30px;color:#64748B;">No images found. Try another query like "human skull" or "pelvis".</div>';
      return;
    }

    statusEl.textContent = `Found ${items.length} images for "${query}" (Click any to attach to slide):`;
    grid.innerHTML = '';

    items.forEach(p => {
      const ii = p.imageinfo?.[0];
      if (!ii) return;
      const thumb = ii.thumburl || ii.url;
      const cleanTitle = (p.title || '').replace(/^File:/, '').replace(/\\.[^/.]+$/, '').replace(/_/g, ' ');

      const card = document.createElement('div');
      card.className = 'online-result-card';
      card.innerHTML = `
        <img src="${thumb}" alt="${escHtml(cleanTitle)}" class="online-thumb" loading="lazy" />
        <div class="online-info">
          <div class="online-title" title="${escHtml(cleanTitle)}">${escHtml(cleanTitle)}</div>
          <button class="online-add-btn">➕ Attach to Slide</button>
        </div>
      `;
      card.querySelector('.online-add-btn').addEventListener('click', () => {
        addGalleryImageToSlide(state.epIdx, currentGallerySlideIdx, thumb, cleanTitle);
        document.getElementById('modal-gallery').classList.add('hidden');
      });
      grid.appendChild(card);
    });
  } catch (err) {
    console.error('Online search error:', err);
    statusEl.textContent = 'Search failed: please check your connection.';
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:30px;color:#EF4444;">Failed to fetch from Wikimedia. You can also paste direct image URLs in the URL tab.</div>';
  }
}

function addGalleryImageToSlide(epIdx, slideIdx, imgUrl, caption) {
  const slides = getEpSlides(epIdx);
  if (!slides[slideIdx]) return;
  if (!slides[slideIdx].images) slides[slideIdx].images = [];
  
  const imgIdx = slides[slideIdx].images.length;
  slides[slideIdx].images.push({ url: imgUrl, caption: caption });
  
  if (slides[slideIdx].mediaLayout !== 'top' && slides[slideIdx].mediaLayout !== 'right') {
    slides[slideIdx].mediaLayout = 'right';
  }

  saveEpSlides(epIdx, slides);
  saveSlideImageCaption(epIdx, slideIdx, imgIdx, caption);
  
  renderSlide();
  showToast('✓ Attached diagram & caption to slide!');
}

function buildImageZone(slideIdx) {
  const epIdx = state.epIdx;
  const slides = getEpSlides(epIdx);
  const slide = slides[slideIdx] || {};
  let currentLayout = slide.mediaLayout || 'right';
  if (currentLayout !== 'top' && currentLayout !== 'right') currentLayout = 'right';

  const imgs = getSlideImages(epIdx, slideIdx);
  if (imgs.length === 0) {
    return null; // Imageless slide
  }

  const zone = document.createElement('div');
  zone.className = 'image-zone';

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
  galleryBtn.textContent = '🖼 Gallery (74)';
  galleryBtn.title = 'Choose from 74 forensic medical atlas images & search online';
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

  const delAllBtn = document.createElement('button');
  delAllBtn.className = 'tool-btn danger-btn';
  delAllBtn.style.cssText = 'font-size:0.72rem;padding:4px 8px;border-radius:6px;';
  delAllBtn.textContent = '🗑 Remove Media';
  delAllBtn.title = 'Remove all images from this slide (Make Imageless)';
  delAllBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!confirm('Remove all media and make this slide imageless?')) return;
    slide.images = [];
    saveEpSlides(epIdx, slides);
    renderSlide();
    showToast('✓ Converted to full-width imageless slide');
  });
  actionWrap.appendChild(delAllBtn);

  topBar.appendChild(actionWrap);
  zone.appendChild(topBar);

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
      const resolvedSrc = getResolvedImageData(src);
      mediaEl.src = resolvedSrc;
      mediaEl.alt = cap || `Media ${imgIdx+1}`;
      mediaEl.className = 'slide-media-item';
      mediaEl.onerror = () => {
        if (window.SLIDES_IMAGES_DATA && window.SLIDES_IMAGES_DATA['images/charred_skull_forensics.jpg']) {
          mediaEl.src = window.SLIDES_IMAGES_DATA['images/charred_skull_forensics.jpg'];
        }
      };
    }

    const capEl = document.createElement('div');
    capEl.className = 'slide-img-caption';
    capEl.contentEditable = 'true';
    capEl.title = 'Click to edit caption';
    capEl.setAttribute('data-placeholder', '✏️ Click to add/edit caption…');
    capEl.textContent = cap || '';
    if (!cap) capEl.setAttribute('data-empty', 'true');

    capEl.addEventListener('focus', () => capEl.removeAttribute('data-empty'));
    capEl.addEventListener('blur', () => {
      const text = capEl.textContent.trim();
      if (!text) capEl.setAttribute('data-empty', 'true');
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
    del.title = 'Delete media item';
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

  return zone;
}

function handleImgUpload(e, slideIdx, cb) {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  const epIdx = state.epIdx;
  let loaded = 0;
  const existing = getSlideImages(epIdx, slideIdx).length;

  files.forEach((file, fi) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 1200;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const compressed = canvas.toDataURL('image/jpeg', 0.82);

          saveSlideImage(epIdx, slideIdx, existing + fi, {
            url: compressed,
            caption: file.name.replace(/\\.[^/.]+$/, "")
          });
          loaded++;
          if (loaded === files.length) {
            showToast('✓ Image uploaded & optimized!');
            if (cb) cb();
          }
        };
        img.onerror = () => {
          saveSlideImage(epIdx, slideIdx, existing + fi, {
            url: ev.target.result,
            caption: file.name
          });
          loaded++;
          if (loaded === files.length) {
            showToast('✓ Image added!');
            if (cb) cb();
          }
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      const reader = new FileReader();
      reader.onload = (ev) => {
        saveSlideImage(epIdx, slideIdx, existing + fi, {
          url: ev.target.result,
          caption: file.name
        });
        loaded++;
        if (loaded === files.length) {
          showToast('✓ Media added!');
          if (cb) cb();
        }
      };
      reader.readAsDataURL(file);
    }
  });
}

function handleInsertObject(slideIdx, type) {
  const slides = getEpSlides(state.epIdx);
  const slide = slides[slideIdx];
  if (!slide.content) slide.content = {};

  if (type === 'card') {
    if (!slide.content.cards) slide.content.cards = [];
    const colors = ['cyan', 'emerald', 'amber', 'rose', 'purple', 'slate', 'dark'];
    const theme = colors[slide.content.cards.length % colors.length];
    slide.content.cards.push({
      badge: 'KEY POINT',
      theme: theme,
      icon: '📌',
      title: 'New Point ' + (slide.content.cards.length + 1),
      items: ['Click ✏️ Edit above to customize content.', 'Supports multiple bullet items.']
    });
    showToast('✓ Added new card');
  } else if (type === 'flow') {
    if (!slide.content.flowchart) slide.content.flowchart = [];
    slide.content.flowchart.push({
      step: 'STEP ' + (slide.content.flowchart.length + 1),
      icon: '🔍',
      title: 'New Procedure Step',
      desc: 'Describe procedure or protocol verification step here.'
    });
    showToast('✓ Added flowchart step');
  } else if (type === 'table') {
    slide.content.headers = ['Parameter', 'Male / Adult', 'Female / Juvenile'];
    slide.content.rows = [
      ['Primary Feature', 'Characteristic A', 'Characteristic B'],
      ['Secondary Metric', 'Detail 1', 'Detail 2']
    ];
    showToast('✓ Added comparison table');
  } else if (type === 'trap') {
    slide.content.trap = {
      title: '⚠️ EXAM TRAP / HIGH-YIELD PITFALL',
      subtitle: 'CRITICAL CLINICAL / LEGAL CAVEAT',
      desc: 'Do not confuse physiological suture closure with postmortem cranial fractures.'
    };
    showToast('✓ Added exam trap');
  } else if (type === 'bullets') {
    if (!slide.content.bullets) slide.content.bullets = [];
    slide.content.bullets.push('Key diagnostic takeaway point.');
    showToast('✓ Added bullet point');
  } else if (type === 'image') {
    openGalleryModal(slideIdx);
    return;
  }

  saveEpSlides(state.epIdx, slides);
  renderSlide();
}
'''
    code = code[:idx_ogm_start] + new_gallery_and_img + code[idx_se_start:]
    print('✓ Updated openGalleryModal, buildImageZone, handleImgUpload, handleInsertObject')
else:
    print('⚠️ Gallery & ImageZone slice failed')

# ── 6. Append AI Assistant & Settings Engine at end of app.js ──
ai_engine_code = '''

/* ══════════════════════════════════════════════════════════════════
   GEMINI AI SLIDE ASSISTANT & API SETTINGS ENGINE
   ══════════════════════════════════════════════════════════════════ */

let aiActiveSlideIdx = null;
let currentAIGeneratedSlide = null;

function getStoredGeminiKey() {
  return localStorage.getItem('gemini_api_key') || '';
}

function saveStoredGeminiKey(key) {
  if (key) {
    localStorage.setItem('gemini_api_key', key.trim());
  } else {
    localStorage.removeItem('gemini_api_key');
  }
}

async function callGeminiAPI(prompt, systemInstruction = '', jsonMode = true, model = 'gemini-3.8-flash') {
  const apiKey = getStoredGeminiKey();
  if (!apiKey) {
    throw new Error('MISSING_KEY');
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  if (systemInstruction) {
    payload.systemInstruction = { parts: [{ text: systemInstruction }] };
  }

  if (jsonMode) {
    payload.generationConfig = { responseMimeType: 'application/json' };
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errText = await res.text();
    let msg = `Gemini API returned status ${res.status}`;
    try {
      const parsed = JSON.parse(errText);
      if (parsed.error && parsed.error.message) msg = parsed.error.message;
    } catch(e) {}
    throw new Error(msg);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return text;
}

function openAISettingsModal() {
  const modal = document.getElementById('modal-ai-settings');
  const input = document.getElementById('input-gemini-key');
  const status = document.getElementById('key-test-status');
  if (!modal) return;

  input.value = getStoredGeminiKey();
  status.textContent = input.value ? 'Key is currently saved in browser.' : 'No key configured yet.';
  status.style.color = input.value ? '#059669' : '#64748B';
  modal.classList.remove('hidden');
}

function openAISlideModal(idx) {
  const apiKey = getStoredGeminiKey();
  if (!apiKey) {
    openAISettingsModal();
    showToast('⚠️ Please enter your Gemini API key first to use AI editing.');
    return;
  }

  aiActiveSlideIdx = idx;
  currentAIGeneratedSlide = null;

  const slides = getEpSlides(state.epIdx);
  const slide = slides[idx];
  const modal = document.getElementById('modal-ai-slide');
  const targetLabel = document.getElementById('ai-slide-target-label');
  const promptInput = document.getElementById('ai-slide-prompt');
  const previewWrap = document.getElementById('ai-slide-preview-wrap');
  const loading = document.getElementById('ai-slide-loading');

  targetLabel.textContent = `Slide #${idx+1}: "${slide.title}"`;
  promptInput.value = '';
  previewWrap.style.display = 'none';
  loading.style.display = 'none';

  modal.classList.remove('hidden');
}

async function executeAISlideGeneration(actionType) {
  const slides = getEpSlides(state.epIdx);
  const slide = slides[aiActiveSlideIdx];
  const customPrompt = document.getElementById('ai-slide-prompt').value.trim();
  const model = document.getElementById('ai-slide-model').value || 'gemini-3.8-flash';
  const loading = document.getElementById('ai-slide-loading');
  const loadingText = document.getElementById('ai-slide-loading-text');
  const previewWrap = document.getElementById('ai-slide-preview-wrap');
  const previewBox = document.getElementById('ai-slide-preview-box');

  loading.style.display = 'block';
  previewWrap.style.display = 'none';
  loadingText.textContent = `Gemini AI (${model}) is crafting your slide structure...`;

  const systemPrompt = `You are an elite Forensic Medicine Professor & Educational Slide Architect for the MedDuo series (Ain Shams University forensic curriculum).
Generate a structured JSON object representing an interactive, academic slide.
The output MUST adhere to this exact JSON schema:
{
  "title": "Concise Academic English Title",
  "content": {
    "cards": [
      {
        "badge": "KEY CONCEPT",
        "theme": "cyan" | "emerald" | "amber" | "rose" | "purple" | "slate" | "dark",
        "icon": "📌",
        "title": "Card Title",
        "items": ["Point 1", "Point 2", "Point 3"]
      }
    ],
    "flowchart": [
      {
        "step": "STEP 1",
        "icon": "🔍",
        "title": "Step Title",
        "desc": "Detailed explanation"
      }
    ],
    "trap": {
      "title": "⚠️ EXAM TRAP / HIGH-YIELD PITFALL",
      "subtitle": "CRITICAL CAVEAT",
      "desc": "Pitfall explanation"
    },
    "rows": [["Cell 1", "Cell 2"]],
    "headers": ["Col 1", "Col 2"],
    "bullets": ["Bullet 1", "Bullet 2"]
  },
  "recommended_image": {
    "name": "Image Name from Forensic Atlas",
    "caption": "Forensic caption"
  }
}
Choose the best structure based on user request (e.g. 2x2 cards for comparison/features, flowchart for timelines/processes, table for contrasts). Ensure forensic accuracy and crisp academic English.`;

  const userPrompt = `Current Slide Title: ${slide.title}
Current Content: ${JSON.stringify(slide.content || {})}
Action Requested: ${actionType || 'General Enhancement'}
User Guidance: ${customPrompt || 'Structure into high-yield educational cards with exam trap and clear forensic points.'}

Transform this slide into a world-class academic slide!`;

  try {
    const raw = await callGeminiAPI(userPrompt, systemPrompt, true, model);
    const parsed = JSON.parse(raw);
    currentAIGeneratedSlide = parsed;

    // Render preview
    loading.style.display = 'none';
    previewWrap.style.display = 'flex';

    let previewHTML = `<h4 style="margin:0 0 10px 0;color:#0F172A;">${escHtml(parsed.title || slide.title)}</h4>`;
    if (parsed.content?.cards?.length) {
      previewHTML += `<div style="font-weight:700;color:#0284C7;font-size:0.85rem;margin-bottom:6px;">Cards Grid (${parsed.content.cards.length} Cards):</div>`;
      previewHTML += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">';
      parsed.content.cards.forEach(c => {
        previewHTML += `<div style="background:#F8FAFC;border-top:3px solid var(--border);padding:6px 8px;border-radius:6px;font-size:0.75rem;">
          <strong>[${escHtml(c.badge || 'CARD')}] ${escHtml(c.title || '')}</strong>
          <ul style="margin:4px 0 0 16px;padding:0;">${(c.items || []).map(it => `<li>${escHtml(it)}</li>`).join('')}</ul>
        </div>`;
      });
      previewHTML += '</div>';
    }
    if (parsed.content?.flowchart?.length) {
      previewHTML += `<div style="font-weight:700;color:#0284C7;font-size:0.85rem;margin-bottom:6px;">Flowchart Steps (${parsed.content.flowchart.length}):</div>`;
      previewHTML += '<ol style="font-size:0.78rem;margin:0 0 10px 18px;">';
      parsed.content.flowchart.forEach(st => {
        previewHTML += `<li><strong>${escHtml(st.title || '')}</strong>: ${escHtml(st.desc || '')}</li>`;
      });
      previewHTML += '</ol>';
    }
    if (parsed.content?.trap) {
      previewHTML += `<div style="background:#FEF3C7;border:1px solid #F59E0B;border-radius:6px;padding:8px;font-size:0.78rem;color:#92400E;margin-bottom:8px;">
        <strong>${escHtml(parsed.content.trap.title || '⚠️ EXAM TRAP')}</strong>: ${escHtml(parsed.content.trap.desc || '')}
      </div>`;
    }
    previewBox.innerHTML = previewHTML;

  } catch(err) {
    loading.style.display = 'none';
    alert('AI Generation Error: ' + err.message);
  }
}

// ── Wire AI & Gallery Events on DOMContentLoaded ──
document.addEventListener('DOMContentLoaded', () => {
  // Gallery tab clicks
  document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchGalleryTab(btn.dataset.tab));
  });

  // Atlas gallery filter input & chips
  const gSearch = document.getElementById('gallery-search-input');
  if (gSearch) {
    gSearch.addEventListener('input', () => {
      const activeChip = document.querySelector('#gallery-filter-chips .gallery-chip.active');
      renderAtlasGallery(gSearch.value, activeChip ? activeChip.dataset.filter : 'all');
    });
  }

  document.querySelectorAll('#gallery-filter-chips .gallery-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#gallery-filter-chips .gallery-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const kw = gSearch ? gSearch.value : '';
      renderAtlasGallery(kw, chip.dataset.filter);
    });
  });

  // Online search triggers
  const btnRunOnline = document.getElementById('btn-run-online-search');
  const onlineIn = document.getElementById('online-search-input');
  if (btnRunOnline && onlineIn) {
    btnRunOnline.addEventListener('click', () => runOnlineSearch(onlineIn.value.trim()));
    onlineIn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') runOnlineSearch(onlineIn.value.trim());
    });
  }
  document.querySelectorAll('.online-quick-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      if (onlineIn) onlineIn.value = tag.dataset.query;
      runOnlineSearch(tag.dataset.query);
    });
  });

  // Direct URL triggers
  const urlIn = document.getElementById('direct-img-url');
  const capIn = document.getElementById('direct-img-caption');
  const prevBtn = document.getElementById('btn-preview-url');
  const insertUrlBtn = document.getElementById('btn-insert-url-img');
  const prevBox = document.getElementById('url-img-preview-box');

  if (prevBtn && urlIn && prevBox) {
    prevBtn.addEventListener('click', () => {
      const val = urlIn.value.trim();
      if (!val) return;
      prevBox.innerHTML = `<img src="${val}" alt="Preview" style="max-width:100%;max-height:180px;object-fit:contain;border-radius:6px;" onerror="this.parentElement.innerHTML='<span style=\\'color:#EF4444;font-size:0.8rem;\\'>Failed to load image from URL. Check URL.</span>'" />`;
    });
  }

  if (insertUrlBtn && urlIn) {
    insertUrlBtn.addEventListener('click', () => {
      const val = urlIn.value.trim();
      const cap = (capIn ? capIn.value.trim() : '') || 'External Web Image';
      if (!val) { alert('Please enter an image URL.'); return; }
      addGalleryImageToSlide(state.epIdx, currentGallerySlideIdx, val, cap);
      document.getElementById('modal-gallery').classList.add('hidden');
    });
  }

  // AI Slide Quick Actions
  document.querySelectorAll('.ai-quick-action').forEach(btn => {
    btn.addEventListener('click', () => executeAISlideGeneration(btn.dataset.action));
  });

  const runAIBtn = document.getElementById('btn-run-ai-slide');
  if (runAIBtn) {
    runAIBtn.addEventListener('click', () => executeAISlideGeneration('custom'));
  }

  const applyAIBtn = document.getElementById('btn-apply-ai-slide');
  if (applyAIBtn) {
    applyAIBtn.addEventListener('click', () => {
      if (!currentAIGeneratedSlide || aiActiveSlideIdx === null) return;
      const slides = getEpSlides(state.epIdx);
      const slide = slides[aiActiveSlideIdx];
      
      // Duplicate old version to stash for safe undo!
      addToStash(JSON.parse(JSON.stringify(slide)), `Ep ${state.epIdx+1} Slide #${aiActiveSlideIdx+1} (Pre-AI Backup)`);

      if (currentAIGeneratedSlide.title) slide.title = currentAIGeneratedSlide.title;
      if (currentAIGeneratedSlide.content) slide.content = currentAIGeneratedSlide.content;

      saveEpSlides(state.epIdx, slides);
      document.getElementById('modal-ai-slide').classList.add('hidden');
      renderSlide();
      showToast('✓ AI enhancements applied! (Pre-AI version saved to Stash)');
    });
  }

  const discardAIBtn = document.getElementById('btn-discard-ai-slide');
  if (discardAIBtn) {
    discardAIBtn.addEventListener('click', () => {
      document.getElementById('ai-slide-preview-wrap').style.display = 'none';
      currentAIGeneratedSlide = null;
    });
  }

  // AI Settings Modal wiring
  const btnAISettings = document.getElementById('btn-ai-settings');
  if (btnAISettings) btnAISettings.addEventListener('click', openAISettingsModal);

  const btnSaveKey = document.getElementById('btn-save-gemini-key');
  if (btnSaveKey) {
    btnSaveKey.addEventListener('click', () => {
      const val = document.getElementById('input-gemini-key').value.trim();
      saveStoredGeminiKey(val);
      document.getElementById('key-test-status').textContent = '✓ Key saved successfully!';
      document.getElementById('key-test-status').style.color = '#059669';
      showToast('✓ Gemini API key saved!');
      setTimeout(() => document.getElementById('modal-ai-settings').classList.add('hidden'), 800);
    });
  }

  const btnClearKey = document.getElementById('btn-clear-gemini-key');
  if (btnClearKey) {
    btnClearKey.addEventListener('click', () => {
      saveStoredGeminiKey('');
      document.getElementById('input-gemini-key').value = '';
      document.getElementById('key-test-status').textContent = 'Key cleared.';
      document.getElementById('key-test-status').style.color = '#64748B';
      showToast('Key cleared');
    });
  }

  const btnTestKey = document.getElementById('btn-test-gemini-key');
  if (btnTestKey) {
    btnTestKey.addEventListener('click', async () => {
      const val = document.getElementById('input-gemini-key').value.trim();
      const statusEl = document.getElementById('key-test-status');
      if (!val) {
        statusEl.textContent = 'Please enter a key first.';
        statusEl.style.color = '#EF4444';
        return;
      }
      statusEl.textContent = 'Testing connection with Gemini 3.8 Flash...';
      statusEl.style.color = '#0284C7';
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${val}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: 'Hello' }] }] })
        });
        if (res.ok) {
          statusEl.textContent = '✓ Connection successful! API key is verified.';
          statusEl.style.color = '#059669';
        } else {
          statusEl.textContent = `API returned error status ${res.status}`;
          statusEl.style.color = '#EF4444';
        }
      } catch(e) {
        statusEl.textContent = 'Network error: ' + e.message;
        statusEl.style.color = '#EF4444';
      }
    });
  }

  const btnToggleVis = document.getElementById('btn-toggle-key-vis');
  if (btnToggleVis) {
    btnToggleVis.addEventListener('click', () => {
      const inEl = document.getElementById('input-gemini-key');
      inEl.type = inEl.type === 'password' ? 'text' : 'password';
    });
  }

  const closeAISettings = document.getElementById('modal-ai-settings-close');
  if (closeAISettings) {
    closeAISettings.addEventListener('click', () => document.getElementById('modal-ai-settings').classList.add('hidden'));
  }
  const closeAISlide = document.getElementById('modal-ai-slide-close');
  if (closeAISlide) {
    closeAISlide.addEventListener('click', () => document.getElementById('modal-ai-slide').classList.add('hidden'));
  }
});
'''

code += ai_engine_code
print('✓ Appended AI Slide Assistant & Settings engine')

with open('slides-site/app.js', 'w', encoding='utf-8') as f:
    f.write(code)

print('SUCCESS: slides-site/app.js updated completely!')
