import re, json

f = open('slides-site/app.js', encoding='utf-8').read()
m = re.search(r'window\.AIN_SHAMS_SLIDES_DATA\s*=\s*(\[[\s\S]*?\]);\s*/\*\s*═+ MUST', f)
d = json.loads(m.group(1))
print(f"Total Episodes in Ain Shams: {len(d)}")
for i, ep in enumerate(d):
    print(f"  Ep {i+1}: {ep['title']} ({len(ep['slides'])} slides)")

m2 = re.search(r'window\.MUST_SLIDES_DATA\s*=\s*(\[[\s\S]*?\]);\s*// Determine initial track', f)
d2 = json.loads(m2.group(1))
print(f"Total Episodes in MUST: {len(d2)}")
for i, ep in enumerate(d2):
    print(f"  Ep {i+1}: {ep['title']} ({len(ep['slides'])} slides)")
