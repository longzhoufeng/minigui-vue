import PropTypes from '../_util/vue-types';
import classNames from 'classnames';
import addEventListener from '../vc-util/Dom/addEventListener';
import Affix from '../affix';
import scrollTo from '../_util/scrollTo';
import getScroll from '../_util/getScroll';
import { initDefaultProps } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
import { ConfigConsumerProps } from '../config-provider/configConsumerProps';

function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element) {
    return 0;
  }

  if (!element.getClientRects().length) {
    return 0;
  }

  const rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }
    return rect.top - container.getBoundingClientRect().top;
  }

  return rect.top;
}

const sharpMatcherRegx = /#([^#]+)$/;

export const AnchorProps = {
  prefixCls: PropTypes.string,
  offsetTop: PropTypes.number,
  bounds: PropTypes.number,
  affix: PropTypes.bool,
  showInkInFixed: PropTypes.bool,
  getContainer: PropTypes.func,
  wrapperClass: PropTypes.string,
  wrapperStyle: PropTypes.object,
  getCurrentAnchor: PropTypes.func,
  targetOffset: PropTypes.number,
};

export default {
  name: 'MAnchor',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(AnchorProps, {
    affix: true,
    showInkInFixed: false,
    getContainer: getDefaultContainer,
  }),
  inject: {
    configProvider: { default: () => ConfigConsumerProps },
  },
  data() {
    this.links = [];
    this._sPrefixCls = '';
    return {
      activeLink: null,
    };
  },
  provide() {
    return {
      antAnchor: {
        registerLink: link => {
          if (!this.links.includes(link)) {
            this.links.push(link);
          }
        },
        unregisterLink: link => {
          const index = this.links.indexOf(link);
          if (index !== -1) {
            this.links.splice(index, 1);
          }
        },
        $data: this.$data,
        scrollTo: this.handleScrollTo,
      },
      antAnchorContext: this,
    };
  },

  mounted() {
    this.$nextTick(() => {
      const { getContainer } = this;
      this.scrollContainer = getContainer();
      this.scrollEvent = addEventListener(this.scrollContainer, 'scroll', this.handleScroll);
      this.handleScroll();
    });
  },
  updated() {
    this.$nextTick(() => {
      if (this.scrollEvent) {
        const { getContainer } = this;
        const currentContainer = getContainer();
        if (this.scrollContainer !== currentContainer) {
          this.scrollContainer = currentContainer;
          this.scrollEvent.remove();
          this.scrollEvent = addEventListener(this.scrollContainer, 'scroll', this.handleScroll);
          this.handleScroll();
        }
      }
      this.updateInk();
    });
  },
  beforeDestroy() {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  },
  methods: {
    getCurrentActiveLink(offsetTop = 0, bounds = 5) {
      const { getCurrentAnchor } = this;

      if (typeof getCurrentAnchor === 'function') {
        return getCurrentAnchor();
      }
      const activeLink = '';
      if (typeof document === 'undefined') {
        return activeLink;
      }

      const linkSections = [];
      const { getContainer } = this;
      const container = getContainer();
      this.links.forEach(link => {
        const sharpLinkMatch = sharpMatcherRegx.exec(link.toString());
        if (!sharpLinkMatch) {
          return;
        }
        const target = document.getElementById(sharpLinkMatch[1]);
        if (target) {
          const top = getOffsetTop(target, container);
          if (top < offsetTop + bounds) {
            linkSections.push({
              link,
              top,
            });
          }
        }
      });

      if (linkSections.length) {
        const maxSection = linkSections.reduce((prev, curr) => (curr.top > prev.top ? curr : prev));
        return maxSection.link;
      }
      return '';
    },

    handleScrollTo(link) {
      const { offsetTop, getContainer, targetOffset } = this;

      this.setCurrentActiveLink(link);
      const container = getContainer();
      const scrollTop = getScroll(container, true);
      const sharpLinkMatch = sharpMatcherRegx.exec(link);
      if (!sharpLinkMatch) {
        return;
      }
      const targetElement = document.getElementById(sharpLinkMatch[1]);
      if (!targetElement) {
        return;
      }

      const eleOffsetTop = getOffsetTop(targetElement, container);
      let y = scrollTop + eleOffsetTop;
      y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
      this.animating = true;

      scrollTo(y, {
        callback: () => {
          this.animating = false;
        },
        getContainer,
      });
    },
    setCurrentActiveLink(link) {
      const { activeLink } = this;

      if (activeLink !== link) {
        this.setState({
          activeLink: link,
        });
        this.$emit('change', link);
      }
    },

    handleScroll() {
      if (this.animating) {
        return;
      }
      const { offsetTop, bounds, targetOffset } = this;
      const currentActiveLink = this.getCurrentActiveLink(
        targetOffset !== undefined ? targetOffset : offsetTop || 0,
        bounds,
      );
      this.setCurrentActiveLink(currentActiveLink);
    },

    updateInk() {
      if (typeof document === 'undefined') {
        return;
      }
      const { _sPrefixCls } = this;
      const linkNode = this.$el.getElementsByClassName(`${_sPrefixCls}-link-title-active`)[0];
      if (linkNode) {
        this.$refs.inkNode.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
      }
    },
  },

  render() {
    const {
      prefixCls: customizePrefixCls,
      offsetTop,
      affix,
      showInkInFixed,
      activeLink,
      $slots,
      getContainer,
    } = this;

    const getPrefixCls = this.configProvider.getPrefixCls;
    const prefixCls = getPrefixCls('anchor', customizePrefixCls);
    this._sPrefixCls = prefixCls;

    const inkClass = classNames(`${prefixCls}-ink-ball`, {
      visible: activeLink,
    });

    const wrapperClass = classNames(this.wrapperClass, `${prefixCls}-wrapper`);

    const anchorClass = classNames(prefixCls, {
      fixed: !affix && !showInkInFixed,
    });

    const wrapperStyle = {
      maxHeight: offsetTop ? `calc(100vh - ${offsetTop}px)` : '100vh',
      ...this.wrapperStyle,
    };

    const anchorContent = (
      <div class={wrapperClass} style={wrapperStyle}>
        <div class={anchorClass}>
          <div class={`${prefixCls}-ink`}>
            <span class={inkClass} ref="inkNode" />
          </div>
          {$slots.default}
        </div>
      </div>
    );

    return !affix ? (
      anchorContent
    ) : (
      <Affix offsetTop={offsetTop} target={getContainer}>
        {anchorContent}
      </Affix>
    );
  },
};
