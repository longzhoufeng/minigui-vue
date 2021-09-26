<cn>
#### 多色图标
可以通过设置 `theme` 属性为 `twoTone` 来渲染双色图标，并且可以设置主题色。
</cn>

<us>
#### Two-tone icon and colorful icon
Specify the property `theme` to `twoTone` to render two-tone icons. You can also set the primary color.
</us>

```vue
<template>
  <div class="icons-list">
    <m-icon type="smile" theme="twoTone" />
    <m-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
    <m-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
  </div>
</template>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
```
