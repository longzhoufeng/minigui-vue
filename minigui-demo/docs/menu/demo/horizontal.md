<cn>
#### 顶部导航
水平的顶部导航菜单。
</cn>

<us>
#### Top Navigation
Horizontal top navigation menu.
</us>

```vue
<template>
  <div>
    <m-menu v-model="current" mode="horizontal">
      <m-menu-item key="mail"> <m-icon type="mail" />Navigation One </m-menu-item>
      <m-menu-item key="app" disabled> <m-icon type="appstore" />Navigation Two </m-menu-item>
      <m-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><m-icon type="setting" />Navigation Three - Submenu</span
        >
        <m-menu-item-group title="Item 1">
          <m-menu-item key="setting:1">
            Option 1
          </m-menu-item>
          <m-menu-item key="setting:2">
            Option 2
          </m-menu-item>
        </m-menu-item-group>
        <m-menu-item-group title="Item 2">
          <m-menu-item key="setting:3">
            Option 3
          </m-menu-item>
          <m-menu-item key="setting:4">
            Option 4
          </m-menu-item>
        </m-menu-item-group>
      </m-sub-menu>
      <m-menu-item key="alipay">
        <a href="#" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </m-menu-item>
    </m-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
    };
  },
};
</script>
```
