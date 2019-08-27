<template>
  <section class="section popular">
    <div class="section-inner">
      <div class="section-title" v-viewport.once="showTextAnimation">{{ popular.title }}</div>

      <div class="popular-items row">
        <div class="popular-item col-md-6 col-xl-4" v-for="item in popular.items">
          <div class="image-wrapper overflow-hidden">
            <a :href="item.link">
              <img :src="item.image" :alt="item.title" v-viewport.once="showImageAnimation" />
            </a>
          </div>

          <div class="item-info" v-viewport.once="showTextAnimation">
            <div class="item-date">{{ item.date }}</div>
            <div class="item-title">
              <a :href="item.link"><span v-html="item.title"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "blogPopular",
    computed: {
      popular() {
        return this.$store.state.viewData.popular;
      }
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
