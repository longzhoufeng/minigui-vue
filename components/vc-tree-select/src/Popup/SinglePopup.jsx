import PropTypes from '../../../_util/vue-types';
import BasePopup from '../Base/BasePopup';
import SearchInput from '../SearchInput';
import { createRef } from '../util';
import { getListeners } from '../../../_util/props-util';

const SinglePopup = {
  name: 'SinglePopup',
  props: {
    ...BasePopup.props,
    ...SearchInput.props,
    searchValue: PropTypes.string,
    showSearch: PropTypes.bool,
    dropdownPrefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    searchPlaceholder: PropTypes.string,
  },
  created() {
    this.inputRef = createRef();
    this.searchRef = createRef();
    this.popupRef = createRef();
  },
  methods: {
    onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    getTree() {
      return this.popupRef.current && this.popupRef.current.getTree();
    },
    _renderPlaceholder() {
      const { searchPlaceholder, searchValue, prefixCls } = this.$props;

      if (!searchPlaceholder) {
        return null;
      }

      return (
        <span
          style={{
            display: searchValue ? 'none' : 'block',
          }}
          onClick={this.onPlaceholderClick}
          class={`${prefixCls}-search__field__placeholder`}
        >
          {searchPlaceholder}
        </span>
      );
    },

    _renderSearch() {
      const { showSearch, dropdownPrefixCls } = this.$props;

      if (!showSearch) {
        return null;
      }

      return (
        <span
          class={`${dropdownPrefixCls}-search`}
          {...{
            directives: [
              {
                name: 'minigui-ref',
                value: this.searchRef,
              },
            ],
          }}
        >
          <SearchInput
            {...{
              props: { ...this.$props, renderPlaceholder: this._renderPlaceholder },
              on: getListeners(this),
              directives: [
                {
                  name: 'minigui-ref',
                  value: this.inputRef,
                },
              ],
            }}
          />
        </span>
      );
    },
  },
  render() {
    return (
      <BasePopup
        {...{
          props: { ...this.$props, renderSearch: this._renderSearch, __propsSymbol__: Symbol() },
          on: getListeners(this),
          directives: [
            {
              name: 'minigui-ref',
              value: this.popupRef,
            },
          ],
        }}
      />
    );
  },
};

export default SinglePopup;
