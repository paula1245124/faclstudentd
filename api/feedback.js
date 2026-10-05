// api/feedback.js
// دالة Serverless بتشتغل على Vercel

export default async function handler(req, res) {
  // 1. التأكد إن الطلب من نوع POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  // 2. جلب بيانات النموذج من جسم الطلب
  const { channel, type, name, contact, ref, text, link } = req.body;

  // 3. التحقق من وجود النص
  if (!text || text.trim() === "") {
    return res.status(400).json({ ok: false, error: "النص مطلوب" });
  }

  // 4. تجهيز الرسالة
  const messageLines = [
    `📬 *رسالة جديدة من المنصة*`,
    `-----------------------------`,
    `*النوع:* ${type || "غير محدد"}`,
    `*الاسم:* ${name || "غير محدد"}`,
    `*التواصل:* ${contact || "غير محدد"}`,
    `*المرجع:* ${ref || "غير محدد"}`,
    `*التفاصيل:*\n${text}`,
  ];

  if (link) {
    messageLines.push(`*الرابط:* ${link}`);
  }

  const message = messageLines.join("\n");

  // 5. قراءة المتغيرات السرية من بيئة Vercel
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Missing Telegram env vars");
    return res.status(500).json({ ok: false, error: "إعدادات السيرفر ناقصة" });
  }

  // 6. إرسال الرسالة إلى Telegram Bot API
  const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const tgResponse = await fetch(telegramApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown", // عشان التنسيق يشتغل
      }),
    });

    const tgData = await tgResponse.json();

    if (!tgData.ok) {
      console.error("Telegram API error:", tgData);
      return res.status(500).json({ ok: false, error: "فشل إرسال الرسالة" });
    }

    // 7. نجاح!
    return res.status(200).json({ ok: true, message: "تم الإرسال بنجاح" });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ ok: false, error: "خطأ في السيرفر" });
  }
}
