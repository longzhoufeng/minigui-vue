<script>
import Basic from './basic.md';
import Color from './color.md';
import Pending from './pending.md';
import Custom from './custom.md';
import Alternate from './alternate';
import Right from './right';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# 时间轴
  垂直展示的时间流信息。
  ## 何时使用
  - 当有一系列信息需按时间排列时，可正序和倒序。
  - 需要有一条时间轴进行视觉上的串联时。
        ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '时间轴',
  type: 'Data Display',
  title: 'Timeline',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <Color />
          <Pending />
          <Custom />
          <Alternate />
          <Right />
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
