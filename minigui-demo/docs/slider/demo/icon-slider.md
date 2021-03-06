<cn>
#### 带 icon 的滑块
滑块左右可以设置图标来表达业务含义。
</cn>

<us>
#### Slider with icon
You can add an icon beside the slider to make it meaningful.
</us>

```vue
<template>
  <div class="icon-wrapper">
    <m-icon :style="{ color: preColor }" type="frown-o" />
    <m-slider :min="0" :max="20" :value="value" @change="handleChange" />
    <m-slider v-model="value" :min="0" :max="20" />
    <m-icon :style="{ color: nextColor }" type="smile-o" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      min: 0,
      max: 20,
    };
  },
  computed: {
    preColor() {
      const { max, min, value } = this;
      const mid = ((max - min) / 2).toFixed(5);
      return value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    },
    nextColor() {
      const { max, min, value } = this;
      const mid = ((max - min) / 2).toFixed(5);
      return value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    },
  },
  methods: {
    handleChange(value) {
      this.value = value;
    },
  },
};
</script>
<style scoped>
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}

.icon-wrapper .anticon:first-child {
  left: 0;
}

.icon-wrapper .anticon:last-child {
  right: 0;
}
</style>
```
