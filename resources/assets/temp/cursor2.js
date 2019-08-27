// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     var i = Object.assign || function (e) {
//       for (var t = 1; t < arguments.length; t++) {
//         var i = arguments[t];
//         for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
//       }
//       return e
//     };
//     t.a = {
//       init: function init(t, r, n, o, s, a, l, u, c) {
//         var h, d = e("body"),
//           f = e('a, button, img, canvas, [class^="bg-img"], .owl-products-categories .owl-carousel .owl-item-content, .back-to-top, .slider-cursor'),
//           p = d.hasClass("ajax-loaded"), g = d.data("images-root"), m = document.querySelector("#canvas-loader"),
//           v = document.querySelectorAll("[data-canvas-image]"),
//           y = (document.querySelector("#canvas-ajax-loader"), e(".menu-images-container")),
//           _ = (document.querySelectorAll(".menu-images-container .canvas-ripple"), e(".back-to-top")),
//           b = g + "/animations/img/dmaps/512x512/clouds.jpg", x = e("body, #site-container, #menu-container"),
//           w = e(".custom-cursor"), T = e(".cc-1"), C = e(".cc-2"), S = e(".page-loader"), E = e(".ajax-page-loader"),
//           P = document.getElementById("site-container"), M = document.getElementById("menu-container"),
//           O = e(".vs-scrollbar"), R = e("#header"), D = R.find(".logo"), A = e("#menu-container"), k = A.find("ul"),
//           I = k.find("li"), L = I.find("a"), N = R.find(".btn-menu"), F = N.find(".bars").find("> span"),
//           B = e(".contact-form"), j = null, z = null, U = [], q = {
//             displacementImageSize: (e(window).width(), [420, 444]),
//             autoPlay: !0,
//             autoPlaySpeed: [10, 3],
//             displacementScale: [-120, 10],
//             events: [],
//             imageBehavior: !1,
//             cover: !1,
//             dispatchPointerOver: !1
//           }, H = new l;
//         if (null == (h = H.isMobile()) ? x.addClass("isDesktop") : x.addClass("isMobile"), null === h) new a({
//           prefetch: !1,
//           xhrTimeout: 15e3,
//           dependencies: {PixiRipple: u, canvasLoaderConfig: q}
//         });
//         O.remove(), d.on("loaderEnd", function () {
//           null == h && (j = new n(P, {
//             smooth: {callback: onScroll},
//             parallax: document.querySelectorAll("[data-smooth-parallax]")
//           }), (z = new n(M)).off())
//         });
//         var W = 0, X = !1, G = !0, V = new TimelineMax({paused: !0});
//
//         function onScroll(e) {
//           var t = Math.floor(e);
//           t != W && (e < 200 ? (G = !0, X && (V.reverse(), X = !1)) : (X = !0, G && (V.play(), G = !1))), W = t
//         }
//
//         if (V.fromTo(_.find(".item-line"), .3, {scaleX: 0}, {
//           scaleX: 1,
//           transformOrigin: "left top",
//           ease: Power1.easeOut
//         }, "start").fromTo(_.find(".item-text"), .6, {autoAlpha: 0, x: 10}, {
//           autoAlpha: 1,
//           x: 0,
//           ease: Power1.easeOut
//         }, "start"), null != h ? (window.scrollTo(0, 0), _.remove()) : _.on("click", function () {
//           return j.instance.scrollTo(0)
//         }), Array.prototype.forEach.call(v, function (e) {
//           return !t.inArray(e.dataset.canvasImage, U) && U.push(e.dataset.canvasImage)
//         }), PIXI.loader.add(U), p) {
//           var $ = new TimelineMax({
//             paused: !0, onComplete: function onComplete() {
//               t.dispachEvent(d, "loaderEnd")
//             }
//           });
//           $.addCallback(function clearAjaxLoaderRipple() {
//             TweenMax.to(window.rcal.displacementFilter.scale, .8, {x: 0, y: 0, ease: Power1.easeOut})
//           }, "start+=0.5").to(E, .8, {autoAlpha: 0, ease: Power1.easeOut}, "+=0.8"), $.play()
//         } else {
//           var Y = new u(m, i({}, q, {mainImage: m.dataset.canvasImage, displacementImage: b})), K = new TimelineMax({
//             paused: !0, onComplete: function onComplete() {
//               t.dispachEvent(d, "loaderEnd"), S.remove()
//             }
//           });
//           K.addCallback(function clearloaderRipple() {
//             TweenMax.to(Y.displacementFilter.scale, .8, {x: 0, y: 0, ease: Power1.easeOut})
//           }, "start+=0.5").to(S, .8, {autoAlpha: 0, ease: Power1.easeOut}, "+=0.8"), e(window).on("load", function () {
//             K.play()
//           })
//         }
//         var Z = new r(A, N, {reverseTimeScale: 1.5});
//         y.hide();
//         var Q = {a: 20};
//         if (Z.menuTimeline.to(F.eq(1), .3, {y: -14, scaleX: .8, rotation: 90}, "start").to(F.eq(0), .25, {
//           y: 4,
//           x: -2.5
//         }, "start").to(F.eq(2), .25, {y: -4, x: 2.5}, "start").to(F.eq(1), .4, {
//           y: 40,
//           ease: Power2.easeOut
//         }, "start+=0.3").to(F.eq(0), .5, {
//           x: 0,
//           y: 4,
//           rotation: 225,
//           ease: Power1.easeOut
//         }, "start+=0.3").to(F.eq(2), .5, {
//           x: 0,
//           y: -4,
//           rotation: -225,
//           ease: Power1.easeOut
//         }, "start+=0.3").to(D, .6, {autoAlpha: 0, ease: Power1.easeOut}, "start+=0.3").from(A, .5, {
//           autoAlpha: 0,
//           ease: Power1.easeOut
//         }, "start+=0.3").staggerFrom(I, .8, {autoAlpha: 0, y: 50}, "0.2", "+=0").to(Q, .6, {
//           a: 0,
//           onUpdate: function onUpdate(e) {
//             return t.updateBlur(k, Q)
//           },
//           ease: Power1.easeOut
//         }, "-=1.6"), Z.init(), null == h) {
//           var J = !1;
//           A.on("menu:open", function () {
//             if (j.off(), z.on(), !J) {
//               J = !0;
//               var t = k.find(".current-menu-item");
//               if (t.length) {
//                 var i = Math.floor(t.offset().top - e(window).height() / 2 + t.outerHeight() / 2);
//                 setTimeout(function () {
//                   z.instance.scrollTo(i)
//                 }, 1e3)
//               }
//             }
//           }), A.on("menu:close", function () {
//             z.off(), j.on()
//           }), e(window).width() > 992 && (A.on("menu:open", function () {
//             y.show()
//           }), A.on("menu:close", function () {
//             y.fadeOut()
//           }))
//         } else A.on("menu:open", function () {
//           d.addClass("o-h")
//         }), A.on("menu:closed", function () {
//           d.removeClass("o-h")
//         });
//         var ee = {};
//         null === h && e(window).width() > 992 && L.on("mouseover", function () {
//           var i = e(this).data("menu-img"), r = e("." + i);
//           if (!t.isDefined(ee["tl-" + i])) {
//             var n = new TimelineMax({paused: !0});
//             n.fromTo(r, 1, {x: 15, autoAlpha: 0}, {
//               x: 0,
//               autoAlpha: 1,
//               ease: Power1.easeOut
//             }, "start"), ee["tl-" + i] = n
//           }
//           ee["tl-" + i].play().timeScale(1)
//         }).on("mouseleave", function () {
//           var t = e(this).data("menu-img");
//           ee["tl-" + t].reverse().timeScale(1.5)
//         });
//         var te = new c.Controller, ie = [];
//         e.each(L, function () {
//           var i = e(this), r = i.find(".phonetic"), n = new SplitText(r, {type: "words, chars"}), o = {a: 20},
//             s = new TimelineMax;
//           s.to(o, .5, {
//             a: 0, onUpdate: function onUpdate(e) {
//               return t.updateBlur(i, o)
//             }, ease: Power1.easeOut
//           }, "start"), s.staggerFrom(n.chars, .6, {y: 5, autoAlpha: 0, ease: Power1.easeOut}, .01, "-=0.3");
//           var a = new c.Scene({triggerElement: i, triggerHook: .65}).setTween(s);
//           ie.push(a)
//         }), te.addScene(ie), B.length && (new o(B, {
//           selectors: {
//             group: ".gfield",
//             label: ".gfield_label",
//             input: ".ginput_container_text input, .ginput_container_email input"
//           }, labelEffect: {duration: .3, ease: Power2.easeOut}
//         }), new s(B.find("textarea"), "Message")),
//           e(window).on("mousemove", function (e) {
//           w.show(), TweenMax.set(T, {x: e.pageX, y: e.pageY}), TweenMax.to(C, 1, {
//             x: e.pageX,
//             y: e.pageY,
//             ease: Power4.easeOut
//           })
//         }), e(document).mouseleave(function () {
//           TweenMax.to(w, .8, {autoAlpha: 0, ease: Power4.easeOut})
//         }), e(document).mouseenter(function () {
//           TweenMax.to(w, .8, {autoAlpha: 1, ease: Power4.easeOut})
//         });
//         var re = T.css("background-color"), ne = C.css("background-color");
//         f.on("mouseover", function () {
//           var t = e(this).hasClass("slider-cursor"), i = t ? "#000" : "transparent", r = t ? 35 : 25, n = t ? 1 : 0;
//           t && TweenMax.set(C, {autoAlpha: 0}), TweenMax.to(T, 1, {
//             width: r,
//             height: r,
//             backgroundColor: i,
//             ease: Elastic.easeOut
//           }), TweenMax.to(T.find("svg"), .4, {
//             autoAlpha: n,
//             ease: Power2.easeOut,
//             delay: 0
//           }), TweenMax.to(C, 1, {width: 25, height: 25, backgroundColor: "transparent", ease: Elastic.easeOut})
//         }).on("mouseleave", function () {
//           e(this).hasClass("slider-cursor") && TweenMax.set(C, {autoAlpha: 1}), TweenMax.set(T.find("svg"), {autoAlpha: 0}), TweenMax.to(T, .6, {
//             width: 10,
//             height: 10,
//             backgroundColor: re,
//             ease: Power1.easeOut
//           }), TweenMax.to(C, .6, {width: 10, height: 10, backgroundColor: ne, ease: Power1.easeOut})
//         }), e(".mkx-modal-loop").length && (e(".mkx-modal-loop").iziModal({
//           history: !1,
//           iframe: !0,
//           fullscreen: !0,
//           header: !1,
//           radius: 0,
//           loop: !0,
//           bottom: null,
//           borderBottom: !1,
//           overlayColor: "rgba(0, 0, 0, 0.95)"
//         }), e(".mkx-modal-loop").iziModal("setHeader", !1)), e(document).on("keydown", function (e) {
//           32 == e.keyCode && j.off()
//         }), e(document).on("keyup", function (e) {
//           32 == e.keyCode && j.on()
//         })
//       }
//     }
//   }).call(this, i(4))
// }
