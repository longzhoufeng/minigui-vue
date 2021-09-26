<cn>
#### 不可用状态
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
</cn>

<us>
#### Disabled
To mark a button as disabled, add the `disabled` property to the `Button`.
</us>

```vue
<template>
  <div>
    <m-button type="primary">
      Primary
    </m-button>
    <m-button type="primary" disabled>
      Primary(disabled)
    </m-button>
    <br />
    <m-button>Default</m-button>
    <m-button disabled>
      Default(disabled)
    </m-button>
    <br />
    <m-button type="dashed">
      Dashed
    </m-button>
    <m-button type="dashed" disabled>
      Dashed(disabled)
    </m-button>
    <br />
    <m-button type="link">
      Link
    </m-button>
    <m-button type="link" disabled>
      Link(disabled)
    </m-button>
    <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
      <m-button ghost>
        Ghost
      </m-button>
      <m-button ghost disabled>
        Ghost(disabled)
      </m-button>
    </div>
  </div>
</template>
```
