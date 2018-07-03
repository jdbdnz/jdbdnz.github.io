<template>
  <div id="margot">
    <div class="container">
      <Avatar src="./dist/margot-avatar.jpg" />
      <h1 class="title">Hi I'm Margot, and this is my person.</h1>
      <div>
        <p>
          His name is <router-link to="/">Josh</router-link>
          and without me he's lost, so here he is on the internet with me.
        </p>
        <img src="./assets/images/josh.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
export default {
  name: "Margot",
  data() {
    return {
      msg: "Hi I'm Margot"
    };
  },
  components: { Avatar }
};
</script>
