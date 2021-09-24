<script>
import BasicControlled from './basic-controlled';
import Basic from './basic';
import CustomizedIcon from './customized-icon';
import Draggable from './draggable';
import Dynamic from './dynamic';
import Line from './line';
import Search from './search';
import Directory from './directory';
import ReplaceFields from './replaceFields';
import SwitcherIcon from './switcher-icon';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 树形控件
  ## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用\`树控件\`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

        ## 代码演示`,
};
export default {
  category: 'Components',
  type: 'Data Display',
  title: 'Tree',
  subtitle: '树形控件',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <BasicControlled />
          <Basic />
          <ReplaceFields />
          <CustomizedIcon />
          <Draggable />
          <Dynamic />
          <Line />
          <Search />
          <Directory />
          <SwitcherIcon />
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
