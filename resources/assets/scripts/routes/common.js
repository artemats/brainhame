import {cf7Extension} from "../classes/cf7Extension";
import luxy from 'luxy.js';
// import {SmoothScroll} from '../vendor/SmoothScroll';

export default {
  init() {
    new cf7Extension();
    // JavaScript to be fired on all pages
    document.querySelector('.hamburger').addEventListener('click', function() {
      this.classList.toggle('active');
    });


    // $(document).on('click', '.field input', )
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    // $(window).on("load",function() {
    //   $("body").mCustomScrollbar({
    //     theme:"dark"
    //   });
    // });

    luxy.init();

    // new SmoothScroll(document,90,9);

    // let scroll = new Smooth({ native: true, preload: true });
    // scroll.init();
  },
};
