<cn>
#### 侧边布局
侧边两列式布局。页面横向空间有限时，侧边导航可收起。
侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。
</cn>

<us>
#### Sider
Two-columns layout. The sider menu can be collapsed when horizontal space is limited.
Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable.
The level of the aside navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents
</us>

```vue
<template>
  <m-layout id="components-layout-demo-side" style="min-height: 100vh">
    <m-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <m-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <m-menu-item key="1">
          <m-icon type="pie-chart" />
          <span>Option 1</span>
        </m-menu-item>
        <m-menu-item key="2">
          <m-icon type="desktop" />
          <span>Option 2</span>
        </m-menu-item>
        <m-sub-menu key="sub1">
          <span slot="title"><m-icon type="user" /><span>User</span></span>
          <m-menu-item key="3">
            Tom
          </m-menu-item>
          <m-menu-item key="4">
            Bill
          </m-menu-item>
          <m-menu-item key="5">
            Alex
          </m-menu-item>
        </m-sub-menu>
        <m-sub-menu key="sub2">
          <span slot="title"><m-icon type="team" /><span>Team</span></span>
          <m-menu-item key="6">
            Team 1
          </m-menu-item>
          <m-menu-item key="8">
            Team 2
          </m-menu-item>
        </m-sub-menu>
        <m-menu-item key="9">
          <m-icon type="file" />
          <span>File</span>
        </m-menu-item>
      </m-menu>
    </m-layout-sider>
    <m-layout>
      <m-layout-header style="background: #fff; padding: 0" />
      <m-layout-content style="margin: 0 16px">
        <m-breadcrumb style="margin: 16px 0">
          <m-breadcrumb-item>User</m-breadcrumb-item>
          <m-breadcrumb-item>Bill</m-breadcrumb-item>
        </m-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>
      </m-layout-content>
      <m-layout-footer style="text-align: center">
        Minigui Vue©2020 Created by Minigui
      </m-layout-footer>
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
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
```
