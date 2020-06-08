/* eslint-disable prettier/prettier */
<template>
  <div>
    <div v-if="dialogType === 1">
      <alert-dialog></alert-dialog>
    </div>
    <div v-if="dialogType === 2">
      <otp-dialog></otp-dialog>
    </div>
    <div v-if="dialogType === 3">
      <login-dialog></login-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import otpDialog from "./dialog/OtpDialog";
import loginDialog from "./dialog/LoginDialog";
import alertDialog from "./dialog/AlertDialog";
export default {
  name: "otp",
  components: { otpDialog, loginDialog, alertDialog },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("modal", {
      getDialogStatus: "getDialogStatus",
      getDialogType: "getDialogType",
      getDialogMsg: "getDialogMsg"
    }),
    dialogType() {
      return this.getDialogType;
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
