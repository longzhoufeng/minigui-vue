<script>
import Basic from './basic';
import Breadcrumb from './breadcrumb';
import Actions from './actions';
import Responsive from './responsive';
import Ghost from './ghost';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# PageHeader 页头 (版本: 1.5.0+)

      页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。

      ## 何时使用

      当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。

      ## 代码演示
      `,
};

export default {
  category: 'Components',
  subtitle: '页头',
  type: 'Navigation',
  title: 'PageHeader',
  cols: 1,
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Basic />
          <Breadcrumb />
          <Actions />
          <Responsive />
          <Ghost />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
