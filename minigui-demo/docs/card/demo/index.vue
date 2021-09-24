<script>
import Basic from './basic.md';
import BorderLess from './border-less.md';
import FlexibleContent from './flexible-content.md';
import GridCard from './grid-card.md';
import InColumn from './in-column.md';
import Inner from './inner.md';
import Loading from './loading.md';
import Meta from './meta.md';
import Simple from './simple.md';
import Tabs from './tabs.md';

import CN from './../index.zh-CN.md';

const md = {
  cn: `# Card 卡片
         通用卡片容器
       ## 何时使用
         最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
       ## 代码演示
        `,
};
export default {
  category: 'Components',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Card',
  subtitle: '卡片',
  cols: 1,
  render() {
    return (
      <div>
        <md cn={md.cn}/>
        <demo-sort>
          <Basic />
          <BorderLess />
          <FlexibleContent />
          <GridCard />
          <InColumn />
          <Inner />
          <Loading />
          <Meta />
          <Simple />
          <Tabs />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
