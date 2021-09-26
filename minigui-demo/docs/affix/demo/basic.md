<cn>
#### 基本
最简单的用法。
</cn>

<us>
#### basic
The simplest usage.
</us>

```vue
<template>
  <div>
    <m-affix :offset-top="top">
      <m-button type="primary" @click="top += 10">
        Affix top
      </m-button>
    </m-affix>
    <br />
    <m-affix :offset-bottom="bottom">
      <m-button type="primary" @click="bottom += 10">
        Affix bottom
      </m-button>
    </m-affix>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 10,
      bottom: 10,
    };
  },
};
</script>
```
