<template>
  <el-row>
    <el-col :span="24" :gutter="0">
      <div
        class="menu-box bk-color1 nav-big"
        :class="{ stretch: isTxtShow, shownav: isShowNav }"
        @click="handleShowtxt()"
      >
        <div class="logo-area flex-box">
          <div class="flex-pos">
            <router-link to="/index" class="logo-img"> </router-link>
            <div class="icon-area iconshow" @click="handleMenu()">
              <i class="el-icon-s-unfold"></i>
            </div>
          </div>
        </div>
        <el-menu
          background-color="#0059bb"
          text-color="#fff"
          active-text-color="#ffd04b"
          v-for="(d, i) in dataM"
          :key="i"
          :collapse="isCollapse"
          :select="handleCurrent(i)"
        >
          <el-submenu :index="`${d.id}`">
            <template slot="title">
              <i class="el-icon-setting" :class="{ active: isCollapse }"></i>
              <span class="showtxt">{{ d.title }}</span>
            </template>
            <el-menu-item
              :index="`${d2.id}`"
              v-for="(d2, i2) in d.child"
              :key="i2"
              :class="{ ckecklink: activeLink }"
            >
              <router-link :to="`${d2.url}`">{{ d2.title }}</router-link>
              <!-- <ul>
                <li v-for="(d3, i3) in d2.child" :key="i3">{{ d3.title }}</li>
              </ul> -->
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import dataM from "@/utilities/menu";
export default {
  name: "LeftNav",
  data() {
    return {
      dataM: dataM,
      activeLink: false,
      isCollapse: true,
      fullWidth: 0,
      isTxtShow: false,
      isShowNav: false //小尺寸show
    };
  },
  created() {
    this.$bus.on("isShowNav", val => {
      this.isShowNav = val;
    });
    this.$bus.on("isTxtShow", val => {
      this.isTxtShow = val;
    });
  },
  mounted() {
    this.handleScreen();
  },
  methods: {
    handleScreen() {
      //偵測螢幕寬度
      this.fullWidth = window.innerWidth;
      window.onresize = () => {
        this.fullWidth = window.innerWidth;
      };
      if (this.fullWidth > 1200 || this.fullWidth < 576) {
        this.isCollapse = false;
      } else {
        this.isCollapse = true;
      }
    },
    handleShowtxt() {
      //判斷平板秀出文字
      if (this.isCollapse) {
        this.isTxtShow = true;
      }
      // this.$bus.emit("isTxtShow", this.openMenu);
    },
    handleMenu() {
      //判斷手機顯示menu
      this.isShowNav = !this.isShowNav;
      this.$bus.emit("isShowNav", this.openMenu);
    },
    handleCurrent(name) {
      console.log(name);
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-box {
  position: relative;
  z-index: 2;
  min-width: 16vw;
  max-width: 100%;
  height: 100vh;
  overflow-x: hidden;
  .logo-area {
    position: relative;
    width: 100%;
    height: 6vw;
    text-align: center;
    line-height: 6vw;
    .logo-img {
      width: 130px;
      height: 44px;
      background: transparent
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAA5CAMAAACLZqDTAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAkGCgQPHQIFAvsIDBcOAP+/cIWymaGWnoOALs5EcFZNQTc8ioJbeGPLOVi3dVTdzNMgw1FaPYu3tFwYm4AAAHXklEQVRo3szV2XKiQACF4QMCLiACsgkKKsZ9iVsm5/1fbLRbjRpnzMVUjf+FlqXV/VUviJv8+sBIScbFtNnDa7bpd6kPlahZUefBu+NMlni9srnuljoZzvXygu8aXqx111FC3Da2WNrglVLddx/H6kFd6+Fcrnff8DrNGWRyq/WpWTKUC9T/SKt4lSKOIBuxAiTR6tODbGekr7KemqNA1tAluBe08+zkXHVf43w22lYCURSTnOPYtvioQOS7AV6hQC+fvC5p9035Kcnj1bTSAFDnGP+/N2cOWcRDnzjXU1I61uc2Myz8/4J0A5nBYwt85UeDmOmKLVzaNM4l+EFZVVvk8waelITyIuQd3NRo9meDwgc8fQTZmiJ3/7moejfUdoBLgfjTT42u6/5aPJf2fjkky3iSZshbQvZxXRjoJKvAkj5kJV5lD5VICy+/vpmZpAJ4n+Rwg6eZP2GagjkmaeG2pmQqbYjeCn5Pt1r4nmQCBTnA0yo/YX4IZuiSM9ymSaZVg2jPR8x4Ff2ZaZIM/wkzpyFNwdx7zIxNuZMuHd5Vbb1B9pipkuz8C2bHFUzZY6ZTx7E+rfv1tDGl1XzCXGqHfFQDpVyuVCpaA63jmzzv21GgLL6Y2nRSM9+OLFVtVsIsr1mBj2yxd0hbVf1W5VAVh1qKZVgz/4pJVR4ORulqyOummJCDQbD9E3NOsjpwydLWJgvNIKkhn5AUJ2lGWiPDODF3vzhrrG3HBNQSSVVcBnftmaZBxqbZymunkUeGWtUsOuoVsy/NbpNBn9ctMaC7dZgu672HzCE5BD7J0rtKduEJJmBLZkS+J/BsyfQM2mIHxIQWac96a53cy2eMIRdLjNyiMUpQJnXv7mwOOAlYUXiV60HhqE+aB23+nZn0yVUoJjYM1Etj4MQ0BHOTUuzUSDL7ZADgTU5eI+NM+LrXTEOM3CTpy9EuzGIAYOcEvdRp1HjVEBi2NwbdUCfVO2a3NFgxVXoQTPkUuWPmcjI0JdMm64BcccGcyGeF/Z0ZtlkkYrTmhTm1Acz1TYcFDF4VAUt/TSoayfUd06rXo3EGnJjNG+a7YA5INi43vUxyXj3kkLlglv7IRBYC4ZKkemEu6CNZzRDQLLu8qowWoLDY7ck4eXQ2cWFqN0xLMA2SCYClGKtDcmXJFs+YCE3jo3TD3LgjdJwwiTkueNUE8w+Ecc3rkAzwd2b1AXNF0juvpnit49QzZt91VOCGiVLs1fbQWBvxKz3H0qm32umuYYvJnzPvN70gubswxyTNvzM7oWTK23bP9Kk4W0yKjsNul7JfZVT1VZhSRUCywM+YjmS2BXN6OtKRYDa+LtpEe8y0xpKZ6OQC8G6ZKNFC3fbbLG2d81JiZ3Nx/KLDQ9oPmbq4TCEFUzttc3BkCpiFY9t29pjZrUpmj4LZumPu4so69mt6E7XzUiKzaI3p+mLL9/jGnOJSRHIMkUFOkP1uzs6W1AQCKAwfdgVFFqOiqIwZcHdc4nLe/8XSTYdIppJUJReU34Wt7YW/0NVVtoYlh/Ku+z04I5I5kFvkVH5apqvle31mbuXghGdk5AbjCVnMorVFDlXmBVIyHq4cLcdZk3QIK01rz7UYppjY9lAz1Zck/bmOUrK3SRaHpCr20/uGtB595CmZFhOd5PvwjCRluIy90RZobQPS8kyZGXiHcuFmE+Mgp1PvpFMMk0eHvO2mLsn1AlLb+IvtDHVD7QeUPE3xIOnr4/0RXXQhB755neO7aJF6wHl3t+Vr+VVLF7TlYIqJq3sdzkw13Ufyxd0kaIm9OT61Sig9+EfW65x6APOAv3d7lTMPJbnxd66vdhgbeRY/s6d4PW+PD9bJ37cvaXx6uB8BSeto6AO8tqj3olfxn/3tb45veQ81zrScdNA8h9bKqGygRPYO0jsL1Gy5BBaBP0DjPLo6KxaUJZeaK6QcudIZ0mxEE+hltHto2MynqXPTK1WZq+AWdSwhZGhJKitm5ghJyk7uCGc0JuYROjWUqDLzUXBB5AgePTkMUMqosU5HU8YZ558zo5TDSN/zyYa0Z3jS6i5oypxsQefELqlMfN1B4zvdbpp2XXpdlRn58u2BUxmgMW8jmRlbAgPx4EMa4MCPmF3IowU6UJkeZabNio/GbCgzpTZd/HSywnaLhTcaeQU1r8xMgjJzoVU8NGYZFmzpksdjOa5k0YRXtD6tTYOazDRblQMac1lobLHOAHAUw3jQfsojYKZFv950C80Zi0xpQdKWT04AFkMaDus8SLLsoFdiNEhkApgdf9kHHRq9TUfIJkc5rM0qs999mqI5KtNgh500ODwzsVuvvqziCbVBUU3Tgs4nA01RmbMvtBO6ZhAsnpn3cMou3txg+mE5tUzDVLpNZ7a/cuTIDUkn7/3qpoeuKTKB/mxKt5bpQTEbzhyG9Ptq34xDhrnKnDNOVNLOuof5M7PoKpumr2ZcvEFlop3FUJk3q/ctCNeu2wnDU/8l1qakMjGu1mayB+aZL9iyvMrc+5qpDP0t/s93Y3p/7XVYkhgAAAAASUVORK5CYII=)
        top left no-repeat;
      background-size: contain;
    }
    .flex-pos {
      width: 100%;
      height: 6vw;
    }
    // &.noshow {
    //   display: none;
    // }
  }
  ul {
    width: 100%;
    height: auto;
    li {
      width: 100%;
      text-align: left;
      a {
        color: #a9e0ff !important;
      }
      i {
        color: #fff;
        &:before {
          font-size: 20px;
        }
      }
      background-color: #0b3c8a !important;
    }
  }
  .icon-area {
    position: absolute;
    right: 4vw;
    color: #fff;
    font-size: 22px;
    .iconshow {
      display: none;
    }
  }
}

//平板尺寸
@media (min-width: 576px) and (max-width: 1200px) {
  .menu-box {
    min-width: auto !important;
    max-width: 8vw;
    &.stretch {
      max-width: 24vw;
      span.showtxt {
        visibility: inherit !important;
        display: inline;
        margin-left: 0.5vw;
      }
    }
    .icon-area {
      display: none;
    }
    .flex-pos {
      // height: 10vw !important;
    }
  }
}
@media (min-width: 1199.98px) {
  .icon-area {
    display: none;
  }
}
//手機尺寸
@media (max-width: 576px) {
  .menu-box {
    width: 100%;
    .logo-area {
      height: 16vw;
      .flex-pos {
        height: 16vw;
      }
    }
  }
  .nav-big {
    display: none;
  }
  .shownav {
    display: block;
  }
  .logo-area {
    border-bottom: 1px solid #fff;
  }
  .iconshow {
    display: block;
  }
}
</style>
