import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import loan from "./modules/loan";
import resize from "./modules/resize";
import paymentMethod from "./modules/paymentMethod";
import changeAddress from "./modules//changeAddress";
import fatca from "./modules/fatca";
import policyLoan from "./modules/policyLoan";
import modal from "./modules/modal";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    loan,
    resize,
    paymentMethod,
    changeAddress,
    fatca,
    policyLoan,
    modal
  },
  state: {},
  getters: {},
  actions: {},
  mutations: {}
});
