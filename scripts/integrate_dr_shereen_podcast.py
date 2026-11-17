# scripts/integrate_dr_shereen_podcast.py
import re
import json

# ==============================================================
# 1. UPDATE ain_shams_1.md and transcripts/ain_shams_ep01_scenario.md
# ==============================================================
def update_ep1(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    old_s = '**د. طارق:** هنا بندخل في إبداع الطب الشرعي: **تقدير السن من الجمجمة (Identification of Age by Skull)**!'
    new_s = '**د. طارق:** هنا بندخل في إبداع الطب الشرعي: **تقدير السن من الجمجمة (Identification of Age by Skull)**! والجمجمة دي يا عاطف هي **الدايرة الكبيرة** في طريقة أستاذتنا دكتورة شيرين لتقدير السن.. بتجمع الجمجمة والتسنين والدرزات واليافوخ!'

    if old_s in text:
        text = text.replace(old_s, new_s, 1)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Updated Ep 1: {filepath}")
    else:
        print(f"Old string not found in Ep 1: {filepath}")

update_ep1('ain_shams_1.md')
update_ep1('transcripts/ain_shams_ep01_scenario.md')

# ==============================================================
# 2. UPDATE ain_shams_2.md and transcripts/ain_shams_ep02_scenario.md
# ==============================================================
def update_ep2(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Replacement 1: Intro to Dr. Shereen 4 Geometries
    old_intro = '''**عاطف:** إيه ده كله يا دكتور طارق!! القضية مجمعة قانون العمل، وقانون الطفل، وجنايات القتل، وسن التجنيد، وسن المعاش، وكل متهم متعلق في رقم في كتاب الطب الشرعي!

**د. طارق:** بالظبط! وكل مفاتيح حل القضية دي مشفّرة في 3 جداول أساسية في كتاب عين شمس:
1. **جدول التسنين (Dentition).**
2. **جدول ظهور مراكز التعظم (Ossific Centers).**
3. **جدول التحام المشاشات والأعمار الجنائية (Epiphyseal Union & MLI).**
تعال نبدأ بالمحطة الأولى: قطار الأسنان!'''

    new_intro = '''**عاطف:** إيه ده كله يا دكتور طارق!! القضية مجمعة قانون العمل، وقانون الطفل، وجنايات القتل، وسن التجنيد، وسن المعاش، وكل متهم متعلق في رقم في كتاب الطب الشرعي! الصراحة جدول الأعمار في كتاب عين شمس ده مسبّب رعب لكل الدفعة! كل سنة فيها سن، وفيها عظمة بتلتحم، وفيها مادة قانونية، وفيها فرق بين الذكر والأنثى! إزاي نسستم الرعب ده في مخنا يا دكتور؟

**د. طارق:** بالظبط! وكل مفاتيح حل القضية دي مشفّرة في جداول كتاب عين شمس.. وعشان تسيطر على جداول وأرقام الأعمار دي كلها وماتتوهش في الشفوي، لازم نسستم الهيكل العظمي كله في دماغنا بطريقة أستاذتنا دكتورة شيرين الأسطورية: **"الأشكال الهندسية الـ 4 لتقدير السن"**!
دكتورة شيرين لخصت تقدير السن في العظام كله في 4 أشكال هندسية بسيطة جداً سستم بيهم مخك:
1. **دايرة صغيرة:** دي مراكز التعظم (Ossification Centers) اللي بتظهر في الغضاريف (سنة لسنتين لـ 3 سنين صابونة الركبة!).
2. **دايرة كبيرة:** دي الجمجمة (The Skull) ومعاها الأسنان والدرزات واليافوخ.
3. **خط بالطول:** ده القناة النخاعية (Medullary Cavity) اللي بتشق العظمة بالطول (30 سنة جراحي و 33 سنة تشريحي).
4. **خط بالعرض:** ده خط المشاشة أو التحام المشاش (Epiphyseal Union) من الكوع للركبة للترقوة.
ارسمهم في خيالك دلوقتي يا عاطف!

**عاطف:** دايرة صغيرة، ودايرة كبيرة، وخط بالطول، وخط بالعرض! الله عليك يا دكتور طارق.. دي خريطة كنز اتبرمجت في دماغي في ثانية! ابدألي بالدايرة الكبيرة.. قطار الأسنان!'''

    # Replacement 2: Milky Teeth mnemonics
    old_milky = '''**عاطف:** استنى يا دكتور أسجل التحشيشة دي:
- أول سن بيطلع هو **القاطع الأوسط السفلي عند 6 شهور** (تحشيشة "الفأر الصغير اللي بيقرض السفلي عند 6 شهور").
- وبعده على طول القاطع الأوسط العلوي عند **8 شهور**.
- وبعدين القواطع الجانبية عند **10 شهور**.
- وعند **سنة (12 شهر)** بيطلع أول ضرس!
- والناب بياخد راحته ويطلع عند **سنة ونص (18 شهر)**.. الناب بعد الضرس الأول مش قبله!
- وعند **سنتين (2y)** بيطلع الضرس التاني ويقفل الـ 20 سن!'''

    new_milky = '''**عاطف:** استنى يا دكتور أسجل بصمجة دكتورة شيرين هنا عشان متطيرش:
- أول سن بيطلع هو **القاطع الأوسط السفلي عند 6 شهور** (تحشيشة "الفأر 6" اللي بيقرض القاطع السفلي عند 6 شهور)!
- وبعده على طول القاطع الأوسط العلوي عند **8 شهور**.
- وبعدين القواطع الجانبية عند **10 شهور** (ميعاد التسنين).
- وعند **سنة (12 شهر)** بيطلع أول ضرس لبني (1st milky molar)!
- والناب بياخد راحته ويطلع عند **سنة ونص (18 شهر)**.. وافتكر إنه في ميعاد تطعيم الـ MMR، وبيطلع بعد الضرس الأول مش قبله!
- وعند **سنتين (24 شهر)** بيطلع الضرس التاني ويقفل الـ 20 سن لبني بالتمام والكمال!'''

    # Replacement 3: Permanent Teeth mnemonics
    old_perm = '''**عاطف:** إيه الجمال والترتيب ده!! ده قطار ماشي سنة ورا سنة بالمللي:
- 6 سنين: الضرس الدائم الأول (**First permanent molar**).. ده مبيوقعش سن لبني، ده بيطلع وراهم في الخباثة!
- 7 سنين: القواطع المركزية (**Central incisors**).
- 8 سنين: القواطع الجانبية (**Lateral incisors**).
- 9 سنين: الضاحك الأول (**First premolar**).
- 10 سنين: الضاحك الثاني (**Second premolar**).
- 11 سنة: الناب الدائم (**Permanent Canine**).
- 12 سنة: الضرس الدائم الثاني (**Second permanent molar**).
- ومن 18 لـ 25 سنة: ضرس العقل (**Third molar / Wisdom tooth**)!'''

    new_perm = '''**عاطف:** إيه الجمال والترتيب ده!! ده قطار ماشي سنة ورا سنة بنغمة دكتورة شيرين للأسنان الدائمة:
- **6 سنين:** أولى ابتدائي والضرس الدائم الأول (**First permanent molar**).. ده مبيوقعش سن لبني، ده بيطلع وراهم في الخباثة عشان يسند الفك!
- **7 سنين:** سن التمييز في القانون مع القواطع المركزية (**Central incisors**).
- **8 سنين:** القواطع الجانبية (**Lateral incisors**).
- **9 سنين:** الضاحك الأول (**First premolar**).
- **10 سنين:** الضاحك الثاني (**Second premolar**).
- **11 سنة:** الناب الدائم (**Permanent Canine**).
- **12 سنة:** توديع الابتدائي ونهاية الطفولة مع الضرس الدائم الثاني (**Second permanent molar**).
- ومن **18 لـ 25 سنة:** سن الرشد والبلوغ وضرس العقل (**Third molar / Wisdom tooth**)!'''

    # Replacement 4: Ossific Centers (Small Circle)
    old_ossific = '''**عاطف:** الله عليك يا دكتور طارق!
- عند **سنة:** الرؤوس الكبيرة (Head of humerus, femur, tibia).
- عند **سنتين:** أسفل الكعبرة والقصبة (Lower radius & tibia).
- عند **3 سنين:** الـ **Patella**! صابونة الركبة بتظهر عظمياً عند سن 3 سنين! دي هعلم عليها بالماركر الفسفوري!
- عند **4 سنين:** أعلى الشظية مع المدور الكبير للفخذ (Upper fibula + Greater trochanter).
- عند **5 سنين:** أسفل الشظية (Lower fibula).
- وعند **6 سنين:** رأس الكعبرة وأسفل الزند (Head of radius + Lower ulna)!'''

    new_ossific = '''**عاطف:** الله عليك يا دكتور طارق! دي كده **الدايرة الصغيرة** في طريقة د. شيرين.. نسجل بصمجتها لمراكز بعد الولادة في كتاب عين شمس:
- عند **سنة:** الرؤوس الكبيرة (Head of humerus, femur, tibia).
- عند **سنتين:** أسفل الكعبرة والقصبة (Lower radius & tibia).
- عند **3 سنين:** الـ **Patella**! صابونة الركبة بتظهر عظمياً عند سن 3 سنين! دي تحشيشة دكتورة شيرين وسؤال شفوي عين شمس الشهير: الصابونة تظهر عند 3 سنين! لا عند الولادة ولا عند البلوغ! هعلم عليها بالماركر الفسفوري!
- عند **4 سنين:** أعلى الشظية مع المدور الكبير للفخذ (Upper fibula + Greater trochanter).
- عند **5 سنين:** أسفل الشظية (Lower fibula).
- وعند **6 سنين:** رأس الكعبرة وأسفل الزند (Head of radius + Lower ulna)!'''

    # Replacement 5: Epiphyseal Union (Horizontal Line, Elbow Scissors, 40-60-40, Female Lead)
    old_union = '''**د. طارق:** كده المراكز ظهرت، تعال بقى للمرحلة الحاسمة: **التحام المشاشات (Union of Epiphyses)**.. العظمة لما بتكبر، الطرف (Epiphysis) بيلتحم بجسم العظمة (Diaphysis) ويختفي الغضروف الفاصل بينهم.
ولما يلتحم، معناه إن النمو في المنطقة دي وقف تماماً!

تعال نلخص جدول صفحات 44-45 بنغمة واحدة متسلسلة:

```
┌───────────────┬──────────────────────────────────────────────────────────────────┐
│ السن (Age)    │ المشاش الذي يلتحم تماماً (Epiphyseal Union)                      │
├───────────────┼──────────────────────────────────────────────────────────────────┤
│ 6 سنين        │ التحام عظام الحوض: Pubic ramus with Ischial ramus                │
│ 14 سنة        │ Trochlea unites with Capitulum (في أسفل العضد)                    │
│ 15 سنة        │ Trochlea & Capitulum يلتحمان بجسم العضد + قفل الـ Y بالحوض        │
│ 16 سنة        │ Lateral epicondyle للعضد + Upper ulna (الزج) + Lesser trochanter │
│ 17 سنة        │ Medial epicondyle للعضد + Upper radius (الكعبرة) + Greater troch │
│ 18 سنة        │ كفك 18: عظام مشط اليد (Metacarpals) + أسفل القصبة والشظية        │
│ 20 - 21 سنة   │ أسفل الكعبرة والزند (Lower radius & ulna)                        │
│ 21 سنة        │ مفصل الركبة بالكامل (Lower femur + Upper tibia/fibula) + عظمة القعدة│
│ 23 سنة        │ عرف الحرقفة (Iliac crest) + الترقوة (Clavicle) + قاعدة الجمجمة   │
│ 30 سنة        │ قفل الدرز السهمي بالجمجمة (Sagittal suture)                      │
│ 40 سنة        │ عظمة الخنجر بالقص (Xiphoid with sternum) + الدرز الإكليلي Coronal │
│ 50 سنة        │ قرن العظم اللامي الكبير (Greater cornu of hyoid) + الدرز اللامي   │
│ 60 سنة        │ قبضة القص بالجسد (Manubrium sterni with body of sternum)        │
│ 70 سنة        │ قفل كل درزات الجمجمة ما عدا الدرز الصدغي الجداري                 │
└───────────────┴──────────────────────────────────────────────────────────────────┘
```

**عاطف:** استنى هنا يا دكتور طارق.. قبل ما ندخل في المواد القانونية، فيه ملحوظة مكتوبة تحت الجدول في صفحة 44:
> *"N.B.: The above mentioned ages are earlier by 1-2 years in females."*

**د. طارق:** أيووووه! دي **القاعدة الذهبية لعظام الإناث (The Female Rule in Bone Aging)**!
عظام البنت بتسبق الولد بسنة لسنتين في كل محطات الالتحام!
عارف يعني إيه يا عاطف؟
يعني لو عظام مشط اليد (Metacarpals) بتلتحم في الذكر عند سن 18 سنة.. في الأنثى بتلتحم عند سن **16 سنة**!
لو أسفل الكعبرة والزند بيلتحم في الذكر عند 20-21 سنة.. في الأنثى بيلتحم عند **18 سنة**!
وده اللي بينقلنا فوراً لأهم جدول في كتاب عين شمس: جدول الـ MLI!'''

    new_union = '''**د. طارق:** كده خلصنا الدايرة الكبيرة والدايرة الصغيرة.. تعال بقى للـ **خط بالعرض**: **التحام المشاشات (Union of Epiphyses)**.. العظمة لما بتكبر، الطرف (Epiphysis) بيلتحم بجسم العظمة (Diaphysis) ويختفي الغضروف الفاصل بينهم.
ولما يلتحم، معناه إن النمو في المنطقة دي وقف تماماً!
عشان ماتتوهش في جدول صفحات 44-45 في كتاب عين شمس، هنقسمه بالتحشيشات الذهبية لدكتورة شيرين:
أول حاجة: **"مقص الكوع السحري لدكتورة شيرين (Elbow Scissors: 14 - 15 - 16 - 17)"**!
احفظ 4 سنين ورا بعض في الكوع:
- عند **14 سنة:** البكرة تلتحم مع الرؤيس (Trochlea unites with Capitulum).
- عند **15 سنة:** البكرة والرؤيس يلتحموا مع جسم العضد (Unite with shaft of humerus).. ومعاهم قفل الـ Y في الحوض (Acetabular suture)!
- عند **16 سنة:** اللقيمة الوحشية مع العضد، والزج مع الزند (Lateral epicondyle + Upper ulna).
- عند **17 سنة:** اللقيمة الإنسية مع العضد، ورأس الكعبرة (Medial epicondyle + Upper radius)!
كده الكوع اتقفل بمقص دكتورة شيرين في 4 سنين!

**عاطف:** يا حلاوة مقص الكوع! 14 بكرة ورؤيس، 15 بجسم العضد، 16 وحشية وزج، 17 إنسية وكعبرة! طب وباقي الأطراف والقص يا دكتور؟

**د. طارق:** كمل النغمة معايا:
- عند **18 سنة:** كفك 18! عظام مشط اليد (Metacarpals) وأسفل القصبة والشظية.
- عند **20 - 21 سنة:** أسفل الكعبرة والزند (Lower radius & ulna).
- عند **21 سنة:** مفصل الركبة بالكامل (حول الركبة: Lower femur + Upper tibia/fibula) وعظمة القعدة وعرف الحرقفة (Iliac crest) والدرز القاعدي للجمجمة (Basilar suture).
- عند **23 إلى 25 سنة:** الترقوة (Clavicle: 23 البداية و25 التحام كامل).

وتعال بقى للتحشيشة الأسطورية لدكتورة شيرين في عظام الصدر والرقبة:
**"نغمة 40 - 60 - 40"**! اعمل الحركة دي على جسمك يا عاطف:
- حط إيدك فوق عند رقبتك: **40 سنة** التحام قرون العظم اللامي مع جسم العظمة (Greater cornu of hyoid with body)!
- انزل في النص عند أول صدرك: **60 سنة** التحام قبضة القص بجسم القص (Manubrium sterni with body)!
- انزل تحت عند فم المعدة: **40 سنة** التحام النتوء الخنجري بجسم القص (Xiphoid with body)!
النغمة: **40 فوق.. 60 في النص.. 40 تحت**!

**عاطف:** 40 فوق عند اللامي.. 60 في النص عند قبضة القص.. 40 تحت عند الخنجري! "40 - 60 - 40"! دي كده لزقت في النافوخ بغراء! وقبل ما ننقل على مواد القانون.. قاعدة الإناث يا دكتور؟

**د. طارق:** أيووووه! دي **القاعدة الذهبية لعظام الإناث لدكتورة شيرين (The Female Lead Rule)**:
"البنات بتعقل وتكبر عظمياً أسرع بسنتين!"
عظام البنت بتسبق الولد بسنة لسنتين في كل محطات الالتحام!
يعني في أي مشاش عظمي، تطرح سنة لسنتين من سن الذكر عشان تجيب سن الأنثى!
يعني لو عظام مشط اليد (Metacarpals) بتلتحم في الذكر عند سن 18 سنة.. في الأنثى بتلتحم عند سن **16 سنة**!
لو أسفل الكعبرة والزند بيلتحم في الذكر عند 20-21 سنة.. في الأنثى بيلتحم عند **18 سنة**!
وده اللي بينقلنا فوراً لأهم محطة: جدول الـ MLI!'''

    text = text.replace(old_intro, new_intro, 1)
    text = text.replace(old_milky, new_milky, 1)
    text = text.replace(old_perm, new_perm, 1)
    text = text.replace(old_ossific, new_ossific, 1)
    text = text.replace(old_union, new_union, 1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
    print(f"Updated Ep 2: {filepath}")

update_ep2('ain_shams_2.md')
update_ep2('transcripts/ain_shams_ep02_scenario.md')

# ==============================================================
# 3. RE-PARSE DIALOGUE AND UPDATE podcast-site/app.js
# ==============================================================
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
        "description": "طريقة د. شيرين بالأشكال الهندسية الـ 4، بزوغ الأسنان اللبنية (الفأر 6) والدائمة، مراكز التعظم وظهور الرضفة 3y، مقص الكوع السحري (14-17y)، نغمة الصدر واللامي (40-60-40)، تقدم الإناث بسنتين، وجدول الـ MLI القانوني والدستوري.",
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

print(f"Ep 1 dialogue items: {len(ep1_dia)}")
print(f"Ep 2 dialogue items: {len(ep2_dia)}")
print(f"Ep 3 dialogue items: {len(ep3_dia)}")

with open('podcast-site/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

ep_json = json.dumps(ain_shams_episodes, ensure_ascii=False, indent=2)

pattern = r'const AIN_SHAMS_EPISODES\s*=\s*\[[\s\S]*?\];\s*(const MUST_EPISODES\s*=)'
app_js = re.sub(pattern, lambda m: f"const AIN_SHAMS_EPISODES = {ep_json};\n\n{m.group(1)}", app_js, count=1)

with open('podcast-site/app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

print("SUCCESS: Dr. Shereen methods integrated into Ain Shams podcast scenarios and app.js!")
