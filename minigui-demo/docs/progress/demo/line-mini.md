<cn>
#### 小型进度条
适合放在较狭窄的区域内。
</cn>

<us>
#### Mini size progress bar
Appropriate for a narrow area.
</us>

```vue
<template>
  <div style="width: 170px">
    <m-progress :percent="30" size="small" />
    <m-progress :percent="50" size="small" status="active" />
    <m-progress :percent="70" size="small" status="exception" />
    <m-progress :percent="100" size="small" />
  </div>
</template>
```
