<cn>
#### 小型进度圈
小一号的圈形进度。
</cn>

<us>
#### Mini size circular progress bar
A smaller circular progress bar.
</us>

```vue
<template>
  <div>
    <m-progress type="circle" :percent="30" :width="80" />
    <m-progress type="circle" :percent="70" :width="80" status="exception" />
    <m-progress type="circle" :percent="100" :width="80" />
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
