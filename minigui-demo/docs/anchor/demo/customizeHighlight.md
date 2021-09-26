<cn>
#### 自定义锚点高亮
自定义锚点高亮。
</cn>

<us>
#### Customize the anchor highlight
Customize the anchor highlight.
</us>

```vue
<template>
  <m-anchor :affix="false" :get-current-anchor="getCurrentAnchor">
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
  methods: {
    getCurrentAnchor() {
      return '#components-anchor-demo-static';
    },
  },
};
</script>
```
