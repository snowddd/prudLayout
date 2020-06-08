<template>
  <div class="transTd">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PodTd",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transTd {
  display: table-cell;
  vertical-align: middle;
  border-right: 0.5px solid;
  border-top: 0.5px solid;
  border-color: gainsboro;
  padding: 10px;
}
</style>
