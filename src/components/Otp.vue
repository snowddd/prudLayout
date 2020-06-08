/* eslint-disable prettier/prettier */
<template>
  <el-main class="login-box">
    <div class="flex-pos login-pos">
      <el-row>
        <el-col :span="24">
          <div class="login-title">請選擇您要透過何種方式取得OTP驗證</div>
        </el-col>
        <el-col :span="24">
          <el-form
            class="login-form"
            label-width="80px"
            :model="loginRule"
            ref="loginRule"
          >
            <el-form-item style="text-align:left">
              <el-radio v-model="radio" label="1"
                >發送簡訊到0900***000</el-radio
              >
            </el-form-item>
            <el-form-item style="text-align:left">
              <el-radio v-model="radio" label="2"
                >EMAIL至S********@PRUDENTIAL.COM</el-radio
              >
            </el-form-item>
            <div class="flex-box">
              <div class="flex-pos">
                <el-row class="btn-box">
                  <div v-if="!otpSend">
                    <el-col :span="12" class="top-btn">
                      <el-button class="btn-blue" @click="cancel">
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
                      <el-button class="btn-blue" @click="cancel"
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
            <div v-if="otpInformation">
              <span style="color:red;"
                >請以今日傳送給您最新的OTP驗證碼登入下方欄位，如欲重新更新，請再次點選「重新取得OTP驗證碼」</span
              >
              <el-form-item style="margin-top:2rem;">
                <el-input
                  v-model="otpNumber"
                  prefix-icon="el-icon-s-check"
                  placeholder="輸入OTP驗證碼"
                ></el-input>
              </el-form-item>
              <el-col :span="12" class="top-btn">
                <el-button class="btn-blue" @click="cancel">取消</el-button>
              </el-col>
              <el-col :span="12" class="top-btn">
                <el-button class="btn-blue" @click="otpCheck">
                  送出
                </el-button>
              </el-col>
            </div>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "otp",
  props: {
    msg: String,
    route: String
  },
  data() {
    return {
      radio: "",
      otpSend: false,
      otpReturnTime: 60,
      canClick: true,
      otpInformation: false,
      otpNumber: "",
      loginRule: {
        id_number: "",
        user_name: "",
        user_password: "",
        captcha: ""
      }
    };
  },
  methods: {
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
        alert("請選擇一種發送OTP的方式");
      }
    },
    cancel() {
      this.$router.back();
    },
    otpCheck() {
      this.$router.push(this.route);
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
  }
}
.login-box {
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 40vh);
  padding: 0 28vw;
  .login-pos {
    height: 100%;
    .login-title {
      color: #0059bb;
      font-size: 19px;
      margin-bottom: 2vw;
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
//iphone
@media only screen and (min-width: 414px) {
  .header {
    height: 11vh !important;
  }
  .login-box {
    padding: 0 30vw;
  }
}
@media only screen and (max-width: 414px) {
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
