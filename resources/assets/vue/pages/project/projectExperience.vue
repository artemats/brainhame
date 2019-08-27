<template>
  <section class="section single-project-experience">
    <div class="image-wrapper background-video full-width">
      <transition name="fade">
        <div v-if="paused" class="overlay active-cursor" @click="toggleVideo">
          <img :src="experience.video_placeholder" alt="" />
        </div>
      </transition>


      <video @click="toggleVideo" class="back-video" ref="video"
             muted loop>
        <source :src="experience.video" type="video/mp4">
      </video>
    </div>

    <div class="section-inner">
      <div class="row">
        <div class="col-md-8 col-xl-6">
          <div class="text-wrapper">
            <div class="block-subtitle" v-viewport.once="showTextAnimation">{{ experience.title }}</div>
            <div v-html="experience.description" v-viewport.once="showTextAnimation"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "projectExperience",
    data() {
      return {
        paused: true,
      };
    },
    computed: {
      experience() {
        return this.$store.state.viewData.experience;
      },
    },
    methods: {
      toggleVideo() {
        let video = this.$refs.video;

        if (this.paused) {
          video.play();
          this.paused = false;
        } else {
          video.pause();
          this.paused = true;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
