<cn>
#### 嵌套评论
评论可以嵌套。
</cn>

<us>
#### Nested comments
Comments can be nested.
</us>

```vue
<template>
  <m-comment>
    <span slot="actions" key="comment-nested-reply-to">Reply to</span>
    <a slot="author">Han Solo</a>
    <m-avatar
      slot="avatar"
      src="/img/avatar.png"
      alt="Hi"
    />
    <p slot="content">
      We supply a series of design principles, practical patterns and high quality design resources
      (Sketch and Axure).
    </p>
    <m-comment>
      <span slot="actions">Reply to</span>
      <a slot="author">Han Solo</a>
      <m-avatar
        slot="avatar"
        src="/img/avatar.png"
        alt="Hi"
      />
      <p slot="content">
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
      <m-comment>
        <span slot="actions">Reply to</span>
        <a slot="author">Han Solo</a>
        <m-avatar
          slot="avatar"
          src="/img/avatar.pngg"
          alt="Hi"
        />
        <p slot="content">
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </m-comment>
      <m-comment>
        <span slot="actions">Reply to</span>
        <a slot="author">Han Solo</a>
        <m-avatar
          slot="avatar"
          src="/img/avatar.png"
          alt="Hi"
        />
        <p slot="content">
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </m-comment>
    </m-comment>
  </m-comment>
</template>
```
