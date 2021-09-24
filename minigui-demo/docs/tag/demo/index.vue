<script>
import Basic from './basic';
import Checkable from './checkable';
import Colorful from './colorful';
import Control from './control';
import HotTags from './hot-tags';
import Controlled from './controlled';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# 标签 Tag

    进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

    ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '标签',
  type: 'Data Display',
  title: 'Tag',
  render() {
    return (
      <div id="components-tag-demo">
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <Checkable />
          <Colorful />
          <Control />
          <HotTags />
          <Controlled />
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
<style>
#components-tag-demo .minigui-tag {
  margin-bottom: 8px;
}
</style>
