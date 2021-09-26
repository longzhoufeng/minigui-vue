<cn>
#### Flex 对齐
Flex 子元素垂直对齐。
</cn>

<us>
#### Flex Alignment
Flex child elements vertically aligned.
</us>

```vue
<template>
  <div>
    <p>Align Top</p>
    <m-row type="flex" justify="center" align="top">
      <m-col :span="4">
        <p class="height-100">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-50">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-120">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-80">
          col-4
        </p>
      </m-col>
    </m-row>

    <p>Align Center</p>
    <m-row type="flex" justify="space-around" align="middle">
      <m-col :span="4">
        <p class="height-100">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-50">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-120">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-80">
          col-4
        </p>
      </m-col>
    </m-row>

    <p>Align Bottom</p>
    <m-row type="flex" justify="space-between" align="bottom">
      <m-col :span="4">
        <p class="height-100">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-50">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-120">
          col-4
        </p>
      </m-col>
      <m-col :span="4">
        <p class="height-80">
          col-4
        </p>
      </m-col>
    </m-row>
  </div>
</template>
```
