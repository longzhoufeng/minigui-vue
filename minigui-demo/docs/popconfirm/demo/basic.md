<cn>
#### 基本
最简单的用法。
</cn>

<us>
#### Basic
The basic example.
</us>

```vue
<template>
  <m-popconfirm
    title="Are you sure delete this task?"
    ok-text="Yes"
    cancel-text="No"
    @confirm="confirm"
    @cancel="cancel"
  >
    <a href="#">Delete</a>
  </m-popconfirm>
</template>
<script>
export default {
  methods: {
    confirm(e) {
      console.log(e);
      this.$message.success('Click on Yes');
    },
    cancel(e) {
      console.log(e);
      this.$message.error('Click on No');
    },
  },
};
</script>
```
