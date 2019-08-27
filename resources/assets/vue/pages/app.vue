<template>
  <div class="vue-container">
    <!--    <preloader></preloader>-->

    <router-view></router-view>
  </div>
</template>

<script>
  // import Preloader from "../component/preloader";
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "app",
    // components: {
    //   Preloader
    // },
    data() {
      return {
        bodyClass: 'active-preloader',
        lines: [],
      }
    },
    watch: {
      loading() {
        if (!this.loading) {
          this.showMenu();
          document.body.classList.remove(this.bodyClass);
        } else {
          document.body.classList.add(this.bodyClass);
        }
      },
    },
    mounted() {
      let elements = document.querySelectorAll('.footer [data-show]');

      elements.forEach(item => {
        let show = item.dataset.show;

        if (typeof this[show] === 'function') {
          this.onShow(item, this[show]);
        }
      });

      let scrollLink = document.querySelector('.footer .scroll-up');
      scrollLink.addEventListener('click', this.scrollUp);

      let li = document.querySelectorAll('.float-header ul li');
      this.setLines(li);
      this.lines = li;

      window.addEventListener('scroll', e => this.watchScroll(e));
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      }
    },
    methods: {
      scrollUp() {
        TweenMax.to(window, 2, {
          scrollTo: {
            y: 0,
            // offsetY: 32,
            autoKill: false
          },
          ease: Power2.easeOut
        });
      },
      drawHLine(line) {
        let size = '100%';

        TweenMax.to(line, 1.5, {
            width: size,
            ease: Power2.easeOut
          } );
      },
      triggerVLine() {
        let footer = document.querySelector('footer.footer'),
          footerH = footer.offsetHeight;

        this.drawVLine(footerH);
      },
      showMenu() {
        this.lines.forEach(item => {
          this.showTextAnimation(item);
        });
      }
    },
  }
</script>

<style lang="scss">
</style>
