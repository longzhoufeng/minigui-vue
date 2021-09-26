<cn>
#### 自定义校验规则
这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。本例还使用 `has-feedback` 属性为输入框添加了表示校验结果的反馈图标。
自定义校验 callback 必须被调用。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)
</cn>

<us>
#### Custom validation rules
This example shows how to customize your own validation rules to finish a two-factor password verification.
You can use `has-feedback` to reflect validation result as an icon.
Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
</us>

```vue
<template>
  <m-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
    <m-form-model-item has-feedback label="Password" prop="pass">
      <m-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </m-form-model-item>
    <m-form-model-item has-feedback label="Confirm" prop="checkPass">
      <m-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
    </m-form-model-item>
    <m-form-model-item has-feedback label="Age" prop="age">
      <m-input v-model.number="ruleForm.age" />
    </m-form-model-item>
    <m-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <m-button type="primary" @click="submitForm('ruleForm')">
        Submit
      </m-button>
      <m-button style="margin-left: 10px" @click="resetForm('ruleForm')">
        Reset
      </m-button>
    </m-form-model-item>
  </m-form-model>
</template>
<script>
export default {
  data() {
    let checkPending;
    let checkAge = (rule, value, callback) => {
      clearTimeout(checkPending);
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      checkPending = setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        age: [{ validator: checkAge, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
```
