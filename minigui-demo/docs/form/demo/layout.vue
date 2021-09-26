<cn>
#### 表单布局
表单有三种布局。
</cn>

<us>
#### Form Layout
There are three layout for form: `horizontal`, `vertical`, `inline`.
</us>

<template>
  <m-form :layout="formLayout">
    <m-form-item
      label="Form Layout"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <m-radio-group default-value="horizontal" @change="handleFormLayoutChange">
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
    </m-form-item>
    <m-form-item
      label="Field A"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <m-input placeholder="input placeholder" />
    </m-form-item>
    <m-form-item
      label="Field B"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <m-input placeholder="input placeholder" />
    </m-form-item>
    <m-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <m-button type="primary">
        Submit
      </m-button>
    </m-form-item>
  </m-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
  },
};
</script>
