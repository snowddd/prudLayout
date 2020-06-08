<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(d, i) in dataCurrent"
        :key="i"
        >{{
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import dataM from "@/utilities/menu";
export default {
  name: "Breadcrumb",
  data() {
    return {
      dataM: dataM
    };
  },
  mounted() {
    console.log(dataM);
    this.handleMenuCurrent();
  },
  computed: {
    dataCurrent() {
      return "test";
    }
  },
  methods: {
    handleMenuCurrent() {
      // for (let Key in this.dataM) {
      //   console.log(this.dataM[Key].url);
      //   if (this.dataM[Key].url === this.$route.name) {
      //     console.log(this.dataM[Key]);
      //   }
      // }
      // Object.keys(this.dataM);
    }
  }
};
</script>
<style lang="scss"></style>
