<cn>
  #### 分隔符
  使用` separator=">" `可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符
</cn>

<us>
  #### Configuring the Separator
  The separator can be customized by setting the separator preperty: separator=">" or use
  slot="separator"
</us>

```vue
<template>
  <div>
    <m-breadcrumb separator=">">
      <m-breadcrumb-item>Home</m-breadcrumb-item>
      <m-breadcrumb-item href="">
        Application Center
      </m-breadcrumb-item>
      <m-breadcrumb-item href="">
        Application List
      </m-breadcrumb-item>
      <m-breadcrumb-item>An Application</m-breadcrumb-item>
    </m-breadcrumb>
    <m-breadcrumb>
      <span slot="separator" style="color: red">></span>
      <m-breadcrumb-item>Home</m-breadcrumb-item>
      <m-breadcrumb-item href="">
        Application Center
      </m-breadcrumb-item>
      <m-breadcrumb-item href="">
        Application List
      </m-breadcrumb-item>
      <m-breadcrumb-item>An Application</m-breadcrumb-item>
    </m-breadcrumb>
  </div>
</template>
```
