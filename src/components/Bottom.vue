<template>
  <el-footer class="footer" height="8vw">
    <el-row>
      <el-col :span="24">
        <div class="phone-txt">客服中心電話：0800-015000</div>
      </el-col>
    </el-row>
  </el-footer>
</template>
<script>
export default {
  name: "bottom",
  props: {
    msg: String
  }
};
</script>
<style lang="scss" scope>
.phone-txt {
  height: 86px;
  line-height: 86px;
}
.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #fff;
  text-align: center;
  .phone-txt {
    width: 100%;
    background: #0a3555;
    line-height: 5vh;
  }
}
.el-footer {
  padding: 0 !important;
  height: auto !important;
}
</style>
