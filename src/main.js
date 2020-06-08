import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./stores/index";
import api from "./utilities/api/index";
import alert from "./utilities/alert";
// import VeeValidate from "vee-validate";
import VueCookies from "vue-cookies";
import "./plugins/element.js";
import "element-ui/lib/theme-chalk/index.css";
import "@/utilities/rem.js";
import bus from "vue-bus";
// const config = {
//   errorBagName: "errorBags", // change if property conflicts.
//   fieldsBagName: "fieldBags"
// };
// Vue.use(VeeValidate, config);
Vue.use(VueCookies);
Vue.use(bus);
Vue.prototype.$api = api;
Vue.prototype.router = router;
Vue.prototype.$alert = alert;
Vue.prototype.$store = store;
Vue.prototype.$cookie = VueCookies;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
