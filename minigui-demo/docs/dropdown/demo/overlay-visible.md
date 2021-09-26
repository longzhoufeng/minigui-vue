<cn>
#### 菜单隐藏方式
默认是点击关闭菜单，可以关闭此功能。
</cn>

<us>
#### The way of hiding menu.
The default is to close the menu when you click on menu items, this feature can be turned off.
</us>

```vue
<template>
  <m-dropdown v-model="visible">
    <a class="minigui-dropdown-link" @click="e => e.preventDefault()">
      Hover me <m-icon type="down" />
    </a>
    <m-menu slot="overlay" @click="handleMenuClick">
      <m-menu-item key="1">
        Clicking me will not close the menu.
      </m-menu-item>
      <m-menu-item key="2">
        Clicking me will not close the menu also.
      </m-menu-item>
      <m-menu-item key="3">
        Clicking me will close the menu
      </m-menu-item>
    </m-menu>
  </m-dropdown>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleMenuClick(e) {
      if (e.key === '3') {
        this.visible = false;
      }
    },
  },
};
</script>
```
