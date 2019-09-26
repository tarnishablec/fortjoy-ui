if ("serviceWorker" in navigator) {
  console.log("support serviceWorker");
  navigator.serviceWorker.register("./sw.js").then(res => {
    console.log("service worker registered");
  }).catch(err => {

  })
}