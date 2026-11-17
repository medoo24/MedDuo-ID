import re
import json

# ==========================================
# 1. PARSE MARKDOWN TO DIALOGUE (AIN SHAMS)
# ==========================================
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

# ==========================================
# 2. UPDATE PODCAST-SITE/APP.JS
# ==========================================
with open("podcast-site/app.js", "r", encoding="utf-8") as f:
    p_app = f.read()

# Make sure AIN_SHAMS_EPISODES and MUST_EPISODES are properly defined
if "const AIN_SHAMS_EPISODES =" not in p_app:
    p_app = p_app.replace("const EPISODES = [", f"const AIN_SHAMS_EPISODES = {json.dumps(ain_shams_episodes, ensure_ascii=False, indent=2)};\n\nconst MUST_EPISODES = [", 1)
else:
    # Update existing AIN_SHAMS_EPISODES
    p_app = re.sub(r'const AIN_SHAMS_EPISODES = \[[\s\S]*?\];\s*const MUST_EPISODES = \[', f"const AIN_SHAMS_EPISODES = {json.dumps(ain_shams_episodes, ensure_ascii=False, indent=2)};\n\nconst MUST_EPISODES = [", p_app)

# Ensure track state is initialized
if "const initialUrlTrack =" not in p_app:
    # Insert after MUST_EPISODES definition closes
    p_app = re.sub(r'(\nconst MUST_EPISODES = \[[\s\S]*?\n\];)', r'\1\n\n' + """// ─── ACTIVE TRACK MANAGEMENT (Ain Shams vs MUST) ─────────
const initialUrlTrack = new URLSearchParams(window.location.search).get('track');
const initialStoredTrack = localStorage.getItem('medduo_selected_track');
const defaultTrack = (initialUrlTrack === 'must' || (!initialUrlTrack && initialStoredTrack === 'must')) ? 'must' : 'ain_shams';

let currentTrack = defaultTrack;
let EPISODES = (currentTrack === 'must') ? MUST_EPISODES : AIN_SHAMS_EPISODES;
""", p_app)

# Update lsKey for track isolation
p_app = re.sub(
    r'function lsKey\(epIdx\)\s*\{\s*return\s*\'medduo_ep_\'\s*\+\s*epIdx;\s*\}',
    """function lsKey(epIdx) {
  return 'medduo_ep_' + (currentTrack || 'ain_shams') + '_' + epIdx;
}""",
    p_app
)

# Update getEpisodeData to support track isolation & fallback
old_get_ep_regex = r'function getEpisodeData\(epIdx\)\s*\{[\s\S]*?return\s*\{\s*title:\s*EPISODES\[epIdx\]\.title,[\s\S]*?dialogue:\s*deepClone\(EPISODES\[epIdx\]\.dialogue\)[\s\S]*?\};\s*\}'
new_get_ep_code = """function getEpisodeData(epIdx) {
  if (!EPISODES[epIdx]) return { title: '', description: '', dialogue: [] };

  // If actively viewing a colleague's shared version for this episode
  if (state.isViewingShared && state.sharedData && state.currentEpisode === epIdx) {
    return {
      title: state.sharedData.title || EPISODES[epIdx].title,
      description: state.sharedData.description || EPISODES[epIdx].description,
      dialogue: state.sharedData.dialogue || deepClone(EPISODES[epIdx].dialogue)
    };
  }

  try {
    let raw = localStorage.getItem(lsKey(epIdx));
    if (!raw && currentTrack === 'must') {
      raw = localStorage.getItem('medduo_ep_' + epIdx);
    }
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
}"""
p_app = re.sub(old_get_ep_regex, new_get_ep_code, p_app)

# Ensure updateActiveTrack exists
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

if "function updateActiveTrack(" not in p_app:
    p_app = p_app.replace("function init() {", track_switch_func + "\nfunction init() {", 1)

# In init(), wire up track switcher tabs
if "const tabAin = document.getElementById('tab-ain-shams');" not in p_app:
    p_app = p_app.replace("function init() {\n", """function init() {
  // Track tabs event listeners
  const tabAin = document.getElementById('tab-ain-shams');
  const tabMust = document.getElementById('tab-must');
  if (tabAin) tabAin.addEventListener('click', () => updateActiveTrack('ain_shams'));
  if (tabMust) tabMust.addEventListener('click', () => updateActiveTrack('must'));

  updateActiveTrack(currentTrack, true);
\n""", 1)

with open("podcast-site/app.js", "w", encoding="utf-8") as f:
    f.write(p_app)
print("SUCCESS: podcast-site/app.js updated!")

# ==========================================
# 3. UPDATE PODCAST-SITE/INDEX.HTML
# ==========================================
with open("podcast-site/index.html", "r", encoding="utf-8") as f:
    p_html = f.read()

# Add cross-portal links to header if not present
if "id=\"btn-goto-slides\"" not in p_html:
    nav_links = """        <a href="../slides-site/" id="btn-goto-slides" class="ctrl-btn portal-link" title="انتقل إلى منصة السلايدات والشرائح">
          <span class="icon">📊</span>
          <span class="label">السلايدات</span>
        </a>
        <a href="../index.html" class="ctrl-btn portal-link" title="العودة للبوابة الرئيسية">
          <span class="icon">🏠</span>
          <span class="label">الرئيسية</span>
        </a>
"""
    p_html = p_html.replace('<div class="header-controls">', '<div class="header-controls">\n' + nav_links, 1)

# Add track switcher to view-grid if not present
if "id=\"track-switcher\"" not in p_html:
    track_switcher_html = """        <!-- University Track Switcher -->
        <div class="track-switcher" id="track-switcher">
          <button class="track-tab active" id="tab-ain-shams" data-track="ain_shams" title="منهج طب عين شمس — 3 حلقات">
            <span class="track-icon">🏛️</span>
            <span class="track-name">Ain_shams-ID&DNA</span>
          </button>
          <button class="track-tab" id="tab-must" data-track="must" title="سلسلة كود العظام — جامعة مصر — 8 حلقات">
            <span class="track-icon">🦴</span>
            <span class="track-name">MUST-ID</span>
          </button>
        </div>
"""
    p_html = p_html.replace('<!-- Global Collaborative Tools Bar -->', track_switcher_html + '\n        <!-- Global Collaborative Tools Bar -->', 1)

with open("podcast-site/index.html", "w", encoding="utf-8") as f:
    f.write(p_html)
print("SUCCESS: podcast-site/index.html updated!")

# ==========================================
# 4. UPDATE PODCAST-SITE/STYLE.CSS
# ==========================================
with open("podcast-site/style.css", "r", encoding="utf-8") as f:
    p_css = f.read()

if ".track-switcher" not in p_css:
    track_css = """
/* ── University Track Switcher in Podcast Site ── */
.track-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 18px auto 26px;
  max-width: 520px;
  background: var(--bg-card, #1A1D23);
  padding: 6px;
  border-radius: 16px;
  border: 1.5px solid var(--border, #2D333B);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
.track-tab {
  flex: 1;
  padding: 10px 18px;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-muted, #8B949E);
  background: transparent;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.22s ease-in-out;
}
.track-tab .track-icon { font-size: 1.2rem; }
.track-tab:hover {
  color: var(--text-main, #F0F6FC);
  background: rgba(255, 255, 255, 0.05);
}
.track-tab.active {
  background: var(--bg-main, #0D0F12);
  color: var(--cyan, #4DD9E8);
  box-shadow: 0 3px 12px rgba(77, 217, 232, 0.2);
  border: 1px solid var(--cyan, #4DD9E8);
}
.portal-link {
  text-decoration: none;
}
"""
    p_css += track_css
    with open("podcast-site/style.css", "w", encoding="utf-8") as f:
        f.write(p_css)
    print("SUCCESS: podcast-site/style.css updated!")

# ==========================================
# 5. UPDATE SLIDES-SITE NAVIGATION
# ==========================================
with open("slides-site/index.html", "r", encoding="utf-8") as f:
    s_html = f.read()

if "id=\"btn-goto-podcast\"" not in s_html:
    nav_links = """      <a href="../podcast-site/" class="nav-btn podcast-nav-link" id="btn-goto-podcast" title="انتقل إلى منصة البودكاست">🎙️ البودكاست</a>
      <a href="../index.html" class="nav-btn portal-home-link" title="العودة للبوابة الرئيسية">🏠 البوابة الرئيسية</a>
"""
    s_html = s_html.replace('<nav class="header-nav" id="header-nav">', '<nav class="header-nav" id="header-nav">\n' + nav_links, 1)
    with open("slides-site/index.html", "w", encoding="utf-8") as f:
        f.write(s_html)
    print("SUCCESS: slides-site/index.html updated with cross-nav!")

with open("slides-site/style.css", "r", encoding="utf-8") as f:
    s_css = f.read()

if ".podcast-nav-link" not in s_css:
    s_nav_css = """
.podcast-nav-link {
  text-decoration: none;
  color: var(--cyan) !important;
  border-color: var(--cyan) !important;
  display: inline-flex;
  align-items: center;
  font-weight: 700;
}
.podcast-nav-link:hover {
  background: var(--cyan) !important;
  color: #fff !important;
}
.portal-home-link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}
"""
    s_css += s_nav_css
    with open("slides-site/style.css", "w", encoding="utf-8") as f:
        f.write(s_css)
    print("SUCCESS: slides-site/style.css updated!")

# Update slides-site/app.js to synchronize #btn-goto-podcast href
with open("slides-site/app.js", "r", encoding="utf-8") as f:
    s_app = f.read()

if "document.getElementById('btn-goto-podcast')" not in s_app:
    s_app = s_app.replace(
        "window.SLIDES_DATA = (state.track === 'must') ? window.MUST_SLIDES_DATA : window.AIN_SHAMS_SLIDES_DATA;",
        """window.SLIDES_DATA = (state.track === 'must') ? window.MUST_SLIDES_DATA : window.AIN_SHAMS_SLIDES_DATA;

  const btnGotoPodcast = document.getElementById('btn-goto-podcast');
  if (btnGotoPodcast) {
    btnGotoPodcast.href = `../podcast-site/?track=${state.track}`;
  }""",
        1
    )
    with open("slides-site/app.js", "w", encoding="utf-8") as f:
        f.write(s_app)
    print("SUCCESS: slides-site/app.js updated with dynamic podcast link!")

print("ALL INTEGRATION COMPLETED SUCCESSFULLY!")
