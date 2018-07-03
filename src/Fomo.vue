<template>
  <div id="fomo">
    <div class="container">
      <h1>Fear Of Missing Out</h1>
      <p>
        fōmō, noun. Anxiety induced by imaging amazing things are happening wherever you are not.
      </p>
      <router-link to="/margot">
        <Avatar src="./dist/margot-scary.jpg" />
      </router-link>
      <p> (This is what Margot has) </p>
    </div>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
export default {
  name: "Fomo",
  data() {
    return {
      msg: "fōmō, noun. Anxiety induced by imaging amazing things are happening wherever you are not"
    };
  },
  components: { Avatar }
};
</script>
