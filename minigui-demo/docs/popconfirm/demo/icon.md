<cn>
#### 自定义 Icon 图标
使用 `icon` 自定义提示 `icon`。
</cn>

<us>
#### Customize icon
Set `icon` props to customize the icon.
</us>

```vue
<template>
  <m-popconfirm title="Are you sure？">
    <m-icon slot="icon" type="question-circle-o" style="color: red" />
    <a href="#">Delete</a>
  </m-popconfirm>
</template>
```
