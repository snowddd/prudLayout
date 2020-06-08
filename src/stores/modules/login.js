export default {
  namespaced: true,

  state: {
    user: {
      userId: "",
      userName: "",
      password: "",
      isLogin: false
    },
    token: "",
    href: ""
  },

  getters: {
    getLoign(state) {
      return state.user;
    },
    getLoignStatus(state) {
      return state.user.isLogin;
    },
    getToken(state) {
      return state.token;
    },
    getHref(state) {
      return state.href;
    }
  },

  mutations: {
    setUserData(state, userData) {
      // console.log(userData)
      state.user.userId = userData.userId;
      state.user.userName = userData.userName;
      state.user.password = userData.password;
      state.user.isLogin = true;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    setLoginStatus(state, status) {
      state.user.isLogin = status;
    },
    setHref(state, href) {
      state.href = href;
      // console.log("setHref");
    },
    removeToken(state) {
      state.token = "";
      localStorage.removeItem("token");
    }
  },

  actions: {
    setUserData({ commit }, userData) {
      // console.log(userData)
      commit("setUserData", userData);
    },
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setLoginStatus({ commit }, status) {
      commit("setLoginStatus", status);
    },
    setHref({ commit }, href) {
      commit("setHref", href);
    },
    removeToken({ commit }) {
      commit("removeToken");
    }
  }
};
