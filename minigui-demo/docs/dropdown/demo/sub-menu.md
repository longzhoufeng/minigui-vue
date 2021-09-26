<cn>
#### 多级菜单
传入的菜单里有多个层级。
</cn>

<us>
#### Cascading menu
The menu has multiple levels.
</us>

```vue
<template>
  <m-dropdown>
    <a class="minigui-dropdown-link" @click="e => e.preventDefault()">
      Cascading menu <m-icon type="down" />
    </a>
    <m-menu slot="overlay">
      <m-menu-item>1st menu item</m-menu-item>
      <m-menu-item>2nd menu item</m-menu-item>
      <m-sub-menu key="test" title="sub menu">
        <m-menu-item>3rd menu item</m-menu-item>
        <m-menu-item>4th menu item</m-menu-item>
      </m-sub-menu>
      <m-sub-menu title="disabled sub menu" disabled>
        <m-menu-item>5d menu item</m-menu-item>
        <m-menu-item>6th menu item</m-menu-item>
      </m-sub-menu>
    </m-menu>
  </m-dropdown>
</template>
```
