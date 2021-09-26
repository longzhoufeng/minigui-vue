<cn>
#### 触发事件
点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。
</cn>

<us>
#### Click event
An event will be triggered when you click menu items, in which you can make different operations according to item's key.
</us>

```vue
<template>
  <m-dropdown>
    <a class="minigui-dropdown-link" @click="e => e.preventDefault()">
      Hover me, Click menu item <m-icon type="down" />
    </a>
    <m-menu slot="overlay" @click="onClick">
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

<script>
export default {
  methods: {
    onClick({ key }) {
      console.log(`Click on item ${key}`);
    },
  },
};
</script>
```
