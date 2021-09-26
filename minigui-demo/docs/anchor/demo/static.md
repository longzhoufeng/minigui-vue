<cn>
#### 静态位置
不浮动，状态不随页面滚动变化。
</cn>

<us>
#### Static
Do not change state when page is scrolling.
</us>

```vue
<template>
  <m-anchor :affix="false">
    <m-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <m-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <m-anchor-link href="#API" title="API">
      <m-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <m-anchor-link href="#Link-Props" title="Link Props" />
    </m-anchor-link>
  </m-anchor>
</template>
```
