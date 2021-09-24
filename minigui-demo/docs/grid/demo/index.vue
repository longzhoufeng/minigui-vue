<script>
import Basic from './basic';
import FlexAlign from './flex-align';
import FlexOrder from './flex-order';
import FlexFill from './flex-fill';
import Flex from './flex';
import Gutter from './gutter';
import Offset from './offset';
import ResponsiveMore from './responsive-more';
import Responsive from './responsive';
import Sort from './sort';
import Playfround from './playfround';
import CN from '../index.zh-CN.md';
const md = {
  cn: `# Grid 栅格
          24 栅格系统。
          ## 设计理念
          `,
  us: `# Grid
24 Grids System。
## Design concept`,
};
const md2 = {
  cn: `
  在多数业务情况下，Ant Design Vue 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。
划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。
## 概述
布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：
- 通过\`row\`在水平方向建立一组\`column\`（简写col）
- 你的内容应当放置于\`col\`内，并且，只有\`col\`可以作为\`row\`的直接元素
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 \`<a-col :span="8" />\` 来创建
- 如果一个\`row\`中的\`col\`总和超过 24，那么多余的\`col\`会作为一个整体另起一行排列
## Flex 布局
我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。
Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。
          ## 代码演示
  `,
};
export default {
  category: 'Components',
  subtitle: '栅格',
  type: 'Layout',
  zhType: '布局',
  cols: 1,
  title: 'Grid',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <div class="grid-demo">
          <div class="minigui-row demo-row">
            <div class="minigui-col-24 demo-col demo-col-1">100%</div>
          </div>
          <div class="minigui-row demo-row">
            <div class="minigui-col-6 demo-col demo-col-2">25%</div>
            <div class="minigui-col-6 demo-col demo-col-3">25%</div>
            <div class="minigui-col-6 demo-col demo-col-2">25%</div>
            <div class="minigui-col-6 demo-col demo-col-3">25%</div>
          </div>
          <div class="minigui-row demo-row">
            <div class="minigui-col-8 demo-col demo-col-4">33.33%</div>
            <div class="minigui-col-8 demo-col demo-col-5">33.33%</div>
            <div class="minigui-col-8 demo-col demo-col-4">33.33%</div>
          </div>
          <div class="minigui-row demo-row">
            <div class="minigui-col-12 demo-col demo-col-1">50%</div>
            <div class="minigui-col-12 demo-col demo-col-3">50%</div>
          </div>
          <div class="minigui-row demo-row">
            <div class="minigui-col-16 demo-col demo-col-4">66.66%</div>
            <div class="minigui-col-8 demo-col demo-col-5">33.33%</div>
          </div>
        </div>
        <md cn={md2.cn} us={md2.us} />
        <div id="components-grid-demo-all">
          <demo-sort cols={1}>
            <Basic />
            <FlexAlign />
            <FlexOrder />
            <Flex />
            <FlexFill />
            <Gutter />
            <Offset />
            <ResponsiveMore />
            <Responsive />
            <Sort />
            <Playfround />
          </demo-sort>
        </div>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
