<cn>
#### 多个按钮组合
按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 `Dropdown.Button` 中组合使用。
</cn>

<us>
#### Multiple Buttons
If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into `Dropdown.Button`.
</us>

```vue
<template>
  <div>
    <m-button type="primary">
      Primary
    </m-button>
    <m-button>secondary</m-button>
    <m-dropdown>
      <m-menu slot="overlay" @click="handleMenuClick">
        <m-menu-item key="1">
          1st item
        </m-menu-item>
        <m-menu-item key="2">
          2nd item
        </m-menu-item>
        <m-menu-item key="3">
          3rd item
        </m-menu-item>
      </m-menu>
      <m-button> Actions <m-icon type="down" /> </m-button>
    </m-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
};
</script>
```
