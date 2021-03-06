<cn>
#### 缩起内嵌菜单
内嵌菜单可以被缩起/展开。
</cn>

<us>
#### Collapsed inline menu
Inline menu could be collapsed.
</us>

```vue
<template>
  <div style="width: 256px">
    <m-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <m-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </m-button>
    <m-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <m-menu-item key="1">
        <m-icon type="pie-chart" />
        <span>Option 1</span>
      </m-menu-item>
      <m-menu-item key="2">
        <m-icon type="desktop" />
        <span>Option 2</span>
      </m-menu-item>
      <m-menu-item key="3">
        <m-icon type="inbox" />
        <span>Option 3</span>
      </m-menu-item>
      <m-sub-menu key="sub1">
        <span slot="title"><m-icon type="mail" /><span>Navigation One</span></span>
        <m-menu-item key="5">
          Option 5
        </m-menu-item>
        <m-menu-item key="6">
          Option 6
        </m-menu-item>
        <m-menu-item key="7">
          Option 7
        </m-menu-item>
        <m-menu-item key="8">
          Option 8
        </m-menu-item>
      </m-sub-menu>
      <m-sub-menu key="sub2">
        <span slot="title"><m-icon type="appstore" /><span>Navigation Two</span></span>
        <m-menu-item key="9">
          Option 9
        </m-menu-item>
        <m-menu-item key="10">
          Option 10
        </m-menu-item>
        <m-sub-menu key="sub3" title="Submenu">
          <m-menu-item key="11">
            Option 11
          </m-menu-item>
          <m-menu-item key="12">
            Option 12
          </m-menu-item>
        </m-sub-menu>
      </m-sub-menu>
    </m-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
```
