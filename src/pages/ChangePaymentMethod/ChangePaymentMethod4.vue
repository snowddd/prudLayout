/* eslint-disable prettier/prettier */
<template>
  <div class="paymentMethod" style="margin:0 auto;margin-top:3rem;width:70%;">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">保單內容變更</a></el-breadcrumb-item>
      <el-breadcrumb-item>繳費方式變更</el-breadcrumb-item>
    </el-breadcrumb>
    <el-steps :active="active" style="margin-top:1rem;margin-bottom:1rem;">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>
    <div ref="menuItem">
      <el-row style="margin-top:1.5rem;text-align:left;">
        <el-col :span="24" style="text-align:left"
          >變更申請單號：{{ paymentData.oLSM_ID }}</el-col
        >
      </el-row>
      <el-row style="margin-top:1.5rem">
        <el-col :span="12" style="text-align:left"
          >要保人ID：{{ paymentData.policyID }}</el-col
        >
        <el-col :span="12" style="text-align:right">
          申請時間:{{ paymentData.applicationTime }}
        </el-col>
      </el-row>
      <el-row style="margin-top:1.5rem">
        <el-col :span="12" style="text-align:left"
          >要保人姓名：{{ paymentData.policyName }}</el-col
        >
        <el-col :span="12" style="text-align:right">
          申請時間:{{ paymentData.changeDate }}
        </el-col>
      </el-row>
      <el-row style="margin-top:1.5rem;text-align:left;">
        <el-col :span="24" style="text-align:left"
          >變更後的繳費方式：{{ paymentData.paymentMethod }}</el-col
        >
      </el-row>
    </div>
    <el-row style="margin-top:1.5rem">
      <el-col :span="12">
        <el-button class="btn-blue" @click="print">列印</el-button></el-col
      >
      <el-col :span="12">
        <el-button class="btn-blue" @click="goIndex">回首頁</el-button></el-col
      >
    </el-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import paymentReturn from "../../mock/changePayment";
export default {
  name: "ChangePaymentMethod4",
  data() {
    return {
      paymentData: {},
      active: 3
    };
  },
  computed: {
    ...mapGetters("paymentMethod", {
      getCompleteChangeReturn: "getCompleteChangeReturn"
    })
  },
  methods: {
    ...mapActions({
      setPaymentMethod: "paymentMethod/setPaymentMethod"
    }),
    goIndex() {
      this.$router.push("index");
    },
    submit() {},
    print() {
      // window.print();
      //獲取html測試
      // let getMenuText = this.$refs.menuItem.innerHTML;
      // console.log(getMenuText);
    }
  },
  beforeMount() {
    this.paymentData = paymentReturn.return;
    // 之後用API取回的return會存在vuex 讓完成頁調用
    // console.log(this.getCompleteChangeReturn);
    // this.paymentData = this.getCompleteChangeReturn;
  }
};
</script>
<style lang="scss" scoped>
.el-form-item {
  margin: 1rem;
}
@media print {
  .paymentMethod {
    min-width: 100%;
  }
}
</style>
