<template>
  <section class="section portfolio">
    <div class="h-line" ref="line"></div>

    <div class="section-inner">
      <div class="projects"
           v-masonry transition-duration="0.3s"
           item-selector=".project">

        <div v-masonry-tile class="project project-first">
          <div class="projects-title">
            <div class="section-title opacity" v-multi-ref:text>{{ portfolio.title }}</div>

            <div v-html="portfolio.content" class="opacity" v-multi-ref:text></div>
          </div>
        </div>

        <template v-for="(project, index) in projects.items">
          <div v-if="index < 2" v-masonry-tile class="project opacity" ref="start">
            <div class="project-inner">
              <a :href="project.link" class="animated-image block-link">
                <div class="project-image image-wrap un-photo" :style="{backgroundImage: `url(${project.image})` }" style="--row-total: 5;">
                  <div class="un-photo__popup">
                    <img :src="project.image" :alt="project.title" />
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
              </a>

              <a :href="project.link" class="project-title block-link">{{ project.title }}</a>
              <div class="project-type">{{ project.type }}</div>
            </div>
          </div>

          <div v-else v-masonry-tile class="project" v-viewport.once="showProject">
            <div class="project-inner">
              <a :href="project.link" class="animated-image block-link">
                <div class="project-image image-wrap un-photo" :style="{backgroundImage: `url(${project.image})` }" style="--row-total: 5;">
                  <div class="un-photo__popup">
                    <img :src="project.image" :alt="project.title" />
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
              </a>

              <a :href="project.link" class="project-title block-link">{{ project.title }}</a>
              <div class="project-type">{{ project.type }}</div>
            </div>
          </div>
        </template>
      </div>

      <div class="more-button-line" v-show="projects.page < projects.max">
        <div class="rotator" @click="loadMore">
          <img src="~img/more-work.png" ref="rotator" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "portfolioHero",
    watch: {
      loading() {
        if (!this.loading) {
          this.drawHLine();
          this.triggerVLine();

          this.showBlock();
        }
      },
    },
    data() {
      return {
        vLine: false,
        page: 1,
      }
    },
    mounted() {
      this.initRotator();

      this.page = parseInt(this.projects.page);
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      },
      portfolio() {
        return this.$store.state.viewData.portfolio;
      },
      projects() {
        return this.$store.state.viewData.projects
      },
    },
    methods: {
      showBlock() {
        this.$refs.text.forEach(item => {
          this.showTextAnimation(item);
        });

        this.$refs.start.forEach(item => {
          this.showTextAnimation(item);
        });
      },
      showProject(el) {
        this.showTextAnimation(el, () => {
          this.initParallax(el);
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
        let wHeight = window.innerHeight;

        this.drawVLine(wHeight);
      },
      initRotator() {
        let target = this.$refs.rotator;

        TweenMax.to(target, 5, {rotation: "360", ease: Linear.easeNone, repeat: -1})
      },
      loadMore() {
        this.page++;

        this.getPosts();
      },
      getPosts() {
        let data = {
          action: 'getProjects',
          page: this.page,
        };

        this.$store.dispatch('send', data).then(res => {
          // console.log(res);
          if (res.data.success) {
            this.$store.commit('setView', {
              projects: {
                items: this.projects.items.concat(res.data.data.projects.items),
                max: res.data.data.projects.max,
                page: res.data.data.projects.page,
              },
            });

            setTimeout(()=>{
              // this.showBlock();

              this.triggerVLine();
            }, 500);
          }
        });
      }
    },
  }
</script>

<style scoped>

</style>
