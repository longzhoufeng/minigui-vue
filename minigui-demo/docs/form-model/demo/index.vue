<script>
import Basic from './basic.md';
import CustomValidation from './custom-validation.md';
import DynamicFormItem from './dynamic-form-item.md';
import HorizontalLogin from './horizontal-login.md';
import Layout from './layout.md';
import Validation from './validation.md';

import CN from '../index.zh-CN';

const md = {
  cn: `# FormModel 表单 (支持 v-model 检验)(版本：1.5.0+)
           具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 何时使用

- 需要对输入的数据类型进行校验时。

## 表单

我们为 \`form\` 提供了以下三种排列方式：

- 水平排列：标签和表单控件水平排列；（默认）
- 垂直排列：标签和表单控件上下垂直排列；
- 行内排列：表单项水平行内排列。

## 表单域

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

这里我们封装了表单域 \`<FormModel.Item />\` 。

## 组件注册

\`\`\`js
import { FormModel } from 'minigui-vue';
Vue.use(FormModel);
\`\`\`

## 代码演示
        `,
};

export default {
  category: 'Components',
  subtitle: '表单',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 1,
  title: 'FormModel',
  render() {
    return (
      <div class="form-model-demo">
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Basic />
          <HorizontalLogin />
          <Layout />
          <Validation />
          <CustomValidation />
          <DynamicFormItem />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
<style>
.form-model-demo .code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 700px;
}
</style>
