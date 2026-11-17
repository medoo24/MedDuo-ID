# Fix autoscroll across CSS, JS, and HTML

# 1. Update podcast-site/style.css
with open("podcast-site/style.css", "r", encoding="utf-8") as f:
    css = f.read()

if "html.autoscrolling" not in css:
    css = css.replace("html {", "html.autoscrolling {\n  scroll-behavior: auto !important;\n}\n\nhtml {", 1)
    with open("podcast-site/style.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("SUCCESS: podcast-site/style.css updated with html.autoscrolling rule!")

# 2. Update podcast-site/index.html
with open("podcast-site/index.html", "r", encoding="utf-8") as f:
    html = f.read()

old_select = """          <select id="scroll-speed" class="speed-select">
            <option value="slow">🐢 بطيء</option>
            <option value="medium" selected>🚶 متوسط</option>
            <option value="fast">🏃 سريع</option>
          </select>"""

new_select = """          <select id="scroll-speed" class="speed-select" title="سرعة التمرير التلقائي الهادئ">
            <option value="slow">🐢 هادئ ومتأنٍ (قراءة دقيقة)</option>
            <option value="medium" selected>🚶 سلس ومريح (طبيعي)</option>
            <option value="fast">🏃 سريع (مراجعة خاطفة)</option>
          </select>"""

if old_select in html:
    html = html.replace(old_select, new_select, 1)
    with open("podcast-site/index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("SUCCESS: podcast-site/index.html updated with clear speeds!")
else:
    print("WARNING: old_select not found in index.html, check manually")

# 3. Update podcast-site/app.js
with open("podcast-site/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# Update scrollSpeeds in state
app_js = app_js.replace(
    "scrollSpeeds: { slow: 20, medium: 50, fast: 100 },",
    "scrollSpeeds: { slow: 26, medium: 52, fast: 98 },",
    1
)

# Replace old autoscroll functions
old_autoscroll = """// ─── AUTO-SCROLL ──────────────────────────────────────────────
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
}"""

new_autoscroll = """// ─── AUTO-SCROLL (Silky Smooth 60fps Teleprompter) ────────────
let autoScrollRafId = null;
let lastScrollTimestamp = 0;
let accumulatedScrollFraction = 0;

function autoScrollStep(timestamp) {
  if (!state.autoScrollPlaying) return;

  if (!lastScrollTimestamp) {
    lastScrollTimestamp = timestamp;
  }

  // Delta time in seconds, capped to avoid huge jumps on tab resume
  const dt = Math.min((timestamp - lastScrollTimestamp) / 1000, 0.08);
  lastScrollTimestamp = timestamp;

  const speedKey = ($scrollSpeed && $scrollSpeed.value) ? $scrollSpeed.value : 'medium';
  const pixelsPerSecond = state.scrollSpeeds[speedKey] || 52;

  accumulatedScrollFraction += pixelsPerSecond * dt;

  if (accumulatedScrollFraction >= 1) {
    const pixelsToMove = Math.floor(accumulatedScrollFraction);
    accumulatedScrollFraction -= pixelsToMove;

    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    // Stop gracefully at bottom of page
    if (window.scrollY >= maxScroll - 4) {
      stopAutoScroll();
      return;
    }

    // Scroll by precise pixel amount
    window.scrollBy(0, pixelsToMove);
  }

  autoScrollRafId = requestAnimationFrame(autoScrollStep);
}

function startAutoScroll() {
  if (state.autoScrollPlaying) return;
  state.autoScrollPlaying = true;
  document.documentElement.classList.add('autoscrolling');
  $btnScroll.textContent = '⏸';
  $btnScroll.classList.add('playing');
  $btnScroll.title = 'إيقاف مؤقت للتمرير التلقائي';

  lastScrollTimestamp = 0;
  accumulatedScrollFraction = 0;
  autoScrollRafId = requestAnimationFrame(autoScrollStep);
}

function stopAutoScroll() {
  state.autoScrollPlaying = false;
  document.documentElement.classList.remove('autoscrolling');
  if (autoScrollRafId) {
    cancelAnimationFrame(autoScrollRafId);
    autoScrollRafId = null;
  }
  lastScrollTimestamp = 0;
  accumulatedScrollFraction = 0;
  $btnScroll.textContent = '▶';
  $btnScroll.classList.remove('playing');
  $btnScroll.title = 'تشغيل التمرير التلقائي السلس';
}

// Gracefully pause if user scrolls manually with wheel or touch
window.addEventListener('wheel', () => {
  if (state.autoScrollPlaying) {
    stopAutoScroll();
  }
}, { passive: true });

window.addEventListener('touchstart', () => {
  if (state.autoScrollPlaying) {
    stopAutoScroll();
  }
}, { passive: true });"""

if old_autoscroll in app_js:
    app_js = app_js.replace(old_autoscroll, new_autoscroll, 1)
    with open("podcast-site/app.js", "w", encoding="utf-8") as f:
        f.write(app_js)
    print("SUCCESS: podcast-site/app.js updated with 60fps continuous autoscroll engine!")
else:
    print("WARNING: old_autoscroll not found in app.js, check manually")

print("AUTOSCROLL OVERHAUL COMPLETE!")
