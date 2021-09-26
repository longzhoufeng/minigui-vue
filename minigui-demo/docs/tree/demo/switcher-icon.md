<cn>
#### 自定义展开/折叠图标
自定义展开/折叠图标。
</cn>

<us>
#### Customize collapse/expand icon
customize collapse/expand icon of tree node
</us>

```vue
<template>
  <m-tree show-line :default-expanded-keys="['0-0-0']" @select="onSelect">
    <m-icon slot="switcherIcon" type="down" />
    <m-tree-node key="0-0" title="parent 1">
      <m-tree-node key="0-0-0" title="parent 1-0">
        <m-tree-node key="0-0-0-0" title="leaf" />
        <m-tree-node key="0-0-0-1" title="leaf" />
        <m-tree-node key="0-0-0-2" title="leaf" />
      </m-tree-node>
      <m-tree-node key="0-0-1" title="parent 1-1">
        <m-tree-node key="0-0-1-0" title="leaf" />
      </m-tree-node>
      <m-tree-node key="0-0-2" title="parent 1-2">
        <m-tree-node key="0-0-2-0" title="leaf" />
        <m-tree-node key="0-0-2-1" title="leaf" />
      </m-tree-node>
    </m-tree-node>
  </m-tree>
</template>
<script>
export default {
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
  },
};
</script>
```
