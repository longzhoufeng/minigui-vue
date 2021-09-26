<cn>
#### 可点击
设置 `@change` 后，Steps 变为可点击状态。
</cn>

<us>
#### Clickable
Setting `@change` makes Steps clickable.
</us>

```vue
<template>
  <div>
    <m-steps :current="current" @change="onChange">
      <m-step title="Step 1" description="This is a description." />
      <m-step title="Step 2" description="This is a description." />
      <m-step title="Step 3" description="This is a description." />
    </m-steps>
    <m-divider />
    <m-steps v-model="current" direction="vertical">
      <m-step title="Step 1" description="This is a description." />
      <m-step title="Step 2" description="This is a description." />
      <m-step title="Step 3" description="This is a description." />
    </m-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(current) {
      console.log('onChange:', current);
      this.current = current;
    },
  },
};
</script>
```
