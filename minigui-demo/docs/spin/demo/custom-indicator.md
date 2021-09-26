<cn>
#### 自定义指示符
使用自定义指示符。
</cn>

<us>
#### Custom spinning indicator
Use custom loading indicator.
</us>

```vue
<template>
  <div>
    <m-spin>
      <m-icon slot="indicator" type="loading" style="font-size: 24px" spin />
    </m-spin>
    <m-spin :indicator="indicator" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      indicator: <m-icon type="loading" style="font-size: 24px" spin />,
    };
  },
};
</script>
```
