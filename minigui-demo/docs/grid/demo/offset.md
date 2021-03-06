<cn>
#### 左右偏移
列偏移。
使用 `offset` 可以将列向右侧偏。例如，`:offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。
</cn>

<us>
#### a-column offset
`Offset` can set the column to the right side. For example, using `offset = {4}` can set the element shifted to the right four columns width.
</us>

```vue
<template>
  <div>
    <m-row>
      <m-col :span="8">
        col-8
      </m-col>
      <m-col :span="8" :offset="8">
        col-8
      </m-col>
    </m-row>
    <m-row>
      <m-col :span="6" :offset="6">
        col-6 col-offset-6
      </m-col>
      <m-col :span="6" :offset="6">
        col-6 col-offset-6
      </m-col>
    </m-row>
    <m-row>
      <m-col :span="12" :offset="6">
        col-12 col-offset-6
      </m-col>
    </m-row>
  </div>
</template>
```
