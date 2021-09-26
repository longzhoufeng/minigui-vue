<cn>
#### 不可用
Switch 失效状态。
</cn>

<us>
#### Disabled
Disabled state of `Switch`.
</us>

```vue
<template>
  <div>
    <m-switch default-checked :disabled="disabled" style="margin-bottom:5px" />
    <br />
    <m-button type="primary" @click="onToggle">
      Toggle disabled
    </m-button>
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
    onToggle() {
      this.disabled = !this.disabled;
    },
  },
};
</script>
```
