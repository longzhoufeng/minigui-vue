<cn>
#### 竖排列表样式
通过设置 `itemLayout` 属性为 `vertical` 可实现竖排列表样式。
</cn>

<us>
#### Vertical
Setting `itemLayout` property with `vertical` to create a vertical list.
</us>

```vue
<template>
  <m-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <div slot="footer"><b>Minigui Vue</b> footer part</div>
    <m-list-item slot="renderItem" key="item.title" slot-scope="item, index">
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <m-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img
        slot="extra"
        width="272"
        alt="logo"
        src="/img/logo.png"
      />
      <m-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{ item.title }}</a>
        <m-avatar slot="avatar" :src="item.avatar" />
      </m-list-item-meta>
      {{ item.content }}
    </m-list-item>
  </m-list>
</template>
<script>
const listData = [];
for (let i = 0; i < 23; i++) {
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
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
};
</script>
<style></style>
```
