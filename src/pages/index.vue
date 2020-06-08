<template>
  <div class="flex-box txt-area">
    <div class="flex-pos">
      <div class="word-area">
        您已經成功進入 E-change ，請依左方功能表選取您要的功能
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  userName: "",
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      this.$router.push("/login");
    }
  },
  beforeMount() {
    this.$router.push(0);
    this.userName = localStorage.getItem("userName");
  }
};
</script>
<style lang="scss">
.txt-area {
  color: #0f60af;
  font-size: 22px;
  width: 100%;
  height: calc(100% - 8vw);
  .flex-pos {
    height: 100%;
  }
}
//iphone5
@media only screen and (max-width: 414px) {
  .txt-area {
    height: calc(100% - 14vw);
    .flex-pos {
      .word-area {
        width: 80%;
        font-size: 14px;
      }
    }
  }
}
</style>
