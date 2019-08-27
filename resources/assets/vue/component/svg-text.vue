<template>
  <div class="text-container">
    <div class="original" ref="original" v-html="title" v-if="!this.transform"></div>
    <div class="svg-container" ref="svg"></div>
  </div>
</template>

<script>
  import 'svg.js';

  export default {
    name: "svg-text",
    props: ['title'],
    data() {
      return {
        transform: false,
      }
    },
    mounted() {
      if (this.title) {
        setTimeout(this.build(), 700);
      }
    },
    methods: {
      build() {
        let texts = this.title.replace(' <br />', '').split("\n"),
          width = this.$el.offsetWidth,
          height = this.$el.offsetHeight,
          svg = this.$refs.svg;

        let style = window.getComputedStyle(svg, null).getPropertyValue('font-size');
        let fontSize = parseFloat(style);


        let draw = SVG(svg).size(width + 30, height);

        let text = draw.text((add) => {
          texts.forEach((item, index) => {
            add.tspan(item).newLine();
          });
        });

        // text.move(0,20).font({ family: 'MonumentExtended' });
        text.font({
          family: 'MonumentExtended',
          size: fontSize,
          leading: 0.9,
        });

        text.attr({
          fill: 'none',
          stroke: '#000000',
          // 'stroke-dasharray': '0px, 11px',
        });

        this.transform = true;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .original {
    display: inline-block;
  }

  .text-container {
    &, .svg-container {
      display: inline-flex;
    }
  }
</style>
