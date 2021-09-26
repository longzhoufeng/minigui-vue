<cn>
#### 典型表单
在 `Form` 组件中，每一个表单域由一个 `FormItem` 组件构成，表单域中可以放置各种类型的表单控件，比如输入框、选择器、开关、单选框、多选框等。
</cn>

<us>
#### Basic form
It includes all kinds of input items, such as `input`, `select`, `radio` and `checkbox`.
In each `form` component, you need a `form-item` field to be the container of your input item.
</us>

```vue
<template>
  <m-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <m-form-model-item label="Activity name">
      <m-input v-model="form.name" />
    </m-form-model-item>
    <m-form-model-item label="Activity zone">
      <m-select v-model="form.region" placeholder="please select your zone">
        <m-select-option value="shanghai">
          Zone one
        </m-select-option>
        <m-select-option value="beijing">
          Zone two
        </m-select-option>
      </m-select>
    </m-form-model-item>
    <m-form-model-item label="Activity time">
      <m-date-picker
        v-model="form.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%;"
      />
    </m-form-model-item>
    <m-form-model-item label="Instant delivery">
      <m-switch v-model="form.delivery" />
    </m-form-model-item>
    <m-form-model-item label="Activity type">
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
    <m-form-model-item label="Resources">
      <m-radio-group v-model="form.resource">
        <m-radio value="1">
          Sponsor
        </m-radio>
        <m-radio value="2">
          Venue
        </m-radio>
      </m-radio-group>
    </m-form-model-item>
    <m-form-model-item label="Activity form">
      <m-input v-model="form.desc" type="textarea" />
    </m-form-model-item>
    <m-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <m-button type="primary" @click="onSubmit">
        Create
      </m-button>
      <m-button style="margin-left: 10px;">
        Cancel
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
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
  },
};
</script>
```
