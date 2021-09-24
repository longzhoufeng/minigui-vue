import classNames from 'classnames';
import { getComponentFromProp, getOptionProps, getListeners } from '../_util/props-util';
import Input from './Input';
import Icon from '../icon';
import inputProps from './inputProps';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';

const ActionMap = {
  click: 'click',
  hover: 'mouseover',
};

export default {
  name: 'AInputPassword',
  mixins: [BaseMixin],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change.value',
  },
  props: {
    ...inputProps,
    prefixCls: PropTypes.string.def('minigui-input-password'),
    inputPrefixCls: PropTypes.string.def('minigui-input'),
    action: PropTypes.string.def('click'),
    visibilityToggle: PropTypes.bool.def(true),
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    onVisibleChange() {
      if (this.disabled) {
        return;
      }
      this.setState({
        visible: !this.visible,
      });
    },
    getIcon() {
      const { prefixCls, action } = this.$props;
      const iconTrigger = ActionMap[action] || '';
      const iconProps = {
        props: {
          type: this.visible ? 'eye' : 'eye-invisible',
        },
        on: {
          [iconTrigger]: this.onVisibleChange,
          mousedown: e => {
            e.preventDefault();
          },
          mouseup: e => {
            e.preventDefault();
          },
        },
        class: `${prefixCls}-icon`,
        key: 'passwordIcon',
      };
      return <Icon {...iconProps} />;
    },
  },
  render() {
    const {
      prefixCls,
      inputPrefixCls,
      size,
      suffix,
      visibilityToggle,
      ...restProps
    } = getOptionProps(this);
    const suffixIcon = visibilityToggle && this.getIcon();
    const inputClassName = classNames(prefixCls, {
      [`${prefixCls}-${size}`]: !!size,
    });
    const inputProps = {
      props: {
        ...restProps,
        prefixCls: inputPrefixCls,
        size,
        suffix: suffixIcon,
        prefix: getComponentFromProp(this, 'prefix'),
        addonAfter: getComponentFromProp(this, 'addonAfter'),
        addonBefore: getComponentFromProp(this, 'addonBefore'),
      },
      attrs: {
        ...this.$attrs,
        type: this.visible ? 'text' : 'password',
      },
      class: inputClassName,
      ref: 'input',
      on: getListeners(this),
    };
    return <Input {...inputProps} />;
  },
};
