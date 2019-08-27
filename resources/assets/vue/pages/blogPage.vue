<template>
  <div class="vue-container">
    <blog-hero></blog-hero>
    <blog-popular></blog-popular>
    <blog-subscribe></blog-subscribe>
  </div>
</template>

<script>
  import BlogSubscribe from "./blog/blogSubscribe";
  import BlogPopular from "./blog/blogPopular";
  import BlogHero from "./blog/blogHero";

  export default {
    name: "blogPage",
    components: {BlogHero, BlogPopular, BlogSubscribe}
  }
</script>

<style scoped>

</style>
