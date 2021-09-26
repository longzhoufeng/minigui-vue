<cn>
#### 弹出位置
支持 6 个弹出位置。
</cn>

<us>
#### Placement
Support 6 placements.
</us>

```vue
<template>
  <div id="components-dropdown-demo-placement">
    <template v-for="(placement, index) in placements">
      <m-dropdown :placement="placement">
        <m-button>{{ placement }}</m-button>
        <m-menu slot="overlay">
          <m-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"
              >1st menu item</a
            >
          </m-menu-item>
          <m-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"
              >2nd menu item</a
            >
          </m-menu-item>
          <m-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"
              >3rd menu item</a
            >
          </m-menu-item>
        </m-menu>
      </m-dropdown>
      <br v-if="index === 2" />
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placements: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
    };
  },
};
</script>
<style>
#components-dropdown-demo-placement .minigui-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
