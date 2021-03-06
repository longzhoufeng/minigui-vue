<cn>
#### 多选
多选的树选择。
</cn>

<us>
#### Multiple Selection
Multiple selection usage.
</us>

```vue
<template>
  <m-tree-select
    show-search
    style="width: 100%"
    :value="value"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    multiple
    tree-default-expand-all
    @change="onChange"
    @search="onSearch"
    @select="onSelect"
  >
    <m-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <m-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
        <m-tree-select-node key="random" value="leaf1" title="my leaf" />
        <m-tree-select-node key="random1" value="leaf2" title="your leaf" />
      </m-tree-select-node>
      <m-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <m-tree-select-node key="random3" value="sss">
          <b slot="title" style="color: #08c">sss</b>
        </m-tree-select-node>
      </m-tree-select-node>
    </m-tree-select-node>
  </m-tree-select>
</template>

<script>
export default {
  data() {
    return {
      value: undefined,
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
      this.value = value;
    },
    onSearch() {
      console.log(...arguments);
    },
    onSelect() {
      console.log(...arguments);
    },
  },
};
</script>
```
