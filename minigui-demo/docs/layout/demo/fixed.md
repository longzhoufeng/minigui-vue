<cn>
#### 固定头部
一般用于固定顶部导航，方便页面切换。
</cn>

<us>
#### Fixed Header
Fixed Header is generally used to fix the top navigation to facilitate page switching.
</us>

```vue
<template>
  <m-layout id="components-layout-demo-fixed">
    <m-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <m-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <m-menu-item key="1">
          nav 1
        </m-menu-item>
        <m-menu-item key="2">
          nav 2
        </m-menu-item>
        <m-menu-item key="3">
          nav 3
        </m-menu-item>
      </m-menu>
    </m-layout-header>
    <m-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <m-breadcrumb :style="{ margin: '16px 0' }">
        <m-breadcrumb-item>Home</m-breadcrumb-item>
        <m-breadcrumb-item>List</m-breadcrumb-item>
        <m-breadcrumb-item>App</m-breadcrumb-item>
      </m-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        Content
      </div>
    </m-layout-content>
    <m-layout-footer :style="{ textAlign: 'center' }">
      Minigui Vue©2020 Created by Minigui
    </m-layout-footer>
  </m-layout>
</template>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
```
