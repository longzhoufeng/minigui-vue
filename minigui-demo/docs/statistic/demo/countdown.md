<cn>
#### 倒计时
倒计时组件。
</cn>

<us>
#### Countdown
Countdown component.
</us>

```vue
<template>
  <m-row :gutter="16">
    <m-col :span="12">
      <m-statistic-countdown
        title="Countdown"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
    </m-col>
    <m-col :span="12">
      <m-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
    </m-col>
    <m-col :span="24" style="margin-top: 32px;">
      <m-statistic-countdown title="Day Level" :value="deadline" format="D 天 H 时 m 分 s 秒" />
    </m-col>
  </m-row>
</template>
<script>
export default {
  data() {
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
    };
  },
  methods: {
    onFinish() {
      console.log('finished!');
    },
  },
};
</script>
```
