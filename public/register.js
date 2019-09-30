if ("serviceWorker" in navigator) {
  console.log("support serviceWorker");
  navigator.serviceWorker.register("workbox-sw.js").then(registration => {
    console.log("service worker registered");
    // console.log(registration)
  }).catch(err => {
    console.error('Unable to register service worker.', err);
  })
}

if ("PushManager" in window) {
  console.log(window.PushManager)
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

function subscribeUserToPush() {
  return navigator.serviceWorker.getRegistration()
  .then(function(registration) {
    const subscribeOptions = {
      userVisibleOnly: true,
      // eslint-disable-next-line no-undef
      applicationServerKey: urlBase64ToUint8Array(
        'BMlraNKaQyuaOA3QZaRU3PZqXAVlMdUoWBNRUYt8P3r5iUylKsMs9s-QyXlj9xGCdq565vy4uR2gwA2lhFukKnM'
      )
    };
    return registration.pushManager.subscribe(subscribeOptions);
  })
  .then(function(pushSubscription) {
    console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
    return pushSubscription;
  });
}

// function simpleNotification() {
//   swRegistration && swRegistration.showNotification(
//     "Hello PWA", {
//     body: "GOOD WORK",
//     icon: "./favicon-512x512.png",
//     tag: "request",
//     actions: [
//       { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
//       { "action": "no", "title": "No", "icon": "images/no.png" }
//     ]
//   });
// }