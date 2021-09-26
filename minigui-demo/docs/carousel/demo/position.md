<cn>
#### 位置
位置有 4 个方向。
</cn>

<us>
#### Position
There are 4 position options available.
</us>

```vue
<template>
  <div>
    <m-radio-group v-model="dotPosition" style="margin-bottom: 8px">
      <m-radio-button value="top">
        Top
      </m-radio-button>
      <m-radio-button value="bottom">
        Bottom
      </m-radio-button>
      <m-radio-button value="left">
        Left
      </m-radio-button>
      <m-radio-button value="right">
        Right
      </m-radio-button>
    </m-radio-group>
    <m-carousel :dot-position="dotPosition">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </m-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dotPosition: 'top',
    };
  },
};
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
