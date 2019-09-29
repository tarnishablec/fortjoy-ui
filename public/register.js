if ("serviceWorker" in navigator) {
  console.log("support serviceWorker");
  navigator.serviceWorker.register("workbox-sw.js").then(registration => {
    console.log("service worker registered");

    return registration;
  }).catch(err => {
    console.error('Unable to register service worker.', err);
  })
}

askPermission();

function askPermission() {
  return new Promise((resolve, reject) => {
    const permissionResult = Notification.requestPermission(result => {
      resolve(result);
    });
    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then(result => {
    if (result !== 'granted') {
      throw new Error('We weren\'t granted permission.');
    }
  })
}

document.querySelector("#notify").addEventListener('click', () => {
  simpleNotification();
});

function simpleNotification() {
  new Notification("Hello PWA", {
    body: "GOOD WORK",
    icon: "./favicon-512x512.png"
  });
}