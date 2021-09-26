<cn>
#### 后缀图标
基本使用。
</cn>

<us>
#### Suffix
Basic Usage
</us>

```vue
<template>
  <div>
    <m-select default-value="lucy" style="width: 120px" @change="handleChange">
      <m-icon slot="suffixIcon" type="smile" />
      <m-select-option value="jack">
        Jack
      </m-select-option>
      <m-select-option value="lucy">
        Lucy
      </m-select-option>
      <m-select-option value="disabled" disabled>
        Disabled
      </m-select-option>
      <m-select-option value="Yiminghe">
        yiminghe
      </m-select-option>
    </m-select>
    <m-select default-value="lucy" style="width: 120px" disabled>
      <m-icon slot="suffixIcon" type="meh" />
      <m-select-option value="lucy">
        Lucy
      </m-select-option>
    </m-select>
  </div>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
```
