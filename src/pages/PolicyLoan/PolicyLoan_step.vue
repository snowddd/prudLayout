<template>
  <div>
    <div>
      <steps :active="active" />
    </div>
    <div v-if="steps.A">
      <stepA />
    </div>
    <div v-else-if="steps.B">
      <stepsB />
    </div>
    <div v-else>
      <stepsC />
    </div>
    <div class="btn-box flex-pos" v-if="!steps.C">
      <el-button>取消</el-button>
      <el-button
        class="top-btn btn-blue no-brd"
        @click="handleBack"
        v-if="!steps.A"
        >上一步</el-button
      >
      <el-button class="top-btn btn-blue no-brd" @click="handleNext"
        >下一步</el-button
      >
    </div>
    <div class="btn-box flex-pos" v-if="steps.C">
      <el-button class="top-btn btn-blue no-brd">列印</el-button>
      <el-button @click="backIndex">回首頁</el-button>
    </div>
  </div>
</template>
<script>
import steps from "@/components/Steps";
import stepA from "@/pages/PolicyLoan/_stepA";
import stepsB from "@/pages/PolicyLoan/_stepB";
import stepsC from "@/pages/PolicyLoan/_stepC";

export default {
  components: {
    steps,
    stepA,
    stepsB,
    stepsC
  },
  data() {
    return {
      active: 0,
      steps: {
        A: true,
        B: false,
        C: false
      }
    };
  },
  methods: {
    handleNext() {
      if (!this.steps.B && !this.steps.C) {
        this.steps.A = !this.steps.A;
        (this.active = 1), (this.steps.B = true);
      } else if (this.steps.B && !this.steps.A) {
        this.steps.B = !this.steps.B;
        (this.active = 3), (this.steps.C = true);
      }
    },
    handleBack() {
      if (!this.steps.A && !this.steps.C && this.steps.B) {
        console.log("dgfdf");
        this.steps.A = true;
        this.steps.B = false;
        this.active = 0;
      }
    },
    backIndex() {
      this.$router.push("index");
    }
  }
};
</script>
<style lang="scss" scoped>
.policy-box {
  h5 {
    color: #ff0;
  }
}
.btn-box {
  padding: 2vw;
}
</style>
