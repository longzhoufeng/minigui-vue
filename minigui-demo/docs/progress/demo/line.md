<cn>
#### 进度条
标准的进度条。
</cn>

<us>
#### Progress bar
A standard progress bar.
</us>

```vue
<template>
  <div>
    <m-progress :percent="30" />
    <m-progress :percent="50" status="active" />
    <m-progress :percent="70" status="exception" />
    <m-progress :percent="100" />
    <m-progress :percent="50" :show-info="false" />
  </div>
</template>
```
