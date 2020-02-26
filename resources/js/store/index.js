import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from '../store/modules/user';

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug
});
