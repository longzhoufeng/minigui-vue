<cn>
#### 自定义日期范围选择
当 `RangePicker` 无法满足业务需求时，可以使用两个 `DatePicker` 实现类似的功能。
> - 通过设置 `disabledDate` 方法，来约束开始和结束日期。
> - 通过 `open` `openChange` 来优化交互。
</cn>

<us>
#### Customized Range Picker
When `RangePicker` does not satisfied your requirements, try to implement similar functionality with two `DatePicker`.
> - Use the `disabledDate` property to limit the start and end dates.
> - Improve user experience with `open` and `openChange`.
</us>

```vue
<template>
  <div>
    <m-date-picker
      v-model="startValue"
      :disabled-date="disabledStartDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Start"
      @openChange="handleStartOpenChange"
    />
    <m-date-picker
      v-model="endValue"
      :disabled-date="disabledEndDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="End"
      :open="endOpen"
      @openChange="handleEndOpenChange"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      startValue: null,
      endValue: null,
      endOpen: false,
    };
  },
  watch: {
    startValue(val) {
      console.log('startValue', val);
    },
    endValue(val) {
      console.log('endValue', val);
    },
  },
  methods: {
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
  },
};
</script>
```
