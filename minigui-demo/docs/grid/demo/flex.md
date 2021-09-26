<cn>
#### Flex 布局
Flex 布局基础。
使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。
</cn>

<us>
#### Flex Layout
Use `row-flex` define `flex` layout, its child elements depending on the value of the `start`,` center`, `end`,` space-between`, `space-around`, which are defined in its parent node layout mode.
</us>

```vue
<template>
  <div>
    <p>sub-element align left</p>
    <m-row type="flex" justify="start">
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
    </m-row>

    <p>sub-element align center</p>
    <m-row type="flex" justify="center">
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
    </m-row>

    <p>sub-element align right</p>
    <m-row type="flex" justify="end">
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
    </m-row>

    <p>sub-element monospaced arrangement</p>
    <m-row type="flex" justify="space-between">
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
    </m-row>

    <p>sub-element align full</p>
    <m-row type="flex" justify="space-around">
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
      <m-col :span="4">
        col-4
      </m-col>
    </m-row>
  </div>
</template>
```
