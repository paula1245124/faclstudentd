// api/feedback.js
// دالة Serverless بتشتغل على Vercel — تدعم تليجرام + واتساب

export default async function handler(req, res) {
  // 1. التأكد إن الطلب من نوع POST
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ ok: false, code: "METHOD", error: "Method Not Allowed" });
  }

  // 2. Honeypot — لو الحقل المخفي فيه قيمة، ده بوت
  const { channel, type, name, contact, ref, text, link, website } =
    req.body || {};
  if (website && String(website).trim() !== "") {
    return res
      .status(200)
      .json({ ok: false, code: "HONEYPOT", error: "تم رفض الطلب" });
  }

  // 3. التحقق من النص
  if (!text || String(text).trim() === "") {
    return res
      .status(400)
      .json({ ok: false, code: "INVALID", error: "النص مطلوب" });
  }
  if (String(text).length > 1000) {
    return res
      .status(400)
      .json({ ok: false, code: "BIG", error: "الرسالة طويلة جداً" });
  }

  // 4. تجهيز نص الرسالة
  const messageLines = [
    `📬 *رسالة جديدة من المنصة*`,
    `-----------------------------`,
    `*النوع:* ${type || "غير محدد"}`,
    `*الاسم:* ${name || "غير محدد"}`,
    `*التواصل:* ${contact || "غير محدد"}`,
    `*المرجع:* ${ref || "غير محدد"}`,
    `*التفاصيل:*\n${text}`,
  ];
  if (link) messageLines.push(`*الرابط:* ${link}`);
  const message = messageLines.join("\n");

  // ============================================================
  // 5. معالجة حسب القناة
  // ============================================================

  // ─── القناة: WhatsApp ───
  if (channel === "wa") {
    const phone = process.env.WHATSAPP_NUMBER;
    if (!phone) {
      console.error("Missing WHATSAPP_NUMBER env var");
      return res.status(500).json({
        ok: false,
        code: "CONFIG",
        error: "رقم الواتساب مش مضبوط على السيرفر",
      });
    }

    // إزالة أي رموز من الرقم
    const cleanPhone = String(phone).replace(/[^\d]/g, "");
    if (!cleanPhone || cleanPhone.length < 8) {
      return res.status(500).json({
        ok: false,
        code: "CONFIG",
        error: "رقم الواتساب غير صالح",
      });
    }

    // تجهيز النص للواتساب (بدون Markdown)
    const waText = [
      "رسالة جديدة من المنصة",
      "-----------------------------",
      `النوع: ${type || "غير محدد"}`,
      `الاسم: ${name || "غير محدد"}`,
      `التواصل: ${contact || "غير محدد"}`,
      `المرجع: ${ref || "غير محدد"}`,
      `التفاصيل: ${text}`,
      link ? `الرابط: ${link}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waText)}`;

    return res.status(200).json({
      ok: true,
      url: waUrl,
      message: "افتح واتساب لإرسال الرسالة",
    });
  }

  // ─── القناة: Telegram (افتراضي) ───
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Missing Telegram env vars");
    return res.status(500).json({
      ok: false,
      code: "CONFIG",
      error: "إعدادات تليجرام ناقصة",
    });
  }

  const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const tgResponse = await fetch(telegramApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    const tgData = await tgResponse.json();

    if (!tgData.ok) {
      console.error("Telegram API error:", tgData);
      return res.status(500).json({
        ok: false,
        code: "TELEGRAM",
        error: "فشل إرسال الرسالة",
      });
    }

    return res.status(200).json({ ok: true, message: "تم الإرسال بنجاح" });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      ok: false,
      code: "SERVER",
      error: "خطأ في السيرفر",
    });
  }
}
