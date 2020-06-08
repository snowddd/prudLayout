<template>
  <div class="login-warpper">
    <div
      style="margin-top:3rem;font-size:24px;color:blue;margin-left:10%;margin-right:10%"
    >
      為保護資訊安全，系統將對你的瀏覽器進行驗證
    </div>
    <otp route="index"></otp>
  </div>
</template>
<script>
import otp from "../components/Otp";
export default {
  name: "index",
  components: { otp }
};
</script>
<style lang="scss" scoped>
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
      background: transparent
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAA5CAMAAACLZqDTAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAkGCgQPHQIFAvsIDBcOAP+/cIWymaGWnoOALs5EcFZNQTc8ioJbeGPLOVi3dVTdzNMgw1FaPYu3tFwYm4AAAHXklEQVRo3szV2XKiQACF4QMCLiACsgkKKsZ9iVsm5/1fbLRbjRpnzMVUjf+FlqXV/VUviJv8+sBIScbFtNnDa7bpd6kPlahZUefBu+NMlni9srnuljoZzvXygu8aXqx111FC3Da2WNrglVLddx/H6kFd6+Fcrnff8DrNGWRyq/WpWTKUC9T/SKt4lSKOIBuxAiTR6tODbGekr7KemqNA1tAluBe08+zkXHVf43w22lYCURSTnOPYtvioQOS7AV6hQC+fvC5p9035Kcnj1bTSAFDnGP+/N2cOWcRDnzjXU1I61uc2Myz8/4J0A5nBYwt85UeDmOmKLVzaNM4l+EFZVVvk8waelITyIuQd3NRo9meDwgc8fQTZmiJ3/7moejfUdoBLgfjTT42u6/5aPJf2fjkky3iSZshbQvZxXRjoJKvAkj5kJV5lD5VICy+/vpmZpAJ4n+Rwg6eZP2GagjkmaeG2pmQqbYjeCn5Pt1r4nmQCBTnA0yo/YX4IZuiSM9ymSaZVg2jPR8x4Ff2ZaZIM/wkzpyFNwdx7zIxNuZMuHd5Vbb1B9pipkuz8C2bHFUzZY6ZTx7E+rfv1tDGl1XzCXGqHfFQDpVyuVCpaA63jmzzv21GgLL6Y2nRSM9+OLFVtVsIsr1mBj2yxd0hbVf1W5VAVh1qKZVgz/4pJVR4ORulqyOummJCDQbD9E3NOsjpwydLWJgvNIKkhn5AUJ2lGWiPDODF3vzhrrG3HBNQSSVVcBnftmaZBxqbZymunkUeGWtUsOuoVsy/NbpNBn9ctMaC7dZgu672HzCE5BD7J0rtKduEJJmBLZkS+J/BsyfQM2mIHxIQWac96a53cy2eMIRdLjNyiMUpQJnXv7mwOOAlYUXiV60HhqE+aB23+nZn0yVUoJjYM1Etj4MQ0BHOTUuzUSDL7ZADgTU5eI+NM+LrXTEOM3CTpy9EuzGIAYOcEvdRp1HjVEBi2NwbdUCfVO2a3NFgxVXoQTPkUuWPmcjI0JdMm64BcccGcyGeF/Z0ZtlkkYrTmhTm1Acz1TYcFDF4VAUt/TSoayfUd06rXo3EGnJjNG+a7YA5INi43vUxyXj3kkLlglv7IRBYC4ZKkemEu6CNZzRDQLLu8qowWoLDY7ck4eXQ2cWFqN0xLMA2SCYClGKtDcmXJFs+YCE3jo3TD3LgjdJwwiTkueNUE8w+Ecc3rkAzwd2b1AXNF0juvpnit49QzZt91VOCGiVLs1fbQWBvxKz3H0qm32umuYYvJnzPvN70gubswxyTNvzM7oWTK23bP9Kk4W0yKjsNul7JfZVT1VZhSRUCywM+YjmS2BXN6OtKRYDa+LtpEe8y0xpKZ6OQC8G6ZKNFC3fbbLG2d81JiZ3Nx/KLDQ9oPmbq4TCEFUzttc3BkCpiFY9t29pjZrUpmj4LZumPu4so69mt6E7XzUiKzaI3p+mLL9/jGnOJSRHIMkUFOkP1uzs6W1AQCKAwfdgVFFqOiqIwZcHdc4nLe/8XSTYdIppJUJReU34Wt7YW/0NVVtoYlh/Ku+z04I5I5kFvkVH5apqvle31mbuXghGdk5AbjCVnMorVFDlXmBVIyHq4cLcdZk3QIK01rz7UYppjY9lAz1Zck/bmOUrK3SRaHpCr20/uGtB595CmZFhOd5PvwjCRluIy90RZobQPS8kyZGXiHcuFmE+Mgp1PvpFMMk0eHvO2mLsn1AlLb+IvtDHVD7QeUPE3xIOnr4/0RXXQhB755neO7aJF6wHl3t+Vr+VVLF7TlYIqJq3sdzkw13Ufyxd0kaIm9OT61Sig9+EfW65x6APOAv3d7lTMPJbnxd66vdhgbeRY/s6d4PW+PD9bJ37cvaXx6uB8BSeto6AO8tqj3olfxn/3tb45veQ81zrScdNA8h9bKqGygRPYO0jsL1Gy5BBaBP0DjPLo6KxaUJZeaK6QcudIZ0mxEE+hltHto2MynqXPTK1WZq+AWdSwhZGhJKitm5ghJyk7uCGc0JuYROjWUqDLzUXBB5AgePTkMUMqosU5HU8YZ558zo5TDSN/zyYa0Z3jS6i5oypxsQefELqlMfN1B4zvdbpp2XXpdlRn58u2BUxmgMW8jmRlbAgPx4EMa4MCPmF3IowU6UJkeZabNio/GbCgzpTZd/HSywnaLhTcaeQU1r8xMgjJzoVU8NGYZFmzpksdjOa5k0YRXtD6tTYOazDRblQMac1lobLHOAHAUw3jQfsojYKZFv950C80Zi0xpQdKWT04AFkMaDus8SLLsoFdiNEhkApgdf9kHHRq9TUfIJkc5rM0qs999mqI5KtNgh500ODwzsVuvvqziCbVBUU3Tgs4nA01RmbMvtBO6ZhAsnpn3cMou3txg+mE5tUzDVLpNZ7a/cuTIDUkn7/3qpoeuKTKB/mxKt5bpQTEbzhyG9Ptq34xDhrnKnDNOVNLOuof5M7PoKpumr2ZcvEFlop3FUJk3q/ctCNeu2wnDU/8l1qakMjGu1mayB+aZL9iyvMrc+5qpDP0t/s93Y3p/7XVYkhgAAAAASUVORK5CYII=)
        top left no-repeat;
      margin: 1.5vh 0 0 4vw;
      background-size: contain;
    }
  }
}
</style>
