<template>
  <div class="custom-cursor-wrapper" v-show="showCursor">
    <div ref="cc1" class="custom-cursor cc-1">
      <svg class="svg-inline--fa fa-long-arrow-alt-right fa-w-14" aria-hidden="true" data-prefix="fal"
           data-icon="long-arrow-alt-right" role="img"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""
           style="visibility: hidden; opacity: 0;">
        <path fill="currentColor"
              d="M288 160.649V239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h276v78.348c0 29.388 34.591 43.268 54.627 23.231l96-95.952c12.496-12.497 12.497-32.757 0-45.255l-96-95.955C322.65 117.44 288 131.15 288 160.649zM416 256l-96 96V160l96 96z"></path>
      </svg>
    </div>

    <div ref="cc2" class="custom-cursor cc-2"></div>
  </div>
</template>

<script>
  import {TweenMax, Power1, Power2, Power4, Elastic} from 'gsap';

  export default {
    name: "customCursor",
    watch: {
      loading(val) {
        // if (!val) {
        this.addEvents();

        // }
      },
    },
    data() {
      return {
        selector: 'a, button, input, img, canvas, [class^="bg-img"], .active-cursor, .back-to-top, .slider-cursor',
        specialClass: 'slider-cursor',
        showCursor: false,
      }
    },
    mounted() {
      console.log(this.$refs);

      window.addEventListener('mousemove', e => this.mouseMove(e));
      this.addEvents();
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      },
    },
    methods: {
      addEvents() {
        if (!document.body.classList.contains('logged-in')) {
          let elements = document.querySelectorAll(selector);

          elements.forEach(element => {
            element.addEventListener('mouseover', e => this.mouseOver(e));
            element.addEventListener('mouseleave', e => this.mouseLeave(e));
          });
        }
      },
      mouseMove(e) {
        // w.show();
        let padding = (document.body.classList.contains('logged-in')) ? 35 : 0;

        this.showCursor = true;

        console.log(e.pageY);

        TweenMax.set(this.$refs.cc1, {
          x: e.pageX,
          y: e.pageY - padding,
        });

        TweenMax.to(this.$refs.cc2, 1, {
          x: e.pageX,
          y: e.pageY - padding,
          ease: Power4.easeOut
        })
      },
      mouseOver(e) {
        let special = e.target.classList.contains(this.specialClass),
          color = special ? "#000" : "transparent",
          radius = special ? 35 : 25,
          alpha = special ? 1 : 0;


        if (special) {
          TweenMax.set(this.$refs.cc2, {autoAlpha: 0});
        }

        TweenMax.to(this.$refs.cc1, 1, {
          width: radius,
          height: radius,
          backgroundColor: color,
          ease: Elastic.easeOut
        });

        TweenMax.to(this.$refs.cc1.querySelector("svg"), .4, {
          autoAlpha: alpha,
          ease: Power2.easeOut,
          delay: 0
        });

        TweenMax.to(this.$refs.cc2, 1, {
          width: 25,
          height: 25,
          backgroundColor: "transparent",
          ease: Elastic.easeOut
        });
      },
      mouseLeave(e) {
        let color1 = this.$refs.cc1.style.backgroundColor,
          color2 = this.$refs.cc2.style.backgroundColor;

        if (e.target.classList.contains(this.specialClass)) {
          TweenMax.set(this.$refs.cc2, {autoAlpha: 1});
        }

        TweenMax.set(this.$refs.cc1.querySelector("svg"), {autoAlpha: 0});

        TweenMax.to(this.$refs.cc1, .6, {
          width: 10,
          height: 10,
          backgroundColor: color1,
          ease: Power1.easeOut
        });

        TweenMax.to(this.$refs.cc2, .6, {
          width: 10,
          height: 10,
          backgroundColor:
          color2, ease:
          Power1.easeOut
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
  body {
    /*&:not(.logged-in) {*/
    /*  &, a, * {*/
    /*    &, &:hover {*/
    /*      cursor: none !important;*/
    /*    }*/
    /*  }*/
    /*}*/

    .custom-cursor {
      backface-visibility: hidden;
      perspective: 1000px;
      transform-style: preserve-3d;
      will-change: transform;

      background-color: #333;
      border: 2px solid #333;
      border-radius: 50%;
      cursor: none;
      /*display: none;*/
      height: 10px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 10px;
      z-index: 1000000000;

      &.cc-1 {
        color: #fff;
        font-size: 12px;
        z-index: 10000000001;

        svg {
          left: 50%;
          opacity: 0;
          position: absolute;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }

      &.cc-2 {
        background-color: #d4d4d4;
        border-color: #d4d4d4;
      }
    }

    &.isMobile {
      .custom-cursor {
        display: none !important
      }
    }
  }
</style>
