<cn>
#### 基本
第一个对话框。
</cn>

<us>
#### Basic
Basic modal.
</us>

```vue
<template>
  <div>
    <m-button type="primary" @click="showModal">
      Open Modal
    </m-button>
    <m-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </m-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>
```
