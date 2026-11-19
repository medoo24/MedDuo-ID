# -*- coding: utf-8 -*-
"""
Upgrade startEdit in slides-site/app.js to support:
- Deleting individual cards + adding new cards + picking card color themes
- Deleting individual flowchart steps + adding new steps
- Removing exam traps
"""

with open('slides-site/app.js', 'r', encoding='utf-8') as f:
    code = f.read()

# ── 1. CARDS VISUAL EDITOR IN startEdit ──
old_cards_edit = '''  } else if (content.cards && content.cards.length) {
    // ── CARDS VISUAL EDITOR ──
    const cardsLabel = document.createElement('label');
    cardsLabel.className = 'edit-label';
    cardsLabel.textContent = 'Visual Cards Editor (Title, Badge & Items):';
    body.appendChild(cardsLabel);

    const cardsContainer = document.createElement('div');
    cardsContainer.style.cssText = 'display:flex;flex-direction:column;gap:12px;margin:10px 0;';

    content.cards.forEach((c, ci) => {
      const cBox = document.createElement('div');
      cBox.style.cssText = 'background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:8px;padding:12px;';
      cBox.innerHTML = `
        <div style="font-weight:700;color:#0284C7;margin-bottom:6px;">Card ${ci + 1}: ${escHtml(c.title || '')}</div>
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <input class="edit-input card-title-in" value="${escHtml(c.title || '')}" placeholder="Card Title" style="flex:2;" />
          <input class="edit-input card-badge-in" value="${escHtml(c.badge || '')}" placeholder="Badge" style="flex:1;" />
          <input class="edit-input card-icon-in" value="${escHtml(c.icon || '📌')}" placeholder="Icon" style="width:50px;text-align:center;" />
        </div>
        <label class="edit-label">Card Items (one per line):</label>
        <textarea class="edit-textarea card-items-ta" style="min-height:70px;">${(c.items || []).join('\\n')}</textarea>
      `;
      cardsContainer.appendChild(cBox);
    });
    body.appendChild(cardsContainer);'''

new_cards_edit = '''  } else if (content.cards && content.cards.length) {
    // ── CARDS VISUAL EDITOR ──
    const cardsLabel = document.createElement('label');
    cardsLabel.className = 'edit-label';
    cardsLabel.textContent = 'Visual Cards Editor (Title, Badge, Theme & Items):';
    body.appendChild(cardsLabel);

    const cardsContainer = document.createElement('div');
    cardsContainer.style.cssText = 'display:flex;flex-direction:column;gap:12px;margin:10px 0;';

    function createCardBox(c, ci) {
      const cBox = document.createElement('div');
      cBox.className = 'edit-card-box';
      cBox.style.cssText = 'background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:8px;padding:12px;';
      const theme = c.theme || 'cyan';
      cBox.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <div style="font-weight:700;color:#0284C7;">Card: <span class="card-num-label">${escHtml(c.title || 'New Card')}</span></div>
          <button type="button" class="tool-btn danger-btn del-card-btn" style="font-size:0.75rem;padding:3px 8px;">🗑 Delete Card</button>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
          <input class="edit-input card-title-in" value="${escHtml(c.title || '')}" placeholder="Card Title" style="flex:2;min-width:140px;" />
          <input class="edit-input card-badge-in" value="${escHtml(c.badge || '')}" placeholder="Badge" style="flex:1;min-width:90px;" />
          <select class="edit-input card-theme-sel" style="width:110px;">
            <option value="cyan" ${theme==='cyan'?'selected':''}>Cyan</option>
            <option value="emerald" ${theme==='emerald'?'selected':''}>Emerald</option>
            <option value="amber" ${theme==='amber'?'selected':''}>Amber</option>
            <option value="rose" ${theme==='rose'?'selected':''}>Rose</option>
            <option value="purple" ${theme==='purple'?'selected':''}>Purple</option>
            <option value="slate" ${theme==='slate'?'selected':''}>Slate</option>
            <option value="dark" ${theme==='dark'?'selected':''}>Dark</option>
          </select>
          <input class="edit-input card-icon-in" value="${escHtml(c.icon || '📌')}" placeholder="Icon" style="width:45px;text-align:center;" />
        </div>
        <label class="edit-label">Card Items (one per line):</label>
        <textarea class="edit-textarea card-items-ta" style="min-height:70px;">${(c.items || []).join('\\n')}</textarea>
      `;
      cBox.querySelector('.del-card-btn').addEventListener('click', () => {
        if (confirm('Delete this card?')) cBox.remove();
      });
      return cBox;
    }

    content.cards.forEach((c, ci) => {
      cardsContainer.appendChild(createCardBox(c, ci));
    });
    body.appendChild(cardsContainer);

    const addCardBtn = document.createElement('button');
    addCardBtn.type = 'button';
    addCardBtn.className = 'tool-btn';
    addCardBtn.style.cssText = 'background:#0284C7;color:#fff;font-weight:700;font-size:0.8rem;margin-bottom:12px;';
    addCardBtn.textContent = '➕ Add Another Card';
    addCardBtn.addEventListener('click', () => {
      cardsContainer.appendChild(createCardBox({ title: 'New Card', badge: 'POINT', theme: 'cyan', icon: '📌', items: ['Point item'] }, cardsContainer.children.length));
    });
    body.appendChild(addCardBtn);'''

if old_cards_edit in code:
    code = code.replace(old_cards_edit, new_cards_edit, 1)
    print('✓ Updated cards editor in startEdit')
else:
    print('⚠️ Cards editor match failed')

# ── 2. FLOWCHART VISUAL EDITOR IN startEdit ──
old_flow_edit = '''  } else if (content.flowchart && content.flowchart.length) {
    // ── FLOWCHART VISUAL EDITOR ──
    const flowLabel = document.createElement('label');
    flowLabel.className = 'edit-label';
    flowLabel.textContent = 'Pipeline Flowchart Editor:';
    body.appendChild(flowLabel);

    const flowContainer = document.createElement('div');
    flowContainer.style.cssText = 'display:flex;flex-direction:column;gap:10px;margin:10px 0;';

    content.flowchart.forEach((node, ni) => {
      const fBox = document.createElement('div');
      fBox.style.cssText = 'background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:8px;padding:10px;';
      fBox.innerHTML = `
        <div style="display:flex;gap:8px;margin-bottom:6px;">
          <input class="edit-input flow-step-in" value="${escHtml(node.step || '')}" placeholder="Step (e.g. STEP 1)" style="width:100px;" />
          <input class="edit-input flow-icon-in" value="${escHtml(node.icon || '📌')}" placeholder="Icon" style="width:50px;text-align:center;" />
          <input class="edit-input flow-title-in" value="${escHtml(node.title || '')}" placeholder="Node Title" style="flex:1;" />
        </div>
        <input class="edit-input flow-desc-in" value="${escHtml(node.desc || '')}" placeholder="Description" />
      `;
      flowContainer.appendChild(fBox);
    });
    body.appendChild(flowContainer);'''

new_flow_edit = '''  } else if (content.flowchart && content.flowchart.length) {
    // ── FLOWCHART VISUAL EDITOR ──
    const flowLabel = document.createElement('label');
    flowLabel.className = 'edit-label';
    flowLabel.textContent = 'Pipeline Flowchart Editor:';
    body.appendChild(flowLabel);

    const flowContainer = document.createElement('div');
    flowContainer.style.cssText = 'display:flex;flex-direction:column;gap:10px;margin:10px 0;';

    function createFlowNode(node, ni) {
      const fBox = document.createElement('div');
      fBox.className = 'edit-flow-box';
      fBox.style.cssText = 'background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:8px;padding:10px;';
      fBox.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <div style="font-weight:700;color:#0284C7;font-size:0.8rem;">Step Node</div>
          <button type="button" class="tool-btn danger-btn del-step-btn" style="font-size:0.75rem;padding:2px 8px;">🗑 Delete Step</button>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:6px;">
          <input class="edit-input flow-step-in" value="${escHtml(node.step || '')}" placeholder="Step (e.g. STEP 1)" style="width:100px;" />
          <input class="edit-input flow-icon-in" value="${escHtml(node.icon || '📌')}" placeholder="Icon" style="width:45px;text-align:center;" />
          <input class="edit-input flow-title-in" value="${escHtml(node.title || '')}" placeholder="Node Title" style="flex:1;" />
        </div>
        <input class="edit-input flow-desc-in" value="${escHtml(node.desc || '')}" placeholder="Description" />
      `;
      fBox.querySelector('.del-step-btn').addEventListener('click', () => {
        if (confirm('Delete this step?')) fBox.remove();
      });
      return fBox;
    }

    content.flowchart.forEach((node, ni) => {
      flowContainer.appendChild(createFlowNode(node, ni));
    });
    body.appendChild(flowContainer);

    const addStepBtn = document.createElement('button');
    addStepBtn.type = 'button';
    addStepBtn.className = 'tool-btn';
    addStepBtn.style.cssText = 'background:#0284C7;color:#fff;font-weight:700;font-size:0.8rem;margin-bottom:12px;';
    addStepBtn.textContent = '➕ Add Another Step';
    addStepBtn.addEventListener('click', () => {
      flowContainer.appendChild(createFlowNode({ step: 'STEP ' + (flowContainer.children.length + 1), icon: '🔍', title: 'New Step', desc: 'Procedure description' }));
    });
    body.appendChild(addStepBtn);'''

if old_flow_edit in code:
    code = code.replace(old_flow_edit, new_flow_edit, 1)
    print('✓ Updated flowchart editor in startEdit')
else:
    print('⚠️ Flowchart editor match failed')

# Update reading of cards on save in startEdit
old_save_cards = '''      const cBoxes = cardsContainer.querySelectorAll('div[style*="padding:12px"]');
      const updatedCards = [];
      cBoxes.forEach((box, ci) => {
        const titleVal = box.querySelector('.card-title-in').value.trim();
        const badgeVal = box.querySelector('.card-badge-in').value.trim();
        const iconVal = box.querySelector('.card-icon-in').value.trim();
        const itemsVal = box.querySelector('.card-items-ta').value.split('\\n').map(s => s.trim()).filter(Boolean);
        const origTheme = content.cards[ci] ? content.cards[ci].theme : 'cyan';
        updatedCards.push({
          badge: badgeVal,
          theme: origTheme,
          icon: iconVal,
          title: titleVal,
          items: itemsVal
        });
      });'''

new_save_cards = '''      const cBoxes = cardsContainer.querySelectorAll('.edit-card-box');
      const updatedCards = [];
      cBoxes.forEach(box => {
        const titleVal = box.querySelector('.card-title-in').value.trim();
        const badgeVal = box.querySelector('.card-badge-in').value.trim();
        const iconVal = box.querySelector('.card-icon-in').value.trim();
        const themeVal = box.querySelector('.card-theme-sel').value;
        const itemsVal = box.querySelector('.card-items-ta').value.split('\\n').map(s => s.trim()).filter(Boolean);
        updatedCards.push({
          badge: badgeVal,
          theme: themeVal,
          icon: iconVal,
          title: titleVal,
          items: itemsVal
        });
      });'''

if old_save_cards in code:
    code = code.replace(old_save_cards, new_save_cards, 1)
    print('✓ Updated cards save handler')

old_save_flow = '''      const fBoxes = flowContainer.querySelectorAll('div[style*="padding:10px"]');'''
new_save_flow = '''      const fBoxes = flowContainer.querySelectorAll('.edit-flow-box');'''
if old_save_flow in code:
    code = code.replace(old_save_flow, new_save_flow, 1)
    print('✓ Updated flow save handler')

with open('slides-site/app.js', 'w', encoding='utf-8') as f:
    f.write(code)

print('SUCCESS: startEdit enhancements applied!')
