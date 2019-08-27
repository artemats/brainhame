<template>
  <section class="section first_block">
    <div class="section-inner">
      <div class="row">
        <div class="col-xl-5 d-none d-xl-block first-column">
          <div class="image-wrapper">
            <div class="image-slide overflow-hidden" :class="{activate: view}">
              <img :src="first.image" alt="" v-viewport.once="showImageAnimation" />
            </div>
          </div>
        </div>
        <div class="col-xl-7 second-column">
          <div class="row">
            <div class="col-5">
              <div class="section-title" v-viewport.once="showTextAnimation">{{ first.title  }}</div>
            </div>
            <div class="col-7 section-description">
              <div v-html="first.description" ref="description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "aboutFirst",
    data() {
      return {
        view: false,
      }
    },
    mounted() {
      let lines = this.$refs.description.querySelectorAll('p');
      this.setLines(lines);

      lines.forEach(line => {
        this.onShow(line, this.showTextAnimation);
      });
    },
    computed: {
      first() {
        return this.$store.state.viewData.first_block;
      }
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
