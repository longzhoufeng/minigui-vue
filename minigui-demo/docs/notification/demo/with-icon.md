<cn>
#### 带有图标的通知提醒框
通知提醒框左侧有图标。
</cn>

<us>
#### Notification with icon
A notification box with a icon at the left side.
</us>

```vue
<template>
  <div>
    <m-button @click="() => openNotificationWithIcon('success')">
      Success
    </m-button>
    <m-button @click="() => openNotificationWithIcon('info')">
      Info
    </m-button>
    <m-button @click="() => openNotificationWithIcon('warning')">
      Warning
    </m-button>
    <m-button @click="() => openNotificationWithIcon('error')">
      Error
    </m-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotificationWithIcon(type) {
      this.$notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    },
  },
};
</script>
```
