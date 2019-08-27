<template>
  <section class="section team">
    <div class="h-line" ref="line"></div>

    <div class="section-inner">
      <div class="section-title" v-viewport.once="showTextAnimation">{{ team.title }}</div>

      <div class="members">
        <div class="member col-6 col-md-4" v-for="member in members.items" v-viewport.once="showTextAnimation">
          <div class="image-wrap">
            <img :src="member.image" :alt="member.title" />
          </div>

          <div class="member-info">
            <div class="member-title">{{ member.title }}</div>
            <div class="member-position">{{ member.position }}</div>
          </div>
        </div>
      </div>

      <div class="more-button-line" v-if="members.page < members.max">
        <div class="rotator" @click="loadMore">
          <img src="~img/more-team.png" ref="rotator" alt="" />
        </div>

<!--        <div ref="svg"></div>-->
      </div>
    </div>
  </section>
</template>

<script>
  import inViewport from 'vue-in-viewport-mixin';
  import {TweenMax, Power2, Linear} from 'gsap';
  import 'svg.js';

  export default {
    name: "aboutTeam",
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
        more: {
          text: 'view more team',
          size: 85,
        },
      }
    },
    mounted() {
      // todo: not working now
      // this.createMoreButton();

      this.initRotator();
    },
    computed: {
      team() {
        return {
          title: this.$store.state.viewData.team_title,
        };
      },
      members() {
        return this.$store.state.viewData.members;
      }
    },
    methods: {
      startAnimation() {
        this.drawHLine();
      },
      drawHLine() {
        let line = this.$refs.line;

        TweenMax.fromTo(line, 1.5,
          {
            width: '100%',
            ease: Power2.easeOut
          }
        );
      },
      createMoreButton() {
        let svg = this.$refs.svg;
        let draw = SVG(svg).size(this.more.size, this.more.size);
        let texts = this.more.text.split(' ');

        let text = draw.text((add) => {
          texts.forEach((item)=>{
            add.tspan(item.toLocaleUpperCase());
          });
        });

        let path = this.createCirclePath(this.more.size);

        text.font({
          family: 'HelveticaNeueCyr',
          size: 12,
          leading: '5.4px',
          weight: 900,
        });

        text.path(path);
      },
      initRotator() {
        let target = this.$refs.rotator;

        TweenMax.to(target,5,{rotation:"360",ease:Linear.easeNone,repeat:-1})
      },
      loadMore() {
        let data = {
          action: 'getMembers',
          page: parseInt(this.members.page) + 1,
        };

        this.$store.dispatch('send', data).then(res => {
          // console.log(res);
          if (res.data.success) {
            this.$store.commit('setView', {
              members: {
                items: this.members.items.concat(res.data.data.members.items),
                max: res.data.data.members.max,
                page: res.data.data.members.page,
              },
            })
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
