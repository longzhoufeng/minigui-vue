<cn>
#### 渲染在当前 DOM
渲染在当前 dom 里。自定义容器，查看 getContainer。
</cn>

<us>
#### Render in current dom
Render in current dom. custom container, check getContainer.
</us>

```vue
<template>
  <div
    :style="{
      height: '200px',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid #ebedf0',
      borderRadius: '2px',
      padding: '48px',
      textAlign: 'center',
      background: '#fafafa',
    }"
  >
    Render in this
    <div style="margin-top: 16px">
      <m-button type="primary" @click="showDrawer">
        Open
      </m-button>
    </div>
    <m-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="onClose"
    >
      <p>Some contents...</p>
    </m-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
```
