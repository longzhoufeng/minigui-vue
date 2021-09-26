<cn>
#### 多种形态的 PageHeader
使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。
</cn>

<us>
#### Various forms of PageHeader
Use the operating area and customize the sub-nodes, suitable for use in the need to display some complex information to help users quickly understand the information and operations of this page.
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
    <br />
    <m-page-header title="Title" sub-title="This is a subtitle" @back="() => $router.go(-1)">
      <template slot="tags">
        <m-tag color="blue">
          Running
        </m-tag>
      </template>
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
      <m-row type="flex">
        <m-statistic title="Status" value="Pending" />
        <m-statistic
          title="Price"
          prefix="$"
          :value="568.08"
          :style="{
            margin: '0 32px',
          }"
        />
        <m-statistic title="Balance" prefix="$" :value="3345.08" />
      </m-row>
    </m-page-header>
  </div>
</template>
<style>
tr:last-child td {
  padding-bottom: 0;
}
</style>
```
