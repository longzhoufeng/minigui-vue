<cn>
#### 自定义位置
自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭
</cn>

<us>
#### Custom Placement
The Drawer can appear from any edge of the screen.
</us>

```vue
<template>
  <div>
    <m-radio-group style="margin-right: 8px" :default-value="placement" @change="onChange">
      <m-radio value="top">
        top
      </m-radio>
      <m-radio value="right">
        right
      </m-radio>
      <m-radio value="bottom">
        bottom
      </m-radio>
      <m-radio value="left">
        left
      </m-radio>
    </m-radio-group>
    <m-button type="primary" @click="showDrawer">
      Open
    </m-button>
    <m-drawer
      title="Basic Drawer"
      :placement="placement"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </m-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'left',
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      this.placement = e.target.value;
    },
  },
};
</script>
```
