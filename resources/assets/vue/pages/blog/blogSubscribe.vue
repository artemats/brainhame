<template>
  <section class="section blog-subscribe">
    <div class="section-inner">
      <div class="form-wrapper" ref="cont" v-bind:style="styleObject">
        <div class="form-wrapper-inner">
          <div class="form-title" v-html="subscribe.title" v-viewport.once="showTextAnimation"></div>

          <div v-html="formHtml" ref="form" v-viewport.once="showTextAnimation"></div>

<!--          <div class="divider"></div>-->
        </div>

        <div class="circle invisible" ref="circle"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import inViewport from 'vue-in-viewport-mixin';
  import 'svg.js';
  import '../../libs/DrawSVGPlugin.min';
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "blogSubscribe",
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
        formHtml: '',
        styleObject: {},
        vLine: false,
      }
    },
    mounted() {
      let form_id = this.subscribe.contact_form;

      this.getForm(form_id);

      this.drawCircle();
    },
    computed: {
      subscribe() {
        return this.$store.state.viewData.subscribe;
      }
    },
    methods: {
      drawCircle() {
        let width = this.$refs.cont.offsetWidth;
        this.styleObject.height = width + 'px';

        let draw = SVG(this.$refs.circle).size(width, width);
        let rect = draw.circle(width - 4).move(2, 2);

        rect.attr({
          fill: 'none',
          stroke: '#000000',
          'stroke-width': '2px',
        });
      },
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
      startAnimation() {
        this.animateCircle();
      },
      animateCircle() {
        let circle = this.$refs.circle.querySelector('circle');

        if (this.$refs.circle.classList.contains('invisible')) {
          this.$refs.circle.classList.remove('invisible');

          TweenMax.set(circle, {
            drawSVG: '0%',
            transformOrigin: "50% 50%"
          });

          TweenMax.to(circle, 1.55, {drawSVG: '100% 0', ease: Power2.easeIn});
        }
      },
      animateText() {
        let text = this.$el.querySelector('text');

        TweenMax.set(text, {
          strokeDashoffset: '100%',
        });

        TweenMax.to(text, 3, {strokeDashoffset: 0, ease: Linear.easeNone});
      },
    },
  }
</script>

<style lang="scss" scoped>
.circle {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
