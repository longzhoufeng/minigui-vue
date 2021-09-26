<cn>
  #### 支持更多内容配置
  一种支持封面、头像、标题和描述信息的卡片。
</cn>

<us>
  #### Support more content configuration
  A Card that supports `cover`, `avatar`, `title` and `description`.
</us>

```vue
<template>
  <m-card hoverable style="width: 300px">
    <img
      slot="cover"
      alt="example"
      src="/public/avatar.png"
    />
    <template slot="actions" class="minigui-card-actions">
      <m-icon key="setting" type="setting" />
      <m-icon key="edit" type="edit" />
      <m-icon key="ellipsis" type="ellipsis" />
    </template>
    <m-card-meta title="Card title" description="This is the description">
      <m-avatar
        slot="avatar"
        src="/public/avatar.png"
      />
    </m-card-meta>
  </m-card>
</template>
```
