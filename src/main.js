import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/vuetyped";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "./scss/main.scss";
//import "normalize.css";

Vue.config.productionTip = false;
// Vue.prototype.$eventHub = new Vue(); // Global event bus

Vue.prototype.$eventHub = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
