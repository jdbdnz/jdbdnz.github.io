<template>
  <div id="app">
    <div class="container">
      <img class="avatar" src="./assets/jdbdnz.jpg">
      <h1 class="title">Hi I'm Josh, and this is my dog.</h1>
      <div>
        <p>
          Her name is Margot and she gets mad <a href="//www.urbandictionary.com/define.php?term=fomo">FOMO</a> whenever I go anywhere without her, so here she is on the internet with me.
        </p>
        <img src="./assets/margot.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

.avatar {
  height: 100px;
  width: 100px;
  border-radius: 50px;
}
</style>
