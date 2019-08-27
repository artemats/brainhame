// Require the polyfill before requiring any other modules.
require('intersection-observer');

import Vue from 'vue';
import './store/mixin';
import './store/directives';

import store from './store/store';
import router from './store/router';

import 'vue-multi-ref';

import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs);

import vSelect from 'vue-select'
Vue.component('v-select', vSelect);

// import ES6 style
import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin);


router.beforeResolve((to, from, next) => {
  // console.log(to);
  document.body.classList.add('active-preloader');
  store.commit('setter', {loading: true,});

  next()
});

router.afterEach(() => {
  // document.body.classList.remove('active-preloader');
  // store.commit('setter', {loading: false,});
});

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     store.dispatch('setup');
//   }, 5000);
// });

import app from './pages/app';
import preloader from './component/preloader';
import canvasLogo from './component/canvas-logo';


const renderPage = document.querySelector('[data-vue=render-page]');
if (renderPage) {
  new Vue({
    el: renderPage,
    store,
    router,
    render: h => h(app),
    // render (c) { return c('router-view') }
  });
}

const preloaderBlock = document.querySelector('[data-vue=preloader]');
if ( preloaderBlock ) {
    new Vue({
      el: preloaderBlock,
      render: h => h(preloader),
      store,
      router,
    });
}

const logos = document.querySelectorAll('[data-vue=canvas-logo]');
if ( logos.length ) {
  logos.forEach(element => {
    let container = document.createElement('div');
    element.innerHTML = '';
    element.append(container);

    new Vue({
      el: container,
      render: h => h(canvasLogo),
      store,
      router,
    });
  });
}
