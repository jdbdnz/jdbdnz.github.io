<template>
  <div id="home">
    <div class="container">
      <Avatar src="./dist/margot.jpg" />
      <h1 class="title">Hi I'm Margot, and this is my person.</h1>
      <div>
        <p>
          His name is <router-link to="/">Josh</router-link>
          and without me is lost, so I volunteered to go into the internet with him.
        </p>
        <img src="./assets/images/jdbdnz.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
export default {
  name: "Josh",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: { Avatar }
};
</script>
