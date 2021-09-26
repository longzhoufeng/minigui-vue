<cn>
#### 表单验证
Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `FormItem` 的 `prop` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)
</cn>

<us>
#### Validation
Just add the `rules` attribute for `Form` component, pass validation rules, and set `prop` attribute for `FormItem` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).
</us>

```vue
<template>
  <m-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <m-form-model-item ref="name" label="Activity name" prop="name">
      <m-input
        v-model="form.name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </m-form-model-item>
    <m-form-model-item label="Activity zone" prop="region">
      <m-select v-model="form.region" placeholder="please select your zone">
        <m-select-option value="shanghai">
          Zone one
        </m-select-option>
        <m-select-option value="beijing">
          Zone two
        </m-select-option>
      </m-select>
    </m-form-model-item>
    <m-form-model-item label="Activity time" required prop="date1">
      <m-date-picker
        v-model="form.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%;"
      />
    </m-form-model-item>
    <m-form-model-item label="Instant delivery" prop="delivery">
      <m-switch v-model="form.delivery" />
    </m-form-model-item>
    <m-form-model-item label="Activity type" prop="type">
      <m-checkbox-group v-model="form.type">
        <m-checkbox value="1" name="type">
          Online
        </m-checkbox>
        <m-checkbox value="2" name="type">
          Promotion
        </m-checkbox>
        <m-checkbox value="3" name="type">
          Offline
        </m-checkbox>
      </m-checkbox-group>
    </m-form-model-item>
    <m-form-model-item label="Resources" prop="resource">
      <m-radio-group v-model="form.resource">
        <m-radio value="1">
          Sponsor
        </m-radio>
        <m-radio value="2">
          Venue
        </m-radio>
      </m-radio-group>
    </m-form-model-item>
    <m-form-model-item label="Activity form" prop="desc">
      <m-input v-model="form.desc" type="textarea" />
    </m-form-model-item>
    <m-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <m-button type="primary" @click="onSubmit">
        Create
      </m-button>
      <m-button style="margin-left: 10px;" @click="resetForm">
        Reset
      </m-button>
    </m-form-model-item>
  </m-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' },
        ],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
```
