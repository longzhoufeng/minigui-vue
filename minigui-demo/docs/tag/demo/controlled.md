<cn>
#### 控制关闭状态
通过 `visible` 属性控制关闭状态。
</cn>

<us>
#### Controlled
By using the `visible` prop, you can control the close state of Tag.
</us>

```vue
<template>
  <div>
    <m-tag v-model="visible" closable>
      Movies
    </m-tag>
    <br />
    <m-button size="small" @click="visible = !visible">
      Toggle
    </m-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>
```
