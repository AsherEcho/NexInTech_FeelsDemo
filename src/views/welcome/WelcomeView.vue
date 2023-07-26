<template>
  <div class="welcome">
    <div>
      <svg-icon iconClass="健身" className="svglogo" />
    </div>

    <div class="botFont">
      <p class="subtitle">from</p>
      <p class="title">NexInTech</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    setTimeout() {
      setTimeout(() => {
        this.$router.push("/home");
      }, 3000);
    },
  },
  created() {
    this.setTimeout()
  },
};
</script>

<style scoped>
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svglogo {
  position: relative;
  width: 200px;
  height: 200px;
  top: 100px;
}

.botFont {
  position: absolute;
  width: 300px;
  height: 200px;
  bottom: 0;
}

.subtitle {
  color: gray;
  font-size: 20px;
}

.title {
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(#12c2e9, #c471ed, #f64f59);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
