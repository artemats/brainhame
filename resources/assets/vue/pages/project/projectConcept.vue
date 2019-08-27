<template>
  <section class="section single-project-concept">
    <div class="image-wrapper top-image section-line overflow-hidden">
      <img :src="concept.images.top" alt="" v-viewport.once="showImageAnimation" />
    </div>

    <div class="section-inner">
      <div class="row">
        <div class="col-xs-5 col-md-4 col-4 left-image-wrapper">
          <div class="image-wrapper left-image overflow-hidden">
            <img :src="concept.images.left" alt="" v-viewport.once="showImageAnimation" />
          </div>
        </div>
        <div class="col-xs-7 col-md-8 col-8 block-down text-block">
          <div class="block-wrapper">
            <div class="block-subtitle" v-viewport.once="showTextAnimation">{{ concept.title }}</div>
            <div v-html="concept.description" v-viewport.once="showTextAnimation"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "projectConcept",
    computed: {
      concept() {
        return this.$store.state.viewData.concept;
      }
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
