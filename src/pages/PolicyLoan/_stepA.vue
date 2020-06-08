<template>
  <el-row>
    <el-col :span="24">
      <div class="policy-box">
        <div class="flex-pos left">
          <h5 @click="test">台幣保單</h5>
        </div>
        <div class="shadow-box">
          <el-table :data="NTData">
            <el-table-column type="expand" align="center">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="保單號碼:">
                    <span>{{ props.row.number_t }}</span>
                  </el-form-item>
                  <el-form-item label="被保人:">
                    <span>{{ props.row.insured_t }}</span>
                  </el-form-item>
                  <el-form-item label="保單狀況:">
                    <span
                      :class="
                        props.row.status_t === '滿期' ? 'font-color2' : ''
                      "
                      >{{ props.row.status_t }}</span
                    >
                  </el-form-item>
                  <el-form-item label="幣別:">
                    <span>{{ props.row.currency_t }}</span>
                  </el-form-item>
                  <el-form-item label="借款利率:">
                    <span>{{ props.row.rate_t }}</span>
                  </el-form-item>
                  <el-form-item label="可借額度:">
                    <span class="font-color1">{{ props.row.quota_t }}</span>
                  </el-form-item>
                  <el-form-item label="累計借款本金:">
                    <span>{{ props.row.principal_t }}</span>
                  </el-form-item>
                  <el-form-item label="累計借款利息:">
                    <span>{{ props.row.interest_t }}</span>
                  </el-form-item>
                  <el-form-item label="累計借款本息:">
                    <span>{{ props.row.interest_s_t }}</span>
                  </el-form-item>
                  <el-form-item label="備註:">
                    <span>{{ props.row.remarks_t }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="本次借款金額" align="center">
              <template slot-scope="props">
                <div v-if="props.row.status_t === '滿期'">
                  <div class="borrowing-box font-color2">
                    不可借原因
                  </div>
                </div>
                <div v-else>
                  <el-input
                    v-model="props.row.inputNT"
                    placeholder="請輸入借款金額"
                  ></el-input>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              v-for="labellist in Ntlabellists"
              :key="labellist.id"
              :label="labellist.title"
              :prop="labellist.val"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="policy-box">
        <div class="shadow-box pd2">
          <div class="showTop flex-pos left">
            <div class="total-area">
              可借金額合計
              <span>{{ loanTotal_NT }}</span>
            </div>
          </div>
          <el-form
            :model="ruleFormNT"
            label-width="150px"
            label-position="left"
          >
            <el-form-item prop="resource">
              <el-radio-group v-model="ruleFormNT.resource">
                <div class="flex-pos left mg-top">
                  <el-radio label="1">指定匯款帳號選單:</el-radio>
                  <el-select
                    v-model="ruleFormNT.predesignatedAccount"
                    placeholder="請選擇指定帳號"
                    value-key="BankCode"
                    :disabled="ruleFormNT.resource != 1"
                  >
                    <el-option
                      v-for="item in chooseRemitoptions"
                      :key="item.BankCode"
                      :label="item.text"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="flex-pos left mg-top">
                  <el-radio label="2" label-position="left"
                    >輸入匯款帳號</el-radio
                  >
                </div>
                <div class="flex-pos left child-mg ">
                  <el-form-item label="銀行代號:" class="child-right">
                    <el-select
                      v-model="ruleFormNT.bank"
                      placeholder="請選擇指定帳號"
                      value-key="BankCode"
                      :disabled="ruleFormNT.resource != 2"
                    >
                      <el-option
                        v-for="item in bankCodeOptionList"
                        :key="item.BankCode"
                        :label="item.text"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="帳號">
                    <el-input
                      v-model="ruleFormNT.account"
                      autocomplete="off"
                      class="ent-account"
                      :disabled="ruleFormNT.resource != 2"
                    ></el-input>
                  </el-form-item>
                </div>
                <div>
                  <div class="flex-pos left mg-top">
                    <el-radio label="3">輸入銀行代號與帳號</el-radio>
                  </div>
                  <div class="flex-pos left child-mg">
                    <el-form-item label="銀行代號:" class="child-right">
                      <el-input
                        v-model="ruleFormNT.bankCode"
                        autocomplete="off"
                        class="ent-account"
                        :disabled="ruleFormNT.resource != 3"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="帳號:">
                      <el-input
                        v-model="ruleFormNT.account"
                        autocomplete="off"
                        class="ent-account"
                        :disabled="ruleFormNT.resource != 3"
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </el-radio-group>
            </el-form-item>
            <!-- <el-form-item label="輸入匯款帳號"> </el-form-item> -->
          </el-form>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="policy-box">
        <div class="flex-pos left">
          <h5>外幣保單</h5>
        </div>
        <div class="shadow-box">
          <el-table :ref="ExchangeData" :data="ExchangeData">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="保單號碼:">
                    <span>{{ props.row.number_t }}</span>
                  </el-form-item>
                  <el-form-item label="被保人:">
                    <span>{{ props.row.insured_t }}</span>
                  </el-form-item>
                  <el-form-item label="保單狀況:">
                    <span>{{ props.row.status_t }}</span>
                  </el-form-item>
                  <el-form-item label="幣別:">
                    <span>{{ props.row.currency_t }}</span>
                  </el-form-item>
                  <el-form-item label="借款利率:">
                    <span>{{ props.row.rate_t }}</span>
                  </el-form-item>
                  <el-form-item label="可借額度:">
                    <span class="font-color1">{{ props.row.quota_t }}</span>
                  </el-form-item>
                  <el-form-item label="累計借款本金:">
                    <span>{{ props.row.principal_t }}</span>
                  </el-form-item>
                  <el-form-item label="累計借款利息:">
                    <span>{{ props.row.interest_t }}</span>
                  </el-form-item>
                  <el-form-item label="累計借款本息:">
                    <span>{{ props.row.interest_s_t }}</span>
                  </el-form-item>
                  <el-form-item label="備註:">
                    <span>{{ props.row.remarks_t }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="本次借款金額" align="center">
              <template slot-scope="props">
                <el-input
                  v-model="props.row.input"
                  placeholder="請輸入借款金額"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              v-for="labellist in Exlabellists"
              :key="labellist.id"
              :label="`${labellist.title}`"
              :prop="`${labellist.val}`"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="policy-box">
        <div class="shadow-box pd2">
          <div class="showTop flex-pos left">
            <div class="total-area">
              可借金額合計
              <span>{{ loanTotal_NT }}</span>
            </div>
          </div>
          <el-form :model="ruleForm" label-width="150px" label-position="left">
            <el-form-item prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <div class="flex-pos left mg-top">
                  <el-radio label="1">指定匯款帳號選單:</el-radio>
                  <el-select
                    v-model="ruleForm.predesignatedAccount"
                    placeholder="請選擇指定帳號"
                    value-key="BankCode"
                    :disabled="ruleForm.resource != 1"
                  >
                    <el-option
                      v-for="item in chooseRemitoptions"
                      :key="item.BankCode"
                      :label="item.text"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="flex-pos left mg-top">
                  <el-radio label="2" label-position="left"
                    >輸入匯款帳號</el-radio
                  >
                </div>
                <div class="flex-pos left child-mg ">
                  <el-form-item label="銀行代號:" class="child-right">
                    <el-select
                      v-model="ruleForm.bank"
                      placeholder="請選擇指定帳號"
                      value-key="BankCode"
                      :disabled="ruleForm.resource != 2"
                    >
                      <el-option
                        v-for="item in bankCodeOptionList"
                        :key="item.BankCode"
                        :label="item.text"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="帳號:" class="child-right">
                    <el-input
                      v-model="ruleForm.account"
                      autocomplete="off"
                      class="ent-account"
                      :disabled="ruleForm.resource != 2"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Swift Code:">
                    <el-input
                      v-model="ruleForm.swift"
                      autocomplete="off"
                      class="ent-account"
                      :disabled="ruleForm.resource != 2"
                    ></el-input>
                  </el-form-item>
                </div>
                <div>
                  <div class="flex-pos left mg-top">
                    <el-radio label="3">輸入銀行代號與帳號</el-radio>
                  </div>
                  <div class="flex-pos left child-mg">
                    <el-form-item label="銀行代號:" class="child-right">
                      <el-input
                        v-model="ruleForm.bankCode"
                        autocomplete="off"
                        class="ent-account"
                        :disabled="ruleForm.resource != 3"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="帳號:" class="child-right">
                      <el-input
                        v-model="ruleForm.account"
                        autocomplete="off"
                        class="ent-account"
                        :disabled="ruleForm.resource != 3"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="Swift Code:">
                      <el-input
                        v-model="ruleForm.swift"
                        autocomplete="off"
                        class="ent-account"
                        :disabled="ruleForm.resource != 3"
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </el-radio-group>
            </el-form-item>
            <!-- <el-form-item label="輸入匯款帳號"> </el-form-item> -->
          </el-form>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import bankCodeOptionList from "../../../public/json/bankCodeOptionList";
export default {
  name: "PolicyLoan_step1",
  data() {
    return {
      active: 0,
      loanTotal_NT: "827384",
      bankCodeOptionList: bankCodeOptionList.bankCodeOption,
      chooseRemitoptions: bankCodeOptionList.chooseRemitoptions,
      ruleForm: {
        predesignatedAccount: "",
        resource: "",
        bank: { BankCode: "004", BankName: "台灣銀行", text: "004 台灣銀行" },
        bankCode: "",
        account: "",
        swift: ""
      },
      ruleFormNT: {
        predesignatedAccount: "",
        resource: "",
        bank: { BankCode: "004", BankName: "台灣銀行", text: "004 台灣銀行" },
        bankCode: "",
        account: ""
      },
      Ntlabellists: [
        {
          title: "保單號碼",
          val: "number_t"
        },
        {
          title: "可借額度",
          val: "quota_t"
        }
      ],
      Exlabellists: [
        {
          title: "保單號碼",
          val: "number_t"
        },
        {
          title: "可借額度",
          val: "quota_t"
        }
      ],
      NTData: [
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
      ]
    };
  },
  computed: {
    ...mapGetters("modal", {
      getDialogStatus: "getDialogStatus"
    })
  },
  methods: {
    ...mapActions({
      setPolicyData: "policyLoan/setPolicyData",
      setPolicyNTData: "policyLoan/setPolicyNTData",
      setRemittanceAccount: "policyLoan/setRemittanceAccount",
      setRemittanceNTAccount: "policyLoan/setRemittanceNTAccount"
    }),
    test() {
      this.setPolicyData(this.ExchangeData);
      this.setPolicyNTData(this.NTData);
      this.setRemittanceAccount(this.ruleForm);
      console.log(this.NTData);
      console.log(this.ruleFormNT);
      this.setRemittanceNTAccount(this.ruleFormNT);
    }
  },
  updated() {
    this.setPolicyData(this.ExchangeData);
    this.setPolicyNTData(this.NTData);
    this.setRemittanceAccount(this.ruleForm);
    this.setRemittanceNTAccount(this.ruleFormNT);
  }
};
</script>
<style lang="scss">
.policy-box {
  margin-top: 3vw;
  padding: 0 2.5vw;
  h5 {
    font-size: 16px;
    margin-bottom: 1vw;
  }
  .total-area {
    margin: 1.5vw 0 0 1.5vw;
    font-size: 16px;
  }
  .mg-top {
    margin: 2vw 0 0 2vw;
  }
  .child-mg {
    margin-left: 3.5vw;
    .child-right {
      margin-right: 2vw;
    }
  }
  .borrowing-box {
    text-decoration: underline;
  }
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
@media (max-width: 576px) {
  .policy-box {
    margin-top: 20vw;
  }
}
</style>
