/* eslint-disable prettier/prettier */
<template>
  <div v-if="dialogVisible">
    <el-dialog
      :visible="dialogVisible"
      width="100%"
      :before-close="cancelModle"
      :close-on-click-modal="false"
    >
      <el-main class="login-box">
        <div class="flex-pos login-pos">
          <el-row>
            <div>
              根據您留存在保德信人壽的手機號碼或E-Mail，請選擇OTP驗證碼寄送方式，並於收到驗證碼後輸入至下方欄位，如果您的手機號碼或E-mail已經更換，請聯絡本公司客服專線0800-015000，謝謝
            </div>
            <el-col :span="24" style="margin-top:2rem;">
              <el-row style="text-align:left;">
                <el-radio v-model="radio" label="1"
                  >發送簡訊到0900***000</el-radio
                >
              </el-row>
              <el-row
                style="text-align:left;margin-top:1rem;margin-bottom:1rem;"
              >
                <el-radio v-model="radio" label="2"
                  >EMAIL至S********@PRUDENTIAL.COM</el-radio
                >
              </el-row>
              <div class="flex-box">
                <div class="flex-pos">
                  <el-row class="btn-box">
                    <div v-if="!otpSend">
                      <el-col :span="12" class="top-btn">
                        <el-button class="btn-blue" @click="cancelModle">
                          取消
                        </el-button>
                      </el-col>
                      <el-col :span="12" class="top-btn">
                        <el-button class="btn-blue" @click="getOTP">
                          取得OTP驗證碼
                        </el-button>
                      </el-col>
                    </div>
                    <div v-if="otpSend">
                      <el-col :span="12" class="top-btn">
                        <el-button class="btn-blue" @click="cancelModle"
                          >取消
                        </el-button>
                      </el-col>
                      <el-col :span="12" class="top-btn">
                        <el-button class="btn-blue" disabled
                          >重新取得 {{ otpReturnTime }}</el-button
                        >
                      </el-col>
                    </div>
                  </el-row>
                </div>
              </div>
              <div v-if="otpInformation" style="margin-top:2rem;">
                <span style="color:red;"
                  >請以今日傳送給您最新的OTP驗證碼登入下方欄位，如欲重新更新，請再次點選「重新取得OTP驗證碼」</span
                >
                <el-input
                  v-model="otpNumber"
                  prefix-icon="el-icon-s-check"
                  placeholder="輸入OTP驗證碼"
                  style="margin-top:1rem;"
                ></el-input>
                <el-col :span="12" class="top-btn" style="margin-top:1rem;">
                  <el-button class="btn-blue" @click="cancelModle"
                    >取消</el-button
                  >
                </el-col>
                <el-col :span="12" class="top-btn" style="margin-top:1rem;">
                  <el-button class="btn-blue" @click="otpCheck">
                    送出
                  </el-button>
                </el-col>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-dialog width="50%" :visible.sync="innerVisible" append-to-body>
        {{ checkMsg }}
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "otpDialog",
  data() {
    return {
      radio: "",
      otpSend: false,
      otpReturnTime: 60,
      canClick: true,
      otpInformation: false,
      innerVisible: false,
      checkMsg: "",
      otpNumber: ""
    };
  },
  computed: {
    ...mapGetters("modal", {
      getDialogStatus: "getDialogStatus",
      getDialogSumbitRoute: "getDialogSumbitRoute"
    }),
    dialogVisible() {
      return this.getDialogStatus;
    }
  },
  methods: {
    ...mapActions({
      setDialogStatus: "modal/setDialogStatus",
      setDialogInitialization: "modal/setDialogInitialization",
      setLoginStatus: "login/setLoginStatus"
    }),
    getOTP() {
      if (this.radio) {
        this.otpSend = true;
        this.otpInformation = true;
        if (!this.canClick) return;
        this.canClick = false;
        let clock = window.setInterval(() => {
          this.otpReturnTime--;
          if (this.otpReturnTime < 0) {
            window.clearInterval(clock);
            this.otpReturnTime = 60;
            this.canClick = true;
            this.otpSend = false;
          }
        }, 1000);
      } else {
        this.dialogAlert("請選擇一種發送OTP的方式");
      }
    },
    dialogAlert(msg) {
      this.innerVisible = true;
      this.checkMsg = msg;
    },
    otpCheck() {
      if (
        this.getDialogSumbitRoute === "ForgetAccount2" ||
        this.getDialogSumbitRoute === "signUp3"
      ) {
        this.$router.push(this.getDialogSumbitRoute);
        //仿造clientId cookies
        this.$cookie.set("client", "canRunTag", "90d");
        this.cancelModle();
      } else {
        this.setLoginStatus(true).then(() => {
          this.$router.push(this.getDialogSumbitRoute);
          //仿造clientId cookies
          this.$cookie.set("client", "canRunTag", "90d");
          this.cancelModle();
        });
      }

      // this.$router.push(this.getDialogSumbitRoute);
      // //仿造clientId cookies
      // this.$cookie.set("client", "canRunTag", "90d");
      // this.cancelModle();
    },
    cancelModle() {
      this.setDialogInitialization();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-input__icon {
  font-size: 32px;
}
.login-warpper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-header,
  .el-footer {
    padding: 0 !important;
    height: auto !important;
  }
  .header {
    background: #0059bb;
    height: 14vh !important;
    .sm-top {
      height: 3vh;
      background-color: #004ca0;
    }
    .logo-prudential {
      width: 165px;
      height: 57px;
      margin: 1.5vh 0 0 4vw;
    }
  }
}
.login-box {
  box-sizing: border-box;
  // width: 100vw;
  width: 100%;
  height: calc(100% - 15vh);
  padding: 0 28vw;
  .login-form {
    padding: 0 20vw;
  }
  .login-pos {
    position: relative;
    height: 100%;
    // padding: 0 15vw;
    .login-mask {
      position: absolute;
      width: calc(100% - 5vw);
      height: calc(100% - 10vh);
      background-color: #fff;
      opacity: 0.23;
      // padding: 0 5vw;
    }
    .login-title {
      color: #0059bb;
      font-size: 28px;
      margin-bottom: 3rem;
    }
    .el-input {
      &.captcha-input {
        height: auto;
      }
    }
  }
}
.captcha-box {
  width: 100%;
  height: auto;
  .img-area {
    width: 30%;
    height: 4vh;
    line-height: 4vh;
    background: #000;
    margin: 0 0 2vh 2vw;
    margin-top: 0.5vh;
  }
  .reform {
    width: 15%;
    height: auto;
    margin-top: 5px;
    i {
      font-size: 24px;
      text-align: center;
    }
  }
  .captcha-img {
    width: auto;
    height: auto;
    margin-left: 1vw;
  }
}
.btn-box {
  margin-top: 2vw;
  width: 100%;
  .top-btn {
    margin-bottom: 1vw;
  }
  .el-button {
    width: 100%;
  }
}
//iphone
@media (min-width: 1200px) {
  .login-mask {
    width: calc(100% - 50vw) !important;
    height: calc(100% - 30vh) !important;
  }
}
@media only screen and (min-width: 576px) and (max-width: 1024px) {
  .header {
    height: 11vh !important;
  }
  .login-box {
    padding: 0 10vw !important;
    .login-mask {
      width: calc(100% - 20vw) !important;
      height: calc(100% - 30vh) !important;
    }
  }
}
@media only screen and (max-width: 414px) {
  .login-warpper {
    background: none !important;
  }
  .header {
    height: 11vh !important;
  }
}
//iphone6
@media only screen and (max-width: 375px) {
  .header {
    height: 11vh !important;
    .logo-prudential {
      width: 140px !important;
      height: 48px !important;
    }
  }
  .login-title {
    margin-bottom: 6vw !important;
  }
}
//iphone5
@media only screen and (max-width: 320px) {
  .header {
    height: 11vh !important;
    .logo-prudential {
      width: 93px !important;
      height: 32px !important;
    }
  }
}
</style>
