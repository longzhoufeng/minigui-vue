<cn>
#### 垂直菜单
子菜单是弹出的形式。
</cn>

<us>
#### Vertical menu
Submenus open as pop-ups.
</us>

```vue
<template>
  <div>
    <m-menu style="width: 256px" mode="vertical" @click="handleClick">
      <m-menu-item key="1">
        <m-icon type="mail" />
        Navigation One
      </m-menu-item>
      <m-menu-item key="2">
        <m-icon type="calendar" />
        Navigation Two
      </m-menu-item>
      <m-sub-menu key="sub1">
        <span slot="title"><m-icon type="appstore" /><span>Navigation Three</span></span>
        <m-menu-item key="3">
          Option 3
        </m-menu-item>
        <m-menu-item key="4">
          Option 4
        </m-menu-item>
        <m-sub-menu key="sub1-2" title="Submenu">
          <m-menu-item key="5">
            Option 5
          </m-menu-item>
          <m-menu-item key="6">
            Option 6
          </m-menu-item>
        </m-sub-menu>
      </m-sub-menu>
      <m-sub-menu key="sub2">
        <span slot="title"><m-icon type="setting" /><span>Navigation Four</span></span>
        <m-menu-item key="7">
          Option 7
        </m-menu-item>
        <m-menu-item key="8">
          Option 8
        </m-menu-item>
        <m-menu-item key="9">
          Option 9
        </m-menu-item>
        <m-menu-item key="10">
          Option 10
        </m-menu-item>
      </m-sub-menu>
    </m-menu>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(e) {
      console.log('click ', e);
    },
  },
};
</script>
```
