<cn>
  #### 无边框
  在灰色背景上使用无边框的卡片
</cn>

<us>
  #### No border
  A borderless card on a gray background.
</us>

```vue
<template>
  <div style="background:#ECECEC; padding:30px">
    <m-card title="Card title" :bordered="false" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </m-card>
  </div>
</template>
```
