# scripts/integrate_visual_components.py
import re

with open("slides-site/app.js", "r", encoding="utf-8") as f:
    code = f.read()

# 1. ADD VISUAL HELPER FUNCTIONS BEFORE typeBadgeHTML
visual_helpers = '''/* ════════════════════════════════════
   VISUAL COMPONENT BUILDERS (DOM)
   ════════════════════════════════════ */
function buildFlowchart(flowData) {
  const container = document.createElement('div');
  container.className = 'visual-flowchart';
  flowData.forEach((node, i) => {
    const el = document.createElement('div');
    el.className = 'flow-node';
    el.innerHTML = `
      <div class="flow-node-top">
        <span class="flow-node-step">${escHtml(node.step || `STEP ${i+1}`)}</span>
        <span class="flow-node-icon">${escHtml(node.icon || '➡️')}</span>
      </div>
      <div class="flow-node-title">${escHtml(node.title || '')}</div>
      <div class="flow-node-desc">${escHtml(node.desc || '')}</div>
    `;
    container.appendChild(el);
    if (i < flowData.length - 1) {
      const arrow = document.createElement('div');
      arrow.className = 'flow-arrow';
      arrow.innerHTML = '➔';
      container.appendChild(arrow);
    }
  });
  return container;
}

function buildCardsGrid(cardsData) {
  const grid = document.createElement('div');
  grid.className = 'visual-cards-grid';
  cardsData.forEach(c => {
    const card = document.createElement('div');
    const theme = c.theme || 'cyan';
    card.className = `visual-card theme-${theme}`;
    const itemsHTML = (c.items || []).map(it => `<li>${escHtml(it)}</li>`).join('');
    const highlightHTML = c.highlight ? `<div class="card-highlight">${escHtml(c.highlight)}</div>` : '';
    card.innerHTML = `
      <div class="card-top">
        <span class="card-badge">${escHtml(c.badge || '')}</span>
        <span class="card-icon">${escHtml(c.icon || '📌')}</span>
      </div>
      <div class="card-title">${escHtml(c.title || '')}</div>
      <ul class="card-items">${itemsHTML}</ul>
      ${highlightHTML}
    `;
    grid.appendChild(card);
  });
  return grid;
}

function buildTimeline(timelineData) {
  const container = document.createElement('div');
  container.className = 'visual-timeline';
  timelineData.forEach(item => {
    const row = document.createElement('div');
    row.className = 'timeline-item';
    row.innerHTML = `
      <div class="timeline-pill">${escHtml(item.age || item.time || '')}</div>
      <div class="timeline-icon">${escHtml(item.icon || '⏱️')}</div>
      <div class="timeline-body">
        <div class="timeline-title">${escHtml(item.title || '')}</div>
        <div class="timeline-desc">${escHtml(item.desc || '')}</div>
      </div>
    `;
    container.appendChild(row);
  });
  return container;
}

function buildTrapBox(trapData) {
  const box = document.createElement('div');
  box.className = 'visual-trap-box';
  box.innerHTML = `
    <div class="trap-header">⚠️ EXAM TRAP · شفوي عين شمس</div>
    <div class="trap-title">${escHtml(trapData.title || '')}</div>
    <div class="trap-body">${escHtml(trapData.desc || '')}</div>
  `;
  return box;
}

/* ════════════════════════════════════
   VISUAL COMPONENT BUILDERS (INLINE HTML FOR PDF / PRINT)
   ════════════════════════════════════ */
function buildFlowchartHTML(flowData) {
  let html = '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">';
  flowData.forEach((node, i) => {
    html += `
      <div style="flex:1 1 150px;min-width:130px;background:#F8FAFC;border:1px solid #CBD5E1;border-radius:8px;padding:8px 10px;box-sizing:border-box;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
          <span style="font-size:9px;font-weight:800;color:#0284C7;background:#E0F2FE;padding:1px 6px;border-radius:10px;">${escHtml(node.step || `STEP ${i+1}`)}</span>
          <span style="font-size:12px;">${escHtml(node.icon || '➡️')}</span>
        </div>
        <div style="font-size:11px;font-weight:700;color:#0F172A;margin-bottom:3px;line-height:1.2;">${escHtml(node.title || '')}</div>
        <div style="font-size:9.5px;color:#475569;line-height:1.35;">${escHtml(node.desc || '')}</div>
      </div>
    `;
    if (i < flowData.length - 1 && i % 3 !== 2) {
      html += `<div style="display:flex;align-items:center;color:#94A3B8;font-size:11px;font-weight:bold;">➔</div>`;
    }
  });
  html += '</div>';
  return html;
}

function buildCardsGridHTML(cardsData) {
  const colCount = cardsData.length > 2 ? (cardsData.length === 3 ? 3 : 2) : cardsData.length;
  let html = `<div style="display:grid;grid-template-columns:repeat(${colCount}, 1fr);gap:10px;margin-bottom:12px;">`;
  cardsData.forEach(c => {
    const theme = c.theme || 'cyan';
    let borderTop = '#0284C7';
    let badgeBg = '#E0F2FE';
    let badgeColor = '#0369A1';
    if (theme === 'amber') { borderTop = '#F59E0B'; badgeBg = '#FEF3C7'; badgeColor = '#B45309'; }
    else if (theme === 'emerald') { borderTop = '#10B981'; badgeBg = '#D1FAE5'; badgeColor = '#047857'; }
    else if (theme === 'rose') { borderTop = '#F43F5E'; badgeBg = '#FFE4E6'; badgeColor = '#BE123C'; }
    else if (theme === 'purple') { borderTop = '#8B5CF6'; badgeBg = '#EDE9FE'; badgeColor = '#6D28D9'; }

    const itemsHTML = (c.items || []).map(it => `<li style="margin-bottom:2px;">${escHtml(it)}</li>`).join('');
    const highlightHTML = c.highlight ? `<div style="margin-top:6px;padding:4px 8px;background:#F8FAFC;border-left:3px solid ${borderTop};border-radius:4px;font-size:10px;font-weight:600;color:#0F172A;">${escHtml(c.highlight)}</div>` : '';

    html += `
      <div style="background:#FFFFFF;border:1px solid #CBD5E1;border-top:3.5px solid ${borderTop};border-radius:8px;padding:10px 12px;box-sizing:border-box;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:9px;font-weight:800;background:${badgeBg};color:${badgeColor};padding:1px 6px;border-radius:10px;">${escHtml(c.badge || '')}</span>
          <span style="font-size:13px;">${escHtml(c.icon || '📌')}</span>
        </div>
        <div style="font-size:11.5px;font-weight:700;color:#0F172A;margin-bottom:6px;line-height:1.25;">${escHtml(c.title || '')}</div>
        <ul style="margin:0;padding-left:14px;font-size:10px;color:#334155;line-height:1.4;">${itemsHTML}</ul>
        ${highlightHTML}
      </div>
    `;
  });
  html += '</div>';
  return html;
}

function buildTimelineHTML(timelineData) {
  let html = '<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px;">';
  timelineData.forEach(item => {
    html += `
      <div style="display:flex;align-items:center;gap:10px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:6px;padding:6px 10px;">
        <span style="background:#0284C7;color:#FFFFFF;font-size:9.5px;font-weight:800;padding:2px 8px;border-radius:12px;white-space:nowrap;">${escHtml(item.age || item.time || '')}</span>
        <span style="font-size:12px;">${escHtml(item.icon || '⏱️')}</span>
        <div style="flex:1;min-width:0;">
          <span style="font-size:11px;font-weight:700;color:#0F172A;margin-right:6px;">${escHtml(item.title || '')}:</span>
          <span style="font-size:10px;color:#475569;">${escHtml(item.desc || '')}</span>
        </div>
      </div>
    `;
  });
  html += '</div>';
  return html;
}

function buildTrapBoxHTML(trapData) {
  return `
    <div style="background:#FFFBEB;border:1.5px solid #F59E0B;border-left:4px solid #D97706;border-radius:8px;padding:10px 14px;margin-top:10px;margin-bottom:10px;">
      <div style="font-size:9.5px;font-weight:800;color:#B45309;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">⚠️ EXAM TRAP · شفوي عين شمس</div>
      <div style="font-size:11.5px;font-weight:700;color:#92400E;margin-bottom:3px;">${escHtml(trapData.title || '')}</div>
      <div style="font-size:10.5px;color:#78350F;line-height:1.4;">${escHtml(trapData.desc || '')}</div>
    </div>
  `;
}

'''

target_badge = 'function typeBadgeHTML(type) {'
if visual_helpers.strip() not in code:
    code = code.replace(target_badge, f"{visual_helpers}\n{target_badge}", 1)

# 2. UPDATE buildSlideCard BODY RENDERING
old_card_body = '''    if (slide.type === 'quiz') {
      body.appendChild(buildQuiz(content));
    } else if (content.calc) {
      body.appendChild(buildCalc(content.calc));
    } else if (content.rows) {
      // has table
      body.appendChild(buildTable(content));
      if (content.extra_bullets && content.extra_bullets.length) {
        body.appendChild(buildBullets(content.extra_bullets));
      }
    } else if (content.bullets) {
      body.appendChild(buildBullets(content.bullets));
    }'''

new_card_body = '''    if (slide.type === 'quiz') {
      body.appendChild(buildQuiz(content));
    } else if (content.calc) {
      body.appendChild(buildCalc(content.calc));
    } else {
      // Flowchart
      if (content.flowchart && content.flowchart.length) {
        body.appendChild(buildFlowchart(content.flowchart));
      }
      // Cards Grid (Mindmap / Comparison / Clinical Cases)
      if (content.cards && content.cards.length) {
        body.appendChild(buildCardsGrid(content.cards));
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
      // Bullets (rendered if present)
      if (content.bullets && content.bullets.length) {
        body.appendChild(buildBullets(content.bullets));
      }
    }'''

code = code.replace(old_card_body, new_card_body, 1)

# 3. UPDATE buildCleanSlideSheet (PDF & PRINT GENERATOR)
old_pdf_body = '''  if (slide.type === 'title') {
    contentCol.innerHTML = `
      <div style="text-align:${hasImgs ? 'left' : 'center'};padding:${hasImgs ? '20px 0' : '50px 0'};">
        <h1 style="font-family:Poppins,sans-serif;font-size:2rem;color:#0284C7;margin-bottom:12px;">${escHtml(slide.title)}</h1>
        ${(content.bullets || []).map(b => `<p style="font-size:1.1rem;color:#475569;margin:8px 0;line-height:1.5;">${escHtml(b)}</p>`).join('')}
      </div>
    `;
  } else if (content.question) {
    contentCol.innerHTML = `
      <div style="background:#FEF3C7;border:1.5px solid #F59E0B;border-radius:10px;padding:16px 20px;margin-bottom:14px;">
        <div style="font-size:11px;font-weight:700;color:#B45309;text-transform:uppercase;margin-bottom:4px;">Question</div>
        <div style="font-size:14px;color:#92400E;font-weight:600;line-height:1.5;">${escHtml(content.question)}</div>
      </div>
      <div style="background:#DCFCE7;border:1.5px solid #10B981;border-radius:10px;padding:16px 20px;">
        <div style="font-size:11px;font-weight:700;color:#15803D;text-transform:uppercase;margin-bottom:4px;">Answer & Analysis</div>
        <div style="font-size:13.5px;color:#166534;line-height:1.5;">${escHtml(content.answer)}</div>
      </div>
    `;
  } else if (content.calc) {
    contentCol.innerHTML = `
      <pre style="background:#0F172A;color:#38BDF8;font-family:Consolas,monospace;font-size:12px;padding:18px;border-radius:10px;line-height:1.6;white-space:pre-wrap;margin:0;">${escHtml(content.calc.join('\\n'))}</pre>
    `;
  } else if (content.rows) {
    const isCompact = content.rows.length > 5;
    let tableHTML = `
      <table style="width:100%;border-collapse:collapse;font-size:${isCompact ? '11px' : '12px'};border:1px solid #CBD5E1;border-radius:8px;overflow:hidden;margin-bottom:12px;">
        <thead>
          <tr style="background:#0284C7;color:#FFFFFF;">
            ${content.headers.map(h => `<th style="padding:${isCompact ? '6px 10px' : '8px 12px'};text-align:left;font-weight:600;">${escHtml(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${content.rows.map((r, ri) => `
            <tr style="background:${ri % 2 === 0 ? '#F8FAFC' : '#FFFFFF'};border-top:1px solid #E2E8F0;">
              ${r.map(c => `<td style="padding:${isCompact ? '5px 10px' : '7px 12px'};color:#1E293B;line-height:1.4;">${escHtml(c)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    if (content.extra_bullets && content.extra_bullets.length) {
      tableHTML += `
        <div style="margin-top:8px;">
          ${content.extra_bullets.map(b => `<div style="font-size:11.5px;color:#334155;margin:4px 0;line-height:1.4;">• ${escHtml(b.replace(/^[\\s•\\-\\*]+/, ''))}</div>`).join('')}
        </div>
      `;
    }
    contentCol.innerHTML = tableHTML;
  } else if (content.bullets && content.bullets.length) {
    const count = content.bullets.length;
    let bSize = count > 8 ? '11.5px' : (count > 5 ? '12.5px' : '13.5px');
    let bMargin = count > 8 ? '6px' : '10px';
    let bulletsHTML = '<div style="display:flex;flex-direction:column;gap:' + bMargin + ';">';
    content.bullets.forEach(b => {
      const isSub = b.startsWith('  ') || b.startsWith('\\t') || b.match(/^\\s+•/);
      const cleanB = b.replace(/^[\\s•\\-\\*]+/, '').trim();
      bulletsHTML += `
        <div style="display:flex;gap:10px;align-items:flex-start;padding-left:${isSub ? '24px' : '0'};font-size:${isSub ? '11px' : bSize};line-height:1.5;color:${isSub ? '#475569' : '#1E293B'};">
          <span style="color:#0284C7;font-weight:bold;line-height:1;">${isSub ? '○' : '●'}</span>
          <span style="flex:1;">${escHtml(cleanB)}</span>
        </div>
      `;
    });
    bulletsHTML += '</div>';
    contentCol.innerHTML = bulletsHTML;
  }'''

new_pdf_body = '''  if (slide.type === 'title') {
    contentCol.innerHTML = `
      <div style="text-align:${hasImgs ? 'left' : 'center'};padding:${hasImgs ? '20px 0' : '50px 0'};">
        <h1 style="font-family:Poppins,sans-serif;font-size:2rem;color:#0284C7;margin-bottom:12px;">${escHtml(slide.title)}</h1>
        ${(content.bullets || []).map(b => `<p style="font-size:1.1rem;color:#475569;margin:8px 0;line-height:1.5;">${escHtml(b)}</p>`).join('')}
      </div>
    `;
  } else if (content.question) {
    contentCol.innerHTML = `
      <div style="background:#FEF3C7;border:1.5px solid #F59E0B;border-radius:10px;padding:16px 20px;margin-bottom:14px;">
        <div style="font-size:11px;font-weight:700;color:#B45309;text-transform:uppercase;margin-bottom:4px;">Question</div>
        <div style="font-size:14px;color:#92400E;font-weight:600;line-height:1.5;">${escHtml(content.question)}</div>
      </div>
      <div style="background:#DCFCE7;border:1.5px solid #10B981;border-radius:10px;padding:16px 20px;">
        <div style="font-size:11px;font-weight:700;color:#15803D;text-transform:uppercase;margin-bottom:4px;">Answer & Analysis</div>
        <div style="font-size:13.5px;color:#166534;line-height:1.5;">${escHtml(content.answer)}</div>
      </div>
    `;
  } else if (content.calc) {
    contentCol.innerHTML = `
      <pre style="background:#0F172A;color:#38BDF8;font-family:Consolas,monospace;font-size:12px;padding:18px;border-radius:10px;line-height:1.6;white-space:pre-wrap;margin:0;">${escHtml(content.calc.join('\\n'))}</pre>
    `;
  } else {
    let colHTML = '';
    // Flowchart
    if (content.flowchart && content.flowchart.length) {
      colHTML += buildFlowchartHTML(content.flowchart);
    }
    // Cards Grid (Mindmap / Comparison / Clinical Cases)
    if (content.cards && content.cards.length) {
      colHTML += buildCardsGridHTML(content.cards);
    }
    // Timeline
    if (content.timeline && content.timeline.length) {
      colHTML += buildTimelineHTML(content.timeline);
    }
    // Exam Trap Callout Box
    if (content.trap) {
      colHTML += buildTrapBoxHTML(content.trap);
    }
    // Table
    if (content.rows) {
      const isCompact = content.rows.length > 5;
      let tableHTML = `
        <table style="width:100%;border-collapse:collapse;font-size:${isCompact ? '11px' : '12px'};border:1px solid #CBD5E1;border-radius:8px;overflow:hidden;margin-bottom:12px;">
          <thead>
            <tr style="background:#0284C7;color:#FFFFFF;">
              ${content.headers.map(h => `<th style="padding:${isCompact ? '6px 10px' : '8px 12px'};text-align:left;font-weight:600;">${escHtml(h)}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${content.rows.map((r, ri) => `
              <tr style="background:${ri % 2 === 0 ? '#F8FAFC' : '#FFFFFF'};border-top:1px solid #E2E8F0;">
                ${r.map(c => `<td style="padding:${isCompact ? '5px 10px' : '7px 12px'};color:#1E293B;line-height:1.4;">${escHtml(c)}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      if (content.extra_bullets && content.extra_bullets.length) {
        tableHTML += `
          <div style="margin-top:8px;">
            ${content.extra_bullets.map(b => `<div style="font-size:11.5px;color:#334155;margin:4px 0;line-height:1.4;">• ${escHtml(b.replace(/^[\\s•\\-\\*]+/, ''))}</div>`).join('')}
          </div>
        `;
      }
      colHTML += tableHTML;
    }
    // Bullets (rendered if present)
    if (content.bullets && content.bullets.length) {
      const count = content.bullets.length;
      let bSize = count > 8 ? '11.5px' : (count > 5 ? '12.5px' : '13.5px');
      let bMargin = count > 8 ? '6px' : '10px';
      let bulletsHTML = '<div style="display:flex;flex-direction:column;gap:' + bMargin + ';">';
      content.bullets.forEach(b => {
        const isSub = b.startsWith('  ') || b.startsWith('\\t') || b.match(/^\\s+•/);
        const cleanB = b.replace(/^[\\s•\\-\\*]+/, '').trim();
        bulletsHTML += `
          <div style="display:flex;gap:10px;align-items:flex-start;padding-left:${isSub ? '24px' : '0'};font-size:${isSub ? '11px' : bSize};line-height:1.5;color:${isSub ? '#475569' : '#1E293B'};">
            <span style="color:#0284C7;font-weight:bold;line-height:1;">${isSub ? '○' : '●'}</span>
            <span style="flex:1;">${escHtml(cleanB)}</span>
          </div>
        `;
      });
      bulletsHTML += '</div>';
      colHTML += bulletsHTML;
    }
    contentCol.innerHTML = colHTML;
  }'''

code = code.replace(old_pdf_body, new_pdf_body, 1)

# 4. UPDATE exportEpisodePPT (POWERPOINT GENERATOR)
old_ppt_bullets = '''      // Render Bullets Slide
      else if (content.bullets && content.bullets.length) {
        const count = content.bullets.length;
        let fSize = 13;
        let lSpace = 20;
        if (count >= 10) { fSize = 10; lSpace = 15; }
        else if (count >= 7) { fSize = 11.5; lSpace = 18; }
        else if (count >= 5) { fSize = 12.5; lSpace = 20; }

        const textItems = content.bullets.map((b, bi) => {
          const isSub = b.startsWith('  ') || b.startsWith('\\t') || b.match(/^\\s+•/);
          return {
            text: b.replace(/^[\\s•\\-\\*]+/, '').trim(),
            options: {
              bullet: true,
              breakLine: bi < content.bullets.length - 1,
              indentLevel: isSub ? 1 : 0,
              fontSize: isSub ? fSize - 1 : fSize,
              color: isSub ? '475569' : '1E293B',
              fontFace: 'Calibri',
              lineSpacing: lSpace
            }
          };
        });

        s.addText(textItems, {
          x: 0.8, y: contentStartY, w: totalW, h: 5.2,
          valign: 'top', fontFace: 'Calibri'
        });
      }'''

new_ppt_bullets = '''      // Render Cards Slide (Mindmap / Comparison / Clinical Cases)
      else if (content.cards && content.cards.length) {
        const cardItems = [];
        const isMulti = content.cards.length > 2;
        const baseFontSize = isMulti ? 9.5 : 10.5;
        const titleFontSize = isMulti ? 10.5 : 11.5;

        content.cards.forEach((c, ci) => {
          cardItems.push({
            text: `[${c.badge || 'SECTION'}] ${c.title}`,
            options: {
              bold: true,
              fontSize: titleFontSize,
              color: c.theme === 'amber' ? 'B45309' : (c.theme === 'rose' ? 'BE123C' : (c.theme === 'emerald' ? '047857' : '0284C7')),
              fontFace: 'Calibri',
              breakLine: true
            }
          });
          (c.items || []).forEach(it => {
            cardItems.push({
              text: `  • ${it}`,
              options: {
                fontSize: baseFontSize,
                color: '334155',
                fontFace: 'Calibri',
                breakLine: true,
                lineSpacing: 14
              }
            });
          });
          if (c.highlight) {
            cardItems.push({
              text: `  ★ ${c.highlight}`,
              options: {
                bold: true,
                fontSize: baseFontSize - 0.5,
                color: '0369A1',
                fontFace: 'Calibri',
                breakLine: true
              }
            });
          }
          if (ci < content.cards.length - 1) {
            cardItems.push({ text: ' ', options: { fontSize: 4, breakLine: true } });
          }
        });

        const cardsH = content.trap ? 3.8 : 5.2;
        s.addText(cardItems, {
          x: 0.8, y: contentStartY, w: totalW, h: cardsH,
          valign: 'top', fontFace: 'Calibri'
        });

        if (content.trap) {
          s.addText(`⚠️ EXAM TRAP: ${content.trap.title}\\n${content.trap.desc}`, {
            x: 0.8, y: 5.4, w: totalW, h: 1.3,
            fontSize: 9.5, color: '78350F', fill: 'FEF3C7',
            line: { color: 'F59E0B', width: 1 },
            margin: 6, fontFace: 'Calibri', valign: 'top', wrap: true
          });
        }
      }
      // Render Flowchart Slide
      else if (content.flowchart && content.flowchart.length) {
        const flowItems = [];
        const isLong = content.flowchart.length > 4;
        const fSize = isLong ? 9.5 : 10.5;

        content.flowchart.forEach((node, ni) => {
          flowItems.push({
            text: `➔ [${node.step || `STEP ${ni+1}`}] ${node.title}`,
            options: {
              bold: true,
              fontSize: fSize + 1,
              color: '0284C7',
              fontFace: 'Calibri',
              breakLine: true
            }
          });
          if (node.desc) {
            flowItems.push({
              text: `    ${node.desc}`,
              options: {
                fontSize: fSize,
                color: '475569',
                fontFace: 'Calibri',
                breakLine: true,
                lineSpacing: 14
              }
            });
          }
          if (ni < content.flowchart.length - 1) {
            flowItems.push({ text: ' ', options: { fontSize: 4, breakLine: true } });
          }
        });

        if (content.bullets && content.bullets.length) {
          flowItems.push({ text: ' ', options: { fontSize: 6, breakLine: true } });
          content.bullets.forEach(b => {
            flowItems.push({
              text: `• ${b.replace(/^[\\s•\\-\\*]+/, '').trim()}`,
              options: { fontSize: 9.5, color: '1E293B', fontFace: 'Calibri', breakLine: true }
            });
          });
        }

        const flowH = content.trap ? 3.8 : 5.2;
        s.addText(flowItems, {
          x: 0.8, y: contentStartY, w: totalW, h: flowH,
          valign: 'top', fontFace: 'Calibri'
        });

        if (content.trap) {
          s.addText(`⚠️ EXAM TRAP: ${content.trap.title}\\n${content.trap.desc}`, {
            x: 0.8, y: 5.4, w: totalW, h: 1.3,
            fontSize: 9.5, color: '78350F', fill: 'FEF3C7',
            line: { color: 'F59E0B', width: 1 },
            margin: 6, fontFace: 'Calibri', valign: 'top', wrap: true
          });
        }
      }
      // Render Timeline Slide
      else if (content.timeline && content.timeline.length) {
        const timeItems = [];
        const isLong = content.timeline.length > 5;
        const fSize = isLong ? 9.5 : 10.5;

        content.timeline.forEach((item, ti) => {
          timeItems.push({
            text: `⏱️ [${item.age || item.time || ''}] ${item.title}`,
            options: {
              bold: true,
              fontSize: fSize + 0.5,
              color: '0F172A',
              fontFace: 'Calibri',
              breakLine: true
            }
          });
          if (item.desc) {
            timeItems.push({
              text: `    ${item.desc}`,
              options: {
                fontSize: fSize,
                color: '475569',
                fontFace: 'Calibri',
                breakLine: true,
                lineSpacing: 13
              }
            });
          }
          if (ti < content.timeline.length - 1) {
            timeItems.push({ text: ' ', options: { fontSize: 4, breakLine: true } });
          }
        });

        if (content.bullets && content.bullets.length) {
          timeItems.push({ text: ' ', options: { fontSize: 6, breakLine: true } });
          content.bullets.forEach(b => {
            timeItems.push({
              text: `• ${b.replace(/^[\\s•\\-\\*]+/, '').trim()}`,
              options: { fontSize: 9.5, color: '1E293B', fontFace: 'Calibri', breakLine: true }
            });
          });
        }

        const timeH = content.trap ? 3.8 : 5.2;
        s.addText(timeItems, {
          x: 0.8, y: contentStartY, w: totalW, h: timeH,
          valign: 'top', fontFace: 'Calibri'
        });

        if (content.trap) {
          s.addText(`⚠️ EXAM TRAP: ${content.trap.title}\\n${content.trap.desc}`, {
            x: 0.8, y: 5.4, w: totalW, h: 1.3,
            fontSize: 9.5, color: '78350F', fill: 'FEF3C7',
            line: { color: 'F59E0B', width: 1 },
            margin: 6, fontFace: 'Calibri', valign: 'top', wrap: true
          });
        }
      }
      // Render Bullets Slide
      else if (content.bullets && content.bullets.length) {
        const count = content.bullets.length;
        let fSize = 13;
        let lSpace = 20;
        if (count >= 10) { fSize = 10; lSpace = 15; }
        else if (count >= 7) { fSize = 11.5; lSpace = 18; }
        else if (count >= 5) { fSize = 12.5; lSpace = 20; }

        const textItems = content.bullets.map((b, bi) => {
          const isSub = b.startsWith('  ') || b.startsWith('\\t') || b.match(/^\\s+•/);
          return {
            text: b.replace(/^[\\s•\\-\\*]+/, '').trim(),
            options: {
              bullet: true,
              breakLine: bi < content.bullets.length - 1,
              indentLevel: isSub ? 1 : 0,
              fontSize: isSub ? fSize - 1 : fSize,
              color: isSub ? '475569' : '1E293B',
              fontFace: 'Calibri',
              lineSpacing: lSpace
            }
          };
        });

        const bH = content.trap ? 3.8 : 5.2;
        s.addText(textItems, {
          x: 0.8, y: contentStartY, w: totalW, h: bH,
          valign: 'top', fontFace: 'Calibri'
        });

        if (content.trap) {
          s.addText(`⚠️ EXAM TRAP: ${content.trap.title}\\n${content.trap.desc}`, {
            x: 0.8, y: 5.4, w: totalW, h: 1.3,
            fontSize: 9.5, color: '78350F', fill: 'FEF3C7',
            line: { color: 'F59E0B', width: 1 },
            margin: 6, fontFace: 'Calibri', valign: 'top', wrap: true
          });
        }
      }
      // Render Trap Alone Slide
      else if (content.trap) {
        s.addText(`⚠️ EXAM TRAP: ${content.trap.title}\\n\\n${content.trap.desc}`, {
          x: 0.8, y: contentStartY, w: totalW, h: 2.8,
          fontSize: 12, color: '78350F', fill: 'FEF3C7',
          line: { color: 'F59E0B', width: 1.5 },
          margin: 12, fontFace: 'Calibri', valign: 'top', wrap: true
        });
      }'''

code = code.replace(old_ppt_bullets, new_ppt_bullets, 1)

with open("slides-site/app.js", "w", encoding="utf-8") as f:
    f.write(code)

print("SUCCESS: Visual builders, PDF sheet & PPT exporter integrated cleanly!")
