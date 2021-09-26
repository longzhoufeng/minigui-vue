<cn>
#### 迷你
迷你版本。
</cn>

<us>
#### Mini size
Mini size pagination.
</us>

```vue
<template>
  <div id="components-pagination-demo-mini">
    <m-pagination size="small" :total="50" />
    <m-pagination size="small" :total="50" show-size-changer show-quick-jumper />
    <m-pagination size="small" :total="50" :show-total="total => `Total ${total} items`" />
  </div>
</template>
<style scoped>
#components-pagination-demo-mini .minigui-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
```
