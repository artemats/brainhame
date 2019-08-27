<template>
  <section class="section clients">
    <div class="section-inner">
      <div class="row">
        <div class="col-xl-7">
          <div ref="svgText" v-viewport.once="showTextAnimation">
            <svg-text class="section-title" v-bind:title="clients.title"></svg-text>
          </div>
          <div class="section-subtitle" v-html="clients.title" v-viewport.once="showTextAnimation"></div>

          <div class="section-description" v-html="clients.description" v-viewport.once="showTextAnimation"></div>
        </div>
        <div class="col-xl-5">
          <div class="logos row">
            <div class="col-6 col-md-4 col-xl-6 d-flex align-items-center logos-item overflow-hidden"
                 v-for="(logo, index) in clients.logos">
              <img :src="logo" alt="" v-viewport.once="showTextAnimation" :data-delay="getDelay(index)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SvgText from "../../component/svg-text";

  export default {
    name: "clients",
    components: {SvgText},
    computed: {
      clients() {
        return this.$store.state.viewData.clients;
      }
    },
    methods: {
      drawTitle() {
        let element = this.$refs.svgText.querySelector('svg text');

        TweenMax.to(element, 1.55, {drawSVG: "150px, 1px", ease: Power2.easeIn});
      },
    },
  }
</script>

<style scoped>

</style>
