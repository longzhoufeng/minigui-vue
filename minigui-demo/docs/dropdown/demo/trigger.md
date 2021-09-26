<cn>
#### 触发方式
默认是移入触发菜单，可以点击触发。
</cn>

<us>
#### Trigger mode
The default trigger mode is `hover`, you can change it to `click`.
</us>

```vue
<template>
  <m-dropdown :trigger="['click']">
    <a class="minigui-dropdown-link" @click="e => e.preventDefault()">
      Click me <m-icon type="down" />
    </a>
    <m-menu slot="overlay">
      <m-menu-item key="0">
        <a href="http://www.minigui.com.cn/">1st menu item</a>
      </m-menu-item>
      <m-menu-item key="1">
        <a href="http://www.minigui.com.cn/">2nd menu item</a>
      </m-menu-item>
      <m-menu-divider />
      <m-menu-item key="3">
        3rd menu item
      </m-menu-item>
    </m-menu>
  </m-dropdown>
</template>
```
