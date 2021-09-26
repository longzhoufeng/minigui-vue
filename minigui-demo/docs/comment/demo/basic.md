<cn>
#### 基本评论
一个基本的评论组件，带有作者、头像、时间和操作。
</cn>

<us>
#### Basic comment
A basic comment with author, avatar, time and actions.
</us>

```vue
<template>
  <m-comment>
    <template slot="actions">
      <span key="comment-basic-like">
        <m-tooltip title="Like">
          <m-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </m-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <m-tooltip title="Dislike">
          <m-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike"
          />
        </m-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span>
    </template>
    <a slot="author">Han Solo</a>
    <m-avatar
      slot="avatar"
      src="/img/avatar.png"
      alt="hi"
    />
    <p slot="content">
      We supply a series of design principles, practical patterns and high quality design resources
      (Sketch and Axure), to help people create their product prototypes beautifully and
      efficiently.
    </p>
    <m-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
      <span>{{ moment().fromNow() }}</span>
    </m-tooltip>
  </m-comment>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
    };
  },
  methods: {
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = 'liked';
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = 'disliked';
    },
  },
};
</script>
```
