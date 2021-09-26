<cn>
#### 分段进度条
标准的进度条。
</cn>

<us>
#### Progress bar with success segment
A standard progress bar.
</us>

```vue
<template>
  <div>
    <m-tooltip title="3 done / 3 in progress / 4 to do">
      <m-progress :percent="60" :success-percent="30" />
    </m-tooltip>
    <m-tooltip title="3 done / 3 in progress / 4 to do">
      <m-progress :percent="60" :success-percent="30" type="circle" />
    </m-tooltip>
    <m-tooltip title="3 done / 3 in progress / 4 to do">
      <m-progress :percent="60" :success-percent="30" type="dashboard" />
    </m-tooltip>
  </div>
</template>
```
