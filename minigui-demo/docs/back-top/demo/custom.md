<cn>
#### 自定义样式
可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。
</cn>

<us>
#### Custom style
You can customize the style of the button, just note the size limit: no more than `40px * 40px`.
</us>

```vue
<template>
  <div id="components-back-top-demo-custom">
    <m-back-top>
      <div class="minigui-back-top-inner">
        UP
      </div>
    </m-back-top>
    Scroll down to see the bottom-right
    <strong style="color: #1088e9"> blue </strong>
    button.
  </div>
</template>
<style scoped>
#components-back-top-demo-custom .minigui-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .minigui-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
```
