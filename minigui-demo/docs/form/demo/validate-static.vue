<cn>
#### 自定义校验
我们提供了 `validateStatus` `help` `hasFeedback` 等属性，你可以不需要使用 `Form.create` 和 `getFieldDecorator`，自己定义校验的时机和内容。
1. `validateStatus`: 校验状态，可选 'success', 'warning', 'error', 'validating'。
2. `hasFeedback`：用于给输入框添加反馈图标。
3. `help`：设置校验文案。
</cn>

<us>
#### Customized Validation
We provide properties like `validateStatus` `help` `hasFeedback` to customize your own validate status and message, without using `Form.create` and `getFieldDecorator`.
1. `validateStatus`: validate status of form components which could be 'success', 'warning', 'error', 'validating'.
2. `hasFeedback`: display feed icon of input control
3. `help`: display validate message.
</us>

<template>
  <m-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <m-form-item
      label="Fail"
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <m-input id="error" placeholder="unavailable choice" />
    </m-form-item>
    <m-form-item label="Warning" validate-status="warning">
      <m-input id="warning" placeholder="Warning" />
    </m-form-item>
    <m-form-item
      label="Validating"
      has-feedback
      validate-status="validating"
      help="The information is being validated..."
    >
      <m-input id="validating" placeholder="I'm the content is being validated" />
    </m-form-item>
    <m-form-item label="Success" has-feedback validate-status="success">
      <m-input id="success" placeholder="I'm the content" />
    </m-form-item>
    <m-form-item label="Warning" has-feedback validate-status="warning">
      <m-input id="warning2" placeholder="Warning" />
    </m-form-item>
    <m-form-item
      label="Fail"
      has-feedback
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <m-input id="error2" placeholder="unavailable choice" />
    </m-form-item>
    <m-form-item label="Success" has-feedback validate-status="success">
      <m-date-picker style="width: 100%" />
    </m-form-item>
    <m-form-item label="Warning" has-feedback validate-status="warning">
      <m-time-picker style="width: 100%" />
    </m-form-item>
    <m-form-item label="Error" has-feedback validate-status="error">
      <m-select default-value="1">
        <m-select-option value="1">
          Option 1
        </m-select-option>
        <m-select-option value="2">
          Option 2
        </m-select-option>
        <m-select-option value="3">
          Option 3
        </m-select-option>
      </m-select>
    </m-form-item>
    <m-form-item
      label="Validating"
      has-feedback
      validate-status="validating"
      help="The information is being validated..."
    >
      <m-cascader :default-value="['1']" :options="[]" />
    </m-form-item>
    <m-form-item label="inline" style="margin-bottom:0;">
      <m-form-item
        validate-status="error"
        help="Please select the correct date"
        :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
      >
        <m-date-picker style="width: 100%" />
      </m-form-item>
      <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
      <m-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
        <m-date-picker style="width: 100%" />
      </m-form-item>
    </m-form-item>
    <m-form-item label="Success" has-feedback validate-status="success">
      <m-input-number style="width: 100%" />
    </m-form-item>
    <m-form-item label="Success" has-feedback validate-status="success">
      <m-input allow-clear placeholder="with allowClear" />
    </m-form-item>

    <m-form-item label="Warning" has-feedback validate-status="warning">
      <m-input-password placeholder="with input password" />
    </m-form-item>

    <m-form-item label="Error" has-feedback validate-status="error">
      <m-input-password allow-clear placeholder="with input password and allowClear" />
    </m-form-item>
  </m-form>
</template>
<script>
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
  },
};
</script>
