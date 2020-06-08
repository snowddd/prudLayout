export default {
  namespaced: true,

  state: {
    foreignAddress: { type: Boolean, default: false },
    cityAreaRoad: {
      type: Object,
      default: {
        cname: "",
        aname: "",
        rname: ""
      }
    },
    secAddress: {
      type: Object,
      default: {
        radio: "",
        ln: "",
        aly: "",
        no: "",
        no_: "",
        f: "",
        f_: "",
        integrate: ""
      }
    }
  },

  getters: {
    getForeignAddress(state) {
      return state.foreignAddress;
    },
    getSecAddress(state) {
      return state.secAddress;
    },
    getCityAreaRoad(state) {
      return state.cityAreaRoad;
    }
  },

  mutations: {
    setForeignAddress(state, foreignAddress) {
      state.foreignAddress = foreignAddress;
    },
    setSecAddress(state, secAddress) {
      state.secAddress.radio = secAddress.radio;
      state.secAddress.ln = secAddress.ln;
      state.secAddress.aly = secAddress.aly;
      state.secAddress.no = secAddress.no;
      state.secAddress.no_ = secAddress.no_;
      state.secAddress.f = secAddress.f;
      state.secAddress.f_ = secAddress.f_;
      state.secAddress.integrate = secAddress.integrate;
    },
    setCityAreaRoad(state, cityAreaRoad) {
      state.cityAreaRoad.cname = cityAreaRoad.cname;
      state.cityAreaRoad.aname = cityAreaRoad.aname;
      state.cityAreaRoad.rname = cityAreaRoad.rname;
    },
    setInitialization(state) {
      state.foreignAddress = false;
      state.secAddress = {};
      state.cityAreaRoad = {};
    }
  },

  actions: {
    setForeignAddress({ commit }, foreignAddress) {
      commit("setForeignAddress", foreignAddress);
    },
    setSecAddress({ commit }, secAddress) {
      commit("setSecAddress", secAddress);
    },
    setCityAreaRoad({ commit }, cityAreaRoad) {
      commit("setCityAreaRoad", cityAreaRoad);
    },
    setInitialization({ commit }) {
      commit("setInitialization");
    }
  }
};
