<cn>
#### 配合 List 组件
配合 List 组件展现评论列表。
</cn>

<us>
#### Usage with list
Displaying a series of comments using the `antd` List Component.
</us>

```vue
<template>
  <m-list
    class="comment-list"
    :header="`${data.length} replies`"
    item-layout="horizontal"
    :data-source="data"
  >
    <m-list-item slot="renderItem" slot-scope="item, index">
      <m-comment :author="item.author" :avatar="item.avatar">
        <template slot="actions">
          <span v-for="action in item.actions">{{ action }}</span>
        </template>
        <p slot="content">
          {{ item.content }}
        </p>
        <m-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ item.datetime.fromNow() }}</span>
        </m-tooltip>
      </m-comment>
    </m-list-item>
  </m-list>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      data: [
        {
          actions: ['Reply to'],
          author: 'hi',
          avatar: '/img/avatar.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(1, 'days'),
        },
        {
          actions: ['Reply to'],
          author: 'Hi',
          avatar: '/img/avatar.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days'),
        },
      ],
      moment,
    };
  },
};
</script>
```
