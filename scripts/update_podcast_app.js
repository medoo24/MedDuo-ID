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
  targetInsertIndex: null,
  // Shared colleague data
  sharedData: null,
  isViewingShared: false
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
const $btnShareModal   = document.getElementById('btn-share-modal');
const $btnImportSingle = document.getElementById('btn-import-single');
const $btnCopyText     = document.getElementById('btn-copy-text');
const $btnAddEnd       = document.getElementById('btn-add-end');
const $btnEditEpMeta   = document.getElementById('btn-edit-ep-meta');

// Grid collaborative toolbar
const $btnGridExportAllMd   = document.getElementById('btn-grid-export-all-md');
const $btnGridExportAllJson = document.getElementById('btn-grid-export-all-json');
const $btnGridImport        = document.getElementById('btn-grid-import');

// Shared Banner
const $sharedBanner    = document.getElementById('shared-banner');
const $btnSaveShared   = document.getElementById('btn-save-shared');
const $btnDismissShared= document.getElementById('btn-dismiss-shared');

// Modals
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

// Share & Export Modal
const $modalShareExport = document.getElementById('modal-share-export');
const $btnDoExportMd    = document.getElementById('btn-do-export-md');
const $btnDoExportJson  = document.getElementById('btn-do-export-json');
const $btnDoCopyLink    = document.getElementById('btn-do-copy-link');

// Import Modal
const $modalImport           = document.getElementById('modal-import');
const $importFileInput       = document.getElementById('import-file-input');
const $importTextInput       = document.getElementById('import-text-input');
const $importTargetEpGroup   = document.getElementById('import-target-ep-group');
const $importTargetEpSelect  = document.getElementById('import-target-ep-select');
const $btnDoImport           = document.getElementById('btn-do-import');

// ─── LOCALSTORAGE HELPERS ────────────────────────────────────
function lsKey(epIdx) { return 'medduo_ep_' + epIdx; }

function getEpisodeData(epIdx) {
  // If actively viewing a colleague's shared version for this episode
  if (state.isViewingShared && state.sharedData && state.currentEpisode === epIdx) {
    return {
      title: state.sharedData.title || EPISODES[epIdx].title,
      description: state.sharedData.description || EPISODES[epIdx].description,
      dialogue: state.sharedData.dialogue || deepClone(EPISODES[epIdx].dialogue)
    };
  }

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

  populateImportTargetSelect();
  renderGrid();
  bindHeaderControls();
  bindToolbar();
  bindModals();
  bindGridTools();
  checkSharedHash();
}

function populateImportTargetSelect() {
  if (!$importTargetEpSelect) return;
  $importTargetEpSelect.innerHTML = '';
  EPISODES.forEach(ep => {
    const opt = document.createElement('option');
    opt.value = ep.index;
    opt.textContent = 'الحلقة ' + ep.number + ': ' + ep.title;
    $importTargetEpSelect.appendChild(opt);
  });
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
function openEpisode(idx, isShared = false) {
  state.currentEpisode = idx;
  if (!isShared) {
    state.isViewingShared = false;
    if ($sharedBanner) $sharedBanner.style.display = 'none';
  }

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

  // Actions (Always visible)
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

// ─── SHARE & EXPORT LOGIC ────────────────────────────────────
function openShareModal() {
  if (state.currentEpisode === null) return;
  if ($modalShareExport) $modalShareExport.style.display = 'flex';
}

function closeShareModal() {
  if ($modalShareExport) $modalShareExport.style.display = 'none';
}

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

  downloadBlob(md, 'medduo-episode-' + epNum + '-custom.md', 'text/markdown;charset=utf-8');
}

function exportCurrentEpisodeJson() {
  if (state.currentEpisode === null) return;
  const epData = getEpisodeData(state.currentEpisode);
  const epNum = EPISODES[state.currentEpisode].number;

  const pkg = {
    app: 'MedDuo-Podcast',
    version: '2.0',
    type: 'single_episode',
    epNumber: epNum,
    epIndex: state.currentEpisode,
    exportedAt: new Date().toISOString(),
    data: epData
  };

  downloadBlob(JSON.stringify(pkg, null, 2), 'medduo-ep' + epNum + '-share.json', 'application/json');
}

function copyShareableLink() {
  if (state.currentEpisode === null) return;
  const epData = getEpisodeData(state.currentEpisode);
  const epNum = EPISODES[state.currentEpisode].number;

  const pkg = {
    epNumber: epNum,
    epIndex: state.currentEpisode,
    data: epData
  };

  try {
    const jsonStr = JSON.stringify(pkg);
    const b64 = btoa(unescape(encodeURIComponent(jsonStr)));
    const url = window.location.origin + window.location.pathname + '#shared=' + encodeURIComponent(b64);

    navigator.clipboard.writeText(url).then(() => {
      alert('✅ تم نسخ رابط المشاركة بنجاح!\\n\\nيمكنك إرساله لزميلك عبر واتساب أو تيليجرام وسيفتح معه هذا السكربت المعدل مباشرة في المتصفح.');
      closeShareModal();
    }).catch(() => {
      prompt('انسخ رابط المشاركة التالي وأرسله لزميلك:', url);
    });
  } catch(e) {
    alert('تعذر إنشاء رابط المشاركة المباشر بسبب حجم البيانات، يرجى استخدام تنزيل ملف Markdown أو JSON ومشاركته.');
  }
}

// ─── IMPORT LOGIC (Colleague Collaboration) ───────────────────
function openImportModal(targetEpIdx = null) {
  if ($modalImport) {
    $modalImport.style.display = 'flex';
    if ($importFileInput) $importFileInput.value = '';
    if ($importTextInput) $importTextInput.value = '';

    // Show or hide target ep select
    if (state.currentEpisode !== null) {
      if ($importTargetEpGroup) $importTargetEpGroup.style.display = 'none';
    } else {
      if ($importTargetEpGroup) {
        $importTargetEpGroup.style.display = 'block';
        if (targetEpIdx !== null && $importTargetEpSelect) {
          $importTargetEpSelect.value = targetEpIdx;
        }
      }
    }
  }
}

function closeImportModal() {
  if ($modalImport) $modalImport.style.display = 'none';
}

function handleImportAction() {
  // Check if file chosen
  if ($importFileInput && $importFileInput.files && $importFileInput.files.length > 0) {
    const file = $importFileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      processImportContent(e.target.result, file.name);
    };
    reader.readAsText(file, 'utf-8');
  } else if ($importTextInput && $importTextInput.value.trim()) {
    processImportContent($importTextInput.value.trim(), 'pasted-text');
  } else {
    alert('يرجى اختيار ملف أو لصق النص/الكود أولاً!');
  }
}

function processImportContent(contentStr, sourceName) {
  contentStr = contentStr.trim();
  let targetEpIdx = state.currentEpisode;
  if (targetEpIdx === null && $importTargetEpSelect) {
    targetEpIdx = parseInt($importTargetEpSelect.value) || 0;
  }

  // 1. Try parsing as JSON package
  try {
    const obj = JSON.parse(contentStr);
    // Bundle of all episodes
    if (obj.type === 'all_episodes' && Array.isArray(obj.episodes)) {
      obj.episodes.forEach(ep => {
        if (ep.index !== undefined && ep.data) {
          saveEpisodeData(ep.index, ep.data);
        }
      });
      alert('🎉 تم استيراد حزمة جميع الحلقات بنجاح من زميلك (' + obj.episodes.length + ' حلقات)!');
      closeImportModal();
      renderGrid();
      if (state.currentEpisode !== null) {
        openEpisode(state.currentEpisode);
      }
      return;
    }

    // Single episode JSON package
    if (obj.type === 'single_episode' && obj.data) {
      const epIdx = (obj.epIndex !== undefined) ? obj.epIndex : targetEpIdx;
      saveEpisodeData(epIdx, obj.data);
      alert('🎉 تم استيراد حزمة الحلقة ' + (epIdx + 1) + ' بنجاح من زميلك!');
      closeImportModal();
      renderGrid();
      openEpisode(epIdx);
      return;
    }

    // Direct episode data object { title, description, dialogue }
    if (obj.dialogue && Array.isArray(obj.dialogue)) {
      const epIdx = (obj.index !== undefined) ? obj.index : targetEpIdx;
      saveEpisodeData(epIdx, {
        title: obj.title || EPISODES[epIdx].title,
        description: obj.description || EPISODES[epIdx].description,
        dialogue: obj.dialogue
      });
      alert('🎉 تم استيراد السكربت بنجاح وتطبيقه على الحلقة ' + (epIdx + 1) + '!');
      closeImportModal();
      renderGrid();
      openEpisode(epIdx);
      return;
    }
  } catch(e) {
    // Not valid JSON, proceed to Markdown parsing
  }

  // 2. Parse as Markdown
  const parsed = parseMarkdownToDialogue(contentStr);
  if (parsed.dialogue && parsed.dialogue.length > 0) {
    let epIdx = targetEpIdx;
    if (parsed.epNumber !== null && parsed.epNumber >= 1 && parsed.epNumber <= EPISODES.length) {
      epIdx = parsed.epNumber - 1;
    }

    const currentMeta = getEpisodeMeta(epIdx);
    const finalData = {
      title: parsed.metaTitle || currentMeta.title,
      description: parsed.metaDesc || currentMeta.description,
      dialogue: parsed.dialogue
    };

    saveEpisodeData(epIdx, finalData);
    alert('🎉 تم استيراد وتطبيق ملف Markdown بنجاح على الحلقة ' + (epIdx + 1) + ' (' + parsed.dialogue.length + ' فقرة حوارية)!');
    closeImportModal();
    renderGrid();
    openEpisode(epIdx);
    return;
  }

  alert('عذراً، لم يتم التعرف على صيغة المحتوى. يرجى التأكد من اختيار ملف Markdown منسق أو ملف JSON سليم.');
}

function parseMarkdownToDialogue(mdContent) {
  const lines = mdContent.split(/\\r?\\n/);
  const dialogue = [];
  let currentSpeaker = null;
  let currentText = '';
  let metaTitle = '';
  let metaDesc = '';
  let epNumber = null;

  function flushSpeaker() {
    if (currentSpeaker && currentText.trim()) {
      dialogue.push({
        type: 'speaker',
        speaker: currentSpeaker,
        text: currentText.trim()
      });
      currentSpeaker = null;
      currentText = '';
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      if (currentSpeaker && currentText) {
        currentText += ' ';
      }
      continue;
    }

    const titleMatch = line.match(/^#\\s*الحلقة\\s*(\\d+)[:\\s]*(.*)$/);
    if (titleMatch) {
      epNumber = parseInt(titleMatch[1]);
      metaTitle = titleMatch[2].trim();
      continue;
    }

    if (line.startsWith('>')) {
      const cleanDesc = line.replace(/^>\\s*(\\**الوصف:\\**|\\**نبذة عن الحلقة:\\**)?\\s*/, '').trim();
      if (cleanDesc) metaDesc = cleanDesc;
      continue;
    }

    if (line.startsWith('## ')) {
      flushSpeaker();
      const title = line.replace(/^##\\s*(📌)?\\s*/, '').trim();
      dialogue.push({
        type: 'section_header',
        text: title
      });
      continue;
    }

    if (line.startsWith('### ') && !line.includes('الشخصيات')) {
      flushSpeaker();
      const sub = line.replace(/^###\\s*(🔹)?\\s*/, '').trim();
      dialogue.push({
        type: 'sub_header',
        text: sub
      });
      continue;
    }

    const speakerMatch = line.match(/^(\\**)?([^*:]+)(:\\**|:)\\s*(.*)$/);
    if (speakerMatch && (speakerMatch[2].includes('طارق') || speakerMatch[2].includes('عاطف') || speakerMatch[1] === '**')) {
      flushSpeaker();
      const rawName = speakerMatch[2].trim();
      const restText = speakerMatch[4].trim();

      let spkKey = 'dr_tarek';
      if (rawName.includes('عاطف')) spkKey = 'atef';
      else if (rawName.includes('طارق')) spkKey = 'dr_tarek';
      else spkKey = rawName;

      currentSpeaker = spkKey;
      currentText = restText;
      continue;
    }

    if (line.startsWith('#') || line.startsWith('---') || line.startsWith('- **')) {
      continue;
    }

    if (currentSpeaker) {
      currentText += (currentText ? ' ' : '') + line;
    }
  }

  flushSpeaker();
  return { epNumber, metaTitle, metaDesc, dialogue };
}

// ─── GRID COLLABORATIVE TOOLS ────────────────────────────────
function bindGridTools() {
  if ($btnGridExportAllMd) {
    $btnGridExportAllMd.addEventListener('click', () => {
      let masterMd = '# كود العظام (The Bone Code) — التفريغ الكامل لجميع الحلقات المعدلة\\n\\n';
      masterMd += '> هذا الملف يضم التفريغات الحوارية الكاملة لبودكاست الطب الشرعي متضمنة جميع تعديلاتك وإضافاتك.\\n\\n---\\n\\n';

      EPISODES.forEach(ep => {
        const epData = getEpisodeData(ep.index);
        masterMd += '# الحلقة ' + ep.number + ': ' + epData.title + '\\n\\n';
        masterMd += '> **الوصف:** ' + epData.description + '\\n\\n';
        masterMd += '---\\n\\n';

        epData.dialogue.forEach(item => {
          if (item.type === 'section_header') {
            masterMd += '\\n## 📌 ' + item.text + '\\n\\n';
          } else if (item.type === 'sub_header') {
            masterMd += '\\n### 🔹 ' + item.text + '\\n\\n';
          } else if (item.type === 'speaker') {
            const spk = item.speaker === 'dr_tarek' ? 'د. طارق' : (item.speaker === 'atef' ? 'عاطف' : item.speaker);
            masterMd += '**' + spk + ':** ' + item.text + '\\n\\n';
          }
        });

        masterMd += '\\n\\n---\\n\\n';
      });

      downloadBlob(masterMd, 'medduo-all-episodes-custom.md', 'text/markdown;charset=utf-8');
    });
  }

  if ($btnGridExportAllJson) {
    $btnGridExportAllJson.addEventListener('click', () => {
      const episodesBundle = EPISODES.map(ep => ({
        index: ep.index,
        number: ep.number,
        data: getEpisodeData(ep.index)
      }));

      const pkg = {
        app: 'MedDuo-Podcast',
        version: '2.0',
        type: 'all_episodes',
        exportedAt: new Date().toISOString(),
        episodes: episodesBundle
      };

      downloadBlob(JSON.stringify(pkg, null, 2), 'medduo-all-episodes-colleague-package.json', 'application/json');
    });
  }

  if ($btnGridImport) {
    $btnGridImport.addEventListener('click', () => openImportModal(null));
  }
}

// ─── CHECK SHARED URL HASH ───────────────────────────────────
function checkSharedHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#shared=')) {
    try {
      const b64 = decodeURIComponent(hash.substring('#shared='.length));
      const jsonStr = decodeURIComponent(escape(atob(b64)));
      const parsed = JSON.parse(jsonStr);

      if (parsed.data && parsed.epIndex !== undefined) {
        state.sharedData = parsed.data;
        state.isViewingShared = true;
        if ($sharedBanner) $sharedBanner.style.display = 'block';

        openEpisode(parsed.epIndex, true);

        if ($btnSaveShared) {
          $btnSaveShared.onclick = function() {
            saveEpisodeData(parsed.epIndex, parsed.data);
            state.isViewingShared = false;
            $sharedBanner.style.display = 'none';
            alert('✅ تم حفظ نسخة زميلك بنجاح في متصفحك كنسخة دائمة!');
            // Clean URL hash without reload
            history.replaceState(null, '', window.location.pathname);
            renderGrid();
          };
        }

        if ($btnDismissShared) {
          $btnDismissShared.onclick = function() {
            state.isViewingShared = false;
            state.sharedData = null;
            $sharedBanner.style.display = 'none';
            history.replaceState(null, '', window.location.pathname);
            openEpisode(parsed.epIndex, false);
          };
        }
      }
    } catch(e) {
      console.warn('Failed to parse shared hash', e);
    }
  }
}

function downloadBlob(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function bindModals() {
  if ($btnEditEpMeta) $btnEditEpMeta.addEventListener('click', openEditMetaModal);
  if ($btnSaveMeta) $btnSaveMeta.addEventListener('click', saveEpisodeMeta);
  if ($btnRevertMeta) $btnRevertMeta.addEventListener('click', revertEpisodeMeta);

  if ($btnSaveItem) $btnSaveItem.addEventListener('click', saveItemModal);

  // Share & Export modal bindings
  if ($btnShareModal) $btnShareModal.addEventListener('click', openShareModal);
  if ($btnDoExportMd) $btnDoExportMd.addEventListener('click', () => { exportCurrentEpisodeMarkdown(); closeShareModal(); });
  if ($btnDoExportJson) $btnDoExportJson.addEventListener('click', () => { exportCurrentEpisodeJson(); closeShareModal(); });
  if ($btnDoCopyLink) $btnDoCopyLink.addEventListener('click', copyShareableLink);

  // Import modal bindings
  if ($btnImportSingle) $btnImportSingle.addEventListener('click', () => openImportModal(state.currentEpisode));
  if ($btnDoImport) $btnDoImport.addEventListener('click', handleImportAction);

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.close;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'none';
    });
  });

  [$modalEditMeta, $modalEditItem, $modalShareExport, $modalImport].forEach(modal => {
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

// ─── COPY TEXT ───────────────────────────────────────────────
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
console.log('✅ Successfully updated podcast-site/app.js with full export/import/collaboration features!');
