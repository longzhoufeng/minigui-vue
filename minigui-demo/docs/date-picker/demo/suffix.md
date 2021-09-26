<cn>
#### 后缀图标
最简单的用法，在浮层中可以选择或者输入日期。
</cn>

<us>
#### Suffix
Basic use case. Users can select or input a date in panel.
</us>

```vue
<template>
  <div>
    <m-date-picker @change="onChange">
      <m-icon slot="suffixIcon" type="smile" />
    </m-date-picker>
    <br />
    <m-month-picker placeholder="Select month" @change="onChange">
      <m-icon slot="suffixIcon" type="smile" />
    </m-month-picker>
    <br />
    <m-range-picker @change="onChange">
      <m-icon slot="suffixIcon" type="smile" />
    </m-range-picker>
    <br />
    <m-week-picker placeholder="Select week" @change="onChange">
      <m-icon slot="suffixIcon" type="smile" />
    </m-week-picker>
    <br />
    <m-date-picker suffix-icon="ab" @change="onChange" />
    <br />
    <m-month-picker suffix-icon="ab" placeholder="Select month" @change="onChange" />
    <br />
    <m-range-picker suffix-icon="ab" @change="onChange" />
    <br />
    <m-week-picker suffix-icon="ab" placeholder="Select week" @change="onChange" />
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
