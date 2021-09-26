<cn>
#### 信息提示
各种类型的信息提示，只提供一个按钮用于关闭。
</cn>

<us>
#### Information modal dialog
In the various types of information modal dialog, only one button to close dialog is provided.
</us>

```vue
<template>
  <div>
    <m-button @click="info">
      Info
    </m-button>
    <m-button @click="success">
      Success
    </m-button>
    <m-button @click="error">
      Error
    </m-button>
    <m-button @click="warning">
      Warning
    </m-button>
  </div>
</template>
<script>
import { Modal } from 'minigui-vue';
export default {
  methods: {
    info() {
      const h = this.$createElement;
      this.$info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {},
      });
    },

    success() {
      this.$success({
        title: 'This is a success message',
        // JSX support
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
      });
    },

    error() {
      this.$error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    },

    warning() {
      this.$warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    },
  },
};
</script>
```
