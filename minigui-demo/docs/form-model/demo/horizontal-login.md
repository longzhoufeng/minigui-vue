<cn>
#### 内联登录栏
水平登录栏，常用在顶部导航栏中。
</cn>

<us>
#### Inline Login Form
Inline login form is often used in navigation bar.
</us>

```vue
<template>
  <m-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
    <m-form-model-item>
      <m-input v-model="formInline.user" placeholder="Username">
        <m-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </m-input>
    </m-form-model-item>
    <m-form-model-item>
      <m-input v-model="formInline.password" type="password" placeholder="Password">
        <m-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </m-input>
    </m-form-model-item>
    <m-form-model-item>
      <m-button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
      >
        Log in
      </m-button>
    </m-form-model-item>
  </m-form-model>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
  },
};
</script>
```
