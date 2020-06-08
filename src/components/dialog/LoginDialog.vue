/* eslint-disable prettier/prettier */
<template>
  <div>
    <el-dialog :visible="dialogVisible" width="50%" :before-close="cancelModle">
      <span>測試複數dialog</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelModle">取消</el-button>
        <el-button type="primary" @click="cancelModle">確定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "loginDialog",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("modal", {
      getDialogStatus: "getDialogStatus"
    }),
    dialogVisible() {
      return this.getDialogStatus;
    }
  },
  methods: {
    ...mapActions({
      setDialogStatus: "modal/setDialogStatus"
    }),
    cancelModle() {
      this.setDialogStatus({ status: false, type: 0 });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
