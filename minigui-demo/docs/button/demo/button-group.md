<cn>
#### 按钮组合
可以将多个 `Button` 放入 `Button.Group` 的容器中。
通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。
</cn>

<us>
#### Button Group
Buttons can be grouped by placing multiple `Button` components into a `Button.Group`.
The `size` can be set to `large`, `small` or left unset resulting in a default size.
</us>

```vue
<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <m-button-group>
      <m-button>Cancel</m-button>
      <m-button type="primary">
        OK
      </m-button>
    </m-button-group>
    <m-button-group>
      <m-button disabled>
        L
      </m-button>
      <m-button disabled>
        M
      </m-button>
      <m-button disabled>
        R
      </m-button>
    </m-button-group>
    <m-button-group>
      <m-button type="primary">
        L
      </m-button>
      <m-button>M</m-button>
      <m-button>M</m-button>
      <m-button type="dashed">
        R
      </m-button>
    </m-button-group>

    <h4>With Icon</h4>
    <m-button-group>
      <m-button type="primary"> <m-icon type="left" />Go back </m-button>
      <m-button type="primary"> Go forward<m-icon type="right" /> </m-button>
    </m-button-group>
    <m-button-group>
      <m-button type="primary" icon="cloud" />
      <m-button type="primary" icon="cloud-download" />
    </m-button-group>
  </div>
</template>
<style>
#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .minigui-btn-group {
  margin-right: 8px;
}
</style>
```
