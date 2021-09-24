export function miniguiDecorator(Vue) {
  return Vue.directive('decorator', {});
}

export default {
  // just for tag
  install: Vue => {
    miniguiDecorator(Vue);
  },
};
