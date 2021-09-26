<cn>
#### 表单布局
表单有三种布局。
</cn>

<us>
#### Form Layout
There are three layout for form: `horizontal`, `vertical`, `inline`.
</us>

```vue
<template>
  <m-form-model :layout="form.layout" :model="form" v-bind="formItemLayout">
    <m-form-model-item label="Form Layout">
      <m-radio-group v-model="form.layout">
        <m-radio-button value="horizontal">
          Horizontal
        </m-radio-button>
        <m-radio-button value="vertical">
          Vertical
        </m-radio-button>
        <m-radio-button value="inline">
          Inline
        </m-radio-button>
      </m-radio-group>
    </m-form-model-item>
    <m-form-model-item label="Field A">
      <m-input v-model="form.fieldA" placeholder="input placeholder" />
    </m-form-model-item>
    <m-form-model-item label="Field B">
      <m-input v-model="form.fieldB" placeholder="input placeholder" />
    </m-form-model-item>
    <m-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
      <m-button type="primary">
        Submit
      </m-button>
    </m-form-model-item>
  </m-form-model>
</template>
<script>
export default {
  data() {
    return {
      form: {
        layout: 'horizontal',
        fieldA: '',
        fieldB: '',
      },
    };
  },
  computed: {
    formItemLayout() {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
};
</script>
```
