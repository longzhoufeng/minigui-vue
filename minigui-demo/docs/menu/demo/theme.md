<cn>
#### 主题
内建了两套主题 `light|dark`，默认 `light`。
</cn>

<us>
#### Menu Themes
There are two built-in themes: 'light' and 'dark'. The default value is 'light'.
</us>

```vue
<template>
  <div>
    <m-switch
      default-checked
      checked-children="dark"
      un-checked-children="light"
      @change="changeTheme"
    />
    <br />
    <br />
    <m-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      :theme="theme"
      :selected-keys="[current]"
      @click="handleClick"
    >
      <m-menu-item key="1">
        <m-icon type="mail" />
        Navigation One
      </m-menu-item>
      <m-menu-item key="2">
        <m-icon type="calendar" />
        Navigation Two
      </m-menu-item>
      <m-sub-menu key="sub1">
        <span slot="title"><m-icon type="appstore" /><span>Navigation Three</span></span>
        <m-menu-item key="3">
          Option 3
        </m-menu-item>
        <m-menu-item key="4">
          Option 4
        </m-menu-item>
        <m-sub-menu key="sub1-2" title="Submenu">
          <m-menu-item key="5">
            Option 5
          </m-menu-item>
          <m-menu-item key="6">
            Option 6
          </m-menu-item>
        </m-sub-menu>
      </m-sub-menu>
      <m-sub-menu key="sub2">
        <span slot="title"><m-icon type="setting" /><span>Navigation Four</span></span>
        <m-menu-item key="7">
          Option 7
        </m-menu-item>
        <m-menu-item key="8">
          Option 8
        </m-menu-item>
        <m-menu-item key="9">
          Option 9
        </m-menu-item>
        <m-menu-item key="10">
          Option 10
        </m-menu-item>
      </m-sub-menu>
    </m-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: '1',
      theme: 'dark',
    };
  },
  methods: {
    handleClick(e) {
      console.log('click ', e);
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
  },
};
</script>
```
