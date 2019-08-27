<template>
  <section class="section team">
    <div class="h-line" ref="line"></div>

    <div class="section-inner">
      <div class="section-title" v-viewport.once="showTextAnimation">{{ team.title }}</div>

      <div class="members row">
        <template v-for="(member, index) in members">
          <div v-if="index < 2" class="col-6 col-md-4 member" v-viewport.once="showTextAnimation">
            <div class="member-wrapper animated-image">
              <div class="image-wrap">
                <div class="un-photo" :style="{backgroundImage: `url(${member.image})` }" style="--row-total: 5;">
                  <div class="un-photo__popup">
                    <img :src="member.image" :alt="member.title" />
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

              <div class="hover-info">
                <div class="member-title">{{ member.title }}</div>
                <div class="member-position">{{ member.position }}</div>
              </div>
            </div>
          </div>

          <div v-else class="col-6 col-md-4 member" v-viewport.once="showBlock">
            <div class="member-wrapper animated-image">
              <div class="image-wrap">
                <div class="un-photo" :style="{backgroundImage: `url(${member.image})` }" style="--row-total: 5;">
                  <div class="un-photo__popup">
                    <img :src="member.image" :alt="member.title" />
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

              <div class="hover-info">
                <div class="member-title">{{ member.title }}</div>
                <div class="member-position">{{ member.position }}</div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="team-info">
        <div class="team-description" v-viewport.once="showTextAnimation" v-html="team.description"></div>

        <a class="full_width" :href="team.button.page">{{ team.button.text }}</a>
<!--        <div class="divider"></div>-->
      </div>
    </div>
  </section>
</template>

<script>
  import inViewport from 'vue-in-viewport-mixin';
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "team",
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
      team() {
        return this.$store.state.viewData.team;
      },
      members() {
        return this.$store.state.viewData.members;
      }
    },
    methods: {
      showBlock(el) {
        this.showTextAnimation(el, () => {
          this.initParallax(el);
        });
      },
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
