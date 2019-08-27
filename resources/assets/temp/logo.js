(function (lib, img, cjs, ss, an) {

  var p; // shortcut to reference prototypes

// symbols:
// helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }


  (lib.Symbol1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#fff").s().p("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");
    this.shape.setTransform(151.1,112);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,302.1,224.1), null);


// stage content:
  (lib.LOGOSMALLRED = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Large Spot (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("AA8E/QhJgDg0gMQg3gMgRgUQgRgUgHgVIgEgRIgCgQIgBgNIgDgLQgCgGgDgEQgEgEgGgCQgDgBgHACIgRAHIgVAKIgZAKQgeALgVAAQgbgBgOgUQgEgIgCgIQgBgGABgJIABgQQAAgLgBgJQgDgSgQgUIgOgSIgQgQIgOgRQgHgJgFgHQgKgRAEgQQAIgeAUgUQAQgRAcgMIAZgLIAZgJIAZgLQANgGAKgHQAVgOALgUIAIgQIAGgQIAGgPQAEgHAFgGQAMgNAXgGQAMgDAIABQAIABAHAEQAGAEAIAIIATAUQAlAnAYATIAUANIAPAJIAKADQAJADALABQAfAEAhgJQAvgNA9ARQA1AOA6AjQAzAfAtAnQAUASAPAQQAQARAJAOQAhAxADAtQACApgWAiQgUAgglAXQgiAWgrAKQg6AOhOAGQgxAEgxAAIgxgBg");
    mask.setTransform(49.7,32);

    // Layer 2 copy 5
    this.instance = new lib.Symbol1();
    this.instance.parent = this;
    this.instance.setTransform(67.4,21.3,1,1,0,0,0,151.1,112);

    var maskedShapeInstanceList = [this.instance];

    for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:66.5,y:22.2},0).wait(1).to({x:65.6,y:23},0).wait(1).to({x:64.7,y:23.9},0).wait(1).to({x:63.8,y:24.7},0).wait(1).to({x:63,y:25.6},0).wait(1).to({x:62.1,y:26.5},0).wait(1).to({x:61.2,y:27.3},0).wait(1).to({x:60.3,y:28.2},0).wait(1).to({x:59.4,y:29.1},0).wait(1).to({x:58.5,y:29.9},0).wait(1).to({x:57.6,y:30.8},0).wait(1).to({x:56.7,y:31.6},0).wait(1).to({x:55.8,y:32.5},0).wait(1).to({x:54.9,y:33.4},0).wait(1).to({x:54.1,y:34.2},0).wait(1).to({x:53.2,y:35.1},0).wait(1).to({x:52.3,y:36},0).wait(1).to({x:51.4,y:36.8},0).wait(1).to({x:50.5,y:37.7},0).wait(1).to({x:49.6,y:38.5},0).wait(1).to({x:48.7,y:39.4},0).wait(1).to({x:47.8,y:40.3},0).wait(1).to({x:46.9,y:41.1},0).wait(1).to({x:46,y:42},0).wait(1).to({x:45.2,y:42.8},0).wait(1).to({x:44.3,y:43.7},0).wait(1).to({x:43.4,y:44.6},0).wait(1).to({x:42.5,y:45.4},0).wait(1).to({x:41.6,y:46.3},0).wait(1).to({x:40.7,y:47.2},0).wait(1).to({x:39.8,y:48},0).wait(1).to({x:38.9,y:48.9},0).wait(1).to({x:38,y:49.7},0).wait(1).to({x:37.1,y:50.6},0).wait(1).to({x:36.3,y:51.5},0).wait(1).to({x:35.4,y:52.3},0).wait(1).to({x:34.5,y:53.2},0).wait(1).to({x:33.6,y:54.1},0).wait(1).to({x:32.7,y:54.9},0).wait(1).to({x:31.8,y:55.8},0).wait(1).to({x:30.9,y:56.6},0).wait(1).to({x:30,y:57.5},0).wait(1).to({x:29.1,y:58.4},0).wait(1).to({x:28.2,y:59.2},0).wait(1).to({x:27.4,y:60.1},0).wait(1).to({x:26.5,y:60.9},0).wait(1).to({x:25.6,y:61.8},0).wait(1).to({x:24.7,y:62.7},0).wait(1).to({x:23.8,y:63.5},0).wait(1).to({x:22.9,y:64.4},0).wait(1).to({x:22,y:65.3},0).wait(1).to({x:21.1,y:66.1},0).wait(1).to({x:20.2,y:67},0).wait(1).to({x:19.3,y:67.8},0).wait(1).to({x:18.5,y:68.7},0).wait(1).to({x:17.6,y:69.6},0).wait(1).to({x:16.7,y:70.4},0).wait(1).to({x:15.8,y:71.3},0).wait(1).to({x:14.9,y:72.2},0).wait(1).to({x:14,y:73},0).wait(1).to({x:13.1,y:73.9},0).wait(1).to({x:12.2,y:74.7},0).wait(1).to({x:11.3,y:75.6},0).wait(1).to({x:10.4,y:76.5},0).wait(1).to({x:9.6,y:77.3},0).wait(1).to({x:8.7,y:78.2},0).wait(1).to({x:7.8,y:79},0).wait(1).to({x:6.9,y:79.9},0).wait(1).to({x:6,y:80.8},0).wait(1).to({x:5.1,y:81.6},0).wait(1).to({x:4.2,y:82.5},0).wait(1).to({x:3.3,y:83.4},0).wait(1).to({x:2.4,y:84.2},0).wait(1).to({x:1.5,y:85.1},0).wait(1).to({x:0.7,y:85.9},0).wait(1).to({x:-0.2,y:86.8},0).wait(1).to({x:-1.1,y:87.7},0).wait(1).to({x:-2,y:88.5},0).wait(1).to({x:-2.9,y:89.4},0).wait(1).to({x:-3.8,y:90.3},0).wait(1).to({x:-4.7,y:91.1},0).wait(1).to({x:-5.6,y:92},0).wait(1).to({x:-6.5,y:92.8},0).wait(1).to({x:-7.4,y:93.7},0).wait(1).to({x:-8.2,y:94.6},0).wait(1).to({x:-9.1,y:95.4},0).wait(1).to({x:-10,y:96.3},0).wait(1).to({x:-10.9,y:97.1},0).wait(1).to({x:-11.8,y:98},0).wait(1).to({x:-12.7,y:98.9},0).wait(1).to({x:-13.6,y:99.7},0).wait(1).to({x:-14.5,y:100.6},0).wait(1).to({x:-15.4,y:101.5},0).wait(1).to({x:-16.3,y:102.3},0).wait(1).to({x:-17.1,y:103.2},0).wait(1).to({x:-18,y:104},0).wait(1).to({x:-18.9,y:104.9},0).wait(1).to({x:-19.8,y:105.8},0).wait(1).to({x:-20.7,y:106.6},0).wait(1).to({x:-21.6,y:107.5},0).wait(1).to({x:-22.5,y:108.4},0).wait(1).to({x:-23.4,y:109.2},0).wait(1).to({x:-24.3,y:110.1},0).wait(1).to({x:-25.2,y:110.9},0).wait(1).to({x:-26,y:111.8},0).wait(1).to({x:-26.9,y:112.6},0).wait(1).to({x:-27.8,y:113.5},0).wait(1).to({x:-28.7,y:114.3},0).wait(1).to({x:-29.6,y:115.2},0).wait(1));

    // Middle Spot (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p("AAJD4QgGAAgFgEQgFgDgFgFQgFgGgDgHQgEgIgBgHQAAgHABgHQABgGAEgFQADgFAFgCQAGgDAFABQAFABAGADQAGADAFAGQAFAGADAHQADAHABAHQABAIgCAGQgBAHgDAEQgEAFgFADQgEABgFAAIgCAAg");
    mask_1.setTransform(3.4,24.8);

    // Layer 2 copy 4
    this.instance_1 = new lib.Symbol1();
    this.instance_1.parent = this;
    this.instance_1.setTransform(67.4,21.3,1,1,0,0,0,151.1,112);

    var maskedShapeInstanceList = [this.instance_1];

    for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:66.5,y:22.2},0).wait(1).to({x:65.6,y:23},0).wait(1).to({x:64.7,y:23.9},0).wait(1).to({x:63.8,y:24.7},0).wait(1).to({x:63,y:25.6},0).wait(1).to({x:62.1,y:26.5},0).wait(1).to({x:61.2,y:27.3},0).wait(1).to({x:60.3,y:28.2},0).wait(1).to({x:59.4,y:29.1},0).wait(1).to({x:58.5,y:29.9},0).wait(1).to({x:57.6,y:30.8},0).wait(1).to({x:56.7,y:31.6},0).wait(1).to({x:55.8,y:32.5},0).wait(1).to({x:54.9,y:33.4},0).wait(1).to({x:54.1,y:34.2},0).wait(1).to({x:53.2,y:35.1},0).wait(1).to({x:52.3,y:36},0).wait(1).to({x:51.4,y:36.8},0).wait(1).to({x:50.5,y:37.7},0).wait(1).to({x:49.6,y:38.5},0).wait(1).to({x:48.7,y:39.4},0).wait(1).to({x:47.8,y:40.3},0).wait(1).to({x:46.9,y:41.1},0).wait(1).to({x:46,y:42},0).wait(1).to({x:45.2,y:42.8},0).wait(1).to({x:44.3,y:43.7},0).wait(1).to({x:43.4,y:44.6},0).wait(1).to({x:42.5,y:45.4},0).wait(1).to({x:41.6,y:46.3},0).wait(1).to({x:40.7,y:47.2},0).wait(1).to({x:39.8,y:48},0).wait(1).to({x:38.9,y:48.9},0).wait(1).to({x:38,y:49.7},0).wait(1).to({x:37.1,y:50.6},0).wait(1).to({x:36.3,y:51.5},0).wait(1).to({x:35.4,y:52.3},0).wait(1).to({x:34.5,y:53.2},0).wait(1).to({x:33.6,y:54.1},0).wait(1).to({x:32.7,y:54.9},0).wait(1).to({x:31.8,y:55.8},0).wait(1).to({x:30.9,y:56.6},0).wait(1).to({x:30,y:57.5},0).wait(1).to({x:29.1,y:58.4},0).wait(1).to({x:28.2,y:59.2},0).wait(1).to({x:27.4,y:60.1},0).wait(1).to({x:26.5,y:60.9},0).wait(1).to({x:25.6,y:61.8},0).wait(1).to({x:24.7,y:62.7},0).wait(1).to({x:23.8,y:63.5},0).wait(1).to({x:22.9,y:64.4},0).wait(1).to({x:22,y:65.3},0).wait(1).to({x:21.1,y:66.1},0).wait(1).to({x:20.2,y:67},0).wait(1).to({x:19.3,y:67.8},0).wait(1).to({x:18.5,y:68.7},0).wait(1).to({x:17.6,y:69.6},0).wait(1).to({x:16.7,y:70.4},0).wait(1).to({x:15.8,y:71.3},0).wait(1).to({x:14.9,y:72.2},0).wait(1).to({x:14,y:73},0).wait(1).to({x:13.1,y:73.9},0).wait(1).to({x:12.2,y:74.7},0).wait(1).to({x:11.3,y:75.6},0).wait(1).to({x:10.4,y:76.5},0).wait(1).to({x:9.6,y:77.3},0).wait(1).to({x:8.7,y:78.2},0).wait(1).to({x:7.8,y:79},0).wait(1).to({x:6.9,y:79.9},0).wait(1).to({x:6,y:80.8},0).wait(1).to({x:5.1,y:81.6},0).wait(1).to({x:4.2,y:82.5},0).wait(1).to({x:3.3,y:83.4},0).wait(1).to({x:2.4,y:84.2},0).wait(1).to({x:1.5,y:85.1},0).wait(1).to({x:0.7,y:85.9},0).wait(1).to({x:-0.2,y:86.8},0).wait(1).to({x:-1.1,y:87.7},0).wait(1).to({x:-2,y:88.5},0).wait(1).to({x:-2.9,y:89.4},0).wait(1).to({x:-3.8,y:90.3},0).wait(1).to({x:-4.7,y:91.1},0).wait(1).to({x:-5.6,y:92},0).wait(1).to({x:-6.5,y:92.8},0).wait(1).to({x:-7.4,y:93.7},0).wait(1).to({x:-8.2,y:94.6},0).wait(1).to({x:-9.1,y:95.4},0).wait(1).to({x:-10,y:96.3},0).wait(1).to({x:-10.9,y:97.1},0).wait(1).to({x:-11.8,y:98},0).wait(1).to({x:-12.7,y:98.9},0).wait(1).to({x:-13.6,y:99.7},0).wait(1).to({x:-14.5,y:100.6},0).wait(1).to({x:-15.4,y:101.5},0).wait(1).to({x:-16.3,y:102.3},0).wait(1).to({x:-17.1,y:103.2},0).wait(1).to({x:-18,y:104},0).wait(1).to({x:-18.9,y:104.9},0).wait(1).to({x:-19.8,y:105.8},0).wait(1).to({x:-20.7,y:106.6},0).wait(1).to({x:-21.6,y:107.5},0).wait(1).to({x:-22.5,y:108.4},0).wait(1).to({x:-23.4,y:109.2},0).wait(1).to({x:-24.3,y:110.1},0).wait(1).to({x:-25.2,y:110.9},0).wait(1).to({x:-26,y:111.8},0).wait(1).to({x:-26.9,y:112.6},0).wait(1).to({x:-27.8,y:113.5},0).wait(1).to({x:-28.7,y:114.3},0).wait(1).to({x:-29.6,y:115.2},0).wait(1));

    // Small Spot (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    mask_2.graphics.p("ABMEkQgIgCgDgHQgDgHAEgHQADgHAIgEQAIgEAIADQAIACADAGQADAHgEAHQgDAIgIADQgFACgFAAIgGAAg");
    mask_2.setTransform(10.5,29.2);

    // Layer 2 copy 3
    this.instance_2 = new lib.Symbol1();
    this.instance_2.parent = this;
    this.instance_2.setTransform(67.4,21.3,1,1,0,0,0,151.1,112);

    var maskedShapeInstanceList = [this.instance_2];

    for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:66.5,y:22.2},0).wait(1).to({x:65.6,y:23},0).wait(1).to({x:64.7,y:23.9},0).wait(1).to({x:63.8,y:24.7},0).wait(1).to({x:63,y:25.6},0).wait(1).to({x:62.1,y:26.5},0).wait(1).to({x:61.2,y:27.3},0).wait(1).to({x:60.3,y:28.2},0).wait(1).to({x:59.4,y:29.1},0).wait(1).to({x:58.5,y:29.9},0).wait(1).to({x:57.6,y:30.8},0).wait(1).to({x:56.7,y:31.6},0).wait(1).to({x:55.8,y:32.5},0).wait(1).to({x:54.9,y:33.4},0).wait(1).to({x:54.1,y:34.2},0).wait(1).to({x:53.2,y:35.1},0).wait(1).to({x:52.3,y:36},0).wait(1).to({x:51.4,y:36.8},0).wait(1).to({x:50.5,y:37.7},0).wait(1).to({x:49.6,y:38.5},0).wait(1).to({x:48.7,y:39.4},0).wait(1).to({x:47.8,y:40.3},0).wait(1).to({x:46.9,y:41.1},0).wait(1).to({x:46,y:42},0).wait(1).to({x:45.2,y:42.8},0).wait(1).to({x:44.3,y:43.7},0).wait(1).to({x:43.4,y:44.6},0).wait(1).to({x:42.5,y:45.4},0).wait(1).to({x:41.6,y:46.3},0).wait(1).to({x:40.7,y:47.2},0).wait(1).to({x:39.8,y:48},0).wait(1).to({x:38.9,y:48.9},0).wait(1).to({x:38,y:49.7},0).wait(1).to({x:37.1,y:50.6},0).wait(1).to({x:36.3,y:51.5},0).wait(1).to({x:35.4,y:52.3},0).wait(1).to({x:34.5,y:53.2},0).wait(1).to({x:33.6,y:54.1},0).wait(1).to({x:32.7,y:54.9},0).wait(1).to({x:31.8,y:55.8},0).wait(1).to({x:30.9,y:56.6},0).wait(1).to({x:30,y:57.5},0).wait(1).to({x:29.1,y:58.4},0).wait(1).to({x:28.2,y:59.2},0).wait(1).to({x:27.4,y:60.1},0).wait(1).to({x:26.5,y:60.9},0).wait(1).to({x:25.6,y:61.8},0).wait(1).to({x:24.7,y:62.7},0).wait(1).to({x:23.8,y:63.5},0).wait(1).to({x:22.9,y:64.4},0).wait(1).to({x:22,y:65.3},0).wait(1).to({x:21.1,y:66.1},0).wait(1).to({x:20.2,y:67},0).wait(1).to({x:19.3,y:67.8},0).wait(1).to({x:18.5,y:68.7},0).wait(1).to({x:17.6,y:69.6},0).wait(1).to({x:16.7,y:70.4},0).wait(1).to({x:15.8,y:71.3},0).wait(1).to({x:14.9,y:72.2},0).wait(1).to({x:14,y:73},0).wait(1).to({x:13.1,y:73.9},0).wait(1).to({x:12.2,y:74.7},0).wait(1).to({x:11.3,y:75.6},0).wait(1).to({x:10.4,y:76.5},0).wait(1).to({x:9.6,y:77.3},0).wait(1).to({x:8.7,y:78.2},0).wait(1).to({x:7.8,y:79},0).wait(1).to({x:6.9,y:79.9},0).wait(1).to({x:6,y:80.8},0).wait(1).to({x:5.1,y:81.6},0).wait(1).to({x:4.2,y:82.5},0).wait(1).to({x:3.3,y:83.4},0).wait(1).to({x:2.4,y:84.2},0).wait(1).to({x:1.5,y:85.1},0).wait(1).to({x:0.7,y:85.9},0).wait(1).to({x:-0.2,y:86.8},0).wait(1).to({x:-1.1,y:87.7},0).wait(1).to({x:-2,y:88.5},0).wait(1).to({x:-2.9,y:89.4},0).wait(1).to({x:-3.8,y:90.3},0).wait(1).to({x:-4.7,y:91.1},0).wait(1).to({x:-5.6,y:92},0).wait(1).to({x:-6.5,y:92.8},0).wait(1).to({x:-7.4,y:93.7},0).wait(1).to({x:-8.2,y:94.6},0).wait(1).to({x:-9.1,y:95.4},0).wait(1).to({x:-10,y:96.3},0).wait(1).to({x:-10.9,y:97.1},0).wait(1).to({x:-11.8,y:98},0).wait(1).to({x:-12.7,y:98.9},0).wait(1).to({x:-13.6,y:99.7},0).wait(1).to({x:-14.5,y:100.6},0).wait(1).to({x:-15.4,y:101.5},0).wait(1).to({x:-16.3,y:102.3},0).wait(1).to({x:-17.1,y:103.2},0).wait(1).to({x:-18,y:104},0).wait(1).to({x:-18.9,y:104.9},0).wait(1).to({x:-19.8,y:105.8},0).wait(1).to({x:-20.7,y:106.6},0).wait(1).to({x:-21.6,y:107.5},0).wait(1).to({x:-22.5,y:108.4},0).wait(1).to({x:-23.4,y:109.2},0).wait(1).to({x:-24.3,y:110.1},0).wait(1).to({x:-25.2,y:110.9},0).wait(1).to({x:-26,y:111.8},0).wait(1).to({x:-26.9,y:112.6},0).wait(1).to({x:-27.8,y:113.5},0).wait(1).to({x:-28.7,y:114.3},0).wait(1).to({x:-29.6,y:115.2},0).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(50.9,40.2,98.6,58.8);

// library properties:
  lib.properties = {
    width: 100,
    height: 70,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.00,
    webfonts: {},
    manifest: [],
    preloads: []
  };
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;


var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  handleComplete();
}
function handleComplete() {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  exportRoot = new lib.LOGOSMALLRED();
  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }
  //Code to support hidpi screens and responsive scaling.
  function makeResponsive(isResp, respDim, isScale, scaleType) {
    var lastW, lastH, lastS=1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width, h = lib.properties.height;
      var iw = window.innerWidth, ih=window.innerHeight;
      var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
      if(isResp) {
        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
          sRatio = lastS;
        }
        else if(!isScale) {
          if(iw<w || ih<h)
            sRatio = Math.min(xRatio, yRatio);
        }
        else if(scaleType==1) {
          sRatio = Math.min(xRatio, yRatio);
        }
        else if(scaleType==2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      canvas.width = w*pRatio*sRatio;
      canvas.height = h*pRatio*sRatio;
      canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
      canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
      stage.scaleX = pRatio*sRatio;
      stage.scaleY = pRatio*sRatio;
      lastW = iw; lastH = ih; lastS = sRatio;
    }
  }
  makeResponsive(false,'both',false,1);
  fnStartAnimation();
}
