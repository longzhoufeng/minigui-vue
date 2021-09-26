<cn>
#### 设置锚点滚动偏移量
锚点目标滚动到屏幕正中间。
</cn>

<us>
#### Set Anchor scroll offset
Anchor target scroll to screen center.
</us>

```vue
<template>
  <m-anchor :target-offset="targetOffset">
    <m-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <m-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <m-anchor-link href="#API" title="API">
      <m-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <m-anchor-link href="#Link-Props" title="Link Props" />
    </m-anchor-link>
  </m-anchor>
</template>
<script>
export default {
  data() {
    return {
      targetOffset: undefined,
    };
  },
  mounted() {
    this.targetOffset = window.innerHeight / 2;
  },
};
</script>
```
