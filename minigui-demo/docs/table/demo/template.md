<cn>
#### template 风格的 API
使用 template 风格的 API
> 这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column` 和 `ColumnGroup`。
</cn>

<us>
#### template style API
Using template style API
> Since this is just a syntax sugar for the prop `columns`, so that you can't compose `Column` and `ColumnGroup` with other Components.
</us>

```vue
<template>
  <m-table :data-source="data">
    <m-table-column-group>
      <span slot="title" style="color: #1890ff">Name</span>
      <m-table-column key="firstName" data-index="firstName">
        <span slot="title" style="color: #1890ff">First Name</span>
      </m-table-column>
      <m-table-column key="lastName" title="Last Name" data-index="lastName" />
    </m-table-column-group>
    <m-table-column key="age" title="Age" data-index="age" />
    <m-table-column key="address" title="Address" data-index="address" />
    <m-table-column key="tags" title="Tags" data-index="tags">
      <template slot-scope="tags">
        <span>
          <m-tag v-for="tag in tags" :key="tag" color="blue">{{ tag }}</m-tag>
        </span>
      </template>
    </m-table-column>
    <m-table-column key="action" title="Action">
      <template slot-scope="text, record">
        <span>
          <a>Action 一 {{ record.firstName }}</a>
          <m-divider type="vertical" />
          <a>Delete</a>
        </span>
      </template>
    </m-table-column>
  </m-table>
</template>
<script>
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
    };
  },
};
</script>
```
