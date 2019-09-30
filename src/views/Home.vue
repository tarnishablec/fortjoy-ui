<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button id="notify" class="button is-primary" @click="showNotify">Send Notify</button>
    <button @click="updateSw">Update SW</button>
    <HelloWorld msg="Welcome to Your Vue.js App" style="margin-top:1rem" />
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate delectus eaque itaque libero quisquam unde
      veritatis. Aperiam commodi dicta dolore magni minima necessitatibus, nesciunt sint vero. Aliquam, quis veritatis.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    updateSw() {
      navigator.serviceWorker.getRegistration().then(reg => {
        reg.update();
      });
    },
    showNotify() {
      navigator.serviceWorker.getRegistration().then(registration => {
        registration.showNotification("Hello", {
          body: "Did you make a $1,000,000 purchase at Dr. Evil...",
          icon: "images/ccard.png",
          vibrate: [200, 100, 200, 100, 200, 100, 400],
          tag: "request",
          actions: [
            { action: "yes", title: "Yes", icon: "images/yes.png" },
            { action: "no", title: "No", icon: "images/no.png" }
          ]
        });
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scope>
img {
  display: block;
  margin: auto;
}
</style>
