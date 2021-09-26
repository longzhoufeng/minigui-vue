<cn>
#### 右键菜单
默认是移入触发菜单，可以点击鼠标右键触发。
</cn>

<us>
#### Context Menu
The default trigger mode is `hover`, you can change it to `contextMenu`.
</us>

```vue
<template>
  <m-dropdown :trigger="['contextmenu']">
    <div
      :style="{
        textAlign: 'center',
        background: '#f7f7f7',
        height: '200px',
        lineHeight: '200px',
        color: '#777',
      }"
    >
      Right Click on here
    </div>
    <m-menu slot="overlay">
      <m-menu-item key="1">
        1st menu item
      </m-menu-item>
      <m-menu-item key="2">
        2nd menu item
      </m-menu-item>
      <m-menu-item key="3">
        3rd menu item
      </m-menu-item>
    </m-menu>
  </m-dropdown>
</template>
```
