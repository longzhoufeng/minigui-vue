<script>
import Basic from './basic';
import Checkable from './checkable';
import Multiple from './multiple';
import TreeData from './treeData';
import Suffix from './suffix';
import Async from './async';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 树型选择控件
  ## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

        ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '树选择',
  type: 'Data Entry',
  title: 'TreeSelect',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <Checkable />
          <Multiple />
          <TreeData />
          <Suffix />
          <Async />
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
