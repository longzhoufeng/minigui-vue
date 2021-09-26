<cn>
#### 带输入框的滑块
和 [数字输入框](/components/input-number-cn/) 组件保持同步。
</cn>

<us>
#### Slider with InputNumber
Synchronize with [InputNumber](/components/input-number/) component.
</us>

```vue
<template>
  <div>
    <m-row>
      <m-col :span="12">
        <m-slider v-model="inputValue1" :min="1" :max="20" />
      </m-col>
      <m-col :span="4">
        <m-input-number v-model="inputValue1" :min="1" :max="20" style="marginLeft: 16px" />
      </m-col>
    </m-row>
    <m-row>
      <m-col :span="12">
        <m-slider v-model="inputValue" :min="0" :max="1" :step="0.01" />
      </m-col>
      <m-col :span="4">
        <m-input-number
          v-model="inputValue"
          :min="0"
          :max="1"
          :step="0.01"
          style="marginLeft: 16px"
        />
      </m-col>
    </m-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: 0,
      inputValue1: 1,
    };
  },
};
</script>
<style scoped>
.code-box-demo .minigui-slider {
  margin-bottom: 16px;
}
</style>
```
