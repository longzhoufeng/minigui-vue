<cn>
#### 多层抽屉
在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。
</cn>

<us>
#### Multi-level drawer
Open a new drawer on top of an existing drawer to handle multi branch tasks.
</us>

```vue
<template>
  <div>
    <m-button type="primary" @click="showDrawer">
      Open
    </m-button>
    <m-drawer
      title="Multi-level drawer"
      width="520"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <m-button type="primary" @click="showChildrenDrawer">
        Two-level drawer
      </m-button>
      <m-drawer
        title="Two-level Drawer"
        width="320"
        :closable="false"
        :visible="childrenDrawer"
        @close="onChildrenDrawerClose"
      >
        <m-button type="primary" @click="showChildrenDrawer">
          This is two-level drawer
        </m-button>
      </m-drawer>
      <div
        :style="{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px',
        }"
      >
        <m-button style="marginRight: 8px" @click="onClose">
          Cancel
        </m-button>
        <m-button type="primary" @click="onClose">
          Submit
        </m-button>
      </div>
    </m-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      childrenDrawer: false,
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    showChildrenDrawer() {
      this.childrenDrawer = true;
    },
    onChildrenDrawerClose() {
      this.childrenDrawer = false;
    },
  },
};
</script>
```
