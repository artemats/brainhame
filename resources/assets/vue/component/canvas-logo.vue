<template>
  <div id="animation_container" class="animation_container" ref="container">
    <canvas id="canvas" ref="canvas"></canvas>
    <div id="dom_overlay_container" class="dom_overlay_container" ref="overlay"></div>
  </div>
</template>

<script>
  import 'createjs';

  function mc_symbol_clone() {
    let clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    let prototype = createjs.extend(symbol, createjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }


  export default {
    name: "canvas-logo",
    props: {
      props: Object,
    },
    data() {
      return {
        objects: {
          Symbol: {},
          LogoSmallRed: {},
        },
        properties: {
          width: 100,
          height: 70,
          fps: 26,
          color: "#000000",
          opacity: 1.00,
          mWidth: false,
          mHeight: false,
        },
        responsive: {
          lastW: 1,
          lastH: 1,
          lastS: 1,
          isResp: false,
          respDim: 'both',
          isScale: false,
          scaleType: 1,
          // sRatio: 0.5,
          // scaleX: 1,
          // scaleY: 1,
        },
        layout: {
          canvas: {},
          stage: {},
          exportRoot: {},
        },
        trigger: 0,
        error: false,
      }
    },
    watch: {
      trigger(val) {
        if (val) {
          this.resizeCanvas();
        }
      }
    },
    mounted() {
      if (this.props) {
        this.properties = Object.assign(this.properties, this.props);
      }

      let width = this.$el.parentElement.dataset.width;
      let height = this.$el.parentElement.dataset.height;
      if (width) {
        this.properties.width = width;
      }
      if (height) {
        this.properties.height = height;
      }

      let elProps = this.$el.parentElement.dataset.props;
      if (elProps) {
        // console.log(JSON.parse(elProps));
        try {
          let props = JSON.parse(elProps);
          this.properties = Object.assign(this.properties, props);
        } catch (e) {
          this.error = e;
        }
      }


      this.initSymbol();
      this.initLogo();

      this.layout.canvas = this.$refs.canvas;
      this.layout.exportRoot = new this.objects.LogoSmallRed();
      this.layout.stage = new createjs.Stage(this.layout.canvas);
      this.layout.stage.addChild(this.layout.exportRoot);

      window.addEventListener('resize', this.resizeCanvas);
      this.resizeCanvas();

      this.fnStartAnimation();
    },
    methods: {
      initSymbol() {
        var color = this.properties.color;

        this.objects.Symbol = function (mode, startPosition, loop) {
          this.initialize(mode, startPosition, loop, {});

          // Layer 1
          this.shape = new createjs.Shape();
          this.shape.graphics.f(color).s().p("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");
          this.shape.setTransform(151.1, 112);

          this.timeline.addTween(createjs.Tween.get(this.shape).wait(1));
        };

        this.objects.Symbol.prototype = getMCSymbolPrototype(this.objects.Symbol, new createjs.Rectangle(0, 0, 302.1, 224.1), null);
      },
      initLogo() {
        var lib = this.objects;

        this.objects.LogoSmallRed = function (mode, startPosition, loop) {
          this.initialize(mode, startPosition, loop, {});

          // Large Spot (mask)
          var mask = new createjs.Shape();
          mask._off = true;
          mask.graphics.p("AA8E/QhJgDg0gMQg3gMgRgUQgRgUgHgVIgEgRIgCgQIgBgNIgDgLQgCgGgDgEQgEgEgGgCQgDgBgHACIgRAHIgVAKIgZAKQgeALgVAAQgbgBgOgUQgEgIgCgIQgBgGABgJIABgQQAAgLgBgJQgDgSgQgUIgOgSIgQgQIgOgRQgHgJgFgHQgKgRAEgQQAIgeAUgUQAQgRAcgMIAZgLIAZgJIAZgLQANgGAKgHQAVgOALgUIAIgQIAGgQIAGgPQAEgHAFgGQAMgNAXgGQAMgDAIABQAIABAHAEQAGAEAIAIIATAUQAlAnAYATIAUANIAPAJIAKADQAJADALABQAfAEAhgJQAvgNA9ARQA1AOA6AjQAzAfAtAnQAUASAPAQQAQARAJAOQAhAxADAtQACApgWAiQgUAgglAXQgiAWgrAKQg6AOhOAGQgxAEgxAAIgxgBg");
          mask.setTransform(49.7, 32);

          // Layer 2 copy 5
          this.instance = new lib.Symbol();
          this.instance.parent = this;
          this.instance.setTransform(67.4, 21.3, 1, 1, 0, 0, 0, 151.1, 112);

          var maskedShapeInstanceList = [this.instance];

          for (let shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
          }

          this.timeline.addTween(createjs.Tween.get(this.instance).wait(1).to({x: 66.5, y: 22.2}, 0).wait(1).to({
            x: 65.6,
            y: 23
          }, 0).wait(1).to({x: 64.7, y: 23.9}, 0).wait(1).to({x: 63.8, y: 24.7}, 0).wait(1).to({
            x: 63,
            y: 25.6
          }, 0).wait(1).to({x: 62.1, y: 26.5}, 0).wait(1).to({x: 61.2, y: 27.3}, 0).wait(1).to({
            x: 60.3,
            y: 28.2
          }, 0).wait(1).to({x: 59.4, y: 29.1}, 0).wait(1).to({x: 58.5, y: 29.9}, 0).wait(1).to({
            x: 57.6,
            y: 30.8
          }, 0).wait(1).to({x: 56.7, y: 31.6}, 0).wait(1).to({x: 55.8, y: 32.5}, 0).wait(1).to({
            x: 54.9,
            y: 33.4
          }, 0).wait(1).to({x: 54.1, y: 34.2}, 0).wait(1).to({x: 53.2, y: 35.1}, 0).wait(1).to({
            x: 52.3,
            y: 36
          }, 0).wait(1).to({x: 51.4, y: 36.8}, 0).wait(1).to({x: 50.5, y: 37.7}, 0).wait(1).to({
            x: 49.6,
            y: 38.5
          }, 0).wait(1).to({x: 48.7, y: 39.4}, 0).wait(1).to({x: 47.8, y: 40.3}, 0).wait(1).to({
            x: 46.9,
            y: 41.1
          }, 0).wait(1).to({x: 46, y: 42}, 0).wait(1).to({x: 45.2, y: 42.8}, 0).wait(1).to({
            x: 44.3,
            y: 43.7
          }, 0).wait(1).to({x: 43.4, y: 44.6}, 0).wait(1).to({x: 42.5, y: 45.4}, 0).wait(1).to({
            x: 41.6,
            y: 46.3
          }, 0).wait(1).to({x: 40.7, y: 47.2}, 0).wait(1).to({x: 39.8, y: 48}, 0).wait(1).to({
            x: 38.9,
            y: 48.9
          }, 0).wait(1).to({x: 38, y: 49.7}, 0).wait(1).to({x: 37.1, y: 50.6}, 0).wait(1).to({
            x: 36.3,
            y: 51.5
          }, 0).wait(1).to({x: 35.4, y: 52.3}, 0).wait(1).to({x: 34.5, y: 53.2}, 0).wait(1).to({
            x: 33.6,
            y: 54.1
          }, 0).wait(1).to({x: 32.7, y: 54.9}, 0).wait(1).to({x: 31.8, y: 55.8}, 0).wait(1).to({
            x: 30.9,
            y: 56.6
          }, 0).wait(1).to({x: 30, y: 57.5}, 0).wait(1).to({x: 29.1, y: 58.4}, 0).wait(1).to({
            x: 28.2,
            y: 59.2
          }, 0).wait(1).to({x: 27.4, y: 60.1}, 0).wait(1).to({x: 26.5, y: 60.9}, 0).wait(1).to({
            x: 25.6,
            y: 61.8
          }, 0).wait(1).to({x: 24.7, y: 62.7}, 0).wait(1).to({x: 23.8, y: 63.5}, 0).wait(1).to({
            x: 22.9,
            y: 64.4
          }, 0).wait(1).to({x: 22, y: 65.3}, 0).wait(1).to({x: 21.1, y: 66.1}, 0).wait(1).to({
            x: 20.2,
            y: 67
          }, 0).wait(1).to({x: 19.3, y: 67.8}, 0).wait(1).to({x: 18.5, y: 68.7}, 0).wait(1).to({
            x: 17.6,
            y: 69.6
          }, 0).wait(1).to({x: 16.7, y: 70.4}, 0).wait(1).to({x: 15.8, y: 71.3}, 0).wait(1).to({
            x: 14.9,
            y: 72.2
          }, 0).wait(1).to({x: 14, y: 73}, 0).wait(1).to({x: 13.1, y: 73.9}, 0).wait(1).to({
            x: 12.2,
            y: 74.7
          }, 0).wait(1).to({x: 11.3, y: 75.6}, 0).wait(1).to({x: 10.4, y: 76.5}, 0).wait(1).to({
            x: 9.6,
            y: 77.3
          }, 0).wait(1).to({x: 8.7, y: 78.2}, 0).wait(1).to({x: 7.8, y: 79}, 0).wait(1).to({
            x: 6.9,
            y: 79.9
          }, 0).wait(1).to({x: 6, y: 80.8}, 0).wait(1).to({x: 5.1, y: 81.6}, 0).wait(1).to({
            x: 4.2,
            y: 82.5
          }, 0).wait(1).to({x: 3.3, y: 83.4}, 0).wait(1).to({x: 2.4, y: 84.2}, 0).wait(1).to({
            x: 1.5,
            y: 85.1
          }, 0).wait(1).to({x: 0.7, y: 85.9}, 0).wait(1).to({x: -0.2, y: 86.8}, 0).wait(1).to({
            x: -1.1,
            y: 87.7
          }, 0).wait(1).to({x: -2, y: 88.5}, 0).wait(1).to({x: -2.9, y: 89.4}, 0).wait(1).to({
            x: -3.8,
            y: 90.3
          }, 0).wait(1).to({x: -4.7, y: 91.1}, 0).wait(1).to({x: -5.6, y: 92}, 0).wait(1).to({
            x: -6.5,
            y: 92.8
          }, 0).wait(1).to({x: -7.4, y: 93.7}, 0).wait(1).to({x: -8.2, y: 94.6}, 0).wait(1).to({
            x: -9.1,
            y: 95.4
          }, 0).wait(1).to({x: -10, y: 96.3}, 0).wait(1).to({x: -10.9, y: 97.1}, 0).wait(1).to({
            x: -11.8,
            y: 98
          }, 0).wait(1).to({x: -12.7, y: 98.9}, 0).wait(1).to({x: -13.6, y: 99.7}, 0).wait(1).to({
            x: -14.5,
            y: 100.6
          }, 0).wait(1).to({x: -15.4, y: 101.5}, 0).wait(1).to({x: -16.3, y: 102.3}, 0).wait(1).to({
            x: -17.1,
            y: 103.2
          }, 0).wait(1).to({x: -18, y: 104}, 0).wait(1).to({x: -18.9, y: 104.9}, 0).wait(1).to({
            x: -19.8,
            y: 105.8
          }, 0).wait(1).to({x: -20.7, y: 106.6}, 0).wait(1).to({x: -21.6, y: 107.5}, 0).wait(1).to({
            x: -22.5,
            y: 108.4
          }, 0).wait(1).to({x: -23.4, y: 109.2}, 0).wait(1).to({x: -24.3, y: 110.1}, 0).wait(1).to({
            x: -25.2,
            y: 110.9
          }, 0).wait(1).to({x: -26, y: 111.8}, 0).wait(1).to({x: -26.9, y: 112.6}, 0).wait(1).to({
            x: -27.8,
            y: 113.5
          }, 0).wait(1).to({x: -28.7, y: 114.3}, 0).wait(1).to({x: -29.6, y: 115.2}, 0).wait(1));

          // Middle Spot (mask)
          var mask_1 = new createjs.Shape();
          mask_1._off = true;
          mask_1.graphics.p("AAJD4QgGAAgFgEQgFgDgFgFQgFgGgDgHQgEgIgBgHQAAgHABgHQABgGAEgFQADgFAFgCQAGgDAFABQAFABAGADQAGADAFAGQAFAGADAHQADAHABAHQABAIgCAGQgBAHgDAEQgEAFgFADQgEABgFAAIgCAAg");
          mask_1.setTransform(3.4, 24.8);

          // Layer 2 copy 4
          this.instance_1 = new lib.Symbol();
          this.instance_1.parent = this;
          this.instance_1.setTransform(67.4, 21.3, 1, 1, 0, 0, 0, 151.1, 112);

          var maskedShapeInstanceList2 = [this.instance_1];

          for (let shapedInstanceItr2 = 0; shapedInstanceItr2 < maskedShapeInstanceList2.length; shapedInstanceItr2++) {
            maskedShapeInstanceList2[shapedInstanceItr2].mask = mask_1;
          }

          this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(1).to({x: 66.5, y: 22.2}, 0).wait(1).to({
            x: 65.6,
            y: 23
          }, 0).wait(1).to({x: 64.7, y: 23.9}, 0).wait(1).to({x: 63.8, y: 24.7}, 0).wait(1).to({
            x: 63,
            y: 25.6
          }, 0).wait(1).to({x: 62.1, y: 26.5}, 0).wait(1).to({x: 61.2, y: 27.3}, 0).wait(1).to({
            x: 60.3,
            y: 28.2
          }, 0).wait(1).to({x: 59.4, y: 29.1}, 0).wait(1).to({x: 58.5, y: 29.9}, 0).wait(1).to({
            x: 57.6,
            y: 30.8
          }, 0).wait(1).to({x: 56.7, y: 31.6}, 0).wait(1).to({x: 55.8, y: 32.5}, 0).wait(1).to({
            x: 54.9,
            y: 33.4
          }, 0).wait(1).to({x: 54.1, y: 34.2}, 0).wait(1).to({x: 53.2, y: 35.1}, 0).wait(1).to({
            x: 52.3,
            y: 36
          }, 0).wait(1).to({x: 51.4, y: 36.8}, 0).wait(1).to({x: 50.5, y: 37.7}, 0).wait(1).to({
            x: 49.6,
            y: 38.5
          }, 0).wait(1).to({x: 48.7, y: 39.4}, 0).wait(1).to({x: 47.8, y: 40.3}, 0).wait(1).to({
            x: 46.9,
            y: 41.1
          }, 0).wait(1).to({x: 46, y: 42}, 0).wait(1).to({x: 45.2, y: 42.8}, 0).wait(1).to({
            x: 44.3,
            y: 43.7
          }, 0).wait(1).to({x: 43.4, y: 44.6}, 0).wait(1).to({x: 42.5, y: 45.4}, 0).wait(1).to({
            x: 41.6,
            y: 46.3
          }, 0).wait(1).to({x: 40.7, y: 47.2}, 0).wait(1).to({x: 39.8, y: 48}, 0).wait(1).to({
            x: 38.9,
            y: 48.9
          }, 0).wait(1).to({x: 38, y: 49.7}, 0).wait(1).to({x: 37.1, y: 50.6}, 0).wait(1).to({
            x: 36.3,
            y: 51.5
          }, 0).wait(1).to({x: 35.4, y: 52.3}, 0).wait(1).to({x: 34.5, y: 53.2}, 0).wait(1).to({
            x: 33.6,
            y: 54.1
          }, 0).wait(1).to({x: 32.7, y: 54.9}, 0).wait(1).to({x: 31.8, y: 55.8}, 0).wait(1).to({
            x: 30.9,
            y: 56.6
          }, 0).wait(1).to({x: 30, y: 57.5}, 0).wait(1).to({x: 29.1, y: 58.4}, 0).wait(1).to({
            x: 28.2,
            y: 59.2
          }, 0).wait(1).to({x: 27.4, y: 60.1}, 0).wait(1).to({x: 26.5, y: 60.9}, 0).wait(1).to({
            x: 25.6,
            y: 61.8
          }, 0).wait(1).to({x: 24.7, y: 62.7}, 0).wait(1).to({x: 23.8, y: 63.5}, 0).wait(1).to({
            x: 22.9,
            y: 64.4
          }, 0).wait(1).to({x: 22, y: 65.3}, 0).wait(1).to({x: 21.1, y: 66.1}, 0).wait(1).to({
            x: 20.2,
            y: 67
          }, 0).wait(1).to({x: 19.3, y: 67.8}, 0).wait(1).to({x: 18.5, y: 68.7}, 0).wait(1).to({
            x: 17.6,
            y: 69.6
          }, 0).wait(1).to({x: 16.7, y: 70.4}, 0).wait(1).to({x: 15.8, y: 71.3}, 0).wait(1).to({
            x: 14.9,
            y: 72.2
          }, 0).wait(1).to({x: 14, y: 73}, 0).wait(1).to({x: 13.1, y: 73.9}, 0).wait(1).to({
            x: 12.2,
            y: 74.7
          }, 0).wait(1).to({x: 11.3, y: 75.6}, 0).wait(1).to({x: 10.4, y: 76.5}, 0).wait(1).to({
            x: 9.6,
            y: 77.3
          }, 0).wait(1).to({x: 8.7, y: 78.2}, 0).wait(1).to({x: 7.8, y: 79}, 0).wait(1).to({
            x: 6.9,
            y: 79.9
          }, 0).wait(1).to({x: 6, y: 80.8}, 0).wait(1).to({x: 5.1, y: 81.6}, 0).wait(1).to({
            x: 4.2,
            y: 82.5
          }, 0).wait(1).to({x: 3.3, y: 83.4}, 0).wait(1).to({x: 2.4, y: 84.2}, 0).wait(1).to({
            x: 1.5,
            y: 85.1
          }, 0).wait(1).to({x: 0.7, y: 85.9}, 0).wait(1).to({x: -0.2, y: 86.8}, 0).wait(1).to({
            x: -1.1,
            y: 87.7
          }, 0).wait(1).to({x: -2, y: 88.5}, 0).wait(1).to({x: -2.9, y: 89.4}, 0).wait(1).to({
            x: -3.8,
            y: 90.3
          }, 0).wait(1).to({x: -4.7, y: 91.1}, 0).wait(1).to({x: -5.6, y: 92}, 0).wait(1).to({
            x: -6.5,
            y: 92.8
          }, 0).wait(1).to({x: -7.4, y: 93.7}, 0).wait(1).to({x: -8.2, y: 94.6}, 0).wait(1).to({
            x: -9.1,
            y: 95.4
          }, 0).wait(1).to({x: -10, y: 96.3}, 0).wait(1).to({x: -10.9, y: 97.1}, 0).wait(1).to({
            x: -11.8,
            y: 98
          }, 0).wait(1).to({x: -12.7, y: 98.9}, 0).wait(1).to({x: -13.6, y: 99.7}, 0).wait(1).to({
            x: -14.5,
            y: 100.6
          }, 0).wait(1).to({x: -15.4, y: 101.5}, 0).wait(1).to({x: -16.3, y: 102.3}, 0).wait(1).to({
            x: -17.1,
            y: 103.2
          }, 0).wait(1).to({x: -18, y: 104}, 0).wait(1).to({x: -18.9, y: 104.9}, 0).wait(1).to({
            x: -19.8,
            y: 105.8
          }, 0).wait(1).to({x: -20.7, y: 106.6}, 0).wait(1).to({x: -21.6, y: 107.5}, 0).wait(1).to({
            x: -22.5,
            y: 108.4
          }, 0).wait(1).to({x: -23.4, y: 109.2}, 0).wait(1).to({x: -24.3, y: 110.1}, 0).wait(1).to({
            x: -25.2,
            y: 110.9
          }, 0).wait(1).to({x: -26, y: 111.8}, 0).wait(1).to({x: -26.9, y: 112.6}, 0).wait(1).to({
            x: -27.8,
            y: 113.5
          }, 0).wait(1).to({x: -28.7, y: 114.3}, 0).wait(1).to({x: -29.6, y: 115.2}, 0).wait(1));

          // Small Spot (mask)
          var mask_2 = new createjs.Shape();
          mask_2._off = true;
          mask_2.graphics.p("ABMEkQgIgCgDgHQgDgHAEgHQADgHAIgEQAIgEAIADQAIACADAGQADAHgEAHQgDAIgIADQgFACgFAAIgGAAg");
          mask_2.setTransform(10.5, 29.2);

          // Layer 2 copy 3
          this.instance_2 = new lib.Symbol();
          this.instance_2.parent = this;
          this.instance_2.setTransform(67.4, 21.3, 1, 1, 0, 0, 0, 151.1, 112);

          var maskedShapeInstanceList3 = [this.instance_2];

          for (let shapedInstanceItr3 = 0; shapedInstanceItr3 < maskedShapeInstanceList3.length; shapedInstanceItr3++) {
            maskedShapeInstanceList3[shapedInstanceItr3].mask = mask_2;
          }

          this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(1).to({x: 66.5, y: 22.2}, 0).wait(1).to({
            x: 65.6,
            y: 23
          }, 0).wait(1).to({x: 64.7, y: 23.9}, 0).wait(1).to({x: 63.8, y: 24.7}, 0).wait(1).to({
            x: 63,
            y: 25.6
          }, 0).wait(1).to({x: 62.1, y: 26.5}, 0).wait(1).to({x: 61.2, y: 27.3}, 0).wait(1).to({
            x: 60.3,
            y: 28.2
          }, 0).wait(1).to({x: 59.4, y: 29.1}, 0).wait(1).to({x: 58.5, y: 29.9}, 0).wait(1).to({
            x: 57.6,
            y: 30.8
          }, 0).wait(1).to({x: 56.7, y: 31.6}, 0).wait(1).to({x: 55.8, y: 32.5}, 0).wait(1).to({
            x: 54.9,
            y: 33.4
          }, 0).wait(1).to({x: 54.1, y: 34.2}, 0).wait(1).to({x: 53.2, y: 35.1}, 0).wait(1).to({
            x: 52.3,
            y: 36
          }, 0).wait(1).to({x: 51.4, y: 36.8}, 0).wait(1).to({x: 50.5, y: 37.7}, 0).wait(1).to({
            x: 49.6,
            y: 38.5
          }, 0).wait(1).to({x: 48.7, y: 39.4}, 0).wait(1).to({x: 47.8, y: 40.3}, 0).wait(1).to({
            x: 46.9,
            y: 41.1
          }, 0).wait(1).to({x: 46, y: 42}, 0).wait(1).to({x: 45.2, y: 42.8}, 0).wait(1).to({
            x: 44.3,
            y: 43.7
          }, 0).wait(1).to({x: 43.4, y: 44.6}, 0).wait(1).to({x: 42.5, y: 45.4}, 0).wait(1).to({
            x: 41.6,
            y: 46.3
          }, 0).wait(1).to({x: 40.7, y: 47.2}, 0).wait(1).to({x: 39.8, y: 48}, 0).wait(1).to({
            x: 38.9,
            y: 48.9
          }, 0).wait(1).to({x: 38, y: 49.7}, 0).wait(1).to({x: 37.1, y: 50.6}, 0).wait(1).to({
            x: 36.3,
            y: 51.5
          }, 0).wait(1).to({x: 35.4, y: 52.3}, 0).wait(1).to({x: 34.5, y: 53.2}, 0).wait(1).to({
            x: 33.6,
            y: 54.1
          }, 0).wait(1).to({x: 32.7, y: 54.9}, 0).wait(1).to({x: 31.8, y: 55.8}, 0).wait(1).to({
            x: 30.9,
            y: 56.6
          }, 0).wait(1).to({x: 30, y: 57.5}, 0).wait(1).to({x: 29.1, y: 58.4}, 0).wait(1).to({
            x: 28.2,
            y: 59.2
          }, 0).wait(1).to({x: 27.4, y: 60.1}, 0).wait(1).to({x: 26.5, y: 60.9}, 0).wait(1).to({
            x: 25.6,
            y: 61.8
          }, 0).wait(1).to({x: 24.7, y: 62.7}, 0).wait(1).to({x: 23.8, y: 63.5}, 0).wait(1).to({
            x: 22.9,
            y: 64.4
          }, 0).wait(1).to({x: 22, y: 65.3}, 0).wait(1).to({x: 21.1, y: 66.1}, 0).wait(1).to({
            x: 20.2,
            y: 67
          }, 0).wait(1).to({x: 19.3, y: 67.8}, 0).wait(1).to({x: 18.5, y: 68.7}, 0).wait(1).to({
            x: 17.6,
            y: 69.6
          }, 0).wait(1).to({x: 16.7, y: 70.4}, 0).wait(1).to({x: 15.8, y: 71.3}, 0).wait(1).to({
            x: 14.9,
            y: 72.2
          }, 0).wait(1).to({x: 14, y: 73}, 0).wait(1).to({x: 13.1, y: 73.9}, 0).wait(1).to({
            x: 12.2,
            y: 74.7
          }, 0).wait(1).to({x: 11.3, y: 75.6}, 0).wait(1).to({x: 10.4, y: 76.5}, 0).wait(1).to({
            x: 9.6,
            y: 77.3
          }, 0).wait(1).to({x: 8.7, y: 78.2}, 0).wait(1).to({x: 7.8, y: 79}, 0).wait(1).to({
            x: 6.9,
            y: 79.9
          }, 0).wait(1).to({x: 6, y: 80.8}, 0).wait(1).to({x: 5.1, y: 81.6}, 0).wait(1).to({
            x: 4.2,
            y: 82.5
          }, 0).wait(1).to({x: 3.3, y: 83.4}, 0).wait(1).to({x: 2.4, y: 84.2}, 0).wait(1).to({
            x: 1.5,
            y: 85.1
          }, 0).wait(1).to({x: 0.7, y: 85.9}, 0).wait(1).to({x: -0.2, y: 86.8}, 0).wait(1).to({
            x: -1.1,
            y: 87.7
          }, 0).wait(1).to({x: -2, y: 88.5}, 0).wait(1).to({x: -2.9, y: 89.4}, 0).wait(1).to({
            x: -3.8,
            y: 90.3
          }, 0).wait(1).to({x: -4.7, y: 91.1}, 0).wait(1).to({x: -5.6, y: 92}, 0).wait(1).to({
            x: -6.5,
            y: 92.8
          }, 0).wait(1).to({x: -7.4, y: 93.7}, 0).wait(1).to({x: -8.2, y: 94.6}, 0).wait(1).to({
            x: -9.1,
            y: 95.4
          }, 0).wait(1).to({x: -10, y: 96.3}, 0).wait(1).to({x: -10.9, y: 97.1}, 0).wait(1).to({
            x: -11.8,
            y: 98
          }, 0).wait(1).to({x: -12.7, y: 98.9}, 0).wait(1).to({x: -13.6, y: 99.7}, 0).wait(1).to({
            x: -14.5,
            y: 100.6
          }, 0).wait(1).to({x: -15.4, y: 101.5}, 0).wait(1).to({x: -16.3, y: 102.3}, 0).wait(1).to({
            x: -17.1,
            y: 103.2
          }, 0).wait(1).to({x: -18, y: 104}, 0).wait(1).to({x: -18.9, y: 104.9}, 0).wait(1).to({
            x: -19.8,
            y: 105.8
          }, 0).wait(1).to({x: -20.7, y: 106.6}, 0).wait(1).to({x: -21.6, y: 107.5}, 0).wait(1).to({
            x: -22.5,
            y: 108.4
          }, 0).wait(1).to({x: -23.4, y: 109.2}, 0).wait(1).to({x: -24.3, y: 110.1}, 0).wait(1).to({
            x: -25.2,
            y: 110.9
          }, 0).wait(1).to({x: -26, y: 111.8}, 0).wait(1).to({x: -26.9, y: 112.6}, 0).wait(1).to({
            x: -27.8,
            y: 113.5
          }, 0).wait(1).to({x: -28.7, y: 114.3}, 0).wait(1).to({x: -29.6, y: 115.2}, 0).wait(1));
        };

        this.objects.LogoSmallRed.prototype = new createjs.MovieClip();
        this.objects.LogoSmallRed.nominalBounds = new createjs.Rectangle(50.9, 40.2, 98.6, 58.8);
      },
      fnStartAnimation() {
        createjs.Ticker.framerate = this.properties.fps;
        createjs.Ticker.addEventListener("tick", this.layout.stage);
      },
      resizeCanvas() {
        let w = this.properties.width, h = this.properties.height;
        let iw = window.innerWidth, ih = window.innerHeight, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
        let pRatio = 1, scaleX = 1, scaleY = 1;

        if ( this.responsive.isResp ) {
          pRatio = window.devicePixelRatio;
          scaleX = pRatio;
          scaleY = pRatio;
        }

        if ( iw < 767 ) {
          if ( this.properties.mWidth && this.properties.mHeight ) {
            w = this.properties.mWidth;
            h = this.properties.mHeight;
          }
        }

        // let pRatio = window.devicePixelRatio || 1;
        // let scaleX = window.devicePixelRatio || 1, scaleY = window.devicePixelRatio || 1;

        if (this.responsive.isResp) {
          if ((this.responsive.respDim === 'width' && this.responsive.lastW === iw)
            || (this.responsive.respDim === 'height' && this.responsive.lastH === ih)) {
            sRatio = lastS;
          } else if (!this.responsive.isScale) {
            if (iw < w || ih < h)
              sRatio = Math.min(xRatio, yRatio);
          } else if (this.responsive.scaleType === 1) {
            sRatio = Math.min(xRatio, yRatio);
          } else if (this.responsive.scaleType === 2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        } else {
          scaleX = Number( (w / 100).toFixed(2) );
          scaleY = Number( (h / 70).toFixed(2) );
        }

        this.layout.canvas.width = w * pRatio * sRatio;
        this.layout.canvas.height = h * pRatio * sRatio;
        this.layout.canvas.style.width = this.$refs.overlay.style.width = this.$refs.container.style.width = w * sRatio + 'px';
        this.layout.canvas.style.height = this.$refs.container.style.height = this.$refs.overlay.style.height = h * sRatio + 'px';
        this.layout.stage.scaleX = scaleX * sRatio;
        this.layout.stage.scaleY = scaleY * sRatio;
        // this.layout.stage.scaleX = this.responsive.scaleX;
        // this.layout.stage.scaleY = this.responsive.scaleY;
        this.responsive.lastW = iw;
        this.responsive.lastH = ih;
        this.responsive.lastS = sRatio;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .animation_container {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 70px;

    canvas {
      position: absolute;
      display: block;
      width: 100px;
      height: 70px;
    }

    .dom_overlay_container {
      pointer-events: none;
      overflow: hidden;
      width: 100px;
      height: 70px;
      position: absolute;
      left: 0;
      top: 0;
      display: block;
    }
  }
</style>
