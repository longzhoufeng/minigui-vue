<cn>
#### 封顶数字
超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。
</cn>

<us>
#### Overflow Count
`${overflowCount}+` is displayed when count is larger than `overflowCount`. The default value of `overflowCount` is `99`.
</us>

```vue
<template>
  <div>
    <m-badge :count="99">
      <a href="#" class="head-example" />
    </m-badge>
    <m-badge :count="100">
      <a href="#" class="head-example" />
    </m-badge>
    <m-badge :count="99" :overflow-count="10">
      <a href="#" class="head-example" />
    </m-badge>
    <m-badge :count="1000" :overflow-count="999">
      <a href="#" class="head-example" />
    </m-badge>
  </div>
</template>
```
