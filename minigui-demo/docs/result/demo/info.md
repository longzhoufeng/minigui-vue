<cn>
#### Info
展示处理结果。
</cn>

<us>
#### Info
Show processing results.
</us>

```vue
<template>
  <m-result title="Your operation has been executed">
    <template #extra>
      <m-button key="console" type="primary">
        Go Console
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
