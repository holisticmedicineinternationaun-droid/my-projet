
import { GoogleGenAI } from "@google/genai";
import { Message } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAcademicResponse = async (history: Message[], userInput: string) => {
  try {
    const chatHistory = history.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `أنت المساعد الذكي الرسمي للجامعة العالمية الافتراضية للطب الشمولي (IVUHM). 
        رئيس الجامعة هو الدكتور إحسان حمدان. 
        الوكيل العلمي في الجزائر هو المسؤول عن المتابعة الأكاديمية الدولية.
        تخصصاتنا تشمل: الطب الشمولي، مدرسة الصحة النفسية، الهندسة، الرياضيات، الإسعافات الطبية، وطب الأخلاط والأمزجة.
        مهمتك هي الإجابة بمهنية عن استفسارات الطلاب حول:
        1. شروط التسجيل (النماذج المتاحة في القائمة).
        2. دورة طب الأخلاط والأمزجة (بها عضوية سنة كاملة مجانية).
        3. كورس فقه التشخيص الطبي الكيميائي.
        4. التحقق من الشهادات والوثائق عبر قسم "الشهادات و الوثائق".
        استخدم لغة عربية فصحى، وكن ودوداً ومشجعاً.
        للتواصل المباشر عبر الواتساب: 
        - رئيس الجامعة (سوريا): +963933425692
        - الوكيل العلمي (الجزائر): +213664083947
        وجههم دائماً للروابط الموجودة في الموقع لمزيد من التفاصيل.`,
      },
      history: chatHistory,
    });

    const response = await chat.sendMessage({ message: userInput });
    return response.text || "عذراً، يرجى إعادة صياغة سؤالك.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "نعتذر عن الخطأ، يرجى التواصل معنا عبر الواتساب مباشرة.";
  }
};
