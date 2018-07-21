// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";

sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export const app = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
