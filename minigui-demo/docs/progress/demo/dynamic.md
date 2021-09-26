<cn>
#### 动态展示
会动的进度条才是好进度条。
</cn>

<us>
#### Dynamic
A dynamic progress bar is better.
</us>

```vue
<template>
  <div>
    <m-progress :percent="percent" />
    <m-button-group>
      <m-button icon="minus" @click="decline" />
      <m-button icon="plus" @click="increase" />
    </m-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      percent: 0,
    };
  },
  methods: {
    increase() {
      let percent = this.percent + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.percent = percent;
    },
    decline() {
      let percent = this.percent - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.percent = percent;
    },
  },
};
</script>
```
