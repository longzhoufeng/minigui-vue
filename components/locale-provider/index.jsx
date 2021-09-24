import PropTypes from '../_util/vue-types';
import * as moment from 'moment';
import interopDefault from '../_util/interopDefault';
import { changeConfirmLocale } from '../modal/locale';
import Base from '../base';
import warning from '../_util/warning';
export const MINIGUI_MARK = 'internalMark';
function setMomentLocale(locale) {
  if (locale && locale.locale) {
    interopDefault(moment).locale(locale.locale);
  } else {
    interopDefault(moment).locale('en');
  }
}

const LocaleProvider = {
  name: 'ALocaleProvider',
  props: {
    locale: PropTypes.object.def(() => ({})),
    _MINIGUI_MARK__: PropTypes.string,
  },
  data() {
    warning(
      this._MINIGUI_MARK__ === MINIGUI_MARK,
      'LocaleProvider',
      '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead',
    );
    return {
      antLocale: {
        ...this.locale,
        exist: true,
      },
    };
  },
  provide() {
    return {
      localeData: this.$data,
    };
  },
  watch: {
    locale(val) {
      this.antLocale = {
        ...this.locale,
        exist: true,
      };
      setMomentLocale(val);
      changeConfirmLocale(val && val.Modal);
    },
  },
  created() {
    const { locale } = this;
    setMomentLocale(locale);
    changeConfirmLocale(locale && locale.Modal);
  },
  beforeDestroy() {
    changeConfirmLocale();
  },
  render() {
    return this.$slots.default ? this.$slots.default[0] : null;
  },
};

/* istanbul ignore next */
LocaleProvider.install = function(Vue) {
  Vue.use(Base);
  Vue.component(LocaleProvider.name, LocaleProvider);
};

export default LocaleProvider;
