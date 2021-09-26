<cn>
#### Warning
警告类型的结果。
</cn>

<us>
#### Warning
The result of the warning.
</us>

```vue
<template>
  <m-result status="warning" title="There are some problems with your operation.">
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
