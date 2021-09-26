<cn>
  #### 预加载的卡片
  数据读入前会有文本块样式
</cn>

<us>
  #### Loading card
  Shows a loading indirector while the contents of the card is being featched
</us>

```vue
<template>
  <div>
    <m-card :loading="loading" title="Card title">
      whatever content
    </m-card>
    <m-button style="marginTop: 16px" @click="handleClick">
      Toggle loading
    </m-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    handleClick() {
      this.loading = !this.loading;
    },
  },
};
</script>
```
