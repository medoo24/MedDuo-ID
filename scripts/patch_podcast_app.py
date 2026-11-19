# -*- coding: utf-8 -*-
"""
Patch podcast-site/app.js to add:
1. ✨ تعديل المشهد بالـ AI button on each section header in both Bubble and Reading modes.
2. AI Segment Editor modal: extracts the full large scene/segment dialogue turns.
3. Quick actions for Egyptian forensic podcast (Dr. Shereen mnemonics, Atef comic banter, slang polish, medical accuracy, criminal plot twist).
4. Direct Gemini AI API call with structured JSON dialogue turns.
5. Live preview of updated scene dialogue with speaker badges.
6. Apply updates to the episode in localStorage with instant re-render.
7. AI Settings modal (persists to localStorage.getItem('gemini_api_key')).
"""

with open('podcast-site/app.js', 'r', encoding='utf-8') as f:
    code = f.read()

# ── 1. Patch makeSectionHeader ──
old_sh = '''  div.innerHTML = `
    <div class="sh-line"></div>
    <div class="sh-badge-wrap">
      <span class="sh-text">${escHtml(item.text)}</span>
      <div class="sh-actions">
        <button class="sh-action-btn edit-btn" title="تعديل هذا العنوان">✏️ تعديل</button>
        <button class="sh-action-btn del-btn" title="حذف هذا العنوان">🗑️ حذف</button>
      </div>
    </div>
    <div class="sh-line"></div>
  `;

  div.querySelector('.edit-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openEditItemModal(itemIdx);
  });'''

new_sh = '''  div.innerHTML = `
    <div class="sh-line"></div>
    <div class="sh-badge-wrap">
      <span class="sh-text">${escHtml(item.text)}</span>
      <div class="sh-actions">
        <button class="sh-action-btn ai-btn" title="تعديل هذا المشهد بالذكاء الاصطناعي (Gemini AI)">✨ تعديل المشهد بالـ AI</button>
        <button class="sh-action-btn edit-btn" title="تعديل هذا العنوان">✏️ تعديل</button>
        <button class="sh-action-btn del-btn" title="حذف هذا العنوان">🗑️ حذف</button>
      </div>
    </div>
    <div class="sh-line"></div>
  `;

  div.querySelector('.ai-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openAISegmentModal(epIdx, itemIdx);
  });

  div.querySelector('.edit-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openEditItemModal(itemIdx);
  });'''

if old_sh in code:
    code = code.replace(old_sh, new_sh, 1)
    print('✓ Patched makeSectionHeader in podcast-site/app.js')
else:
    print('⚠️ makeSectionHeader match failed')

# ── 2. Patch renderReading section header ──
old_reading_sh = '''      h.innerHTML = `
        <span>📌 ${escHtml(item.text)}</span>
        <button class="sh-action-btn edit-btn" title="تعديل هذا العنوان">✏️ تعديل</button>
      `;'''

new_reading_sh = '''      h.innerHTML = `
        <span>📌 ${escHtml(item.text)}</span>
        <div style="display:inline-flex;gap:6px;margin-right:auto;">
          <button class="sh-action-btn ai-btn" title="تعديل هذا المشهد بالـ AI">✨ تعديل المشهد بالـ AI</button>
          <button class="sh-action-btn edit-btn" title="تعديل هذا العنوان">✏️ تعديل</button>
        </div>
      `;
      h.querySelector('.ai-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openAISegmentModal(idx, i);
      });'''

if old_reading_sh in code:
    code = code.replace(old_reading_sh, new_reading_sh, 1)
    print('✓ Patched renderReading section header')
else:
    print('⚠️ renderReading match failed')

# ── 3. Append AI Podcast Segment & Settings Engine ──
ai_podcast_engine = '''

/* ══════════════════════════════════════════════════════════════════
   AI SCENE/SEGMENT EDITING & GEMINI API ENGINE (PODCAST)
   ══════════════════════════════════════════════════════════════════ */

let aiActiveEpIdx = null;
let aiActiveSectionItemIdx = null;
let aiActiveSegmentEndIdx = null;
let currentAIGeneratedSegment = null;

function getStoredPodcastGeminiKey() {
  return localStorage.getItem('gemini_api_key') || '';
}

function saveStoredPodcastGeminiKey(key) {
  if (key) {
    localStorage.setItem('gemini_api_key', key.trim());
  } else {
    localStorage.removeItem('gemini_api_key');
  }
}

async function callPodcastGeminiAPI(prompt, systemInstruction = '', jsonMode = true, model = 'gemini-3.8-flash') {
  const apiKey = getStoredPodcastGeminiKey();
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

function openAIPodcastSettingsModal() {
  const modal = document.getElementById('modal-ai-settings-podcast');
  const input = document.getElementById('input-gemini-key-podcast');
  const status = document.getElementById('key-test-status-podcast');
  if (!modal) return;

  input.value = getStoredPodcastGeminiKey();
  status.textContent = input.value ? 'المفتاح محفوظ حالياً في متصفحك.' : 'لم يتم حفظ مفتاح بعد.';
  status.style.color = input.value ? '#10B981' : '#94A3B8';
  modal.style.display = 'flex';
}

function openAISegmentModal(epIdx, sectionItemIdx) {
  const apiKey = getStoredPodcastGeminiKey();
  if (!apiKey) {
    openAIPodcastSettingsModal();
    showToast('⚠️ برجاء إدخال مفتاح Gemini API أولاً لاستخدام الذكاء الاصطناعي.');
    return;
  }

  aiActiveEpIdx = epIdx;
  aiActiveSectionItemIdx = sectionItemIdx;
  currentAIGeneratedSegment = null;

  const data = getDialogueData(epIdx);
  const sectionHeader = data[sectionItemIdx];

  // Find the end of this large segment (next section_header or end of dialogue)
  let endIdx = data.length;
  for (let i = sectionItemIdx + 1; i < data.length; i++) {
    if (data[i].type === 'section_header') {
      endIdx = i;
      break;
    }
  }
  aiActiveSegmentEndIdx = endIdx;

  const segmentTurns = data.slice(sectionItemIdx + 1, endIdx);
  const speakerTurnsCount = segmentTurns.filter(it => it.type === 'speaker' || !it.type).length;

  const modal = document.getElementById('modal-ai-segment');
  const titleLabel = document.getElementById('ai-segment-title-label');
  const promptInput = document.getElementById('ai-segment-prompt');
  const previewWrap = document.getElementById('ai-segment-preview-wrap');
  const applyBtn = document.getElementById('btn-apply-ai-segment');
  const loading = document.getElementById('ai-segment-loading');

  titleLabel.textContent = `${sectionHeader.text} (${speakerTurnsCount} رد حواري)`;
  promptInput.value = '';
  previewWrap.style.display = 'none';
  applyBtn.style.display = 'none';
  loading.style.display = 'none';

  modal.style.display = 'flex';
}

async function executeAISegmentGeneration(actionType) {
  const data = getDialogueData(aiActiveEpIdx);
  const sectionHeader = data[aiActiveSectionItemIdx];
  const oldSegmentTurns = data.slice(aiActiveSectionItemIdx + 1, aiActiveSegmentEndIdx);
  const customPrompt = document.getElementById('ai-segment-prompt').value.trim();
  const model = document.getElementById('ai-podcast-model').value || 'gemini-3.8-flash';

  const loading = document.getElementById('ai-segment-loading');
  const loadingText = document.getElementById('ai-segment-loading-text');
  const previewWrap = document.getElementById('ai-segment-preview-wrap');
  const previewList = document.getElementById('ai-segment-preview-list');
  const countChip = document.getElementById('ai-preview-count-chip');
  const applyBtn = document.getElementById('btn-apply-ai-segment');

  loading.style.display = 'block';
  previewWrap.style.display = 'none';
  applyBtn.style.display = 'none';
  loadingText.textContent = `جاري تطوير وصياغة المشهد باستخدام Gemini AI (${model})...`;

  const systemPrompt = `أنت كاتب سيناريو ومخرج حواري محترف لبودكاست طبي شرعي مصري شيق بعنوان "كود العظام - MedDuo" يقدمه:
1. د. طارق: استشاري الطب الشرعي، خبير مخضرم، هادئ، يلقي تشبيهات عبقرية وتحشيشات د. شيرين في حفظ الأعمار والقواعد، يسأل أسئلة فاحصة، ويربط الحالات بالقضايا الجنائية.
2. عاطف: نائب الطب الشرعي الشاب، شغوف، أحياناً يتسرع أو يستنتج خطأ فيصحح له د. طارق، يستخدم لغة شبابية مصرية راقية ومناكفة مرحة دون مبالغة فجة.
3. الراوي (narrator): تعليق موجز على ملخص القضية أو مسرح الجريمة عند الحاجة.

قواعد الحوار الصارمة:
- الحفاظ على المنهج الطبي الشرعي الدقيق لكتاب عين شمس بدون أي تأليف لمعلومات مغلوطة.
- استخدام العامية المصرية السلسة الحيوية والمصطلحات الطبية بالإنجليزية المعربة.
- الحوار يجب أن يكون جذاباً وممتعاً جداً.
- الناتج يجب أن يكون مصفوفة JSON تحتوي على كائنات الحوار فقط بهذا الشكل:
[
  { "type": "speaker", "speaker": "dr_tarek", "text": "نص كلام د. طارق..." },
  { "type": "speaker", "speaker": "atef", "text": "نص كلام عاطف..." }
]`;

  let actionInstruction = '';
  if (actionType === 'shereen') actionInstruction = 'ركز على إدخال تشبيهات وتحشيشات د. شيرين بذكاء لحفظ الأرقام ومراكز التعظم والدرزات.';
  else if (actionType === 'humor') actionInstruction = 'زد من وتيرة المناكفة اللطيفة والقفشات الذكية بين د. طارق وعاطف لجعل الحلقة خفيفة الظل وممتعة.';
  else if (actionType === 'egyptian') actionInstruction = 'اجعل اللغة عامية مصرية سلسة وتخلص من أي ركاكة أو تقعر وترجمة حرفية ميتة للمصطلحات.';
  else if (actionType === 'accuracy') actionInstruction = 'راجع ودقق كل الأرقام والمدد الجنائية للتأكد من مطابقتها لكتاب عين شمس بدقة متناهية.';
  else if (actionType === 'plot') actionInstruction = 'اربط تفاصيل المشهد بالحل المفاجئ للقضية الجنائية والبلوت تويست.';

  const userPrompt = `عنوان المشهد: ${sectionHeader.text}
نصوص الحوار الحالية في هذا المشهد:
${JSON.stringify(oldSegmentTurns.map(t => ({ speaker: t.speaker || 'dr_tarek', text: t.text })))}

التوجيه المطلوب:
${actionInstruction}
${customPrompt ? 'توجيهات إضافية من المستخدم: ' + customPrompt : ''}

أعد صياغة هذا المشهد بالكامل مع الحفاظ على تسلسل الحوار وإثرائه.`;

  try {
    const raw = await callPodcastGeminiAPI(userPrompt, systemPrompt, true, model);
    const parsed = JSON.parse(raw);

    const turns = Array.isArray(parsed) ? parsed : (parsed.dialogue || parsed.turns || []);
    if (!turns.length) throw new Error('لم يرجع الذكاء الاصطناعي ردود حوارية صالحة.');

    currentAIGeneratedSegment = turns;

    loading.style.display = 'none';
    previewWrap.style.display = 'flex';
    applyBtn.style.display = 'block';

    countChip.textContent = `${turns.length} رد حواري جديد`;
    previewList.innerHTML = '';

    turns.forEach((turn, ti) => {
      const spk = turn.speaker || 'dr_tarek';
      const spkName = spk === 'dr_tarek' ? '👨‍⚕️ د. طارق' : (spk === 'atef' ? '🩺 عاطف' : '🎙️ الراوي');
      const b = document.createElement('div');
      b.className = `ai-preview-bubble ${spk}`;
      b.innerHTML = `
        <div class="ai-preview-speaker">${spkName}</div>
        <div class="ai-preview-text">${escHtml(turn.text)}</div>
      `;
      previewList.appendChild(b);
    });

  } catch(err) {
    loading.style.display = 'none';
    alert('حدث خطأ أثناء التوليد بالـ AI: ' + err.message);
  }
}

function applyAISegmentUpdate() {
  if (!currentAIGeneratedSegment || aiActiveEpIdx === null || aiActiveSectionItemIdx === null) return;

  const data = getDialogueData(aiActiveEpIdx);
  const formattedTurns = currentAIGeneratedSegment.map(t => ({
    type: 'speaker',
    speaker: t.speaker || 'dr_tarek',
    text: t.text || ''
  }));

  // Replace segment turns between aiActiveSectionItemIdx + 1 and aiActiveSegmentEndIdx
  data.splice(aiActiveSectionItemIdx + 1, aiActiveSegmentEndIdx - (aiActiveSectionItemIdx + 1), ...formattedTurns);

  saveDialogueData(aiActiveEpIdx, data);

  // Close modal and refresh UI
  document.getElementById('modal-ai-segment').style.display = 'none';
  if (state.readingMode) {
    renderReading(aiActiveEpIdx);
  } else {
    renderDialogue(aiActiveEpIdx);
  }
  showToast('✓ تم تطبيق التعديل الذكي وتطوير المشهد بنجاح!');
}

// ── Wire Podcast AI Listeners ──
document.addEventListener('DOMContentLoaded', () => {
  // Settings button
  const btnSettings = document.getElementById('btn-ai-settings-podcast');
  if (btnSettings) {
    btnSettings.addEventListener('click', openAIPodcastSettingsModal);
  }

  // Quick Action chips
  document.querySelectorAll('#ai-podcast-quick-actions .ai-podcast-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#ai-podcast-quick-actions .ai-podcast-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      executeAISegmentGeneration(btn.dataset.action);
    });
  });

  const btnRun = document.getElementById('btn-run-ai-segment');
  if (btnRun) {
    btnRun.addEventListener('click', () => executeAISegmentGeneration('custom'));
  }

  const btnApply = document.getElementById('btn-apply-ai-segment');
  if (btnApply) {
    btnApply.addEventListener('click', applyAISegmentUpdate);
  }

  // Settings modal buttons
  const btnSaveKey = document.getElementById('btn-save-gemini-key-podcast');
  if (btnSaveKey) {
    btnSaveKey.addEventListener('click', () => {
      const val = document.getElementById('input-gemini-key-podcast').value.trim();
      saveStoredPodcastGeminiKey(val);
      document.getElementById('key-test-status-podcast').textContent = '✓ تم حفظ المفتاح بنجاح!';
      document.getElementById('key-test-status-podcast').style.color = '#10B981';
      showToast('✓ تم حفظ مفتاح Gemini API!');
      setTimeout(() => document.getElementById('modal-ai-settings-podcast').style.display = 'none', 800);
    });
  }

  const btnClearKey = document.getElementById('btn-clear-gemini-key-podcast');
  if (btnClearKey) {
    btnClearKey.addEventListener('click', () => {
      saveStoredPodcastGeminiKey('');
      document.getElementById('input-gemini-key-podcast').value = '';
      document.getElementById('key-test-status-podcast').textContent = 'تم مسح المفتاح.';
      document.getElementById('key-test-status-podcast').style.color = '#94A3B8';
      showToast('تم مسح المفتاح');
    });
  }

  const btnTestKey = document.getElementById('btn-test-gemini-key-podcast');
  if (btnTestKey) {
    btnTestKey.addEventListener('click', async () => {
      const val = document.getElementById('input-gemini-key-podcast').value.trim();
      const statusEl = document.getElementById('key-test-status-podcast');
      if (!val) {
        statusEl.textContent = 'برجاء كتابة أو لصق المفتاح أولاً.';
        statusEl.style.color = '#EF4444';
        return;
      }
      statusEl.textContent = 'جاري اختبار الاتصال مع Gemini 3.8 Flash...';
      statusEl.style.color = 'var(--cyan)';
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${val}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: 'مرحبا' }] }] })
        });
        if (res.ok) {
          statusEl.textContent = '✓ تم التحقق بنجاح! الاتصال بالموديل شغال ممتاز.';
          statusEl.style.color = '#10B981';
        } else {
          statusEl.textContent = `خطأ في الاتصال: كود ${res.status}`;
          statusEl.style.color = '#EF4444';
        }
      } catch(e) {
        statusEl.textContent = 'خطأ شبكة: ' + e.message;
        statusEl.style.color = '#EF4444';
      }
    });
  }

  const btnToggleVis = document.getElementById('btn-toggle-key-vis-podcast');
  if (btnToggleVis) {
    btnToggleVis.addEventListener('click', () => {
      const inEl = document.getElementById('input-gemini-key-podcast');
      inEl.type = inEl.type === 'password' ? 'text' : 'password';
    });
  }

  // Modal close buttons
  document.querySelectorAll('[data-close="modal-ai-segment"]').forEach(b => {
    b.addEventListener('click', () => document.getElementById('modal-ai-segment').style.display = 'none');
  });
  document.querySelectorAll('[data-close="modal-ai-settings-podcast"]').forEach(b => {
    b.addEventListener('click', () => document.getElementById('modal-ai-settings-podcast').style.display = 'none');
  });
});
'''

code += ai_podcast_engine
print('✓ Appended AI Podcast Segment & Settings engine')

with open('podcast-site/app.js', 'w', encoding='utf-8') as f:
    f.write(code)

print('SUCCESS: podcast-site/app.js updated completely!')
