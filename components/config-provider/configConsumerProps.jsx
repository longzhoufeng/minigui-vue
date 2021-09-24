import defaultRenderEmpty from './renderEmpty';

export const ConfigConsumerProps = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return `minigui-${suffixCls}`;
  },
  renderEmpty: defaultRenderEmpty,
};
