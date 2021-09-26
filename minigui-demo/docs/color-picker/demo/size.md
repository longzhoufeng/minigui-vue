<cn>
#### 尺寸
选择器有三种尺寸：大、默认（中）、小。
</cn>

<us>
#### Size
There are three size of ColorPicker: large, medium(default), small.
</us>

```vue
<template>
  <div>
    <m-row>
      <m-col span="8">
        <m-colorPicker v-model="color6" size="large" />
      </m-col>
      <m-col span="8">
        <m-colorPicker v-model="color6" />
      </m-col>
      <m-col span="8">
        <m-colorPicker v-model="color6" size="small" />
      </m-col>
    </m-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color6: '#1890ff',
    };
  },
};
</script>
```
