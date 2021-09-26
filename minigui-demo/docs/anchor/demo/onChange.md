<cn>
#### 监听锚点链接改变
监听锚点链接改变
</cn>

<us>
#### Listening for anchor link change
Listening for anchor link change.
</us>

```vue
<template>
  <m-anchor :affix="false" @change="onChange">
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
    onChange(link) {
      console.log('Anchor:OnChange', link);
    },
  },
};
</script>
```
