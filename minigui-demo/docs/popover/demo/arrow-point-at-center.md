<cn>
#### 箭头指向
设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。
</cn>

<us>
#### Arrow pointing
The arrow points to the center of the target element, which set `arrowPointAtCenter`.
</us>

```vue
<template>
  <div>
    <m-popover placement="topLeft">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <span slot="title">Title</span>
      <m-button>Align edge / 边缘对齐</m-button>
    </m-popover>
    <m-popover placement="topLeft" arrow-point-at-center>
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <span slot="title">Title</span>
      <m-button>Arrow points to center / 箭头指向中心</m-button>
    </m-popover>
  </div>
</template>
```
