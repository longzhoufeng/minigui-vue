<cn>
#### 基本
头像有三种尺寸，两种形状可选。
</cn>

<us>
#### basic
Three sizes and two shapes are available.
</us>

```vue
<template>
  <div>
    <div>
      <m-avatar :size="64" icon="user" />
      <m-avatar size="large" icon="user" />
      <m-avatar icon="user" />
      <m-avatar size="small" icon="user" />
    </div>
    <br />
    <div>
      <m-avatar shape="square" :size="64" icon="user" />
      <m-avatar shape="square" size="large" icon="user" />
      <m-avatar shape="square" icon="user" />
      <m-avatar shape="square" size="small" icon="user" />
    </div>
  </div>
</template>
```
