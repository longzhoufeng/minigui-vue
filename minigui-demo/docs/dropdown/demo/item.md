<cn>
#### 其他元素
分割线和不可用菜单项。
</cn>

<us>
#### Other elements
Divider and disabled menu item.
</us>

```vue
<template>
  <m-dropdown>
    <a class="minigui-dropdown-link" @click="e => e.preventDefault()">
      Hover me <m-icon type="down" />
    </a>
    <m-menu slot="overlay">
      <m-menu-item key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
      </m-menu-item>
      <m-menu-item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
      </m-menu-item>
      <m-menu-divider />
      <m-menu-item key="3" disabled>
        3rd menu item（disabled）
      </m-menu-item>
    </m-menu>
  </m-dropdown>
</template>
```
