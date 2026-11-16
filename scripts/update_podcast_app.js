const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '..', 'podcast-site', 'app.js');
const content = fs.readFileSync(appJsPath, 'utf8');

const stateMarker = 'const state = {';
const stateIdx = content.indexOf(stateMarker);
if (stateIdx === -1) {
  throw new Error('Could not find const state in app.js');
}

const jsCodeAfterState = `const state = {
  currentEpisode: null,
  darkMode: false,
  readingMode: false,
  filter: 'all',
  autoScrollPlaying: false,
  autoScrollTimer: null,
  scrollSpeeds: { slow: 20, medium: 50, fast: 100 },
  modalMode: null,
  targetItemIndex: null,
  targetInsertIndex: null
};

// ─── DOM REFS ────────────────────────────────────────────────
const $viewGrid        = document.getElementById('view-grid');
const $viewEpisode     = document.getElementById('view-episode');
const $epGrid          = document.getElementById('episodes-grid');
const $dialogue        = document.getElementById('dialogue-container');
const $reading         = document.getElementById('reading-container');
const $epBadge         = document.getElementById('ep-number-badge');
const $epTitle         = document.getElementById('ep-title');
const $epDesc          = document.getElementById('ep-desc');
const $btnBack         = document.getElementById('btn-back');
const $btnDark         = document.getElementById('btn-dark-mode');
const $btnReading      = document.getElementById('btn-reading-mode');
const $btnScroll       = document.getElementById('btn-autoscroll');
const $scrollSpeed     = document.getElementById('scroll-speed');
const $btnReset        = document.getElementById('btn-reset-episode');
const $filterBtns      = document.querySelectorAll('.filter-btn');

const $btnAddStart     = document.getElementById('btn-add-start');
const $btnExportMd     = document.getElementById('btn-export-md');
const $btnCopyText     = document.getElementById('btn-copy-text');
const $btnAddEnd       = document.getElementById('btn-add-end');
const $btnEditEpMeta   = document.getElementById('btn-edit-ep-meta');

const $modalEditMeta   = document.getElementById('modal-edit-meta');
const $metaTitleInput  = document.getElementById('meta-title-input');
const $metaDescInput   = document.getElementById('meta-desc-input');
const $btnSaveMeta     = document.getElementById('btn-save-meta');
const $btnRevertMeta   = document.getElementById('btn-revert-meta');

const $modalEditItem   = document.getElementById('modal-edit-item');
const $itemModalTitle  = document.getElementById('item-modal-title');
const $itemTextInput   = document.getElementById('item-text-input');
const $btnSaveItem     = document.getElementById('btn-save-item');
const $speakerPills    = document.querySelectorAll('.speaker-pill');
const $customSpeakerWrap = document.getElementById('custom-speaker-wrap');
const $customSpeakerInput = document.getElementById('custom-speaker-input');

// ─── LOCALSTORAGE HELPERS ────────────────────────────────────
function lsKey(epIdx) { return 'medduo_ep_' + epIdx; }

function getEpisodeData(epIdx) {
  try {
    const raw = localStorage.getItem(lsKey(epIdx));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return {
          title: EPISODES[epIdx].title,
          description: EPISODES[epIdx].description,
          dialogue: parsed
        };
      }
      return {
        title: parsed.title || EPISODES[epIdx].title,
        description: parsed.description !== undefined ? parsed.description : EPISODES[epIdx].description,
        dialogue: parsed.dialogue || deepClone(EPISODES[epIdx].dialogue)
      };
    }
  } catch(e) {}

  return {
    title: EPISODES[epIdx].title,
    description: EPISODES[epIdx].description,
    dialogue: deepClone(EPISODES[epIdx].dialogue)
  };
}

function saveEpisodeData(epIdx, epData) {
  localStorage.setItem(lsKey(epIdx), JSON.stringify(epData));
}

function deleteEpisodeData(epIdx) {
  localStorage.removeItem(lsKey(epIdx));
}

function getDialogueData(epIdx) {
  return getEpisodeData(epIdx).dialogue;
}

function getEpisodeMeta(epIdx) {
  const data = getEpisodeData(epIdx);
  return { title: data.title, description: data.description };
}

function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

// ─── INIT ────────────────────────────────────────────────────
function init() {
  const savedDark    = localStorage.getItem('medduo_dark');
  const savedReading = localStorage.getItem('medduo_reading');
  if (savedDark === 'true') setDarkMode(true);
  if (savedReading === 'true') setReadingMode(true);

  renderGrid();
  bindHeaderControls();
  bindToolbar();
  bindModals();
}

// ─── GRID ────────────────────────────────────────────────────
function renderGrid() {
  $epGrid.innerHTML = '';
  EPISODES.forEach(ep => {
    const meta = getEpisodeMeta(ep.index);
    const card = document.createElement('div');
    card.className = 'episode-card';
    card.innerHTML = \`
      <div class="card-ep-number">الحلقة \${ep.number}</div>
      <div class="card-ep-title">\${escHtml(meta.title)}</div>
      <div class="card-ep-desc">\${escHtml(meta.description)}</div>
      <div class="card-footer">
        <span style="font-size:0.75rem; color:var(--cyan); font-weight:700;">استماع وتعديل</span>
        <span class="card-arrow">←</span>
      </div>
    \`;
    card.addEventListener('click', () => openEpisode(ep.index));
    $epGrid.appendChild(card);
  });
}

// ─── EPISODE VIEW ────────────────────────────────────────────
function openEpisode(idx) {
  state.currentEpisode = idx;
  const ep = EPISODES[idx];
  const meta = getEpisodeMeta(idx);

  $epBadge.textContent = 'الحلقة ' + ep.number;
  $epTitle.textContent = meta.title;
  $epDesc.textContent  = meta.description;

  stopAutoScroll();
  state.filter = 'all';
  $filterBtns.forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) allBtn.classList.add('active');

  renderDialogue(idx);
  if (state.readingMode) renderReading(idx);

  showView('episode');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showView(which) {
  $viewGrid.classList.toggle('active', which === 'grid');
  $viewEpisode.classList.toggle('active', which === 'episode');
}

function renderDialogue(idx) {
  $dialogue.innerHTML = '';
  const data = getDialogueData(idx);

  data.forEach((item, i) => {
    // Add separator button before each item
    $dialogue.appendChild(makeAddButton(i, idx));

    if (item.type === 'section_header') {
      $dialogue.appendChild(makeSectionHeader(item, i, idx));
    } else if (item.type === 'sub_header') {
      $dialogue.appendChild(makeSubHeader(item, i, idx));
    } else {
      $dialogue.appendChild(makeBubble(item, i, idx));
    }
  });

  applyFilter();
}

function renderReading(idx) {
  $reading.innerHTML = '';
  const data = getDialogueData(idx);
  const filter = state.filter;

  data.forEach((item, i) => {
    if (item.type === 'section_header') {
      const h = document.createElement('div');
      h.className = 'reading-section-title';
      h.innerHTML = \`
        <span>📌 \${escHtml(item.text)}</span>
        <button class="sh-action-btn edit-btn" title="تعديل هذا العنوان">✏️ تعديل</button>
      \`;
      h.querySelector('.edit-btn').addEventListener('click', () => openEditItemModal(i));
      $reading.appendChild(h);
    } else if (item.type === 'sub_header') {
      const h = document.createElement('div');
      h.className = 'sub-header-block';
      h.innerHTML = \`
        <div class="sub-header-wrap">
          <span class="sub-header-text">\${escHtml(item.text)}</span>
          <button class="sh-action-btn edit-btn" title="تعديل">✏️</button>
        </div>
      \`;
      h.querySelector('.edit-btn').addEventListener('click', () => openEditItemModal(i));
      $reading.appendChild(h);
    } else if (item.type === 'speaker') {
      if (filter !== 'all' && item.speaker !== filter) return;

      const block = document.createElement('div');
      const spkClass = (item.speaker === 'dr_tarek' || item.speaker === 'atef') ? item.speaker : 'custom';
      block.className = 'reading-block ' + spkClass;

      let spkLabel = '🩺 د. طارق';
      if (item.speaker === 'atef') spkLabel = '🎓 عاطف';
      else if (item.speaker !== 'dr_tarek') spkLabel = '👤 ' + item.speaker;

      block.innerHTML = \`
        <div class="reading-header">
          <span class="reading-speaker-tag">\${spkLabel}</span>
          <div class="bubble-actions">
            <button class="bubble-action-btn edit-btn">✏️ تعديل</button>
            <button class="bubble-action-btn del-btn">🗑️ حذف</button>
          </div>
        </div>
        <div class="reading-text">\${escHtml(item.text)}</div>
      \`;

      block.querySelector('.edit-btn').addEventListener('click', () => openEditItemModal(i));
      block.querySelector('.del-btn').addEventListener('click', () => {
        if (confirm('هل تريد حذف هذه الفقرة؟')) {
          deleteDialogueItem(idx, i);
        }
      });

      $reading.appendChild(block);
    }
  });
}

// ─── BUBBLE FACTORY ──────────────────────────────────────────
function makeBubble(item, itemIdx, epIdx) {
  const wrapper = document.createElement('div');
  const spkClass = (item.speaker === 'dr_tarek' || item.speaker === 'atef') ? item.speaker : 'custom';
  wrapper.className = \`bubble-wrapper \${spkClass}\`;
  wrapper.dataset.itemIndex = itemIdx;

  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  // Header row
  const headerRow = document.createElement('div');
  headerRow.className = 'bubble-header-row';

  const speakerEl = document.createElement('div');
  speakerEl.className = 'bubble-speaker';
  let spkLabel = '🩺 د. طارق';
  if (item.speaker === 'atef') spkLabel = '🎓 عاطف';
  else if (item.speaker !== 'dr_tarek') spkLabel = '👤 ' + item.speaker;
  speakerEl.textContent = spkLabel;

  // Actions (Clear, visible buttons for everyone)
  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'bubble-actions';

  const editBtn = document.createElement('button');
  editBtn.className = 'bubble-action-btn edit-btn';
  editBtn.title = 'تعديل هذا الكلام والمتحدث';
  editBtn.innerHTML = '✏️ <span>تعديل</span>';
  editBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openEditItemModal(itemIdx);
  });

  const delBtn = document.createElement('button');
  delBtn.className = 'bubble-action-btn del-btn';
  delBtn.title = 'حذف هذا الكلام';
  delBtn.innerHTML = '🗑️ <span>حذف</span>';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (confirm('هل أنت متأكد من حذف هذه الفقرة؟')) {
      deleteDialogueItem(epIdx, itemIdx);
    }
  });

  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(delBtn);

  headerRow.appendChild(speakerEl);
  headerRow.appendChild(actionsDiv);

  // Text
  const textEl = document.createElement('div');
  textEl.className = 'bubble-text';
  textEl.textContent = item.text;

  // Double click as shortcut
  bubble.addEventListener('dblclick', () => {
    openEditItemModal(itemIdx);
  });

  bubble.appendChild(headerRow);
  bubble.appendChild(textEl);
  wrapper.appendChild(bubble);
  return wrapper;
}

function makeSectionHeader(item, itemIdx, epIdx) {
  const div = document.createElement('div');
  div.className = 'section-header-block';
  div.dataset.itemIndex = itemIdx;

  div.innerHTML = \`
    <div class="sh-line"></div>
    <div class="sh-badge-wrap">
      <span class="sh-text">\${escHtml(item.text)}</span>
      <div class="sh-actions">
        <button class="sh-action-btn edit-btn" title="تعديل هذا العنوان">✏️ تعديل</button>
        <button class="sh-action-btn del-btn" title="حذف هذا العنوان">🗑️ حذف</button>
      </div>
    </div>
    <div class="sh-line"></div>
  \`;

  div.querySelector('.edit-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openEditItemModal(itemIdx);
  });

  div.querySelector('.del-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (confirm('هل تريد حذف عنوان المحطة هذا؟')) {
      deleteDialogueItem(epIdx, itemIdx);
    }
  });

  return div;
}

function makeSubHeader(item, itemIdx, epIdx) {
  const div = document.createElement('div');
  div.className = 'sub-header-block';
  div.dataset.itemIndex = itemIdx;

  div.innerHTML = \`
    <div class="sub-header-wrap">
      <span class="sub-header-text">\${escHtml(item.text)}</span>
      <div class="sh-actions">
        <button class="sh-action-btn edit-btn" title="تعديل">✏️</button>
        <button class="sh-action-btn del-btn" title="حذف">🗑️</button>
      </div>
    </div>
  \`;

  div.querySelector('.edit-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openEditItemModal(itemIdx);
  });

  div.querySelector('.del-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (confirm('هل تريد حذف هذا العنوان الفرعي؟')) {
      deleteDialogueItem(epIdx, itemIdx);
    }
  });

  return div;
}

function makeAddButton(afterIndex, epIdx) {
  const addDiv = document.createElement('div');
  addDiv.className = 'add-between';
  addDiv.dataset.afterIndex = afterIndex;

  const btn = document.createElement('button');
  btn.className = 'add-between-btn';
  btn.title = 'إضافة فقرة أو محطة هنا';
  btn.innerHTML = '➕ <span>إضافة فقرة هنا</span>';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openAddItemModal(afterIndex);
  });

  addDiv.appendChild(btn);
  return addDiv;
}

function deleteDialogueItem(epIdx, itemIdx) {
  const epData = getEpisodeData(epIdx);
  epData.dialogue.splice(itemIdx, 1);
  saveEpisodeData(epIdx, epData);
  renderDialogue(epIdx);
  if (state.readingMode) renderReading(epIdx);
}

// ─── MODALS LOGIC ────────────────────────────────────────────
let currentSelectedType = 'speaker';
let currentSelectedSpeaker = 'dr_tarek';

function setPillActive(type, speaker, customName = '') {
  currentSelectedType = type;
  currentSelectedSpeaker = speaker;

  $speakerPills.forEach(pill => {
    const pType = pill.dataset.type;
    const pSpk = pill.dataset.speaker;
    const match = (pType === type) && (type !== 'speaker' || pSpk === speaker);
    pill.classList.toggle('active', match);
  });

  if (speaker === 'custom') {
    $customSpeakerWrap.style.display = 'block';
    $customSpeakerInput.value = customName || '';
  } else {
    $customSpeakerWrap.style.display = 'none';
  }
}

function openEditMetaModal() {
  if (state.currentEpisode === null) return;
  const meta = getEpisodeMeta(state.currentEpisode);
  $metaTitleInput.value = meta.title;
  $metaDescInput.value  = meta.description;
  $modalEditMeta.style.display = 'flex';
  $metaTitleInput.focus();
}

function closeEditMetaModal() {
  $modalEditMeta.style.display = 'none';
}

function saveEpisodeMeta() {
  if (state.currentEpisode === null) return;
  const newTitle = $metaTitleInput.value.trim();
  const newDesc  = $metaDescInput.value.trim();

  if (!newTitle) {
    alert('يرجى كتابة عنوان للحلقة!');
    return;
  }

  const epData = getEpisodeData(state.currentEpisode);
  epData.title = newTitle;
  epData.description = newDesc;
  saveEpisodeData(state.currentEpisode, epData);

  $epTitle.textContent = newTitle;
  $epDesc.textContent  = newDesc;
  closeEditMetaModal();
  renderGrid();
}

function revertEpisodeMeta() {
  if (state.currentEpisode === null) return;
  if (!confirm('هل تريد استعادة العنوان والوصف الأصليين للحلقة؟')) return;
  const orig = EPISODES[state.currentEpisode];
  const epData = getEpisodeData(state.currentEpisode);
  epData.title = orig.title;
  epData.description = orig.description;
  saveEpisodeData(state.currentEpisode, epData);

  $epTitle.textContent = orig.title;
  $epDesc.textContent  = orig.description;
  closeEditMetaModal();
  renderGrid();
}

function openEditItemModal(itemIdx) {
  if (state.currentEpisode === null) return;
  state.modalMode = 'edit';
  state.targetItemIndex = itemIdx;
  $itemModalTitle.textContent = '✏️ تعديل العنصر';

  const epData = getEpisodeData(state.currentEpisode);
  const item = epData.dialogue[itemIdx];
  if (!item) return;

  $itemTextInput.value = item.text || '';

  if (item.type === 'section_header') {
    setPillActive('section_header', '');
  } else if (item.type === 'sub_header') {
    setPillActive('sub_header', '');
  } else {
    if (item.speaker === 'dr_tarek' || item.speaker === 'atef') {
      setPillActive('speaker', item.speaker);
    } else {
      setPillActive('speaker', 'custom', item.speaker);
    }
  }

  $modalEditItem.style.display = 'flex';
  $itemTextInput.focus();
}

function openAddItemModal(insertIndex) {
  if (state.currentEpisode === null) return;
  state.modalMode = 'add';
  state.targetInsertIndex = insertIndex;
  $itemModalTitle.textContent = '➕ إضافة عنصر جديد';

  $itemTextInput.value = '';
  setPillActive('speaker', 'dr_tarek');

  $modalEditItem.style.display = 'flex';
  $itemTextInput.focus();
}

function closeEditItemModal() {
  $modalEditItem.style.display = 'none';
  state.modalMode = null;
  state.targetItemIndex = null;
  state.targetInsertIndex = null;
}

function saveItemModal() {
  if (state.currentEpisode === null) return;
  const text = $itemTextInput.value.trim();
  if (!text) {
    alert('يرجى إدخال النص!');
    return;
  }

  let finalType = currentSelectedType;
  let finalSpeaker = currentSelectedSpeaker;
  if (finalType === 'speaker' && finalSpeaker === 'custom') {
    const cName = $customSpeakerInput.value.trim();
    finalSpeaker = cName || 'متحدث';
  }

  const epData = getEpisodeData(state.currentEpisode);
  const itemObj = { type: finalType };
  if (finalType === 'speaker') {
    itemObj.speaker = finalSpeaker;
  }
  itemObj.text = text;

  if (state.modalMode === 'edit') {
    if (state.targetItemIndex !== null && epData.dialogue[state.targetItemIndex]) {
      epData.dialogue[state.targetItemIndex] = itemObj;
    }
  } else if (state.modalMode === 'add') {
    const idx = (state.targetInsertIndex !== null) ? state.targetInsertIndex : epData.dialogue.length;
    epData.dialogue.splice(idx, 0, itemObj);
  }

  saveEpisodeData(state.currentEpisode, epData);
  closeEditItemModal();
  renderDialogue(state.currentEpisode);
  if (state.readingMode) renderReading(state.currentEpisode);
}

function bindModals() {
  if ($btnEditEpMeta) $btnEditEpMeta.addEventListener('click', openEditMetaModal);
  if ($btnSaveMeta) $btnSaveMeta.addEventListener('click', saveEpisodeMeta);
  if ($btnRevertMeta) $btnRevertMeta.addEventListener('click', revertEpisodeMeta);

  if ($btnSaveItem) $btnSaveItem.addEventListener('click', saveItemModal);

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.close;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'none';
    });
  });

  [$modalEditMeta, $modalEditItem].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  });

  $speakerPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const type = pill.dataset.type;
      const speaker = pill.dataset.speaker;
      setPillActive(type, speaker);
    });
  });
}

// ─── FILTER ──────────────────────────────────────────────────
function applyFilter() {
  const filter = state.filter;
  document.querySelectorAll('.bubble-wrapper').forEach(w => {
    if (filter === 'all') {
      w.classList.remove('filtered');
    } else {
      w.classList.toggle('filtered', !w.classList.contains(filter));
    }
  });
}

$filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    $filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.filter = btn.dataset.filter;
    if (state.readingMode && state.currentEpisode !== null) {
      renderReading(state.currentEpisode);
    } else {
      applyFilter();
    }
  });
});

// ─── AUTO-SCROLL ──────────────────────────────────────────────
let lastScrollY = 0;

function startAutoScroll() {
  const speedKey = $scrollSpeed.value;
  const px = state.scrollSpeeds[speedKey];
  state.autoScrollPlaying = true;
  $btnScroll.textContent = '⏸';
  $btnScroll.classList.add('playing');
  lastScrollY = window.scrollY;

  state.autoScrollTimer = setInterval(() => {
    window.scrollBy({ top: px, behavior: 'instant' });
    const diff = Math.abs(window.scrollY - lastScrollY - px);
    if (diff > 60) {
      stopAutoScroll();
    }
    lastScrollY = window.scrollY;
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
      stopAutoScroll();
    }
  }, 200);
}

function stopAutoScroll() {
  state.autoScrollPlaying = false;
  clearInterval(state.autoScrollTimer);
  $btnScroll.textContent = '▶';
  $btnScroll.classList.remove('playing');
}

// ─── EXPORT & COPY ───────────────────────────────────────────
function exportCurrentEpisodeMarkdown() {
  if (state.currentEpisode === null) return;
  const epData = getEpisodeData(state.currentEpisode);
  const epNum = EPISODES[state.currentEpisode].number;

  let md = '# الحلقة ' + epNum + ': ' + epData.title + '\\n\\n';
  md += '> **الوصف:** ' + epData.description + '\\n\\n';
  md += '---\\n\\n';

  epData.dialogue.forEach(item => {
    if (item.type === 'section_header') {
      md += '\\n## 📌 ' + item.text + '\\n\\n';
    } else if (item.type === 'sub_header') {
      md += '\\n### 🔹 ' + item.text + '\\n\\n';
    } else if (item.type === 'speaker') {
      const spk = item.speaker === 'dr_tarek' ? 'د. طارق' : (item.speaker === 'atef' ? 'عاطف' : item.speaker);
      md += '**' + spk + ':** ' + item.text + '\\n\\n';
    }
  });

  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'medduo-episode-' + epNum + '-custom.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function copyCurrentEpisodeText() {
  if (state.currentEpisode === null) return;
  const epData = getEpisodeData(state.currentEpisode);
  const epNum = EPISODES[state.currentEpisode].number;

  let text = 'الحلقة ' + epNum + ': ' + epData.title + '\\n' + epData.description + '\\n\\n';
  epData.dialogue.forEach(item => {
    if (item.type === 'section_header') {
      text += '\\n[ ' + item.text + ' ]\\n\\n';
    } else if (item.type === 'sub_header') {
      text += '--- ' + item.text + ' ---\\n\\n';
    } else if (item.type === 'speaker') {
      const spk = item.speaker === 'dr_tarek' ? 'د. طارق' : (item.speaker === 'atef' ? 'عاطف' : item.speaker);
      text += spk + ': ' + item.text + '\\n\\n';
    }
  });

  navigator.clipboard.writeText(text).then(() => {
    alert('✅ تم نسخ نص الحلقة بالكامل إلى الحافظة بنجاح!');
  }).catch(() => {
    alert('تم تجهيز النص للنسخ.');
  });
}

function bindToolbar() {
  $btnScroll.addEventListener('click', () => {
    if (state.autoScrollPlaying) stopAutoScroll();
    else startAutoScroll();
  });

  $scrollSpeed.addEventListener('change', () => {
    if (state.autoScrollPlaying) {
      stopAutoScroll();
      startAutoScroll();
    }
  });

  if ($btnAddStart) {
    $btnAddStart.addEventListener('click', () => openAddItemModal(0));
  }

  if ($btnAddEnd) {
    $btnAddEnd.addEventListener('click', () => {
      const epData = getEpisodeData(state.currentEpisode);
      openAddItemModal(epData.dialogue.length);
    });
  }

  if ($btnExportMd) {
    $btnExportMd.addEventListener('click', exportCurrentEpisodeMarkdown);
  }

  if ($btnCopyText) {
    $btnCopyText.addEventListener('click', copyCurrentEpisodeText);
  }

  $btnReset.addEventListener('click', () => {
    if (state.currentEpisode === null) return;
    if (confirm('هل تريد إعادة ضبط هذه الحلقة وحذف جميع تعديلاتك (العنوان، الوصف، والنصوص) والعودة للأصل؟')) {
      deleteEpisodeData(state.currentEpisode);
      const ep = EPISODES[state.currentEpisode];
      $epTitle.textContent = ep.title;
      $epDesc.textContent = ep.description;
      renderDialogue(state.currentEpisode);
      if (state.readingMode) renderReading(state.currentEpisode);
      renderGrid();
    }
  });
}

// ─── HEADER CONTROLS ─────────────────────────────────────────
function bindHeaderControls() {
  $btnBack.addEventListener('click', () => {
    stopAutoScroll();
    showView('grid');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $btnDark.addEventListener('click', () => setDarkMode(!state.darkMode));
  $btnReading.addEventListener('click', () => setReadingMode(!state.readingMode));
}

function setDarkMode(on) {
  state.darkMode = on;
  document.body.classList.toggle('dark-mode', on);
  document.body.classList.toggle('light-mode', !on);
  $btnDark.querySelector('.icon').textContent = on ? '☀️' : '🌙';
  $btnDark.querySelector('.label').textContent = on ? 'نهاري' : 'ليلي';
  $btnDark.classList.toggle('active', on);
  localStorage.setItem('medduo_dark', on);
}

function setReadingMode(on) {
  state.readingMode = on;
  $btnReading.classList.toggle('active', on);
  $btnReading.querySelector('.label').textContent = on ? 'فقاعات' : 'قراءة';

  if (state.currentEpisode !== null) {
    if (on) {
      $dialogue.style.display = 'none';
      $reading.style.display = 'block';
      renderReading(state.currentEpisode);
    } else {
      $dialogue.style.display = 'flex';
      $reading.style.display = 'none';
    }
  }
  localStorage.setItem('medduo_reading', on);
}

// ─── UTILS ───────────────────────────────────────────────────
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── START ───────────────────────────────────────────────────
init();
`;

const newFullContent = content.substring(0, stateIdx) + jsCodeAfterState;
fs.writeFileSync(appJsPath, newFullContent, 'utf8');
console.log('✅ Successfully updated podcast-site/app.js!');
