<template>
  <el-row>
    <el-col :span="24">
      <div class="policy-box">
        <div class="shadow-box">
          <div class="title-area">變更申請單號 : w20042600002</div>
          <el-table :data="changeData">
            <el-table-column prop="id" label="要保人ID"> </el-table-column>
            <el-table-column prop="name" label="要保人姓名"> </el-table-column>
            <el-table-column prop="time" label="申請時間"> </el-table-column>
            <el-table-column prop="date" label="預計變更受理日">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="policy-box">
        <div class="flex-pos left">
          <h5 class="txt">台幣保單</h5>
        </div>
        <div class="shadow-box">
          <el-table :ref="ExchangeData" :data="NTData">
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
                  v-model="props.row.inputNT"
                  placeholder="請輸入借款金額"
                  :disabled="true"
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
        <div class="flex-pos left">
          <h5 class="txt">外幣保單</h5>
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
                  :disabled="true"
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
        <div class="shadow-box">
          <el-table :data="AccountData">
            <el-table-column prop="accountNT" label="你選擇的台幣匯款帳號">
            </el-table-column>
            <el-table-column prop="account" label="你選擇的外幣匯款帳號">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "PolicyLoan_step1",
  data() {
    return {
      changeData: [
        {
          id: "998989",
          name: "JOHN SMITH",
          time: "2020/04/26 11:41:07",
          date: "2020/04/27"
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
      ExchangeData: [
        {
          id: "001",
          inputNT: "",
          number_t: "12987122",
          insured_t: "JOHN SMITH",
          status_t: "繳清一定期險類",
          currency_t: "台幣",
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
          number_t: "12987123",
          insured_t: "JOHN SMITH",
          status_t: "繳清一定期險類",
          currency_t: "台幣",
          rate_t: "4.5%",
          quota_t: "324,949",
          principal_t: "0",
          interest_t: "0",
          interest_s_t: "0",
          remarks_t: "符合LOVE樂富貸2.75%優惠專案資格"
        }
      ],
      AccountData: [
        {
          account: "",
          accountNT: ""
        }
      ]
    };
  },
  computed: {
    ...mapGetters("policyLoan", {
      getPolicyData: "getPolicyData",
      getPolicyNTData: "getPolicyNTData",
      getRemittanceAccount: "getRemittanceAccount",
      getRemittanceNTAccount: "getRemittanceNTAccount"
    })
  },
  created() {
    this.ExchangeData = this.getPolicyData;

    this.NTData = this.getPolicyNTData;

    if (this.getRemittanceAccount.resource === "1") {
      this.AccountData[0].account = this.getRemittanceAccount.predesignatedAccount.text;
    } else if (this.getRemittanceAccount.resource === "2") {
      console.log(this.getRemittanceAccount.account);
      this.AccountData[0].account =
        this.getRemittanceAccount.bank.BankCode +
        " " +
        this.getRemittanceAccount.account.slice(0, 3) +
        "******" +
        this.getRemittanceAccount.account.slice(-3);
    } else if (this.getRemittanceAccount.resource === "3") {
      this.AccountData[0].account =
        this.getRemittanceAccount.bankCode +
        " " +
        this.getRemittanceAccount.account.slice(0, 3) +
        "******" +
        this.getRemittanceAccount.account.slice(-3);
    }

    if (this.getRemittanceNTAccount.resource === "1") {
      this.AccountData[0].accountNT = this.getRemittanceAccount.predesignatedAccount.text;
    } else if (this.getRemittanceNTAccount.resource === "2") {
      console.log(this.getRemittanceNTAccount.account);
      this.AccountData[0].accountNT =
        this.getRemittanceNTAccount.bank.BankCode +
        " " +
        this.getRemittanceNTAccount.account.slice(0, 3) +
        "******" +
        this.getRemittanceNTAccount.account.slice(-3);
    } else if (this.getRemittanceNTAccount.resource === "3") {
      this.AccountData[0].accountNT =
        this.getRemittanceNTAccount.bankCode +
        " " +
        this.getRemittanceNTAccount.account.slice(0, 3) +
        "******" +
        this.getRemittanceNTAccount.account.slice(-3);
    }
    // this.AccountData[0].account = this.getRemittanceAccount.predesignatedAccount.text;
    this.AccountData[0].accountNT = this.getRemittanceNTAccount.predesignatedAccount.text;
  }
};
</script>
<style lang="scss" scoped>
.policy-box {
  margin-top: 3vw;
  padding: 0 2.5vw;
  h5 {
    &.txt {
      margin: 0;
      margin-bottom: 1vw;
    }
  }
  .title-area {
    text-align: left;
    background-color: #eaf5ff;
    height: 3vw;
    padding-left: 0.8vw;
    line-height: 3vw;
    color: #004ca0;
    font-size: 16px;
    font-weight: bold;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  h5 {
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
