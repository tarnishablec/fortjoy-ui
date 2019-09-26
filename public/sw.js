const staticCache = 'site-static-v1';
const dynamicCache = 'site-dynamic-v1';
const assets = [
  "/",
  "/index.html"
];

self.addEventListener("install", evt => {
  console.log(`service worker has been installed`);
  evt.waitUntil(
    caches.open(staticCache).then(cache => {
      cache.addAll(assets);
    })
  )
});

self.addEventListener("activate", evt => {
  // console.log(`service worker has been activated!`)
  evt.waitUntil(
    caches.keys().then(keys => {
      // console.log(keys);
      return Promise.all(
        keys
          .filter(key => !(key in [staticCache, dynamicCache]))
          .map(key => caches.delete(key))
      )
    })
  )
});

self.addEventListener("fetch", evt => {
  // console.log(evt)
  evt.respondWith(
    caches.match(evt.request).then(cacheRes =>
      cacheRes || fetch(evt.request).then(fetchRes =>
        caches.open(dynamicCache).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          // limitCacheSize(dynamicCache, 30);               //limit cache size
          return fetchRes;
        })
      )
    ).catch(err => {
    })
  )
})

const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if (keys.length >= size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    })
  })
}