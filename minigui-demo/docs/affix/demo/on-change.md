<cn>
#### 固定状态改变的回调
可以获得是否固定的状态。
</cn>

<us>
#### Callback
Callback with affixed state.
</us>

```vue
<template>
  <m-affix :offset-top="120" @change="change">
    <m-button>120px to affix top</m-button>
  </m-affix>
</template>
<script>
export default {
  methods: {
    change(affixed) {
      console.log(affixed);
    },
  },
};
</script>
```
