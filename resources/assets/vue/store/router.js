import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Pages
import home from '../pages/home';
import aboutPage from '../pages/aboutPage';
import contactPage from '../pages/contactPage';
import blogPage from '../pages/blogPage';
import singlePost from '../pages/singlePost';
import portfolioPage from '../pages/portfolioPage';
import singlePortfolio from '../pages/singlePortfolio';


const router = new VueRouter({
  mode: 'history',
  base: '',
  linkExactActiveClass: 'mobile-nav__item--current',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      // children: [
      //   {
      //     path: '',
      //     name: 'Home',
      //     component: home,
      //     pathToRegexpOptions: {strict: true},
      //     // meta: { requiresAuth: true },
      //   },
      // ]
    },
    {
      path: '/about-us/',
      name: 'About',
      component: aboutPage,
      pathToRegexpOptions: {strict: true},
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: contactPage,
      pathToRegexpOptions: {strict: true},
    },
    {
      path: '/blog/',
      name: 'Blog',
      component: blogPage,
      pathToRegexpOptions: {strict: true},
    },
    {
      path: '/blog/:id/',
      name: 'Single Post',
      component: singlePost,
      pathToRegexpOptions: {strict: true},
    },
    {
      path: '/portfolio/',
      name: 'Portfolio',
      component: portfolioPage,
      pathToRegexpOptions: {strict: true},
    },
    {
      path: '/portfolio/:id/',
      name: 'Single Portfolio',
      component: singlePortfolio,
      pathToRegexpOptions: {strict: true},
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

export default router;
