<cn>
#### 列表
在列表组件中使用加载占位符。
</cn>

<us>
#### List
Use skeleton in list component.
</us>

```vue
<template>
  <div>
    <m-switch :checked="!loading" @change="onChange" />

    <m-list item-layout="vertical" size="large" :data-source="listData">
      <m-list-item slot="renderItem" key="item.title" slot-scope="item, index">
        <template v-for="{ type, text } in actions" v-if="!loading" slot="actions">
          <span :key="type">
            <m-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <img
          v-if="!loading"
          slot="extra"
          width="272"
          alt="logo"
          src="/img/logo.png"
        />
        <m-skeleton :loading="loading" active avatar>
          <m-list-item-meta :description="item.description">
            <a slot="title" :href="item.href">{{ item.title }}</a>
            <m-avatar slot="avatar" :src="item.avatar" />
          </m-list-item-meta>
          {{ item.content }}
        </m-skeleton>
      </m-list-item>
    </m-list>
  </div>
</template>
<script>
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: '#',
    title: `minigui vue part ${i}`,
    avatar: '/img/avatar.png',
    description:
      'Minigui Vue, a design language for background applications.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default {
  data() {
    return {
      loading: true,
      listData,
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
  methods: {
    onChange(checked) {
      this.loading = !checked;
    },
  },
};
</script>
<style>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>
```
