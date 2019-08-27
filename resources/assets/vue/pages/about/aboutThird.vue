<template>
  <section class="section third_block">
    <div class="section-inner">
      <div class="block-description inner-block section-description">
        <div v-html="third.description" v-viewport.once="showTextAnimation"></div>
      </div>

      <div class="inner-block image-block overflow-hidden" v-for="item in third.gallery">
        <img :src="item" alt="" v-viewport.once="showImageAnimation" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "aboutThird",
    computed: {
      third() {
        return this.$store.state.viewData.third_block;
      }
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
