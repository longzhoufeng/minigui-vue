<cn>
#### 受控的checkbox
联动checkbox
</cn>

<us>
#### Controlled Checkbox
Communicated with other components
</us>

```vue
<template>
  <div>
    <p :style="{ marginBottom: '20px' }">
      <m-checkbox :checked="checked" :disabled="disabled" @change="onChange">
        {{ label }}
      </m-checkbox>
    </p>
    <p>
      <m-button type="primary" size="small" @click="toggleChecked">
        {{ !checked ? 'Check' : 'Uncheck' }}
      </m-button>
      <m-button :style="{ marginLeft: '10px' }" type="primary" size="small" @click="toggleDisable">
        {{ !disabled ? 'Disable' : 'Enable' }}
      </m-button>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      disabled: false,
    };
  },
  computed: {
    label() {
      const { checked, disabled } = this;
      return `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;
    },
  },
  methods: {
    toggleChecked() {
      this.checked = !this.checked;
    },
    toggleDisable() {
      this.disabled = !this.disabled;
    },
    onChange(e) {
      this.checked = e.target.checked;
    },
  },
};
</script>
```
