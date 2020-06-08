<template>
  <div class="transTable">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PodTable",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transTable {
  width: 100%;
  display: table;
  text-align: center;
  border: 0.5px solid;
  border-color: gainsboro;
}
</style>
