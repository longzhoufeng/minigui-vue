<script>
import Horizontal from './horizontal';
import Vertical from './vertical';
import WithText from './with-text';
import CN from '../index.zh-CN.md';
const md = {
  cn: `# 分割线
        区隔内容的分割线。
        ## 何时使用
        - 对不同章节的文本段落进行分割。
        - 对行内文字/链接进行分割，例如表格的操作列。

        ## 代码演示`,
};
export default {
  category: 'Components',
  type: 'Other',
  zhType: '其他',
  title: 'Divider',
  subtitle: '分割线',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Vertical />
          <Horizontal />
          <WithText />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
