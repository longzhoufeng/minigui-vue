<cn>
#### 自定义触发字符
通过 prefix 属性自定义触发字符。默认为 @, 可以定义为数组。
</cn>

<us>
#### Customize Trigger Token
Customize Trigger Token by `prefix` props. Default to `@`, `Array<string>` also supported.
</us>

```vue
<template>
  <m-mentions
    placeholder="input @ to mention people, # to mention tag"
    :prefix="['@', '#']"
    @search="onSearch"
  >
    <m-mentions-option v-for="value in MOCK_DATA[prefix] || []" :key="value" :value="value">
      {{ value }}
    </m-mentions-option>
  </m-mentions>
</template>
<script>
const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

export default {
  data() {
    return {
      prefix: '@',
      MOCK_DATA,
    };
  },
  methods: {
    onSearch(_, prefix) {
      console.log(_, prefix);
      this.prefix = prefix;
    },
  },
};
</script>
```
