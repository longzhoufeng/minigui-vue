<cn>
#### 内联登录栏
水平登录栏，常用在顶部导航栏中。
</cn>

<us>
#### Inline Login Form
Inline login form is often used in navigation bar.
</us>

<template>
  <m-form layout="inline" :form="form" @submit="handleSubmit">
    <m-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <m-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <m-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </m-input>
    </m-form-item>
    <m-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <m-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <m-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </m-input>
    </m-form-item>
    <m-form-item>
      <m-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
        Log in
      </m-button>
    </m-form-item>
  </m-form>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
