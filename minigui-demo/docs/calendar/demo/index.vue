<script>
import Basic from './basic';
import Card from './card';
import NoticeCalendar from './notice-calendar';
import Select from './select';
import CustomizeHeader from './customize-header.vue';
import CustomizeHeaderString from '!raw-loader!./customize-header.vue';
import CN from '../index.zh-CN.md';
const md = {
  cn: `# Calendar 日历

按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

          ## 代码演示`,
};
export default {
  category: 'Components',
  type: 'Data Display',
  zhType: '数据展示',
  subtitle: '日历',
  cols: 1,
  title: 'Calendar',
  render() {
    return (
      <div>
        <md cn={md.cn}/>
        <demo-sort cols={1}>
          <Basic />
          <Card />
          <NoticeCalendar />
          <Select />
          <CustomizeHeader />
          <demo-container code={CustomizeHeaderString}>
            <CustomizeHeader />
          </demo-container>
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
