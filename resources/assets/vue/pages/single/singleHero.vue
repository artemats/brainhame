<template>
  <section class="section single-hero">
    <div class="h-line" ref="line"></div>

    <div class="section-inner">
      <div class="row">
        <div class="col-xl-6 opacity" v-multi-ref:text>
          <h1 class="page-title" v-html="title"></h1>
        </div>
        <div class="col-5 col-xl-3 post-info">
          <div class="post-date opacity" v-multi-ref:text>{{ date }}</div>

          <div class="post-category opacity" v-multi-ref:text>{{ postCategory }}</div>

          <div class="post-social-sharing opacity" v-multi-ref:text>
            <div></div>
            <ul class="clear-list">
              <li v-for="(url, name) in socialsLinks">
                <a class="only_hover" :href="url" target="_blank">{{ name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-7 col-xl-3 post-navigation opacity" v-multi-ref:text>
          <template v-if="adjacentPosts.next">
            <div class="post-navigation-title">Next article</div>

            <div class="next-post-title" v-html="adjacentPosts.next.title"></div>
          </template>

          <template v-else-if="adjacentPosts.prev">
            <div class="post-navigation-title">Previous article</div>

            <div class="next-post-title" v-html="adjacentPosts.prev.title"></div>
          </template>

          <div class="post-navigation-arrows">
            <div class="prev-arrow">
              <a :href="adjacentPosts.prev.link" v-if="adjacentPosts.prev">
                <prev-arrow></prev-arrow>
              </a>
            </div>

            <div class="next-arrow">
              <a :href="adjacentPosts.next.link" v-if="adjacentPosts.next">
                <next-arrow></next-arrow>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-9">
          <div class="image-wrapper overflow-hidden">
            <img :src="postThumbnail" :alt="title" class="opacity" ref="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import prevArrow from '../../../icons/prev-arrow.svg';
  import nextArrow from '../../../icons/next-arrow.svg';
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "singleHero",
    components: {
      prevArrow,
      nextArrow,
    },
    data() {
      return {
        vLine: false,
      }
    },
    watch: {
      loading() {
        if (!this.loading) {
          this.drawHLine();
          this.triggerVLine();
          this.showBlock();
        }
      },
    },
    computed: {
      title() {
        return this.$store.state.viewData.title;
      },
      date() {
        return this.$store.state.viewData.date;
      },
      postCategory() {
        return this.$store.state.viewData.post_category;
      },
      socialsLinks() {
        return this.$store.state.viewData.socials_links;
      },
      adjacentPosts() {
        return this.$store.state.viewData.adjacent_posts;
      },
      postThumbnail() {
        return this.$store.state.viewData.post_thumbnail;
      },
      loading() {
        return this.$store.state.loading;
      },
    },
    methods: {
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
        // let header = document.querySelector('header.header'),
        //   headerH = header.offsetHeight,
        //   height = this.$el.offsetHeight;
        //
        // this.drawVLine(headerH + height);
        let distance = window.innerHeight;

        this.drawVLine(distance);
      },
      showBlock() {
        this.showImageAnimation(this.$refs.image);

        this.$refs.text.forEach(item => {
          this.showTextAnimation(item);
        });
      },
    },
  }
</script>

<style scoped>

</style>
