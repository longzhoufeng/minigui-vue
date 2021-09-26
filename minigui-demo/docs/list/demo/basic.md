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
        description="minigui vue, a design language for background applications"
      >
        <a slot="title" href="#">{{ item.title }}</a>
        <m-avatar
          slot="avatar"
          src="/img/avatar.png"
        />
      </m-list-item-meta>
    </m-list-item>
  </m-list>
</template>
<script>
const data = [
  {
    title: 'Minigui Vue Title 1',
  },
  {
    title: 'Minigui Vue Title 2',
  },
  {
    title: 'Minigui Vue Title 3',
  },
  {
    title: 'Minigui Vue Title 4',
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
