<cn>
#### 自动切换
定时切换下一张。
</cn>

<us>
#### Scroll automatically
Timing of scrolling to the next card/picture.
</us>

```vue
<template>
  <m-carousel autoplay>
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
