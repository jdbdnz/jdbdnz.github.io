<template>
  <div id="home">
    <div class="container">
      <Avatar src="./dist/jdbdnz.jpg" />
      <h1 class="title">Hi I'm Josh, and this is my dog.</h1>
      <div>
        <p>
          Her name is
          <router-link to="/margot">Margot</router-link>
          and she gets mad
          <router-link to="/FOMO">FOMO</router-link>
          whenever I go anywhere without her, so here she is on the internet with me.
        </p>
        <img src="./assets/images/margot.jpg" />
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
      msg: "Hi I'm Josh"
    };
  },
  components: { Avatar }
};
</script>
