<cn>
#### 内嵌菜单
垂直菜单，子菜单内嵌在菜单区域。
</cn>

<us>
#### Inline menu
Vertical menu with inline submenus.
</us>

```vue
<template>
  <div>
    <m-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      @click="handleClick"
    >
      <m-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><m-icon type="mail" /><span>Navigation One</span></span>
        <m-menu-item-group key="g1">
          <template slot="title"> <m-icon type="qq" /><span>Item 1</span> </template>
          <m-menu-item key="1">
            Option 1
          </m-menu-item>
          <m-menu-item key="2">
            Option 2
          </m-menu-item>
        </m-menu-item-group>
        <m-menu-item-group key="g2" title="Item 2">
          <m-menu-item key="3">
            Option 3
          </m-menu-item>
          <m-menu-item key="4">
            Option 4
          </m-menu-item>
        </m-menu-item-group>
      </m-sub-menu>
      <m-sub-menu key="sub2" @titleClick="titleClick">
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
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>
```
