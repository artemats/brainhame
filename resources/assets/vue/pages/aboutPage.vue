<template>
  <div class="vue-container">
    <hero :scrollTo="scrollTo"></hero>
    <about-first :id="scrollTo"></about-first>
    <about-second></about-second>
    <about-third></about-third>
    <about-portfolio></about-portfolio>
    <clients></clients>
    <about-team></about-team>
    <contact></contact>
  </div>
</template>

<script>
  import Hero from "./home/hero";
  import AboutFirst from "./about/aboutFirst";
  import AboutSecond from "./about/aboutSecond";
  import AboutThird from "./about/aboutThird";
  import Clients from "./about/clients";
  import AboutTeam from "./about/aboutTeam";
  import Contact from "./home/contact";
  import AboutPortfolio from "./about/aboutPortfolio";
  export default {
    name: "aboutPage",
    data() {
      return {
        scrollTo: 'first',
      }
    },
    components: {AboutPortfolio, Contact, AboutTeam, Clients, AboutThird, AboutSecond, AboutFirst, Hero}
  }
</script>

<style lang="scss" scoped>

</style>
