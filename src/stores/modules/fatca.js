export default {
  namespaced: true,

  state: {
    taxResidenceStatus: {
      type: Array,
      default: []
    },
    foreignCountryAddress: {
      type: Object,
      default: {
        foreignCountryAddress: "",
        foreignCountrySecAddress: ""
      }
    },
    engInformation: {
      type: Object,
      default: {
        engName: "",
        nowCountry: "",
        nowAddress: ""
      }
    },
    taxResidence: {
      type: Object,
      default: {
        country: "",
        taxId: "",
        reason: "",
        subReason: ""
      }
    }
  },

  getters: {
    getTaxResidenceStatus(state) {
      return state.taxResidenceStatus;
    },
    getForeignCountryAddress(state) {
      return state.foreignCountryAddress;
    },
    getEngInformation(state) {
      return state.engInformation;
    },
    getTaxResidence(state) {
      return state.taxResidence;
    }
  },

  mutations: {
    setTaxResidenceStatus(state, taxResidenceStatus) {
      state.taxResidenceStatus = taxResidenceStatus;
    },
    setForeignCountryAddress(state, foreignCountryAddress) {
      state.foreignCountryAddress.foreignCountryAddress =
        foreignCountryAddress.foreignCountryAddress;
      state.foreignCountryAddress.foreignCountrySecAddress =
        foreignCountryAddress.foreignCountrySecAddress;
    },
    setEngInformation(state, engInformation) {
      state.engInformation.engName = engInformation.engName;
      state.engInformation.nowCountry = engInformation.nowCountry;
      state.engInformation.nowAddress = engInformation.nowAddress;
    },
    setTaxResidence(state, taxResidence) {
      state.taxResidence.country = taxResidence.country;
      state.taxResidence.taxId = taxResidence.taxId;
      state.taxResidence.reason = taxResidence.reason;
      state.taxResidence.subReason = taxResidence.subReason;
    },
    setInitialization(state) {
      state.taxResidenceStatus = [];
      state.foreignAddress = {};
      state.engInformation = {};
      state.taxResidence = {};
    }
  },

  actions: {
    setTaxResidenceStatus({ commit }, taxResidenceStatus) {
      commit("setTaxResidenceStatus", taxResidenceStatus);
    },
    setForeignCountryAddress({ commit }, foreignCountryAddress) {
      commit("setForeignCountryAddress", foreignCountryAddress);
    },
    setEngInformation({ commit }, engInformation) {
      commit("setEngInformation", engInformation);
    },
    setTaxResidence({ commit }, taxResidence) {
      commit("setTaxResidence", taxResidence);
    },
    setInitialization({ commit }) {
      commit("setInitialization");
    }
  }
};
