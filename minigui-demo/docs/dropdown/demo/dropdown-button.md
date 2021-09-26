<cn>
#### 带下拉框的按钮
左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。
</cn>

<us>
#### Button with dropdown menu
A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.
</us>

```vue
<template>
  <div>
    <m-dropdown-button @click="handleButtonClick">
      Dropdown
      <m-menu slot="overlay" @click="handleMenuClick">
        <m-menu-item key="1"> <m-icon type="user" />1st menu item </m-menu-item>
        <m-menu-item key="2"> <m-icon type="user" />2nd menu item </m-menu-item>
        <m-menu-item key="3"> <m-icon type="user" />3rd item </m-menu-item>
      </m-menu>
    </m-dropdown-button>
    <m-dropdown-button>
      Dropdown
      <m-menu slot="overlay" @click="handleMenuClick">
        <m-menu-item key="1"> <m-icon type="user" />1st menu item </m-menu-item>
        <m-menu-item key="2"> <m-icon type="user" />2nd menu item </m-menu-item>
        <m-menu-item key="3"> <m-icon type="user" />3rd item </m-menu-item>
      </m-menu>
      <m-icon slot="icon" type="user" />
    </m-dropdown-button>
    <m-dropdown-button disabled style="margin-left: 8px" @click="handleButtonClick">
      Dropdown
      <m-menu slot="overlay" @click="handleMenuClick">
        <m-menu-item key="1"> <m-icon type="user" />1st menu item </m-menu-item>
        <m-menu-item key="2"> <m-icon type="user" />2nd menu item </m-menu-item>
        <m-menu-item key="3"> <m-icon type="user" />3rd item </m-menu-item>
      </m-menu>
    </m-dropdown-button>
    <m-dropdown>
      <m-menu slot="overlay" @click="handleMenuClick">
        <m-menu-item key="1"> <m-icon type="user" />1st menu item </m-menu-item>
        <m-menu-item key="2"> <m-icon type="user" />2nd menu item </m-menu-item>
        <m-menu-item key="3"> <m-icon type="user" />3rd item </m-menu-item>
      </m-menu>
      <m-button style="margin-left: 8px"> Button <m-icon type="down" /> </m-button>
    </m-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
};
</script>
```
