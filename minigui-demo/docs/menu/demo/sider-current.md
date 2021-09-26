<cn>
#### 只展开当前父级菜单
点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
</cn>

<us>
#### Open current submenu only
Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.
</us>

```vue
<template>
  <div>
    <m-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange">
      <m-sub-menu key="sub1">
        <span slot="title"><m-icon type="mail" /><span>Navigation One</span></span>
        <m-menu-item key="1">
          Option 1
        </m-menu-item>
        <m-menu-item key="2">
          Option 2
        </m-menu-item>
        <m-menu-item key="3">
          Option 3
        </m-menu-item>
        <m-menu-item key="4">
          Option 4
        </m-menu-item>
      </m-sub-menu>
      <m-sub-menu key="sub2">
        <span slot="title"><m-icon type="appstore" /><span>Navigation Two</span></span>
        <m-menu-item key="5">
          Option 5
        </m-menu-item>
        <m-menu-item key="6">
          Option 6
        </m-menu-item>
        <m-sub-menu key="sub3" title="Submenu">
          <m-menu-item key="7">
            Option 7
          </m-menu-item>
          <m-menu-item key="8">
            Option 8
          </m-menu-item>
        </m-sub-menu>
      </m-sub-menu>
      <m-sub-menu key="sub4">
        <span slot="title"><m-icon type="setting" /><span>Navigation Three</span></span>
        <m-menu-item key="9">
          Option 9
        </m-menu-item>
        <m-menu-item key="10">
          Option 10
        </m-menu-item>
        <m-menu-item key="11">
          Option 11
        </m-menu-item>
        <m-menu-item key="12">
          Option 12
        </m-menu-item>
      </m-sub-menu>
    </m-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>
```
