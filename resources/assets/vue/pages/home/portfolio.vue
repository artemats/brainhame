<template>
  <section class="section portfolio">
    <div class="section-inner">
      <div class="projects"
           v-masonry transition-duration="0.3s"
           item-selector=".project">

        <div v-masonry-tile class="project">
          <div class="projects-title">
            <div class="section-title" v-viewport.once="showTextAnimation">{{ portfolio.title }}</div>

            <a class="full_width" :href="portfolio.button.page">{{ portfolio.button.text }}</a>
<!--            <div class="divider"></div>-->
          </div>
        </div>

        <template v-for="(project, index) in projects.items">
          <div v-if="!index" v-masonry-tile class="project opacity" ref="start">
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

          <div v-else v-masonry-tile class="project" v-viewport.once="showBlock">
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
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "portfolio",
    watch: {
      loading() {
        if (!this.loading) {
          this.showBlock(this.$refs.start[0]);
        }
      },
    },
    data() {
      return {
        animated: 'in-viewport',
      }
    },
    computed: {
      portfolio() {
        return this.$store.state.viewData.portfolio;
      },
      projects() {
        return this.$store.state.viewData.projects;
      },
      loading() {
        return this.$store.state.loading;
      },
    },
    methods: {
      showBlock(el) {
        this.showTextAnimation(el, () => {
          this.initParallax(el);
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
