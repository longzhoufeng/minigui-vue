<cn>
#### 样式自定义
测试一些 `style` 修改样式的行为。
</cn>

<us>
#### Style Customization
Use `style` to change default style.
</us>

```vue
<template>
  <div>
    <m-divider style="height: 2px; background-color: #7cb305" />
    <m-divider style="border-color: #7cb305" dashed />
    <m-divider type="vertical" style="height: 60px; background-color: #7cb305" />
    <m-divider type="vertical" style="height: 60px; border-color: #7cb305" dashed />
  </div>
</template>
```
