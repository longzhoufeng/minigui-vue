<cn>
#### 基本
最简单的用法，浮层的大小由内容区域决定。
</cn>

<us>
#### Basic
The most basic example. The size of the floating layer depends on the contents region.
</us>

```vue
<template>
  <m-popover title="Title">
    <template slot="content">
      <p>Content</p>
      <p>Content</p>
    </template>
    <m-button type="primary">
      Hover me
    </m-button>
  </m-popover>
</template>
```
