<template>
  <div>
    <div class="vue-preloader" ref="layer_1">
      <div class="vue-preloader-image">
<!--        <logo-svg></logo-svg>-->
        <canvas-logo v-bind:props="logoSettings"></canvas-logo>
      </div>

      <vue-typed-js class="vue-preloader-text"
                    @onComplete="onEnd"
                    :strings="strings">
        <span class="typing"></span>
      </vue-typed-js>
    </div>
    <div class="vue-preloader-2" ref="layer_2"></div>
  </div>
</template>

<script>
  import TweenLite from 'gsap/TweenLite';
  import {Power4} from 'gsap';
  import 'gsap/CSSPlugin';

  import logoSvg from '../../icons/logo.svg';
  import CanvasLogo from "./canvas-logo";

  export default {
    name: "preloader",
    components: {
      CanvasLogo,
      logoSvg
    },
    data() {
      return {
        strings: ['Beautiful designs'],
        original: '',
        logoSettings: {
          width: 150,
          height: 110,
          mWidth: 100,
          mHeight: 70,
          color: '#000000'
        }
      }
    },
    created() {
      document.querySelector('.fake-preloader').remove();

      let links = document.querySelectorAll('a');

      links.forEach(link => {
        let href = link.getAttribute('href'),
          target = link.getAttribute('target');

        if (href && href.startsWith('http') && target !== '_blank') {
          link.addEventListener('click', e => this.onExit(e));
        }
      });

      console.log('created');

    },
    methods: {
      onEnd() {
        let t1 = TweenLite.to(this.$refs.layer_1, 1, {
          height: 0,
          paused:true,
          // onComplete:this.disable,
          ease: Power4.easeInOut,
        });
        let t2 = TweenLite.to(this.$refs.layer_2, 1, {
          height: 0,
          paused: true,
          delay: 0.1,
          onComplete:this.disable,
          ease: Power4.easeInOut,
        });
        console.log('Loading end');

        // setTimeout(()=>{
          t1.play();
          t2.play();
        // }, 1000);
      },
      disable() {
        document.body.classList.remove('active-preloader');
        this.$store.commit('setter', {loading: false,});
      },
      onExit(e) {
        let element = e.target;
        if ( element.tagName === 'A' ) {
          e.preventDefault();
          this.original = element.getAttribute('href');

          document.body.classList.add('active-preloader');
          // this.$store.commit('setter', {loading: true,});

          // let t = TweenLite.to(this.$el, 0.5, {
          //   height: '100vh', paused:true, onComplete: () => {
          //     window.location.href = this.original;
          //   }
          // });
          let t1 = TweenLite.to(this.$refs.layer_1, 1, {
            height: '100vh',
            paused:true,
            delay: 0.1,
            onComplete: () => {
              window.location.href = this.original;
            },
            ease: Power4.easeInOut,
          });
          let t2 = TweenLite.to(this.$refs.layer_2, 1, {
            height: '100vh',
            paused: true,
            ease: Power4.easeInOut,
          });

          t1.play();
          t2.play();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>


</style>
