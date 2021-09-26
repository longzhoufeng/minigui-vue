<cn>
#### 顶部-侧边布局-通栏
同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。
</cn>

<us>
#### Header Sider 2
Both the top navigation and the sidebar, commonly used in application site.
</us>

```vue
<template>
  <m-layout id="components-layout-demo-top-side-2">
    <m-layout-header class="header">
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
    <m-layout>
      <m-layout-sider width="200" style="background: #fff">
        <m-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <m-sub-menu key="sub1">
            <span slot="title"><m-icon type="user" />subnav 1</span>
            <m-menu-item key="1">
              option1
            </m-menu-item>
            <m-menu-item key="2">
              option2
            </m-menu-item>
            <m-menu-item key="3">
              option3
            </m-menu-item>
            <m-menu-item key="4">
              option4
            </m-menu-item>
          </m-sub-menu>
          <m-sub-menu key="sub2">
            <span slot="title"><m-icon type="laptop" />subnav 2</span>
            <m-menu-item key="5">
              option5
            </m-menu-item>
            <m-menu-item key="6">
              option6
            </m-menu-item>
            <m-menu-item key="7">
              option7
            </m-menu-item>
            <m-menu-item key="8">
              option8
            </m-menu-item>
          </m-sub-menu>
          <m-sub-menu key="sub3">
            <span slot="title"><m-icon type="notification" />subnav 3</span>
            <m-menu-item key="9">
              option9
            </m-menu-item>
            <m-menu-item key="10">
              option10
            </m-menu-item>
            <m-menu-item key="11">
              option11
            </m-menu-item>
            <m-menu-item key="12">
              option12
            </m-menu-item>
          </m-sub-menu>
        </m-menu>
      </m-layout-sider>
      <m-layout style="padding: 0 24px 24px">
        <m-breadcrumb style="margin: 16px 0">
          <m-breadcrumb-item>Home</m-breadcrumb-item>
          <m-breadcrumb-item>List</m-breadcrumb-item>
          <m-breadcrumb-item>App</m-breadcrumb-item>
        </m-breadcrumb>
        <m-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </m-layout-content>
      </m-layout>
    </m-layout>
  </m-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
```
