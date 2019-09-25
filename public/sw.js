const staticCacheName = 'site-static';
const assets = [
  "/",
];

self.addEventListener("install", evt => {
  // console.log(`service worker has been installed`);
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets);
    })
  )
});

// self.addEventListener("activate", evt => {
//   console.log(`service worker has been activated!`)
// });

self.addEventListener("fetch", evt => {
  // console.log(evt)
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => cacheRes || fetch(evt.request))
  )
})