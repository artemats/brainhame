<template>
  <section class="section hero">
    <div class="h-line" ref="line"></div>

    <div class="hero-image overflow-hidden">
      <img :src="hero.image" alt="" class="opacity" ref="image" />
    </div>

    <div class="section-inner">
      <div class="hero-title section-title opacity" ref="svgText" v-multi-ref:text>
          <svg-text v-bind:title="hero.title"></svg-text>
      </div>

      <div class="hero-subtitle section-subtitle opacity"
           v-multi-ref:text data-delay="0.3" v-html="hero.subtitle"></div>

      <div class="hero-portfolio-link d-none d-xl-block">
        <a :href="portfolio.button.page" class="only_hover">portfolio +</a>
      </div>
    </div>

    <div class="section-bottom">
      <div class="scroll-down" ref="scroll">
        <a href="#" class="only_hover" v-scroll-to="'#'+scrollTo">Scroll down</a>
      </div>
    </div>

    <div class="circle invisible" ref="circle"></div>
  </section>
</template>

<script>
  import SvgText from "../../component/svg-text";
  import 'svg.js';
  import '../../libs/DrawSVGPlugin.min';
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "hero",
    components: {SvgText},
    props: ['scrollTo'],
    data() {
      return {
        lines: [],
      }
    },
    mounted() {
      setTimeout(() => {
        let height = this.$el.offsetHeight,
          size = height - 100;

        if (window.innerWidth < 767) {
          size = height;
        }

        let draw = SVG(this.$refs.circle).size(size, size);

        let rect = draw.circle(size - 4).move(2, 2);

        rect.attr({
          fill: 'none',
          stroke: '#000000',
          'stroke-width': '2px',
        });
      }, 300);

      window.addEventListener('scroll', e => this.hideOnScroll(e));
    },
    watch: {
      loading() {
        if (!this.loading) {
          this.animateCircle();
          this.drawHLine();
          this.triggerVLine();
          // this.animateText();
          this.showBlock();
          // this.drawTitle();
        }
      },
    },
    computed: {
      hero() {
        return this.$store.state.viewData.hero;
      },
      loading() {
        return this.$store.state.loading;
      },
      portfolio() {
        return this.$store.state.viewData.portfolio;
      },
    },
    methods: {
      drawTitle() {
        let element = this.$refs.svgText.querySelector('svg text');

        TweenMax.to(element, 1.55, {drawSVG: "150px, 1px", ease: Power2.easeIn});
      },
      animateCircle() {
        let circle = this.$refs.circle.querySelector('circle');

        this.$refs.circle.classList.remove('invisible');

        TweenMax.set(circle, {
          drawSVG: '0%',
          transformOrigin: "50% 50%"
        });

        // TweenMax.to(circle, 1.25, {drawSVG:'100% 0', ease:Power2.easeIn});
        TweenMax.to(circle, 1.55, {drawSVG: '100% 0', ease: Power2.easeIn});
      },
      animateText() {
        let text = this.$el.querySelector('text');

        TweenMax.set(text, {
          strokeDashoffset: '100%',
        });

        TweenMax.to(text, 3, {strokeDashoffset: 0, ease: Linear.easeNone});
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
        let header = document.querySelector('header.header'),
          headerH = header.offsetHeight,
          height = this.$el.offsetHeight;

        this.drawVLine(headerH + height);
      },
      showBlock() {
        let elements = this.$el.querySelectorAll('[data-animation]');

        elements.forEach((item)=> {
          let animation = item.dataset.animation;

          item.classList.remove('hidden');
          item.classList.add('animated', animation);
        });

        this.showImageAnimation(this.$refs.image);

        this.$refs.text.forEach(item => {
          this.showTextAnimation(item);
        });
      },
      hideOnScroll(e) {
        let scrollY = window.scrollY;

        let op = (scrollY > 100) ? 1 / scrollY : 1;

        TweenMax.to(this.$refs.scroll, 0.5, {opacity: op});
      },
    }
  }
</script>

<style lang="scss" scoped>
  .circle {
    position: absolute;
    top: 0;
    right: 20%;

    .invisible {
      display: none;
    }

    svg {
      /*fill: 0;*/
      stroke-width: 2px;
    }
  }
</style>
