<template>
  <section class="section contact-page">
    <div class="h-line" ref="line"></div>

    <div class="section-inner">
      <div class="row">
        <div class="col-xl-7 first-column page-columns">
          <div class="page-columns-inner">
            <h1 class="page-title opacity" v-multi-ref:text v-html="pageTitle"></h1>

            <div class="info row">
              <div class="col-6 col-md-4 info-inner" v-for="(group, index) in info">
                <div class="info-header opacity"
                     :data-delay="getDelay(index + 1)" v-multi-ref:text>{{ group.title }}:
                </div>

                <template v-for="(item, ind) in group.items">
                  <div class="info-item opacity"
                       :data-delay="getDelay((index + 1)+(index + 1))" v-multi-ref:text>{{ item.text }}
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 second-column page-columns">
          <div class="page-columns-inner">
            <div class="form-title opacity" v-multi-ref:text>{{ formInfo.title }}</div>

            <div v-html="formHtml" ref="form" class="opacity" v-multi-ref:text></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {TweenMax, Power2} from 'gsap';

  export default {
    name: "contactPage",
    data() {
      return {
        formHtml: '',
      }
    },
    watch: {
      loading() {
        if (!this.loading) {
          this.drawHLine();
          this.triggerVLine();
          // this.animateText();
          this.showBlock();
        }
      },
    },
    mounted() {
      this.getForm();
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      },
      pageTitle() {
        return this.$store.state.viewData.title;
      },
      info() {
        console.log(this.$store.state.viewData.info);

        return this.$store.state.viewData.info;
      },
      formInfo() {
        return this.$store.state.viewData.form_info;
      },
    },
    methods: {
      getForm() {
        let data = {
          action: 'getContactForm',
          formId: this.formInfo.form_id,
        };

        this.$store.dispatch('send', data).then(res => {
          console.log(res);
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
      drawHLine() {
        let line = this.$refs.line;

        TweenMax.to(line, 1.5,
          // {
          //   width: 0,
          //   ease: Power2.easeIn
          // },
          {
            width: '100%',
            ease: Power2.easeOut
          }
        );
      },
      triggerVLine() {
        let header = document.querySelector('header.header'),
          headerH = header.offsetHeight,
          height = this.$el.offsetHeight,
          footer = document.querySelector('footer.footer'),
          footerH = footer.offsetHeight;

        this.drawVLine(headerH + height + footerH);
      },
      showBlock() {
        this.$refs.text.forEach(item => {
          this.showTextAnimation(item);
        });
      }
    },
  }
</script>

<style scoped>

</style>
