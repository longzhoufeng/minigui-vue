<cn>
#### 自定义进度条渐变色
`linear-gradient` 的封装。推荐只传两种颜色。
</cn>

<us>
#### Custom line gradient
A package of `linear-gradient`. It is recommended to only pass two colors.
</us>

```vue
<template>
  <div>
    <m-progress
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="99.9"
    />
    <m-progress
      :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
      :percent="99.9"
      status="active"
    />
    <m-progress
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="90"
    />
    <m-progress
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="100"
    />
  </div>
</template>
```
