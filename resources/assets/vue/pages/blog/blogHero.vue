<template>
  <section class="section blog-hero">
    <div class="h-line" ref="line"></div>

    <div class="section-inner">
      <div class="row">
        <div class="col-md-8">
          <div class="opacity" v-multi-ref:text>
            <svg-text class="blog-hero-title section-title" v-bind:title="hero.title"></svg-text>
          </div>

          <div class="blog-hero-subtitle section-subtitle opacity" v-html="hero.subtitle" v-multi-ref:text></div>
        </div>
        <div class="col-md-4 post-taxonomies">
          <div class="d-none d-xl-block post-taxonomies-list">
            <div class="row">
              <div class="col-6">
                <ul class="clear-list">
                  <li v-for="(category, index) in taxonomies.categories">
                    <a @click="activeTerm.category = category"
                      class="only_hover active-cursor opacity" :data-delay="getDelay(index)"
                       v-multi-ref:text>{{ category.label }}</a>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="clear-list">
                  <li v-for="(tag, index) in taxonomies.tags">
                    <a @click="activeTerm.post_tag = tag"
                       class="only_hover active-cursor opacity" :data-delay="getDelay(index)"
                       v-multi-ref:text>{{ tag.label }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="post-taxonomies-select d-xl-none" v-if="ready">
            <div class="row">
              <div class="col-6 col-md-12">
                <v-select :clearable="clearable" :searchable="searchable"
                          :options="taxonomies.categories" v-model="activeTerm.category"></v-select>
              </div>
              <div class="col-6 col-md-12">
                <v-select :clearable="clearable" :searchable="searchable"
                          :options="taxonomies.tags" v-model="activeTerm.post_tag"></v-select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-5 d-none d-xl-block overflow-hidden">
          <img :src="hero.image" alt="" class="opacity" ref="image" />
        </div>
        <div class="col-xl-7">
          <div class="post-list">
            <div class="post-item" v-for="(item, index) in posts.items">

              <a v-if="index < 2" :href="item.link" class="opacity" v-multi-ref:text>
                <div class="row">
                  <div class="col-4 col-md-3 post-info">
                    <div class="post-date">{{ item.date }}</div>
                    <div class="post-number">{{ formatNumber(index + 1) }}</div>
                  </div>
                  <div class="col-8 col-md-9">
                    <div class="post-title">{{ item.title }}</div>
                  </div>
                </div>
              </a>

              <a v-else :href="item.link" class="opacity" v-viewport.once="showTextAnimation">
                <div class="row">
                  <div class="col-4 col-md-3 post-info">
                    <div class="post-date">{{ item.date }}</div>
                    <div class="post-number">{{ formatNumber(index + 1) }}</div>
                  </div>
                  <div class="col-8 col-md-9">
                    <div class="post-title">{{ item.title }}</div>
                  </div>
                </div>
              </a>

            </div>
          </div>

          <div class="more-button-line" v-show="posts.page < posts.max">
            <div class="rotator" @click="loadMore">
              <img src="~img/more-post.png" ref="rotator" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SvgText from "../../component/svg-text";
  import {TweenMax, Power2} from 'gsap';
  import '../../libs/DrawSVGPlugin.min';


  export default {
    name: "blogHero",
    components: {SvgText},
    data() {
      return {
        vLine: false,
        activeTerm: {
          post_tag: {},
          category: {},
        },
        clearable: false,
        searchable: false,
        page: 1,
        update: false,
        ready: true,
        init: false,
      }
    },
    mounted() {
      this.initRotator();

      if (!Object.keys(this.activeTerm.category).length) {
        this.activeTerm.category = this.taxonomies.categories[0];
      }

      if (!Object.keys(this.activeTerm.post_tag).length) {
        this.activeTerm.post_tag = this.taxonomies.tags[0];
      }

      this.page = parseInt(this.posts.page);

      setTimeout(()=>{
        this.init = true;
      }, 500);
    },
    watch: {
      loading() {
        if (!this.loading) {
          this.drawHLine();
          // this.drawTitle();
          this.triggerVLine();
          this.showBlock();
        }
      },
      activeTerm: {
        handler: function (val, oldVal) {
          if (this.init){
            this.page = 1;
            this.update = true;

            this.getPosts();
          }
        },
        deep: true
      }
    },
    computed: {
      hero() {
        return this.$store.state.viewData.hero;
      },
      posts() {
        return this.$store.state.viewData.posts;
      },
      loading() {
        return this.$store.state.loading;
      },
      taxonomies() {
        return this.$store.state.viewData.taxonomies;
      }
    },
    methods: {
      drawTitle() {
        let element = this.$refs.svgText.querySelector('svg text');

        TweenMax.to(element, 1.55, {drawSVG: "150px, 1px", ease: Power2.easeIn});
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
        // let header = document.querySelector('header.header'),
        //   headerH = header.offsetHeight,
        //   height = this.$el.offsetHeight;
        //
        // let line = document.querySelector('.v-line'),
        //   lHeight = line.offsetHeight;
        //
        // let distance = (headerH + height) - lHeight;
        let distance = window.innerHeight;

        this.drawVLine(distance);
      },
      showBlock() {
        this.showImageAnimation(this.$refs.image);

        this.$refs.text.forEach(item => {
          this.showTextAnimation(item);
        });
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
          action: 'getPosts',
          page: this.page,
          taxonomies: this.activeTerm,
        };

        this.$store.dispatch('send', data).then(res => {
          // console.log(res);
          if (res.data.success) {
            if (this.update) {
              this.$store.commit('setView', {
                posts: res.data.data.posts,
              });
            } else {
              this.$store.commit('setView', {
                posts: {
                  items: this.posts.items.concat(res.data.data.posts.items),
                  max: res.data.data.posts.max,
                  page: res.data.data.posts.page,
                },
              });
            }

            this.update = false;

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
