<cn>
#### 自定义输入组件
自定义输入组件。
</cn>

<us>
#### Customize Input Component
Customize Input Component
</us>

```vue
<template>
  <m-auto-complete
    :data-source="dataSource"
    style="width: 200px"
    @search="handleSearch"
    @select="onSelect"
  >
    <m-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      @keypress="handleKeyPress"
    />
  </m-auto-complete>
</template>
<script>
export default {
  data() {
    return {
      dataSource: [],
    };
  },
  methods: {
    onSelect(value) {
      console.log('onSelect', value);
    },
    handleSearch(value) {
      this.dataSource = !value ? [] : [value, value + value, value + value + value];
    },
    handleKeyPress(ev) {
      console.log('handleKeyPress', ev);
    },
  },
};
</script>
```
