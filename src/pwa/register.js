const path = require("path")

if ("serviceWorker" in navigator) {
  console.log("support serviceWorker");
  navigator.serviceWorker.register(path.resolve(__dirname, "sw.js")).then(res => {
    console.log("service worker registered");
  }).catch(err => {

  })
}