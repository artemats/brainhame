import Vue from 'vue';
import {TweenLite, Power2} from 'gsap';
import 'gsap/ScrollToPlugin';
// import scrollMonitor from 'scrollmonitor';
// import '../libs/ScrollToPlugin.min';

Vue.directive('scroll-to', {
  /* el, binding, vnode */
  bind: function (el, binding) {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      TweenLite.to(window, 2, {
        scrollTo: {
          y: binding.value,
          offsetY: 32,
          autoKill: false
        },
        ease: Power2.easeOut
      });
    });
  },
});


Vue.directive('viewport', {
  /* el, binding, vnode */
  bind: function () {
    // let elementWatcher = scrollMonitor.create(el);

    // let callback = () => {
    //   if (typeof binding.value === 'function') {
    //     // binding.value();
    //     // binding.value.bind(vnode.context)(vnode);
    //     binding.value.bind(vnode.context)(el);
    //
    //     if (binding.modifiers.once) {
    //       elementWatcher.destroy();
    //     }
    //   }
    // };

    // let arg = binding.arg ? binding.arg : 'enter';
    // console.log(elementWatcher, arg, callback);

    // switch (arg) {
    //   case 'full':
    //   case 'fully':
    //     elementWatcher.fullyEnterViewport(callback);
    //     break;
    //   case 'enter':
    //   default:
    //     elementWatcher.enterViewport(callback);
    //     break;
    // }
  },
});
