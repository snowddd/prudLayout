<template>
  <div>
    <div class="flex-box">
      <div class="flex-pos">
        <div class="steps-box shadow-box">
          <el-steps
            align-center
            space="100%"
            :active="active"
            finish-status="success"
          >
            <el-step title="step 1"></el-step>
            <el-step title="step 2"></el-step>
            <el-step title="step 3"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    active: Number
  },
  data() {
    return {};
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
<style scoped>
.steps-box {
  width: 95%;
  height: 4vw;
  padding-top: 1vw;
  border-radius: 10px;
  /* box-shadow: 0 0 10px 3px rgba(223, 223, 223, 0.5); */
  background-color: #ffffff;
}
</style>
