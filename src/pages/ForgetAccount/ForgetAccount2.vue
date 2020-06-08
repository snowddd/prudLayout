<template>
  <div class="login-warpper">
    <top />
    <el-main class="login-box">
      <div class="flex-pos login-pos">
        <div class="login-mask"></div>
        <el-row>
          <el-col :span="24">
            <div class="login-title">忘記使用者名稱/忘記密碼</div>
          </el-col>
          <el-col :span="24">
            <el-form
              class="login-form"
              :model="loginRule"
              :rules="rules"
              ref="loginRule"
            >
              <el-form-item prop="user_name">
                <el-input
                  v-model="loginRule.user_name"
                  prefix-icon="el-icon-postcard"
                  placeholder="設定使用者名稱"
                  :maxlength="10"
                ></el-input>
              </el-form-item>
              <el-form-item prop="user_password">
                <el-input
                  v-model="loginRule.user_password"
                  prefix-icon="el-icon-lock"
                  show-password
                  placeholder="設定新密碼"
                  :maxlength="12"
                ></el-input>
              </el-form-item>
              <el-form-item prop="check_password">
                <el-input
                  placeholder="再次確認新密碼"
                  prefix-icon="el-icon-lock"
                  show-password
                  v-model="loginRule.check_password"
                  :maxlength="12"
                ></el-input>
              </el-form-item>
              <el-collapse v-model="activeNames" style="text-align:left;">
                <el-collapse-item title="注意事項" name="1">
                  <div style="color:#E5C49C;">
                    1.請務必輸入所有欄位
                  </div>
                  <div>
                    2.使用者名稱、密碼 二者不可相同。
                  </div>
                  <div>
                    3.為確保您的保單資訊獲得安全控管，設定
                    使用者名稱、密碼時，請以不易猜測為原則。如:生日、姓名、電話號碼，皆不建議使用。
                  </div>
                  <div>
                    4.進行密碼變更時，請於「再次確認新密碼」欄位輸入與「設定新密碼」相同之內容。
                  </div>
                </el-collapse-item>
              </el-collapse>
              <div class="flex-box">
                <div class="flex-pos">
                  <el-row class="btn-box">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                      <div class="flex-row" style="margin-bottom: 3rem;">
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
import { mapActions } from "vuex";
export default {
  name: "signup3",
  components: { top, bottom },
  data() {
    const check_password = (rule, value, callback) => {
      if (!value) {
        // return callback(new Error("驗證碼不能為空"));
      }
      setTimeout(() => {
        if (value != this.loginRule.user_password) {
          callback(new Error("兩次密碼輸入不同"));
        } else {
          callback();
          // }
        }
      }, 1000);
    };
    const checkName_password = (rule, value, callback) => {
      if (!value) {
        // return callback(new Error("驗證碼不能為空"));
      }
      setTimeout(() => {
        if (value === this.loginRule.user_name) {
          callback(new Error("使用者名稱跟密碼相同"));
        } else {
          callback();
          // }
        }
      }, 1000);
    };
    return {
      activeNames: ["1"],
      identifyCode: "1324",
      //隨機碼素材
      identifyCodes: "0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ",
      rules: {
        user_name: [
          { required: true, message: "請設定使用者名稱", trigger: "blur" }
        ],
        user_password: [
          { required: true, message: "請設定新密碼", trigger: "blur" },
          { validator: checkName_password, trigger: "blur" }
        ],
        check_password: [
          { required: true, message: "再次確認新密碼", trigger: "blur" },
          { validator: check_password, trigger: "blur" }
        ]
      },
      loginRule: {
        user_name: "",
        user_password: "",
        check_password: ""
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
          this.setDialogStatus({
            status: true,
            type: 1,
            alertRouteWay: "/login",
            msg: "你已成功變更使用者名稱/密碼！"
          });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    backLogin() {
      this.$router.push("/login");
    }
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
      margin-bottom: 2vh;
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
  .login-title {
    margin-top: 9rem !important;
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
    margin-top: 9rem !important;
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
  .login-title {
    margin-top: 10rem !important;
  }
}
</style>
