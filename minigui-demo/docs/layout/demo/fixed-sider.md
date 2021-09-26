<cn>
#### 固定侧边栏
当内容较长时，使用固定侧边栏可以提供更好的体验。
</cn>

<us>
#### Fixed Sider
When dealing with long content, a fixed sider can provide a better user experience.
</us>

```vue
<template>
  <m-layout id="components-layout-demo-fixed-sider">
    <m-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo" />
      <m-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <m-menu-item key="1">
          <m-icon type="user" />
          <span class="nav-text">nav 1</span>
        </m-menu-item>
        <m-menu-item key="2">
          <m-icon type="video-camera" />
          <span class="nav-text">nav 2</span>
        </m-menu-item>
        <m-menu-item key="3">
          <m-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </m-menu-item>
        <m-menu-item key="4">
          <m-icon type="bar-chart" />
          <span class="nav-text">nav 4</span>
        </m-menu-item>
        <m-menu-item key="5">
          <m-icon type="cloud-o" />
          <span class="nav-text">nav 5</span>
        </m-menu-item>
        <m-menu-item key="6">
          <m-icon type="appstore-o" />
          <span class="nav-text">nav 6</span>
        </m-menu-item>
        <m-menu-item key="7">
          <m-icon type="team" />
          <span class="nav-text">nav 7</span>
        </m-menu-item>
        <m-menu-item key="8">
          <m-icon type="shop" />
          <span class="nav-text">nav 8</span>
        </m-menu-item>
      </m-menu>
    </m-layout-sider>
    <m-layout :style="{ marginLeft: '200px' }">
      <m-layout-header :style="{ background: '#fff', padding: 0 }" />
      <m-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />
          Really
          <br />...<br />...<br />...<br />
          long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
          content
        </div>
      </m-layout-content>
      <m-layout-footer :style="{ textAlign: 'center' }">
        Minigui Vue ©2020 Created by Minigui
      </m-layout-footer>
    </m-layout>
  </m-layout>
</template>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
```
