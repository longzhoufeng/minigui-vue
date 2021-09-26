import ref from 'vue-ref';
import { miniguiInput } from './miniguiInputDirective';
import { miniguiDecorator } from './FormDecoratorDirective';
import { miniguiPortal } from './portalDirective';

export default {
  install: Vue => {
    Vue.use(ref, { name: 'minigui-ref' });
    miniguiInput(Vue);
    miniguiDecorator(Vue);
    miniguiPortal(Vue);
  },
};
