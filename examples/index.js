import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import Minigui from 'minigui-vue';
import 'minigui-vue/style.js';

Vue.use(Minigui);

new Vue({
  el: '#app',
  render: h => h(App),
});
