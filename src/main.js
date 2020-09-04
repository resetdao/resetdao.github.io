import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/icons/index.scss";
import i18n from "./lang";
import VueI18n from "vue-i18n";

Vue.config.productionTip = false;

Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
