/* eslint-disable prettier/prettier */
<template>
  <div
    class="ChangePaymentMethod"
    style="margin:0 auto;margin-top:3rem;width:70%"
  >
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
    <el-table :data="paymentData" style="width: 100%" border>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i
            class="el-icon-edit"
            @click="handleEdit(scope.$index)"
            style="font-size:24px"
          ></i>
        </template>
      </el-table-column>
      <el-table-column prop="policyNumber" label="保單號碼"> </el-table-column>
      <el-table-column prop="insured" label="主要保險人"></el-table-column>
      <el-table-column prop="effectiveDate" label="生效日"> </el-table-column>
      <el-table-column prop="mainContract" label="主約險種"> </el-table-column>
      <el-table-column prop="currency" label="幣別"> </el-table-column>
      <el-table-column prop="policyStatus" label="保單狀況"> </el-table-column>
      <el-table-column prop="paymentMethod" label="繳費方式"> </el-table-column>
      <el-table-column prop="singlePayment" label="躉繳件"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import paymentData from "../../mock/changePayment";
import { mapActions } from "vuex";
export default {
  name: "ChangePaymentMethod",
  data() {
    return {
      paymentData: "",
      active: 0
    };
  },
  methods: {
    ...mapActions({
      setPaymentData: "paymentMethod/setPaymentData"
    }),
    changePaymentMethod() {
      // console.log(idx);
    },
    handleEdit(index) {
      // console.log(index);
      this.setPaymentData(this.paymentData[index])
        .then(() => {
          this.$router.push("changePaymentMethod2");
        })
        .catch(() => {
          // console.log(err);
        });
    }
  },
  beforeMount() {
    this.paymentData = paymentData.data;
  }
};
</script>
<style lang="scss" scoped>
.el-table > .el-table-column > .i {
  font-size: 32px;
}
.el-form-item {
  margin: 1rem;
}
</style>
