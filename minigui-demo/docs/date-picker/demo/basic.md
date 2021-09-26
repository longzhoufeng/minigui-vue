<cn>
#### 基本
最简单的用法，在浮层中可以选择或者输入日期。
</cn>

<us>
#### Basic
Basic use case. Users can select or input a date in panel.
</us>

```vue
<template>
  <div>
    <m-date-picker @change="onChange" />
    <br />
    <m-month-picker placeholder="Select month" @change="onChange" />
    <br />
    <m-range-picker @change="onChange" />
    <br />
    <m-week-picker placeholder="Select week" @change="onChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>
```
