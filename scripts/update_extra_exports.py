# scripts/update_extra_exports.py
import re

with open("slides-site/app.js", "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update exportEpisodeHTML
old_exp_html = '''    if (slide.type === 'title') {
      innerHTML = `<div style="text-align:center;padding:32px 0">
        <h1 style="font-family:Poppins,sans-serif;font-size:1.8rem;color:#1E293B">${slide.title}</h1>
        ${(content.bullets||[]).map(b => `<p style="color:#64748B">${b}</p>`).join('')}
      </div>`;
    } else if (content.question) {
      innerHTML += `<div style="background:#FFF8E1;border:2px solid #FFD93D;border-radius:10px;padding:14px;margin-bottom:10px">${content.question}</div>`;
      innerHTML += `<div style="background:#F0FFF4;border:1.5px solid #6BCB77;border-radius:10px;padding:14px">${content.answer}</div>`;
    } else if (content.calc) {
      innerHTML += `<pre style="background:#1E293B;color:#94A3B8;padding:16px;border-radius:8px;font-size:0.88rem;white-space:pre-wrap">${content.calc.join('\\n')}</pre>`;
    } else if (content.rows) {
      innerHTML += buildTableHTML(content);
      if (content.extra_bullets) innerHTML += content.extra_bullets.map(b => `<p style="margin:6px 0">${b}</p>`).join('');
    } else if (content.bullets) {
      innerHTML += '<ul style="list-style:none;padding:0">' +
        (content.bullets||[]).filter(b => b).map(b =>
          `<li style="margin:6px 0;padding-left:${b.match(/^\\s+/)?'28px':'0'}">${b.trim()}</li>`
        ).join('') + '</ul>';
    }'''

new_exp_html = '''    if (slide.type === 'title') {
      innerHTML = `<div style="text-align:center;padding:32px 0">
        <h1 style="font-family:Poppins,sans-serif;font-size:1.8rem;color:#1E293B">${slide.title}</h1>
        ${(content.bullets||[]).map(b => `<p style="color:#64748B">${b}</p>`).join('')}
      </div>`;
    } else if (content.question) {
      innerHTML += `<div style="background:#FFF8E1;border:2px solid #FFD93D;border-radius:10px;padding:14px;margin-bottom:10px">${content.question}</div>`;
      innerHTML += `<div style="background:#F0FFF4;border:1.5px solid #6BCB77;border-radius:10px;padding:14px">${content.answer}</div>`;
    } else if (content.calc) {
      innerHTML += `<pre style="background:#1E293B;color:#94A3B8;padding:16px;border-radius:8px;font-size:0.88rem;white-space:pre-wrap">${content.calc.join('\\n')}</pre>`;
    } else {
      if (content.flowchart && content.flowchart.length) {
        innerHTML += buildFlowchartHTML(content.flowchart);
      }
      if (content.cards && content.cards.length) {
        innerHTML += buildCardsGridHTML(content.cards);
      }
      if (content.timeline && content.timeline.length) {
        innerHTML += buildTimelineHTML(content.timeline);
      }
      if (content.trap) {
        innerHTML += buildTrapBoxHTML(content.trap);
      }
      if (content.rows) {
        innerHTML += buildTableHTML(content);
        if (content.extra_bullets) innerHTML += content.extra_bullets.map(b => `<p style="margin:6px 0">${b}</p>`).join('');
      }
      if (content.bullets && content.bullets.length) {
        innerHTML += '<ul style="list-style:none;padding:0">' +
          (content.bullets||[]).filter(b => b).map(b =>
            `<li style="margin:6px 0;padding-left:${b.match(/^\\s+/)?'28px':'0'}">${b.trim()}</li>`
          ).join('') + '</ul>';
      }
    }'''

code = code.replace(old_exp_html, new_exp_html, 1)

# 2. Update renderFavorites
old_fav_render = '''        const content = slide.content || {};
        if (content.question) body.appendChild(buildQuiz(content));
        else if (content.calc) body.appendChild(buildCalc(content.calc));
        else if (content.rows) body.appendChild(buildTable(content));
        else if (content.bullets) body.appendChild(buildBullets(content.bullets));'''

new_fav_render = '''        const content = slide.content || {};
        if (content.question) body.appendChild(buildQuiz(content));
        else if (content.calc) body.appendChild(buildCalc(content.calc));
        else {
          if (content.flowchart && content.flowchart.length) body.appendChild(buildFlowchart(content.flowchart));
          if (content.cards && content.cards.length) body.appendChild(buildCardsGrid(content.cards));
          if (content.timeline && content.timeline.length) body.appendChild(buildTimeline(content.timeline));
          if (content.trap) body.appendChild(buildTrapBox(content.trap));
          if (content.rows) body.appendChild(buildTable(content));
          if (content.bullets) body.appendChild(buildBullets(content.bullets));
        }'''

code = code.replace(old_fav_render, new_fav_render, 1)

with open("slides-site/app.js", "w", encoding="utf-8") as f:
    f.write(code)

print("SUCCESS: HTML and Favorites export updated!")
