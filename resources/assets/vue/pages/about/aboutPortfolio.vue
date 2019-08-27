<template>
  <section class="section portfolio">
    <div class="section-inner">
      <div class="projects">

        <div class="project">
          <div class="projects-title">
            <div class="section-title" v-viewport.once="showTextAnimation">{{ portfolio.title }}</div>

            <a class="full_width" :href="portfolio.button.page">{{ portfolio.button.text }}</a>
          </div>
        </div>

        <template v-for="(project, index) in projects.items">
          <div v-if="!index" class="project" ref="start">
            <a :href="project.link" class="animated-image block-link">
              <div class="project-image image-wrap">
                <img :src="project.image" :alt="project.title" />
              </div>
            </a>

            <a :href="project.link" class="project-title block-link">{{ project.title }}</a>
            <div class="project-type">{{ project.type }}</div>
          </div>

          <div v-else v-masonry-tile class="project"
               v-viewport.once="showTextAnimation">
            <a :href="project.link" class="animated-image block-link">
              <div class="project-image image-wrap">
                <img :src="project.image" :alt="project.title" />
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
    name: "aboutPortfolio",
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
    }
  }
</script>

<style lang="scss" scoped>

</style>
