import json
import re

# Parse episodes
from integrate_podcast_and_navigation import ain_shams_episodes

with open("podcast-site/app.js", "r", encoding="utf-8") as f:
    text = f.read()

# Replace AIN_SHAMS_EPISODES
json_str = json.dumps(ain_shams_episodes, ensure_ascii=False, indent=2)

pattern = r'const AIN_SHAMS_EPISODES = [\s\S]*?;\s*const MUST_EPISODES = \['
replacement = f"const AIN_SHAMS_EPISODES = {json_str};\n\nconst MUST_EPISODES = ["

text = re.sub(pattern, lambda m: replacement, text, count=1)

with open("podcast-site/app.js", "w", encoding="utf-8") as f:
    f.write(text)

print("podcast-site/app.js repaired successfully!")
