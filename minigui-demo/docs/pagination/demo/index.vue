<script>
import Basic from './basic';
import Changer from './changer';
import Controlled from './controlled';
import CustomChanger from './custom-changer';
import ItemRender from './itemRender';
import Jump from './jump';
import Mini from './mini';
import More from './more';
import Simple from './simple';
import Total from './total';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# Pagination 分页

    采用分页的形式分隔长列表，每次只加载一个页面。

    ## 何时使用

    - 当加载/渲染所有数据将花费很多时间时；
    - 可切换页码浏览数据。

    ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '分页',
  type: 'Navigation',
  title: 'Pagination',
  cols: 1,
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Basic />
          <More />
          <Changer />
          <CustomChanger />
          <Jump />
          <Mini />
          <Simple />
          <Controlled />
          <Total />
          <ItemRender />
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
