export default {
  namespaced: true,

  state: {
    paymentData: { type: Object, default: {} },
    paymentMethod: { type: Number, default: 0 },
    completeChangeReturn: { type: Object, default: {} }
  },

  getters: {
    getPaymentData(state) {
      return state.paymentData;
    },
    getPaymentMethod(state) {
      return state.paymentMethod;
    },
    getCompleteChangeReturn(state) {
      return state.completeChangeReturn;
    }
  },

  mutations: {
    setPaymentData(state, paymentData) {
      state.paymentData = paymentData;
    },
    setPaymentMethod(state, paymentMethod) {
      state.paymentMethod = paymentMethod;
    },
    setCompleteChangeReturn(state, completeChangeReturn) {
      state.completeChangeReturn = completeChangeReturn;
    }
  },

  actions: {
    setPaymentData({ commit }, paymentData) {
      commit("setPaymentData", paymentData);
    },
    setPaymentMethod({ commit }, paymentMethod) {
      commit("setPaymentMethod", paymentMethod);
    },
    setCompleteChangeReturn({ commit }, completeChangeReturn) {
      commit("setCompleteChangeReturn", completeChangeReturn);
    }
  }
};
