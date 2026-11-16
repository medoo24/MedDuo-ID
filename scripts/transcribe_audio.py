import os
import sys
import time
from google import genai
from google.genai import types

def transcribe():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not found in environment.")
        sys.exit(1)

    audio_file = "Estimation of age by bone.ogg"
    if not os.path.exists(audio_file):
        print(f"Error: {audio_file} not found.")
        sys.exit(1)

    print(f"1. Initializing client...")
    client = genai.Client(api_key=api_key)

    print(f"2. Uploading {audio_file} (approx 6.2 MB)...")
    uploaded_file = client.files.upload(file=audio_file)
    print(f"Uploaded successfully. File URI: {uploaded_file.uri}, Name: {uploaded_file.name}, State: {uploaded_file.state}")

    while uploaded_file.state.name == "PROCESSING":
        print("File is processing, waiting 5 seconds...")
        time.sleep(5)
        uploaded_file = client.files.get(name=uploaded_file.name)

    if uploaded_file.state.name == "FAILED":
        raise ValueError(f"File processing failed: {uploaded_file.error}")

    prompt = """أنت خبير تفريغ صوتي طبي احترافي ومحترف في المصطلحات الطبية الشرعية (Forensic Medicine).
المطلوب:
تفريغ هذا التسجيل الصوتي بالكامل (Verbatim Transcription) من أول ثانية حتى آخر ثانية وبأعلى درجات الدقة.
التسجيل عبارة عن شرح / محاضرة طبية شرعية حول تقدير السن من العظام (Estimation of age by bone).

تعليمات التفريغ:
1. اكتب كل كلمة قيلت في التسجيل بالكامل دون أي اختصار أو تلخيص أو حذف.
2. اكتب الكلام باللغة واللهجة المستخدمة في الشرح تماماً (العامية المصرية المستخدمة في الشرح والمصطلحات والأسماء الطبية الإنجليزية).
3. اكتب المصطلحات الطبية والعلمية بدقة (مثال: Epiphysis, Diaphysis, Metaphysis, Ossification centers, Union, Skull Sutures, Hyoid, Sternum, Xiphoid, Radius, Ulna, Clavicle, Iliac crest... إلخ).
4. نظّم التفريغ في فقرات متتالية واضحة ومقروءة حسب تسلسل الحديث، مع وضع عناوين فرعية للموضوعات أو محطات الشرح لتسهيل القراءة والمراجعة والتعديل.
5. اذكر كل التفاصيل والأرقام والسنوات والجداول المذكورة في الشرح بكل دقة."""

    print("3. Generating transcription with gemini-3.5-flash...")
    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=[uploaded_file, prompt]
    )

    transcript_text = response.text
    output_file = "transcription_estimation_of_age_by_bone.md"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("# تفريغ ريكورد: Estimation of age by bone\n\n")
        f.write(f"> **مصدر الصوت:** `Estimation of age by bone.ogg` (المدة: 20:28 دقيقة)\n")
        f.write(f"> **تاريخ التفريغ:** {time.strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write("---\n\n")
        f.write(transcript_text)
        f.write("\n")

    print(f"4. Successfully saved transcript to {output_file} ({len(transcript_text)} characters)!")

    try:
        client.files.delete(name=uploaded_file.name)
        print("Cleaned up uploaded file.")
    except Exception:
        pass

    return output_file

if __name__ == "__main__":
    transcribe()
