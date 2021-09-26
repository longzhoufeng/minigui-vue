<cn>
  #### 更灵活的内容展示
  可以利用 `Card.Meta` 支持更灵活的内容
</cn>

<us>
  #### Customized content
  You can use `Card.Meta` to support more flexible content.
</us>

```vue
<template>
  <m-card hoverable style="width: 240px">
    <img
      slot="cover"
      alt="example"
      src="/img/img.png"
    />
    <m-card-meta title="Europe Street beat">
      <template slot="description">
        www.minigui.com.cn
      </template>
    </m-card-meta>
  </m-card>
</template>
```
