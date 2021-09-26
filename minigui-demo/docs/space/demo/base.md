<cn>
#### 基本用法
相邻组件水平间距。
</cn>

<us>
#### Basic Usage
Crowded components horizontal spacing.
</us>

```vue
<template>
  <m-space>
    Space
    <m-button type="primary">Button</m-button>
    <m-upload>
      <m-button> <m-icon type="upload" /> Click to Upload </m-button>
    </m-upload>
    <m-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <m-button>Confirm</m-button>
    </m-popconfirm>
  </m-space>
</template>
<script>
export default {};
</script>
```
