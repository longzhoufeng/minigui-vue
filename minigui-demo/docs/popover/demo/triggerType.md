<cn>
#### 三种触发方式
鼠标移入、聚集、点击。
</cn>

<us>
#### Three ways to trigger
Mouse to click, focus and move in.
</us>

```vue
<template>
  <div>
    <m-popover title="Title" trigger="hover">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <m-button type="primary">
        Hover me
      </m-button>
    </m-popover>
    <m-popover title="Title" trigger="focus">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <m-button type="primary">
        Focus me
      </m-button>
    </m-popover>
    <m-popover title="Title" trigger="click">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <m-button type="primary">
        Click me
      </m-button>
    </m-popover>
  </div>
</template>
```
