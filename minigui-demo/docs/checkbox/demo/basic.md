<cn>
#### 基本用法
简单的checkbox
</cn>

<us>
#### Basic
Basic usage of checkbox
</us>

```vue
<template>
  <m-checkbox @change="onChange">
    Checkbox
  </m-checkbox>
</template>
<script>
export default {
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
};
</script>
```
