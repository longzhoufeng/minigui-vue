<cn>
#### 连接线
带连接线的树。
</cn>

<us>
#### Tree With Line
Tree With Line
</us>

```vue
<template>
  <div>
    <div style="margin-bottom: 16px">
      showLine: <m-switch v-model="showLine" />
      <br />
      <br />
      showIcon: <m-switch v-model="showIcon" />
    </div>
    <m-tree
      :show-line="showLine"
      :show-icon="showIcon"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
      @select="onSelect"
    >
      <m-icon slot="icon" type="carry-out" />
      <m-tree-node key="0-0">
        <m-icon slot="icon" type="carry-out" />
        <span slot="title" style="color: #1890ff">parent 1</span>
        <m-tree-node key="0-0-0" title="parent 1-0">
          <m-icon slot="icon" type="carry-out" />
          <m-tree-node key="0-0-0-0" title="leaf">
            <m-icon slot="icon" type="carry-out" />
          </m-tree-node>
          <m-tree-node key="0-0-0-1" title="leaf">
            <m-icon slot="icon" type="carry-out" />
          </m-tree-node>
          <m-tree-node key="0-0-0-2" title="leaf">
            <m-icon slot="icon" type="carry-out" />
          </m-tree-node>
        </m-tree-node>
        <m-tree-node key="0-0-1" title="parent 1-1">
          <m-icon slot="icon" type="carry-out" />
          <m-tree-node key="0-0-1-0" title="leaf">
            <m-icon slot="icon" type="carry-out" />
          </m-tree-node>
        </m-tree-node>
        <m-tree-node key="0-0-2" title="parent 1-2">
          <m-icon slot="icon" type="carry-out" />
          <m-tree-node key="0-0-2-0" title="leaf">
            <m-icon slot="icon" type="carry-out" />
          </m-tree-node>
          <m-tree-node key="0-0-2-1" title="leaf">
            <m-icon slot="icon" type="carry-out" />
            <m-icon slot="switcherIcon" type="form" />
          </m-tree-node>
        </m-tree-node>
      </m-tree-node>
    </m-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLine: true,
      showIcon: false,
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
  },
};
</script>
```
