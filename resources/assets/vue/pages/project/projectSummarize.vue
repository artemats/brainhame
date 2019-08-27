<template>
  <section class="section single-project-summarize">
    <div class="section-inner">

      <div class="row reverse">
        <div class="col-xl-4 block-down">
          <div class="text-wrapper">
            <div class="block-subtitle" v-viewport.once="showTextAnimation">{{ summarize.title }}</div>
            <div v-html="summarize.description" v-viewport.once="showTextAnimation"></div>
          </div>
        </div>
        <div class="col-xl-8 section-line">
          <div class="image-wrapper overflow-hidden">
            <img :src="summarize.image" alt="" v-viewport.once="showImageAnimation" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "projectSummarize",
    computed: {
      summarize() {
        return this.$store.state.viewData.summarize;
      }
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
