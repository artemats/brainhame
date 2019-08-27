<template>
  <section class="section blog">
    <div class="section-inner">
      <div class="section-title d-block d-sm-none" v-viewport.once="showTextAnimation">{{ blog.title }}</div>

      <div class="row">
        <div class="col-md-5 col-lg-7 first-column">
          <slick ref="slickI" :options="slickIOptions" class="article-image">
            <div v-for="article in articles">
              <div class="un-photo" :style="{backgroundImage: `url(${article.image})` }" style="--row-total: 5;">
                <div class="un-photo__popup">
                  <img :src="article.image" :alt="article.title" />
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
          </slick>

          <div class="blog-navigation">
            <span class="article-prev active-cursor arrow" ref="prevPost">- back post</span>
            <span class="article-next active-cursor arrow" ref="nextPost">next post -</span>
          </div>
        </div>
        <div class="col-md-7 col-lg-5">
          <div class="section-title d-none d-sm-block" v-viewport.once="showTextAnimation">{{ blog.title }}</div>

          <slick ref="slickT" :options="slickTOptions" class="article-info">
            <div class="article" v-for="article in articles" v-viewport.once="showTextAnimation">
              <div class="article-title"><a class="just-link" :href="article.link">{{ article.title }}</a></div>
              <div class="article-date">{{ article.date }}</div>
              <div class="article-excerpt" v-html="article.excerpt"></div>
            </div>
          </slick>

          <a class="full_width" :href="blog.button.page">{{ blog.button.text }}</a>
<!--          <div class="divider"></div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Slick from 'vue-slick';

  export default {
    name: "block-blog",
    components: {
      Slick
    },
    data() {
      return {
        vLine: false,
        slickIOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.article-info',
        },
        slickTOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.article-image',
          prevArrow: '.article-prev',
          nextArrow: '.article-next',
        },
      }
    },
    computed: {
      blog() {
        return this.$store.state.viewData.blog;
      },
      articles() {
        return this.$store.state.viewData.articles;
      },
    },
    methods: {
    },
  }
</script>

<style lang="scss">
@import '~slick-carousel/slick/slick.scss';
</style>
