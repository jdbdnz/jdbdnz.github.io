import Vue from "vue";
import Josh from "./Josh.vue";
import Margot from "./Margot.vue";
import VueRouter from "vue-router";

import "./index.scss";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Josh },
    { path: "/margot", component: Margot }
  ]
});

new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount("#app");
