<cn>
#### 响应式
在不同大小的屏幕下，应该有不同的表现
</cn>

<us>
#### responsive
Under different screen sizes, there should be different performance
</us>

```vue
<template>
  <div>
    <m-page-header
      style="border: 1px solid rgb(235, 237, 240)"
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
      <template slot="footer">
        <m-tabs default-active-key="1">
          <m-tab-pane key="1" tab="Details" />
          <m-tab-pane key="2" tab="Rule" />
        </m-tabs>
      </template>
      <div class="content">
        <div class="main">
          <m-descriptions size="small" :column="2">
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
        </div>
        <div class="extra">
          <div
            :style="{
              display: 'flex',
              width: 'max-content',
              justifyContent: 'flex-end',
            }"
          >
            <m-statistic
              title="Status"
              value="Pending"
              :style="{
                marginRight: '32px',
              }"
            />
            <m-statistic title="Price" prefix="$" :value="568.08" />
          </div>
        </div>
      </div>
    </m-page-header>
  </div>
</template>
<style>
tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .minigui-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>
```
