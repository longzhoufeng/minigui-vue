<cn>
#### 间距大小
间距预设大、中、小三种大小。
通过设置 `size` 为 `large` `middle` 分别把间距设为大、中间距。若不设置 `size`，则间距为小。
</cn>

<us>
#### Space Size
`large`, `middle` and `small` preset sizes.
Set the size to `large` and `middle` by setting size to large and middle respectively. If `size` is not set, the spacing is `small`.
</us>

```vue
<template>
  <div>
    <m-radio-group v-model="size">
      <m-radio value="small">Small</m-radio>
      <m-radio value="middle">Middle</m-radio>
      <m-radio value="large">Large</m-radio>
    </m-radio-group>
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
      size: 'small',
    };
  },
};
</script>
```
