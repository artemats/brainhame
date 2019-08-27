<template>
  <section class="section single-project-hero">
    <div class="h-line top-line" ref="line"></div>

    <div class="section-inner">
      <div class="row section-line section-top-line">
        <div class="col-xl-6">
          <div class="project-type opacity" v-multi-ref:text>{{ project_types }}</div>

          <div class="project-titles">
            <div class="hero-subtitle section-title opacity" v-multi-ref:text data-delay="0.1" v-html="title"></div>
            <div class="hero-title section-title opacity" v-multi-ref:text data-delay="0.3"
                 data-convert="stroke" v-html="title"></div>

            <div class="hero-title section-title opacity" v-multi-ref:text data-delay="0.5">
              <svg-text v-bind:title="title"></svg-text>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="project-slogan opacity" v-multi-ref:text>{{ hero.slogan }}</div>
        </div>
      </div>

      <div class="project-thumbnail section-line">
        <div class="image-wrapper overflow-hidden">
          <img :src="post_thumbnail" :alt="title" class="opacity" ref="image" />
        </div>
      </div>

      <div class="row project-main-info">
        <div class="col-md-6">
          <div class="block-subtitle" v-viewport.once="showTextAnimation">{{ hero.summary.title }}</div>
          <div v-html="hero.summary.description" v-viewport.once="showTextAnimation"></div>
        </div>
        <div class="col-md-6">
          <div class="block-subtitle" v-viewport.once="showTextAnimation">{{ hero.roles.title }}</div>

          <ul class="two-column-list row">
            <li v-for="role in hero.roles.items" class="col-6">
              <span v-viewport.once="showTextAnimation">{{ role.item }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  import SvgText from "../../component/svg-text";
  import {TweenMax, Power2} from 'gsap';
  
  export default {
    name: "projectHero",
    components: {SvgText},
    watch: {
      loading() {
        if (!this.loading) {
          this.drawHLine();
          this.triggerVLine();

          this.showBlock();
          // this.drawTitle();
        }
      },
    },
    data() {
      return {
        vLine: false,
      }
    },
    mounted() {

    },
    computed: {
      loading() {
        return this.$store.state.loading;
      },
      title() {
        return this.$store.state.viewData.title;
      },
      project_types() {
        return this.$store.state.viewData.project_types;
      },
      post_thumbnail() {
        return this.$store.state.viewData.post_thumbnail;
      },
      hero() {
        return this.$store.state.viewData.hero;
      },
    },
    methods: {
      drawTitle() {
        let element = this.$refs.svgText.querySelector('svg text');

        TweenMax.to(element, 1.55, {drawSVG: "150px, 1px", ease: Power2.easeIn});
      },
      showBlock() {
        this.showImageAnimation(this.$refs.image);

        this.$refs.text.forEach(item => {
          this.showTextAnimation(item);
        });
      },
      drawHLine() {
        let line = this.$refs.line;
        let windowWidth = document.documentElement.clientWidth;
        let size = windowWidth > 1200 ? '80%' : '100%';

        TweenMax.to(line, 1.5,
          {
            width: size,
            ease: Power2.easeOut
          }
        );
      },
      triggerVLine() {
        // let header = document.querySelector('header.header'),
        //   headerH = header.offsetHeight,
        //   height = this.$el.offsetHeight;
        //
        // let line = document.querySelector('.v-line'),
        //   lHeight = line.offsetHeight;
        //
        // let distance = (headerH + height) - lHeight;
        let distance = window.innerHeight;

        this.drawVLine(distance);
      },
    },
  }
</script>

<style scoped>

</style>
