export default {
  namespaced: true,

  state: {
    dialogStatus: {
      type: Object,
      default: {
        status: false,
        type: 0,
        routeWay: "",
        alertRouteWay: "",
        msg: ""
      }
    }
  },

  getters: {
    getDialogStatus(state) {
      return state.dialogStatus.status;
    },
    getDialogType(state) {
      return state.dialogStatus.type;
    },
    getDialogSumbitRoute(state) {
      // console.log(state.dialogStatus.routeWay);
      return state.dialogStatus.routeWay;
    },
    getAlertRouteWay(state) {
      return state.dialogStatus.alertRouteWay;
    },
    getDialogMsg(state) {
      return state.dialogStatus.msg;
    }
  },

  mutations: {
    setDialogStatus(state, dialogStatus) {
      state.dialogStatus.status = dialogStatus.status;
      state.dialogStatus.type = dialogStatus.type;
      //不一定需要寫route或msg
      // if (dialogStatus.routeWay) {
      state.dialogStatus.routeWay = dialogStatus.routeWay;
      state.dialogStatus.alertRouteWay = dialogStatus.alertRouteWay;
      // }
      // if (dialogStatus.msg) {
      state.dialogStatus.msg = dialogStatus.msg;
      // }
    },
    setDialogInitialization(state) {
      state.dialogStatus = {
        status: false,
        type: 0,
        routeWay: "",
        alertRouteWay: "",
        msg: ""
      };
    }
  },

  actions: {
    setDialogStatus({ commit }, dialogStatus) {
      // console.log(dialogStatus);
      commit("setDialogStatus", dialogStatus);
    },
    setDialogInitialization({ commit }) {
      commit("setDialogInitialization");
    }
  }
};
