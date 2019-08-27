<template>
  <section class="section about">
    <div class="section-inner">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="section-header">
            <div class="section-header-wrapper">
              <div class="un-photo" :style="{backgroundImage: `url(${we_are.image})` }" style="--row-total: 5;">
                <div class="section-image un-photo__popup">
                  <img :src="we_are.image" :alt="we_are.title" v-viewport.once="showImageAnimation" />
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
              <div class="section-title" v-viewport.once="showTextAnimation">{{ we_are.title }}</div>
            </div>
          </div>

          <div class="about-text">
            <div class="row">
              <div class="column first col-md-6" v-viewport.once="showTextAnimation" v-html="we_are.text.first"></div>

              <div class="column second col-md-6" v-viewport.once="showTextAnimation">
                <div v-html="we_are.text.second"></div>

                <a class="full_width" :href="we_are.button.page">{{ we_are.button.text }}</a>
<!--                <div class="divider"></div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "about",
    computed: {
      we_are() {
        return this.$store.state.viewData.we_are;
      },
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
