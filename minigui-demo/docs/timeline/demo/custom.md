<cn>
#### 自定义时间轴点
基本的时间轴。
</cn>

<us>
#### Custom
Set a node as an icon or other custom element.
</us>

```vue
<template>
  <m-timeline>
    <m-timeline-item>Create a services site 2015-09-01</m-timeline-item>
    <m-timeline-item>Solve initial network problems 2015-09-01</m-timeline-item>
    <m-timeline-item color="red">
      <m-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
      Technical testing 2015-09-01
    </m-timeline-item>
    <m-timeline-item>Network problems being solved 2015-09-01</m-timeline-item>
  </m-timeline>
</template>
```
