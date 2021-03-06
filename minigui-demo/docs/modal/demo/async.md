<cn>
#### 异步关闭
点击确定后异步关闭对话框，例如提交表单。
</cn>

<us>
#### Asynchronously close
Asynchronously close a modal dialog when a user clicked OK button, for example,
you can use this pattern when you submit a form.
</us>

```vue
<template>
  <div>
    <m-button type="primary" @click="showModal">
      Open Modal with async logic
    </m-button>
    <m-modal
      title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ ModalText }}</p>
    </m-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
  },
};
</script>
```
