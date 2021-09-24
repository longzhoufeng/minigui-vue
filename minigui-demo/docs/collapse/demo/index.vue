<script>
import Accordion from './accordion';
import Basic from './basic';
import Borderless from './borderless';
import Custom from './custom';
import Mix from './mix';
import Noarrow from './noarrow';
import Extra from './extra';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# Collapse折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- '手风琴' 是一种特殊的折叠面板，只允许单个内容区域展开。

          ## 代码演示`,
};
export default {
  category: 'Components',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Collapse',
  subtitle: '折叠面板',
  cols: 1,
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Basic />
          <Accordion />
          <Mix />
          <Borderless />
          <Custom />
          <Noarrow />
          <Extra />
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
