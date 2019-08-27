<template>
  <div class="blog-page">
    <single-hero></single-hero>
    <single-content></single-content>
    <blog-popular></blog-popular>
    <blog-subscribe></blog-subscribe>
  </div>
</template>

<script>
  import SingleHero from "./single/singleHero";
  import SingleContent from "./single/singleContent";
  import BlogPopular from "./blog/blogPopular";
  import BlogSubscribe from "./blog/blogSubscribe";

  export default {
    name: "singlePost",
    components: {BlogSubscribe, BlogPopular, SingleContent, SingleHero}
  }
</script>

<style scoped>

</style>
