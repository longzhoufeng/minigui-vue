<cn>
#### 三种大小
三种大小的输入框，若不设置，则为 `default`。
</cn>

<us>
#### Three Sizes
The input box comes in three sizes. `default` will be used if `size` is omitted.
</us>

```vue
<template>
  <div>
    <m-radio-group v-model="size">
      <m-radio-button value="large">
        Large
      </m-radio-button>
      <m-radio-button value="default">
        Default
      </m-radio-button>
      <m-radio-button value="small">
        Small
      </m-radio-button>
    </m-radio-group>
    <br /><br />
    <m-date-picker :size="size" />
    <br />
    <m-month-picker :size="size" placeholder="Select Month" />
    <br />
    <m-range-picker :size="size" />
    <br />
    <m-week-picker :size="size" placeholder="Select Week" />
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      size: 'default',
    };
  },
};
</script>
```
