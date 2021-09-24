<script>
import Base from './base.md';
import Vertical from './vertical.md';
import Size from './size.md';
import Align from './align.md';
import Customize from './customize.md';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# Space 间距
  设置组件之间的间距。
  ## 何时使用
  避免组件紧贴在一起，拉开统一的空间。
  - 适合行内元素的水平间距。
  - 可以设置各种水平对齐方式。
  ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '间距',
  type: 'Layout',
  title: 'Space',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Base />
          <Vertical />
          <Size />
          <Align />
          <Customize />
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

<style scoped></style>
