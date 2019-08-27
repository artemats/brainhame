<template>
  <div class="vue-home-container">
    <hero :scrollTo="scrollTo"></hero>
    <portfolio :id="scrollTo"></portfolio>
    <about></about>
    <team></team>
    <block-services></block-services>
    <contact></contact>
    <block-blog></block-blog>
  </div>
</template>

<script>
  import Hero from "./home/hero";
  import Portfolio from "./home/portfolio";
  import Team from "./home/team";
  import Contact from "./home/contact";
  import About from "./home/about";
  import BlockServices from "./home/block-services";
  import BlockBlog from "./home/block-blog";

  export default {
    name: "home",
    data() {
      return {
        scrollTo: 'portfolio',
      }
    },
    components: {BlockBlog, BlockServices, About, Contact, Team, Portfolio, Hero}
  }
</script>

<style lang="scss" scoped>
  /*.vue-container {*/
  /*  display: flex;*/
  /*}*/
  /*.vue-home-container {*/
  /*  height: 1000px;*/
  /*}*/
</style>
