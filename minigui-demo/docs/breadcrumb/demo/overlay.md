<cn>
  #### 带下拉菜单的面包屑
  面包屑支持下拉菜单。
</cn>

<us>
  #### Bread crumbs with drop down menu
  Breadcrumbs support drop down menu.
</us>

```vue
<template>
  <m-breadcrumb>
    <m-breadcrumb-item>Minigui Vue</m-breadcrumb-item>
    <m-breadcrumb-item><a href="">Component</a></m-breadcrumb-item>
    <m-breadcrumb-item>
      <a href="">General</a>
      <m-menu slot="overlay">
        <m-menu-item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.minigui.com.cn/">
            General
          </a>
        </m-menu-item>
        <m-menu-item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.minigui.com.cn/">
            Layout
          </a>
        </m-menu-item>
        <m-menu-item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.minigui.com.cn/">
            Navigation
          </a>
        </m-menu-item>
      </m-menu>
    </m-breadcrumb-item>
    <m-breadcrumb-item>Button</m-breadcrumb-item>
  </m-breadcrumb>
</template>
```
