<cn>
#### 基础栅格
从堆叠到水平排列。
使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。
</cn>

<us>
#### Basic Grid
From the stack to the horizontal arrangement.
You can create a basic grid system by using a single set of `Row` and `Col` grid assembly, all of the columns (Col) must be placed in `Row`.
</us>

```vue
<template>
  <div>
    <m-row>
      <m-col :span="12">
        col-12
      </m-col>
      <m-col :span="12">
        col-12
      </m-col>
    </m-row>
    <m-row>
      <m-col :span="8">
        col-8
      </m-col>
      <m-col :span="8">
        col-8
      </m-col>
      <m-col :span="8">
        col-8
      </m-col>
    </m-row>
    <m-row>
      <m-col :span="6">
        col-6
      </m-col>
      <m-col :span="6">
        col-6
      </m-col>
      <m-col :span="6">
        col-6
      </m-col>
      <m-col :span="6">
        col-6
      </m-col>
    </m-row>
  </div>
</template>
```
