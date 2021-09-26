<cn>
#### 基本结构
典型的页面布局。
</cn>

<us>
#### Basic Structure
Classic page layouts.
</us>

```vue
<template>
  <div id="components-layout-demo-basic">
    <m-layout>
      <m-layout-header>Header</m-layout-header>
      <m-layout-content>Content</m-layout-content>
      <m-layout-footer>Footer</m-layout-footer>
    </m-layout>

    <m-layout>
      <m-layout-header>Header</m-layout-header>
      <m-layout>
        <m-layout-sider>Sider</m-layout-sider>
        <m-layout-content>Content</m-layout-content>
      </m-layout>
      <m-layout-footer>Footer</m-layout-footer>
    </m-layout>

    <m-layout>
      <m-layout-header>Header</m-layout-header>
      <m-layout>
        <m-layout-content>Content</m-layout-content>
        <m-layout-sider>Sider</m-layout-sider>
      </m-layout>
      <m-layout-footer>Footer</m-layout-footer>
    </m-layout>

    <m-layout>
      <m-layout-sider>Sider</m-layout-sider>
      <m-layout>
        <m-layout-header>Header</m-layout-header>
        <m-layout-content>Content</m-layout-content>
        <m-layout-footer>Footer</m-layout-footer>
      </m-layout>
    </m-layout>
  </div>
</template>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .minigui-layout-header,
#components-layout-demo-basic .minigui-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .minigui-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .minigui-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .minigui-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .minigui-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .minigui-layout:last-child {
  margin: 0;
}
</style>
```
