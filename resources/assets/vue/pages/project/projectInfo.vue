<template>
  <section class="section single-project-info">
    <div class="image-wrapper section-line parallax-image">
      <div v-if="info.image" class="bg-section luxy-el" data-speed-y="-10"
           :style="{ backgroundImage: `url('${info.image}')` }"></div>
    </div>

    <div class="section-inner">
      <div class="row">
        <div v-if="info.columns" v-for="column in info.columns" class="col-xl-4">
          <div class="block-subtitle" v-viewport.once="showTextAnimation">{{ column.title }}</div>
          <div v-if="column.description" v-html="column.description" v-viewport.once="showTextAnimation"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "projectInfo",
    computed: {
      info() {
        return this.$store.state.viewData.info;
      },
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
