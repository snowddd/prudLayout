<template>
  <div class="login-warpper">
    <top />
    <el-main class="login-box">
      <div class="flex-pos login-pos">
        <div class="login-mask"></div>
        <el-row>
          <el-col :span="24">
            <div class="login-title">申請加入會員</div>
          </el-col>
          <el-col :span="24">
            <el-form
              class="login-form"
              :model="loginRule"
              :rules="rules"
              ref="loginRule"
            >
              <el-form-item prop="id_number">
                <el-input
                  v-model="loginRule.id_number"
                  prefix-icon="el-icon-postcard"
                  placeholder="身分證字號"
                  :maxlength="10"
                ></el-input>
              </el-form-item>
              <el-form-item prop="user_birth">
                <el-input
                  v-model="loginRule.user_birth"
                  prefix-icon="el-icon-user"
                  placeholder="出生年月日"
                  :maxlength="12"
                ></el-input>
              </el-form-item>
              <div class="captcha-box flex-row">
                <el-form-item prop="captcha">
                  <el-input
                    placeholder="驗證碼"
                    prefix-icon="el-icon-c-scale-to-original"
                    v-model="loginRule.captcha"
                    :maxlength="4"
                    class="captcha-input"
                  ></el-input>
                </el-form-item>
                <div class="captcha-img">
                  <captcha :identifyCode="identifyCode"></captcha>
                </div>
                <div class="reform" @click="refreshCode()">
                  <i class="el-icon-refresh-right"></i>
                </div>
              </div>
              <div class="flex-box">
                <div class="flex-pos">
                  <el-row class="btn-box">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                      <div class="flex-row">
                        <el-button class="btn-white" @click="backLogin"
                          >取消</el-button
                        >
                        <el-button
                          class="btn-blue"
                          @click="submitForm('loginRule')"
                          >送出</el-button
                        >
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <bottom />
  </div>
</template>
<script>
import top from "../../components/Top";
import bottom from "../../components/index/Bottom";
import Captcha from "../../components/Captcha";
import { mapActions } from "vuex";
export default {
  name: "signup2",
  components: { top, bottom, Captcha },
  data() {
    const checkCaptcha = (rule, value, callback) => {
      if (!value) {
        // return callback(new Error("驗證碼不能為空"));
      }
      setTimeout(() => {
        // if (value.length != 4) {
        //   callback(new Error("請輸入完整驗證碼"));
        // } else {
        if (value != this.identifyCode) {
          callback(new Error("驗證碼錯誤"));
        } else {
          callback();
          // }
        }
      }, 1000);
    };
    return {
      identifyCode: "1324",
      //隨機碼素材
      identifyCodes: "0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ",
      rules: {
        id_number: [
          { required: true, message: "請輸入身分證字號", trigger: "blur" }
        ],
        user_birth: [
          { required: true, message: "請輸入出生年月日", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "請輸入驗證碼", trigger: "blur" },
          { validator: checkCaptcha, trigger: "blur" }
        ]
      },
      loginRule: {
        id_number: "",
        user_birth: "",
        captcha: ""
      }
    };
  },
  methods: {
    ...mapActions({
      setToken: "login/setToken",
      setDialogStatus: "modal/setDialogStatus"
    }),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.setDialogStatus({ status: true, type: 2, routeWay: "signUp3" });
        } else {
          // console.log("error submit!!");
          this.refreshCode();
          return false;
        }
      });
    },
    backLogin() {
      this.$router.push("/login");
    },
    checkArticle() {
      this.$router.push("/signUp2");
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    randomNum(min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 隨機生成驗證碼字符串
    makeCode(data, len) {
      if (data) {
        for (let i = 0; i < len; i++) {
          this.identifyCode += data[this.randomNum(0, data.length - 1)];
        }
      }
    }
  },
  created() {
    this.refreshCode();
  }
};
</script>
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
    padding: 0 10vw;
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
