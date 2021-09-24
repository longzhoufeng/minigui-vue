<script>
import Basic from './basic';
import Disabled from './disabled';
import RadioButton from './radioButton';
import RadioGroupMore from './radioGroup-more';
import RadioGroupOptions from './radioGroup-options';
import RadioGroupWithName from './radioGroup-with-name';
import RadioGroup from './radioGroup';
import RadioButtonSolid from './radioButton-solid';

import Size from './size';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# 单选框
  单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
        ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '单选框',
  type: 'Data Entry',
  title: 'Radio',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-sort>
          <Basic />
          <Disabled />
          <RadioButton />
          <RadioButtonSolid />
          <RadioGroupMore />
          <RadioGroupOptions />
          <RadioGroupWithName />
          <RadioGroup />
          <Size />
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
