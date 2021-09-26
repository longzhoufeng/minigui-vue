<cn>
#### 箭头指向
设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。
</cn>

<us>
#### Arrow pointing at the center
By specifying `arrowPointAtCenter` prop, the arrow will point to the center of the target element.
</us>

```vue
<template>
  <div>
    <m-tooltip placement="topLeft" title="Prompt Text">
      <m-button>Align edge / 边缘对齐</m-button>
    </m-tooltip>
    <m-tooltip placement="topLeft" title="Prompt Text" arrow-point-at-center>
      <m-button>Arrow points to center / 箭头指向中心</m-button>
    </m-tooltip>
  </div>
</template>
```
