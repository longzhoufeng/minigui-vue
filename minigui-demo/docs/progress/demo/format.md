<cn>
#### 自定义文字格式
`format` 属性指定格式。
</cn>

<us>
#### Custom text format
You can set a custom text by setting the `format` prop.
</us>

```vue
<template>
  <div>
    <m-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
    <m-progress type="circle" :percent="100" :format="() => 'Done'" />
    <m-progress type="circle" :percent="75">
      <template #format="percent">
        <span style="color: red">{{ percent }}</span>
      </template>
    </m-progress>
  </div>
</template>
<style scoped>
div.minigui-progress-circle,
div.minigui-progress-line {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
