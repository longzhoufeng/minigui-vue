<cn>
#### 自定义渲染
增加自定义渲染功能，在默认 `slot` 中，你可以设置任何你想渲染的组件。
</cn>

<us>
#### Custum Time
Added custom rendering function, in the default `slot', you can set any component you want to render..
</us>

```vue
<template>
  <div>
    <m-date-picker v-model="time1" placeholder="Select Time" @change="onChange" @ok="onOk">
      <span>{{ time1 ? time1 : 'SelectTime' }}</span>
    </m-date-picker>
    <br />
    <m-range-picker v-model="time2">
      <span>
        {{ time2 ? time2 : '请选择' }}
      </span>
    </m-range-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      time1: undefined,
      time2: undefined,
    };
  },
  methods: {
    onChange(value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    },
    onOk(value) {
      console.log('onOk: ', value);
    },
    clearTime() {
      this.time1 = undefined;
    },
  },
};
</script>
```
