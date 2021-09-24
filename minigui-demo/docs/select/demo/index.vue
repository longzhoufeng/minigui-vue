<script>
import Basic from './basic';
import Size from './size';
import Tags from './tags';
import AutomaticTokenization from './automatic-tokenization';
import LabelInValue from './label-in-value';
import Multiple from './multiple';
import Coordinate from './coordinate';
import Optgroup from './optgroup';
import SearchBox from './search-box';
import Search from './search';
import SelectUsers from './select-users';
import Suffix from './suffix';
import HideSelected from './hide-selected';
import CustomDropdownMenu from './custom-dropdown-menu';
import OptionLabelProp from './option-label-prop';

import CN from '../index.zh-CN.md';
const md = {
  cn: `# Select 选择器
          下拉选择器。
          ## 何时使用
          - 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
          - 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/ant-design/components/radio-cn/) 是更好的选择。

          ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '选择器',
  type: 'Data Entry',
  title: 'Select',
  render() {
    return (
      <div id="components-select-demo">
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <Size />
          <Tags />
          <AutomaticTokenization />
          <LabelInValue />
          <Multiple />
          <Coordinate />
          <Optgroup />
          <SearchBox />
          <Search />
          <SelectUsers />
          <Suffix />
          <HideSelected />
          <CustomDropdownMenu />
          <OptionLabelProp />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
<style>
#components-select-demo .ant-select {
  margin: 0 8px 10px 0;
}
</style>
>
