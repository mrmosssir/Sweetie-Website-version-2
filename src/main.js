import Vue from 'vue';
import axios from 'axios';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './bus';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zhTW',
});

Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW,
  },
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
