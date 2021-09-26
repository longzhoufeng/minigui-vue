<cn>
#### 渐显
切换效果为渐显。
</cn>

<us>
#### Fade in
Slides use fade for transition.
</us>

```vue
<template>
  <m-carousel effect="fade">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </m-carousel>
</template>
<script>
export default {};
</script>
<style scoped>
/* For demo */
.minigui-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.minigui-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
```
