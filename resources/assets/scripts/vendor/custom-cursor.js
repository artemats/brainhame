import {TweenMax, Power1, Power2, Power4, Elastic } from 'gsap';

(function ($) {
  $(function () {
    if (!document.body.classList.contains('logged-in')) {

      var w = $(".custom-cursor"), T = $(".cc-1"), C = $(".cc-2");
      $(window).on("mousemove", function (e) {
        w.show();
        TweenMax.set(T, {x: e.pageX, y: e.pageY});
        TweenMax.to(C, 1, {
          x: e.pageX,
          y: e.pageY,
          ease: Power4.easeOut
        })
      });

      var re = T.css("background-color"),
        ne = C.css("background-color");

      var selector = 'a, button, input, img, canvas, [class^="bg-img"], .active-cursor, .back-to-top, .slider-cursor';

      $('body').on("mouseover", selector, function () {
        var t = $(this).hasClass("slider-cursor"),
          i = t ? "#000" : "transparent",
          r = t ? 35 : 25,
          n = t ? 1 : 0;


        if ($(this).hasClass("slider-cursor")) {
          TweenMax.set(C, {autoAlpha: 0});
        }

        TweenMax.to(T, 1, {
          width: r,
          height: r,
          backgroundColor: i,
          ease: Elastic.easeOut
        });

        TweenMax.to(T.find("svg"), .4, {
          autoAlpha: n,
          ease: Power2.easeOut,
          delay: 0
        });

        TweenMax.to(C, 1, {width: 25, height: 25, backgroundColor: "transparent", ease: Elastic.easeOut});
      }).on("mouseleave", selector, function () {
        if ($(this).hasClass("slider-cursor")) {
          TweenMax.set(C, {autoAlpha: 1});
        }

        TweenMax.set(T.find("svg"), {autoAlpha: 0});

        TweenMax.to(T, .6, {
          width: 10,
          height: 10,
          backgroundColor: re,
          ease: Power1.easeOut
        });

        TweenMax.to(C, .6, {width: 10, height: 10, backgroundColor: ne, ease: Power1.easeOut});
      });

    }
  });
})(jQuery);
