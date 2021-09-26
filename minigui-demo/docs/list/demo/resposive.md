<cn>
#### 响应式的栅格列表
响应式的栅格列表。尺寸与 [Layout Grid] 保持一致。
</cn>

<us>
#### Responsive grid list
Responsive grid list. The size property is as same as [Layout Grid].
</us>

```vue
<template>
  <m-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :data-source="data">
    <m-list-item slot="renderItem" slot-scope="item, index">
      <m-card :title="item.title">
        Card content
      </m-card>
    </m-list-item>
  </m-list>
</template>
<script>
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
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
<style></style>
```
