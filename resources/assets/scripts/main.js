// import external dependencies
import 'jquery';

import '../img/more-team.png';
import '../img/more-post.png';
import '../img/more-work.png';

// Require the polyfill before requiring any other modules.
require('intersection-observer');

// Import everything from autoload
import './autoload/**/*'

import './vendor/**/*';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';
import $ from "jquery";

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());

$(window).load(function() {

  showOnScroll();

});

$(window).scroll(function () {

  showOnScroll();

});

function showOnScroll() {

  $('.un-photo').each(function () {

    let element = $(this);

    if (element.offset().top <= ($(window).scrollTop() + ($(window).height() / 1.2))) {

      element.addClass('show');

    }

  });

  console.log('show');

}
