<cn>
#### 圆圈颜色
圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。
</cn>

<us>
#### Color
Set the color of circles. `green` means completed or success status, `red` means warning or error, and `blue` means ongoing or other default status.
</us>

```vue
<template>
  <m-timeline>
    <m-timeline-item color="green">
      Create a services site 2015-09-01
    </m-timeline-item>
    <m-timeline-item color="green">
      Create a services site 2015-09-01
    </m-timeline-item>
    <m-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </m-timeline-item>
    <m-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </m-timeline-item>
    <m-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </m-timeline-item>
    <m-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </m-timeline-item>
  </m-timeline>
</template>
```
