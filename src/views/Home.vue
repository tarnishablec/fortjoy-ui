<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button id="notify" class="button is-primary">Send Notify</button>
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
  }
};
</script>

<style lang="scss" scope>
img {
  display: block;
  margin: auto;
}
</style>
