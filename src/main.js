import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Router from "vue-router";
import "./plagins/bootstrap";
Vue.config.productionTip = false;
Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: App,
    },
  ],
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app");
