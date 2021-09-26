<cn>
#### 进度圈
圈形的进度。
</cn>

<us>
#### Circular progress bar
A circular progress bar.
</us>

```vue
<template>
  <div>
    <m-progress type="circle" :percent="75" />
    <m-progress type="circle" :percent="70" status="exception" />
    <m-progress type="circle" :percent="100" />
  </div>
</template>
<style scoped>
.minigui-progress-circle-wrap,
.minigui-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
```
