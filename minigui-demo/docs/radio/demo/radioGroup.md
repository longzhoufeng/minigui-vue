<cn>
#### 单选组合
一组互斥的 Radio 配合使用。
</cn>

<us>
#### Radio Group
A group of radio components.
</us>

```vue
<template>
  <div>
    <m-radio-group v-model="value" @change="onChange">
      <m-radio :value="1">
        A
      </m-radio>
      <m-radio :value="2">
        B
      </m-radio>
      <m-radio :value="3">
        C
      </m-radio>
      <m-radio :value="4">
        D
      </m-radio>
    </m-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
    },
  },
};
</script>
```
