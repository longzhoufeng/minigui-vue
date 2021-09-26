<cn>
#### 讨嫌的小红点
没有具体的数字。
</cn>

<us>
#### Red badge
This will simply display a red badge, without a specific count.
If count equals 0, it won't display the dot.
</us>

```vue
<template>
  <div id="components-badge-demo-dot">
    <m-badge dot>
      <m-icon type="notification" />
    </m-badge>
    <m-badge :count="0" dot>
      <m-icon type="notification" />
    </m-badge>
    <m-badge dot>
      <a href="#">Link something</a>
    </m-badge>
  </div>
</template>
<style scoped>
#components-badge-demo-dot .anticon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>
```
