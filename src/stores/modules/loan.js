export default {
  namespaced: true,

  state: {
    user: {
      userId: "",
      userName: "",
      password: "",
      isLogin: false
    },
    userProfile: {},
    borrowingMoney: 0,
    BankAccount: {}
  },

  getters: {
    getUserProfile(state) {
      return state.userProfile;
    },
    getBorrowingMoney(state) {
      return state.borrowingMoney;
    },
    getBankAccount(state) {
      return state.BankAccount;
    }
  },

  mutations: {
    setUserData(state, userData) {
      state.userProfile = userData;
    },
    setBorrowingMoney(state, BorrowingMoney) {
      state.borrowingMoney = BorrowingMoney;
      // console.log(BorrowingMoney);
    },
    setBankAccount(state, BankAccount) {
      state.BankAccount = BankAccount;
      // console.log(BankAccount);
    }
  },

  actions: {
    setUserData({ commit }, userData) {
      //   console.log(userData)
      commit("setUserData", userData);
    },
    setBorrowingMoney({ commit }, BorrowingMoney) {
      // console.log(BorrowingMoney);
      commit("setBorrowingMoney", BorrowingMoney);
    },
    setBankAccount({ commit }, BankAccount) {
      // console.log(BankAccount);
      commit("setBankAccount", BankAccount);
    }
  }
};
