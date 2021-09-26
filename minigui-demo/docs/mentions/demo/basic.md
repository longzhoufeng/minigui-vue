<cn>
#### 基础列表
基本使用。
</cn>

<us>
#### Basic usage
Basic usage.
</us>

```vue
<template>
  <m-mentions v-model="value" @change="onChange" @select="onSelect">
    <m-mentions-option value="afc163">
      afc163
    </m-mentions-option>
    <m-mentions-option value="zombieJ">
      zombieJ
    </m-mentions-option>
    <m-mentions-option value="yesmeck">
      yesmeck
    </m-mentions-option>
  </m-mentions>
</template>
<script>
export default {
  data() {
    return {
      value: '@afc163',
    };
  },
  methods: {
    onSelect(option) {
      console.log('select', option);
    },
    onChange(value) {
      console.log('Change:', value);
    },
  },
};
</script>
```
