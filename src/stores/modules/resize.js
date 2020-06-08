export default {
  namespaced: true,

  state: {
    listEllipsis: false
  },

  getters: {
    getEllipsis(state) {
      // console.log(status);
      return state.listEllipsis;
    }
  },

  mutations: {
    setEllipsis(state, status) {
      state.listEllipsis = status;
      // console.log(status)
    }
  },

  actions: {
    setEllipsis({ commit }, status) {
      commit("setEllipsis", status);
    }
  }
};
