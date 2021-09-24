<script>
import Basic from './basic.md';
import Half from './half.md';
import Text from './text.md';
import Disabled from './disabled.md';
import Clear from './clear.md';
import Character from './character.md';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# Rate

  评分组件。

  ## 何时使用

  - 对评价进行展示。
  - 对事物进行快速的评级操作。
            ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '评分',
  type: 'Data Entry',
  cols: 1,
  title: 'Rate',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <Half />
          <Text />
          <Disabled />
          <Clear />
          <Character />
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
