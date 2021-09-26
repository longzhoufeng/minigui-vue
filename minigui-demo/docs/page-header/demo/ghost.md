<cn>
#### 白底模式
默认 PageHeader 是透明底色的。在某些情况下，PageHeader 需要自己的背景颜色。
</cn>

<us>
#### white background mode
The default PageHeader is a transparent background. In some cases, PageHeader needs its own background color.
</us>

```vue
<template>
  <div style="background-color: #F5F5F5; padding: 24px;">
    <m-page-header
      :ghost="false"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template slot="extra">
        <m-button key="3">
          Operation
        </m-button>
        <m-button key="2">
          Operation
        </m-button>
        <m-button key="1" type="primary">
          Primary
        </m-button>
      </template>
      <m-descriptions size="small" :column="3">
        <m-descriptions-item label="Created">
          Lili Qu
        </m-descriptions-item>
        <m-descriptions-item label="Association">
          <a>421421</a>
        </m-descriptions-item>
        <m-descriptions-item label="Creation Time">
          2017-01-10
        </m-descriptions-item>
        <m-descriptions-item label="Effective Time">
          2017-10-10
        </m-descriptions-item>
        <m-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </m-descriptions-item>
      </m-descriptions>
    </m-page-header>
  </div>
</template>
<style>
tr:last-child td {
  padding-bottom: 0;
}
</style>
```
