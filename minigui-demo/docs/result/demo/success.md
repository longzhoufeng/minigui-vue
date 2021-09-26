<cn>
#### Success
成功的结果。
</cn>

<us>
#### Success
Show successful results.
</us>

```vue
<template>
  <m-result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <m-button key="console" type="primary">
        Go Console
      </m-button>
      <m-button key="buy">
        Buy Again
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
