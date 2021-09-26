<cn>
#### 自定义 icon
自定义 icon。
</cn>

<us>
#### Custom icon
Custom icon.
</us>

```vue
<template>
  <m-result title="Great, we have done all the operations!">
    <template #icon>
      <m-icon type="smile" theme="twoTone" />
    </template>
    <template #extra>
      <m-button type="primary">
        Next
      </m-button>
    </template>
  </m-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
```
