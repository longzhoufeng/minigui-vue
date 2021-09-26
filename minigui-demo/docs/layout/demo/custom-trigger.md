<cn>
#### 自定义触发器
要使用自定义触发器，可以设置 `:trigger="null"` 来隐藏默认设定。
</cn>

<us>
#### Custom trigger
If you want to use a customized trigger, you can hide the default one by setting `:trigger="null"`.
</us>

```vue
<template>
  <m-layout id="components-layout-demo-custom-trigger">
    <m-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <m-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <m-menu-item key="1">
          <m-icon type="user" />
          <span>nav 1</span>
        </m-menu-item>
        <m-menu-item key="2">
          <m-icon type="video-camera" />
          <span>nav 2</span>
        </m-menu-item>
        <m-menu-item key="3">
          <m-icon type="upload" />
          <span>nav 3</span>
        </m-menu-item>
      </m-menu>
    </m-layout-sider>
    <m-layout>
      <m-layout-header style="background: #fff; padding: 0">
        <m-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </m-layout-header>
      <m-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </m-layout-content>
    </m-layout>
  </m-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
```
