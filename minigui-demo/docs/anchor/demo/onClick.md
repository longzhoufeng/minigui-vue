<cn>
#### 自定义 click 事件
点击锚点不记录历史。
</cn>

<us>
#### Customize the click event
Clicking on an anchor does not record history.
</us>

```vue
<template>
  <m-anchor :affix="false" @click="handleClick">
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
    handleClick(e, link) {
      e.preventDefault();
      console.log(link);
    },
  },
};
</script>
```
