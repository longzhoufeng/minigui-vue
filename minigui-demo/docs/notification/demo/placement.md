<cn>
#### 位置
可以设置通知从右上角、右下角、左下角、左上角弹出。
</cn>

<us>
#### Placement
A notification box can pop up from `topRight` or `bottomRight` or `bottomLeft` or `topLeft`.
</us>

```vue
<template>
  <div>
    <m-button type="primary" @click="openNotification('topLeft')">
      <m-icon type="radius-upleft" />
      topLeft
    </m-button>
    <m-button type="primary" @click="openNotification('topRight')">
      <m-icon type="radius-upright" />
      topRight
    </m-button>
    <m-divider />
    <m-button type="primary" @click="openNotification('bottomLeft')">
      <m-icon type="radius-bottomleft" />
      bottomLeft
    </m-button>
    <m-button type="primary" @click="openNotification('bottomRight')">
      <m-icon type="radius-bottomright" />
      bottomRight
    </m-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(placement) {
      this.$notification.open({
        message: `Notification ${placement}`,
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement,
      });
    },
  },
};
</script>
```
