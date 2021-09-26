<cn>
#### 滑动
可以左右、上下滑动，容纳更多标签。
</cn>

<us>
#### Slide
In order to fit in more tabs, they can slide left and right (or up and down).
</us>

```vue
<template>
  <div style="width: 500px">
    <m-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
      <m-radio-button value="top">
        Horizontal
      </m-radio-button>
      <m-radio-button value="left">
        Vertical
      </m-radio-button>
    </m-radio-group>
    <m-tabs
      default-active-key="1"
      :tab-position="mode"
      :style="{ height: '200px' }"
      @prevClick="callback"
      @nextClick="callback"
    >
      <m-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`"> Content of tab {{ i }} </m-tab-pane>
    </m-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'top',
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },
};
</script>
```
