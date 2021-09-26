<cn>
#### 基础列表
基础列表。
</cn>

<us>
#### Basic list
Basic list.
</us>

```vue
<template>
  <m-list item-layout="horizontal" :data-source="data">
    <m-list-item slot="renderItem" slot-scope="item, index">
      <m-list-item-meta
        description="minigui vue, a design language for background applications, is refined by Ant UED Team"
      >
        <a slot="title" href="#">{{ item.title }}</a>
        <m-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </m-list-item-meta>
    </m-list-item>
  </m-list>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
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
