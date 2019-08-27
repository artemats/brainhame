<template>
  <section class="section single-project-gallery">
    <div class="section-inner">

      <div class="gallery-row first">
        <div v-for="image in gallery.first" class="image-wrapper image-item overflow-hidden">
          <img :src="image" alt="" v-viewport.once="showImageAnimation" />
        </div>
      </div>

      <div class="gallery-row second row">
        <template v-for="(image, index) in gallery.second">
          <div class="col-6 col-xl-4 image-item" :class="getSubclass(index)">
            <div class="image-wrapper overflow-hidden">
              <img :src="image" alt="" v-viewport.once="showImageAnimation" />
            </div>
          </div>
        </template>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "projectGallery",
    computed: {
      gallery() {
        return this.$store.state.viewData.gallery;
      }
    },
    methods: {
      getSubclass(index) {
        if (!index || index === 3) {
          return 'col-md-7';
        } else {
          return 'col-md-5';
        }
      },
    },
  }
</script>

<style scoped>

</style>
