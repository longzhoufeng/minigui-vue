<cn>
#### 多彩标签
我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
</cn>

<us>
#### Colorful Tag
We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.
</us>

```vue
<template>
  <div>
    <h4 style="margin-bottom: 16px">
      Presets:
    </h4>
    <div>
      <m-tag color="pink">
        pink
      </m-tag>
      <m-tag color="red">
        red
      </m-tag>
      <m-tag color="orange">
        orange
      </m-tag>
      <m-tag color="green">
        green
      </m-tag>
      <m-tag color="cyan">
        cyan
      </m-tag>
      <m-tag color="blue">
        blue
      </m-tag>
      <m-tag color="purple">
        purple
      </m-tag>
    </div>
    <h4 style="margin: '16px 0'">
      Custom:
    </h4>
    <div>
      <m-tag color="#f50">
        #f50
      </m-tag>
      <m-tag color="#2db7f5">
        #2db7f5
      </m-tag>
      <m-tag color="#87d068">
        #87d068
      </m-tag>
      <m-tag color="#108ee9">
        #108ee9
      </m-tag>
    </div>
  </div>
</template>
```
