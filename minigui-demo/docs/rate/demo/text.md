<cn>
#### 文案展现
给评分组件加上文案展示。
</cn>

<us>
#### Show copywriting
Add copywriting in rate components.
</us>

```vue
<template>
  <span>
    <m-rate v-model="value" :tooltips="desc" />
    <span class="minigui-rate-text">{{ desc[value - 1] }}</span>
  </span>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
      desc: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
    };
  },
};
</script>
```
