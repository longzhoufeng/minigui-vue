<cn>
#### 自动分词
试下复制 `露西,杰克` 到输入框里。只在 tags 和 multiple 模式下可用。
</cn>

<us>
#### Automatic tokenization
Try to copy `Lucy,Jack` to the input. Only available in tags and multiple mode.
</us>

```vue
<template>
  <m-select mode="tags" style="width: 100%" :token-separators="[',']" @change="handleChange">
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
