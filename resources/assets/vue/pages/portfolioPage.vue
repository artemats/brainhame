<template>
  <div class="vue-container">
    <portfolio-hero></portfolio-hero>
    <contact v-bind:enableLine="true"></contact>
  </div>
</template>

<script>
  import PortfolioHero from "./portfolio/portfolioHero";
  import Contact from "./home/contact";

  export default {
    name: "portfolioPage",
    components: {Contact, PortfolioHero}
  }
</script>

<style scoped>

</style>
