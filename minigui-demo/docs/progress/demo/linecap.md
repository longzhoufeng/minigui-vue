<cn>
#### 圆角/方角边缘
`strokeLinecap="square|round"` 可以调整进度条边缘的形状。
</cn>

<us>
#### Square linecaps
`strokeLinecap="square|round"` 可以调整进度条边缘的形状。
</us>

```vue
<template>
  <div>
    <m-progress stroke-linecap="square" :percent="75" />
    <m-progress stroke-linecap="square" :percent="75" type="circle" />
    <m-progress stroke-linecap="square" :percent="75" type="dashboard" />
  </div>
</template>
```
