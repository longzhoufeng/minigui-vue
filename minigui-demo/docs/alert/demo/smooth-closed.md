<cn>
#### 平滑地卸载
平滑、自然的卸载提示。
</cn>

<us>
#### Smoothly Unmount
Smoothly and unaffectedly unmount Alert.
</us>

```vue
<template>
  <div>
    <m-alert
      v-if="visible"
      message="Alert Message Text"
      type="success"
      closable
      :after-close="handleClose"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    handleClose() {
      this.visible = false;
    },
  },
};
</script>
```
