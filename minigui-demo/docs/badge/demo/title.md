<cn>
#### 自定义标题
  设置鼠标放在状态点上时显示的文字
</cn>

<us>
#### Title
  The badge will display `title` when hovered over, instead of `count`.
</us>

```vue
<template>
  <div id="components-badge-demo-title">
    <m-badge :count="5" title="Custom hover text">
      <a href="#" class="head-example" />
    </m-badge>
  </div>
</template>
<style scoped>
#components-badge-demo-title .minigui-badge:not(.minigui-badge-status) {
  margin-right: 20px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
</style>
```
