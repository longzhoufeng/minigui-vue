<cn>
#### 文字和图标
带有文字和图标。
</cn>

<us>
#### Text & icon
With text and icon.
</us>

```vue
<template>
  <div>
    <m-switch checked-children="开" un-checked-children="关" default-checked />
    <br />
    <m-switch checked-children="1" un-checked-children="0" />
    <br />
    <m-switch default-checked>
      <m-icon slot="checkedChildren" type="check" />
      <m-icon slot="unCheckedChildren" type="close" />
    </m-switch>
  </div>
</template>
```
