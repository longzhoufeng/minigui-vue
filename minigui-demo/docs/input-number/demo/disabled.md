<cn>
#### 不可用
点击按钮切换可用状态。
</cn>

<us>
#### Disabled
Click the button to toggle between available and disabled states.
</us>

```vue
<template>
  <div>
    <m-input-number :min="1" :max="10" :disabled="disabled" :default-value="3" />
    <div style="marginTop:20px">
      <m-button type="primary" @click="toggle">
        Toggle disabled
      </m-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: true,
    };
  },
  methods: {
    toggle() {
      this.disabled = !this.disabled;
    },
  },
};
</script>
```
