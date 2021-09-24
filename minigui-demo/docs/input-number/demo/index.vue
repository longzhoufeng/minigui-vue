<script>
import Basic from './basic.md';
import Disabled from './disabled.md';
import Digit from './digit.md';
import Formatter from './formatter.md';
import Size from './size.md';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# 数字输入框
  通过鼠标或键盘，输入范围内的数值。
  ## 何时使用
  当需要获取标准数值时。
        ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '数字输入框',
  type: 'Data Entry',
  title: 'InputNumber',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <Size />
          <Disabled />
          <Digit />
          <Formatter />
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
