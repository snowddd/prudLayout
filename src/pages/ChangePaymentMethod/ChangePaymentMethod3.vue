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
      <el-table-column prop="policyNumber" label="保單號碼"> </el-table-column>
      <el-table-column prop="insured" label="主要保險人"></el-table-column>
      <el-table-column prop="effectiveDate" label="生效日"> </el-table-column>
      <el-table-column prop="mainContract" label="主約險種"> </el-table-column>
      <el-table-column prop="currency" label="幣別"> </el-table-column>
      <el-table-column prop="policyStatus" label="保單狀況"> </el-table-column>
      <el-table-column prop="paymentMethod" label="繳費方式"> </el-table-column>
      <el-table-column prop="singlePayment" label="躉繳件"> </el-table-column>
    </el-table>
    <el-row style="margin-top:1.5rem">
      <el-col :span="12">變更後的繳費方式：</el-col>
      <el-col :span="12" style="text-align:left">
        {{ paymentMethodString }}
      </el-col>
    </el-row>
    <el-row style="margin-top:1.5rem">
      <el-col :span="24" style="text-align:left">
        <el-input
          v-model="passwordCheck"
          show-password
          placeholder="請輸入確認密碼"
        ></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top:1.5rem">
      <el-col :span="8">
        <el-button class="btn-blue" @click="routerBack()"
          >上一步</el-button
        ></el-col
      >
      <el-col :span="8">
        <el-button class="btn-blue" @click="submit()"
          >確定送出</el-button
        ></el-col
      >
      <el-col :span="8">
        <el-button class="btn-blue">取消，回首頁</el-button></el-col
      >
    </el-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import loginData from "../../mock/login";
export default {
  name: "ChangePaymentMethod3",
  data() {
    return {
      paymentData: [],
      paymentMethod: 0,
      paymentMethodString: "",
      passwordCheck: "",
      sendData: {},
      active: 2
    };
  },
  computed: {
    ...mapGetters("paymentMethod", {
      getPaymentData: "getPaymentData",
      getPaymentMethod: "getPaymentMethod"
    })
  },
  methods: {
    ...mapActions({
      setCompleteChangeReturn: "paymentMethod/setCompleteChangeReturn"
    }),
    routerBack() {
      this.$router.back();
    },
    submit() {
      if (this.passwordCheck === loginData.user.userPassword) {
        this.$router.push("changePaymentMethod4");
      } else {
        this.$alert.alertDialog("密碼錯誤");
      }

      // API function 先註解
      //   let data = {
      //     policyNumber: this.paymentData[0].policyNumber,
      //     paymentMethod: this.paymentMethod,
      //     password: this.passwordCheck
      //   };
      //   this.$api.paymentMethod
      //     .snedPaymentMethodChange(data)
      //     .then(res => {
      //       console.log(res);
      //       console.log(res.data.body.data);
      //       this.setCompleteChangeReturn(res.data.body.data)
      //         .then(() => {
      //           this.$router.push("changePaymentMethod4");
      //         })
      //         .catch(err => {
      //           console.log(err);
      //         });
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
    }
  },
  beforeMount() {
    //判斷用戶重整 vuex失去資料儲存時導回功能首頁
    if (!this.getPaymentData.policyNumber) {
      alert("變更進行中請勿重新整理\n將導回功能首頁");
      this.$router.push("changePaymentMethod");
    }
    this.paymentData[0] = this.getPaymentData;
    this.paymentMethod = this.getPaymentMethod;
    if (this.paymentMethod === "1") {
      this.paymentMethodString = "自行繳納";
    } else if (this.paymentMethod === "2") {
      this.paymentMethodString = "恢復原帳戶扣款";
    }
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
