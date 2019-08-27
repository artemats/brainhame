import Vue from 'vue';

import TweenLite from 'gsap/TweenLite';
import {TweenMax, Linear} from 'gsap';
// import SplitText from '../libs/SplitText.min';
import 'gsap/CSSPlugin';
import scrollParallax from 'scrollmonitor-parallax';
import scrollMonitor from 'scrollmonitor';

const SplitText = require('../libs/SplitText.min');

/* global DOMParser */
Vue.mixin({
  data() {
    return {
      translates: window.translates,
    };
  },
  methods: {
    Translates(slug) {
      let result = this.translates.filter(result => result.slug === slug);

      return (result.length) ? result[0].title : this.ucFirst(slug.replace('_', ' '));
    },
    ucFirst(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    ajaxUrl() {
      return window.ajaxurl;
    },
    formatPrice(number) {
      number = parseInt(number);

      return number.toLocaleString('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
    },
    convertToNode(htmlString) {
      let div = document.createElement('div');
      div.innerHTML = htmlString.trim();

      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild;
    },
    localeDate(date, locale = 'uk-UK') {
      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

      return date.toLocaleDateString(locale, options).replace(' р.', '');
    },
    convertStringToDate(string) {
      return new Date(this.stringToIso(string))
    },
    stringToIso(string) {
      let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;

      return string.replace(pattern, '$3-$2-$1')
    },
    isInclude(item) {
      let check = false;
      if (item && item.users) {
        check = item.users.includes(item.user_id);
      }
      return check;
    },
    parseGetParams(get_param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(get_param);
    },
    animatePlaceholder(selector, active = 'active') {
      let $inputs = $(selector).find('input, textarea');

      if ($inputs) {
        $inputs.each((index, item) => {
          let $input = $(item),
            $wrap = $input.closest(selector);

          if ($input.val()) {
            $wrap.addClass(active);
          }
        });

        $inputs.focus(function () {
          let $input = $(this);
          if (!$input.val()) {
            $input.closest(selector).addClass(active);
          }
        });

        $inputs.blur(function () {
          let $input = $(this);
          if (!$input.val()) {
            $input.closest(selector).removeClass(active);
          }
        });
      }
    },
    drawVLine(h) {
      let line = document.querySelector('.v-line'),
        lHeight = line.offsetHeight;

      let t = TweenLite.to(line, 1.5, {height: lHeight + h, paused: true});

      return new Promise(function (resolve) {
        t.play().eventCallback("onComplete", () => {
          // console.log('complate');
          resolve();
        });
      });
    },
    createCirclePath(d) {
      let r = d / 2;

      return `M ${r}, ${r} m -${r}, 0 a ${r},${r} 0 1,0 ${d},0 a ${r},${r} 0 1,0 -${d},0`;
    },
    formatNumber(number) {
      let str = String(number);
      return str.padStart(2, '0')
    },
    transformToObject(string, mimeType = 'text/html') {
      let parser = new DOMParser();
      let dom = parser.parseFromString(string, mimeType);

      return dom.body.firstChild;
    },
    showImageAnimation(el) {
      let i = this.dur || 1.4,
        r = this.scale ? 1 + 1 * this.scale : 1.5,
        // a = this.fade ? 0 : 1;
        a = this.fade ? 1 : 0;

      TweenMax.fromTo(el, i, {scale: r, opacity: a, ease: "Power5.easeOut"},
        {opacity: 1, scale: 1, clearProps: "transform"});
      // .to(
      // el, i, {opacity: a, ease: "Power5.easeOut", clearProps: "transform"},
      // 0);
    },
    showTextAnimation(el, callback = false) {
      let i = el.getAttribute("data-ratio") ? el.getAttribute("data-ratio") : 0.3,
        a = el.getAttribute("data-horizontal-ratio"),
        s = el.getAttribute("data-dur") || this.dur || 1.4,
        d = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0,
        // o = this.pageWidth / 3,
        o = document.documentElement.clientHeight / 2,
        l = o * i,
        c = o * a;

      let to = {opacity: 1, y: 0, x: 0, delay: d, clearProps: "transform"};

      if (typeof callback === 'function') {
        to.onComplete = callback;
      }

      TweenMax.fromTo(el, s, {opacity: 0, y: l, x: c, ease: "Power4.easeOut"}, to);
    },
    splitLines(elems) {
      new SplitText(elems, {
        type: "lines",
        linesClass: "lines"
      })
    },
    setLines(elems, cls = 'lines') {
      elems.forEach((item, index) => {
        item.classList.add(cls);

        item.setAttribute('data-delay', this.getDelay(index));
      });
    },
    getDelay(index) {
      return  Number((0.1 * index).toFixed(1))
    },
    onShow(element, callback) {
      if (element) {
        let elementWatcher = scrollMonitor.create(element);

        elementWatcher.enterViewport(function () {
          if (typeof callback === 'function') {
            callback(element);

            // if (binding.modifiers.once) {
            elementWatcher.destroy();
            // }
          }
        });
      }
    },
    initParallax(domElement) {
      if (window.innerWidth < 1200) {
        return;
      }

      setTimeout(()=>{
      // Create a root element. Parallax will start when this
      // element enters the viewport and stop when it exits.
      let parallaxRoot = scrollParallax.create(domElement);

      // to make an element scroll at a speed relative to the
      // scroll parent, just add a value for speed.
      // let parallaxChild2 = parallaxRoot.add(domElement, 0.5);

      // for more complex animations you can start and end positions.
      // If it's left blank, the start position is taken from the element's CSS.
      parallaxRoot.add(
        domElement, {
          start: {
            // opacity: 0
          },
          end: {
            // x: 100,
            y: 50,
            // z: 100,
            // opacity: 0.7
          },
          easing: {
            // x: eases.linear,
            y: Linear.ease,
            // y: Power1.easeOut,
            // z: eases.circIn,
            // opacity: eases.bounceIn
          }
        }
      );
      }, 300);
    },
    watchScroll() {
      let scrollY = window.scrollY,
        wHeight = window.innerHeight,
        scrollSize = scrollY + wHeight;

      let line = document.querySelector('.v-line'),
        lHeight = line.offsetHeight;

      if ( lHeight < scrollSize ) {
        TweenLite.to(line, 1.5, {height: scrollSize});
      }
    },
  }
});
