<script>
import Basic from './basic.md';
import Search from './search.md';
import Advanced from './advanced.md';
import CustomItem from './custom-item.md';
import TableTransfer from './table-transfer';
import TreeTransfer from './tree-transfer';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# 穿梭框
  双栏穿梭选择框。
  ## 何时使用

- 需要在多个可选项中进行多选时。
- 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。

穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。

选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。
其中，左边一栏为 \`source\`，右边一栏为 \`target\`，API 的设计也反映了这两个概念。
        ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '穿梭框',
  type: 'Data Entry',
  title: 'Transfer',
  cols: '1',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Basic />
          <Search />
          <Advanced />
          <CustomItem />
          <TableTransfer />
          <TreeTransfer />
        </demo-sort>
        <api>
          <template slot="cn">
            <CN />
          </template>
        </api>
      </div>
    );
  },
};
</script>
