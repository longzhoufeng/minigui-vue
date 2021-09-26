<cn>
#### 悬停点击弹出窗口
以下示例显示如何创建可悬停和单击的弹出窗口。
</cn>

<us>
#### Hover with click popover
The following example shows how to create a popover which can be hovered and clicked.
</us>

```vue
<template>
  <m-popover
    style="width: 500px"
    title="Hover title"
    trigger="hover"
    :visible="hovered"
    @visibleChange="handleHoverChange"
  >
    <div slot="content">
      This is hover content.
    </div>
    <m-popover
      title="Click title"
      trigger="click"
      :visible="clicked"
      @visibleChange="handleClickChange"
    >
      <div slot="content">
        <div>This is click content.</div>
        <a @click="hide">Close</a>
      </div>
      <m-button>Hover and click / 悬停并单击</m-button>
    </m-popover>
  </m-popover>
</template>
<script>
export default {
  data() {
    return {
      clicked: false,
      hovered: false,
    };
  },
  methods: {
    hide() {
      this.clicked = false;
      this.hovered = false;
    },
    handleHoverChange(visible) {
      this.clicked = false;
      this.hovered = visible;
    },
    handleClickChange(visible) {
      this.clicked = visible;
      this.hovered = false;
    },
  },
};
</script>
```
