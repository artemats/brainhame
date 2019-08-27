<template>
  <section class="section contact">
    <div v-if="enableLine" class="h-line" ref="line"></div>
    <div v-else class="circle invisible" ref="circle"></div>

    <div class="section-inner">
      <div v-viewport.once="drawHLine">
        <div class="section-title d-none d-md-flex d-xl-none contact-title"
             v-viewport.once="showTextAnimation">{{ contact.title }}</div>
      </div>

      <div class="contact-info row">
        <div class="d-none d-md-flex col-md-5 col-xl-4 contact-image">
          <div class="un-photo" :style="{backgroundImage: `url(${contact.image})` }" style="--row-total: 5;">
            <div class="un-photo__popup">
              <img :src="contact.image" :alt="contact.title" v-viewport.once="showImageAnimation" />
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
        <div class="col-12 col-md-7 col-xl-8 contact-info-inner">
          <div class="d-flex d-md-none d-xl-flex section-title" v-viewport.once="showTextAnimation">{{ contact.title }}</div>

          <div class="contact-info-form">
            <div class="contact-description" v-viewport.once="showTextAnimation">{{ contact.description }}</div>

            <div v-html="formHtml" ref="form" v-viewport.once="showTextAnimation">{{ 'Form here' }}</div>

<!--            <div class="divider"></div>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  /* global wpcf7 */
  import 'svg.js';
  import inViewport from 'vue-in-viewport-mixin';
  import '../../libs/DrawSVGPlugin.min';
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "contact",
    mixins: [inViewport],
    props: {
      enableLine: Boolean,
    },
    watch: {
      'inViewport.now': function (visible) {
        if (visible) {
          this.animateCircle();
          // this.drawHLine();
        }
      },
    },
    data() {
      return {
        formHtml: '',
        vLine: false,
        dCircle: false,
      }
    },
    mounted() {
      let form_id = this.contact.contact_form;
      this.getForm(form_id);

      if (!this.enableLine) {
        setTimeout(() => {
          let height = this.$el.offsetHeight + 100;
          let draw = SVG(this.$refs.circle).size(height, height);
          let rect = draw.circle(height - 4).move(2, 2);

          rect.attr({
            fill: 'none',
            stroke: '#000000',
            'stroke-width': '2px',
          });
        }, 300);
      }
    },
    computed: {
      contact() {
        return this.$store.state.viewData.contact;
      },
    },
    methods: {
      getForm(form_id) {
        let data = {
          action: 'getContactForm',
          formId: form_id,
        };

        this.$store.dispatch('send', data).then(res => {
          if (res.data.success) {
            this.formHtml = res.data.data.form;

            this.initForm();

            return res.data.data.form;
          }
        });
      },
      initForm() {
        setTimeout(() => {
          this.animatePlaceholder('.field', 'filled');

          let $form = $(this.$refs.form).find('form');

          // Transform input[type=submit] to button
          let $submit = $form.find('[type=submit]');
          let $button = $('<button />', {
            type: 'submit',
            class: $submit.prop('class'),
          }).text( $submit.prop('value') );
          $submit.replaceWith($button);

          wpcf7.initForm($form);
          if (wpcf7.cached) {
            wpcf7.refill($form);
          }
        }, 1000);
      },
      animateCircle() {
        if(!this.enableLine) {
          let circle = this.$refs.circle.querySelector('circle');

          if (this.$refs.circle.classList.contains('invisible')) {
            this.$refs.circle.classList.remove('invisible');

            if (circle) {
              TweenMax.set(circle, {
                drawSVG: '0%',
                transformOrigin: "50% 50%"
              });

              TweenMax.to(circle, 1.55, {drawSVG: '100% 0', ease: Power2.easeIn});
            }
          }
        }
      },
      drawHLine() {
        let line = this.$refs.line;

        if (line) {
          TweenMax.to(line, 1.5,
            {
              width: '100%',
              ease: Power2.easeOut
            }
          );
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
