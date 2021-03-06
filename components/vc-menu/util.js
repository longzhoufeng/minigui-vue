import isMobile from './utils/isMobile';

export function noop() {}

export function getKeyFromChildrenIndex(child, menuEventKey, index) {
  const prefix = menuEventKey || '';
  return child.key === undefined ? `${prefix}item_${index}` : child.key;
}

export function getMenuIdFromSubMenuEventKey(eventKey) {
  return `${eventKey}-menu-`;
}

export function loopMenuItem(children, cb) {
  let index = -1;
  children.forEach(c => {
    index++;
    if (c && c.type && c.type.isMenuItemGroup) {
      c.$slots.default.forEach(c2 => {
        index++;
        c.componentOptions && cb(c2, index);
      });
    } else {
      c.componentOptions && cb(c, index);
    }
  });
}

export function loopMenuItemRecursively(children, keys, ret) {
  if (!children || ret.find) {
    return;
  }
  children.forEach(c => {
    if (ret.find) {
      return;
    }
    if (c.data && c.data.slot && c.data.slot !== 'default') {
      return;
    }
    if (c && c.componentOptions) {
      const options = c.componentOptions.Ctor.options;
      if (!options || !(options.isSubMenu || options.isMenuItem || options.isMenuItemGroup)) {
        return;
      }
      if (keys.indexOf(c.key) !== -1) {
        ret.find = true;
      } else if (c.componentOptions.children) {
        loopMenuItemRecursively(c.componentOptions.children, keys, ret);
      }
    }
  });
}

export const menuAllProps = {
  props: [
    'defaultSelectedKeys',
    'selectedKeys',
    'defaultOpenKeys',
    'openKeys',
    'mode',
    'getPopupContainer',
    'openTransitionName',
    'openAnimation',
    'subMenuOpenDelay',
    'subMenuCloseDelay',
    'forceSubMenuRender',
    'triggerSubMenuAction',
    'level',
    'selectable',
    'multiple',
    'visible',
    'focusable',
    'defaultActiveFirst',
    'prefixCls',
    'inlineIndent',
    'parentMenu',
    'title',
    'rootPrefixCls',
    'eventKey',
    'active',
    'popupAlign',
    'popupOffset',
    'isOpen',
    'renderMenuItem',
    'manualRef',
    'subMenuKey',
    'disabled',
    'index',
    'isSelected',
    'store',
    'activeKey',
    'builtinPlacements',
    'overflowedIndicator',

    // the following keys found need to be removed from test regression
    'attribute',
    'value',
    'popupClassName',
    'inlineCollapsed',
    'menu',
    'theme',
    'itemIcon',
    'expandIcon',
  ],
  on: [
    'select',
    'deselect',
    'destroy',
    'openChange',
    'itemHover',
    'titleMouseenter',
    'titleMouseleave',
    'titleClick',
  ],
};

export const getWidth = elem => {
  let width =
    elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
  if (width) {
    width = +width.toFixed(6);
  }
  return width || 0;
};

export const setStyle = (elem, styleProperty, value) => {
  if (elem && typeof elem.style === 'object') {
    elem.style[styleProperty] = value;
  }
};

export const isMobileDevice = () => {
  return isMobile.any;
};
