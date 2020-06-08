<template>
  <div id="app">
    <el-container>
      <!--左側欄-->
      <el-aside
        v-if="islogin"
        :class="{ showWidth: isShowNav, showTop: isShowNav }"
      >
        <LeftNav />
      </el-aside>
      <el-main class="main-box">
        <el-header>
          <!--上方bar-->
          <TopBar v-if="islogin"></TopBar>
        </el-header>
        <Breadcrumb v-if="islogin" class="breadcrumb-box" />
        <!--內容顯示-->
        <router-view />
        <!--遮罩-->
        <!-- <div
          class="mask-box"
          :class="{ showMask: isMaskshow }"
          @click="handleMask"
        ></div> -->
      </el-main>
      <open-dialog />
    </el-container>
  </div>
</template>
<script>
import LeftNav from "./components/index/LeftNav";
import TopBar from "./components/index/TopBar";
import Breadcrumb from "./components/index/Breadcrumb";
import OpenDialog from "./components/OpenDialog";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    LeftNav,
    TopBar,
    Breadcrumb,
    OpenDialog
  },
  data() {
    return {
      // islogin: false,
      isShowNav: false,
      isMaskshow: false
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.setLoginStatus(true);
    } else {
      this.setLoginStatus(false);
    }
    this.$bus.on("isShowNav", val => {
      this.isShowNav = val;
    });
  },
  mounted() {
    // console.log(this.$route.path != "/Login");
  },
  computed: {
    ...mapGetters("login", {
      getLoignStatus: "getLoignStatus"
    }),
    islogin() {
      return this.getLoignStatus;
    }
  },
  methods: {
    ...mapActions({
      setLoginStatus: "login/setLoginStatus"
    }),
    handleMask() {
      this.$bus.emit("isMaskshow", this.isTxtShow);
    }
  }
};
</script>
<style lang="scss">
@import "./scss/index.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkestBlack;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .el-container {
    height: 100%;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main-box {
  overflow: hidden;
}
.back-phone {
  display: none !important;
  position: fixed;
  left: 10px;
  top: 10px;
  height: 10vw;
  color: #fff;
  text-align: center;
  z-index: 99999;
  &.show {
    display: none !important;
  }
}
.mask-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
}
.breadcrumb-box {
  margin: 1.5vw;
}
@media (max-width: 576px) {
  .back-phone {
    &.show {
      display: block !important;
    }
  }
}
</style>
