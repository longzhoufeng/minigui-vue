<cn>
#### Error
复杂的错误反馈。
</cn>

<us>
#### Error
Complex error feedback.
</us>

```vue
<template>
  <m-result
    status="error"
    title="Submission Failed"
    sub-title="Please check and modify the following information before resubmitting."
  >
    <template #extra>
      <m-button key="console" type="primary">
        Go Console
      </m-button>
      <m-button key="buy">
        Buy Again
      </m-button>
    </template>

    <div class="desc">
      <p style="font-size: 16px;">
        <strong>The content you submitted has the following error:</strong>
      </p>
      <p>
        <m-icon :style="{ color: 'red' }" type="close-circle" /> Your account has been frozen
        <a>Thaw immediately &gt;</a>
      </p>
      <p>
        <m-icon :style="{ color: 'red' }" type="close-circle" /> Your account is not yet eligible to
        apply <a>Apply Unlock &gt;</a>
      </p>
    </div>
  </m-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>
```
