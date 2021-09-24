<script>
import Success from './success.md';
import Info from './info.md';
import Warning from './warning.md';
import Result403 from './403.md';
import Result404 from './404.md';
import Result500 from './500.md';
import Error from './error.md';
import CustomIcon from './customIcon.md';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# Result 结果 (版本: 1.5.0+)

  用于反馈一系列操作任务的处理结果。

  ## 何时使用

  当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。
  ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '结果',
  type: 'Feedback',
  cols: 1,
  title: 'Result',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Success />
          <Info />
          <Warning />
          <Result403 />
          <Result404 />
          <Result500 />
          <Error />
          <CustomIcon />
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
