<template>
  <div class="transTr">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PodTr",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transTr {
  display: table-row;
}
</style>
