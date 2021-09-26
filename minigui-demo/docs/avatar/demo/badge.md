<cn>
#### 带徽标的头像
通常用于消息提示。
</cn>

<us>
#### With Badge
Usually used for reminders and notifications.
</us>

```vue
<template>
  <div>
    <span style="margin-right:24px">
      <m-badge :count="1"><m-avatar shape="square" icon="user"/></m-badge>
    </span>
    <span>
      <m-badge dot><m-avatar shape="square" icon="user"/></m-badge>
    </span>
  </div>
</template>
```
