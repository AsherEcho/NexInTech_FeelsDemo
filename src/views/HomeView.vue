<template>
  <div class="home">
    <div class="container">
      <div class="leftBox"></div>
      <div class="midBox">
        <div class="nexLogo">Logo</div>
        <div class="changeRouter">
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <div class="rightBox">
        <div>1</div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AddCount from "@/components/AddCount.vue";
import ReduceCount from "@/components/ReduceCount.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    myAddition: AddCount,
    mySubtraction: ReduceCount,
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAsync"]),
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNums"]),
  },
  created() {},
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  width:90vw;
  height: 95vh;
  background: black;
  position: relative;
  top: 2.5vh;
}

.leftBox {
  width: 35vw;
  background: red;
}

.midBox {
  width: 12vw;
  background: yellow;
}

.rightBox {
  width: 100vw;
  background: green;
}

.nexLogo {
  height: 10vh;
  background: orange;
}

.changeRouter {
  height: 85vh;
  background: black;
}
</style>
