<template>
  <div class="page">
    <SideBar></SideBar>
    <AppMain></AppMain>
  </div>
</template>

<script>
import SideBar from "./component/SideBar";
import AppMain from "./component/AppMain";

export default {
  name: "layout",
  components: {
    SideBar,
    AppMain
  },
  data() {
    return {};
  },
  created() {
    setTimeout(() => {
      this.$router.push("/login");
    }, 100);
  },
  methods: {}
};
</script>

<style lang="scss"></style>
