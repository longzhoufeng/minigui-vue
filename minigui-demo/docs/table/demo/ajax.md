<cn>
#### 远程加载数据
这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。
另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 `onFilter` 和 `sorter` 函数，而是在把筛选和排序的参数发到服务端来处理。
**注意，此示例使用 [模拟接口](https://randomuser.me)，展示数据可能不准确，请打开网络面板查看请求。**
</cn>

<us>
#### Ajax
This example shows how to fetch and present data from a remote server, and how to implement filtering and sorting in server side by sending related parameters to server.
**Note, this example use [Mock API](https://randomuser.me) that you can look up in Network Console.**
</us>

```vue
<template>
  <m-table
    :columns="columns"
    :row-key="record => record.login.uuid"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
  </m-table>
</template>
<script>
import axios from 'axios';

const queryData = (params) => {
  return axios.get('https://randomuser.me/api', { params: params });
};
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

export default {
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      this.loading = true;
      queryData({
        results: 10,
        ...params,
      }).then(({ data }) => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    },
  },
};
</script>
```
