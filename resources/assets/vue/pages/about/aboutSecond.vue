<template>
  <section class="section second_block">
    <div class="section-inner">
      <div class="block-wrapper">
        <div class="image-wrapper overflow-hidden">
          <img :src="second.image" alt="" v-viewport.once="showImageAnimation" />
        </div>
        <div class="block-description section-description">
          <div class="row">
            <div class="col-7">
              <div v-html="second.description" v-viewport.once="showTextAnimation"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: "aboutSecond",
    computed: {
      second() {
        return this.$store.state.viewData.second_block;
      }
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
