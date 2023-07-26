<template>
  <div>
    <button @click="ReduceCount">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    ReduceCount() {
      this.$store.commit("reduce");
    },
  },
};
</script>

<style scoped></style>
