<cn>
  #### 分隔符
  使用 `Breadcrumb.Separator` 可以自定义分隔符。
</cn>

<us>
  #### Configuring the Separator
  The separator can be customized by setting the separator property: `Breadcrumb.Separator`
</us>

```vue
<template>
  <m-breadcrumb separator="">
    <m-breadcrumb-item>Location</m-breadcrumb-item>
    <m-breadcrumb-separator>:</m-breadcrumb-separator>
    <m-breadcrumb-item href="">
      Application Center
    </m-breadcrumb-item>
    <m-breadcrumb-separator />
    <m-breadcrumb-item href="">
      Application List
    </m-breadcrumb-item>
    <m-breadcrumb-separator />
    <m-breadcrumb-item>An Application</m-breadcrumb-item>
  </m-breadcrumb>
</template>
```
