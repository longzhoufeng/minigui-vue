<cn>
#### 基本用法
最简单的用法。
</cn>

<us>
#### Basic
The most basic usage.
</us>

```vue
<template>
  <m-tree-select
    v-model="value"
    show-search
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    tree-default-expand-all
  >
    <m-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <m-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
        <m-tree-select-node key="random" :selectable="false" value="leaf1" title="my leaf" />
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
      treeExpandedKeys: [],
      value: undefined,
    };
  },
};
</script>
```
