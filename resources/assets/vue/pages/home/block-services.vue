<template>
  <section class="section services">
    <div class="h-line" ref="line"></div>

    <div class="section-inner">
      <div class="row services-info">
        <div class="d-none d-md-flex col-md-5 col-xl-6 image-column">
          <div class="image-wrapper">
            <div class="un-photo" :style="{backgroundImage: `url(${services.image})` }" style="--row-total: 5;">
              <div class="un-photo__popup">
                <img :src="services.image" :alt="services.title" v-viewport.once="showImageAnimation" />
                <div class="un-photo__row" style="--row-index: 0; --random: 0.23">
                  <div class="un-photo__row-inner"></div>
                </div>
                <div class="un-photo__row" style="--row-index: 1; --random: 0.72">
                  <div class="un-photo__row-inner"></div>
                </div>
                <div class="un-photo__row" style="--row-index: 2; --random: 0.11">
                  <div class="un-photo__row-inner"></div>
                </div>
                <div class="un-photo__row" style="--row-index: 3; --random: 0.50">
                  <div class="un-photo__row-inner"></div>
                </div>
                <div class="un-photo__row" style="--row-index: 4; --random: 0.39;">
                  <div class="un-photo__row-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-7 col-xl-6">
          <div class="section-title services-title" v-viewport.once="showTextAnimation">{{ services.title }}</div>

          <div class="services-items">
            <div class="service" v-for="item in services.items" v-viewport.once="showTextAnimation">
              <div class="service-title">{{ item.title }}</div>
              <div class="service-description">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import inViewport from 'vue-in-viewport-mixin';
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "block-services",
    mixins: [inViewport],
    watch: {
      'inViewport.fully': function (visible) {
        if (visible) {
          this.startAnimation();
        }
      }
    },
    data() {
      return {
        vLine: false,
      }
    },
    computed: {
      services() {
        return this.$store.state.viewData.services;
      },
    },
    methods: {
      startAnimation() {
        this.drawHLine();
      },
      drawHLine() {
        let line = this.$refs.line;

        TweenMax.to(line, 1.5,
          {
            width: '100%',
            ease: Power2.easeOut
          }
        );
      },
    }
  }
</script>

<style scoped>

</style>
