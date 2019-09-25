self.addEventListener("install", evt => {
  console.log(`service worker has been installed`);
  console.log(evt);
});

self.addEventListener("activate", evt => {
  console.log(`service worker has been activated!`)
});