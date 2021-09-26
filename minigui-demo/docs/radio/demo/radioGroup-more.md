<cn>
#### RadioGroup 垂直
垂直的 RadioGroup，配合更多输入框选项。
</cn>

<us>
#### Vertical RadioGroup
Vertical RadioGroup, with more radios.
</us>

```vue
<template>
  <m-radio-group v-model="value" @change="onChange">
    <m-radio :style="radioStyle" :value="1">
      Option A
    </m-radio>
    <m-radio :style="radioStyle" :value="2">
      Option B
    </m-radio>
    <m-radio :style="radioStyle" :value="3">
      Option C
    </m-radio>
    <m-radio :style="radioStyle" :value="4">
      More...
      <m-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
    </m-radio>
  </m-radio-group>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
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
