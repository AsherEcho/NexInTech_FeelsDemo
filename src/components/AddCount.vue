<template>
  <div>
    <button @click="AddCount">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    AddCount() {
      this.$store.commit('add')
    },
  },
};
</script>

<style scoped></style>
