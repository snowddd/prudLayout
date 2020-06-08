export default {
  namespaced: true,

  state: {
    policy: {
      ExchangeData: [
        {
          id: "001",
          inputNT: "",
          number_t: "12987124",
          insured_t: "JOHN SMITH",
          status_t: "繳清一定期險類",
          currency_t: "美金",
          rate_t: "4.5%",
          quota_t: "324,9344",
          principal_t: "0",
          interest_t: "0",
          interest_s_t: "0",
          remarks_t: "符合LOVE樂富貸2.75%優惠專案資格"
        },
        {
          id: "002",
          inputNT: "",
          number_t: "12987125",
          insured_t: "JOHN SMITH",
          status_t: "繳清一定期險類",
          currency_t: "美金",
          rate_t: "4.5%",
          quota_t: "324,949",
          principal_t: "0",
          interest_t: "0",
          interest_s_t: "0",
          remarks_t: "符合LOVE樂富貸2.75%優惠專案資格"
        }
      ],
      remittanceAccount: {
        predesignatedAccount: { text: "" },
        resource: "",
        bank: { text: "" },
        account: "",
        swift: "",
        bankCode: ""
      }
      // remittanceAccount: {
      //   predesignatedAccount: "",
      //   bankCode: "",
      //   account: "",
      //   swift: ""
      // }
    },
    policyNT: {
      ExchangeData: [
        {
          id: "001",
          inputNT: "",
          number_t: "12987122",
          insured_t: "JOHN SMITH",
          status_t: "繳清一定期險類",
          currency_t: "台幣",
          rate_t: "4.5%",
          quota_t: "324,000000",
          principal_t: "0",
          interest_t: "0",
          interest_s_t: "0",
          remarks_t: "符合LOVE樂富貸2.75%優惠專案資格"
        },
        {
          id: "002",
          inputNT: "",
          number_t: "12987123",
          insured_t: "JOHN SMITH",
          status_t: "滿期",
          currency_t: "台幣",
          rate_t: "4.5%",
          quota_t: "324,94946567",
          principal_t: "0",
          interest_t: "0",
          interest_s_t: "0",
          remarks_t: "符合LOVE樂富貸2.75%優惠專案資格"
        }
      ],
      remittanceNTAccount: {
        predesignatedAccount: { text: "" },
        resource: "",
        bank: { text: "" },
        account: "",
        bankCode: ""
      }
      // remittanceNTAccount: {
      //   predesignatedAccount: "",
      //   bankCode: "",
      //   account: ""
      // }
    }
  },

  getters: {
    getPolicyData(state) {
      return state.policy.ExchangeData;
    },
    getPolicyNTData(state) {
      return state.policyNT.ExchangeData;
    },
    getRemittanceAccount(state) {
      return state.policy.remittanceAccount;
    },
    getRemittanceNTAccount(state) {
      return state.policyNT.remittanceNTAccount;
    }
  },

  mutations: {
    setPolicyData(state, policyData) {
      state.policy.ExchangeData = policyData;
    },
    setPolicyNTData(state, policyNTData) {
      state.policyNT.ExchangeData = policyNTData;
    },
    setRemittanceAccount(state, remittanceAccount) {
      state.policy.remittanceAccount = remittanceAccount;
    },
    setRemittanceNTAccount(state, remittanceNTAccount) {
      state.policyNT.remittanceNTAccount = remittanceNTAccount;
    }
  },

  actions: {
    setPolicyData({ commit }, policyData) {
      commit("setPolicyData", policyData);
    },
    setPolicyNTData({ commit }, policyNTData) {
      commit("setPolicyNTData", policyNTData);
    },
    setRemittanceAccount({ commit }, remittanceAccount) {
      commit("setRemittanceAccount", remittanceAccount);
    },
    setRemittanceNTAccount({ commit }, remittanceNTAccount) {
      commit("setRemittanceNTAccount", remittanceNTAccount);
    }
  }
};
