<cn>
#### 表单联动
使用 `setFieldsValue` 来动态设置其他控件的值。
</cn>

<us>
#### Coordinated Controls
Use `setFieldsValue` to set other control's value programmaticly.
</us>

<template>
  <m-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <m-form-item label="Note">
      <m-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </m-form-item>
    <m-form-item label="Gender">
      <m-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <m-select-option value="male">
          male
        </m-select-option>
        <m-select-option value="female">
          female
        </m-select-option>
      </m-select>
    </m-form-item>
    <m-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <m-button type="primary" html-type="submit">
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
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>
