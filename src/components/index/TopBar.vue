<template>
  <div class="main-topbar">
    <div class="flex-box topbar-box-big">
      <div class="flex-pos right mg-r1">
        {{ userName }} 保戶, 您好
        <el-button class="top-btn btn-blue" @click="handleLogout"
          >登出</el-button
        >
      </div>
    </div>
    <div class="flex-box topbar-box-sm">
      <div class="flex-pos between">
        <div>
          <el-button class="top-btn btn-blue no-brd" @click="handleLogout"
            >登出</el-button
          >
        </div>
        <div>
          <div class="logo-img"></div>
        </div>
        <div class="icon-box" @click="handleMenu">
          <i class="el-icon-s-unfold"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "TopBar",
  data() {
    return {
      userName: "黃明明",
      openMenu: false
    };
  },
  methods: {
    ...mapActions({
      setLoginStatus: "login/setLoginStatus"
    }),
    handleLogout() {
      this.setLoginStatus(false).then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        this.$router.push("/login");
      });
      // localStorage.removeItem("token");
      // localStorage.removeItem("userName");
      // this.$router.push("/login");
    },
    handleMenu() {
      this.openMenu = !this.openMenu;
      this.$bus.emit("isShowNav", this.openMenu);
    }
  }
};
</script>
<style lang="scss" scoped>
.main-topbar {
  //大尺寸
  .topbar-box-big {
    width: 100%;
    height: auto;
    padding: 0.4vw;
    font-size: 14px;
    box-shadow: 0 2px 4px 0 rgba(210, 210, 210, 0.5);
    .mg-b1 {
      // margin-bottom: 1vw;
    }
    .mg-r1 {
      margin-right: 1vw;
    }
    .top-btn {
      margin: 0 1vw;
    }
  }
  //小尺寸
  .topbar-box-sm {
    width: 100%;
    height: auto;
    padding: 2.5vw;
    background: #0059bb;
    position: fixed;
    top: 0;
    left: 0;
    // border-bottom: solid 1px #ecf5ff;
    .logo-img {
      width: 96px;
      height: 33px;
      background: transparent
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAA5CAMAAACLZqDTAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAkGCgQPHQIFAvsIDBcOAP+/cIWymaGWnoOALs5EcFZNQTc8ioJbeGPLOVi3dVTdzNMgw1FaPYu3tFwYm4AAAHXklEQVRo3szV2XKiQACF4QMCLiACsgkKKsZ9iVsm5/1fbLRbjRpnzMVUjf+FlqXV/VUviJv8+sBIScbFtNnDa7bpd6kPlahZUefBu+NMlni9srnuljoZzvXygu8aXqx111FC3Da2WNrglVLddx/H6kFd6+Fcrnff8DrNGWRyq/WpWTKUC9T/SKt4lSKOIBuxAiTR6tODbGekr7KemqNA1tAluBe08+zkXHVf43w22lYCURSTnOPYtvioQOS7AV6hQC+fvC5p9035Kcnj1bTSAFDnGP+/N2cOWcRDnzjXU1I61uc2Myz8/4J0A5nBYwt85UeDmOmKLVzaNM4l+EFZVVvk8waelITyIuQd3NRo9meDwgc8fQTZmiJ3/7moejfUdoBLgfjTT42u6/5aPJf2fjkky3iSZshbQvZxXRjoJKvAkj5kJV5lD5VICy+/vpmZpAJ4n+Rwg6eZP2GagjkmaeG2pmQqbYjeCn5Pt1r4nmQCBTnA0yo/YX4IZuiSM9ymSaZVg2jPR8x4Ff2ZaZIM/wkzpyFNwdx7zIxNuZMuHd5Vbb1B9pipkuz8C2bHFUzZY6ZTx7E+rfv1tDGl1XzCXGqHfFQDpVyuVCpaA63jmzzv21GgLL6Y2nRSM9+OLFVtVsIsr1mBj2yxd0hbVf1W5VAVh1qKZVgz/4pJVR4ORulqyOummJCDQbD9E3NOsjpwydLWJgvNIKkhn5AUJ2lGWiPDODF3vzhrrG3HBNQSSVVcBnftmaZBxqbZymunkUeGWtUsOuoVsy/NbpNBn9ctMaC7dZgu672HzCE5BD7J0rtKduEJJmBLZkS+J/BsyfQM2mIHxIQWac96a53cy2eMIRdLjNyiMUpQJnXv7mwOOAlYUXiV60HhqE+aB23+nZn0yVUoJjYM1Etj4MQ0BHOTUuzUSDL7ZADgTU5eI+NM+LrXTEOM3CTpy9EuzGIAYOcEvdRp1HjVEBi2NwbdUCfVO2a3NFgxVXoQTPkUuWPmcjI0JdMm64BcccGcyGeF/Z0ZtlkkYrTmhTm1Acz1TYcFDF4VAUt/TSoayfUd06rXo3EGnJjNG+a7YA5INi43vUxyXj3kkLlglv7IRBYC4ZKkemEu6CNZzRDQLLu8qowWoLDY7ck4eXQ2cWFqN0xLMA2SCYClGKtDcmXJFs+YCE3jo3TD3LgjdJwwiTkueNUE8w+Ecc3rkAzwd2b1AXNF0juvpnit49QzZt91VOCGiVLs1fbQWBvxKz3H0qm32umuYYvJnzPvN70gubswxyTNvzM7oWTK23bP9Kk4W0yKjsNul7JfZVT1VZhSRUCywM+YjmS2BXN6OtKRYDa+LtpEe8y0xpKZ6OQC8G6ZKNFC3fbbLG2d81JiZ3Nx/KLDQ9oPmbq4TCEFUzttc3BkCpiFY9t29pjZrUpmj4LZumPu4so69mt6E7XzUiKzaI3p+mLL9/jGnOJSRHIMkUFOkP1uzs6W1AQCKAwfdgVFFqOiqIwZcHdc4nLe/8XSTYdIppJUJReU34Wt7YW/0NVVtoYlh/Ku+z04I5I5kFvkVH5apqvle31mbuXghGdk5AbjCVnMorVFDlXmBVIyHq4cLcdZk3QIK01rz7UYppjY9lAz1Zck/bmOUrK3SRaHpCr20/uGtB595CmZFhOd5PvwjCRluIy90RZobQPS8kyZGXiHcuFmE+Mgp1PvpFMMk0eHvO2mLsn1AlLb+IvtDHVD7QeUPE3xIOnr4/0RXXQhB755neO7aJF6wHl3t+Vr+VVLF7TlYIqJq3sdzkw13Ufyxd0kaIm9OT61Sig9+EfW65x6APOAv3d7lTMPJbnxd66vdhgbeRY/s6d4PW+PD9bJ37cvaXx6uB8BSeto6AO8tqj3olfxn/3tb45veQ81zrScdNA8h9bKqGygRPYO0jsL1Gy5BBaBP0DjPLo6KxaUJZeaK6QcudIZ0mxEE+hltHto2MynqXPTK1WZq+AWdSwhZGhJKitm5ghJyk7uCGc0JuYROjWUqDLzUXBB5AgePTkMUMqosU5HU8YZ558zo5TDSN/zyYa0Z3jS6i5oypxsQefELqlMfN1B4zvdbpp2XXpdlRn58u2BUxmgMW8jmRlbAgPx4EMa4MCPmF3IowU6UJkeZabNio/GbCgzpTZd/HSywnaLhTcaeQU1r8xMgjJzoVU8NGYZFmzpksdjOa5k0YRXtD6tTYOazDRblQMac1lobLHOAHAUw3jQfsojYKZFv950C80Zi0xpQdKWT04AFkMaDus8SLLsoFdiNEhkApgdf9kHHRq9TUfIJkc5rM0qs999mqI5KtNgh500ODwzsVuvvqziCbVBUU3Tgs4nA01RmbMvtBO6ZhAsnpn3cMou3txg+mE5tUzDVLpNZ7a/cuTIDUkn7/3qpoeuKTKB/mxKt5bpQTEbzhyG9Ptq34xDhrnKnDNOVNLOuof5M7PoKpumr2ZcvEFlop3FUJk3q/ctCNeu2wnDU/8l1qakMjGu1mayB+aZL9iyvMrc+5qpDP0t/s93Y3p/7XVYkhgAAAAASUVORK5CYII=)
        top left no-repeat;
      background-size: contain;
    }
    .top-btn {
      padding: 0;
      margin-left: 7px;
    }
    .icon-box {
      font-size: 22px;
      color: #fff;
    }
    .no-brd {
      border: none;
    }
  }
}

@media (max-width: 575.98px) {
  .main-topbar {
    min-width: 375px !important;
    height: 13.3vw !important;
    .topbar-box-big {
      display: none;
    }
  }
}
@media (min-width: 576px) {
  .topbar-box-sm {
    display: none;
  }
}
</style>
