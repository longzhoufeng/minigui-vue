<cn>
#### 禁用
选择框的不可用状态。
</cn>

<us>
#### Disabled
A disabled state of the `DatePicker`.
</us>

```vue
<template>
  <div>
    <m-date-picker :default-value="moment('2015-06-06', dateFormat)" disabled />
    <br />
    <m-month-picker :default-value="moment('2015-06', 'YYYY-MM')" disabled />
    <br />
    <m-range-picker
      :default-value="[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]"
      disabled
    />
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    this.dateFormat = 'YYYY-MM-DD';
    return {};
  },
  methods: {
    moment,
  },
};
</script>
```
