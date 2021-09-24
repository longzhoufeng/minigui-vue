<script>
import Basic from './basic.md';
import Active from './active.md';
import Children from './children.md';
import Complex from './complex.md';
import List from './list.md';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# 加载占位图

  在需要等待加载内容的位置提供一个占位图。

  ## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

            ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '加载占位图',
  type: 'Feedback',
  title: 'Skeleton',
  cols: 1,
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Basic />
          <Complex />
          <Active />
          <Children />
          <List />
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
