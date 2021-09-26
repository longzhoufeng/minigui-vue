<cn>
#### Flex 填充
Col 提供 `flex` 属性以支持填充。
</cn>

<us>
#### Flex fill
Col provides `flex` prop to support fill rest.
</us>

```vue
<template>
  <div>
    <m-divider orientation="left">
      Percentage columns
    </m-divider>
    <m-row type="flex">
      <m-col :flex="2">2 / 5</m-col>
      <m-col :flex="3">3 / 5</m-col>
    </m-row>
    <m-divider orientation="left">
      Fill rest
    </m-divider>
    <m-row type="flex">
      <m-col flex="100px">100px</m-col>
      <m-col flex="auto">auto</m-col>
    </m-row>
    <m-divider orientation="left">
      Raw flex style
    </m-divider>
    <m-row type="flex">
      <m-col flex="1 1 200px">1 1 200px</m-col>
      <m-col flex="0 1 300px">0 1 300px</m-col>
    </m-row>
  </div>
</template>
```
