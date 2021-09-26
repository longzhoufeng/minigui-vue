<cn>
#### 基本用法
基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `close` 两个事件。
</cn>

<us>
#### basic Usage
Usage of basic Tag, and it could be closable by set `closable` property. Closable Tag supports `close` events.
</us>

```vue
<template>
  <div>
    <m-tag>Tag 1</m-tag>
    <m-tag><a href="https://github.com/longzhoufeng/minigui-vue">Link</a></m-tag>
    <m-tag closable @close="log">
      Tag 2
    </m-tag>
    <m-tag closable @close="preventDefault">
      Prevent Default
    </m-tag>
  </div>
</template>
<script>
export default {
  methods: {
    log(e) {
      console.log(e);
    },
    preventDefault(e) {
      e.preventDefault();
      console.log('Clicked! But prevent default.');
    },
  },
};
</script>
```
