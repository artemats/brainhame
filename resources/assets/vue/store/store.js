/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import * as qs from 'qs';

Vue.use(Vuex);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default new Vuex.Store({
  state: {
    loading: true,
    viewData: window.viewData,
  },
  mutations: {
    setter(state, object) {
      Object.entries(object).forEach(([key, value]) => {
        Vue.set(state, key, value);
      });
    },
    setView(state, object) {
      Object.entries(object).forEach(([key, value]) => {
        Vue.set(state.viewData, key, value);
      });
    }
  },
  actions: {
    setup({dispatch}) {
      let data = {
        action: 'getPageFields',
        // action: 'getSome',
        slug: 'slug',
      };

      dispatch('send', data).then(res => {
        console.log(res);
      });

      // dispatch('sendRequest', data).then(res => {
      //   console.log(res);
      // });
    },
    send({commit}, requestBody) {
      return axios.post(window.ajaxurl, qs.stringify(requestBody));
    },
    sendRequest({commit}, requestBody) {
      return new Promise(function (resolve) {
        $.post(window.ajaxurl, requestBody, function (res) {
          console.warn('requestBody', res);
          commit('setter', {response: res.data});
          resolve(res);
        });
      });
    },
  },
  getters: {
  }
});
