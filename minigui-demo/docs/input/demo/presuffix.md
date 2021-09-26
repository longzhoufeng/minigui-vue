<cn>
#### 前缀和后缀
在输入框上添加前缀或后缀图标。
</cn>

<us>
#### prefix and suffix
Add prefix or suffix icons inside input.
</us>

```vue
<template>
  <div class="components-input-demo-presuffix">
    <m-input ref="userNameInput" v-model="userName" placeholder="Basic usage">
      <m-icon slot="prefix" type="user" />
      <m-tooltip slot="suffix" title="Extra information">
        <m-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
      </m-tooltip>
    </m-input>
    <br />
    <br />
    <m-input prefix="￥" suffix="RMB" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = '';
    },
  },
};
</script>
```
