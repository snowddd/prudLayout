/* eslint-disable prettier/prettier */
<template>
  <div v-if="dialogVisible">
    <el-dialog
      :visible="dialogVisible"
      width="50%"
      :before-close="cancelModle"
      title="系統訊息"
    >
      {{ msg }}
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "alertDialog",
  props: {
    alertMsg: { type: String, default: "" }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("modal", {
      getDialogStatus: "getDialogStatus",
      getDialogMsg: "getDialogMsg",
      getAlertRouteWay: "getAlertRouteWay"
    }),
    dialogVisible() {
      return this.getDialogStatus;
    },
    msg() {
      return this.getDialogMsg;
    }
  },
  methods: {
    ...mapActions({
      setDialogStatus: "modal/setDialogStatus",
      setDialogInitialization: "modal/setDialogInitialization"
    }),
    cancelModle(done) {
      if (this.getAlertRouteWay) {
        this.$router.push(this.getAlertRouteWay);
      }
      this.setDialogInitialization();
      done();
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-dialog .cell {
  white-space: pre-line;
}
</style>
