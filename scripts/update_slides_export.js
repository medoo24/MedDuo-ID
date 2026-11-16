const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '..', 'slides-site', 'app.js');
const content = fs.readFileSync(appJsPath, 'utf8');

const pStart = content.indexOf('function exportEpisodePPT()');
const pEnd = content.indexOf('/* ════════════════════════════════════\r\n   SLIDE STASH') !== -1
  ? content.indexOf('/* ════════════════════════════════════\r\n   SLIDE STASH')
  : content.indexOf('/* ════════════════════════════════════\n   SLIDE STASH');

if (pStart === -1 || pEnd === -1) {
  throw new Error('Could not find boundaries for exportEpisodePPT');
}

const replacementJs = `/* ════════════════════════════════════
   EXPORT — POWERPOINT (.PPTX)
   Pixel-Perfect Layouts, Scaled Fonts, No Overflow
   ════════════════════════════════════ */
function exportEpisodePPT() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);

  if (typeof PptxGenJS !== 'undefined') {
    showToast('⏳ Generating genuine PowerPoint (.pptx)...');
    try {
      const pptx = new PptxGenJS();
      pptx.layout = 'LAYOUT_16x9'; // 13.33 x 7.5 inches
      pptx.author = 'MedDuo';
      pptx.company = 'MedDuo Forensic Medicine';
      pptx.title = \`Episode \${state.epIdx+1}: \${ep.title}\`;

      slides.forEach((slide, i) => {
        const s = pptx.addSlide();

        // 1. Brand Chip & Title Banner
        s.addText(\`MedDuo · The Bone Code · Episode \${state.epIdx+1}\`, {
          x: 0.8, y: 0.35, w: 10.0, h: 0.28,
          fontSize: 10, bold: true, color: '0284C7', fontFace: 'Calibri'
        });

        s.addText(slide.title, {
          x: 0.8, y: 0.65, w: 11.7, h: 0.65,
          fontSize: 20, bold: true, color: '0F172A', fontFace: 'Calibri'
        });

        // Thin separator line
        s.addShape(pptx.shapes.LINE, {
          x: 0.8, y: 1.35, w: 11.7, h: 0,
          line: { color: 'E2E8F0', width: 1 }
        });

        // Determine if slide has images to allocate layout
        const hasImages = slide.images && slide.images.length > 0;
        const totalW = hasImages ? 7.2 : 11.7;
        const contentStartY = 1.55;

        // Render Image on the right if available
        if (hasImages && slide.images[0].data) {
          try {
            s.addImage({
              data: slide.images[0].data,
              x: 8.3, y: 1.55, w: 4.2, h: 4.8,
              sizing: { type: 'contain', w: 4.2, h: 4.8 }
            });
          } catch(imgErr) {
            console.warn('Could not add image to PPTX', imgErr);
          }
        }

        const content = slide.content || {};

        // Title slide
        if (slide.type === 'title') {
          s.addText(slide.title, {
            x: 1.0, y: 2.2, w: 11.3, h: 1.4,
            fontSize: 28, bold: true, color: '0284C7', align: 'center', fontFace: 'Calibri'
          });
          if (content.bullets && content.bullets.length) {
            s.addText(content.bullets.join('\\n'), {
              x: 1.0, y: 3.8, w: 11.3, h: 1.6,
              fontSize: 15, color: '475569', align: 'center', fontFace: 'Calibri',
              lineSpacing: 22
            });
          }
        }
        // Table slide
        else if (content.rows) {
          const colCount = content.headers.length;
          let colWidths = [];
          if (colCount === 2) {
            colWidths = [totalW * 0.35, totalW * 0.65];
          } else if (colCount === 3) {
            colWidths = [totalW * 0.22, totalW * 0.35, totalW * 0.43];
          } else {
            colWidths = content.headers.map(() => totalW / colCount);
          }

          const isCompact = content.rows.length > 5;
          const tableFontSize = isCompact ? 9.5 : 11;
          const cellPadding = isCompact ? [2, 4, 2, 4] : [4, 6, 4, 6];

          const tableData = [
            content.headers.map(h => ({
              text: h,
              options: { bold: true, fill: '0284C7', color: 'FFFFFF', fontFace: 'Calibri', margin: cellPadding }
            })),
            ...content.rows.map((r, ri) => r.map(c => ({
              text: c,
              options: { fill: ri % 2 === 0 ? 'F8FAFC' : 'FFFFFF', color: '1E293B', fontFace: 'Calibri', margin: cellPadding }
            })))
          ];

          s.addTable(tableData, {
            x: 0.8, y: contentStartY, w: totalW, colW: colWidths,
            fontSize: tableFontSize, border: { pt: 0.5, color: 'CBD5E1' }
          });

          // Extra bullets below table if present
          if (content.extra_bullets && content.extra_bullets.length) {
            const approxTableH = (content.rows.length + 1) * (isCompact ? 0.32 : 0.42);
            const extraY = Math.min(5.6, contentStartY + approxTableH + 0.15);
            const extraH = Math.max(0.8, 6.8 - extraY);

            const extraItems = content.extra_bullets.map((b, bi) => ({
              text: b.replace(/^[\\s•\\-\\*]+/, '').trim(),
              options: {
                bullet: true,
                breakLine: bi < content.extra_bullets.length - 1,
                fontSize: 10.5,
                color: '334155',
                fontFace: 'Calibri'
              }
            }));

            s.addText(extraItems, {
              x: 0.8, y: extraY, w: totalW, h: extraH,
              valign: 'top', fontFace: 'Calibri'
            });
          }
        }
        // Quiz / Question slide
        else if (content.question) {
          const qH = Math.min(2.0, Math.max(1.1, (content.question.length / 50) * 0.35));
          s.addText(\`QUESTION:\\n\${content.question}\`, {
            x: 0.8, y: contentStartY, w: totalW, h: qH,
            fontSize: 13.5, bold: true, color: '92400E', fill: 'FEF3C7',
            margin: 10, fontFace: 'Calibri', valign: 'top'
          });

          const aY = contentStartY + qH + 0.25;
          const aH = Math.min(3.2, Math.max(1.2, 6.8 - aY));
          s.addText(\`ANSWER:\\n\${content.answer}\`, {
            x: 0.8, y: aY, w: totalW, h: aH,
            fontSize: 13, color: '166534', fill: 'DCFCE7',
            margin: 10, fontFace: 'Calibri', valign: 'top'
          });
        }
        // Calculation slide
        else if (content.calc) {
          const calcLines = content.calc.length;
          const calcFontSize = calcLines > 8 ? 10.5 : 12;
          s.addText(content.calc.join('\\n'), {
            x: 0.8, y: contentStartY, w: totalW, h: Math.min(5.1, calcLines * 0.32 + 0.5),
            fontSize: calcFontSize, fontFace: 'Courier New', color: '38BDF8', fill: '0F172A',
            margin: 10, valign: 'top'
          });
        }
        // Bullet points slide
        else if (content.bullets && content.bullets.length) {
          const count = content.bullets.length;
          let fSize = 13.5;
          let lSpace = 20;
          if (count >= 10) { fSize = 10.5; lSpace = 15; }
          else if (count >= 7) { fSize = 12; lSpace = 18; }

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
        }

        // Add Notes to PowerPoint Presenter Notes Pane (Clean & Official!)
        if (slide.notes && slide.notes.trim()) {
          s.addNotes(slide.notes.trim());
        }
      });

      pptx.writeFile({ fileName: \`medduo-ep\${state.epIdx+1}-presentation.pptx\` })
        .then(() => showToast('✓ Genuine PowerPoint (.pptx) downloaded!'))
        .catch(err => {
          console.error(err);
          alert('Error generating PPTX: ' + err.message);
        });
      return;
    } catch(err) {
      console.warn('PptxGenJS error, using HTML export fallback', err);
    }
  }

  exportEpisodeHTML();
}


/* ════════════════════════════════════
   DOWNLOAD PDF (ONE-CLICK AUTOMATIC)
   Full-Bleed A4 Landscape, 100% Page Fill, Zero Empty Notes
   ════════════════════════════════════ */
function downloadEpisodePDF() {
  const ep = window.SLIDES_DATA[state.epIdx];
  const slides = getEpSlides(state.epIdx);

  if (typeof html2pdf !== 'undefined') {
    showToast('⏳ Generating presentation PDF...');

    // 1120px width x 792px height = Exact A4 Landscape aspect ratio (1.414)
    const tempContainer = document.createElement('div');
    tempContainer.style.background = '#0F172A';
    tempContainer.style.padding = '0';
    tempContainer.style.margin = '0';
    tempContainer.style.fontFamily = 'Inter, Arial, sans-serif';
    tempContainer.style.width = '1120px';

    slides.forEach((slide, idx) => {
      // Each slide is an exact full-bleed presentation sheet
      const pageSheet = document.createElement('div');
      pageSheet.className = 'pdf-slide-sheet';
      pageSheet.style.width = '1120px';
      pageSheet.style.height = '792px';
      pageSheet.style.maxHeight = '792px';
      pageSheet.style.boxSizing = 'border-box';
      pageSheet.style.background = '#FFFFFF';
      pageSheet.style.padding = '36px 44px';
      pageSheet.style.margin = '0';
      pageSheet.style.display = 'flex';
      pageSheet.style.flexDirection = 'column';
      pageSheet.style.justifyContent = 'flex-start';
      pageSheet.style.pageBreakAfter = 'always';
      pageSheet.style.pageBreakInside = 'avoid';
      pageSheet.style.overflow = 'hidden';
      pageSheet.style.position = 'relative';

      // Build slide visual card
      const card = buildSlideCard(slide, idx, slides);

      // Permanently remove all editing controls and empty notes areas
      card.querySelectorAll('.slide-header-right, .slide-notes-area, .slide-img-del, .img-add-btn-bar, .image-zone-empty, .img-layout-bar').forEach(el => el.remove());

      // If user actually wrote custom notes, append a sleek footnote
      if (slide.notes && slide.notes.trim()) {
        const noteDiv = document.createElement('div');
        noteDiv.style.marginTop = 'auto';
        noteDiv.style.paddingTop = '8px';
        noteDiv.style.borderTop = '1px dashed #CBD5E1';
        noteDiv.style.fontSize = '11px';
        noteDiv.style.color = '#64748B';
        noteDiv.innerHTML = \`📝 <strong>Presenter Note:</strong> \${escHtml(slide.notes.trim())}\`;
        card.appendChild(noteDiv);
      }

      pageSheet.appendChild(card);
      tempContainer.appendChild(pageSheet);
    });

    document.body.appendChild(tempContainer);

    const opt = {
      margin: 0,
      filename: \`medduo-ep\${state.epIdx+1}-presentation.pdf\`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        width: 1120,
        windowWidth: 1120
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(tempContainer).save().then(() => {
      tempContainer.remove();
      showToast('✓ Presentation PDF downloaded successfully!');
    }).catch(err => {
      tempContainer.remove();
      console.error(err);
      printEpisode();
    });
  } else {
    printEpisode();
  }
}


/* ════════════════════════════════════
   PRINT / PDF (ALL SLIDES)
   ════════════════════════════════════ */
function printEpisode() {
  const slides = getEpSlides(state.epIdx);
  const existing = document.getElementById('medduo-print-area');
  if (existing) existing.remove();

  const printArea = document.createElement('div');
  printArea.id = 'medduo-print-area';

  slides.forEach((slide, idx) => {
    const card = document.createElement('div');
    card.className = 'slide-card print-slide-card';
    card.appendChild(buildSlideCard(slide, idx, slides));
    
    // Remove edit controls and empty notes
    card.querySelectorAll('.slide-header-right, .slide-notes-area, .slide-img-del, .img-add-btn-bar, .image-zone-empty, .img-layout-bar').forEach(el => el.remove());

    if (slide.notes && slide.notes.trim()) {
      const noteDiv = document.createElement('div');
      noteDiv.style.marginTop = 'auto';
      noteDiv.style.paddingTop = '8px';
      noteDiv.style.borderTop = '1px dashed #CBD5E1';
      noteDiv.style.fontSize = '11px';
      noteDiv.style.color = '#64748B';
      noteDiv.innerHTML = \`📝 <strong>Presenter Note:</strong> \${escHtml(slide.notes.trim())}\`;
      card.appendChild(noteDiv);
    }

    printArea.appendChild(card);
  });

  document.body.appendChild(printArea);
  window.print();

  window.addEventListener('afterprint', () => {
    const el = document.getElementById('medduo-print-area');
    if (el) el.remove();
  }, { once: true });
}

`;

const newContent = content.substring(0, pStart) + replacementJs + content.substring(pEnd);
fs.writeFileSync(appJsPath, newContent, 'utf8');
console.log('✅ Successfully updated exportEpisodePPT, downloadEpisodePDF, and printEpisode in slides-site/app.js!');
