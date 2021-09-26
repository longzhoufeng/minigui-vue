<cn>
#### 全局化配置
自定义全局组件的 Empty 样式。
</cn>

<us>
#### ConfigProvider
Use ConfigProvider set global Empty style.
</us>

```vue
<template>
  <div>
    <m-switch
      un-checked-children="default"
      checked-children="customize"
      :checked="customize"
      @change="val => (customize = val)"
    />

    <m-divider />
    <m-config-provider>
      <template v-if="customize" #renderEmpty>
        <div style="text-align: center">
          <m-icon type="smile" style="font-size: 20px" />
          <p>Data Not Found</p>
        </div>
      </template>
      <div class="config-provider">
        <h3>Select</h3>
        <m-select :style="style" :options="[]" />

        <h3>TreeSelect</h3>
        <m-tree-select :style="style" :tree-data="[]" />

        <h3>Cascader</h3>
        <m-cascader :style="style" :options="[]" :show-search="true" />

        <h3>Transfer</h3>
        <m-transfer :data-source="[]" />

        <h3>Table</h3>
        <m-table style="margin-top: 8px" :columns="columns" :data-source="[]" />
        <h3>List</h3>
        <m-list :data-source="[]" />
      </div>
    </m-config-provider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customize: false,
      style: { width: '200px' },
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
      ],
    };
  },
};
</script>
<style>
.code-box-demo .config-provider h3 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}
</style>
```
