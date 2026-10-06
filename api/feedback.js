// api/feedback.js
// Serverless Function على Vercel — يستقبل رسالة + صور + reCAPTCHA v2
// ثم يرسلها إلى Telegram

// ⚠️ حدود Vercel:
//   - Hobby: 4.5MB كحد أقصى لجسم الطلب → نستخدم 4MB للأمان
//   - الصور تُضغط في المتصفح (1200px @ 0.75) → عادةً 100-300KB لكل صورة
//   - 5 صور × ~300KB = ~1.5MB → تحت الحد بسهولة

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

// ──────────────────────────────────────────────────────────────
// ثوابت
// ──────────────────────────────────────────────────────────────
const MAX_TEXT_LEN = 1000;
const MAX_IMAGES = 5;
const MAX_IMAGE_BYTES = 1 * 1024 * 1024; // 1MB لكل صورة
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

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
 * يستخرج MIME + Buffer من data URL.
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
 * اسم ملف آمن
 */
function safeFileName(name, fallback = "image.jpg") {
  if (!name) return fallback;
  return (
    String(name)
      .replace(/[^\w.\-]+/g, "_")
      .slice(0, 60) || fallback
  );
}

/**
 * ✅ التحقق من reCAPTCHA v2
 * @returns {Promise<{ok: boolean, reason?: string}>}
 */
async function verifyRecaptcha(token, remoteip) {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) {
    console.error("RECAPTCHA_SECRET not set");
    return { ok: false, reason: "CONFIG" };
  }
  if (!token) {
    return { ok: false, reason: "MISSING_TOKEN" };
  }

  try {
    const params = new URLSearchParams({
      secret,
      response: token,
    });
    if (remoteip) params.append("remoteip", remoteip);

    const r = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });
    const j = await r.json().catch(() => ({ success: false }));

    if (!j.success) {
      console.warn("reCAPTCHA failed:", j["error-codes"] || j);
      return { ok: false, reason: "CAPTCHA_FAILED" };
    }
    return { ok: true };
  } catch (err) {
    console.error("reCAPTCHA verify exception:", err);
    return { ok: false, reason: "CAPTCHA_ERROR" };
  }
}

/**
 * إرسال صورة واحدة عبر sendPhoto (multipart).
 */
async function sendPhotoToTelegram(botToken, chatId, img) {
  const decoded = decodeDataUrl(img && img.data);
  if (!decoded) return false;
  if (decoded.buffer.length > MAX_IMAGE_BYTES) {
    console.warn("Image skipped (too large):", img.name, decoded.buffer.length);
    return false;
  }

  const name = safeFileName(img.name);
  const form = new FormData();
  form.append("chat_id", String(chatId));
  form.append("caption", `📷 ${name}`.slice(0, 1024));

  const file = new File([decoded.buffer], name, { type: decoded.mime });
  form.append("photo", file, name);

  try {
    const r = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: "POST",
      body: form,
    });
    const j = await r.json().catch(() => ({ ok: false }));
    if (!j.ok) console.warn("sendPhoto failed:", j.description);
    return !!j.ok;
  } catch (err) {
    console.warn("sendPhoto exception:", err);
    return false;
  }
}

/**
 * إرسال 2-5 صور عبر sendMediaGroup (multipart).
 */
async function sendMediaGroupToTelegram(botToken, chatId, images) {
  const decoded = images
    .map((img) => ({ img, decoded: decodeDataUrl(img && img.data) }))
    .filter((x) => x.decoded && x.decoded.buffer.length <= MAX_IMAGE_BYTES);

  if (!decoded.length) return 0;

  const form = new FormData();
  form.append("chat_id", String(chatId));

  const media = decoded.map((x, i) => ({
    type: "photo",
    media: `attach://photo_${i}`,
    caption: i === 0 ? `📷 مرفقات (${decoded.length})` : undefined,
  }));
  form.append("media", JSON.stringify(media));

  decoded.forEach((x, i) => {
    const name = safeFileName(x.img.name, `photo_${i}.jpg`);
    const file = new File([x.decoded.buffer], name, { type: x.decoded.mime });
    form.append(`photo_${i}`, file, name);
  });

  try {
    const r = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMediaGroup`,
      { method: "POST", body: form },
    );
    const j = await r.json().catch(() => ({ ok: false }));
    if (!j.ok) {
      console.warn("sendMediaGroup failed:", j.description);
      return 0;
    }
    return decoded.length;
  } catch (err) {
    console.warn("sendMediaGroup exception:", err);
    return 0;
  }
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
    channel, // 'tg' فقط
    type,
    name,
    contactType, // 'telegram' | 'whatsapp' | 'email' | 'phone' | ''
    contactValue,
    ref,
    text,
    images, // [{ name, type, data: 'data:image/...;base64,...' }]
    website, // honeypot
    recaptchaToken, // ★ جديد — reCAPTCHA v2 token
  } = req.body || {};

  // 3) Honeypot
  if (website && String(website).trim() !== "") {
    return res
      .status(200)
      .json({ ok: false, code: "HONEYPOT", error: "تم رفض الطلب" });
  }

  // 4) ★ التحقق من reCAPTCHA (قبل أي حاجة تانية)
  const remoteip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "";
  const cap = await verifyRecaptcha(recaptchaToken, remoteip);
  if (!cap.ok) {
    if (cap.reason === "CONFIG") {
      return bad(res, 500, "CONFIG", "إعدادات reCAPTCHA ناقصة على السيرفر");
    }
    return bad(res, 400, "CAPTCHA_FAILED", "فشل التحقق البشري — حاول تاني");
  }

  // 5) قناة الإرسال (تليجرام فقط)
  if (channel && channel !== "tg") {
    return bad(res, 400, "INVALID", "قناة الإرسال غير مدعومة");
  }

  // 6) التحقق من النص
  if (!text || String(text).trim() === "") {
    return bad(res, 400, "INVALID", "النص مطلوب");
  }
  if (String(text).length > MAX_TEXT_LEN) {
    return bad(res, 400, "BIG", "الرسالة طويلة جدًا");
  }

  // 7) التحقق من وسيلة التواصل
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

  // 8) تجهيز قائمة الصور
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

  // 9) تجهيز نص الرسالة
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

  // 10) إعدادات تليجرام — دعم تسميتين للمتغيرات
  const BOT_TOKEN = process.env.TG_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TG_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Missing Telegram env vars (TG_BOT_TOKEN / TG_CHAT_ID)");
    return bad(res, 500, "CONFIG", "إعدادات تليجرام ناقصة");
  }

  // 11) إرسال الرسالة النصية أولاً
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

  // 12) إرسال الصور
  let imagesSent = 0;

  if (imageList.length === 1) {
    // صورة واحدة → sendPhoto
    try {
      const ok = await sendPhotoToTelegram(BOT_TOKEN, CHAT_ID, imageList[0]);
      if (ok) imagesSent = 1;
    } catch (err) {
      console.warn("sendPhoto exception:", err);
    }
  } else if (imageList.length > 1) {
    // أكثر من صورة → sendMediaGroup (كلها مع بعض)
    try {
      imagesSent = await sendMediaGroupToTelegram(
        BOT_TOKEN,
        CHAT_ID,
        imageList,
      );
    } catch (err) {
      console.warn("sendMediaGroup exception:", err);

      // fallback: إرسال كل صورة على حدة
      for (const img of imageList) {
        try {
          const ok = await sendPhotoToTelegram(BOT_TOKEN, CHAT_ID, img);
          if (ok) imagesSent++;
        } catch (e) {
          console.warn("sendPhoto fallback exception:", e);
        }
      }
    }
  }

  // 13) الرد النهائي
  return res.status(200).json({
    ok: true,
    message: "تم الإرسال بنجاح",
    imagesSent,
    imagesTotal: imageList.length,
  });
}
