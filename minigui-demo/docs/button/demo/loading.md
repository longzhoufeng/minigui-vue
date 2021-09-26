<cn>
#### 加载中状态
添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
</cn>

<us>
#### Loading
A loading indicator can be added to a button by setting the `loading` property on the `Button`.
</us>

```vue
<template>
  <div>
    <m-button type="primary" loading>
      Loading
    </m-button>
    <m-button type="primary" size="small" loading>
      Loading
    </m-button>
    <br />
    <m-button type="primary" :loading="loading" @mouseenter="enterLoading">
      mouseenter me!
    </m-button>
    <m-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
      延迟1s
    </m-button>
    <br />
    <m-button type="primary" loading />
    <m-button type="primary" shape="circle" loading />
    <m-button type="danger" shape="round" loading />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    },
  },
};
</script>
```
