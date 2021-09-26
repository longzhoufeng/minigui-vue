<cn>
#### 自定义尺寸
自定义间距大小。
</cn>

<us>
#### Customize Size
Custom spacing size.
</us>

```vue
<template>
  <div>
    <m-slider v-model="size" />
    <br />
    <br />
    <m-space :size="size">
      <m-button type="primary">Primary</m-button>
      <m-button>Default</m-button>
      <m-button type="dashed">Dashed</m-button>
      <m-button type="link">Link</m-button>
    </m-space>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 8,
    };
  },
};
</script>
```
