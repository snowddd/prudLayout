<template>
  <div class="login-warpper">
    <top />
    <el-main class="login-box">
      <div class="flex-pos login-pos">
        <div class="login-mask"></div>
        <el-row>
          <el-col :span="24">
            <div class="login-title">申請加入會員</div>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="22" style="margin-left:2vh;text-align:left">
            <div style="color:#1058A6;text-decoration:underline;">
              保德信人壽新快速服務約定條款
            </div>
            <div style="color:red;margin-top:1rem;">
              (本條約條款僅要保人 申請加入會員適用)
            </div>
            <div style="margin-top:1rem;margin-left:0.3rem;">
              壹、「保險單借款利率」、「借款利息計算方式」及「撥款方式」將於「保險單借款約定事項」中另行約定接露。
            </div>
            <div style="margin-top:1rem;">
              說明：
            </div>
            <div style="margin-top:1rem;">
              一、借款人申請借款之金額，以借款當時保險契約之保單價值準備金或保單帳戶價值範圍內為限。
            </div>
            <div style="margin-top:1rem;">
              二、因各保險商品特性不同，若借款人本次申請借款之金額高於保險公司撥款當時所核定的最高可借額度時，保險公司將以撥款當時所核定的最高可借額度作為本次申請借款之金額上限。
            </div>
            <div style="margin-top:1rem;">
              三、借款人以自動櫃員機辦理環款，所須自行負擔之費用以跨行轉帳手續費為限。
            </div>
            <div style="margin-top:1rem;">
              四、依金融監督管理委員會99年8月9日金管銀票第09900272710號函規定，信用卡發卡機構不得同意持卡人以信用卡作為繳付保險單借款本息之工具，故借款不得以信用卡繳付保險單借款本金及利息(以下簡稱借款本息)。
            </div>
            <div style="margin-top:1rem;margin-left:0.3rem;">
              貳、依據民法第207條規定，借款利息遲付逾一年後，經催告而不償還時，保險公司得將其利息併入借款本金中以複利計算。
            </div>
            <el-row style="margin-top:2vh;">
              <el-col :span="24" style="text-align:center;">
                <el-button class="btn-blue" @click="checkArticle"
                  >本人已閱讀完畢並同意此聲明事項</el-button
                >
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :span="24"
                style="margin-bottom:3rem;margin-top:2vh;text-align:center"
              >
                <el-button class="btn-white" @click="backLogin">取消</el-button>
              </el-col>
            </el-row>
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
export default {
  name: "signup1",
  components: { top, bottom },
  methods: {
    backLogin() {
      this.$router.push("/login");
    },
    checkArticle() {
      this.$router.push("/signUp2");
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
  .login-title {
    margin-bottom: 6vw !important;
    margin-top: 16rem !important;
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
    margin-top: 16rem !important;
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
    margin-top: 20rem !important;
  }
}
</style>
