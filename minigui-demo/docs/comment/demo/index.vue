<script>
import Basic from './basic';
import Editor from './editor';
import List from './list';
import Nested from './nested';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# Comment评论
对网站内容的反馈、评价和讨论。

## 何时使用

评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。`,
};
export default {
  category: 'Components',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Comment',
  subtitle: '评论',
  cols: 1,
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Basic />
          <List />
          <Nested />
          <Editor />
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
