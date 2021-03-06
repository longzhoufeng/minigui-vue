<cn>
#### 自定义箭头
自定义箭头展示。
</cn>

<us>
#### Custom Arrows
Custom arrows display
</us>

```vue
<template>
  <m-carousel arrows>
    <div
      slot="prevArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <m-icon type="left-circle" />
    </div>
    <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
      <m-icon type="right-circle" />
    </div>
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

.minigui-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.minigui-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.minigui-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.minigui-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
```
