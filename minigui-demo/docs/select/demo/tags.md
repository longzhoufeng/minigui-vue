<cn>
#### 标签
tags select，随意输入的内容（scroll the menu）
</cn>

<us>
#### Tags
Select with tags, transform input to tag (scroll the menu)
</us>

```vue
<template>
  <m-select mode="tags" style="width: 100%" placeholder="Tags Mode" @change="handleChange">
    <m-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </m-select-option>
  </m-select>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
```
