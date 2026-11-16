const fs = require('fs');
const path = require('path');

const transcriptsDir = path.join(__dirname, '..', 'transcripts');
const rootDir = path.join(__dirname, '..');
const appJsPath = path.join(__dirname, '..', 'podcast-site', 'app.js');

if (!fs.existsSync(transcriptsDir)) {
  fs.mkdirSync(transcriptsDir, { recursive: true });
}

function getEpisodesFromAppJs() {
  const content = fs.readFileSync(appJsPath, 'utf8');
  const startMarker = 'const EPISODES = [';
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) throw new Error('Could not find const EPISODES in app.js');
  
  // Find closing bracket of EPISODES array
  const jsonStart = startIdx + 'const EPISODES = '.length;
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let escape = false;
  let jsonEnd = -1;

  for (let i = jsonStart; i < content.length; i++) {
    const ch = content[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === '\\') {
      escape = true;
      continue;
    }
    if (inString) {
      if (ch === stringChar) {
        inString = false;
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '[') {
      depth++;
    } else if (ch === ']') {
      depth--;
      if (depth === 0) {
        jsonEnd = i + 1;
        break;
      }
    }
  }

  if (jsonEnd === -1) throw new Error('Could not find end of EPISODES array');
  const jsonStr = content.substring(jsonStart, jsonEnd);
  return { episodes: JSON.parse(jsonStr), startIdx: jsonStart, endIdx: jsonEnd, fullContent: content };
}

function formatEpisodeMarkdown(ep) {
  let md = `# الحلقة ${ep.number}: ${ep.title}\n\n`;
  md += `> **نبذة عن الحلقة:** ${ep.description}\n\n`;
  md += `---\n\n`;
  md += `### 🎙️ الشخصيات:\n`;
  md += `- **د. طارق:** الطبيب الشرعي العاقل والراسي، شارب منهج الطب الشرعي، وبيربط الأرقام بمواقف وقفشات أبطال الذاكرة.\n`;
  md += `- **عاطف:** طالب الطب المطحون، بيمثل صوت الطالب في سكشن المشرحة وامتحانات الأوسبي والفاينال بهبداته الذكية.\n\n`;
  md += `---\n\n`;

  for (const item of ep.dialogue) {
    if (item.type === 'section_header') {
      const cleanHeader = item.text.replace(/^[📌\s]+/, '');
      md += `\n## 📌 ${cleanHeader}\n\n`;
    } else if (item.type === 'sub_header') {
      const cleanSub = item.text.replace(/^[🔹\s]+/, '');
      md += `\n### 🔹 ${cleanSub}\n\n`;
    } else if (item.type === 'image') {
      md += `\n![${item.caption || 'صورة توضيحية'}](${item.url})\n*${item.caption || ''}*\n\n`;
    } else if (item.type === 'speaker') {
      let speakerName = 'د. طارق';
      if (item.speaker === 'atef') speakerName = 'عاطف';
      else if (item.speaker !== 'dr_tarek') speakerName = item.speaker;
      md += `**${speakerName}:** ${item.text}\n\n`;
    }
  }

  return md.trim() + '\n';
}

function exportTranscripts() {
  const { episodes } = getEpisodesFromAppJs();

  let masterMd = `# كود العظام (The Bone Code) — التفريغ الكامل لجميع الحلقات (8 حلقات)\n\n`;
  masterMd += `> هذا الملف يضم التفريغات الحوارية الكاملة لبودكاست الطب الشرعي (مبحث الاستعراف - Identification)، معتمدة للهجة العامية المصرية الموجهة لطلبة الطب مع نكات المشرحة ووسائل التثبيت النغمية.\n\n`;
  masterMd += `## فهرس الحلقات:\n`;

  episodes.forEach(ep => {
    masterMd += `- [الحلقة ${ep.number}: ${ep.title}](#الحلقة-${ep.number}-${ep.title.replace(/[^\u0600-\u06FF\w\s-]/g, '').trim().replace(/\s+/g, '-')})\n`;
  });
  masterMd += `\n---\n\n`;

  episodes.forEach(ep => {
    const epMd = formatEpisodeMarkdown(ep);
    // Write in transcripts/
    fs.writeFileSync(path.join(transcriptsDir, `episode-${ep.number}.md`), epMd, 'utf8');
    // Update root 1.md .. 8.md
    fs.writeFileSync(path.join(rootDir, `${ep.number}.md`), epMd, 'utf8');
    // Append to master
    masterMd += epMd + '\n\n---\n\n';
  });

  fs.writeFileSync(path.join(transcriptsDir, 'all_episodes.md'), masterMd, 'utf8');

  // Also write a helpful README in transcripts/
  const readmeMd = `# تفريغات حوارات بودكاست "كود العظام" (MedDuo Podcast Transcripts)

مرحباً بك في مجلد التفريغات الكاملة لبودكاست الطب الشرعي (Identification)!

## 📂 محتويات المجلد:
- **الحلقات المنفردة:**
  - [\`episode-1.md\`](./episode-1.md): سرّ الـ 18 سنة.. ولغز الولد "البرنس" (العمر وعظام الأطراف).
  - [\`episode-2.md\`](./episode-2.md): لغز "جمجمة المشرحة المتفحمة".. وسر الخياطة السحرية! (الجمجمة والخياطات).
  - [\`episode-3.md\`](./episode-3.md): لغز "حوض الغريقة المجهولة".. وشفرة عظام الولادة (تحديد الجنس وعظام الحوض).
  - [\`episode-4.md\`](./episode-4.md): لغز "شنق المليونير".. وسر خناقة العظمة اللامية وعظمة القص! (القص، اللامي، الأضلاع).
  - [\`episode-5.md\`](./episode-5.md): لغز "جثة قطار الصعيد المحترقة".. وعَضّة الكتف التي لا تكذب! (الأسنان وعضات الأسنان).
  - [\`episode-6.md\`](./episode-6.md): شفرة بصمات الأصابع والـ DNA.. لغز "التوأم المتطابق" ومُشوّه يديه بمية النار! (البصمات والـ DNA).
  - [\`episode-7.md\`](./episode-7.md): لغز "جمجمة مقابر الواحات".. وشفرة العِرق (Race Identification).
  - [\`episode-8.md\`](./episode-8.md): لغز "المشرحة المبتورة".. وحساب الطول بالمللي بمعادلات بيرسون! (Stature Estimation).
- **التفريغ المجمّع:**
  - [\`all_episodes.md\`](./all_episodes.md): يجمع الـ 8 حلقات كاملة في ملف واحد يسهل البحث والتعديل الشامل فيه.

## ✍️ كيفية التعديل والمزامنة:
1. يمكنك فتح أي ملف \`.md\` والتعديل عليه كما تشاء.
2. يمكنك استخدام الصيغة البسيطة التالية:
   - \`**د. طارق:** الكلام هنا...\`
   - \`**عاطف:** الكلام هنا...\`
   - \`## 📌 عنوان محطة رئيسية\`
   - \`### 🔹 عنوان فرعي\`
3. لمزامنة تعديلاتك تلقائياً مع موقع البودكاست التفاعلي (\`podcast-site/app.js\`)، شغّل الأمر:
   \`\`\`bash
   node scripts/sync_transcripts.js --import
   \`\`\`
   وسيتم تحديث كود الموقع فوراً بالتعديلات التي أجريتها في ملفات الـ Markdown!
`;

  fs.writeFileSync(path.join(transcriptsDir, 'README.md'), readmeMd, 'utf8');
  console.log('✅ Successfully exported all transcripts to /transcripts and root *.md files!');
}

function parseMarkdownToDialogue(mdContent) {
  const lines = mdContent.split(/\r?\n/);
  const dialogue = [];
  let currentSpeaker = null;
  let currentText = '';

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

    // Check for Section Header (## 📌 ...)
    if (line.startsWith('## ')) {
      flushSpeaker();
      const title = line.replace(/^##\s*(📌)?\s*/, '').trim();
      dialogue.push({
        type: 'section_header',
        text: title
      });
      continue;
    }

    // Check for Sub Header (### 🔹 ...)
    if (line.startsWith('### ') && !line.includes('الشخصيات')) {
      flushSpeaker();
      const sub = line.replace(/^###\s*(🔹)?\s*/, '').trim();
      dialogue.push({
        type: 'sub_header',
        text: sub
      });
      continue;
    }

    // Check for Speaker dialogue turn
    // Matches **د. طارق:** or **عاطف:** or **Any Name:**
    const speakerMatch = line.match(/^\*\*([^*:]+):\*\*\s*(.*)$/);
    if (speakerMatch) {
      flushSpeaker();
      const rawName = speakerMatch[1].trim();
      const restText = speakerMatch[2].trim();

      let spkKey = 'dr_tarek';
      if (rawName.includes('عاطف')) spkKey = 'atef';
      else if (rawName.includes('طارق')) spkKey = 'dr_tarek';
      else spkKey = rawName;

      currentSpeaker = spkKey;
      currentText = restText;
      continue;
    }

    // Ignore intro header block, character lists, or horizontal rules
    if (line.startsWith('# ') || line.startsWith('> ') || line.startsWith('---') || line.startsWith('- **د.') || line.startsWith('- **عاطف')) {
      continue;
    }

    // Continuation line of current speaker
    if (currentSpeaker) {
      currentText += (currentText ? ' ' : '') + line;
    }
  }

  flushSpeaker();
  return dialogue;
}

function importTranscripts() {
  const { episodes, startIdx, endIdx, fullContent } = getEpisodesFromAppJs();

  for (const ep of episodes) {
    const mdFile = path.join(transcriptsDir, `episode-${ep.number}.md`);
    const fallbackFile = path.join(rootDir, `${ep.number}.md`);

    let contentToRead = null;
    if (fs.existsSync(mdFile)) {
      contentToRead = fs.readFileSync(mdFile, 'utf8');
    } else if (fs.existsSync(fallbackFile)) {
      contentToRead = fs.readFileSync(fallbackFile, 'utf8');
    }

    if (contentToRead) {
      const parsedDialogue = parseMarkdownToDialogue(contentToRead);
      if (parsedDialogue.length > 0) {
        ep.dialogue = parsedDialogue;
        console.log(`Updated Episode ${ep.number}: ${parsedDialogue.length} dialogue entries.`);
      }
    }
  }

  const updatedJson = JSON.stringify(episodes, null, 2);
  const newContent = fullContent.substring(0, startIdx) + updatedJson + fullContent.substring(endIdx);
  fs.writeFileSync(appJsPath, newContent, 'utf8');
  console.log('✅ Successfully imported transcripts from markdown into podcast-site/app.js!');
}

const args = process.argv.slice(2);
if (args.includes('--import')) {
  importTranscripts();
} else {
  exportTranscripts();
}
