<script>
import Duration from './duration';
import Info from './info';
import Loading from './loading';
import Other from './other';
import Thenable from './thenable';
import Update from './update';
import CN from '../index.zh-CN.md';
const md = {
  cn: `# 全局提示
全局展示操作反馈信息。
## 何时使用
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '全局提示',
  type: 'Feedback',
  noinstant: true,
  title: 'Message',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Info />
          <Duration />
          <Loading />
          <Other />
          <Thenable />
          <Update />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
