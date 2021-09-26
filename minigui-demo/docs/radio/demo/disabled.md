<cn>
#### 不可用
Radio 不可用。
</cn>

<us>
#### disabled
Radio unavailable.
</us>

```vue
<template>
  <div>
    <m-radio :default-checked="false" :disabled="disabled">
      Disabled
    </m-radio>
    <br />
    <m-radio default-checked :disabled="disabled">
      Disabled
    </m-radio>
    <div :style="{ marginTop: 20 }">
      <m-button type="primary" @click="toggleDisabled">
        Toggle disabled
      </m-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: true,
    };
  },
  methods: {
    toggleDisabled() {
      this.disabled = !this.disabled;
    },
  },
};
</script>
```
