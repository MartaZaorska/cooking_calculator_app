const cacheName = "v1";

const cacheAssets = [
  "index.html",
  "/css/main.min.css",
  "/js/constants.js",
  "/js/main.js",
  "/js/handlers.js",
  "/js/helper.js",
  "/js/Store.js",
  "/js/UI.js",
  "https://fonts.googleapis.com/css?family=Sen:400,800&display=swap&subset=latin-ext",
  "https://kit.fontawesome.com/1df1c9dc3d.js"
];

self.addEventListener("install", e => {
  console.log("Service Worker: Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  console.log("Service Worker: Activated");

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cache => cache !== cacheName)
          .map(cache => caches.delete(cache))
      );
    })
  );
});

self.addEventListener("fetch", e => {
  console.log("Service Worker: Fetching");
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const resClone = res.clone();
        caches.open(cacheName).then(cache => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(err => caches.match(e.request).then(res => res))
  );
});
