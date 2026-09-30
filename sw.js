/* Service Worker — غيّري VERSION مع كل تعديل مهم: v1 → v2 → v3 ... */
const VERSION = "__BUILD_VERSION__";
const CACHE = `study-platform-${VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./pdf-annotator.html", // ★ أضيفي السطر ده
  "./manifest.webmanifest",
  "./pwa.js",
  "./icons/icon.svg",
  "./icons/icon-maskable.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./data/1-graphics.js",
  "./data/2-visual-programming.js",
  "./data/3-networks.js",
  "./data/4-operating-systems.js",
  "./data/5-software-engineering.js",
  "./data/6-field-python.js",
  "./data/7-field-net.js",
];

// مكتبات وخطوط خارجية مسموح تتخزن أوفلاين (Google Drive والـ iframes مش هتتخزن)
const CDN_HOSTS = [
  "cdnjs.cloudflare.com",
  "cdn.jsdelivr.net",
  "unpkg.com",
  "code.jquery.com",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        Promise.allSettled(APP_SHELL.map((url) => cache.add(url))),
      ),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("study-platform-") && k !== CACHE)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// الصفحة بتبعت "SKIP_WAITING" لما تدوسي "تحديث" في التوست
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response && response.status === 200)
      cache.put(request, response.clone());
    return response;
  } catch (err) {
    return (
      (await cache.match(request)) ||
      (await cache.match("./index.html")) ||
      (await cache.match("./")) ||
      new Response("📴 لا يوجد اتصال بالإنترنت — والصفحة دي مش متخزنة بعد", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
    );
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && (response.status === 200 || response.type === "opaque")) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);
  return cached || (await network) || new Response("", { status: 504 });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  if (request.headers.has("range")) return; // ملفات PDF/فيديو بتيجي أجزاء

  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    if (request.mode === "navigate") {
      event.respondWith(networkFirst(request));
    } else {
      event.respondWith(staleWhileRevalidate(request));
    }
    return;
  }

  if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(request));
  }
  // Google Drive وأي حاجة تانية بتعدي من غير تدخل
});
