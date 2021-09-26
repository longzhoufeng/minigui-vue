<cn>
#### 基本
最简单的下拉菜单。
</cn>

<us>
#### Basic
The most basic dropdown menu.
</us>

```vue
<template>
  <m-dropdown>
    <a class="minigui-dropdown-link" @click="e => e.preventDefault()">
      Hover me <m-icon type="down" />
    </a>
    <m-menu slot="overlay">
      <m-menu-item>
        <a href="javascript:;">1st menu item</a>
      </m-menu-item>
      <m-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </m-menu-item>
      <m-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </m-menu-item>
    </m-menu>
  </m-dropdown>
</template>
```
