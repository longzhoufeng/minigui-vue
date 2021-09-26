import miniguiDirective from '../_util/miniguiDirective';
const base = {};
const install = function(Vue) {
  base.Vue = Vue;
  Vue.use(miniguiDirective);
};
base.install = install;

export default base;
