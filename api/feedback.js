// api/feedback.js
// دالة Serverless على Vercel — ترسل الرسائل + الصور إلى Telegram
//
// ملاحظات مهمة:
// - حُذف فرع WhatsApp بالكامل (تم إلغاؤه من الواجهة).
// - حُذف حقل "link" (تم حذفه من الواجهة).
// - أضيف contactType + contactValue بدلاً من contact النصي.
// - أضيف دعم images[] (Base64) وإرسالها عبر Telegram sendPhoto.
//
// ⚠️ حدود Vercel:
//   - Hobby: 4.5MB كحد أقصى لجسم الطلب (JSON)
//   - Pro:   4.5MB افتراضيًا، يمكن رفعه في vercel.json إلى حد أقصى
//   - 5 صور × 5MB → ~33MB بعد Base64 → تجاوز الحد بكثير.
//   → الحل: قيّد حجم الصور في الواجهة، أو استخدم رفع multipart منفصل
//     (مثلاً endpoint رفع مباشر على S3/Cloudinary) ثم أرسل الروابط لتليجرام.

// نحاول نرفع حد الـ body parser إلى 10MB (يُطبَّق فقط لو خطة Vercel تسمح)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

// ──────────────────────────────────────────────────────────────
// ثوابت
// ──────────────────────────────────────────────────────────────
const MAX_TEXT_LEN = 1000;
const MAX_IMAGES = 1;
const MAX_IMAGE_BYTES = 1 * 1024 * 1024; // حد تليجرام للصور عبر sendPhoto

const CONTACT_LABELS = {
  telegram: "تليجرام",
  whatsapp: "واتساب",
  email: "إيميل",
  phone: "اتصال هاتفي",
};

// ──────────────────────────────────────────────────────────────
// أدوات مساعدة
// ──────────────────────────────────────────────────────────────
function bad(res, status, code, error) {
  return res.status(status).json({ ok: false, code, error });
}

/**
 * يستخرج MIME + Base64 من data URL.
 * @returns {{ mime: string, buffer: Buffer } | null}
 */
function decodeDataUrl(dataUrl) {
  if (typeof dataUrl !== "string") return null;
  const match = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) return null;
  try {
    const buffer = Buffer.from(match[2], "base64");
    if (!buffer.length) return null;
    return { mime: match[1], buffer };
  } catch {
    return null;
  }
}

/**
 * يُرسل صورة واحدة إلى تليجرام عبر sendPhoto (multipart).
 * @returns {Promise<boolean>} true لو نجح الإرسال
 */
async function sendPhotoToTelegram(botToken, chatId, img) {
  const decoded = decodeDataUrl(img && img.data);
  if (!decoded) return false;
  if (decoded.buffer.length > MAX_IMAGE_BYTES) {
    console.warn(
      "Image skipped (too large):",
      img && img.name,
      decoded.buffer.length,
    );
    return false;
  }

  // اسم ملف آمن
  const safeName =
    (img.name &&
      String(img.name)
        .replace(/[^\w.\-]+/g, "_")
        .slice(0, 60)) ||
    "image.jpg";

  const form = new FormData();
  form.append("chat_id", String(chatId));
  form.append("caption", `📷 ${safeName}`.slice(0, 1024));

  // File constructor متاح في Node 18+ عبر undici
  const file = new File([decoded.buffer], safeName, { type: decoded.mime });
  form.append("photo", file, safeName);

  const url = `https://api.telegram.org/bot${botToken}/sendPhoto`;
  const r = await fetch(url, { method: "POST", body: form });
  const j = await r.json().catch(() => ({ ok: false }));
  if (!j.ok) console.warn("sendPhoto failed:", j && j.description);
  return !!j.ok;
}

// ──────────────────────────────────────────────────────────────
// الـ Handler
// ──────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // 1) نوع الطلب
  if (req.method !== "POST") {
    return bad(res, 405, "METHOD", "Method Not Allowed");
  }

  // 2) استخراج الحقول
  const {
    channel, // 'tg' فقط الآن (كان 'tg' أو 'wa')
    type,
    name,
    contactType, // 'telegram' | 'whatsapp' | 'email' | 'phone' | ''
    contactValue, // القيمة النصية
    ref,
    text,
    images, // مصفوفة [{name, type, data: 'data:image/...;base64,...'}]
    website, // honeypot
  } = req.body || {};

  // 3) Honeypot
  if (website && String(website).trim() !== "") {
    return res
      .status(200)
      .json({ ok: false, code: "HONEYPOT", error: "تم رفض الطلب" });
  }

  // 4) التحقق من القناة (الآن تليجرام فقط)
  if (channel && channel !== "tg") {
    return bad(res, 400, "INVALID", "قناة الإرسال غير مدعومة");
  }

  // 5) التحقق من النص
  if (!text || String(text).trim() === "") {
    return bad(res, 400, "INVALID", "النص مطلوب");
  }
  if (String(text).length > MAX_TEXT_LEN) {
    return bad(res, 400, "BIG", "الرسالة طويلة جدًا");
  }

  // 6) التحقق من وسيلة التواصل
  const cType = String(contactType || "").trim();
  const cVal = String(contactValue || "")
    .replace(/\s+/g, " ")
    .trim();

  if (cType && !CONTACT_LABELS[cType]) {
    return bad(res, 400, "INVALID", "نوع وسيلة التواصل غير مدعوم");
  }
  if (cType && !cVal) {
    return bad(res, 400, "INVALID", "قيمة وسيلة التواصل مطلوبة");
  }
  if (cVal && !cType) {
    return bad(res, 400, "INVALID", "اختاري نوع وسيلة التواصل");
  }
  if (cType === "email" && cVal && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(cVal)) {
    return bad(res, 400, "INVALID", "صيغة الإيميل غير صحيحة");
  }
  if (cType === "phone" && cVal && !/^[+\d][\d\s\-]{6,}$/.test(cVal)) {
    return bad(res, 400, "INVALID", "صيغة رقم الهاتف غير صحيحة");
  }
  if (cVal.length > 80) {
    return bad(res, 400, "BIG", "قيمة وسيلة التواصل طويلة جدًا");
  }

  // 7) تجهيز قائمة الصور
  const rawImages = Array.isArray(images) ? images : [];
  const imageList = rawImages
    .slice(0, MAX_IMAGES)
    .filter(
      (im) =>
        im &&
        typeof im === "object" &&
        typeof im.data === "string" &&
        im.data.startsWith("data:image/"),
    );

  // 8) تجهيز نص الرسالة
  const contactLabel = cType
    ? `${CONTACT_LABELS[cType]}${cVal ? `: ${cVal}` : ""}`
    : "غير محدد";

  const messageLines = [
    "📬 *رسالة جديدة من المنصة*",
    "-----------------------------",
    `*النوع:* ${type || "غير محدد"}`,
    `*الاسم:* ${name || "غير محدد"}`,
    `*التواصل:* ${contactLabel}`,
    `*المرجع:* ${ref || "غير محدد"}`,
    `*التفاصيل:*\n${text}`,
  ];
  if (imageList.length) {
    messageLines.push(`📷 *عدد الصور المرفقة:* ${imageList.length}`);
  }
  const message = messageLines.join("\n");

  // 9) إعدادات تليجرام
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Missing Telegram env vars");
    return bad(res, 500, "CONFIG", "إعدادات تليجرام ناقصة");
  }

  // 10) إرسال الرسالة النصية أولاً
  try {
    const tgResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
          disable_web_page_preview: true,
        }),
      },
    );
    const tgData = await tgResponse.json().catch(() => ({ ok: false }));

    if (!tgData.ok) {
      console.error("Telegram sendMessage error:", tgData);
      return bad(res, 500, "TELEGRAM", "فشل إرسال الرسالة");
    }
  } catch (error) {
    console.error("sendMessage exception:", error);
    return bad(res, 500, "SERVER", "خطأ في السيرفر");
  }

  // 11) إرسال الصور (كل صورة على حدة — الفشل في واحدة لا يوقف الباقي)
  let imagesSent = 0;
  for (const img of imageList) {
    try {
      const ok = await sendPhotoToTelegram(BOT_TOKEN, CHAT_ID, img);
      if (ok) imagesSent++;
    } catch (err) {
      console.warn("sendPhoto exception:", err);
    }
  }

  // 12) الرد النهائي
  return res.status(200).json({
    ok: true,
    message: "تم الإرسال بنجاح",
    imagesSent,
    imagesTotal: imageList.length,
  });
}
