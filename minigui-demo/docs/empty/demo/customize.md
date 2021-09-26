<cn>
#### 自定义
自定义图片、描述、附属内容。
</cn>

<us>
#### Customize
Customize image, description and extra content.
</us>

```vue
<template>
  <m-empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
    :image-style="{
      height: '60px',
    }"
  >
    <span slot="description"> Customize <a href="#API">Description</a> </span>
    <m-button type="primary">
      Create Now
    </m-button>
  </m-empty>
</template>
```
