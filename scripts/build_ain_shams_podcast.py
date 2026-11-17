import re
import json

def parse_md_to_dialogue(filepath):
    with open(filepath, encoding='utf-8') as f:
        lines = f.readlines()
    
    dialogue = []
    current_speaker = None
    current_text = []

    def flush():
        nonlocal current_speaker, current_text
        if current_speaker and current_text:
            text = '\n'.join(current_text).strip()
            if text:
                dialogue.append({
                    'type': 'speaker',
                    'speaker': current_speaker,
                    'text': text
                })
        current_speaker = None
        current_text = []

    in_dia = False
    for line in lines:
        raw = line.rstrip()
        s = raw.strip()

        # Match section headers: ### 🎙️ [00:00] ...
        hm = re.match(r'^###\s+(.+)', s)
        if hm:
            header_title = hm.group(1).strip()
            # Ignore parenthetical intro headers
            if header_title.startswith('(Ain Shams'):
                continue
            flush()
            in_dia = True
            dialogue.append({
                'type': 'section_header',
                'text': header_title
            })
            continue

        if not in_dia:
            continue

        # Match subheaders: #### ❓ السؤال الأول ...
        qm = re.match(r'^####\s+(.+)', s)
        if qm:
            flush()
            dialogue.append({
                'type': 'section_header',
                'text': qm.group(1).strip()
            })
            continue

        # Match speakers: **د. طارق:** or **عاطف:**
        spm = re.match(r'^\*\*(د\.\s*طارق|عاطف):\*\*\s*(.*)', s)
        if spm:
            flush()
            sp_name = spm.group(1).replace(' ', '')
            current_speaker = 'dr_tarek' if 'طارق' in sp_name else 'atef'
            first_line = spm.group(2).strip()
            if first_line:
                current_text.append(first_line)
            continue

        if s == '---':
            continue

        if current_speaker:
            current_text.append(raw)

    flush()
    return dialogue

ep1_dia = parse_md_to_dialogue('ain_shams_1.md')
ep2_dia = parse_md_to_dialogue('ain_shams_2.md')
ep3_dia = parse_md_to_dialogue('ain_shams_3.md')

ain_shams_episodes = [
    {
        "index": 0,
        "number": 1,
        "title": "لغز غيبوبة الدمرداش، جمجمة الرضيع، وأسرار الفك والدرزات",
        "description": "البروتوكول السداسي للاستعراف، 8 حالات مدنية و2 جنائية لاستعراف الأحياء، قاعدة 13-5-4 لجمجمة الرضيع، اليافوخ ومعدل الأصابع المتناقصة، درزات الجمجمة ومصيدة العرق الأسود، وتحولات الفك السفلي.",
        "dialogue": ep1_dia
    },
    {
        "index": 1,
        "number": 2,
        "title": "قطار الأعمار الجنائية — جداول التسنين، التحام المشاش، وأعمار الدستور والمحاكم (MLI)",
        "description": "بزوغ الأسنان اللبنية (20) والدائمة (32) وقاعدة W-B-S-L، مراكز التعظم وظهور الرضفة عند 3 سنين، مقص الكوع (14-17 سنة)، التحام الحوض والركبة والقص، تقدم الإناث بسنة لسنتين، وجدول الـ MLI من سن 6 حتى سن المعاش 60 سنة.",
        "dialogue": ep2_dia
    },
    {
        "index": 2,
        "number": 3,
        "title": "الشفرة الخالدة — علم البصمات، لغز الـ 90% الصامتة، وأسرار الـ DNA الشرعي",
        "description": "علم البصمات (1 في 64 مليار، الأدمة والبشرة، ومصيدة الندوب والأمراض)، لغز الـ 90% الصامتة والـ 10% المشفرة، الـ 16 موقع وراثي وجين تحديد الجنس Amelogenin، كروموسوم Y في الاغتصاب الجماعي والـ mtDNA، الخطوات الست لفحص الـ DNA، والحل النموذجي لأسئلة كتاب القسم.",
        "dialogue": ep3_dia
    }
]

print("Parsed Ain Shams Episodes:")
for ep in ain_shams_episodes:
    print(f"  Ep {ep['number']}: {ep['title']} ({len(ep['dialogue'])} dialogue items)")

# Read podcast-site/app.js
with open("podcast-site/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# Replace `const EPISODES = [` with MUST_EPISODES and AIN_SHAMS_EPISODES
ain_shams_code = f"const AIN_SHAMS_EPISODES = {json.dumps(ain_shams_episodes, ensure_ascii=False, indent=2)};\n\nconst MUST_EPISODES = ["

app_js = app_js.replace("const EPISODES = [", ain_shams_code, 1)

# Now find where MUST_EPISODES closes
# In podcast-site/app.js, EPISODES was defined from line 7 to line 888
# Right after EPISODES closed, there was `// ─── DOM ELEMENTS ──────────────────────────────────────────` or similar
# Let's inspect around line 880 of podcast-site/app.js
old_tail = "];\n\n// ─── STATE"
new_tail = """];

// ─── ACTIVE TRACK MANAGEMENT (Ain Shams vs MUST) ─────────
const initialUrlTrack = new URLSearchParams(window.location.search).get('track');
const initialStoredTrack = localStorage.getItem('medduo_selected_track');
const defaultTrack = (initialUrlTrack === 'must' || (!initialUrlTrack && initialStoredTrack === 'must')) ? 'must' : 'ain_shams';

let currentTrack = defaultTrack;
let EPISODES = (currentTrack === 'must') ? MUST_EPISODES : AIN_SHAMS_EPISODES;

// ─── STATE"""

if old_tail in app_js:
    app_js = app_js.replace(old_tail, new_tail, 1)
    print("SUCCESS: Replaced EPISODES tail with track state setup!")
else:
    # Try finding ];\n\nconst state or similar
    print("Tail pattern not found directly, looking for alternatives...")
    m = re.search(r'\];\s*\n+(\s*//\s*───\s*STATE|const\s+state\s*=)', app_js)
    if m:
        target = m.group(0)
        replacement = "];\n\n// ─── ACTIVE TRACK MANAGEMENT ──────────────────────────────\n" + \
                      "const initialUrlTrack = new URLSearchParams(window.location.search).get('track');\n" + \
                      "const initialStoredTrack = localStorage.getItem('medduo_selected_track');\n" + \
                      "const defaultTrack = (initialUrlTrack === 'must' || (!initialUrlTrack && initialStoredTrack === 'must')) ? 'must' : 'ain_shams';\n" + \
                      "let currentTrack = defaultTrack;\n" + \
                      "let EPISODES = (currentTrack === 'must') ? MUST_EPISODES : AIN_SHAMS_EPISODES;\n\n" + \
                      m.group(1)
        app_js = app_js.replace(target, replacement, 1)
        print("SUCCESS: Regex replaced EPISODES tail with track state setup!")

# Update getEpisodeData and saveEpisodeData to isolate tracks
old_storage_logic = """function getEpisodeData(epIdx) {
  // If we are currently viewing shared data for this episode, prioritize it in memory
  if (state.isViewingShared && state.sharedData && state.currentEpisode === epIdx) {
    return {
      title: state.sharedData.title || EPISODES[epIdx].title,
      description: state.sharedData.description || EPISODES[epIdx].description,
      dialogue: state.sharedData.dialogue || deepClone(EPISODES[epIdx].dialogue)
    };
  }

  const saved = localStorage.getItem(STORAGE_PREFIX + epIdx);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
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
    } catch (e) {
      console.error('Failed to parse saved episode data:', e);
    }
  }

  return {
    title: EPISODES[epIdx].title,
    description: EPISODES[epIdx].description,
    dialogue: deepClone(EPISODES[epIdx].dialogue)
  };
}"""

new_storage_logic = """function getEpisodeData(epIdx) {
  if (!EPISODES[epIdx]) return { title: '', description: '', dialogue: [] };

  // If we are currently viewing shared data for this episode, prioritize it in memory
  if (state.isViewingShared && state.sharedData && state.currentEpisode === epIdx) {
    return {
      title: state.sharedData.title || EPISODES[epIdx].title,
      description: state.sharedData.description || EPISODES[epIdx].description,
      dialogue: state.sharedData.dialogue || deepClone(EPISODES[epIdx].dialogue)
    };
  }

  const trackKey = `${STORAGE_PREFIX}${currentTrack}_${epIdx}`;
  let saved = localStorage.getItem(trackKey);
  if (!saved && currentTrack === 'must') {
    // Fallback to legacy key for MUST track
    saved = localStorage.getItem(STORAGE_PREFIX + epIdx);
  }

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
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
    } catch (e) {
      console.error('Failed to parse saved episode data:', e);
    }
  }

  return {
    title: EPISODES[epIdx].title,
    description: EPISODES[epIdx].description,
    dialogue: deepClone(EPISODES[epIdx].dialogue)
  };
}"""

if old_storage_logic in app_js:
    app_js = app_js.replace(old_storage_logic, new_storage_logic, 1)
    print("SUCCESS: Updated getEpisodeData with track isolation!")
else:
    print("WARNING: old_storage_logic exact match failed, checking...")

# Update saveEpisodeData
old_save_logic = """function saveEpisodeData(epIdx, data) {
  localStorage.setItem(STORAGE_PREFIX + epIdx, JSON.stringify(data));
}"""

new_save_logic = """function saveEpisodeData(epIdx, data) {
  localStorage.setItem(`${STORAGE_PREFIX}${currentTrack}_${epIdx}`, JSON.stringify(data));
}"""

if old_save_logic in app_js:
    app_js = app_js.replace(old_save_logic, new_save_logic, 1)
    print("SUCCESS: Updated saveEpisodeData with track isolation!")

# Add updateActiveTrack function in podcast app.js
track_switch_func = """
/* ─── TRACK SWITCHING (Ain Shams vs MUST) ───────────────────── */
function updateActiveTrack(newTrack, skipHistory = false) {
  currentTrack = (newTrack === 'must') ? 'must' : 'ain_shams';
  localStorage.setItem('medduo_selected_track', currentTrack);
  EPISODES = (currentTrack === 'must') ? MUST_EPISODES : AIN_SHAMS_EPISODES;

  // Update tabs UI
  const tabAin = document.getElementById('tab-ain-shams');
  const tabMust = document.getElementById('tab-must');
  if (tabAin && tabMust) {
    tabAin.classList.toggle('active', currentTrack === 'ain_shams');
    tabMust.classList.toggle('active', currentTrack === 'must');
  }

  // Update Header Brand
  const siteTitle = document.querySelector('.site-title');
  const siteTitleEn = document.querySelector('.site-title-en');
  if (siteTitle && siteTitleEn) {
    if (currentTrack === 'ain_shams') {
      siteTitle.textContent = 'طب عين شمس';
      siteTitleEn.textContent = 'Ain Shams Forensic · ID & DNA';
    } else {
      siteTitle.textContent = 'كود العظام';
      siteTitleEn.textContent = 'The Bone Code · MUST Forensic';
    }
  }

  // Update cross-portal slides link
  const btnGotoSlides = document.getElementById('btn-goto-slides');
  if (btnGotoSlides) {
    btnGotoSlides.href = `../slides-site/?track=${currentTrack}`;
  }

  // Update URL
  if (!skipHistory) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('track', currentTrack);
      window.history.replaceState({}, '', url.toString());
    } catch(e) {}
  }

  // Re-render grid or return to grid if out of range
  if (state.currentEpisode !== null && state.currentEpisode >= EPISODES.length) {
    showGridView();
  }
  populateImportTargetSelect();
  renderGrid();
}
"""

# Insert track_switch_func before `function init()`
app_js = app_js.replace("function init() {", track_switch_func + "\nfunction init() {", 1)

# In init(), wire up track switcher tabs and initial active track
old_init_top = """function init() {
  bindEvents();
  populateImportTargetSelect();
  checkSharedUrl();
  renderGrid();"""

new_init_top = """function init() {
  // Track switcher tabs
  const tabAin = document.getElementById('tab-ain-shams');
  const tabMust = document.getElementById('tab-must');
  if (tabAin) tabAin.addEventListener('click', () => updateActiveTrack('ain_shams'));
  if (tabMust) tabMust.addEventListener('click', () => updateActiveTrack('must'));

  updateActiveTrack(currentTrack, true);

  bindEvents();
  populateImportTargetSelect();
  checkSharedUrl();
  renderGrid();"""

if old_init_top in app_js:
    app_js = app_js.replace(old_init_top, new_init_top, 1)
    print("SUCCESS: Updated init() with track tab listeners!")
else:
    print("WARNING: old_init_top exact match failed, checking...")

with open("podcast-site/app.js", "w", encoding="utf-8") as f:
    f.write(app_js)

print("SUCCESS: podcast-site/app.js fully written!")
